import { useState, useMemo } from 'react';

type FunctionType = 'quadratic' | 'saddle' | 'circular';

export function GradientVisualizer() {
  const [funcType, setFuncType] = useState<FunctionType>('quadratic');
  const [point, setPoint] = useState({ x: 0.5, y: 0.5 });

  const size = 300;
  const center = size / 2;
  const scale = size / 4;

  // Function and gradient definitions
  const { f, gradF, name } = useMemo(() => {
    switch (funcType) {
      case 'quadratic':
        return {
          f: (x: number, y: number) => x * x + y * y,
          gradF: (x: number, y: number) => ({ x: 2 * x, y: 2 * y }),
          name: 'f(x,y) = x² + y²',
        };
      case 'saddle':
        return {
          f: (x: number, y: number) => x * x - y * y,
          gradF: (x: number, y: number) => ({ x: 2 * x, y: -2 * y }),
          name: 'f(x,y) = x² - y²',
        };
      case 'circular':
        return {
          f: (x: number, y: number) => Math.sin(Math.sqrt(x * x + y * y) * 2),
          gradF: (x: number, y: number) => {
            const r = Math.sqrt(x * x + y * y);
            if (r < 0.01) return { x: 0, y: 0 };
            const dr = 2 * Math.cos(r * 2) / r;
            return { x: dr * x, y: dr * y };
          },
          name: 'f(x,y) = sin(2√(x²+y²))',
        };
      default:
        return {
          f: () => 0,
          gradF: () => ({ x: 0, y: 0 }),
          name: '',
        };
    }
  }, [funcType]);

  // Generate contour lines
  const contours = useMemo(() => {
    const paths: string[] = [];
    const levels = funcType === 'circular' ? [-0.8, -0.4, 0, 0.4, 0.8] : [-1, -0.5, 0, 0.5, 1, 1.5];

    for (const level of levels) {
      const points: { x: number; y: number }[] = [];
      for (let theta = 0; theta <= 2 * Math.PI; theta += 0.05) {
        // Find point where f(x,y) = level on ray from origin
        for (let r = 0.1; r <= 2; r += 0.1) {
          const x = r * Math.cos(theta);
          const y = r * Math.sin(theta);
          if (Math.abs(f(x, y) - level) < 0.15) {
            points.push({ x, y });
            break;
          }
        }
      }
      if (points.length > 2) {
        paths.push(
          points
            .map((p) => `${center + p.x * scale},${center - p.y * scale}`)
            .join(' ')
        );
      }
    }
    return paths;
  }, [funcType, f]);

  const grad = gradF(point.x, point.y);
  const gradMag = Math.sqrt(grad.x * grad.x + grad.y * grad.y);
  const arrowScale = Math.min(1, gradMag) * 40;

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left - center) / scale);
    const y = -((e.clientY - rect.top - center) / scale);
    setPoint({ x, y });
  };

  return (
    <div className="p-4 bg-dark-800 rounded-lg">
      <h3 className="text-lg font-semibold text-dark-100 mb-4">Gradient Vector Field</h3>

      <div className="flex gap-4 mb-4">
        <div>
          <label className="block text-sm text-dark-300 mb-1">Function</label>
          <select
            value={funcType}
            onChange={(e) => setFuncType(e.target.value as FunctionType)}
            className="px-3 py-2 bg-dark-700 text-dark-100 rounded border border-dark-600"
          >
            <option value="quadratic">Paraboloid</option>
            <option value="saddle">Saddle</option>
            <option value="circular">Circular waves</option>
          </select>
        </div>
      </div>

      <svg
        width={size}
        height={size}
        className="bg-dark-900 rounded cursor-crosshair"
        onClick={handleClick}
      >
        {/* Grid */}
        <line x1={center} y1={0} x2={center} y2={size} stroke="#374151" />
        <line x1={0} y1={center} x2={size} y2={center} stroke="#374151" />

        {/* Contour lines */}
        {contours.map((path, i) => (
          <polyline
            key={i}
            points={path}
            fill="none"
            stroke="#6b7280"
            strokeWidth="1"
          />
        ))}

        {/* Selected point */}
        <circle
          cx={center + point.x * scale}
          cy={center - point.y * scale}
          r={6}
          fill="#ef4444"
        />

        {/* Gradient arrow */}
        {gradMag > 0.01 && (
          <line
            x1={center + point.x * scale}
            y1={center - point.y * scale}
            x2={center + point.x * scale + (grad.x / gradMag) * arrowScale}
            y2={center - point.y * scale - (grad.y / gradMag) * arrowScale}
            stroke="#22c55e"
            strokeWidth="3"
            markerEnd="url(#arrowhead)"
          />
        )}

        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#22c55e" />
          </marker>
        </defs>
      </svg>

      <div className="mt-4 text-sm text-dark-400">
        <p className="font-medium text-dark-200">{name}</p>
        <p>Point: ({point.x.toFixed(2)}, {point.y.toFixed(2)})</p>
        <p>f(x,y) = {f(point.x, point.y).toFixed(3)}</p>
        <p><span className="text-green-400">∇f</span> = ({grad.x.toFixed(2)}, {grad.y.toFixed(2)})</p>
        <p className="mt-2 text-dark-500">Click to move the point. The gradient points toward steepest ascent.</p>
      </div>
    </div>
  );
}
