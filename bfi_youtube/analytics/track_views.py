#!/usr/bin/env python3
"""
YouTube Analytics Tracker for Bitcoin for Institutions

Fetches weekly view data for BFI episodes using YouTube Analytics API.

Requirements:
    pip install google-api-python-client google-auth-httplib2 google-auth-oauthlib pandas

Setup:
    1. Same OAuth credentials as shorts_uploader.py
    2. Enable YouTube Analytics API in Google Cloud Console

Usage:
    python track_views.py [--channel-id CHANNEL_ID]

Output:
    bfi_youtube/analytics/weekly_report_{date}.csv
"""

import os
import json
import pickle
import argparse
from pathlib import Path
from datetime import datetime, timedelta
from typing import Dict, List, Optional

try:
    from googleapiclient.discovery import build
    from google_auth_oauthlib.flow import InstalledAppFlow
    from google.auth.transport.requests import Request
    GOOGLE_API_AVAILABLE = True
except ImportError:
    GOOGLE_API_AVAILABLE = False

try:
    import pandas as pd
    PANDAS_AVAILABLE = True
except ImportError:
    PANDAS_AVAILABLE = False

# Configuration
BASE_DIR = Path(__file__).parent.parent
CREDENTIALS_DIR = BASE_DIR / "credentials"
OUTPUT_DIR = Path(__file__).parent

# OAuth scopes for YouTube Analytics
SCOPES = [
    'https://www.googleapis.com/auth/youtube.readonly',
    'https://www.googleapis.com/auth/yt-analytics.readonly',
]

# BFI video IDs (update with actual IDs from your YouTube channel)
# Format: episode_number -> video_id
BFI_VIDEO_IDS = {
    1: "VIDEO_ID_EP_01",  # Replace with actual video IDs
    2: "VIDEO_ID_EP_02",
    3: "VIDEO_ID_EP_03",
    4: "VIDEO_ID_EP_04",
    5: "VIDEO_ID_EP_05",
    6: "VIDEO_ID_EP_06",
    7: "VIDEO_ID_EP_07",
    8: "VIDEO_ID_EP_08",
    9: "VIDEO_ID_EP_09",
    10: "VIDEO_ID_EP_10",
    11: "VIDEO_ID_EP_11",
    12: "VIDEO_ID_EP_12",
    13: "VIDEO_ID_EP_13",
    14: "VIDEO_ID_EP_14",
    15: "VIDEO_ID_EP_15",
}


def get_authenticated_services():
    """Get authenticated YouTube and YouTube Analytics services"""
    if not GOOGLE_API_AVAILABLE:
        raise ImportError(
            "Google API libraries not installed. Run:\n"
            "pip install google-api-python-client google-auth-httplib2 google-auth-oauthlib"
        )

    credentials = None
    token_path = CREDENTIALS_DIR / "analytics_token.pickle"
    client_secrets_path = CREDENTIALS_DIR / "client_secrets.json"

    if token_path.exists():
        with open(token_path, 'rb') as token:
            credentials = pickle.load(token)

    if not credentials or not credentials.valid:
        if credentials and credentials.expired and credentials.refresh_token:
            credentials.refresh(Request())
        else:
            if not client_secrets_path.exists():
                raise FileNotFoundError(
                    f"Client secrets file not found at {client_secrets_path}"
                )

            flow = InstalledAppFlow.from_client_secrets_file(
                str(client_secrets_path), SCOPES
            )
            credentials = flow.run_local_server(port=8080)

        with open(token_path, 'wb') as token:
            pickle.dump(credentials, token)

    youtube = build('youtube', 'v3', credentials=credentials)
    youtube_analytics = build('youtubeAnalytics', 'v2', credentials=credentials)

    return youtube, youtube_analytics


def get_channel_id(youtube) -> str:
    """Get the authenticated user's channel ID"""
    request = youtube.channels().list(
        part='id',
        mine=True
    )
    response = request.execute()

    if response['items']:
        return response['items'][0]['id']
    raise ValueError("No channel found for authenticated user")


