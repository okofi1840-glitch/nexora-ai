import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { Send, Download, Sparkles, X, Wand2, Video, Circle, History, Plus, Trash2, Image as ImageIcon, Mic, Paperclip, Pencil, AlertCircle } from 'lucide-react';
import * as math from 'mathjs';

const BG_COLOR = '#FFFFFF';
const INK = '#1B1230';
const ACCENTS = ['#FF3D8A', '#7C3AED', '#0FBF9F', '#F5A623', '#FF6B4A', '#2B8FE0'];

function NexoraIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" style={{ display: 'block', flexShrink: 0 }}>
      <defs>
        <linearGradient id="nexoraGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF3D8A" />
          <stop offset="45%" stopColor="#7C3AED" />
          <stop offset="75%" stopColor="#0FBF9F" />
          <stop offset="100%" stopColor="#F5A623" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="11" fill="url(#nexoraGrad)" />
      {/* bold "N" letterform */}
      <polygon points="9,9 15,9 15,31 9,31" fill="#FFFFFF" />
      <polygon points="25,9 31,9 31,31 25,31" fill="#FFFFFF" />
      <polygon points="9,9 15,9 31,31 25,31" fill="#FFFFFF" />
      {/* sparkle accent */}
      <path d="M32.2 6.2 L33.3 8.6 L35.7 9.7 L33.3 10.8 L32.2 13.2 L31.1 10.8 L28.7 9.7 L31.1 8.6 Z" fill="#FFFFFF" opacity="0.95" />
    </svg>
  );
}

// Premium icon variant #2 — 3D glass
function NexoraIconGlass({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" style={{ display: 'block', flexShrink: 0 }}>
      <defs>
        <linearGradient id="glassGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="12" fill="#0B1220" />
      <rect x="1.5" y="1.5" width="37" height="37" rx="11.5" fill="none" stroke="url(#glassGrad)" strokeWidth="1.6" opacity="0.9" />
      <rect x="0.5" y="0.5" width="39" height="39" rx="12.5" fill="none" stroke="url(#glassGrad)" strokeWidth="3.5" opacity="0.22" />
      <polygon points="10,10 15,10 15,30 10,30" fill="url(#glassGrad)" />
      <polygon points="25,10 30,10 30,30 25,30" fill="url(#glassGrad)" />
      <polygon points="10,10 15,10 30,30 25,30" fill="url(#glassGrad)" />
      <path d="M31.5 6.5 L32.4 8.4 L34.3 9.3 L32.4 10.2 L31.5 12.1 L30.6 10.2 L28.7 9.3 L30.6 8.4 Z" fill="#FFFFFF" />
    </svg>
  );
}

// Premium icon variant #4 — luxury gold
function NexoraIconLuxury({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" style={{ display: 'block', flexShrink: 0 }}>
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFE1A0" />
          <stop offset="100%" stopColor="#B5790A" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="12" fill="#0B0B0B" stroke="#3A2E12" strokeWidth="1" />
      <polygon points="10,10 15,10 15,30 10,30" fill="url(#goldGrad)" />
      <polygon points="25,10 30,10 30,30 25,30" fill="url(#goldGrad)" />
      <polygon points="10,10 15,10 30,30 25,30" fill="url(#goldGrad)" />
      <path d="M31.5 6.5 L32.4 8.4 L34.3 9.3 L32.4 10.2 L31.5 12.1 L30.6 10.2 L28.7 9.3 L30.6 8.4 Z" fill="#FFE1A0" />
    </svg>
  );
}

// Premium icon variant #5 — neon cyber
function NexoraIconNeon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" style={{ display: 'block', flexShrink: 0 }}>
      <defs>
        <linearGradient id="neonGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#C084FC" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="12" fill="#150B2E" />
      <polyline points="11,29 11,10 29,29 29,10" fill="none" stroke="url(#neonGrad)" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.25" />
      <polyline points="11,29 11,10 29,29 29,10" fill="none" stroke="url(#neonGrad)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Premium icon variant #9 — orb / energy
