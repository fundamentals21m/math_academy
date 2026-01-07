#!/bin/bash
# Check Playwright test status
# Usage: ./check-test-status.sh

OUTPUT_FILE="/tmp/claude/-Users-brianhirschfield-Claude-math-academy/tasks/b4e1a52.output"

if [ ! -f "$OUTPUT_FILE" ]; then
    echo "No test output found. Tests may not be running."
    exit 1
fi

echo "=========================================="
echo "  Playwright E2E Test Status"
echo "=========================================="
echo ""

# Count results
PASSED=$(grep -c "✓" "$OUTPUT_FILE" 2>/dev/null || echo "0")
FAILED=$(grep -c "✘" "$OUTPUT_FILE" 2>/dev/null || echo "0")
SKIPPED=$(grep -c "^  -" "$OUTPUT_FILE" 2>/dev/null || echo "0")

# Get total from first line
TOTAL=$(grep -o "Running [0-9]* tests" "$OUTPUT_FILE" | head -1 | grep -o "[0-9]*")

echo "Progress: $((PASSED + FAILED)) / ${TOTAL:-"?"} tests completed"
echo ""
echo "  ✓ Passed:  $PASSED"
echo "  ✘ Failed:  $FAILED"
echo "  - Skipped: $SKIPPED"
echo ""

# Check if still running
if pgrep -f "playwright test" > /dev/null; then
    echo "Status: RUNNING"
else
    echo "Status: COMPLETED"
    echo ""
    # Show summary if completed
    echo "Final Summary:"
    tail -20 "$OUTPUT_FILE" | grep -E "(passed|failed|skipped|Error)"
fi

echo ""
echo "=========================================="
echo "Last 10 test results:"
echo "=========================================="
grep -E "^\s*(✓|✘|-).*\[" "$OUTPUT_FILE" | tail -10

echo ""
echo "To see full output: cat $OUTPUT_FILE | tail -50"
echo "To see failures only: grep '✘' $OUTPUT_FILE"
