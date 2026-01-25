#!/usr/bin/env python3
"""
YouTube Shorts Batch Uploader for Bitcoin for Institutions

Batch uploads shorts to YouTube using the YouTube Data API.

Requirements:
    pip install google-api-python-client google-auth-httplib2 google-auth-oauthlib

Setup:
    1. Create a project at https://console.developers.google.com/
    2. Enable YouTube Data API v3
    3. Create OAuth 2.0 credentials (Desktop application)
    4. Download credentials as client_secrets.json to credentials/

Usage:
    python shorts_uploader.py [--episode N] [--dry-run]

Output:
    Uploads videos to YouTube and logs URLs to upload_log.json
"""

import os
import json
import time
import argparse
from pathlib import Path
from datetime import datetime
from typing import Optional, Dict, List
import pickle

# Google API imports (install with: pip install google-api-python-client google-auth-oauthlib)
try:
    from googleapiclient.discovery import build
    from googleapiclient.http import MediaFileUpload
    from google_auth_oauthlib.flow import InstalledAppFlow
    from google.auth.transport.requests import Request
    GOOGLE_API_AVAILABLE = True
except ImportError:
    GOOGLE_API_AVAILABLE = False

# Configuration
BASE_DIR = Path(__file__).parent.parent
CREDENTIALS_DIR = BASE_DIR / "credentials"
SHORTS_DIR = BASE_DIR / "output" / "shorts"
METADATA_DIR = SHORTS_DIR / "metadata"

# OAuth scopes needed
SCOPES = ['https://www.googleapis.com/auth/youtube.upload']


def get_authenticated_service():
    """Get authenticated YouTube service"""
    if not GOOGLE_API_AVAILABLE:
        raise ImportError(
            "Google API libraries not installed. Run:\n"
            "pip install google-api-python-client google-auth-httplib2 google-auth-oauthlib"
        )

    credentials = None
    token_path = CREDENTIALS_DIR / "token.pickle"
    client_secrets_path = CREDENTIALS_DIR / "client_secrets.json"

    # Load existing credentials
    if token_path.exists():
        with open(token_path, 'rb') as token:
            credentials = pickle.load(token)

    # Refresh or get new credentials
    if not credentials or not credentials.valid:
        if credentials and credentials.expired and credentials.refresh_token:
            credentials.refresh(Request())
        else:
            if not client_secrets_path.exists():
                raise FileNotFoundError(
                    f"Client secrets file not found at {client_secrets_path}\n"
                    "Download OAuth 2.0 credentials from Google Cloud Console."
                )

            flow = InstalledAppFlow.from_client_secrets_file(
                str(client_secrets_path), SCOPES
            )
            credentials = flow.run_local_server(port=8080)

        # Save credentials
        with open(token_path, 'wb') as token:
            pickle.dump(credentials, token)

    return build('youtube', 'v3', credentials=credentials)


def load_metadata(episode: int, clip: int) -> Optional[Dict]:
    """Load metadata for a specific short"""
    metadata_file = METADATA_DIR / f"ep{episode:02d}_short_{clip:02d}_metadata.json"

    if not metadata_file.exists():
        return None

    with open(metadata_file, 'r') as f:
        return json.load(f)


def upload_video(youtube, video_file: Path, metadata: Dict, dry_run: bool = False) -> Optional[str]:
    """Upload a video to YouTube"""
    if dry_run:
        print(f"  [DRY RUN] Would upload: {video_file.name}")
        print(f"  Title: {metadata['title'][:50]}...")
        return "DRY_RUN_VIDEO_ID"

    if not video_file.exists():
        print(f"  ⚠️ Video file not found: {video_file}")
        return None

    body = {
        'snippet': {
            'title': metadata['title'],
            'description': metadata['description'],
            'tags': metadata.get('tags', []),
            'categoryId': '27',  # Education
        },
        'status': {
            'privacyStatus': 'public',  # or 'private', 'unlisted'
            'selfDeclaredMadeForKids': False,
        }
    }

    media = MediaFileUpload(
        str(video_file),
        mimetype='video/mp4',
        resumable=True
    )

    request = youtube.videos().insert(
        part='snippet,status',
        body=body,
        media_body=media
    )

    response = None
    while response is None:
        status, response = request.next_chunk()
        if status:
            print(f"  Uploading... {int(status.progress() * 100)}%")

    video_id = response['id']
    print(f"  ✅ Uploaded: https://youtube.com/shorts/{video_id}")

    return video_id