function NexoraIconOrb({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" style={{ display: 'block', flexShrink: 0 }}>
      <defs>
        <radialGradient id="orbGrad" cx="35%" cy="32%" r="65%">
          <stop offset="0%" stopColor="#D6ECFF" />
          <stop offset="55%" stopColor="#3DA9FC" />
          <stop offset="100%" stopColor="#7C3AED" />
        </radialGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="12" fill="#F8FAFC" />
      <circle cx="20" cy="21" r="10" fill="url(#orbGrad)" />
      <circle cx="9" cy="12" r="1.6" fill="#7C3AED" opacity="0.7" />
      <circle cx="32" cy="10" r="1.2" fill="#3DA9FC" opacity="0.7" />
      <circle cx="33" cy="28" r="1.4" fill="#7C3AED" opacity="0.6" />
    </svg>
  );
}

const PREMIUM_ICONS = [NexoraIconGlass, NexoraIconLuxury, NexoraIconNeon, NexoraIconOrb];

function NexoraIconPremium({ size = 28 }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % PREMIUM_ICONS.length), 3000);
    return () => clearInterval(id);
  }, []);
  const Variant = PREMIUM_ICONS[idx];
  return (
    <div key={idx} className="nexora-icon-fade" style={{ display: 'inline-flex' }}>
      <Variant size={size} />
    </div>
  );
}


const FREE_CANVAS = 240, PREMIUM_CANVAS = 320;
const MAX_CONVERSATIONS = 50;
const FREE_EXPORT_RES = 1080, PREMIUM_EXPORT_RES = 2160;
const FREE_VIDEO_RES = 720, PREMIUM_VIDEO_RES = 1080;
const FREE_MAX_SHAPES = 18, PREMIUM_MAX_SHAPES = 34;
const FREE_VIDEO_MS = 3600, PREMIUM_VIDEO_MS = 6000;

function clampNum(v, fallback) { const n = typeof v === 'number' && !isNaN(v) ? v : fallback; return Math.max(0, Math.min(1, n)); }

const DEFAULT_ACCOUNT = { isPremium: false };

function polygonPoints(sides, outerR, innerR) {
  const pts = [];
  const n = innerR != null ? sides * 2 : sides;
  for (let i = 0; i < n; i++) {
    const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
    const r = innerR != null ? (i % 2 === 0 ? outerR : innerR) : outerR;
    pts.push([Math.cos(angle) * r, Math.sin(angle) * r]);
  }
  return pts;
}

