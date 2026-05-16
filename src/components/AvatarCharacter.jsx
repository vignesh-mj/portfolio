/* Illustrated avatar — Vignesh M
   Features: medium-brown skin, short dark hair, thin mustache,
   light-grey mandarin-collar shirt (rolled sleeves), watch on left wrist,
   right hand in pocket, standing pose */

export default function AvatarCharacter() {
  return (
    <svg
      viewBox="0 0 300 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-avatar"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="skinF" cx="42%" cy="32%" r="58%">
          <stop offset="0%" stopColor="#956040"/>
          <stop offset="60%" stopColor="#7A4830"/>
          <stop offset="100%" stopColor="#5E3318"/>
        </radialGradient>
        <radialGradient id="skinA" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#8A5638"/>
          <stop offset="100%" stopColor="#6A3A1C"/>
        </radialGradient>
        <linearGradient id="shirtG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D0DCE2"/>
          <stop offset="100%" stopColor="#A8BCC6"/>
        </linearGradient>
        <linearGradient id="hairG" x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#1C0A04"/>
          <stop offset="100%" stopColor="#080302"/>
        </linearGradient>
        <radialGradient id="groundG" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6D28D9" stopOpacity="0.45"/>
          <stop offset="100%" stopColor="#6D28D9" stopOpacity="0"/>
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Ground glow */}
      <ellipse cx="150" cy="490" rx="110" ry="22" fill="url(#groundG)"/>

      {/* ── HAIR (base, behind head) ── */}
      <ellipse cx="150" cy="96" rx="66" ry="66" fill="url(#hairG)"/>
      {/* Short fade sides — slightly lighter */}
      <ellipse cx="86"  cy="115" rx="10" ry="22" fill="#120804" opacity="0.6"/>
      <ellipse cx="214" cy="115" rx="10" ry="22" fill="#120804" opacity="0.6"/>

      {/* ── FACE ── */}
      <ellipse cx="150" cy="118" rx="59" ry="64" fill="url(#skinF)"/>
      {/* Cheekbone highlight */}
      <ellipse cx="116" cy="118" rx="12" ry="10" fill="#9A6848" opacity="0.18"/>
      <ellipse cx="184" cy="118" rx="12" ry="10" fill="#9A6848" opacity="0.18"/>

      {/* ── EARS ── */}
      <ellipse cx="90"  cy="122" rx="10" ry="15" fill="#7A4828"/>
      <ellipse cx="90"  cy="122" rx="5"  ry="9"  fill="#5E3818" opacity="0.7"/>
      <ellipse cx="210" cy="122" rx="10" ry="15" fill="#7A4828"/>
      <ellipse cx="210" cy="122" rx="5"  ry="9"  fill="#5E3818" opacity="0.7"/>

      {/* ── HAIR FRONT / TOP ── */}
      {/* Volume on top */}
      <path d="M88 80 Q100 50 150 44 Q200 50 212 80 Q198 60 150 56 Q102 60 88 80Z"
        fill="url(#hairG)"/>
      {/* Left temple fade */}
      <path d="M88 80 Q84 100 88 122 Q86 100 94 86Z" fill="#0C0402"/>
      {/* Right temple fade */}
      <path d="M212 80 Q216 100 212 122 Q214 100 206 86Z" fill="#0C0402"/>
      {/* Hairline definition */}
      <path d="M104 68 Q150 56 196 68" stroke="#0C0402" strokeWidth="2" fill="none" opacity="0.7"/>
      {/* Side part / subtle texture */}
      <path d="M140 58 Q144 66 148 74" stroke="#2A1006" strokeWidth="1.5" fill="none" opacity="0.4"/>

      {/* ── EYEBROWS (dark, defined) ── */}
      <path d="M108 94 Q122 87 138 89" stroke="#0C0402" strokeWidth="4.5"
        strokeLinecap="round" fill="none"/>
      <path d="M162 89 Q178 87 192 94" stroke="#0C0402" strokeWidth="4.5"
        strokeLinecap="round" fill="none"/>
      {/* Brow arch highlight */}
      <path d="M110 93 Q122 88 136 90" stroke="#2A1408" strokeWidth="1.5"
        strokeLinecap="round" fill="none" opacity="0.4"/>

      {/* ── EYES ── */}
      {/* Left eye white */}
      <ellipse cx="122" cy="111" rx="15" ry="11" fill="#EEE4D4"/>
      {/* Left iris — dark brown */}
      <ellipse cx="122" cy="112" rx="9"  ry="9"  fill="#3C1E08"/>
      <ellipse cx="122" cy="112" rx="6"  ry="6"  fill="#150800"/>
      <circle  cx="119" cy="109" r="2.5" fill="white" opacity="0.85"/>
      {/* Left upper eyelid */}
      <path d="M107 108 Q122 100 137 108" stroke="#3C1E08" strokeWidth="2.2" fill="none"/>
      {/* Left lower lash */}
      <path d="M109 116 Q122 120 135 116" stroke="#5A3018" strokeWidth="1"
        fill="none" opacity="0.4"/>

      {/* Right eye white */}
      <ellipse cx="178" cy="111" rx="15" ry="11" fill="#EEE4D4"/>
      {/* Right iris */}
      <ellipse cx="178" cy="112" rx="9"  ry="9"  fill="#3C1E08"/>
      <ellipse cx="178" cy="112" rx="6"  ry="6"  fill="#150800"/>
      <circle  cx="175" cy="109" r="2.5" fill="white" opacity="0.85"/>
      {/* Right upper eyelid */}
      <path d="M163 108 Q178 100 193 108" stroke="#3C1E08" strokeWidth="2.2" fill="none"/>
      {/* Right lower lash */}
      <path d="M165 116 Q178 120 191 116" stroke="#5A3018" strokeWidth="1"
        fill="none" opacity="0.4"/>

      {/* Blink overlay (animated via CSS) */}
      <ellipse className="eye-blink-l" cx="122" cy="112" rx="15" ry="0" fill="url(#skinF)"/>
      <ellipse className="eye-blink-r" cx="178" cy="112" rx="15" ry="0" fill="url(#skinF)"/>

      {/* ── NOSE ── */}
      {/* Bridge */}
      <path d="M146 124 Q140 138 137 145 Q150 151 163 145 Q160 138 154 124"
        fill="#5E3018" opacity="0.22"/>
      {/* Nostrils */}
      <ellipse cx="139" cy="145" rx="6.5" ry="4.5" fill="#4E2810" opacity="0.55"/>
      <ellipse cx="161" cy="145" rx="6.5" ry="4.5" fill="#4E2810" opacity="0.55"/>
      {/* Nose tip highlight */}
      <ellipse cx="150" cy="141" rx="7" ry="4" fill="#8A5838" opacity="0.15"/>

      {/* ── MUSTACHE (thin, neat) ── */}
      <path d="M124 154 Q132 148 142 150 Q150 148 158 150 Q168 148 176 154 Q166 160 150 157 Q134 160 124 154Z"
        fill="#0C0402"/>
      {/* Philtrum dip */}
      <path d="M147 147 L147 152 M153 147 L153 152"
        stroke="#0E0603" strokeWidth="1.5" opacity="0.5"/>

      {/* ── MOUTH / LIPS ── */}
      <path d="M132 164 Q150 174 168 164"
        stroke="#4E2810" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Corners */}
      <path d="M130 162 Q132 167 135 167" stroke="#4E2810" strokeWidth="1.5"
        fill="none" opacity="0.5"/>
      <path d="M170 162 Q168 167 165 167" stroke="#4E2810" strokeWidth="1.5"
        fill="none" opacity="0.5"/>
      {/* Chin shadow */}
      <ellipse cx="150" cy="176" rx="26" ry="7" fill="#4E2810" opacity="0.1"/>

      {/* ── NECK ── */}
      <rect x="130" y="174" width="40" height="34" rx="10" fill="#7A4828"/>
      {/* Neck shadow */}
      <path d="M130 176 Q130 204 136 206" stroke="#5A3018" strokeWidth="3"
        fill="none" opacity="0.25"/>
      <path d="M170 176 Q170 204 164 206" stroke="#5A3018" strokeWidth="3"
        fill="none" opacity="0.25"/>
      <path d="M130 190 Q150 183 170 190" fill="#6A3818" opacity="0.2"/>

      {/* ── SHIRT BODY ── */}
      <path d="M44 272 Q50 214 100 202 L116 208 Q150 218 184 208 L200 202 Q250 214 256 272 L254 460 Q150 474 46 460Z"
        fill="url(#shirtG)"/>
      {/* Center fold */}
      <path d="M150 212 L150 455" stroke="#9AADB6" strokeWidth="1.5" opacity="0.35"/>
      {/* Side folds */}
      <path d="M118 225 Q116 330 120 430" stroke="#9AADB6" strokeWidth="1" opacity="0.25" fill="none"/>
      <path d="M182 225 Q184 330 180 430" stroke="#9AADB6" strokeWidth="1" opacity="0.25" fill="none"/>
      {/* Chest shadow */}
      <path d="M80 280 Q150 268 220 280 L220 320 Q150 308 80 320Z"
        fill="#9AADB6" opacity="0.08"/>

      {/* ── MANDARIN COLLAR ── */}
      <path d="M114 204 Q130 188 150 183 Q170 188 186 204 L180 216 Q168 198 150 194 Q132 198 120 216Z"
        fill="#D8E4EA"/>
      {/* Collar seam */}
      <path d="M148 184 L148 202 M152 184 L152 202"
        stroke="#BEC8CE" strokeWidth="1.5" opacity="0.6"/>
      {/* Collar top buttons */}
      <circle cx="143" cy="186" r="3.5" fill="#BCCAD0"/>
      <circle cx="157" cy="186" r="3.5" fill="#BCCAD0"/>

      {/* ── SHIRT BUTTONS ── */}
      <circle cx="150" cy="248" r="4" fill="#9AADB6"/>
      <circle cx="150" cy="280" r="4" fill="#9AADB6"/>
      <circle cx="150" cy="312" r="4" fill="#9AADB6"/>
      <circle cx="150" cy="344" r="4" fill="#9AADB6"/>

      {/* ── CHEST POCKET (left) ── */}
      <rect x="110" y="230" width="32" height="27" rx="3"
        fill="none" stroke="#9AADB6" strokeWidth="1.5"/>
      <path d="M110 240 L142 240" stroke="#9AADB6" strokeWidth="1" opacity="0.7"/>
      <path d="M124 230 L124 240" stroke="#9AADB6" strokeWidth="1" opacity="0.5"/>

      {/* ── LEFT ARM (with watch, hanging down slightly bent) ── */}
      {/* Sleeve */}
      <path d="M44 272 Q30 290 34 336 Q38 354 60 356 L78 353 Q86 336 82 308 L82 272Z"
        fill="#C8D4DA"/>
      {/* Sleeve shadow */}
      <path d="M44 272 Q32 292 36 320" stroke="#9AADB6" strokeWidth="2"
        fill="none" opacity="0.4"/>
      {/* Rolled cuff */}
      <path d="M34 332 Q38 354 60 356 L78 353 Q84 338 82 328 Q62 338 34 332Z"
        fill="#A4B8C0"/>
      <path d="M34 325 Q62 334 82 325" stroke="#C8D4DA" strokeWidth="2" opacity="0.5"/>

      {/* Forearm skin */}
      <path d="M36 346 Q38 390 46 415 L74 415 Q80 390 78 346 Q62 354 36 346Z"
        fill="url(#skinA)"/>
      {/* Arm hair texture */}
      <path d="M44 364 Q60 360 72 364" stroke="#4E2810" strokeWidth="0.8" opacity="0.18"/>
      <path d="M42 380 Q60 376 74 380" stroke="#4E2810" strokeWidth="0.8" opacity="0.18"/>
      <path d="M44 396 Q60 392 72 396" stroke="#4E2810" strokeWidth="0.8" opacity="0.18"/>

      {/* LEFT HAND */}
      <ellipse cx="58" cy="423" rx="15" ry="12" fill="url(#skinA)"/>
      <path d="M43 415 Q44 430 49 438 Q60 444 70 438 Q75 430 74 415"
        fill="url(#skinA)"/>
      {/* Finger lines */}
      <path d="M48 436 Q58 442 68 436" stroke="#5E3018" strokeWidth="1"
        fill="none" opacity="0.35"/>

      {/* WATCH */}
      <rect x="36"  y="400" width="34" height="18" rx="5" fill="#141010"/>
      <rect x="38"  y="402" width="30" height="14" rx="4" fill="#1E1E2E"/>
      <rect x="40"  y="403" width="26" height="12" rx="3" fill="#1A2040"/>
      {/* Watch hands */}
      <line x1="53" y1="409" x2="53" y2="404" stroke="white" strokeWidth="1.2" opacity="0.8"/>
      <line x1="53" y1="409" x2="58" y2="409" stroke="white" strokeWidth="1.0" opacity="0.6"/>
      {/* Watch crown */}
      <rect x="68" y="405" width="5" height="8" rx="2.5" fill="#101010"/>
      {/* Watch strap details */}
      <path d="M36 405 L36 400 M36 414 L36 418" stroke="#0C0C0C" strokeWidth="2"/>
      <path d="M70 405 L70 400 M70 414 L70 418" stroke="#0C0C0C" strokeWidth="2"/>

      {/* ── RIGHT ARM (bent, hand in pocket) ── */}
      {/* Sleeve */}
      <path d="M256 272 Q270 290 266 336 Q262 354 240 356 L222 353 Q214 336 218 308 L218 272Z"
        fill="#C8D4DA"/>
      <path d="M256 272 Q268 292 264 320" stroke="#9AADB6" strokeWidth="2"
        fill="none" opacity="0.4"/>
      {/* Rolled cuff */}
      <path d="M266 332 Q262 354 240 356 L222 353 Q216 338 218 328 Q238 338 266 332Z"
        fill="#A4B8C0"/>
      <path d="M266 325 Q238 334 218 325" stroke="#C8D4DA" strokeWidth="2" opacity="0.5"/>
      {/* Forearm skin */}
      <path d="M264 346 Q262 380 254 400 L228 400 Q220 380 222 346 Q238 354 264 346Z"
        fill="url(#skinA)"/>
      {/* Hand slides into front pocket — partially visible */}
      <ellipse cx="242" cy="407" rx="14" ry="10" fill="url(#skinA)"/>
      <path d="M228 400 Q228 413 233 420 Q244 425 252 420 Q258 413 256 400"
        fill="url(#skinA)"/>

      {/* ── PANTS ── */}
      {/* Waistband / belt area */}
      <path d="M70 453 Q150 466 230 453 L232 460 Q150 472 68 460Z" fill="#14202E"/>
      {/* Belt */}
      <rect x="72" y="453" width="156" height="7" rx="3" fill="#0E1820"/>
      <rect x="144" y="451" width="12" height="11" rx="2" fill="#2A2A2A"/>
      <rect x="147" y="454" width="6" height="5" rx="1" fill="#4A4A4A"/>
      {/* Pants legs (partially visible) */}
      <path d="M70 460 Q68 480 78 492 L118 492 L122 468 Q96 472 70 460Z"
        fill="#14202E"/>
      <path d="M230 460 Q232 480 222 492 L182 492 L178 468 Q204 472 230 460Z"
        fill="#14202E"/>
      {/* Pants crease center */}
      <path d="M96 470 L102 490" stroke="#0E1820" strokeWidth="1" opacity="0.6"/>
      <path d="M204 470 L198 490" stroke="#0E1820" strokeWidth="1" opacity="0.6"/>
    </svg>
  );
}
