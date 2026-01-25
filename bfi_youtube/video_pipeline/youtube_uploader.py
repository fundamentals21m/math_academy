#!/usr/bin/env python3
"""
YouTube Uploader for Bitcoin for Institutions (BFI) Video Series

Automates uploading videos to YouTube with metadata, thumbnails,
and playlist management.

Usage:
    python youtube_uploader.py --auth              # Initial OAuth2 authentication
    python youtube_uploader.py --create-playlist   # Create the BFI playlist
    python youtube_uploader.py --status            # Check upload status
    python youtube_uploader.py --episode 1         # Upload specific episode
    python youtube_uploader.py --all               # Upload all episodes
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
from config import EPISODES, OUTPUT_DIR, PROJECT_DIR, TOTAL_EPISODES

# =============================================================================
# CONFIGURATION
# =============================================================================

# OAuth2 scopes required for YouTube uploads
SCOPES = [
    'https://www.googleapis.com/auth/youtube',
    'https://www.googleapis.com/auth/youtube.force-ssl'
]

# Paths
CREDENTIALS_DIR = PROJECT_DIR / "credentials"
CLIENT_SECRETS_FILE = CREDENTIALS_DIR / "client_secrets.json"
TOKEN_FILE = CREDENTIALS_DIR / "token.json"
UPLOAD_STATE_FILE = PROJECT_DIR / "video_pipeline" / "upload_state.json"

# YouTube metadata
YOUTUBE_METADATA_DIR = PROJECT_DIR / "youtube_metadata"
THUMBNAILS_DIR = YOUTUBE_METADATA_DIR / "thumbnails"
CAPTIONS_DIR = PROJECT_DIR / "captions"

# Video settings
PRIVACY_STATUS = "unlisted"  # unlisted for review before publishing
MADE_FOR_KIDS = False
CATEGORY_ID = "27"  # Education
LANGUAGE = "en"

# Default tags for all videos
DEFAULT_TAGS = [
    "Bitcoin", "BTC", "Institutions", "Institutional Bitcoin",
    "Bitcoin Treasury", "Corporate Bitcoin", "Bitcoin Strategy",
    "Hard Money", "Digital Assets", "Bitcoin Education"
]

# =============================================================================
# PLAYLIST CONFIGURATION
# =============================================================================

PLAYLIST_TITLE = "Bitcoin for Institutions"

PLAYLIST_DESCRIPTION = """A 15-episode video series exploring how institutions can understand and integrate Bitcoin.

Based on the book and course by Brian Hirschfield.

📚 BUY THE BOOK
Amazon: https://www.amazon.com/Bitcoin-Institutions-Brian-Hirschfield/dp/B0FCZHXFGS/
Buy with Bitcoin: https://zeuspay.com/btc-for-institutions

🎓 TAKE THE FREE COURSE
https://bfi-liart.vercel.app/

SERIES OVERVIEW

Part 1: Bitcoin is for Individuals (Episodes 1-7)
Understanding why individuals value Bitcoin and how this creates the foundation for institutional adoption.

Part 2: Individuals Run Institutions (Episodes 8-9)
How individual conviction drives institutional decision-making, featuring Strategy and BlackRock case studies.

Part 3: Institutional Bitcoin (Episodes 10-15)
Practical frameworks for institutional Bitcoin integration: deferred compensation, ETFs, treasury management, structured credit, and pensions.

