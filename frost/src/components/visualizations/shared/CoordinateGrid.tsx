/**
 * Reusable SVG coordinate grid for mathematical visualizations
 */
import { useMemo } from 'react';

interface CoordinateGridProps {
  width: number;
  height: number;
  padding: number;
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  xLabel?: string;
  yLabel?: string;
  showMinorGrid?: boolean;
}

export function CoordinateGrid({
  width,
  height,
  padding,
  xMin,
  xMax,
  yMin,
  yMax,
  xLabel = 'x',
  yLabel = 'y',
  showMinorGrid = true,
}: CoordinateGridProps) {
  const plotWidth = width - 2 * padding;
  const plotHeight = height - 2 * padding;

  // Coordinate transformation functions
  const toSvgX = (x: number) => padding + ((x - xMin) / (xMax - xMin)) * plotWidth;
  const toSvgY = (y: number) => padding + ((yMax - y) / (yMax - yMin)) * plotHeight;

  // Generate grid lines
  const gridLines = useMemo(() => {
    const lines: JSX.Element[] = [];
    const xStep = Math.ceil((xMax - xMin) / 10);
    const yStep = Math.ceil((yMax - yMin) / 10);

    // Vertical grid lines
    for (let x = Math.ceil(xMin); x <= xMax; x += xStep) {
      const svgX = toSvgX(x);
      lines.push(
        <line
          key={`v-${x}`}
          x1={svgX}
          y1={padding}
          x2={svgX}
          y2={height - padding}
          stroke="#374151"
          strokeWidth={x === 0 ? 1.5 : 0.5}
          strokeDasharray={x === 0 ? undefined : '2,4'}
        />
      );
    }

    // Horizontal grid lines
    for (let y = Math.ceil(yMin); y <= yMax; y += yStep) {
      const svgY = toSvgY(y);
      lines.push(
        <line
          key={`h-${y}`}
          x1={padding}
          y1={svgY}
          x2={width - padding}
          y2={svgY}
          stroke="#374151"
          strokeWidth={y === 0 ? 1.5 : 0.5}
          strokeDasharray={y === 0 ? undefined : '2,4'}
        />
      );
    }

    return lines;
  }, [xMin, xMax, yMin, yMax, width, height, padding, plotWidth, plotHeight]);

  // Generate axis labels
  const axisLabels = useMemo(() => {
    const labels: JSX.Element[] = [];
    const xStep = Math.ceil((xMax - xMin) / 10);
    const yStep = Math.ceil((yMax - yMin) / 10);

    // X-axis labels
    for (let x = Math.ceil(xMin); x <= xMax; x += xStep) {
      if (x !== 0) {
        labels.push(
          <text
            key={`xl-${x}`}
            x={toSvgX(x)}
            y={height - padding + 16}
            textAnchor="middle"
            fill="#9ca3af"
            fontSize={10}
          >
            {x}
          </text>
        );
      }
    }

    // Y-axis labels
    for (let y = Math.ceil(yMin); y <= yMax; y += yStep) {
      if (y !== 0) {
        labels.push(
          <text
            key={`yl-${y}`}
            x={padding - 8}
            y={toSvgY(y) + 4}
            textAnchor="end"
            fill="#9ca3af"
            fontSize={10}
          >
            {y}
          </text>
        );
      }
    }

    // Origin
    labels.push(
      <text
        key="origin"
        x={toSvgX(0) - 8}
        y={toSvgY(0) + 16}
        textAnchor="end"
        fill="#9ca3af"
        fontSize={10}
      >
        0
      </text>
    );

    return labels;
  }, [xMin, xMax, yMin, yMax, width, height, padding, plotWidth, plotHeight]);

  return (
    <g className="coordinate-grid">
      {/* Grid lines */}
      {gridLines}

      {/* Axes */}
      <line
        x1={padding}
        y1={toSvgY(0)}
        x2={width - padding}
        y2={toSvgY(0)}
        stroke="#6b7280"
        strokeWidth={1.5}
      />
      <line
        x1={toSvgX(0)}
        y1={padding}
        x2={toSvgX(0)}
        y2={height - padding}
        stroke="#6b7280"
        strokeWidth={1.5}
      />

      {/* Axis arrows */}
      <polygon
        points={`${width - padding},${toSvgY(0)} ${width - padding - 8},${toSvgY(0) - 4} ${width - padding - 8},${toSvgY(0) + 4}`}
        fill="#6b7280"
      />
      <polygon
        points={`${toSvgX(0)},${padding} ${toSvgX(0) - 4},${padding + 8} ${toSvgX(0) + 4},${padding + 8}`}
        fill="#6b7280"
      />

      {/* Axis labels */}
      {axisLabels}
      <text
        x={width - padding + 12}
        y={toSvgY(0) + 4}
        fill="#9ca3af"
        fontSize={12}
        fontStyle="italic"
      >
        {xLabel}
      </text>
      <text
        x={toSvgX(0) + 8}
        y={padding - 4}
        fill="#9ca3af"
        fontSize={12}
        fontStyle="italic"
      >
        {yLabel}
      </text>
    </g>
  );
}

// Helper function for use in other components
export function createCoordinateTransforms(
  width: number,
  height: number,
  padding: number,
  xMin: number,
  xMax: number,
  yMin: number,
  yMax: number
) {
  const plotWidth = width - 2 * padding;
  const plotHeight = height - 2 * padding;

  return {
    toSvgX: (x: number) => padding + ((x - xMin) / (xMax - xMin)) * plotWidth,
    toSvgY: (y: number) => padding + ((yMax - y) / (yMax - yMin)) * plotHeight,
    plotWidth,
    plotHeight,
  };
}