function drawShapes(ctx, size, background, background2, shapes) {
  ctx.clearRect(0, 0, size, size);
  if (background2) {
    const bgGrad = ctx.createLinearGradient(0, 0, size, size);
    bgGrad.addColorStop(0, background || '#FFFFFF');
    bgGrad.addColorStop(1, background2);
    ctx.fillStyle = bgGrad;
  } else {
    ctx.fillStyle = background || '#FFFFFF';
  }
  ctx.fillRect(0, 0, size, size);

  (shapes || []).forEach((s) => {
    if (s.type === 'path' && Array.isArray(s.points) && s.points.length >= 3) {
      ctx.save();
      ctx.globalAlpha = s.opacity ?? 0.9;
      let fill = s.color || INK;
      if (s.color2) {
        const grad = ctx.createLinearGradient(0, 0, size, size);
        grad.addColorStop(0, s.color || INK);
        grad.addColorStop(1, s.color2);
        fill = grad;
      }
      ctx.fillStyle = fill;
      if (s.blur) { ctx.shadowColor = 'rgba(0,0,0,0.18)'; ctx.shadowBlur = s.blur * 24; }
      ctx.beginPath();
      s.points.forEach(([px, py], idx) => {
        const X = px * size, Y = py * size;
        if (idx === 0) ctx.moveTo(X, Y); else ctx.lineTo(X, Y);
      });
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      return;
    }

    const cx = (s.x ?? 0.5) * size;
    const cy = (s.y ?? 0.5) * size;
    const w = (s.w ?? 0.2) * size;
    const h = (s.h ?? 0.2) * size;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(((s.rotation || 0) * Math.PI) / 180);
    ctx.globalAlpha = s.opacity ?? 0.88;
    if (s.blur) { ctx.shadowColor = 'rgba(0,0,0,0.16)'; ctx.shadowBlur = s.blur * 20; }

    let fill = s.color || INK;
    if (s.color2) {
      const grad = s.type === 'circle' || s.type === 'ellipse'
        ? ctx.createRadialGradient(0, 0, 0, 0, 0, Math.max(w, h) / 2)
        : ctx.createLinearGradient(-w / 2, -h / 2, w / 2, h / 2);
      grad.addColorStop(0, s.color || INK);
      grad.addColorStop(1, s.color2);
      fill = grad;
    }
    ctx.fillStyle = fill;
    ctx.strokeStyle = s.color || INK;

    if (s.type === 'circle') { ctx.beginPath(); ctx.arc(0, 0, w / 2, 0, Math.PI * 2); ctx.fill(); }
    else if (s.type === 'ellipse') { ctx.beginPath(); ctx.ellipse(0, 0, w / 2, h / 2, 0, 0, Math.PI * 2); ctx.fill(); }
    else if (s.type === 'rect') { ctx.fillRect(-w / 2, -h / 2, w, h); }
    else if (s.type === 'triangle') { ctx.beginPath(); ctx.moveTo(0, -h / 2); ctx.lineTo(w / 2, h / 2); ctx.lineTo(-w / 2, h / 2); ctx.closePath(); ctx.fill(); }
    else if (s.type === 'line') { ctx.lineWidth = Math.max(1, h / 4); ctx.beginPath(); ctx.moveTo(-w / 2, 0); ctx.lineTo(w / 2, 0); ctx.stroke(); }
    else if (s.type === 'polygon') {
      const pts = polygonPoints(s.sides || 5, w / 2, null);
      ctx.beginPath();
      pts.forEach(([px, py], idx) => (idx === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)));
      ctx.closePath(); ctx.fill();
    } else if (s.type === 'star') {
      const pts = polygonPoints(s.sides || 5, w / 2, (w / 2) * 0.45);
      ctx.beginPath();
      pts.forEach(([px, py], idx) => (idx === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)));
      ctx.closePath(); ctx.fill();
    }
    ctx.restore();
  });

  // finishing pass: soft vignette for a more composed, less flat look
  const vignette = ctx.createRadialGradient(size / 2, size / 2, size * 0.35, size / 2, size / 2, size * 0.72);
  vignette.addColorStop(0, 'rgba(0,0,0,0)');
  vignette.addColorStop(1, 'rgba(0,0,0,0.07)');
  ctx.globalAlpha = 1;
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, size, size);
}

function renderInline(text, keyPrefix) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).filter(Boolean);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={`${keyPrefix}-${i}`}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={`${keyPrefix}-${i}`} style={{ background: 'rgba(124,58,237,0.1)', color: '#7C3AED', padding: '1px 5px', borderRadius: 4, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.9em' }}>
          {part.slice(1, -1)}
        </code>
      );
    }
    return <React.Fragment key={`${keyPrefix}-${i}`}>{part}</React.Fragment>;
  });
}