def load_upload_log() -> Dict:
    """Load existing upload log"""
    log_path = SHORTS_DIR / "upload_log.json"
    if log_path.exists():
        with open(log_path, 'r') as f:
            return json.load(f)
    return {"uploads": [], "last_updated": None}


def save_upload_log(log: Dict):
    """Save upload log"""
    log_path = SHORTS_DIR / "upload_log.json"
    log["last_updated"] = datetime.now().isoformat()
    with open(log_path, 'w') as f:
        json.dump(log, f, indent=2)


def main():
    parser = argparse.ArgumentParser(description='Upload YouTube Shorts for BFI')
    parser.add_argument('--episode', '-e', type=int, help='Upload only this episode')
    parser.add_argument('--dry-run', '-n', action='store_true', help='Show what would be uploaded')
    parser.add_argument('--delay', '-d', type=int, default=30, help='Delay between uploads (seconds)')
    args = parser.parse_args()

    print("=" * 60)
    print("YouTube Shorts Uploader for Bitcoin for Institutions")
    print("=" * 60)

    if not args.dry_run:
        if not GOOGLE_API_AVAILABLE:
            print("\n❌ Google API libraries not installed.")
            print("Run: pip install google-api-python-client google-auth-oauthlib")
            return

        print("\n🔐 Authenticating with YouTube...")
        try:
            youtube = get_authenticated_service()
            print("✅ Authenticated successfully")
        except Exception as e:
            print(f"❌ Authentication failed: {e}")
            return
    else:
        youtube = None
        print("\n🔍 Running in dry-run mode (no uploads)")

    # Find all shorts to upload
    shorts_to_upload = []

    if METADATA_DIR.exists():
        for metadata_file in sorted(METADATA_DIR.glob("ep*_short_*_metadata.json")):
            with open(metadata_file, 'r') as f:
                metadata = json.load(f)

            ep = metadata['episode']
            clip = metadata['clip']

            if args.episode and ep != args.episode:
                continue

            video_file = SHORTS_DIR / f"ep{ep:02d}_short_{clip:02d}.mp4"
            shorts_to_upload.append((ep, clip, video_file, metadata))

    if not shorts_to_upload:
        print("\n⚠️ No shorts found to upload.")
        print(f"   Run shorts_generator.py first to create metadata.")
        return

    print(f"\n📋 Found {len(shorts_to_upload)} shorts to upload")

    # Load existing upload log
    upload_log = load_upload_log()
    uploaded_ids = {f"ep{u['episode']:02d}_short_{u['clip']:02d}" for u in upload_log['uploads']}

    # Upload each short
    for i, (ep, clip, video_file, metadata) in enumerate(shorts_to_upload, 1):
        short_id = f"ep{ep:02d}_short_{clip:02d}"

        print(f"\n[{i}/{len(shorts_to_upload)}] Episode {ep}, Short {clip}")
        print(f"  Title: {metadata['title'][:60]}...")

        if short_id in uploaded_ids:
            print(f"  ⏭️ Already uploaded, skipping")
            continue

        video_id = upload_video(youtube, video_file, metadata, dry_run=args.dry_run)

        if video_id:
            upload_log['uploads'].append({
                'episode': ep,
                'clip': clip,
                'video_id': video_id,
                'title': metadata['title'],
                'uploaded_at': datetime.now().isoformat(),
                'url': f"https://youtube.com/shorts/{video_id}"
            })
            save_upload_log(upload_log)

        # Delay between uploads to avoid rate limiting
        if i < len(shorts_to_upload) and not args.dry_run:
            print(f"  ⏳ Waiting {args.delay}s before next upload...")
            time.sleep(args.delay)

    print("\n" + "=" * 60)
    print(f"✅ Upload complete!")
    print(f"   Total uploaded: {len(upload_log['uploads'])}")
    print(f"   Log saved to: {SHORTS_DIR / 'upload_log.json'}")


if __name__ == "__main__":
    main()
