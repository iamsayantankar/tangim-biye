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

/* ====== HALDI — couple in yellow with marigold garlands ====== */
function Garland({ x, len }) {
  const dots = [];
  for (let y = 2; y < len; y += 11) dots.push(y);
  return (
    <g>
      <line x1={x} y1="0" x2={x} y2={len} stroke="#6aa84f" strokeWidth="1" opacity="0.5" />
      {dots.map((y, i) => (
        <circle key={y} cx={x} cy={y} r="4.4" fill={i % 2 ? "#fbbf24" : "#f97316"} />
      ))}
    </g>
  );
}

export function HaldiCouple({ className = "" }) {
  return (
    <svg viewBox="0 0 200 190" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hc-yellow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fde047" />
          <stop offset="1" stopColor="#f59e0b" />
        </linearGradient>
        <linearGradient id="hc-yellow2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fcd34d" />
          <stop offset="1" stopColor="#ea8c0a" />
        </linearGradient>
      </defs>

      {/* marigold garlands hanging from the top */}
      <Garland x={18} len={70} />
      <Garland x={40} len={52} />
      <Garland x={160} len={52} />
      <Garland x={182} len={70} />

      {/* floor shadow */}
      <ellipse cx="100" cy="178" rx="66" ry="7" fill="#ea8c0a" opacity="0.15" />

      {/* ===== Groom (left) — yellow kurta ===== */}
      <g>
        <rect x="70" y="150" width="7" height="24" rx="3" fill="#efe6c8" />
        <rect x="80" y="150" width="7" height="24" rx="3" fill="#efe6c8" />
        <ellipse cx="73.5" cy="176" rx="5" ry="2.6" fill="#8a5a2b" />
        <ellipse cx="83.5" cy="176" rx="5" ry="2.6" fill="#8a5a2b" />
        <path d="M62 100 Q78 92 94 100 L99 156 Q78 162 57 156 Z" fill="url(#hc-yellow)" />
        <path d="M78 96 L78 156" stroke="#c2700b" strokeWidth="1.4" opacity="0.6" />
        {[112, 126, 140].map((y) => (
          <circle key={y} cx="78" cy={y} r="1.6" fill="#c2700b" />
        ))}
        <rect x="74" y="88" width="8" height="10" fill="#e8b98f" />
        <circle cx="78" cy="79" r="12" fill="#e8b98f" />
        <path d="M66 76 Q78 60 90 76 Q78 70 66 76 Z" fill="#2b2028" />
        {/* haldi smear on cheek */}
        <circle cx="72" cy="82" r="2.2" fill="#f59e0b" opacity="0.8" />
      </g>

      {/* ===== Bride (right) — yellow lehenga ===== */}
      <g>
        <path d="M104 124 Q122 120 140 124 L148 172 Q122 180 96 172 Z" fill="url(#hc-yellow2)" />
        <path d="M96 172 Q122 180 148 172" fill="none" stroke="#c2700b" strokeWidth="2.5" />
        <path d="M112 100 Q122 96 132 100 L134 124 Q122 128 110 124 Z" fill="#f59e0b" />
        <path
          d="M108 74 Q122 56 136 74 Q142 100 138 124 L132 124 Q136 92 130 78 Q122 68 114 78 Q108 92 112 124 L106 124 Q102 100 108 74 Z"
          fill="#fcd34d"
          opacity="0.92"
        />
        <rect x="118" y="86" width="8" height="10" fill="#e8b98f" />
        <circle cx="122" cy="78" r="11" fill="#e8b98f" />
        <path d="M112 74 Q122 64 132 74 Q122 70 112 74 Z" fill="#2b2028" />
        <circle cx="122" cy="70" r="1.6" fill="#c2185b" />
        {/* haldi smear */}
        <circle cx="128" cy="82" r="2.2" fill="#f59e0b" opacity="0.8" />
        {/* jewellery */}
        <path d="M116 92 Q122 96 128 92" stroke="#c2700b" strokeWidth="1.4" fill="none" />
      </g>

      {/* turmeric bowl (haldi bati) between them */}
      <g transform="translate(100 158)">
        <ellipse cx="0" cy="9" rx="15" ry="3" fill="#ea8c0a" opacity="0.2" />
        <path d="M-12 0 Q-12 12 0 12 Q12 12 12 0 Z" fill="#b9650a" />
        <ellipse cx="0" cy="0" rx="12" ry="3.4" fill="#e07d0a" />
        <path d="M-8 -1 Q-2 -9 0 -6 Q4 -10 8 -1 Z" fill="#fde047" />
        <ellipse cx="0" cy="-0.5" rx="9" ry="2.2" fill="#fbbf24" />
        <rect x="8" y="-12" width="2.6" height="14" rx="1.3" transform="rotate(20 9 -5)" fill="#a1662f" />
      </g>
    </svg>
  );
}