#Bitcoin #BitcoinForInstitutions #InstitutionalBitcoin #BitcoinEducation #HardMoney #BitcoinTreasury"""


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
    UPLOAD_STATE_FILE.parent.mkdir(parents=True, exist_ok=True)
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
    # PLAYLIST OPERATIONS
    # =========================================================================

    def create_playlist(self, title: str = None, description: str = None,
                        privacy: str = "public") -> str:
        """
        Create a new playlist.
        Returns the playlist ID.
        """
        if not self.youtube:
            raise RuntimeError("Not authenticated. Call authenticate() first.")

        title = title or PLAYLIST_TITLE
        description = description or PLAYLIST_DESCRIPTION

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
        log(f"Created playlist: {title}")
        log(f"Playlist ID: {playlist_id}")
        log(f"URL: https://www.youtube.com/playlist?list={playlist_id}")

        # Save to state
        self.upload_state["playlist_id"] = playlist_id
        save_upload_state(self.upload_state)

        return playlist_id

    def get_or_create_playlist(self) -> str:
        """
        Find existing playlist by title or create a new one.
        Returns the playlist ID.
        """
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
                if playlist['snippet']['title'] == PLAYLIST_TITLE:
                    playlist_id = playlist['id']
                    log(f"Found existing playlist: {PLAYLIST_TITLE} (ID: {playlist_id})")
                    self.upload_state["playlist_id"] = playlist_id
                    save_upload_state(self.upload_state)
                    return playlist_id
        except HttpError as e:
            log(f"Error searching playlists: {e}", "WARNING")

        # Create new playlist
        return self.create_playlist()

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
    # VIDEO OPERATIONS
    # =========================================================================

    def get_episode_metadata(self, episode_num: int) -> dict:
        """Get complete metadata for an episode."""
        ep_data = EPISODES.get(episode_num)
        if not ep_data:
            raise ValueError(f"Episode {episode_num} not found in config.py")

        # Build paths
        ep_str = f"{episode_num:02d}"
        video_dir = OUTPUT_DIR / f"episode_{ep_str}_video"

        # Find video file
        video_path = None
        for f in video_dir.glob("*.mp4") if video_dir.exists() else []:
            video_path = f
            break

        thumbnail_path = THUMBNAILS_DIR / f"ep{ep_str}_thumbnail.png"
        caption_path = CAPTIONS_DIR / f"episode_{ep_str}.srt"

        # Build title
        title = f"Bitcoin for Institutions Ep {episode_num}: {ep_data['title']}"

        # Build description
        part_info = f"Part {ep_data['part']}: {ep_data['part_name']}"
        description = f"""Episode {episode_num} of {TOTAL_EPISODES} | {part_info}

{ep_data['title']}

📚 BUY THE BOOK
Amazon: https://www.amazon.com/Bitcoin-Institutions-Brian-Hirschfield/dp/B0FCZHXFGS/
Buy with Bitcoin: https://zeuspay.com/btc-for-institutions

🎓 TAKE THE FREE COURSE
https://bfi-liart.vercel.app/

#Bitcoin #BitcoinForInstitutions #InstitutionalBitcoin #BitcoinEducation"""

        return {
            "episode_num": episode_num,
            "title": title,
            "description": description,
            "video_path": video_path,
            "thumbnail_path": thumbnail_path if thumbnail_path.exists() else None,
            "caption_path": caption_path if caption_path.exists() else None,
            "tags": DEFAULT_TAGS.copy(),
            "part": ep_data.get("part"),
            "part_name": ep_data.get("part_name"),
        }

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

        print()
        video_id = response['id']
        log(f"Upload complete! Video ID: {video_id}")
        log(f"URL: https://www.youtube.com/watch?v={video_id}")

        return video_id

    def set_thumbnail(self, video_id: str, thumbnail_path: Path) -> bool:
        """Set custom thumbnail for a video."""
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

    def upload_episode(self, episode_num: int, privacy: str = None) -> str:
        """
        Upload a single episode with metadata and add to playlist.
        Returns video_id on success.
        """
        metadata = self.get_episode_metadata(episode_num)

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

        # Set thumbnail if available
        if metadata['thumbnail_path']:
            self.set_thumbnail(video_id, metadata['thumbnail_path'])

        # Upload captions if available
        if metadata['caption_path']:
            self.upload_captions(video_id, metadata['caption_path'])

        # Add to playlist
        playlist_id = self.get_or_create_playlist()
        self.add_to_playlist(playlist_id, video_id, position=episode_num - 1)

        # Save state
        self.upload_state["uploaded_episodes"][str(episode_num)] = {
            "video_id": video_id,
            "uploaded_at": datetime.now().isoformat()
        }
        save_upload_state(self.upload_state)

        return video_id

    def show_status(self):
        """Display upload status overview."""
        log("\n" + "=" * 60)
        log("BFI YOUTUBE UPLOAD STATUS")
        log("=" * 60)

        auth_status = "Yes" if self.youtube else "No (run --auth first)"
        log(f"Authenticated: {auth_status}")

        playlist_id = self.upload_state.get("playlist_id")
        if playlist_id:
            log(f"Playlist ID: {playlist_id}")
            log(f"Playlist URL: https://www.youtube.com/playlist?list={playlist_id}")
        else:
            log("Playlist: Not created yet (run --create-playlist)")

        uploaded = self.upload_state.get("uploaded_episodes", {})
        log(f"\nEpisodes uploaded: {len(uploaded)}/{TOTAL_EPISODES}")

        log("\nEpisode Status:")
        for ep_num in range(1, TOTAL_EPISODES + 1):
            try:
                meta = self.get_episode_metadata(ep_num)
                video = "OK" if meta['video_path'] else "--"
                thumb = "OK" if meta['thumbnail_path'] else "--"
                captions = "OK" if meta['caption_path'] else "--"

                ep_state = uploaded.get(str(ep_num))
                if ep_state:
                    status_icon = "UPLOADED"
                    vid_id = ep_state.get("video_id", "")[:11]
                else:
                    status_icon = "PENDING"
                    vid_id = ""

                log(f"  Ep {ep_num:2d}: [{status_icon:8}] video={video:2} thumb={thumb:2} captions={captions:2} {vid_id}")
            except ValueError:
                log(f"  Ep {ep_num:2d}: [--] NOT IN CONFIG")

        log("\n" + "=" * 60)


