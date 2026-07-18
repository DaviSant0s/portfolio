import { useEffect, useRef } from 'react';

const TAU = Math.PI * 2;
const THEME_ATTRIBUTE = 'data-theme';
const ORBIT_SEGMENTS = [
  { start: 118, end: 272, weight: 0.34 },
  { start: 214, end: 320, weight: 0.24 },
  { start: 292, end: 24, weight: 0.18 },
  { start: 36, end: 96, weight: 0.14 },
  { start: 98, end: 144, weight: 0.1 },
];

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function randomInRange(min, max) {
  return min + (Math.random() * (max - min));
}

function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}

function normalizeAngle(angle) {
  const normalized = angle % TAU;
  return normalized < 0 ? normalized + TAU : normalized;
}

function hexToRgb(hex) {
  const normalized = hex.replace('#', '').trim();

  if (normalized.length === 3) {
    return {
      r: Number.parseInt(normalized[0] + normalized[0], 16),
      g: Number.parseInt(normalized[1] + normalized[1], 16),
      b: Number.parseInt(normalized[2] + normalized[2], 16),
    };
  }

  if (normalized.length === 6) {
    return {
      r: Number.parseInt(normalized.slice(0, 2), 16),
      g: Number.parseInt(normalized.slice(2, 4), 16),
      b: Number.parseInt(normalized.slice(4, 6), 16),
    };
  }

  return null;
}

function parseCssColor(colorValue) {
  const color = colorValue.trim();

  if (!color) {
    return { r: 255, g: 255, b: 255 };
  }

  if (color.startsWith('#')) {
    return hexToRgb(color) ?? { r: 255, g: 255, b: 255 };
  }

  const rgbMatch = color.match(/rgba?\(([^)]+)\)/i);
  if (rgbMatch) {
    const values = rgbMatch[1]
      .split(',')
      .slice(0, 3)
      .map((channel) => Number.parseFloat(channel.trim()));

    if (values.length === 3 && values.every((channel) => Number.isFinite(channel))) {
      return { r: values[0], g: values[1], b: values[2] };
    }
  }

  return { r: 255, g: 255, b: 255 };
}

function mixColors(colorA, colorB, amount) {
  return {
    r: Math.round(colorA.r + ((colorB.r - colorA.r) * amount)),
    g: Math.round(colorA.g + ((colorB.g - colorA.g) * amount)),
    b: Math.round(colorA.b + ((colorB.b - colorA.b) * amount)),
  };
}

function toRgba(color, alpha) {
  return `rgba(${Math.round(color.r)}, ${Math.round(color.g)}, ${Math.round(color.b)}, ${alpha})`;
}

function pointInEllipse(x, y, centerX, centerY, radiusX, radiusY) {
  const dx = (x - centerX) / radiusX;
  const dy = (y - centerY) / radiusY;
  return ((dx * dx) + (dy * dy)) <= 1;
}

function sampleWeightedSegment() {
  const totalWeight = ORBIT_SEGMENTS.reduce((sum, segment) => sum + segment.weight, 0);
  let cursor = Math.random() * totalWeight;

  for (const segment of ORBIT_SEGMENTS) {
    cursor -= segment.weight;
    if (cursor <= 0) {
      return segment;
    }
  }

  return ORBIT_SEGMENTS[0];
}

function sampleAngle(segment) {
  const start = degToRad(segment.start);
  const end = degToRad(segment.end);

  if (segment.end >= segment.start) {
    return start + (Math.random() * (end - start));
  }

  const span = (TAU - start) + end;
  const nextAngle = start + (Math.random() * span);
  return normalizeAngle(nextAngle);
}

function readPalette() {
  const styles = getComputedStyle(document.documentElement);
  const isDark = document.documentElement.dataset.theme === 'dark';

  const accent = parseCssColor(styles.getPropertyValue('--color-accent'));
  const accentStrong = parseCssColor(styles.getPropertyValue('--color-accent-strong'));
  const info = parseCssColor(styles.getPropertyValue('--color-info'));
  const textSoft = parseCssColor(styles.getPropertyValue('--color-text-soft'));
  const textMuted = parseCssColor(styles.getPropertyValue('--color-text-muted'));
  const borderMuted = parseCssColor(styles.getPropertyValue('--color-border-muted'));

  return {
    isDark,
    orbits: [
      mixColors(info, textSoft, isDark ? 0.08 : 0.28),
      mixColors(info, accentStrong, 0.45),
      mixColors(accent, accentStrong, 0.28),
      mixColors(accentStrong, textSoft, isDark ? 0.12 : 0.22),
      mixColors(info, accent, 0.58),
    ],
    ambient: [
      mixColors(borderMuted, info, isDark ? 0.2 : 0.12),
      mixColors(textMuted, accent, isDark ? 0.18 : 0.14),
      mixColors(textSoft, info, isDark ? 0.16 : 0.12),
    ],
  };
}