/* ====== MEHENDI — girl peeking over her henna hands + florals ====== */
function Bloom({ x, y, s, c }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {[0, 72, 144, 216, 288].map((d) => (
        <ellipse
          key={d}
          cx="0"
          cy={-s * 0.72}
          rx={s * 0.42}
          ry={s * 0.72}
          fill={c}
          transform={`rotate(${d})`}
        />
      ))}
      <circle r={s * 0.34} fill="#f9c95b" />
    </g>
  );
}

function HennaPalm({ flip }) {
  const henna = "#7c2d12";
  return (
    <g transform={flip ? "scale(-1,1)" : ""}>
      {/* skin */}
      <g stroke={henna} strokeWidth="1.4">
        <path
          d="M-15 12 Q-16 34 -6 42 Q4 48 14 42 Q24 34 23 12 Z"
          fill="url(#mg-skin)"
        />
        <rect x="-13" y="-24" width="7" height="34" rx="3.4" fill="url(#mg-skin)" />
        <rect x="-4" y="-30" width="7" height="40" rx="3.4" fill="url(#mg-skin)" />
        <rect x="5" y="-26" width="7" height="36" rx="3.4" fill="url(#mg-skin)" />
        <rect x="14" y="-18" width="6.5" height="28" rx="3.2" fill="url(#mg-skin)" />
        <rect
          x="-27"
          y="8"
          width="7"
          height="22"
          rx="3.4"
          fill="url(#mg-skin)"
          transform="rotate(-36 -23 19)"
        />
      </g>
      {/* henna */}
      <g fill={henna}>
        <path d="M-13 -20 q3.5 -5 7 0 v2.5 h-7 z" />
        <path d="M-4 -26 q3.5 -5 7 0 v2.5 h-7 z" />
        <path d="M5 -22 q3.5 -5 7 0 v2.5 h-7 z" />
        <circle cx="4" cy="20" r="2.6" />
      </g>
      <g stroke={henna} strokeWidth="1.1" fill="none">
        <path d="M-9.5 -14 v18" />
        <path d="M-0.5 -20 v22" />
        <path d="M8.5 -16 v18" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((d) => (
          <ellipse key={d} cx="4" cy="12" rx="2.4" ry="5.2" transform={`rotate(${d} 4 20)`} />
        ))}
        <circle cx="4" cy="20" r="10.5" strokeDasharray="1.5 3" />
        <path d="M-8 36 Q4 41 16 36" strokeWidth="1.6" />
      </g>
      {/* flower bracelet */}
      <g>
        {[-9, 0, 9, 18].map((x) => (
          <circle key={x} cx={x} cy="40" r="3.4" fill="#ec4899" />
        ))}
        {[-9, 0, 9, 18].map((x) => (
          <circle key={"c" + x} cx={x} cy="40" r="1.3" fill="#fde047" />
        ))}
      </g>
    </g>
  );
}

