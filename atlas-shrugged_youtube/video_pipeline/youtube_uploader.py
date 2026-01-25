#!/usr/bin/env python3
"""
YouTube Uploader for Atlas Shrugged Video Series

Automates uploading videos to YouTube with metadata, thumbnails, captions,
and playlist management.

Usage:
    python youtube_uploader.py --auth          # Initial OAuth2 authentication
    python youtube_uploader.py --status        # Check upload status
    python youtube_uploader.py --all           # Upload all missing episodes
    python youtube_uploader.py --episode 15    # Upload specific episode
    python youtube_uploader.py --range 11 20   # Upload episode range
    python youtube_uploader.py --sync-playlist # Sync playlist order
    python youtube_uploader.py --update 5      # Update existing video metadata
"""

import argparse
import json
import os
import re
import sys
import time
from pathlib import Path
from datetime import datetime

# Google API imports
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from googleapiclient.http import MediaFileUpload

# Add parent directory to path for config import
sys.path.insert(0, str(Path(__file__).parent.parent))
from config import EPISODES, OUTPUT_DIR, PROJECT_DIR

# =============================================================================
# CONFIGURATION
# =============================================================================

# OAuth2 scopes required for YouTube uploads
SCOPES = [
    'https://www.googleapis.com/auth/youtube',
    'https://www.googleapis.com/auth/youtube.force-ssl'  # Required for captions
]

# Paths
CREDENTIALS_DIR = PROJECT_DIR / "credentials"
CLIENT_SECRETS_FILE = CREDENTIALS_DIR / "client_secrets.json"
TOKEN_FILE = CREDENTIALS_DIR / "token.json"
UPLOAD_STATE_FILE = PROJECT_DIR / "video_pipeline" / "upload_state.json"

# YouTube metadata paths
YOUTUBE_METADATA_DIR = PROJECT_DIR / "youtube_metadata"
DESCRIPTIONS_FILE = YOUTUBE_METADATA_DIR / "all_descriptions.md"
THUMBNAILS_DIR = YOUTUBE_METADATA_DIR / "thumbnails"
CAPTIONS_DIR = PROJECT_DIR / "captions"

# Video settings
PRIVACY_STATUS = "unlisted"  # unlisted for review before publishing
MADE_FOR_KIDS = False
CATEGORY_ID = "27"  # Education
LANGUAGE = "en"
THUMBNAIL_VERSION = "v2"

# Default tags for all videos
DEFAULT_TAGS = [
    "Atlas Shrugged", "Ayn Rand", "Philosophy", "Objectivism",
    "Free Market", "Individualism", "Book Summary", "Literature"
]

# Playlist settings
PLAYLIST_TITLE = "Atlas Shrugged - A Magic Internet Math Offering"
PLAYLIST_DESCRIPTION = (
    "A 30-part video series exploring Ayn Rand's Atlas Shrugged, "
    "examining its themes of individualism, achievement, and the role "
    "of the mind in human civilization."
)

# Complete series video
COMPLETE_SERIES_VIDEO = OUTPUT_DIR / "Atlas_Shrugged_Complete_Series.mp4"
COMPLETE_SERIES_TITLE = "Atlas Shrugged - Complete Series (All 30 Episodes)"


# =============================================================================
# HELPER FUNCTIONS
# =============================================================================

def log(message: str, level: str = "INFO"):
    """Print a timestamped log message."""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"[{timestamp}] [{level}] {message}")


def load_upload_state() -> dict:
    """Load upload state from JSON file."""
    if UPLOAD_STATE_FILE.exists():
        with open(UPLOAD_STATE_FILE, 'r') as f:
            return json.load(f)
    return {"uploaded_episodes": {}, "playlist_id": None, "last_updated": None}


def save_upload_state(state: dict):
    """Save upload state to JSON file."""
    state["last_updated"] = datetime.now().isoformat()
    with open(UPLOAD_STATE_FILE, 'w') as f:
        json.dump(state, f, indent=2)


# =============================================================================
# YOUTUBE UPLOADER CLASS
# =============================================================================

