"use client";

// ─────────────────────────────────────────────────────────────
//  Hand-drawn SVG illustrations for each celebration.
//  Haldi → turmeric bowl · Mehendi → henna hand · Wedding → couple
// ─────────────────────────────────────────────────────────────

/* ============ HALDI — bowl of turmeric (haldi bati) ============ */
export function HaldiBowl({ className = "" }) {
  return (
    <svg viewBox="0 0 140 140" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hb-bowl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f4a93b" />
          <stop offset="1" stopColor="#b9650a" />
        </linearGradient>
        <linearGradient id="hb-paste" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fde047" />
          <stop offset="1" stopColor="#f59e0b" />
        </linearGradient>
      </defs>

      {/* shadow */}
      <ellipse cx="70" cy="123" rx="46" ry="7" fill="#ea8c0a" opacity="0.18" />

      {/* leaves */}
      <path d="M32 98 Q13 92 17 74 Q36 80 36 98 Z" fill="#79b04e" />
      <path d="M108 98 Q127 92 123 74 Q104 80 104 98 Z" fill="#79b04e" />

      {/* spoon */}
      <g transform="rotate(22 98 46)">
        <rect x="95.5" y="26" width="5" height="34" rx="2.4" fill="#b5793a" />
        <ellipse cx="98" cy="27" rx="8.5" ry="5.6" fill="#9c5f2c" />
      </g>

      {/* bowl body */}
      <path d="M24 79 Q24 118 70 118 Q116 118 116 79 Z" fill="url(#hb-bowl)" />
      <path d="M30 94 Q70 107 110 94" stroke="#7c4408" strokeWidth="2" fill="none" opacity="0.45" />
      {/* decorative dots on the bowl */}
      {[38, 52, 66, 80, 94, 102].map((x, i) => (
        <circle key={x} cx={x} cy={100 - (i % 2) * 3} r="1.6" fill="#fde68a" opacity="0.7" />
      ))}

      {/* rim */}
      <ellipse cx="70" cy="79" rx="46" ry="13" fill="#9c5608" />
      <ellipse cx="70" cy="77" rx="41" ry="10.5" fill="#e07d0a" />

      {/* turmeric mound + paste */}
      <path d="M44 76 Q55 49 70 55 Q87 47 96 76 Z" fill="url(#hb-paste)" />
      <ellipse cx="70" cy="76" rx="36" ry="8.5" fill="url(#hb-paste)" />
      <path d="M54 68 Q66 60 80 66" stroke="#ea8c0a" strokeWidth="2" fill="none" opacity="0.55" />
      <circle cx="62" cy="63" r="2" fill="#fff7cd" opacity="0.8" />

      {/* marigolds at the base */}
      <Marigold x={30} y={104} s={16} />
      <Marigold x={110} y={106} s={13} />

      {/* scattered turmeric powder */}
      {[
        [20, 116],
        [120, 118],
        [50, 122],
        [92, 121],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.2" fill="#f59e0b" opacity="0.6" />
      ))}
    </svg>
  );
}

function Marigold({ x, y, s }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((d) => (
        <ellipse
          key={d}
          cx="0"
          cy={-s / 2.6}
          rx={s / 4.5}
          ry={s / 2.6}
          fill="#f9a825"
          transform={`rotate(${d})`}
        />
      ))}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((d) => (
        <ellipse
          key={"i" + d}
          cx="0"
          cy={-s / 4}
          rx={s / 6}
          ry={s / 4}
          fill="#f57f17"
          transform={`rotate(${d})`}
        />
      ))}
      <circle cx="0" cy="0" r={s / 6} fill="#e65100" />
    </g>
  );
}

/* ============ MEHENDI — henna-decorated hand ============ */
export function MehendiHand({ className = "" }) {
  const henna = "#7c2d12";
  return (
    <svg viewBox="0 0 140 140" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mh-skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f7e0c8" />
          <stop offset="1" stopColor="#efc9a3" />
        </linearGradient>
      </defs>

      {/* soft shadow */}
      <ellipse cx="70" cy="126" rx="30" ry="5" fill="#7c2d12" opacity="0.14" />

      <g stroke={henna} strokeWidth="1.6">
        {/* palm + wrist */}
        <path
          d="M44 70 Q42 108 56 120 Q70 128 84 120 Q98 108 96 70 Z"
          fill="url(#mh-skin)"
        />
        {/* fingers */}
        <rect x="47" y="30" width="9.5" height="44" rx="4.7" fill="url(#mh-skin)" />
        <rect x="60" y="22" width="9.5" height="52" rx="4.7" fill="url(#mh-skin)" />
        <rect x="73" y="27" width="9.5" height="47" rx="4.7" fill="url(#mh-skin)" />
        <rect x="85" y="36" width="8.5" height="38" rx="4.2" fill="url(#mh-skin)" />
        {/* thumb */}
        <rect
          x="30"
          y="64"
          width="9"
          height="30"
          rx="4.5"
          fill="url(#mh-skin)"
          transform="rotate(-38 34 78)"
        />
      </g>

      {/* ===== henna patterns ===== */}
      <g fill={henna}>
        {/* fingertip caps */}
        <path d="M47 34 q4.7 -7 9.5 0 v3 h-9.5 z" />
        <path d="M60 26 q4.7 -7 9.5 0 v3 h-9.5 z" />
        <path d="M73 31 q4.7 -7 9.5 0 v3 h-9.5 z" />
        <path d="M85 40 q4.2 -6 8.5 0 v3 h-8.5 z" />
      </g>
      <g stroke={henna} strokeWidth="1.4" fill="none">
        {/* finger vines + dots */}
        <path d="M51.7 40 v26" />
        <path d="M64.7 33 v30" />
        <path d="M77.7 38 v26" />
        <path d="M89 46 v20" />
        {[42, 50, 58].map((yy) => (
          <g key={yy}>
            <circle cx="51.7" cy={yy} r="2.4" />
            <circle cx="64.7" cy={yy - 6} r="2.4" />
            <circle cx="77.7" cy={yy - 2} r="2.4" />
          </g>
        ))}
        {/* central mandala flower on the palm */}
        <circle cx="70" cy="92" r="4" fill={henna} stroke="none" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((d) => (
          <ellipse
            key={d}
            cx="70"
            cy="80"
            rx="3.2"
            ry="7"
            transform={`rotate(${d} 70 92)`}
          />
        ))}
        <circle cx="70" cy="92" r="15" strokeDasharray="2 4" />
        {/* wrist band */}
        <path d="M54 116 Q70 122 86 116" strokeWidth="2" />
        <path d="M55 111 Q70 117 85 111" strokeWidth="1.4" />
        {[58, 66, 74, 82].map((x) => (
          <circle key={x} cx={x} cy={119} r="1.6" fill={henna} stroke="none" />
        ))}
      </g>
    </svg>
  );
}

