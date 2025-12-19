#!/usr/bin/env python3
"""
PDF Chunker with Compression - Split PDFs into chunks not exceeding a specified size limit.
Uses Ghostscript to rasterize/compress oversized pages.

Usage: python pdf_chunker_compress.py input.pdf [--max-size 300]
"""

import argparse
import os
import subprocess
import sys
import tempfile
from io import BytesIO

try:
    from pypdf import PdfReader, PdfWriter
except ImportError:
    try:
        from PyPDF2 import PdfReader, PdfWriter
    except ImportError:
        print("Error: Please install pypdf or PyPDF2")
        print("Run: pip install pypdf")
        sys.exit(1)


def check_ghostscript():
    """Check if Ghostscript is available."""
    try:
        subprocess.run(["gs", "--version"], capture_output=True, check=True)
        return True
    except (subprocess.CalledProcessError, FileNotFoundError):
        return False


def get_pdf_size(writer: PdfWriter) -> int:
    """Get the size of a PdfWriter object in bytes."""
    buffer = BytesIO()
    writer.write(buffer)
    return buffer.tell()


def compress_pdf_page(input_path: str, output_path: str, dpi: int = 150) -> bool:
    """
    Compress/rasterize a PDF page using Ghostscript.

    Args:
        input_path: Path to input PDF
        output_path: Path to output PDF
        dpi: Resolution for rasterization

    Returns:
        True if successful, False otherwise
    """
    cmd = [
        "gs",
        "-sDEVICE=pdfwrite",
        "-dCompatibilityLevel=1.4",
        "-dPDFSETTINGS=/ebook",  # Good quality, smaller size
        "-dNOPAUSE",
        "-dQUIET",
        "-dBATCH",
        f"-r{dpi}",
        "-dDownsampleColorImages=true",
        "-dDownsampleGrayImages=true",
        "-dDownsampleMonoImages=true",
        f"-dColorImageResolution={dpi}",
        f"-dGrayImageResolution={dpi}",
        f"-dMonoImageResolution={dpi}",
        "-dColorImageDownsampleType=/Bicubic",
        "-dGrayImageDownsampleType=/Bicubic",
        "-dMonoImageDownsampleType=/Bicubic",
        f"-sOutputFile={output_path}",
        input_path
    ]

    try:
        subprocess.run(cmd, capture_output=True, check=True)
        return True
    except subprocess.CalledProcessError:
        return False


def rasterize_to_size(input_path: str, output_path: str, max_size_bytes: int) -> bool:
    """
    Rasterize a PDF page, reducing DPI until it fits under max_size_bytes.

    Args:
        input_path: Path to input PDF
        output_path: Path to output PDF
        max_size_bytes: Maximum allowed size in bytes

    Returns:
        True if successful (even if still over limit), False on error
    """
    # Try progressively lower DPI values
    dpi_values = [150, 120, 100, 80, 72, 60, 50, 40]

    for dpi in dpi_values:
        if compress_pdf_page(input_path, output_path, dpi):
            size = os.path.getsize(output_path)
            if size <= max_size_bytes:
                return True

    # If we still can't get it small enough, use the last attempt (lowest DPI)
    return os.path.exists(output_path)


def extract_page(reader: PdfReader, page_num: int, output_path: str):
    """Extract a single page from a PDF."""
    writer = PdfWriter()
    writer.add_page(reader.pages[page_num])
    with open(output_path, "wb") as f:
        writer.write(f)


