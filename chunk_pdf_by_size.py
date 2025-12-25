#!/usr/bin/env python3
"""
PDF Chunker by File Size

Splits a PDF into chunks where each chunk is no larger than a specified max size.
"""

import os
import sys
import io
from pypdf import PdfReader, PdfWriter

def get_pdf_size(writer):
    """Get the size of a PdfWriter's output in bytes."""
    buffer = io.BytesIO()
    writer.write(buffer)
    return buffer.tell()

def chunk_pdf_by_size(input_path, output_dir, max_size_kb=300):
    """
    Split PDF into chunks no larger than max_size_kb.

    Args:
        input_path: Path to the source PDF
        output_dir: Directory to save chunks
        max_size_kb: Maximum size of each chunk in KB (default 300)
    """
    max_size_bytes = max_size_kb * 1024

    # Create output directory
    os.makedirs(output_dir, exist_ok=True)

    # Get base filename for output
    base_name = os.path.splitext(os.path.basename(input_path))[0]

    print(f"Reading PDF: {input_path}")
    reader = PdfReader(input_path)
    total_pages = len(reader.pages)
    print(f"Total pages: {total_pages}")

    chunk_num = 1
    current_writer = PdfWriter()
    page_idx = 0
    chunk_start_page = 1

    while page_idx < total_pages:
        page = reader.pages[page_idx]

        # Try adding this page
        test_writer = PdfWriter()
        for existing_page in current_writer.pages:
            test_writer.add_page(existing_page)
        test_writer.add_page(page)

        test_size = get_pdf_size(test_writer)

        if test_size <= max_size_bytes or len(current_writer.pages) == 0:
            # Page fits, or this is the first page of a chunk (must include at least 1 page)
            current_writer.add_page(page)
            page_idx += 1

            # If single page exceeds limit, warn but continue
            if len(current_writer.pages) == 1 and test_size > max_size_bytes:
                print(f"  Warning: Page {page_idx} alone is {test_size/1024:.1f}KB (exceeds {max_size_kb}KB limit)")
        else:
            # Page doesn't fit - save current chunk and start new one
            output_path = os.path.join(output_dir, f"{base_name}_chunk_{chunk_num:03d}.pdf")
            chunk_size = get_pdf_size(current_writer)

            with open(output_path, 'wb') as f:
                current_writer.write(f)

            page_count = len(current_writer.pages)
            print(f"  Chunk {chunk_num}: pages {chunk_start_page}-{chunk_start_page + page_count - 1} ({chunk_size/1024:.1f}KB)")

            chunk_num += 1
            current_writer = PdfWriter()
            chunk_start_page = page_idx + 1
            # Don't increment page_idx - we'll add this page to the new chunk

    # Save final chunk if it has pages
    if len(current_writer.pages) > 0:
        output_path = os.path.join(output_dir, f"{base_name}_chunk_{chunk_num:03d}.pdf")
        chunk_size = get_pdf_size(current_writer)

        with open(output_path, 'wb') as f:
            current_writer.write(f)

        page_count = len(current_writer.pages)
        print(f"  Chunk {chunk_num}: pages {chunk_start_page}-{chunk_start_page + page_count - 1} ({chunk_size/1024:.1f}KB)")

    print(f"\nDone! Created {chunk_num} chunks in: {output_dir}")
    return chunk_num

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python chunk_pdf_by_size.py <input.pdf> <output_dir> [max_size_kb]")
        sys.exit(1)

    input_pdf = sys.argv[1]
    output_dir = sys.argv[2]
    max_size = int(sys.argv[3]) if len(sys.argv) > 3 else 300

    chunk_pdf_by_size(input_pdf, output_dir, max_size)