class YouTubeUploader:
    """Handles YouTube video uploads with metadata, thumbnails, and playlists."""

    def __init__(self):
        """Initialize the uploader."""
        self.youtube = None
        self.descriptions_cache = None
        self.upload_state = load_upload_state()

    # =========================================================================
    # AUTHENTICATION
    # =========================================================================

    def authenticate(self) -> bool:
        """
        Handle OAuth2 authentication flow.

        Returns True if authentication successful.
        """
        creds = None

        # Check for existing token
        if TOKEN_FILE.exists():
            try:
                creds = Credentials.from_authorized_user_file(str(TOKEN_FILE), SCOPES)
            except Exception as e:
                log(f"Error loading token: {e}", "WARNING")
                creds = None

        # Refresh or get new credentials
        if not creds or not creds.valid:
            if creds and creds.expired and creds.refresh_token:
                try:
                    log("Refreshing expired credentials...")
                    creds.refresh(Request())
                except Exception as e:
                    log(f"Failed to refresh credentials: {e}", "WARNING")
                    creds = None

            if not creds:
                if not CLIENT_SECRETS_FILE.exists():
                    log(f"Client secrets file not found: {CLIENT_SECRETS_FILE}", "ERROR")
                    log("Please download OAuth2 credentials from Google Cloud Console", "ERROR")
                    log("and save to: credentials/client_secrets.json", "ERROR")
                    return False

                log("Starting OAuth2 flow - browser will open for authentication...")
                flow = InstalledAppFlow.from_client_secrets_file(
                    str(CLIENT_SECRETS_FILE), SCOPES
                )
                creds = flow.run_local_server(port=8080)

            # Save credentials for future use
            CREDENTIALS_DIR.mkdir(parents=True, exist_ok=True)
            with open(TOKEN_FILE, 'w') as token:
                token.write(creds.to_json())
            log("Credentials saved successfully")

        # Build YouTube API client
        self.youtube = build('youtube', 'v3', credentials=creds)
        log("YouTube API client initialized")
        return True

    # =========================================================================
    # METADATA LOADING
    # =========================================================================

    def parse_descriptions(self) -> dict:
        """
        Parse all_descriptions.md and return dict[episode_num] -> {title, description}.

        Returns cached result if already parsed.
        """
        if self.descriptions_cache:
            return self.descriptions_cache

        if not DESCRIPTIONS_FILE.exists():
            log(f"Descriptions file not found: {DESCRIPTIONS_FILE}", "ERROR")
            return {}

        with open(DESCRIPTIONS_FILE, 'r', encoding='utf-8') as f:
            content = f.read()

        # Extract series hashtags
        hashtags_match = re.search(r'## Series Hashtags\n(#[^\n]+)', content)
        series_hashtags = hashtags_match.group(1) if hashtags_match else ""

        # Parse individual episode sections
        episodes = {}
        episode_pattern = r'## EPISODE (\d+): ([^\n]+)\n\n\*\*Title:\*\* ([^\n]+)\n\n\*\*Description:\*\*\n(.*?)(?=\n---|\Z)'

        for match in re.finditer(episode_pattern, content, re.DOTALL):
            ep_num = int(match.group(1))
            chapter_title = match.group(2).strip()
            youtube_title = match.group(3).strip()
            description = match.group(4).strip()

            # Append series hashtags to description if not already present
            if series_hashtags and series_hashtags not in description:
                description = f"{description}\n\n{series_hashtags}"

            episodes[ep_num] = {
                "chapter_title": chapter_title,
                "youtube_title": youtube_title,
                "description": description
            }

        self.descriptions_cache = episodes
        log(f"Parsed descriptions for {len(episodes)} episodes")
        return episodes

    def get_episode_metadata(self, episode_num: int) -> dict:
        """
        Get complete metadata for an episode.

        Returns dict with: title, description, video_path, thumbnail_path, caption_path
        """
        descriptions = self.parse_descriptions()
        ep_data = EPISODES.get(episode_num)
        desc_data = descriptions.get(episode_num, {})

        if not ep_data:
            raise ValueError(f"Episode {episode_num} not found in config.py")

        # Build paths
        ep_str = f"{episode_num:02d}"
        video_dir = OUTPUT_DIR / f"episode_{ep_str}_video"
        video_filename = f"Episode_{ep_str}_{ep_data['title'].replace(' ', '_')}.mp4"
        video_path = video_dir / video_filename

        thumbnail_path = THUMBNAILS_DIR / f"ep{ep_str}_thumbnail_{THUMBNAIL_VERSION}.png"
        caption_path = CAPTIONS_DIR / f"episode_{ep_str}_full.srt"

        # Use parsed title or construct one
        if desc_data.get("youtube_title"):
            title = desc_data["youtube_title"]
        else:
            title = f"Atlas Shrugged Ep {episode_num}: {ep_data['title']}"

        # Use parsed description or construct placeholder
        if desc_data.get("description"):
            description = desc_data["description"]
        else:
            description = f"Episode {episode_num} of 30 | Atlas Shrugged Series\n\n{' '.join(DEFAULT_TAGS)}"

        return {
            "episode_num": episode_num,
            "title": title,
            "description": description,
            "video_path": video_path if video_path.exists() else None,
            "thumbnail_path": thumbnail_path if thumbnail_path.exists() else None,
            "caption_path": caption_path if caption_path.exists() else None,
            "tags": DEFAULT_TAGS.copy(),
            "part": ep_data.get("part"),
            "part_name": ep_data.get("part_name"),
            "chapter_title": ep_data.get("title")
        }

    # =========================================================================
    # UPLOAD OPERATIONS
    # =========================================================================

    def upload_video(self, video_path: Path, title: str, description: str,
                     tags: list = None, privacy: str = None) -> str:
        """
        Upload a video to YouTube.

        Returns the video ID on success.
        """
        if not self.youtube:
            raise RuntimeError("Not authenticated. Call authenticate() first.")

        if not video_path.exists():
            raise FileNotFoundError(f"Video file not found: {video_path}")

        privacy = privacy or PRIVACY_STATUS
        tags = tags or DEFAULT_TAGS

        body = {
            'snippet': {
                'title': title,
                'description': description,
                'tags': tags,
                'categoryId': CATEGORY_ID,
                'defaultLanguage': LANGUAGE,
                'defaultAudioLanguage': LANGUAGE,
            },
            'status': {
                'privacyStatus': privacy,
                'selfDeclaredMadeForKids': MADE_FOR_KIDS,
            }
        }

        # Create MediaFileUpload object for resumable upload
        media = MediaFileUpload(
            str(video_path),
            mimetype='video/mp4',
            resumable=True,
            chunksize=1024*1024*10  # 10MB chunks
        )

        log(f"Starting upload: {title}")
        log(f"Video file: {video_path} ({video_path.stat().st_size / (1024*1024):.1f} MB)")

        request = self.youtube.videos().insert(
            part='snippet,status',
            body=body,
            media_body=media
        )

        response = None
        while response is None:
            try:
                status, response = request.next_chunk()
                if status:
                    progress = int(status.progress() * 100)
                    print(f"\rUpload progress: {progress}%", end='', flush=True)
            except HttpError as e:
                if e.resp.status in [500, 502, 503, 504]:
                    log(f"Server error, retrying: {e}", "WARNING")
                    time.sleep(5)
                    continue
                raise

        print()  # New line after progress
        video_id = response['id']
        log(f"Upload complete! Video ID: {video_id}")
        log(f"URL: https://www.youtube.com/watch?v={video_id}")

        return video_id

    def set_thumbnail(self, video_id: str, thumbnail_path: Path) -> bool:
        """
        Set custom thumbnail for a video.

        Note: Requires verified YouTube account.
        Returns True on success.
        """
        if not self.youtube:
            raise RuntimeError("Not authenticated. Call authenticate() first.")

        if not thumbnail_path.exists():
            log(f"Thumbnail not found: {thumbnail_path}", "WARNING")
            return False

        try:
            media = MediaFileUpload(str(thumbnail_path), mimetype='image/png')
            self.youtube.thumbnails().set(
                videoId=video_id,
                media_body=media
            ).execute()
            log(f"Thumbnail set successfully for video {video_id}")
            return True
        except HttpError as e:
            if 'quotaExceeded' in str(e):
                log("Quota exceeded for thumbnail upload", "WARNING")
            elif 'forbidden' in str(e).lower():
                log("Thumbnail upload requires verified account", "WARNING")
            else:
                log(f"Failed to set thumbnail: {e}", "ERROR")
            return False

    def upload_captions(self, video_id: str, srt_path: Path,
                        language: str = "en", name: str = "English") -> bool:
        """
        Upload SRT captions to a video.

        Returns True on success.
        """
        if not self.youtube:
            raise RuntimeError("Not authenticated. Call authenticate() first.")

        if not srt_path.exists():
            log(f"Caption file not found: {srt_path}", "WARNING")
            return False

        try:
            body = {
                'snippet': {
                    'videoId': video_id,
                    'language': language,
                    'name': name,
                    'isDraft': False
                }
            }

            media = MediaFileUpload(str(srt_path), mimetype='application/x-subrip')
            self.youtube.captions().insert(
                part='snippet',
                body=body,
                media_body=media
            ).execute()
            log(f"Captions uploaded successfully for video {video_id}")
            return True
        except HttpError as e:
            log(f"Failed to upload captions: {e}", "ERROR")
            return False

    # =========================================================================
    # PLAYLIST OPERATIONS
    # =========================================================================

    def create_playlist(self, title: str, description: str, privacy: str = "public") -> str:
        """
        Create a new playlist.

        Returns the playlist ID.
        """
        if not self.youtube:
            raise RuntimeError("Not authenticated. Call authenticate() first.")

        body = {
            'snippet': {
                'title': title,
                'description': description,
                'defaultLanguage': LANGUAGE
            },
            'status': {
                'privacyStatus': privacy
            }
        }

        response = self.youtube.playlists().insert(
            part='snippet,status',
            body=body
        ).execute()

        playlist_id = response['id']
        log(f"Created playlist: {title} (ID: {playlist_id})")
        return playlist_id

    def get_or_create_playlist(self, title: str = None,
                                description: str = None) -> str:
        """
        Find existing playlist by title or create a new one.

        Returns the playlist ID.
        """
        title = title or PLAYLIST_TITLE
        description = description or PLAYLIST_DESCRIPTION

        # Check upload state first
        if self.upload_state.get("playlist_id"):
            try:
                # Verify playlist still exists
                self.youtube.playlists().list(
                    part='snippet',
                    id=self.upload_state["playlist_id"]
                ).execute()
                log(f"Using cached playlist ID: {self.upload_state['playlist_id']}")
                return self.upload_state["playlist_id"]
            except HttpError:
                pass

        # Search for existing playlist
        try:
            response = self.youtube.playlists().list(
                part='snippet',
                mine=True,
                maxResults=50
            ).execute()

            for playlist in response.get('items', []):
                if playlist['snippet']['title'] == title:
                    playlist_id = playlist['id']
                    log(f"Found existing playlist: {title} (ID: {playlist_id})")
                    self.upload_state["playlist_id"] = playlist_id
                    save_upload_state(self.upload_state)
                    return playlist_id
        except HttpError as e:
            log(f"Error searching playlists: {e}", "WARNING")

        # Create new playlist
        playlist_id = self.create_playlist(title, description)
        self.upload_state["playlist_id"] = playlist_id
        save_upload_state(self.upload_state)
        return playlist_id

    def add_to_playlist(self, playlist_id: str, video_id: str,
                        position: int = None) -> bool:
        """
        Add a video to a playlist at a specific position.

        Returns True on success.
        """
        if not self.youtube:
            raise RuntimeError("Not authenticated. Call authenticate() first.")

        try:
            body = {
                'snippet': {
                    'playlistId': playlist_id,
                    'resourceId': {
                        'kind': 'youtube#video',
                        'videoId': video_id
                    }
                }
            }

            if position is not None:
                body['snippet']['position'] = position

            self.youtube.playlistItems().insert(
                part='snippet',
                body=body
            ).execute()
            log(f"Added video {video_id} to playlist at position {position}")
            return True
        except HttpError as e:
            if 'duplicate' in str(e).lower():
                log(f"Video {video_id} already in playlist", "INFO")
                return True
            log(f"Failed to add to playlist: {e}", "ERROR")
            return False

    # =========================================================================
    # CHANNEL QUERY OPERATIONS
    # =========================================================================

    def list_channel_videos(self) -> list:
        """
        Get all videos from the authenticated user's channel.

        Returns list of video objects with id, title, publishedAt.
        """
        if not self.youtube:
            raise RuntimeError("Not authenticated. Call authenticate() first.")

        videos = []
        next_page_token = None

        try:
            while True:
                # Get channel's uploads playlist
                channels_response = self.youtube.channels().list(
                    part='contentDetails',
                    mine=True
                ).execute()

                if not channels_response.get('items'):
                    log("No channel found for authenticated user", "WARNING")
                    return videos

                uploads_playlist_id = channels_response['items'][0]['contentDetails']['relatedPlaylists']['uploads']

                # Get videos from uploads playlist
                playlist_response = self.youtube.playlistItems().list(
                    part='snippet',
                    playlistId=uploads_playlist_id,
                    maxResults=50,
                    pageToken=next_page_token
                ).execute()

                for item in playlist_response.get('items', []):
                    videos.append({
                        'id': item['snippet']['resourceId']['videoId'],
                        'title': item['snippet']['title'],
                        'publishedAt': item['snippet']['publishedAt']
                    })

                next_page_token = playlist_response.get('nextPageToken')
                if not next_page_token:
                    break

        except HttpError as e:
            log(f"Error listing channel videos: {e}", "ERROR")

        log(f"Found {len(videos)} videos on channel")
        return videos

    def find_existing_episodes(self) -> dict:
        """
        Match channel videos to episodes by title pattern.

        Returns dict[episode_num] -> video_id for found episodes.
        """
        videos = self.list_channel_videos()
        found_episodes = {}

        # Pattern matches: "Atlas Shrugged Ep X:" or "Atlas Shrugged Ep XX:"
        pattern = re.compile(r'Atlas Shrugged Ep\s*(\d+):', re.IGNORECASE)

        for video in videos:
            match = pattern.search(video['title'])
            if match:
                ep_num = int(match.group(1))
                found_episodes[ep_num] = video['id']
                log(f"Found Episode {ep_num}: {video['title']} ({video['id']})")

        return found_episodes

    def get_missing_episodes(self) -> list:
        """
        Return list of episode numbers not yet uploaded.
        """
        existing = self.find_existing_episodes()
        all_episodes = set(EPISODES.keys())
        missing = sorted(all_episodes - set(existing.keys()))
        return missing

    # =========================================================================
    # HIGH-LEVEL OPERATIONS
    # =========================================================================

    def upload_episode(self, episode_num: int, skip_existing: bool = True,
                       privacy: str = None) -> str:
        """
        Upload a single episode with all metadata, thumbnail, captions.

        Returns video_id on success, None on skip/failure.
        """
        # Check if already uploaded
        if skip_existing:
            existing = self.find_existing_episodes()
            if episode_num in existing:
                log(f"Episode {episode_num} already uploaded (ID: {existing[episode_num]}), skipping")
                return None

        # Get metadata
        try:
            metadata = self.get_episode_metadata(episode_num)
        except ValueError as e:
            log(str(e), "ERROR")
            return None

        if not metadata['video_path']:
            log(f"Video file not found for Episode {episode_num}", "ERROR")
            return None

        # Upload video
        video_id = self.upload_video(
            metadata['video_path'],
            metadata['title'],
            metadata['description'],
            metadata['tags'],
            privacy or PRIVACY_STATUS
        )

        # Set thumbnail
        if metadata['thumbnail_path']:
            self.set_thumbnail(video_id, metadata['thumbnail_path'])
        else:
            log(f"No thumbnail found for Episode {episode_num}", "WARNING")

        # Upload captions
        if metadata['caption_path']:
            self.upload_captions(video_id, metadata['caption_path'])
        else:
            log(f"No captions found for Episode {episode_num}", "INFO")

        # Add to playlist (no position - will append, then sync_playlist can reorder)
        playlist_id = self.get_or_create_playlist()
        self.add_to_playlist(playlist_id, video_id)

        # Save state
        self.upload_state["uploaded_episodes"][str(episode_num)] = {
            "video_id": video_id,
            "uploaded_at": datetime.now().isoformat()
        }
        save_upload_state(self.upload_state)

        return video_id

    def upload_all_episodes(self, start: int = 1, end: int = 30,
                            skip_existing: bool = True,
                            privacy: str = None) -> dict:
        """
        Batch upload episodes with progress tracking.

        Returns dict of results: {episode_num: video_id or error}
        """
        results = {}
        episodes_to_upload = range(start, end + 1)

        if skip_existing:
            existing = self.find_existing_episodes()
            episodes_to_upload = [e for e in episodes_to_upload if e not in existing]
            log(f"Skipping {len(existing)} already uploaded episodes")

        total = len(episodes_to_upload)
        log(f"Uploading {total} episodes...")

        for i, ep_num in enumerate(episodes_to_upload, 1):
            log(f"\n{'='*60}")
            log(f"Episode {ep_num} ({i}/{total})")
            log(f"{'='*60}")

            try:
                video_id = self.upload_episode(ep_num, skip_existing=False, privacy=privacy)
                results[ep_num] = {"status": "success", "video_id": video_id}
            except HttpError as e:
                if 'quotaExceeded' in str(e):
                    log("Daily quota exceeded. Resume tomorrow.", "ERROR")
                    results[ep_num] = {"status": "quota_exceeded"}
                    break
                else:
                    log(f"Upload failed: {e}", "ERROR")
                    results[ep_num] = {"status": "error", "error": str(e)}
            except Exception as e:
                log(f"Unexpected error: {e}", "ERROR")
                results[ep_num] = {"status": "error", "error": str(e)}

            # Rate limiting - wait between uploads
            if i < total:
                log("Waiting 10 seconds before next upload...")
                time.sleep(10)

        return results

    def sync_playlist(self) -> bool:
        """
        Ensure all existing videos are in playlist in correct order.

        Returns True if sync successful.
        """
        existing = self.find_existing_episodes()
        if not existing:
            log("No episodes found on channel to sync")
            return True

        playlist_id = self.get_or_create_playlist()
        log(f"Syncing {len(existing)} episodes to playlist...")

        for ep_num in sorted(existing.keys()):
            video_id = existing[ep_num]
            self.add_to_playlist(playlist_id, video_id, position=ep_num - 1)

        log("Playlist sync complete")
        return True

    def delete_video(self, video_id: str) -> bool:
        """
        Delete a video from YouTube.

        Returns True on success.
        """
        if not self.youtube:
            raise RuntimeError("Not authenticated. Call authenticate() first.")

        try:
            self.youtube.videos().delete(id=video_id).execute()
            log(f"Deleted video: {video_id}")
            return True
        except HttpError as e:
            log(f"Failed to delete video {video_id}: {e}", "ERROR")
            return False

    def delete_episode(self, episode_num: int) -> bool:
        """
        Delete an uploaded episode by episode number.

        Returns True on success.
        """
        existing = self.find_existing_episodes()
        if episode_num not in existing:
            log(f"Episode {episode_num} not found on channel", "WARNING")
            return False

        video_id = existing[episode_num]
        if self.delete_video(video_id):
            # Remove from upload state
            ep_key = str(episode_num)
            if ep_key in self.upload_state.get("uploaded_episodes", {}):
                del self.upload_state["uploaded_episodes"][ep_key]
                save_upload_state(self.upload_state)
            return True
        return False

    def delete_all_episodes(self, confirm: bool = False) -> dict:
        """
        Delete all uploaded episodes.

        Returns dict of results: {episode_num: success_bool}
        """
        if not confirm:
            log("Delete all requires confirm=True", "ERROR")
            return {}

        existing = self.find_existing_episodes()
        if not existing:
            log("No episodes found to delete")
            return {}

        results = {}
        log(f"Deleting {len(existing)} episodes...")

        for ep_num, video_id in sorted(existing.items()):
            log(f"Deleting Episode {ep_num} ({video_id})...")
            results[ep_num] = self.delete_video(video_id)
            time.sleep(1)  # Rate limiting

        # Clear upload state
        self.upload_state["uploaded_episodes"] = {}
        save_upload_state(self.upload_state)

        success = sum(1 for v in results.values() if v)
        log(f"Deleted {success}/{len(results)} episodes")
        return results

    def update_existing_metadata(self, episode_num: int) -> bool:
        """
        Update title, description, and thumbnail for already-uploaded video.

        Returns True on success.
        """
        existing = self.find_existing_episodes()
        if episode_num not in existing:
            log(f"Episode {episode_num} not found on channel", "ERROR")
            return False

        video_id = existing[episode_num]
        metadata = self.get_episode_metadata(episode_num)

        try:
            # Update video metadata
            body = {
                'id': video_id,
                'snippet': {
                    'title': metadata['title'],
                    'description': metadata['description'],
                    'tags': metadata['tags'],
                    'categoryId': CATEGORY_ID
                }
            }

            self.youtube.videos().update(
                part='snippet',
                body=body
            ).execute()
            log(f"Updated metadata for Episode {episode_num}")

            # Update thumbnail
            if metadata['thumbnail_path']:
                self.set_thumbnail(video_id, metadata['thumbnail_path'])

            return True
        except HttpError as e:
            log(f"Failed to update metadata: {e}", "ERROR")
            return False

    def upload_complete_series(self, privacy: str = None) -> str:
        """
        Upload the complete series video.

        Returns video_id on success.
        """
        if not COMPLETE_SERIES_VIDEO.exists():
            log(f"Complete series video not found: {COMPLETE_SERIES_VIDEO}", "ERROR")
            return None

        description = (
            "The complete Atlas Shrugged video series - all 30 episodes in one video.\n\n"
            "This comprehensive guide covers Ayn Rand's epic novel from start to finish, "
            "exploring its themes of individualism, achievement, and the role of the mind "
            "in human civilization.\n\n"
            f"{' '.join(['#' + tag.replace(' ', '') for tag in DEFAULT_TAGS])}"
        )

        video_id = self.upload_video(
            COMPLETE_SERIES_VIDEO,
            COMPLETE_SERIES_TITLE,
            description,
            DEFAULT_TAGS,
            privacy or PRIVACY_STATUS
        )

        return video_id

    def show_status(self):
        """Display upload status overview."""
        log("\n" + "=" * 60)
        log("UPLOAD STATUS")
        log("=" * 60)

        # Check authentication
        auth_status = "Yes" if self.youtube else "No (run --auth first)"
        log(f"Authenticated: {auth_status}")

        if not self.youtube:
            log("Cannot check channel status without authentication")
            return

        # Find existing episodes
        existing = self.find_existing_episodes()
        all_episodes = set(EPISODES.keys())
        uploaded = set(existing.keys())
        missing = sorted(all_episodes - uploaded)

        log(f"\nEpisodes on channel: {len(uploaded)}/30")

        if uploaded:
            log(f"Uploaded: {sorted(uploaded)}")

        if missing:
            log(f"Missing: {missing}")

        # Check asset status
        log("\nAsset Status:")
        for ep_num in sorted(EPISODES.keys()):
            try:
                meta = self.get_episode_metadata(ep_num)
                video = "OK" if meta['video_path'] else "MISSING"
                thumb = "OK" if meta['thumbnail_path'] else "MISSING"
                caption = "OK" if meta['caption_path'] else "MISSING"

                status_icon = "OK" if ep_num in uploaded else "--"
                log(f"  Ep {ep_num:2d}: [{status_icon}] video={video}, thumb={thumb}, captions={caption}")
            except ValueError:
                log(f"  Ep {ep_num:2d}: [--] NOT IN CONFIG")

        # Playlist status
        playlist_id = self.upload_state.get("playlist_id")
        if playlist_id:
            log(f"\nPlaylist ID: {playlist_id}")
            log(f"Playlist URL: https://www.youtube.com/playlist?list={playlist_id}")

        log("\n" + "=" * 60)