def get_video_stats(youtube, video_ids: List[str]) -> Dict:
    """Get current statistics for videos"""
    stats = {}

    # YouTube API allows up to 50 videos per request
    for i in range(0, len(video_ids), 50):
        batch = video_ids[i:i+50]

        request = youtube.videos().list(
            part='statistics,snippet',
            id=','.join(batch)
        )
        response = request.execute()

        for item in response.get('items', []):
            video_id = item['id']
            stats[video_id] = {
                'title': item['snippet']['title'],
                'views': int(item['statistics'].get('viewCount', 0)),
                'likes': int(item['statistics'].get('likeCount', 0)),
                'comments': int(item['statistics'].get('commentCount', 0)),
            }

    return stats


def get_analytics_report(youtube_analytics, channel_id: str, video_ids: List[str],
                         start_date: str, end_date: str) -> Dict:
    """Get analytics report for videos"""
    analytics = {}

    for video_id in video_ids:
        try:
            request = youtube_analytics.reports().query(
                ids=f'channel=={channel_id}',
                startDate=start_date,
                endDate=end_date,
                metrics='views,estimatedMinutesWatched,averageViewDuration,subscribersGained',
                dimensions='video',
                filters=f'video=={video_id}'
            )
            response = request.execute()

            if response.get('rows'):
                row = response['rows'][0]
                analytics[video_id] = {
                    'views': row[1],
                    'watch_time_minutes': row[2],
                    'avg_view_duration': row[3],
                    'subscribers_gained': row[4],
                }
            else:
                analytics[video_id] = {
                    'views': 0,
                    'watch_time_minutes': 0,
                    'avg_view_duration': 0,
                    'subscribers_gained': 0,
                }
        except Exception as e:
            print(f"  Warning: Could not get analytics for {video_id}: {e}")
            analytics[video_id] = None

    return analytics


def generate_report(stats: Dict, analytics: Optional[Dict], video_id_map: Dict) -> List[Dict]:
    """Generate report data"""
    report = []

    for ep_num, video_id in video_id_map.items():
        row = {
            'episode': ep_num,
            'video_id': video_id,
        }

        if video_id in stats:
            row.update({
                'title': stats[video_id].get('title', f'Episode {ep_num}'),
                'total_views': stats[video_id].get('views', 0),
                'total_likes': stats[video_id].get('likes', 0),
                'total_comments': stats[video_id].get('comments', 0),
            })

        if analytics and video_id in analytics and analytics[video_id]:
            row.update({
                'weekly_views': analytics[video_id].get('views', 0),
                'weekly_watch_time_min': analytics[video_id].get('watch_time_minutes', 0),
                'avg_view_duration_sec': analytics[video_id].get('avg_view_duration', 0),
                'subscribers_gained': analytics[video_id].get('subscribers_gained', 0),
            })

        report.append(row)

    return report


def save_report(report: List[Dict], filename: str):
    """Save report to CSV"""
    output_path = OUTPUT_DIR / filename

    if PANDAS_AVAILABLE:
        df = pd.DataFrame(report)
        df.to_csv(output_path, index=False)
    else:
        # Fallback: simple CSV writing
        import csv
        with open(output_path, 'w', newline='') as f:
            if report:
                writer = csv.DictWriter(f, fieldnames=report[0].keys())
                writer.writeheader()
                writer.writerows(report)

    print(f"📊 Report saved: {output_path}")


