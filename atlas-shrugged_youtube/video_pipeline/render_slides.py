#!/usr/bin/env python3
"""Render HTML slides to PNG using Chrome headless mode via Selenium."""

import sys
import time
from pathlib import Path
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.common.exceptions import WebDriverException

# Add parent directory for config import
sys.path.insert(0, str(Path(__file__).parent.parent))

from config import EPISODE_SECTIONS, VIDEO_WIDTH, VIDEO_HEIGHT

# Paths
SCRIPT_DIR = Path(__file__).parent
SLIDES_DIR = SCRIPT_DIR / "slides"
ASSETS_DIR = SCRIPT_DIR.parent / "assets" / "generated"

# Chrome driver timeout in seconds
CHROME_TIMEOUT = 30


def create_chrome_driver(width: int = VIDEO_WIDTH, height: int = VIDEO_HEIGHT):
    """Create and configure Chrome WebDriver."""
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--disable-gpu")
    chrome_options.add_argument(f"--window-size={width},{height}")
    chrome_options.add_argument("--hide-scrollbars")
    chrome_options.add_argument("--force-device-scale-factor=1")

    driver = webdriver.Chrome(options=chrome_options)
    driver.set_page_load_timeout(CHROME_TIMEOUT)
    return driver


def render_slide(html_path: Path, output_path: Path, driver=None):
    """
    Render a single HTML file to PNG.

    Args:
        html_path: Path to HTML file
        output_path: Path for output PNG
        driver: Optional existing Chrome driver (creates new one if None)

    Returns:
        True on success, False on failure
    """
    own_driver = driver is None
    if own_driver:
        driver = create_chrome_driver()

    try:
        file_url = f"file://{html_path.absolute()}"
        driver.get(file_url)

        # Wait for rendering
        time.sleep(0.5)

        # Ensure output directory exists
        output_path.parent.mkdir(parents=True, exist_ok=True)

        # Take screenshot
        driver.save_screenshot(str(output_path))
        print(f"  Rendered: {output_path.name}")
        return True

    except WebDriverException as e:
        print(f"  ERROR rendering {html_path.name}: {e}")
        return False

    finally:
        if own_driver:
            driver.quit()

def render_episode(episode_num: int, driver=None) -> int:
    """
    Render all slides for a single episode.

    Args:
        episode_num: Episode number
        driver: Optional shared Chrome driver

    Returns:
        Number of successfully rendered slides
    """
    section_count = EPISODE_SECTIONS.get(episode_num)
    if section_count is None:
        print(f"  Warning: No section count defined for episode {episode_num}")
        # Auto-detect by scanning for HTML files
        pattern = f"ep{episode_num:02d}_section_*.html"
        html_files = list(SLIDES_DIR.glob(pattern))
        section_count = len(html_files)
        if section_count == 0:
            print(f"  Skipping episode {episode_num}: no slides found")
            return 0

    output_dir = ASSETS_DIR / f"episode_{episode_num:02d}"
    output_dir.mkdir(parents=True, exist_ok=True)

    rendered = 0
    for i in range(1, section_count + 1):
        html_file = SLIDES_DIR / f"ep{episode_num:02d}_section_{i:02d}.html"
        png_file = output_dir / f"section_{i:02d}.png"

        if html_file.exists():
            if render_slide(html_file, png_file, driver):
                rendered += 1
        else:
            print(f"  Warning: {html_file.name} not found")

    return rendered


def main():
    """Render all slides for all episodes with HTML files."""
    import argparse

    parser = argparse.ArgumentParser(description="Render HTML slides to PNG")
    parser.add_argument("--episode", "-e", type=int, help="Render specific episode only")
    parser.add_argument("--all", "-a", action="store_true", help="Render all episodes 1-30")
    args = parser.parse_args()

    # Determine which episodes to render
    if args.episode:
        episodes = [args.episode]
    elif args.all:
        episodes = list(range(1, 31))
    else:
        # Default: render episodes that have section counts defined
        episodes = sorted(EPISODE_SECTIONS.keys())

    print(f"Rendering {len(episodes)} episode(s)...")
    print("=" * 50)

    # Create shared Chrome driver for efficiency
    driver = create_chrome_driver()
    output_dirs = []

    try:
        total_rendered = 0
        for ep_num in episodes:
            print(f"\nRendering Episode {ep_num} slides...")
            rendered = render_episode(ep_num, driver)
            total_rendered += rendered
            if rendered > 0:
                output_dirs.append(ASSETS_DIR / f"episode_{ep_num:02d}")

        print("\n" + "=" * 50)
        print(f"Done! Rendered {total_rendered} slides total.")
        print("\nOutput directories:")
        for output_dir in output_dirs:
            print(f"  {output_dir}")

    finally:
        driver.quit()

if __name__ == "__main__":
    main()