/* ============ WEDDING — bride & groom couple ============ */
export function CoupleFigure({ className = "" }) {
  return (
    <svg viewBox="0 0 170 150" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cf-lehenga" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f072a3" />
          <stop offset="1" stopColor="#c2185b" />
        </linearGradient>
        <linearGradient id="cf-sherwani" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#efdca9" />
          <stop offset="1" stopColor="#c69749" />
        </linearGradient>
      </defs>

      {/* floral arch */}
      <path
        d="M18 60 Q85 -8 152 60"
        fill="none"
        stroke="#f7a8c4"
        strokeWidth="3"
        opacity="0.7"
      />
      {[22, 45, 70, 85, 100, 125, 148].map((x, i) => {
        const y = 60 - Math.sin(((x - 18) / 134) * Math.PI) * 66;
        return <circle key={x} cx={x} cy={y} r={i % 2 ? 3.4 : 2.4} fill={i % 2 ? "#e34985" : "#f9a825"} />;
      })}

      {/* shadow */}
      <ellipse cx="85" cy="140" rx="58" ry="6" fill="#c2185b" opacity="0.12" />

      {/* ===== Groom (left) ===== */}
      <g>
        {/* churidar legs */}
        <rect x="52" y="112" width="7" height="24" rx="3" fill="#e9d6a3" />
        <rect x="61" y="112" width="7" height="24" rx="3" fill="#e9d6a3" />
        <ellipse cx="55.5" cy="137" rx="5" ry="2.6" fill="#8a5a2b" />
        <ellipse cx="64.5" cy="137" rx="5" ry="2.6" fill="#8a5a2b" />
        {/* sherwani */}
        <path d="M46 70 Q60 62 74 70 L79 118 Q60 124 41 118 Z" fill="url(#cf-sherwani)" />
        <path d="M60 66 L60 118" stroke="#b98a3c" strokeWidth="1.6" opacity="0.7" />
        {[80, 92, 104].map((y) => (
          <circle key={y} cx="60" cy={y} r="1.7" fill="#8a5a2b" />
        ))}
        {/* dupatta / stole */}
        <path d="M50 72 L44 110" stroke="#e34985" strokeWidth="4" opacity="0.8" strokeLinecap="round" />
        {/* neck + head */}
        <rect x="56" y="58" width="8" height="9" fill="#e8b98f" />
        <circle cx="60" cy="49" r="12" fill="#e8b98f" />
        {/* turban / topi */}
        <path d="M48 46 Q60 30 72 46 Q60 40 48 46 Z" fill="#8f1c49" />
        <path d="M47 46 Q60 50 73 46 L73 43 Q60 38 47 43 Z" fill="#a81d56" />
        <circle cx="72" cy="43" r="3" fill="#f9a825" />
      </g>

      {/* ===== Bride (right) ===== */}
      <g>
        {/* lehenga skirt */}
        <path d="M92 96 Q110 92 128 96 L136 134 Q110 142 84 134 Z" fill="url(#cf-lehenga)" />
        {/* gold hem */}
        <path d="M84 134 Q110 142 136 134" fill="none" stroke="#f9c95b" strokeWidth="3" />
        {/* choli / bodice */}
        <path d="M100 74 Q110 70 120 74 L122 96 Q110 100 98 96 Z" fill="#c2185b" />
        {/* dupatta over head + side */}
        <path
          d="M96 44 Q110 26 124 44 Q130 70 126 96 L120 96 Q124 66 118 50 Q110 40 102 50 Q96 66 100 96 L94 96 Q90 66 96 44 Z"
          fill="#f7a8c4"
          opacity="0.9"
        />
        {/* head + neck */}
        <rect x="106" y="54" width="8" height="9" fill="#e8b98f" />
        <circle cx="110" cy="47" r="11" fill="#e8b98f" />
        {/* hair peeking */}
        <path d="M100 44 Q110 34 120 44 Q110 40 100 44 Z" fill="#3b2a33" />
        {/* maang tikka + bindi */}
        <circle cx="110" cy="38" r="1.7" fill="#f9c95b" />
        <circle cx="110" cy="45" r="1.4" fill="#c2185b" />
        {/* jewellery */}
        <path d="M104 60 Q110 64 116 60" stroke="#f9c95b" strokeWidth="1.6" fill="none" />
      </g>

      {/* joined hands / heart between them */}
      <path
        d="M85 104 c-3 -4 -9 -1 -9 3 c0 4 9 9 9 9 c0 0 9 -5 9 -9 c0 -4 -6 -7 -9 -3 z"
        fill="#e34985"
      />
    </svg>
  );
}