def main():
    parser = argparse.ArgumentParser(description='Track YouTube analytics for BFI')
    parser.add_argument('--channel-id', help='YouTube channel ID (optional, auto-detected)')
    parser.add_argument('--days', type=int, default=7, help='Days to analyze (default: 7)')
    parser.add_argument('--offline', action='store_true', help='Generate template without API')
    args = parser.parse_args()

    print("=" * 60)
    print("YouTube Analytics Tracker for Bitcoin for Institutions")
    print("=" * 60)

    today = datetime.now()
    date_str = today.strftime('%Y-%m-%d')

    if args.offline:
        print("\n📋 Generating offline template...")

        # Generate template report with placeholder data
        template_report = []
        for ep_num in range(1, 16):
            template_report.append({
                'episode': ep_num,
                'video_id': f'VIDEO_ID_EP_{ep_num:02d}',
                'title': f'Episode {ep_num}',
                'total_views': 0,
                'total_likes': 0,
                'total_comments': 0,
                'weekly_views': 0,
                'weekly_watch_time_min': 0,
                'avg_view_duration_sec': 0,
                'subscribers_gained': 0,
            })

        save_report(template_report, f"weekly_report_{date_str}_TEMPLATE.csv")
        print("\n📝 Template created. Update BFI_VIDEO_IDS in the script with actual video IDs.")
        return

    if not GOOGLE_API_AVAILABLE:
        print("\n❌ Google API libraries not installed.")
        print("Run: pip install google-api-python-client google-auth-oauthlib")
        print("\nOr run with --offline to generate a template.")
        return

    # Authenticate
    print("\n🔐 Authenticating...")
    try:
        youtube, youtube_analytics = get_authenticated_services()
        print("✅ Authenticated")
    except Exception as e:
        print(f"❌ Authentication failed: {e}")
        return

    # Get channel ID
    channel_id = args.channel_id
    if not channel_id:
        print("\n📺 Getting channel ID...")
        channel_id = get_channel_id(youtube)
        print(f"   Channel: {channel_id}")

    # Get video IDs that are actually set
    valid_video_ids = {ep: vid for ep, vid in BFI_VIDEO_IDS.items()
                       if not vid.startswith("VIDEO_ID_")}

    if not valid_video_ids:
        print("\n⚠️ No video IDs configured!")
        print("   Update BFI_VIDEO_IDS in this script with your actual YouTube video IDs.")
        print("\n   Running with --offline to generate template...")
        args.offline = True
        return main()

    video_ids = list(valid_video_ids.values())

    # Get current stats
    print("\n📈 Fetching video statistics...")
    stats = get_video_stats(youtube, video_ids)
    print(f"   Found stats for {len(stats)} videos")

    # Get analytics for the past week
    start_date = (today - timedelta(days=args.days)).strftime('%Y-%m-%d')
    end_date = date_str

    print(f"\n📊 Fetching analytics ({start_date} to {end_date})...")
    try:
        analytics = get_analytics_report(youtube_analytics, channel_id, video_ids, start_date, end_date)
        print(f"   Got analytics for {len([a for a in analytics.values() if a])} videos")
    except Exception as e:
        print(f"   Warning: Could not fetch analytics: {e}")
        analytics = None

    # Generate report
    print("\n📋 Generating report...")
    report = generate_report(stats, analytics, valid_video_ids)

    # Save report
    filename = f"weekly_report_{date_str}.csv"
    save_report(report, filename)

    # Summary
    print("\n" + "=" * 60)
    print("SUMMARY")
    print("=" * 60)

    if PANDAS_AVAILABLE and report:
        df = pd.DataFrame(report)
        print(f"\nTotal views (all episodes): {df['total_views'].sum():,}")
        if 'weekly_views' in df.columns:
            print(f"Views this week: {df['weekly_views'].sum():,}")
        if 'subscribers_gained' in df.columns:
            print(f"Subscribers gained this week: {df['subscribers_gained'].sum():,}")

        print(f"\nTop 3 episodes by views:")
        top_eps = df.nlargest(3, 'total_views')[['episode', 'title', 'total_views']]
        for _, row in top_eps.iterrows():
            print(f"  Ep {row['episode']}: {row['total_views']:,} views - {row['title'][:40]}...")

    print(f"\n✅ Done! Report saved to: {OUTPUT_DIR / filename}")


if __name__ == "__main__":
    main()