# =============================================================================
# COMMAND LINE INTERFACE
# =============================================================================

def main():
    parser = argparse.ArgumentParser(
        description="Upload Atlas Shrugged videos to YouTube",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  %(prog)s --auth           Authenticate with YouTube
  %(prog)s --status         Show upload status
  %(prog)s --all            Upload all missing episodes
  %(prog)s --episode 15     Upload episode 15
  %(prog)s --range 11 20    Upload episodes 11-20
  %(prog)s --sync-playlist  Sync playlist order
  %(prog)s --update 5       Update metadata for episode 5
        """
    )

    # Action arguments
    parser.add_argument('--auth', action='store_true',
                        help='Authenticate with YouTube (required first time)')
    parser.add_argument('--status', action='store_true',
                        help='Show upload status overview')
    parser.add_argument('--all', action='store_true',
                        help='Upload all missing episodes')
    parser.add_argument('--episode', type=int, metavar='N',
                        help='Upload specific episode number')
    parser.add_argument('--range', type=int, nargs=2, metavar=('START', 'END'),
                        help='Upload range of episodes')
    parser.add_argument('--complete-series', action='store_true',
                        help='Upload complete series video')
    parser.add_argument('--sync-playlist', action='store_true',
                        help='Sync all uploaded videos to playlist')
    parser.add_argument('--update', type=int, metavar='N',
                        help='Update metadata for existing episode')
    parser.add_argument('--delete', type=int, metavar='N',
                        help='Delete specific episode from YouTube')
    parser.add_argument('--delete-all', action='store_true',
                        help='Delete ALL episodes from YouTube (requires --confirm)')
    parser.add_argument('--confirm', action='store_true',
                        help='Confirm destructive operations like --delete-all')

    # Options
    parser.add_argument('--force', action='store_true',
                        help='Upload even if episode already exists')
    parser.add_argument('--privacy', choices=['public', 'unlisted', 'private'],
                        default=None,
                        help='Privacy status for uploads (default: unlisted)')

    args = parser.parse_args()

    # Create uploader
    uploader = YouTubeUploader()

    # Handle --auth
    if args.auth:
        if uploader.authenticate():
            log("Authentication successful!")
            uploader.show_status()
        else:
            log("Authentication failed!", "ERROR")
            sys.exit(1)
        return

    # All other actions require authentication
    if not uploader.authenticate():
        log("Authentication required. Run with --auth first.", "ERROR")
        sys.exit(1)

    # Handle actions
    if args.status:
        uploader.show_status()

    elif args.all:
        results = uploader.upload_all_episodes(skip_existing=not args.force,
                                                privacy=args.privacy)
        success = sum(1 for r in results.values() if r.get("status") == "success")
        log(f"\nUpload complete: {success}/{len(results)} successful")

    elif args.episode:
        video_id = uploader.upload_episode(args.episode,
                                           skip_existing=not args.force,
                                           privacy=args.privacy)
        if video_id:
            log(f"Episode {args.episode} uploaded: https://www.youtube.com/watch?v={video_id}")
        elif not args.force:
            log("Episode already exists. Use --force to upload anyway.")

    elif args.range:
        start, end = args.range
        results = uploader.upload_all_episodes(start=start, end=end,
                                               skip_existing=not args.force,
                                               privacy=args.privacy)
        success = sum(1 for r in results.values() if r.get("status") == "success")
        log(f"\nUpload complete: {success}/{len(results)} successful")

    elif args.complete_series:
        video_id = uploader.upload_complete_series(privacy=args.privacy)
        if video_id:
            log(f"Complete series uploaded: https://www.youtube.com/watch?v={video_id}")

    elif args.sync_playlist:
        uploader.sync_playlist()

    elif args.update:
        if uploader.update_existing_metadata(args.update):
            log(f"Episode {args.update} metadata updated")
        else:
            log(f"Failed to update Episode {args.update}", "ERROR")
            sys.exit(1)

    elif args.delete:
        if uploader.delete_episode(args.delete):
            log(f"Episode {args.delete} deleted")
        else:
            log(f"Failed to delete Episode {args.delete}", "ERROR")
            sys.exit(1)

    elif args.delete_all:
        if not args.confirm:
            log("DANGER: --delete-all requires --confirm flag", "ERROR")
            log("This will delete ALL uploaded videos from your channel!", "ERROR")
            sys.exit(1)

        # Double-check with user
        existing = uploader.find_existing_episodes()
        log(f"About to delete {len(existing)} videos: Episodes {sorted(existing.keys())}")
        user_input = input("Type 'DELETE ALL' to confirm: ")
        if user_input != "DELETE ALL":
            log("Aborted.")
            sys.exit(1)

        results = uploader.delete_all_episodes(confirm=True)
        success = sum(1 for v in results.values() if v)
        log(f"Deleted {success}/{len(results)} episodes")

    else:
        parser.print_help()


if __name__ == "__main__":
    main()
