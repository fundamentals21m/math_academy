import { useState, useRef, useEffect, useCallback } from 'react';

interface IsometryGroupDemoProps {
  className?: string;
}

type IsometryType = 'rotation' | 'reflection' | 'translation' | 'glide';

export function IsometryGroupDemo({ className = '' }: IsometryGroupDemoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isometryType, setIsometryType] = useState<IsometryType>('rotation');
  const [angle, setAngle] = useState(45);
  const [reflectionAngle, setReflectionAngle] = useState(30);
  const [translationX, setTranslationX] = useState(2);
  const [translationY, setTranslationY] = useState(1);
  const [showComposition, setShowComposition] = useState(false);
  const [secondReflectionAngle, setSecondReflectionAngle] = useState(60);

  const width = 550;
  const height = 400;

  // Apply isometry to a point
  const applyIsometry = useCallback((px: number, py: number): [number, number] => {
    const rad = (angle * Math.PI) / 180;
    const refRad = (reflectionAngle * Math.PI) / 180;

    switch (isometryType) {
      case 'rotation':
        return [
          px * Math.cos(rad) - py * Math.sin(rad),
          px * Math.sin(rad) + py * Math.cos(rad)
        ];
      case 'reflection': {
        // Reflect across line through origin at angle refRad
        const cos2 = Math.cos(2 * refRad);
        const sin2 = Math.sin(2 * refRad);
        return [
          px * cos2 + py * sin2,
          px * sin2 - py * cos2
        ];
      }
      case 'translation':
        return [px + translationX, py + translationY];
      case 'glide': {
        // Reflect across x-axis then translate along x
        const reflected: [number, number] = [px, -py];
        return [reflected[0] + translationX, reflected[1]];
      }
      default:
        return [px, py];
    }
  }, [isometryType, angle, reflectionAngle, translationX, translationY]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;
    const scale = 40;

    const toCanvasX = (x: number) => cx + x * scale;
    const toCanvasY = (y: number) => cy - y * scale;

    // Draw grid
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    for (let x = -10; x <= 10; x++) {
      ctx.beginPath();
      ctx.moveTo(toCanvasX(x), 0);
      ctx.lineTo(toCanvasX(x), height);
      ctx.stroke();
    }
    for (let y = -5; y <= 5; y++) {
      ctx.beginPath();
      ctx.moveTo(0, toCanvasY(y));
      ctx.lineTo(width, toCanvasY(y));
      ctx.stroke();
    }

    // Draw axes
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, cy);
    ctx.lineTo(width, cy);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx, 0);
    ctx.lineTo(cx, height);
    ctx.stroke();

    // Draw origin
    ctx.fillStyle = '#f1f5f9';
    ctx.beginPath();
    ctx.arc(cx, cy, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText('O', cx + 8, cy + 15);

    // Draw reflection line or rotation indicator
    if (isometryType === 'reflection') {
      const refRad = (reflectionAngle * Math.PI) / 180;
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(toCanvasX(-6 * Math.cos(refRad)), toCanvasY(-6 * Math.sin(refRad)));
      ctx.lineTo(toCanvasX(6 * Math.cos(refRad)), toCanvasY(6 * Math.sin(refRad)));
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#f59e0b';
      ctx.font = '12px sans-serif';
      ctx.fillText('reflection line', toCanvasX(4 * Math.cos(refRad)), toCanvasY(4 * Math.sin(refRad)) - 10);
    } else if (isometryType === 'rotation') {
      // Draw rotation arc
      const rad = (angle * Math.PI) / 180;
      ctx.strokeStyle = '#22c55e';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, 30, -rad, 0, angle < 0);
      ctx.stroke();

      // Arrow
      ctx.fillStyle = '#22c55e';
      ctx.font = '12px sans-serif';
      ctx.fillText(`θ = ${angle}°`, cx + 35, cy - 10);
    } else if (isometryType === 'translation') {
      // Draw translation vector
      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(toCanvasX(translationX), toCanvasY(translationY));
      ctx.stroke();

      // Arrowhead
      const dx = translationX * scale;
      const dy = -translationY * scale;
      const len = Math.sqrt(dx * dx + dy * dy);
      const ux = dx / len;
      const uy = dy / len;
      ctx.beginPath();
      ctx.moveTo(toCanvasX(translationX), toCanvasY(translationY));
      ctx.lineTo(toCanvasX(translationX) - 10 * ux - 5 * uy, toCanvasY(translationY) - 10 * uy + 5 * ux);
      ctx.lineTo(toCanvasX(translationX) - 10 * ux + 5 * uy, toCanvasY(translationY) - 10 * uy - 5 * ux);
      ctx.closePath();
      ctx.fillStyle = '#8b5cf6';
      ctx.fill();

      ctx.fillStyle = '#8b5cf6';
      ctx.font = '12px sans-serif';
      ctx.fillText(`v = (${translationX}, ${translationY})`, toCanvasX(translationX / 2) + 10, toCanvasY(translationY / 2) - 10);
    } else if (isometryType === 'glide') {
      // Draw x-axis (reflection line)
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(0, cy);
      ctx.lineTo(width, cy);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#f59e0b';
      ctx.font = '12px sans-serif';
      ctx.fillText('reflection line (x-axis)', 20, cy - 10);

      // Translation arrow
      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy + 50);
      ctx.lineTo(toCanvasX(translationX), cy + 50);
      ctx.stroke();
      ctx.fillStyle = '#8b5cf6';
      ctx.fillText(`translate by ${translationX}`, toCanvasX(translationX / 2), cy + 45);
    }

    // Draw original shape (F shape for orientation)
    const originalPoints: [number, number][] = [
      [-2, -1], [-2, 2], [-1, 2], [-1, 0.5], [0, 0.5], [0, -0.5], [-1, -0.5], [-1, -1]
    ];

    // Draw original
    ctx.fillStyle = 'rgba(96, 165, 250, 0.5)';
    ctx.strokeStyle = '#60a5fa';
    ctx.lineWidth = 2;
    ctx.beginPath();
    originalPoints.forEach((pt, i) => {
      const [x, y] = pt;
      if (i === 0) ctx.moveTo(toCanvasX(x), toCanvasY(y));
      else ctx.lineTo(toCanvasX(x), toCanvasY(y));
    });
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Label
    ctx.fillStyle = '#60a5fa';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('F', toCanvasX(-1.5), toCanvasY(1.5));

    // Draw transformed shape
    const transformedPoints = originalPoints.map(([x, y]) => applyIsometry(x, y));

    ctx.fillStyle = 'rgba(236, 72, 153, 0.5)';
    ctx.strokeStyle = '#ec4899';
    ctx.lineWidth = 2;
    ctx.beginPath();
    transformedPoints.forEach((pt, i) => {
      const [x, y] = pt;
      if (Math.abs(x) < 10 && Math.abs(y) < 10) {
        if (i === 0) ctx.moveTo(toCanvasX(x), toCanvasY(y));
        else ctx.lineTo(toCanvasX(x), toCanvasY(y));
      }
    });
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Label transformed
    const [tx, ty] = applyIsometry(-1.5, 1.5);
    if (Math.abs(tx) < 8 && Math.abs(ty) < 8) {
      ctx.fillStyle = '#ec4899';
      ctx.font = 'bold 14px sans-serif';
      ctx.fillText("F'", toCanvasX(tx), toCanvasY(ty));
    }

    // Show composition if enabled
    if (showComposition && isometryType === 'reflection') {
      // Second reflection line
      const ref2Rad = (secondReflectionAngle * Math.PI) / 180;
      ctx.strokeStyle = '#22c55e';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(toCanvasX(-6 * Math.cos(ref2Rad)), toCanvasY(-6 * Math.sin(ref2Rad)));
      ctx.lineTo(toCanvasX(6 * Math.cos(ref2Rad)), toCanvasY(6 * Math.sin(ref2Rad)));
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = '#22c55e';
      ctx.font = '12px sans-serif';
      ctx.fillText('2nd reflection', toCanvasX(4 * Math.cos(ref2Rad)), toCanvasY(4 * Math.sin(ref2Rad)) - 10);

      // Apply second reflection
      const ref2Apply = (px: number, py: number): [number, number] => {
        const cos2 = Math.cos(2 * ref2Rad);
        const sin2 = Math.sin(2 * ref2Rad);
        return [px * cos2 + py * sin2, px * sin2 - py * cos2];
      };

      const doublyTransformed = transformedPoints.map(([x, y]) => ref2Apply(x, y));

      ctx.fillStyle = 'rgba(34, 197, 94, 0.5)';
      ctx.strokeStyle = '#22c55e';
      ctx.lineWidth = 2;
      ctx.beginPath();
      doublyTransformed.forEach((pt, i) => {
        const [x, y] = pt;
        if (Math.abs(x) < 10 && Math.abs(y) < 10) {
          if (i === 0) ctx.moveTo(toCanvasX(x), toCanvasY(y));
          else ctx.lineTo(toCanvasX(x), toCanvasY(y));
        }
      });
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Result info
      const angleDiff = secondReflectionAngle - reflectionAngle;
      ctx.fillStyle = '#c084fc';
      ctx.font = '12px sans-serif';
      ctx.fillText(`Two reflections = rotation by 2×${angleDiff}° = ${2 * angleDiff}°`, 20, height - 20);
    }

    // Info box
    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'bold 14px sans-serif';

    let info = '';
    switch (isometryType) {
      case 'rotation':
        info = `Rotation by ${angle}° about O`;
        break;
      case 'reflection':
        info = `Reflection in line at ${reflectionAngle}°`;
        break;
      case 'translation':
        info = `Translation by (${translationX}, ${translationY})`;
        break;
      case 'glide':
        info = `Glide reflection (reflect, translate ${translationX})`;
        break;
    }
    ctx.fillText(info, 20, 30);

    // Orientation info
    const isPreserving = isometryType === 'rotation' || isometryType === 'translation';
    ctx.fillStyle = isPreserving ? '#22c55e' : '#ef4444';
    ctx.font = '12px sans-serif';
    ctx.fillText(isPreserving ? '✓ Orientation-preserving' : '✗ Orientation-reversing', 20, 50);

  }, [isometryType, angle, reflectionAngle, translationX, translationY, showComposition, secondReflectionAngle, applyIsometry]);

  return (
    <div className={`bg-slate-800/50 p-4 rounded-lg ${className}`}>
      <h4 className="text-lg font-semibold text-blue-400 mb-4">
        Isometry Group of the Plane
      </h4>

      <div className="flex justify-center mb-4">
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          className="border border-slate-700 rounded"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {(['rotation', 'reflection', 'translation', 'glide'] as IsometryType[]).map(type => (
          <button
            key={type}
            onClick={() => setIsometryType(type)}
            className={`px-3 py-2 text-sm rounded transition ${
              isometryType === type
                ? 'bg-blue-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {isometryType === 'rotation' && (
        <div className="mb-4">
          <label className="block text-sm text-slate-400 mb-1">Angle: {angle}°</label>
          <input
            type="range"
            min="-180"
            max="180"
            value={angle}
            onChange={(e) => setAngle(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
      )}

      {isometryType === 'reflection' && (
        <div className="mb-4">
          <label className="block text-sm text-slate-400 mb-1">Line angle: {reflectionAngle}°</label>
          <input
            type="range"
            min="0"
            max="180"
            value={reflectionAngle}
            onChange={(e) => setReflectionAngle(parseInt(e.target.value))}
            className="w-full"
          />

          <button
            onClick={() => setShowComposition(!showComposition)}
            className={`mt-2 px-3 py-2 text-sm rounded transition ${
              showComposition
                ? 'bg-green-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            {showComposition ? 'Hide' : 'Show'} Two Reflections = Rotation
          </button>

          {showComposition && (
            <div className="mt-2">
              <label className="block text-sm text-slate-400 mb-1">2nd line angle: {secondReflectionAngle}°</label>
              <input
                type="range"
                min="0"
                max="180"
                value={secondReflectionAngle}
                onChange={(e) => setSecondReflectionAngle(parseInt(e.target.value))}
                className="w-full"
              />
            </div>
          )}
        </div>
      )}

      {(isometryType === 'translation' || isometryType === 'glide') && (
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm text-slate-400 mb-1">x: {translationX}</label>
            <input
              type="range"
              min="-4"
              max="4"
              step="0.5"
              value={translationX}
              onChange={(e) => setTranslationX(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          {isometryType === 'translation' && (
            <div>
              <label className="block text-sm text-slate-400 mb-1">y: {translationY}</label>
              <input
                type="range"
                min="-4"
                max="4"
                step="0.5"
                value={translationY}
                onChange={(e) => setTranslationY(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
          )}
        </div>
      )}

      <div className="bg-slate-900/50 p-3 rounded text-sm text-slate-300">
        <p className="mb-2"><strong>Three Reflections Theorem:</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li>Every isometry is a product of at most <span className="text-amber-400">three reflections</span></li>
          <li><span className="text-green-400">Rotations & translations</span> = products of 2 reflections</li>
          <li><span className="text-red-400">Reflections & glides</span> = products of 1 or 3 reflections</li>
          <li>The "F" shape shows orientation: flipped F means orientation reversed</li>
        </ul>
      </div>
    </div>
  );
}
