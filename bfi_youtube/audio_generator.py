"""
Shared Audio Generator Module for BFI (Bitcoin for Institutions) YouTube Series

Provides the common ElevenLabs audio generation functionality used by all
episode generator scripts. Includes proper error handling and request timeouts.

Usage in episode scripts:
    from audio_generator import AudioGenerator

    sections = {
        "01_cold_open": "Script text here...",
        "02_introduction": "More text...",
    }

    generator = AudioGenerator(episode_number=1, episode_title="Introduction")
    generator.generate_all(sections)
"""

import os
import time
import logging
from pathlib import Path
from typing import Dict, Optional

import requests
from requests.exceptions import RequestException, Timeout

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# =============================================================================
# CONFIGURATION
# =============================================================================

ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech"
VOICE_ID = "TxGEqnHWrfWFTfGW9XjX"  # Josh - Corporate presenter, news anchor quality

VOICE_SETTINGS = {
    "stability": 0.65,
    "similarity_boost": 0.80,
    "style": 0.35,
    "use_speaker_boost": True
}

# Request timeout in seconds (60s for audio generation)
REQUEST_TIMEOUT = 60

# Delay between API calls to avoid rate limiting
API_DELAY = 2

# Total number of episodes in this series
TOTAL_EPISODES = 15


class AudioGenerationError(Exception):
    """Raised when audio generation fails."""
    pass


class AudioGenerator:
    """
    Generates audio files from text using ElevenLabs API.

    Handles API key management, request timeouts, error handling,
    and file output.
    """

    def __init__(
        self,
        episode_number: int,
        episode_title: str,
        voice_id: str = VOICE_ID,
        voice_settings: Optional[Dict] = None,
        output_dir: Optional[Path] = None
    ):
        """
        Initialize the audio generator.

        Args:
            episode_number: Episode number (1-15)
            episode_title: Episode title for logging
            voice_id: ElevenLabs voice ID
            voice_settings: Voice configuration dict
            output_dir: Output directory for audio files
        """
        self.episode_number = episode_number
        self.episode_title = episode_title
        self.voice_id = voice_id
        self.voice_settings = voice_settings or VOICE_SETTINGS

        # Default output directory
        if output_dir is None:
            self.output_dir = Path(f"episode_{episode_number:02d}_audio")
        else:
            self.output_dir = Path(output_dir)

        # Get API key
        self.api_key = os.environ.get('ELEVENLABS_API_KEY')

    def validate(self) -> bool:
        """Validate configuration before generating."""
        if not self.api_key:
            logger.error("ELEVENLABS_API_KEY environment variable not set")
            return False

        if self.episode_number < 1 or self.episode_number > TOTAL_EPISODES:
            logger.error(f"Invalid episode number: {self.episode_number}")
            return False

        return True

    def generate_audio(self, text: str, section_name: str) -> Optional[Path]:
        """
        Generate audio for a single section.

        Args:
            text: The script text to convert to speech
            section_name: Section identifier (e.g., "01_cold_open")

        Returns:
            Path to generated audio file, or None on failure
        """
        headers = {
            "Accept": "audio/mpeg",
            "Content-Type": "application/json",
            "xi-api-key": self.api_key
        }

        data = {
            "text": text,
            "model_id": "eleven_multilingual_v2",
            "voice_settings": self.voice_settings
        }

        url = f"{ELEVENLABS_API_URL}/{self.voice_id}"

        try:
            response = requests.post(
                url,
                json=data,
                headers=headers,
                timeout=REQUEST_TIMEOUT
            )

            if response.status_code == 200:
                output_path = self.output_dir / f"Episode_{self.episode_number:02d}_Section_{section_name}.mp3"
                with open(output_path, 'wb') as f:
                    f.write(response.content)
                logger.info(f"Generated: {output_path.name}")
                return output_path

            elif response.status_code == 401:
                raise AudioGenerationError("Invalid API key")
            elif response.status_code == 429:
                logger.warning(f"Rate limited on {section_name}, waiting 30s...")
                time.sleep(30)
                return self.generate_audio(text, section_name)  # Retry
            else:
                logger.error(f"API error for {section_name}: {response.status_code} - {response.text[:200]}")
                return None

        except Timeout:
            logger.error(f"Request timeout for {section_name} (>{REQUEST_TIMEOUT}s)")
            return None
        except RequestException as e:
            logger.error(f"Request failed for {section_name}: {e}")
            return None

    def generate_all(self, sections: Dict[str, str]) -> int:
        """
        Generate audio for all sections.

        Args:
            sections: Dict mapping section names to script text

        Returns:
            Number of successfully generated files
        """
        if not self.validate():
            return 0

        # Ensure output directory exists
        self.output_dir.mkdir(exist_ok=True)

        logger.info("=" * 70)
        logger.info(f"ElevenLabs Audio Generator - Episode {self.episode_number}")
        logger.info(f"Bitcoin for Institutions: {self.episode_title}")
        logger.info("=" * 70)

        generated_count = 0
        total = len(sections)

        for i, (section_name, text) in enumerate(sections.items(), 1):
            logger.info(f"[{i}/{total}] Processing {section_name}...")

            output_path = self.generate_audio(text, section_name)
            if output_path:
                generated_count += 1

            # Delay between requests to avoid rate limiting
            if i < total:
                time.sleep(API_DELAY)

        logger.info(f"\nGenerated: {generated_count}/{total} sections")
        return generated_count


def generate_episode_audio(
    episode_number: int,
    episode_title: str,
    sections: Dict[str, str],
    output_dir: Optional[Path] = None
) -> int:
    """
    Convenience function to generate all audio for an episode.

    Args:
        episode_number: Episode number (1-15)
        episode_title: Episode title
        sections: Dict mapping section names to script text
        output_dir: Optional output directory

    Returns:
        Number of successfully generated files
    """
    generator = AudioGenerator(
        episode_number=episode_number,
        episode_title=episode_title,
        output_dir=output_dir
    )
    return generator.generate_all(sections)