function buildScene({ width, height, reducedMotion }) {
  const isMobile = width < 790;
  const palette = readPalette();
  const center = {
    x: width / 2,
    y: height * (isMobile ? 0.54 : 0.52),
  };

  const safeZone = {
    radiusX: clamp(width * (isMobile ? 0.4 : 0.26), 156, isMobile ? 260 : 360),
    radiusY: clamp(height * (isMobile ? 0.26 : 0.19), 120, isMobile ? 228 : 240),
  };

  const bandCount = isMobile ? 5 : 7;
  const orbitParticles = [];
  const ambientParticles = [];

  for (let bandIndex = 0; bandIndex < bandCount; bandIndex += 1) {
    const ratio = bandCount === 1 ? 0.5 : bandIndex / (bandCount - 1);
    const particlesInBand = Math.round((isMobile ? 15 : 22) - (ratio * (isMobile ? 4 : 7)));
    const baseRadiusX = safeZone.radiusX + 34 + (ratio * Math.min(width * (isMobile ? 0.34 : 0.28), isMobile ? 180 : 320));
    const baseRadiusY = safeZone.radiusY + 28 + (ratio * Math.min(height * (isMobile ? 0.22 : 0.2), isMobile ? 110 : 180));
    const direction = bandIndex % 2 === 0 ? 1 : -1;

    for (let particleIndex = 0; particleIndex < particlesInBand; particleIndex += 1) {
      const segment = sampleWeightedSegment();
      const isDash = Math.random() > 0.36;
      const color = palette.orbits[(bandIndex + particleIndex) % palette.orbits.length];
      const opacityBase = palette.isDark ? 1 : 0.82;

      orbitParticles.push({
        type: isDash ? 'dash' : 'dot',
        angle: sampleAngle(segment),
        speed:
          randomInRange(0.00004, 0.0001)
          * direction
          * (1 - (ratio * 0.18))
          * (Math.random() > 0.78 ? -1 : 1),
        radiusX: baseRadiusX + randomInRange(-16, 16),
        radiusY: baseRadiusY + randomInRange(-12, 12),
        dashLength: isDash ? randomInRange(3.5, isMobile ? 6 : 7.5) : 0,
        size: isDash ? randomInRange(1, 1.6) : randomInRange(0.75, 1.55),
        opacity: randomInRange(isDash ? 0.12 : 0.14, isDash ? 0.34 : 0.4) * opacityBase,
        waveAmplitude: reducedMotion ? 0 : randomInRange(1.5, isMobile ? 5 : 8),
        waveSpeed: reducedMotion ? 0 : randomInRange(0.00008, 0.0002),
        phase: randomInRange(0, TAU),
        pulse: randomInRange(0.65, 1.25),
        color,
      });
    }
  }

  const ambientCount = isMobile ? 72 : 128;
  let attempts = 0;

  while (ambientParticles.length < ambientCount && attempts < ambientCount * 12) {
    attempts += 1;

    const x = Math.random() * width;
    const y = Math.random() * height;

    if (
      pointInEllipse(
        x,
        y,
        center.x,
        center.y,
        safeZone.radiusX * 1.16,
        safeZone.radiusY * 1.22,
      )
    ) {
      continue;
    }

    ambientParticles.push({
      x,
      y,
      size: randomInRange(0.55, 1.15),
      opacity: randomInRange(0.05, palette.isDark ? 0.18 : 0.13),
      pulse: randomInRange(0.25, 1.05),
      phase: randomInRange(0, TAU),
      color: palette.ambient[ambientParticles.length % palette.ambient.length],
    });
  }

  return {
    width,
    height,
    reducedMotion,
    center,
    orbitParticles,
    ambientParticles,
  };
}