export function MehendiGirl({ className = "" }) {
  return (
    <svg viewBox="0 0 200 210" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mg-skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f6d3b1" />
          <stop offset="1" stopColor="#ecc196" />
        </linearGradient>
        <linearGradient id="mg-outfit" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fbbf24" />
          <stop offset="1" stopColor="#ea8c0a" />
        </linearGradient>
      </defs>

      {/* floral corners (top-left & bottom-right) */}
      <g opacity="0.95">
        <path d="M6 6 Q40 26 30 60" stroke="#4d7c2f" strokeWidth="2.5" fill="none" />
        <Bloom x={12} y={12} s={12} c="#dc2626" />
        <Bloom x={30} y={26} s={10} c="#ec4899" />
        <Bloom x={22} y={44} s={9} c="#dc2626" />
        <Bloom x={40} y={54} s={8} c="#f472b6" />
        <path d="M194 204 Q160 184 170 150" stroke="#4d7c2f" strokeWidth="2.5" fill="none" />
        <Bloom x={188} y={198} s={12} c="#dc2626" />
        <Bloom x={170} y={184} s={10} c="#ec4899" />
        <Bloom x={178} y={166} s={9} c="#dc2626" />
        <Bloom x={160} y={156} s={8} c="#f472b6" />
      </g>

      {/* hair (back) */}
      <path
        d="M100 24 C66 24 56 52 56 88 C55 124 62 156 68 168 L80 160 C74 128 74 98 80 80 C86 62 92 56 100 56 C108 56 114 62 120 80 C126 98 126 128 120 160 L132 168 C138 156 145 124 144 88 C144 52 134 24 100 24 Z"
        fill="#2b2028"
      />

      {/* outfit / shoulders + dupatta */}
      <path d="M52 210 Q60 168 100 164 Q140 168 148 210 Z" fill="url(#mg-outfit)" />
      <path d="M60 210 Q64 182 80 176" stroke="#ec4899" strokeWidth="6" fill="none" opacity="0.85" strokeLinecap="round" />
      <path d="M140 210 Q136 182 120 176" stroke="#ec4899" strokeWidth="6" fill="none" opacity="0.85" strokeLinecap="round" />

      {/* neck + face */}
      <rect x="93" y="92" width="14" height="16" fill="#ecc196" />
      <ellipse cx="100" cy="66" rx="29" ry="33" fill="url(#mg-skin)" />

      {/* front hair / centre-part fringe */}
      <path d="M71 60 C72 40 88 32 100 40 C112 32 128 40 129 60 C120 48 110 50 100 56 C90 50 80 48 71 60 Z" fill="#2b2028" />

      {/* brows + eyes */}
      <path d="M82 56 q6 -4 12 -1" stroke="#3b2a33" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M106 55 q6 -3 12 1" stroke="#3b2a33" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <ellipse cx="88" cy="63" rx="4.6" ry="3.2" fill="#fff" />
      <ellipse cx="112" cy="63" rx="4.6" ry="3.2" fill="#fff" />
      <circle cx="88.5" cy="63" r="2.2" fill="#3b2a33" />
      <circle cx="111.5" cy="63" r="2.2" fill="#3b2a33" />

      {/* bindi + maang tikka */}
      <circle cx="100" cy="46" r="2" fill="#c2185b" />
      <line x1="100" y1="34" x2="100" y2="42" stroke="#f9c95b" strokeWidth="1.4" />
      <circle cx="100" cy="43" r="2.4" fill="#f9c95b" />

      {/* earrings */}
      <circle cx="71" cy="78" r="3" fill="#f9c95b" />
      <path d="M68 80 q3 7 6 0 z" fill="#f9c95b" />
      <circle cx="129" cy="78" r="3" fill="#f9c95b" />
      <path d="M126 80 q3 7 6 0 z" fill="#f9c95b" />

      {/* two henna hands raised over the lower face */}
      <g transform="translate(83 96) rotate(-6)">
        <HennaPalm />
      </g>
      <g transform="translate(117 96) rotate(6)">
        <HennaPalm flip />
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