# =============================================================================
# COMMAND LINE INTERFACE
# =============================================================================

def main():
    parser = argparse.ArgumentParser(
        description="Upload Bitcoin for Institutions videos to YouTube",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  %(prog)s --auth              Authenticate with YouTube
  %(prog)s --create-playlist   Create the BFI playlist
  %(prog)s --status            Show upload status
  %(prog)s --episode 1         Upload episode 1
  %(prog)s --all               Upload all episodes
        """
    )

    parser.add_argument('--auth', action='store_true',
                        help='Authenticate with YouTube (required first time)')
    parser.add_argument('--create-playlist', action='store_true',
                        help='Create the Bitcoin for Institutions playlist')
    parser.add_argument('--status', action='store_true',
                        help='Show upload status overview')
    parser.add_argument('--episode', type=int, metavar='N',
                        help='Upload specific episode number')
    parser.add_argument('--all', action='store_true',
                        help='Upload all episodes')
    parser.add_argument('--privacy', choices=['public', 'unlisted', 'private'],
                        default=None,
                        help='Privacy status for uploads (default: unlisted)')
    parser.add_argument('--update-assets', type=int, metavar='N',
                        help='Update thumbnail and captions for existing episode')

    args = parser.parse_args()

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
    if args.create_playlist:
        playlist_id = uploader.create_playlist()
        log(f"\nPlaylist created successfully!")
        log(f"URL: https://www.youtube.com/playlist?list={playlist_id}")

    elif args.status:
        uploader.show_status()

    elif args.episode:
        video_id = uploader.upload_episode(args.episode, privacy=args.privacy)
        if video_id:
            log(f"Episode {args.episode} uploaded: https://www.youtube.com/watch?v={video_id}")

    elif args.update_assets:
        ep_num = args.update_assets
        ep_state = uploader.upload_state.get("uploaded_episodes", {}).get(str(ep_num))
        if not ep_state:
            log(f"Episode {ep_num} not found in upload state. Upload it first.", "ERROR")
            sys.exit(1)

        video_id = ep_state.get("video_id")
        metadata = uploader.get_episode_metadata(ep_num)

        log(f"Updating assets for Episode {ep_num} (video ID: {video_id})")

        # Update thumbnail
        if metadata['thumbnail_path']:
            uploader.set_thumbnail(video_id, metadata['thumbnail_path'])
        else:
            log("No thumbnail found", "WARNING")

        # Upload captions
        if metadata['caption_path']:
            uploader.upload_captions(video_id, metadata['caption_path'])
        else:
            log("No captions found", "WARNING")

        log(f"Assets updated for Episode {ep_num}")
        log(f"URL: https://www.youtube.com/watch?v={video_id}")

    elif args.all:
        for ep_num in range(1, TOTAL_EPISODES + 1):
            log(f"\n{'='*60}")
            log(f"Episode {ep_num}/{TOTAL_EPISODES}")
            log(f"{'='*60}")
            try:
                video_id = uploader.upload_episode(ep_num, privacy=args.privacy)
                if video_id:
                    log(f"Success: https://www.youtube.com/watch?v={video_id}")
            except Exception as e:
                log(f"Failed: {e}", "ERROR")

            if ep_num < TOTAL_EPISODES:
                log("Waiting 10 seconds...")
                time.sleep(10)

    else:
        parser.print_help()


if __name__ == "__main__":
    main()