function drawScene(ctx, scene, elapsedTime) {
  ctx.clearRect(0, 0, scene.width, scene.height);
  ctx.lineCap = 'round';

  for (const particle of scene.ambientParticles) {
    const pulse = scene.reducedMotion
      ? 1
      : 0.72 + (((Math.sin((elapsedTime * 0.00026 * particle.pulse) + particle.phase) + 1) * 0.5) * 0.38);

    ctx.beginPath();
    ctx.fillStyle = toRgba(particle.color, particle.opacity * pulse);
    ctx.arc(particle.x, particle.y, particle.size, 0, TAU);
    ctx.fill();
  }

  for (const particle of scene.orbitParticles) {
    const angle = scene.reducedMotion
      ? particle.angle
      : particle.angle + (elapsedTime * particle.speed);
    const waveOffset = scene.reducedMotion
      ? 0
      : Math.sin((elapsedTime * particle.waveSpeed) + particle.phase) * particle.waveAmplitude;
    const radiusX = particle.radiusX + waveOffset;
    const radiusY = particle.radiusY + (waveOffset * 0.68);
    const x = scene.center.x + (Math.cos(angle) * radiusX);
    const y = scene.center.y + (Math.sin(angle) * radiusY);
    const opacityPulse = scene.reducedMotion
      ? 1
      : 0.82 + (((Math.sin((elapsedTime * 0.00032 * particle.pulse) + particle.phase) + 1) * 0.5) * 0.3);

    if (particle.type === 'dot') {
      ctx.beginPath();
      ctx.fillStyle = toRgba(particle.color, particle.opacity * opacityPulse);
      ctx.arc(x, y, particle.size, 0, TAU);
      ctx.fill();
      continue;
    }

    const tangentX = -Math.sin(angle) * radiusX;
    const tangentY = Math.cos(angle) * radiusY;
    const rotation = Math.atan2(tangentY, tangentX);
    const halfLength = particle.dashLength / 2;
    const deltaX = Math.cos(rotation) * halfLength;
    const deltaY = Math.sin(rotation) * halfLength;

    ctx.beginPath();
    ctx.strokeStyle = toRgba(particle.color, particle.opacity * opacityPulse);
    ctx.lineWidth = particle.size;
    ctx.moveTo(x - deltaX, y - deltaY);
    ctx.lineTo(x + deltaX, y + deltaY);
    ctx.stroke();
  }
}

export default function AnimatedParticleBackground({ className = '' }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const frameRef = useRef(0);
  const sceneRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    if (!container || !canvas) {
      return undefined;
    }

    const context = canvas.getContext('2d', { alpha: true });

    if (!context) {
      return undefined;
    }

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let resizeObserver = null;
    let themeObserver = null;
    let disposed = false;

    const stopAnimation = () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = 0;
      }
    };

    const render = (time) => {
      if (!sceneRef.current) {
        return;
      }

      drawScene(context, sceneRef.current, time);
    };

    const animate = (time) => {
      if (disposed) {
        return;
      }

      render(time);
      frameRef.current = requestAnimationFrame(animate);
    };

    const syncScene = () => {
      const bounds = container.getBoundingClientRect();
      const width = Math.max(1, Math.round(bounds.width));
      const height = Math.max(1, Math.round(bounds.height));
      const dpr = Math.min(window.devicePixelRatio || 1, 1.8);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      sceneRef.current = buildScene({
        width,
        height,
        reducedMotion: motionQuery.matches,
      });

      stopAnimation();
      render(performance.now());

      if (!motionQuery.matches) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    const handleMotionChange = () => {
      syncScene();
    };

    resizeObserver = new ResizeObserver(() => {
      syncScene();
    });
    resizeObserver.observe(container);

    themeObserver = new MutationObserver((mutations) => {
      const hasThemeChange = mutations.some((mutation) => mutation.attributeName === THEME_ATTRIBUTE);
      if (hasThemeChange) {
        syncScene();
      }
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: [THEME_ATTRIBUTE],
    });

    if (motionQuery.addEventListener) {
      motionQuery.addEventListener('change', handleMotionChange);
    } else {
      motionQuery.addListener(handleMotionChange);
    }

    syncScene();

    return () => {
      disposed = true;
      stopAnimation();
      resizeObserver?.disconnect();
      themeObserver?.disconnect();

      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener('change', handleMotionChange);
      } else {
        motionQuery.removeListener(handleMotionChange);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden='true'
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`.trim()}
    >
      <canvas ref={canvasRef} className='absolute inset-0 h-full w-full' />
    </div>
  );
}
