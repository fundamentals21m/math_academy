#!/usr/bin/env python3
"""
PDF Chunker - Split PDFs into chunks not exceeding a specified size limit.
Usage: python pdf_chunker.py input.pdf [--max-size 300]
"""

import argparse
import os
import sys
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


def get_pdf_size(writer: PdfWriter) -> int:
    """Get the size of a PdfWriter object in bytes."""
    buffer = BytesIO()
    writer.write(buffer)
    return buffer.tell()


def chunk_pdf(input_path: str, max_size_kb: int = 300, output_dir: str = None):
    """
    Split a PDF into chunks not exceeding max_size_kb.

    Args:
        input_path: Path to the input PDF file
        max_size_kb: Maximum size per chunk in KB (default: 300)
        output_dir: Output directory (default: same as input file)
    """
    max_size_bytes = max_size_kb * 1024

    if not os.path.exists(input_path):
        print(f"Error: File not found: {input_path}")
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
    print("-" * 40)

    chunk_num = 1
    current_writer = PdfWriter()
    pages_in_chunk = 0
    chunks_created = []

    for page_num in range(total_pages):
        # Create a test writer to check size with new page
        test_writer = PdfWriter()

        # Copy existing pages
        for i in range(pages_in_chunk):
            test_writer.add_page(current_writer.pages[i])

        # Add the new page
        test_writer.add_page(reader.pages[page_num])
        test_size = get_pdf_size(test_writer)

        if test_size > max_size_bytes and pages_in_chunk > 0:
            # Save current chunk (without the new page)
            output_path = os.path.join(output_dir, f"{base_name}_chunk_{chunk_num:03d}.pdf")
            with open(output_path, "wb") as f:
                current_writer.write(f)

            chunk_size = os.path.getsize(output_path)
            print(f"Chunk {chunk_num}: {pages_in_chunk} pages, {chunk_size / 1024:.1f} KB -> {output_path}")
            chunks_created.append(output_path)

            # Start new chunk with current page
            chunk_num += 1
            current_writer = PdfWriter()
            current_writer.add_page(reader.pages[page_num])
            pages_in_chunk = 1

            # Check if single page exceeds limit
            single_page_size = get_pdf_size(current_writer)
            if single_page_size > max_size_bytes:
                print(f"  Warning: Page {page_num + 1} alone is {single_page_size / 1024:.1f} KB (exceeds limit)")
        else:
            # Add page to current chunk
            current_writer.add_page(reader.pages[page_num])
            pages_in_chunk += 1

    # Save final chunk
    if pages_in_chunk > 0:
        output_path = os.path.join(output_dir, f"{base_name}_chunk_{chunk_num:03d}.pdf")
        with open(output_path, "wb") as f:
            current_writer.write(f)

        chunk_size = os.path.getsize(output_path)
        print(f"Chunk {chunk_num}: {pages_in_chunk} pages, {chunk_size / 1024:.1f} KB -> {output_path}")
        chunks_created.append(output_path)

    print("-" * 40)
    print(f"Created {len(chunks_created)} chunks in: {output_dir}")

    return chunks_created


def main():
    parser = argparse.ArgumentParser(
        description="Split a PDF into chunks not exceeding a specified size limit."
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