def chunk_pdf(input_path: str, max_size_kb: int = 300, output_dir: str = None):
    """
    Split a PDF into chunks not exceeding max_size_kb.
    Compresses oversized pages using Ghostscript.

    Args:
        input_path: Path to the input PDF file
        max_size_kb: Maximum size per chunk in KB (default: 300)
        output_dir: Output directory (default: same as input file)
    """
    max_size_bytes = max_size_kb * 1024

    if not os.path.exists(input_path):
        print(f"Error: File not found: {input_path}")
        sys.exit(1)

    if not check_ghostscript():
        print("Error: Ghostscript (gs) is required but not found.")
        print("Install with: brew install ghostscript")
        sys.exit(1)

    # Set up output directory and base name
    input_dir = os.path.dirname(input_path) or "."
    base_name = os.path.splitext(os.path.basename(input_path))[0]
    output_dir = output_dir or input_dir

    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    print(f"Reading: {input_path}")
    reader = PdfReader(input_path)
    total_pages = len(reader.pages)
    print(f"Total pages: {total_pages}")
    print(f"Max chunk size: {max_size_kb} KB")
    print("-" * 50)

    # Create temp directory for working files
    with tempfile.TemporaryDirectory() as temp_dir:
        chunk_num = 1
        current_writer = PdfWriter()
        pages_in_chunk = 0
        chunks_created = []
        compressed_count = 0

        for page_num in range(total_pages):
            print(f"\rProcessing page {page_num + 1}/{total_pages}...", end="", flush=True)

            # Extract single page to temp file
            temp_page_path = os.path.join(temp_dir, f"page_{page_num}.pdf")
            extract_page(reader, page_num, temp_page_path)
            page_size = os.path.getsize(temp_page_path)

            # Check if this single page needs compression
            if page_size > max_size_bytes:
                compressed_path = os.path.join(temp_dir, f"page_{page_num}_compressed.pdf")
                print(f"\n  Compressing page {page_num + 1} ({page_size / 1024:.1f} KB)...", end="", flush=True)

                if rasterize_to_size(temp_page_path, compressed_path, max_size_bytes):
                    new_size = os.path.getsize(compressed_path)
                    print(f" -> {new_size / 1024:.1f} KB")
                    temp_page_path = compressed_path
                    page_size = new_size
                    compressed_count += 1
                else:
                    print(" (compression failed, using original)")

            # Read the (possibly compressed) page
            page_reader = PdfReader(temp_page_path)

            # Create a test writer to check size with new page
            test_writer = PdfWriter()
            for i in range(pages_in_chunk):
                test_writer.add_page(current_writer.pages[i])
            test_writer.add_page(page_reader.pages[0])
            test_size = get_pdf_size(test_writer)

            if test_size > max_size_bytes and pages_in_chunk > 0:
                # Save current chunk (without the new page)
                output_path = os.path.join(output_dir, f"{base_name}_chunk_{chunk_num:03d}.pdf")
                with open(output_path, "wb") as f:
                    current_writer.write(f)

                chunk_size = os.path.getsize(output_path)
                print(f"\n  Chunk {chunk_num}: {pages_in_chunk} pages, {chunk_size / 1024:.1f} KB")
                chunks_created.append(output_path)

                # Start new chunk with current page
                chunk_num += 1
                current_writer = PdfWriter()
                current_writer.add_page(page_reader.pages[0])
                pages_in_chunk = 1
            else:
                # Add page to current chunk
                current_writer.add_page(page_reader.pages[0])
                pages_in_chunk += 1

        # Save final chunk
        if pages_in_chunk > 0:
            output_path = os.path.join(output_dir, f"{base_name}_chunk_{chunk_num:03d}.pdf")
            with open(output_path, "wb") as f:
                current_writer.write(f)

            chunk_size = os.path.getsize(output_path)
            print(f"\n  Chunk {chunk_num}: {pages_in_chunk} pages, {chunk_size / 1024:.1f} KB")
            chunks_created.append(output_path)

    print("\n" + "-" * 50)
    print(f"Created {len(chunks_created)} chunks in: {output_dir}")
    print(f"Compressed {compressed_count} oversized pages")

    # Verify all chunks are under the limit
    over_limit = []
    for chunk_path in chunks_created:
        size = os.path.getsize(chunk_path)
        if size > max_size_bytes:
            over_limit.append((chunk_path, size))

    if over_limit:
        print(f"\nWarning: {len(over_limit)} chunks still exceed {max_size_kb} KB:")
        for path, size in over_limit[:5]:
            print(f"  {os.path.basename(path)}: {size / 1024:.1f} KB")
        if len(over_limit) > 5:
            print(f"  ... and {len(over_limit) - 5} more")
    else:
        print(f"\nAll chunks are under {max_size_kb} KB!")

    return chunks_created


def main():
    parser = argparse.ArgumentParser(
        description="Split a PDF into chunks, compressing oversized pages."
    )
    parser.add_argument("input", help="Input PDF file path")
    parser.add_argument(
        "--max-size", "-s",
        type=int,
        default=300,
        help="Maximum chunk size in KB (default: 300)"
    )
    parser.add_argument(
        "--output-dir", "-o",
        help="Output directory (default: same as input file)"
    )

    args = parser.parse_args()
    chunk_pdf(args.input, args.max_size, args.output_dir)


if __name__ == "__main__":
    main()