function MarkdownText({ content }) {
  const blocks = [];
  const lines = (content || '').split('\n');
  let i = 0;
  let listBuffer = [];
  let listType = null;

  function flushList() {
    if (listBuffer.length === 0) return;
    const Tag = listType === 'ol' ? 'ol' : 'ul';
    blocks.push(
      <Tag key={`list-${blocks.length}`} style={{ margin: '4px 0', paddingLeft: 20 }}>
        {listBuffer.map((item, idx) => <li key={idx} style={{ marginBottom: 2 }}>{renderInline(item, `li-${blocks.length}-${idx}`)}</li>)}
      </Tag>
    );
    listBuffer = []; listType = null;
  }

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim().startsWith('```')) {
      const lang = line.trim().slice(3).trim();
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) { codeLines.push(lines[i]); i++; }
      i++;
      flushList();
      blocks.push(
        <pre key={`code-${blocks.length}`} style={{ background: '#1B1230', color: '#F2EEFF', padding: '10px 12px', borderRadius: 8, overflowX: 'auto', fontSize: 12.5, fontFamily: "'JetBrains Mono', monospace", margin: '6px 0' }}>
          {lang && <div style={{ color: 'rgba(242,238,255,0.4)', fontSize: 10.5, marginBottom: 4 }}>{lang}</div>}
          <code>{codeLines.join('\n')}</code>
        </pre>
      );
      continue;
    }

    const headerMatch = line.match(/^(#{1,3})\s+(.*)/);
    if (headerMatch) {
      flushList();
      const level = headerMatch[1].length;
      blocks.push(
        <div key={`h-${blocks.length}`} style={{ fontWeight: 700, fontSize: level === 1 ? 16 : level === 2 ? 15 : 14, margin: '6px 0 2px' }}>
          {renderInline(headerMatch[2], `h-${blocks.length}`)}
        </div>
      );
      i++; continue;
    }

    const olMatch = line.match(/^\s*\d+\.\s+(.*)/);
    const ulMatch = line.match(/^\s*[-*]\s+(.*)/);
    if (olMatch) {
      if (listType !== 'ol') flushList();
      listType = 'ol'; listBuffer.push(olMatch[1]); i++; continue;
    }
    if (ulMatch) {
      if (listType !== 'ul') flushList();
      listType = 'ul'; listBuffer.push(ulMatch[1]); i++; continue;
    }

    flushList();
    if (line.trim() === '') { i++; continue; }
    blocks.push(<div key={`p-${blocks.length}`} style={{ margin: '2px 0' }}>{renderInline(line, `p-${blocks.length}`)}</div>);
    i++;
  }
  flushList();
  return <>{blocks}</>;
}

function ArtworkCard({ artwork, size, exportRes }) {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr; canvas.height = size * dpr;
    canvas.style.width = size + 'px'; canvas.style.height = size + 'px';
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    drawShapes(ctx, size, artwork.background, artwork.background2, artwork.shapes);
  }, [artwork, size]);

  const download = () => {
    const hiRes = document.createElement('canvas');
    hiRes.width = exportRes; hiRes.height = exportRes;
    const ctx = hiRes.getContext('2d');
    drawShapes(ctx, exportRes, artwork.background, artwork.background2, artwork.shapes);
    const link = document.createElement('a');
    link.download = `${(artwork.title || 'nexora-artwork').replace(/\s+/g, '-').toLowerCase()}-${exportRes}px.png`;
    link.href = hiRes.toDataURL('image/png');
    link.click();
  };

  return (
    <div style={{ marginTop: 8, borderRadius: 12, overflow: 'hidden', border: '1px solid #ECE7F5', width: size, boxShadow: '0 2px 10px rgba(27,18,48,0.06)' }}>
      <canvas ref={ref} style={{ display: 'block' }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', background: '#FAF9FD', borderTop: '1px solid #ECE7F5' }}>
        <span style={{ fontSize: 12, color: INK, fontFamily: "'Fraunces', serif", fontStyle: 'italic' }}>{artwork.title || 'Untitled'}</span>
        <button onClick={download} title={`Download at ${exportRes}×${exportRes}px`} style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'none', border: 'none', cursor: 'pointer' }}>
          <span style={{ fontSize: 9.5, color: 'rgba(27,18,48,0.4)', fontFamily: "'JetBrains Mono', monospace" }}>{exportRes}px</span>
          <Download size={14} color={INK} />
        </button>
      </div>
    </div>
  );
}

function computeMotionShapes(baseShapes, t) {
  return (baseShapes || []).map((s) => {
    if (s.type === 'path') return s;
    const motion = s.motion || { type: 'drift', speed: 0.3 };
    const speed = clampNum(motion.speed, 0.3);
    let x = s.x ?? 0.5, y = s.y ?? 0.5, w = s.w ?? 0.2, h = s.h ?? 0.2, rotation = s.rotation || 0;

    if (motion.type === 'orbit') {
      const angle = t * (0.4 + speed * 1.6) * Math.PI * 2;
      x = (s.x ?? 0.5) + Math.cos(angle) * 0.09;
      y = (s.y ?? 0.5) + Math.sin(angle) * 0.09;
    } else if (motion.type === 'pulse') {
      const scale = 1 + 0.3 * Math.sin(t * (1 + speed * 3) * Math.PI * 2);
      w = (s.w ?? 0.2) * scale; h = (s.h ?? 0.2) * scale;
    } else if (motion.type === 'spin') {
      rotation = (s.rotation || 0) + t * (40 + speed * 260);
    } else {
      const phase = (t * (0.2 + speed * 0.8)) % 1;
      const tri = phase < 0.5 ? phase * 2 : 2 - phase * 2;
      x = (s.x ?? 0.5) + (tri - 0.5) * 0.14;
    }
    return { ...s, x, y, w, h, rotation };
  });
}

function VideoCard({ video, size, durationMs, renderRes }) {
  const canvasRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [unsupported, setUnsupported] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // internal pixel buffer is much larger than the on-screen size so the
    // recorded stream (captureStream reads the buffer, not the CSS size) is sharp
    canvas.width = renderRes; canvas.height = renderRes;
    canvas.style.width = size + 'px'; canvas.style.height = size + 'px';
    const ctx = canvas.getContext('2d');

    setUnsupported(!(typeof window.MediaRecorder !== 'undefined' && canvas.captureStream));

    let raf;
    const start = performance.now();
    function loop(now) {
      const t = ((now - start) / 1000) % 6;
      const shapes = computeMotionShapes(video.shapes, t);
      drawShapes(ctx, renderRes, video.background, video.background2, shapes);
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [video, size, renderRes]);

  const record = () => {
    const canvas = canvasRef.current;
    if (!canvas || unsupported || recording) return;
    try {
      const stream = canvas.captureStream(30);
      const recorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
      const chunks = [];
      recorder.ondataavailable = (e) => { if (e.data.size > 0) chunks.push(e.data); };
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        setVideoUrl(URL.createObjectURL(blob));
        setRecording(false);
      };
      setVideoUrl(null);
      recorder.start();
      setRecording(true);
      setTimeout(() => recorder.stop(), durationMs);
    } catch (e) { setUnsupported(true); }
  };

  return (
    <div style={{ marginTop: 8, borderRadius: 12, overflow: 'hidden', border: '1px solid #ECE7F5', width: size, boxShadow: '0 2px 10px rgba(27,18,48,0.06)' }}>
      <canvas ref={canvasRef} style={{ display: 'block' }} />
      <div style={{ padding: '8px 10px', background: '#FAF9FD', borderTop: '1px solid #ECE7F5' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
          <span style={{ fontSize: 12, color: INK, fontFamily: "'Fraunces', serif", fontStyle: 'italic' }}>{video.title || 'Untitled loop'}</span>
          <span style={{ fontSize: 9.5, color: 'rgba(27,18,48,0.4)', fontFamily: "'JetBrains Mono', monospace" }}>{renderRes}p</span>
        </div>
        {unsupported ? (
          <div style={{ fontSize: 10.5, color: 'rgba(27,18,48,0.5)' }}>Video export isn't supported in this browser — the loop still plays above.</div>
        ) : recording ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, color: '#FF3D8A' }}>
            <Circle size={8} fill="#FF3D8A" color="#FF3D8A" /> recording…
          </div>
        ) : videoUrl ? (
          <a href={videoUrl} download={`${(video.title || 'nexora-clip').replace(/\s+/g, '-').toLowerCase()}.webm`} style={{ fontSize: 11.5, color: '#0FBF9F', display: 'flex', alignItems: 'center', gap: 5, textDecoration: 'none' }}>
            <Download size={13} /> download clip
          </a>
        ) : (
          <button onClick={record} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11.5, color: INK, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <Video size={13} /> record clip
          </button>
        )}
      </div>
    </div>
  );
}

function AppCard({ app, accent }) {
  const initial = useMemo(() => {
    const s = {};
    (app.components || []).forEach((c) => { if (c.type !== 'display') s[c.id] = c.default ?? (c.type === 'toggle' ? false : ''); });
    return s;
  }, [app]);
  const [state, setState] = useState(initial);
  const results = useMemo(() => {
    const 
