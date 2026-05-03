// ============================================================
//  vokabeln.js  –  Wortschatz & Kategorien
//  Hier kannst du neue Wörter und Kategorien hinzufügen!
// ============================================================

var categories = [
  {id:"tiere",      label:"🐾 Tiere"},
  {id:"essen",      label:"🍎 Essen"},
  {id:"farben",     label:"🎨 Farben"},
  {id:"zahlen",     label:"🔢 Zahlen"},
  {id:"koerper",    label:"💪 Körper"},
  {id:"kleidung",   label:"👕 Kleidung"},
  {id:"zuhause",    label:"🏠 Zuhause"},
  {id:"natur",      label:"🌿 Natur"},
  {id:"schule",     label:"✏️ Schule"},
  {id:"verkehr",    label:"🚗 Verkehr"},
  {id:"gefuehle",   label:"😊 Gefühle"},
  {id:"wetter",     label:"🌤️ Wetter"},
  {id:"wochentage", label:"📅 Wochentage"}
];

// SVG-Illustrationen – kindgerecht, bunt, inline
var svgImages = {

  // ── TIERE ──────────────────────────────────────────────
  "katze": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="55" r="28" fill="#F5A623"/>
    <ellipse cx="50" cy="78" rx="18" ry="10" fill="#F5A623"/>
    <polygon points="28,35 22,18 36,28" fill="#F5A623"/>
    <polygon points="72,35 78,18 64,28" fill="#F5A623"/>
    <polygon points="29,33 24,20 37,29" fill="#FFD0A0"/>
    <polygon points="71,33 76,20 63,29" fill="#FFD0A0"/>
    <circle cx="42" cy="52" r="5" fill="white"/>
    <circle cx="58" cy="52" r="5" fill="white"/>
    <circle cx="43" cy="53" r="3" fill="#2C2C2A"/>
    <circle cx="59" cy="53" r="3" fill="#2C2C2A"/>
    <circle cx="44" cy="52" r="1" fill="white"/>
    <circle cx="60" cy="52" r="1" fill="white"/>
    <ellipse cx="50" cy="60" rx="5" ry="3" fill="#E8917A"/>
    <path d="M50 63 Q44 67 40 65" stroke="#2C2C2A" stroke-width="1.5" fill="none"/>
    <path d="M50 63 Q56 67 60 65" stroke="#2C2C2A" stroke-width="1.5" fill="none"/>
    <line x1="30" y1="57" x2="18" y2="54" stroke="#2C2C2A" stroke-width="1.2"/>
    <line x1="30" y1="60" x2="18" y2="60" stroke="#2C2C2A" stroke-width="1.2"/>
    <line x1="30" y1="63" x2="18" y2="66" stroke="#2C2C2A" stroke-width="1.2"/>
    <line x1="70" y1="57" x2="82" y2="54" stroke="#2C2C2A" stroke-width="1.2"/>
    <line x1="70" y1="60" x2="82" y2="60" stroke="#2C2C2A" stroke-width="1.2"/>
    <line x1="70" y1="63" x2="82" y2="66" stroke="#2C2C2A" stroke-width="1.2"/>
  </svg>`,

  "hund": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="62" rx="26" ry="20" fill="#C8915A"/>
    <circle cx="50" cy="42" r="20" fill="#C8915A"/>
    <ellipse cx="33" cy="36" rx="7" ry="12" fill="#A0724A" transform="rotate(-15,33,36)"/>
    <ellipse cx="67" cy="36" rx="7" ry="12" fill="#A0724A" transform="rotate(15,67,36)"/>
    <circle cx="43" cy="40" r="4" fill="white"/>
    <circle cx="57" cy="40" r="4" fill="white"/>
    <circle cx="44" cy="41" r="2.5" fill="#2C2C2A"/>
    <circle cx="58" cy="41" r="2.5" fill="#2C2C2A"/>
    <circle cx="44" cy="40" r="1" fill="white"/>
    <circle cx="58" cy="40" r="1" fill="white"/>
    <ellipse cx="50" cy="50" rx="8" ry="5" fill="#A0724A"/>
    <ellipse cx="50" cy="52" rx="5" ry="3" fill="#E8917A"/>
    <path d="M42 55 Q50 60 58 55" stroke="#2C2C2A" stroke-width="1.5" fill="none"/>
    <ellipse cx="76" cy="72" rx="5" ry="12" fill="#C8915A" transform="rotate(20,76,72)"/>
  </svg>`,

  "vogel": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="48" cy="58" rx="20" ry="16" fill="#4A90D9"/>
    <circle cx="48" cy="40" r="14" fill="#4A90D9"/>
    <ellipse cx="72" cy="50" rx="18" ry="10" fill="#5BA0E8" transform="rotate(-20,72,50)"/>
    <ellipse cx="24" cy="52" rx="14" ry="8" fill="#5BA0E8" transform="rotate(20,24,52)"/>
    <polygon points="48,46 56,49 48,52" fill="#F5A623"/>
    <circle cx="44" cy="37" r="3" fill="white"/>
    <circle cx="45" cy="38" r="1.8" fill="#2C2C2A"/>
    <line x1="42" y1="74" x2="36" y2="84" stroke="#F5A623" stroke-width="3"/>
    <line x1="54" y1="74" x2="60" y2="84" stroke="#F5A623" stroke-width="3"/>
    <line x1="36" y1="84" x2="30" y2="84" stroke="#F5A623" stroke-width="2.5"/>
    <line x1="60" y1="84" x2="66" y2="84" stroke="#F5A623" stroke-width="2.5"/>
  </svg>`,

  "fisch": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="46" cy="52" rx="28" ry="16" fill="#5BC8C8"/>
    <polygon points="74,52 88,40 88,64" fill="#4AABAB"/>
    <circle cx="32" cy="48" r="4" fill="white"/>
    <circle cx="33" cy="49" r="2.5" fill="#2C2C2A"/>
    <circle cx="33" cy="48" r="1" fill="white"/>
    <path d="M40 44 Q46 40 52 44" stroke="#3A9898" stroke-width="1.5" fill="none"/>
    <path d="M38 52 Q46 48 54 52" stroke="#3A9898" stroke-width="1.5" fill="none"/>
    <path d="M40 60 Q46 64 52 60" stroke="#3A9898" stroke-width="1.5" fill="none"/>
    <ellipse cx="46" cy="52" rx="28" ry="16" fill="none" stroke="#3A9898" stroke-width="1"/>
  </svg>`,

  "pferd": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="28" y="52" width="44" height="28" rx="8" fill="#C8A87A"/>
    <rect x="34" y="72" width="8" height="16" rx="4" fill="#B8986A"/>
    <rect x="46" y="72" width="8" height="16" rx="4" fill="#B8986A"/>
    <rect x="58" y="72" width="8" height="16" rx="4" fill="#B8986A"/>
    <ellipse cx="36" cy="44" rx="12" ry="16" fill="#C8A87A" transform="rotate(-20,36,44)"/>
    <rect x="30" y="30" width="6" height="14" rx="3" fill="#C8A87A" transform="rotate(-10,33,37)"/>
    <rect x="38" y="28" width="5" height="12" rx="2.5" fill="#C8A87A" transform="rotate(10,40,34)"/>
    <circle cx="30" cy="44" r="3" fill="white"/>
    <circle cx="31" cy="45" r="2" fill="#2C2C2A"/>
    <path d="M25 50 Q28 53 25 56" stroke="#8B6A3A" stroke-width="2" fill="none"/>
    <path d="M72 55 Q80 50 82 60 Q80 65 72 60" fill="#8B6A3A"/>
  </svg>`,

  "schaf": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="58" rx="28" ry="20" fill="white"/>
    <circle cx="36" cy="48" r="12" fill="#F0F0F0"/>
    <circle cx="50" cy="44" r="13" fill="#F0F0F0"/>
    <circle cx="64" cy="48" r="12" fill="#F0F0F0"/>
    <circle cx="42" cy="56" r="11" fill="#F0F0F0"/>
    <circle cx="58" cy="56" r="11" fill="#F0F0F0"/>
    <ellipse cx="34" cy="44" rx="10" ry="13" fill="#D4A373"/>
    <circle cx="30" cy="40" r="3" fill="white"/>
    <circle cx="31" cy="41" r="2" fill="#2C2C2A"/>
    <ellipse cx="28" cy="47" rx="4" ry="3" fill="#D4A373"/>
    <line x1="36" y1="75" x2="32" y2="88" stroke="#D4A373" stroke-width="4"/>
    <line x1="46" y1="76" x2="44" y2="88" stroke="#D4A373" stroke-width="4"/>
    <line x1="56" y1="76" x2="58" y2="88" stroke="#D4A373" stroke-width="4"/>
    <line x1="66" y1="75" x2="70" y2="88" stroke="#D4A373" stroke-width="4"/>
  </svg>`,

  // ── ESSEN ──────────────────────────────────────────────
  "apfel": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 28 Q30 25 25 48 Q20 72 50 80 Q80 72 75 48 Q70 25 50 28Z" fill="#E84040"/>
    <path d="M50 28 Q52 20 58 16" stroke="#5A3A1A" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <ellipse cx="62" cy="14" rx="8" ry="5" fill="#4CAF50" transform="rotate(-20,62,14)"/>
    <path d="M36 42 Q42 36 44 44" stroke="rgba(255,255,255,0.5)" stroke-width="3" fill="none" stroke-linecap="round"/>
  </svg>`,

  "brot": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="45" width="64" height="36" rx="12" fill="#C8845A"/>
    <ellipse cx="50" cy="45" rx="32" ry="14" fill="#D4956A"/>
    <path d="M22 55 Q50 48 78 55" stroke="#B8744A" stroke-width="1.5" fill="none"/>
    <path d="M22 62 Q50 55 78 62" stroke="#B8744A" stroke-width="1.5" fill="none"/>
    <path d="M22 69 Q50 62 78 69" stroke="#B8744A" stroke-width="1.5" fill="none"/>
    <ellipse cx="50" cy="45" rx="32" ry="14" fill="none" stroke="#B8744A" stroke-width="1.5"/>
  </svg>`,

  "wasser": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 15 Q62 35 68 50 Q74 68 50 78 Q26 68 32 50 Q38 35 50 15Z" fill="#4A90D9"/>
    <path d="M50 15 Q62 35 68 50 Q74 68 50 78 Q26 68 32 50 Q38 35 50 15Z" fill="url(#wgrad)"/>
    <defs><linearGradient id="wgrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="rgba(255,255,255,0.3)"/><stop offset="100%" stop-color="rgba(255,255,255,0)"/></linearGradient></defs>
    <path d="M38 52 Q42 46 46 52" stroke="rgba(255,255,255,0.6)" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  </svg>`,

  "eis": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,78 36,48 64,48" fill="#D4A373"/>
    <ellipse cx="50" cy="48" rx="14" ry="10" fill="#F8D7DA"/>
    <ellipse cx="50" cy="40" rx="12" ry="10" fill="#FFB3BA"/>
    <ellipse cx="50" cy="33" rx="10" ry="9" fill="#FF8C94"/>
    <ellipse cx="47" cy="31" rx="4" ry="3" fill="rgba(255,255,255,0.4)"/>
    <line x1="48" y1="78" x2="52" y2="78" stroke="#B8844A" stroke-width="3"/>
    <rect x="47" y="78" width="6" height="12" rx="3" fill="#D4A373"/>
  </svg>`,

  "milch": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="34" y="35" width="32" height="46" rx="6" fill="white" stroke="#E0E0E0" stroke-width="1.5"/>
    <rect x="34" y="28" width="32" height="12" rx="4" fill="#E8E8E8"/>
    <rect x="40" y="22" width="20" height="10" rx="3" fill="#D0D0D0"/>
    <rect x="34" y="35" width="32" height="15" fill="#F5F5F5"/>
    <text x="50" y="65" text-anchor="middle" font-size="11" fill="#4A90D9" font-weight="bold">Milch</text>
    <circle cx="42" cy="55" r="2" fill="#E0F0FF"/>
    <circle cx="58" cy="58" r="1.5" fill="#E0F0FF"/>
    <circle cx="50" cy="53" r="1" fill="#E0F0FF"/>
  </svg>`,

  "käse": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="15,72 50,30 85,72" fill="#F5C842"/>
    <polygon points="15,72 85,72 85,80 15,80" fill="#E8B830"/>
    <circle cx="38" cy="62" r="5" fill="#E8B830"/>
    <circle cx="55" cy="54" r="4" fill="#E8B830"/>
    <circle cx="65" cy="65" r="3.5" fill="#E8B830"/>
    <circle cx="44" cy="72" r="3" fill="#D4A820"/>
  </svg>`,

  // ── FARBEN ─────────────────────────────────────────────
  "blau": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="35" fill="#4A90D9"/>
    <circle cx="40" cy="40" r="8" fill="rgba(255,255,255,0.25)"/>
    <text x="50" y="88" text-anchor="middle" font-size="13" fill="#4A90D9" font-weight="bold">Blau</text>
  </svg>`,

  "rot": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="35" fill="#E84040"/>
    <circle cx="40" cy="40" r="8" fill="rgba(255,255,255,0.25)"/>
    <text x="50" y="88" text-anchor="middle" font-size="13" fill="#E84040" font-weight="bold">Rot</text>
  </svg>`,

  "grün": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="35" fill="#4CAF50"/>
    <circle cx="40" cy="40" r="8" fill="rgba(255,255,255,0.25)"/>
    <text x="50" y="88" text-anchor="middle" font-size="13" fill="#4CAF50" font-weight="bold">Grün</text>
  </svg>`,

  "gelb": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="35" fill="#F5C842"/>
    <circle cx="40" cy="40" r="8" fill="rgba(255,255,255,0.35)"/>
    <text x="50" y="88" text-anchor="middle" font-size="13" fill="#D4A820" font-weight="bold">Gelb</text>
  </svg>`,

  "weiß": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="35" fill="white" stroke="#E0E0E0" stroke-width="2"/>
    <circle cx="40" cy="40" r="8" fill="rgba(200,200,200,0.3)"/>
    <text x="50" y="88" text-anchor="middle" font-size="13" fill="#888" font-weight="bold">Weiß</text>
  </svg>`,

  "schwarz": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="35" fill="#2C2C2A"/>
    <circle cx="40" cy="40" r="8" fill="rgba(255,255,255,0.15)"/>
    <text x="50" y="88" text-anchor="middle" font-size="13" fill="#2C2C2A" font-weight="bold">Schwarz</text>
  </svg>`,

  // ── ZAHLEN ─────────────────────────────────────────────
  "eins": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="46" r="32" fill="#9B59B6"/>
    <text x="50" y="58" text-anchor="middle" font-size="36" fill="white" font-weight="bold">1</text>
    <text x="50" y="90" text-anchor="middle" font-size="12" fill="#9B59B6" font-weight="bold">ένα · e-na</text>
  </svg>`,

  "zwei": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="46" r="32" fill="#E84040"/>
    <text x="50" y="58" text-anchor="middle" font-size="36" fill="white" font-weight="bold">2</text>
    <text x="50" y="90" text-anchor="middle" font-size="12" fill="#E84040" font-weight="bold">δύο · di-o</text>
  </svg>`,

  "drei": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="46" r="32" fill="#4A90D9"/>
    <text x="50" y="58" text-anchor="middle" font-size="36" fill="white" font-weight="bold">3</text>
    <text x="50" y="90" text-anchor="middle" font-size="12" fill="#4A90D9" font-weight="bold">τρία · tri-a</text>
  </svg>`,

  "vier": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="46" r="32" fill="#4CAF50"/>
    <text x="50" y="58" text-anchor="middle" font-size="36" fill="white" font-weight="bold">4</text>
    <text x="50" y="90" text-anchor="middle" font-size="12" fill="#4CAF50" font-weight="bold">τέσσερα · te-se-ra</text>
  </svg>`,

  "fünf": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="46" r="32" fill="#F5A623"/>
    <text x="50" y="58" text-anchor="middle" font-size="36" fill="white" font-weight="bold">5</text>
    <text x="50" y="90" text-anchor="middle" font-size="12" fill="#F5A623" font-weight="bold">πέντε · pen-de</text>
  </svg>`,

  "zehn": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="46" r="32" fill="#E8584A"/>
    <text x="50" y="58" text-anchor="middle" font-size="32" fill="white" font-weight="bold">10</text>
    <text x="50" y="90" text-anchor="middle" font-size="12" fill="#E8584A" font-weight="bold">δέκα · de-ka</text>
  </svg>`,

  // ── KÖRPER ─────────────────────────────────────────────
  "kopf": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="30" fill="#F5C8A0"/>
    <circle cx="40" cy="46" r="5" fill="white"/>
    <circle cx="60" cy="46" r="5" fill="white"/>
    <circle cx="41" cy="47" r="3" fill="#2C2C2A"/>
    <circle cx="61" cy="47" r="3" fill="#2C2C2A"/>
    <ellipse cx="50" cy="56" rx="4" ry="3" fill="#E8917A"/>
    <path d="M42 64 Q50 70 58 64" stroke="#C87060" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M30 35 Q50 18 70 35" stroke="#5A3A1A" stroke-width="5" fill="none" stroke-linecap="round"/>
  </svg>`,

  "hand": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="36" y="52" width="28" height="30" rx="8" fill="#F5C8A0"/>
    <rect x="28" y="34" width="10" height="28" rx="5" fill="#F5C8A0"/>
    <rect x="39" y="28" width="10" height="30" rx="5" fill="#F5C8A0"/>
    <rect x="50" y="30" width="10" height="28" rx="5" fill="#F5C8A0"/>
    <rect x="61" y="34" width="10" height="26" rx="5" fill="#F5C8A0"/>
    <path d="M36 52 Q30 46 28 40" stroke="#E8B890" stroke-width="1" fill="none"/>
  </svg>`,

  "auge": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 50 Q50 20 85 50 Q50 80 15 50Z" fill="white" stroke="#D0C0B0" stroke-width="1.5"/>
    <circle cx="50" cy="50" r="16" fill="#4A90D9"/>
    <circle cx="50" cy="50" r="10" fill="#2C2C2A"/>
    <circle cx="44" cy="44" r="4" fill="rgba(255,255,255,0.5)"/>
    <path d="M20 46 Q35 30 50 28 Q65 30 80 46" stroke="#5A3A1A" stroke-width="3" fill="none" stroke-linecap="round"/>
  </svg>`,

  "nase": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 25 Q42 50 35 65 Q40 72 50 70 Q60 72 65 65 Q58 50 50 25Z" fill="#F5C8A0" stroke="#E8B890" stroke-width="1.5"/>
    <ellipse cx="40" cy="66" rx="7" ry="5" fill="#E8A888"/>
    <ellipse cx="60" cy="66" rx="7" ry="5" fill="#E8A888"/>
    <circle cx="38" cy="66" r="2" fill="#C87060"/>
    <circle cx="58" cy="66" r="2" fill="#C87060"/>
  </svg>`,

  "mund": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 50 Q50 35 80 50 Q50 80 20 50Z" fill="#E84040"/>
    <path d="M20 50 Q50 35 80 50" fill="none" stroke="#C82020" stroke-width="1"/>
    <rect x="28" y="50" width="14" height="16" rx="3" fill="white"/>
    <rect x="44" y="50" width="12" height="16" rx="3" fill="white"/>
    <rect x="58" y="50" width="14" height="16" rx="3" fill="white"/>
    <ellipse cx="50" cy="64" rx="20" ry="6" fill="#FF6B8A"/>
  </svg>`,

  "ohr": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M35 25 Q20 35 20 55 Q20 75 35 80 Q45 85 50 75 Q42 70 40 58 Q48 55 46 44 Q44 32 35 25Z" fill="#F5C8A0" stroke="#E8B890" stroke-width="1.5"/>
    <path d="M35 38 Q30 48 32 58 Q36 62 40 58" stroke="#E8A888" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  </svg>`,

  // ── KLEIDUNG ───────────────────────────────────────────
  "hemd": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 25 L18 40 L30 45 L30 82 L70 82 L70 45 L82 40 L70 25 L58 32 Q50 38 42 32Z" fill="#4A90D9"/>
    <path d="M42 32 Q50 38 58 32 L58 45 L42 45Z" fill="#3A80C9"/>
    <path d="M30 25 L18 40 L30 45" fill="#3A80C9"/>
    <path d="M70 25 L82 40 L70 45" fill="#3A80C9"/>
  </svg>`,

  "hose": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 25 L80 25 L80 35 L68 35 L62 82 L50 82 L50 50 L50 82 L38 82 L32 35 L20 35Z" fill="#5A7DB5"/>
    <line x1="50" y1="35" x2="50" y2="82" stroke="#4A6DA5" stroke-width="2"/>
    <rect x="20" y="20" width="60" height="10" rx="3" fill="#4A6DA5"/>
    <rect x="42" y="20" width="16" height="6" rx="2" fill="#6A8DC5"/>
  </svg>`,

  "schuhe": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 62 Q15 50 28 48 L55 48 Q70 48 75 55 L85 62 Q88 68 80 70 L15 70 Q12 68 15 62Z" fill="#C8845A"/>
    <path d="M28 48 L28 38 Q28 32 34 32 L42 32 Q46 32 46 36 L46 48" fill="#B8744A"/>
    <path d="M15 62 Q15 66 20 68 L80 68" stroke="#A8643A" stroke-width="1.5" fill="none"/>
    <line x1="32" y1="52" x2="32" y2="60" stroke="#A8643A" stroke-width="1.2"/>
    <line x1="38" y1="52" x2="38" y2="60" stroke="#A8643A" stroke-width="1.2"/>
    <line x1="44" y1="52" x2="44" y2="60" stroke="#A8643A" stroke-width="1.2"/>
  </svg>`,

  "mütze": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 58 Q20 30 50 25 Q80 30 80 58Z" fill="#E84040"/>
    <rect x="15" y="56" width="70" height="10" rx="5" fill="#C82020"/>
    <circle cx="50" cy="27" r="6" fill="white"/>
    <path d="M35 45 Q50 40 65 45" stroke="#C82020" stroke-width="2" fill="none"/>
    <path d="M30 52 Q50 47 70 52" stroke="#C82020" stroke-width="2" fill="none"/>
  </svg>`,

  "jacke": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 22 L15 38 L28 44 L28 82 L50 82 L50 22Z" fill="#4CAF50"/>
    <path d="M72 22 L85 38 L72 44 L72 82 L50 82 L50 22Z" fill="#4CAF50"/>
    <path d="M28 22 L50 28 L72 22" fill="#3A9F40"/>
    <line x1="50" y1="28" x2="50" y2="82" stroke="#3A9F40" stroke-width="2"/>
    <circle cx="50" cy="42" r="2.5" fill="#2A8F30"/>
    <circle cx="50" cy="54" r="2.5" fill="#2A8F30"/>
    <circle cx="50" cy="66" r="2.5" fill="#2A8F30"/>
  </svg>`,

  "kleid": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M38 18 L32 30 L18 85 L82 85 L68 30 L62 18 Q54 24 46 18Z" fill="#E84FA0"/>
    <path d="M38 18 Q46 28 62 18 L62 30 L38 30Z" fill="#C83080"/>
    <path d="M18 85 L82 85" stroke="#C83080" stroke-width="2"/>
    <path d="M26 55 Q50 48 74 55" stroke="#C83080" stroke-width="1.5" fill="none"/>
    <circle cx="50" cy="34" r="3" fill="white"/>
  </svg>`,

  // ── ZUHAUSE ────────────────────────────────────────────
  "haus": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,12 88,42 12,42" fill="#E84040"/>
    <rect x="18" y="42" width="64" height="46" fill="#F5C842"/>
    <rect x="40" y="60" width="20" height="28" rx="2" fill="#C8845A"/>
    <rect x="24" y="50" width="16" height="14" rx="2" fill="#B8D8F8"/>
    <rect x="60" y="50" width="16" height="14" rx="2" fill="#B8D8F8"/>
    <line x1="32" y1="50" x2="32" y2="64" stroke="#90C0E8" stroke-width="1.5"/>
    <line x1="24" y1="57" x2="40" y2="57" stroke="#90C0E8" stroke-width="1.5"/>
    <circle cx="57" cy="75" r="2" fill="#8B6A3A"/>
  </svg>`,

  "tür": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="22" y="15" width="56" height="78" rx="3" fill="#C8845A"/>
    <rect x="25" y="18" width="50" height="72" rx="2" fill="#D4956A"/>
    <rect x="30" y="24" width="18" height="26" rx="2" fill="#B8744A"/>
    <rect x="52" y="24" width="18" height="26" rx="2" fill="#B8744A"/>
    <rect x="30" y="55" width="40" height="30" rx="2" fill="#B8744A"/>
    <circle cx="62" cy="55" r="3.5" fill="#F5C842"/>
    <rect x="20" y="12" width="60" height="6" rx="2" fill="#A0643A"/>
  </svg>`,

  "fenster": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="15" width="70" height="70" rx="4" fill="#B8D8F8"/>
    <rect x="15" y="15" width="70" height="70" rx="4" fill="none" stroke="#8BA8C8" stroke-width="4"/>
    <line x1="50" y1="15" x2="50" y2="85" stroke="#8BA8C8" stroke-width="4"/>
    <line x1="15" y1="50" x2="85" y2="50" stroke="#8BA8C8" stroke-width="4"/>
    <ellipse cx="32" cy="32" rx="8" ry="6" fill="rgba(255,255,255,0.5)" transform="rotate(-30,32,32)"/>
    <circle cx="50" cy="52" r="4" fill="#8BA8C8"/>
  </svg>`,

  "bett": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="50" width="76" height="30" rx="6" fill="#F0E8D8"/>
    <rect x="12" y="50" width="76" height="12" rx="4" fill="#E8D8C0"/>
    <rect x="12" y="35" width="14" height="46" rx="4" fill="#C8845A"/>
    <rect x="74" y="35" width="14" height="46" rx="4" fill="#C8845A"/>
    <rect x="18" y="50" width="24" height="18" rx="4" fill="white"/>
    <rect x="18" y="50" width="24" height="18" rx="4" fill="none" stroke="#E0D0C0" stroke-width="1"/>
    <rect x="22" y="52" width="16" height="4" rx="2" fill="#F8C8D8"/>
  </svg>`,

  "stuhl": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="22" y="38" width="56" height="10" rx="4" fill="#C8845A"/>
    <rect x="22" y="18" width="10" height="30" rx="3" fill="#B8744A"/>
    <rect x="68" y="18" width="10" height="30" rx="3" fill="#B8744A"/>
    <rect x="22" y="18" width="56" height="8" rx="3" fill="#C8845A"/>
    <line x1="22" y1="48" x2="18" y2="85" stroke="#B8744A" stroke-width="7" stroke-linecap="round"/>
    <line x1="78" y1="48" x2="82" y2="85" stroke="#B8744A" stroke-width="7" stroke-linecap="round"/>
    <line x1="32" y1="48" x2="28" y2="85" stroke="#B8744A" stroke-width="7" stroke-linecap="round"/>
    <line x1="68" y1="48" x2="72" y2="85" stroke="#B8744A" stroke-width="7" stroke-linecap="round"/>
  </svg>`,

  "tisch": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="36" width="80" height="10" rx="4" fill="#C8845A"/>
    <line x1="22" y1="46" x2="18" y2="85" stroke="#B8744A" stroke-width="7" stroke-linecap="round"/>
    <line x1="78" y1="46" x2="82" y2="85" stroke="#B8744A" stroke-width="7" stroke-linecap="round"/>
    <line x1="34" y1="46" x2="32" y2="85" stroke="#B8744A" stroke-width="7" stroke-linecap="round"/>
    <line x1="66" y1="46" x2="68" y2="85" stroke="#B8744A" stroke-width="7" stroke-linecap="round"/>
    <rect x="10" y="32" width="80" height="6" rx="3" fill="#D4956A"/>
  </svg>`,

  // ── NATUR ──────────────────────────────────────────────
  "baum": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="44" y="60" width="12" height="30" rx="4" fill="#8B6A3A"/>
    <circle cx="50" cy="42" r="26" fill="#4CAF50"/>
    <circle cx="36" cy="50" r="18" fill="#5DBF60"/>
    <circle cx="64" cy="50" r="18" fill="#5DBF60"/>
    <circle cx="50" cy="28" r="16" fill="#6ACF70"/>
    <circle cx="38" cy="36" rx="6" ry="4" fill="rgba(255,255,255,0.2)"/>
  </svg>`,

  "blume": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="47" y="52" width="6" height="36" rx="3" fill="#4CAF50"/>
    <path d="M47 68 Q38 60 30 65 Q35 74 47 72" fill="#4CAF50"/>
    <circle cx="50" cy="46" r="10" fill="#F5C842"/>
    <ellipse cx="50" cy="28" rx="8" ry="14" fill="#FF8C94"/>
    <ellipse cx="50" cy="64" rx="8" ry="14" fill="#FF8C94"/>
    <ellipse cx="32" cy="46" rx="14" ry="8" fill="#FFB3BA"/>
    <ellipse cx="68" cy="46" rx="14" ry="8" fill="#FFB3BA"/>
    <ellipse cx="38" cy="32" rx="10" ry="7" fill="#FF8C94" transform="rotate(-45,38,32)"/>
    <ellipse cx="62" cy="32" rx="10" ry="7" fill="#FF8C94" transform="rotate(45,62,32)"/>
    <ellipse cx="38" cy="60" rx="10" ry="7" fill="#FFB3BA" transform="rotate(45,38,60)"/>
    <ellipse cx="62" cy="60" rx="10" ry="7" fill="#FFB3BA" transform="rotate(-45,62,60)"/>
    <circle cx="50" cy="46" r="10" fill="#F5C842"/>
    <circle cx="50" cy="46" r="6" fill="#F0B030"/>
  </svg>`,

  "meer": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="100" height="100" fill="#B8D8F8"/>
    <path d="M0 55 Q25 45 50 55 Q75 65 100 55 L100 100 L0 100Z" fill="#4A90D9"/>
    <path d="M0 65 Q25 55 50 65 Q75 75 100 65 L100 100 L0 100Z" fill="#3A80C9"/>
    <circle cx="70" cy="20" r="14" fill="#F5C842"/>
    <path d="M8 52 Q14 48 20 52" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M30 60 Q36 56 42 60" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/>
  </svg>`,

  "berg": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,8 88,85 12,85" fill="#888780"/>
    <polygon points="50,8 62,32 38,32" fill="white"/>
    <polygon points="22,85 55,30 40,85" fill="#6A6A68"/>
    <polygon points="60,85 75,45 90,85" fill="#7A7A78"/>
  </svg>`,

  "sonne": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="22" fill="#F5C842"/>
    <line x1="50" y1="12" x2="50" y2="22" stroke="#F5C842" stroke-width="5" stroke-linecap="round"/>
    <line x1="50" y1="78" x2="50" y2="88" stroke="#F5C842" stroke-width="5" stroke-linecap="round"/>
    <line x1="12" y1="50" x2="22" y2="50" stroke="#F5C842" stroke-width="5" stroke-linecap="round"/>
    <line x1="78" y1="50" x2="88" y2="50" stroke="#F5C842" stroke-width="5" stroke-linecap="round"/>
    <line x1="23" y1="23" x2="30" y2="30" stroke="#F5C842" stroke-width="5" stroke-linecap="round"/>
    <line x1="70" y1="70" x2="77" y2="77" stroke="#F5C842" stroke-width="5" stroke-linecap="round"/>
    <line x1="77" y1="23" x2="70" y2="30" stroke="#F5C842" stroke-width="5" stroke-linecap="round"/>
    <line x1="23" y1="77" x2="30" y2="70" stroke="#F5C842" stroke-width="5" stroke-linecap="round"/>
    <circle cx="42" cy="44" r="6" fill="rgba(255,255,255,0.3)"/>
  </svg>`,

  "mond": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M55 15 Q30 20 25 50 Q30 80 55 85 Q35 80 30 50 Q35 20 55 15Z" fill="#F5E070"/>
    <circle cx="44" cy="35" r="4" fill="rgba(200,180,0,0.3)"/>
    <circle cx="38" cy="55" r="6" fill="rgba(200,180,0,0.25)"/>
    <circle cx="50" cy="68" r="3" fill="rgba(200,180,0,0.2)"/>
    <circle cx="75" cy="25" r="3" fill="white"/>
    <circle cx="85" cy="45" r="2" fill="white"/>
    <circle cx="20" cy="20" r="2.5" fill="white"/>
    <circle cx="80" cy="70" r="2" fill="white"/>
  </svg>`,

  // ── SCHULE ─────────────────────────────────────────────
  "buch": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 18 Q50 12 80 18 L80 85 Q50 78 20 85Z" fill="#4A90D9"/>
    <path d="M20 18 L20 85 Q50 78 80 85 L80 18 Q50 24 20 18Z" fill="#5AA0E9"/>
    <line x1="50" y1="14" x2="50" y2="82" stroke="#3A80C9" stroke-width="2"/>
    <line x1="30" y1="34" x2="48" y2="34" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>
    <line x1="30" y1="42" x2="48" y2="42" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>
    <line x1="30" y1="50" x2="48" y2="50" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>
    <line x1="52" y1="34" x2="70" y2="34" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>
    <line x1="52" y1="42" x2="70" y2="42" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>
  </svg>`,

  "stift": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="44" y="18" width="12" height="60" rx="4" fill="#F5C842" transform="rotate(15,50,50)"/>
    <polygon points="44,78 56,78 50,92" fill="#F5C842" transform="rotate(15,50,50)"/>
    <polygon points="47,82 53,82 50,92" fill="#E8917A" transform="rotate(15,50,50)"/>
    <rect x="44" y="18" width="12" height="10" rx="3" fill="#E0E0E0" transform="rotate(15,50,50)"/>
    <rect x="44" y="15" width="12" height="5" rx="2" fill="#C0C0C0" transform="rotate(15,50,50)"/>
  </svg>`,

  "tafel": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="18" width="80" height="54" rx="4" fill="#2C5F2E"/>
    <rect x="14" y="22" width="72" height="46" rx="2" fill="#3A7A3C"/>
    <line x1="22" y1="36" x2="50" y2="36" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="22" y1="45" x2="62" y2="45" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="22" y1="54" x2="44" y2="54" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="35" y="72" width="30" height="6" rx="3" fill="#5A3A1A"/>
    <rect x="20" y="72" width="10" height="10" rx="2" fill="#E0E0E0"/>
    <rect x="70" y="72" width="10" height="10" rx="2" fill="#FFB3BA"/>
  </svg>`,

  "schultasche": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="35" width="64" height="52" rx="8" fill="#E84040"/>
    <rect x="18" y="35" width="64" height="20" rx="8" fill="#C82020"/>
    <path d="M38 35 Q38 22 50 22 Q62 22 62 35" stroke="#C82020" stroke-width="6" fill="none" stroke-linecap="round"/>
    <rect x="38" y="52" width="24" height="16" rx="4" fill="#C82020"/>
    <rect x="44" y="57" width="12" height="6" rx="2" fill="#E84040"/>
    <circle cx="50" cy="60" r="3" fill="#F5C842"/>
  </svg>`,

  "lehrer": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="28" r="16" fill="#F5C8A0"/>
    <path d="M28 88 Q28 62 50 60 Q72 62 72 88Z" fill="#4A90D9"/>
    <path d="M28 88 Q20 72 22 60 L35 65Z" fill="#3A80C9"/>
    <path d="M72 88 Q80 72 78 60 L65 65Z" fill="#3A80C9"/>
    <path d="M34 20 Q50 10 66 20" stroke="#5A3A1A" stroke-width="4" fill="none"/>
    <rect x="56" y="55" width="22" height="16" rx="3" fill="#4CAF50"/>
    <line x1="60" y1="61" x2="74" y2="61" stroke="white" stroke-width="1.5"/>
    <line x1="60" y1="65" x2="70" y2="65" stroke="white" stroke-width="1.5"/>
  </svg>`,

  "klasse": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="15" width="84" height="60" rx="5" fill="#F5E8D0"/>
    <rect x="8" y="15" width="84" height="60" rx="5" fill="none" stroke="#D4956A" stroke-width="2"/>
    <polygon points="50,8 92,15 8,15" fill="#C8845A"/>
    <rect x="35" y="18" width="30" height="20" rx="2" fill="#2C5F2E"/>
    <line x1="40" y1="26" x2="60" y2="26" stroke="white" stroke-width="2"/>
    <line x1="40" y1="32" x2="55" y2="32" stroke="white" stroke-width="2"/>
    <rect x="14" y="50" width="14" height="10" rx="2" fill="#C8845A"/>
    <rect x="34" y="50" width="14" height="10" rx="2" fill="#C8845A"/>
    <rect x="54" y="50" width="14" height="10" rx="2" fill="#C8845A"/>
    <rect x="74" y="50" width="14" height="10" rx="2" fill="#C8845A"/>
    <rect x="8" y="72" width="84" height="8" rx="2" fill="#D4956A"/>
  </svg>`,

  // ── VERKEHR ────────────────────────────────────────────
  "auto": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="50" width="80" height="30" rx="8" fill="#E84040"/>
    <path d="M22 50 Q28 30 42 28 L58 28 Q72 30 78 50Z" fill="#C82020"/>
    <rect x="14" y="72" width="20" height="6" rx="3" fill="#2C2C2A"/>
    <rect x="66" y="72" width="20" height="6" rx="3" fill="#2C2C2A"/>
    <circle cx="24" cy="76" r="8" fill="#2C2C2A"/>
    <circle cx="76" cy="76" r="8" fill="#2C2C2A"/>
    <circle cx="24" cy="76" r="4" fill="#888"/>
    <circle cx="76" cy="76" r="4" fill="#888"/>
    <rect x="30" y="34" width="16" height="14" rx="2" fill="#B8D8F8"/>
    <rect x="54" y="34" width="16" height="14" rx="2" fill="#B8D8F8"/>
    <rect x="82" y="56" width="8" height="5" rx="2" fill="#F5C842"/>
    <rect x="10" y="56" width="8" height="5" rx="2" fill="#E84040"/>
  </svg>`,

  "bus": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="22" width="76" height="56" rx="8" fill="#F5C842"/>
    <rect x="12" y="22" width="76" height="20" rx="8" fill="#E8B830"/>
    <rect x="18" y="28" width="14" height="10" rx="2" fill="#B8D8F8"/>
    <rect x="36" y="28" width="14" height="10" rx="2" fill="#B8D8F8"/>
    <rect x="54" y="28" width="14" height="10" rx="2" fill="#B8D8F8"/>
    <rect x="72" y="28" width="10" height="10" rx="2" fill="#E84040"/>
    <rect x="18" y="46" width="14" height="12" rx="2" fill="#B8D8F8"/>
    <rect x="36" y="46" width="14" height="12" rx="2" fill="#B8D8F8"/>
    <rect x="54" y="46" width="14" height="12" rx="2" fill="#B8D8F8"/>
    <rect x="72" y="46" width="10" height="12" rx="2" fill="#B8D8F8"/>
    <rect x="38" y="62" width="24" height="14" rx="3" fill="#E8A820"/>
    <circle cx="24" cy="82" r="8" fill="#2C2C2A"/>
    <circle cx="76" cy="82" r="8" fill="#2C2C2A"/>
    <circle cx="24" cy="82" r="4" fill="#888"/>
    <circle cx="76" cy="82" r="4" fill="#888"/>
  </svg>`,

  "fahrrad": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="68" r="20" fill="none" stroke="#2C2C2A" stroke-width="4"/>
    <circle cx="75" cy="68" r="20" fill="none" stroke="#2C2C2A" stroke-width="4"/>
    <circle cx="25" cy="68" r="4" fill="#2C2C2A"/>
    <circle cx="75" cy="68" r="4" fill="#2C2C2A"/>
    <line x1="25" y1="68" x2="50" y2="45" stroke="#E84040" stroke-width="3"/>
    <line x1="75" y1="68" x2="50" y2="45" stroke="#E84040" stroke-width="3"/>
    <line x1="50" y1="45" x2="50" y2="68" stroke="#E84040" stroke-width="3"/>
    <line x1="50" y1="45" x2="25" y2="68" stroke="#E84040" stroke-width="3"/>
    <rect x="44" y="35" width="22" height="6" rx="3" fill="#2C2C2A"/>
    <rect x="38" y="38" width="6" height="16" rx="3" fill="#2C2C2A"/>
    <circle cx="50" cy="68" r="5" fill="#E84040"/>
  </svg>`,

  "flugzeug": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 52 Q50 44 85 52 Q70 56 50 55 Q30 56 15 52Z" fill="#B8D8F8"/>
    <path d="M30 52 Q50 30 68 52Z" fill="#E0EEFF"/>
    <path d="M20 52 Q25 60 32 62 L45 60 L45 52Z" fill="#C8D8F0"/>
    <path d="M80 52 Q82 58 78 62 L68 60 L68 52Z" fill="#C8D8F0"/>
    <ellipse cx="50" cy="52" rx="36" ry="6" fill="none"/>
    <path d="M14 50 Q50 44 86 50" fill="none" stroke="#A0C0E8" stroke-width="1"/>
    <circle cx="76" cy="46" r="3" fill="#F5C842"/>
  </svg>`,

  "schiff": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 62 L20 80 L80 80 L85 62 L50 58Z" fill="#C8845A"/>
    <rect x="26" y="40" width="48" height="24" rx="3" fill="#E0E8F0"/>
    <rect x="26" y="40" width="48" height="8" rx="3" fill="#C8D8E8"/>
    <rect x="32" y="44" width="10" height="8" rx="2" fill="#B8D8F8"/>
    <rect x="46" y="44" width="10" height="8" rx="2" fill="#B8D8F8"/>
    <rect x="60" y="44" width="8" height="8" rx="2" fill="#B8D8F8"/>
    <line x1="50" y1="18" x2="50" y2="42" stroke="#8B6A3A" stroke-width="3"/>
    <path d="M50 18 L74 32 L50 40Z" fill="#E84040"/>
    <path d="M10 80 Q30 72 50 80 Q70 88 90 80" stroke="#4A90D9" stroke-width="3" fill="none"/>
  </svg>`,

  "zug": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="28" width="70" height="46" rx="10" fill="#4A90D9"/>
    <rect x="15" y="28" width="70" height="18" rx="10" fill="#3A80C9"/>
    <rect x="22" y="32" width="16" height="12" rx="3" fill="#B8D8F8"/>
    <rect x="42" y="32" width="16" height="12" rx="3" fill="#B8D8F8"/>
    <rect x="62" y="32" width="16" height="12" rx="3" fill="#B8D8F8"/>
    <rect x="22" y="52" width="56" height="14" rx="4" fill="#3A80C9"/>
    <circle cx="28" cy="80" r="9" fill="#2C2C2A"/>
    <circle cx="50" cy="80" r="9" fill="#2C2C2A"/>
    <circle cx="72" cy="80" r="9" fill="#2C2C2A"/>
    <circle cx="28" cy="80" r="4" fill="#888"/>
    <circle cx="50" cy="80" r="4" fill="#888"/>
    <circle cx="72" cy="80" r="4" fill="#888"/>
    <rect x="8" y="70" width="84" height="5" rx="2" fill="#8B6A3A"/>
  </svg>`,

  // ── GEFÜHLE ────────────────────────────────────────────
  "glücklich": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="38" fill="#F5C842"/>
    <circle cx="38" cy="42" r="5" fill="white"/>
    <circle cx="62" cy="42" r="5" fill="white"/>
    <circle cx="39" cy="43" r="3" fill="#2C2C2A"/>
    <circle cx="63" cy="43" r="3" fill="#2C2C2A"/>
    <circle cx="40" cy="42" r="1.2" fill="white"/>
    <circle cx="64" cy="42" r="1.2" fill="white"/>
    <path d="M32 58 Q50 74 68 58" stroke="#E8A820" stroke-width="4" fill="none" stroke-linecap="round"/>
    <circle cx="34" cy="54" r="5" fill="#F0A030" opacity="0.6"/>
    <circle cx="66" cy="54" r="5" fill="#F0A030" opacity="0.6"/>
  </svg>`,

  "traurig": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="38" fill="#B8D8F8"/>
    <circle cx="38" cy="42" r="5" fill="white"/>
    <circle cx="62" cy="42" r="5" fill="white"/>
    <circle cx="39" cy="43" r="3" fill="#2C2C2A"/>
    <circle cx="63" cy="43" r="3" fill="#2C2C2A"/>
    <path d="M32 66 Q50 54 68 66" stroke="#7A9EC8" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M34 36 Q38 32 42 36" stroke="#7A9EC8" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M58 36 Q62 32 66 36" stroke="#7A9EC8" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <path d="M39 52 Q38 58 36 62" stroke="#4A90D9" stroke-width="2" fill="none"/>
    <circle cx="36" cy="63" r="2.5" fill="#4A90D9"/>
  </svg>`,

  "müde": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="38" fill="#D4C8F0"/>
    <path d="M30 42 Q38 48 46 42" stroke="#2C2C2A" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M54 42 Q62 48 70 42" stroke="#2C2C2A" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M36 60 Q50 66 64 60" stroke="#9A88C0" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M68 25 Q74 20 76 26" stroke="#9A88C0" stroke-width="2.5" fill="none"/>
    <path d="M74 18 Q80 14 82 20" stroke="#9A88C0" stroke-width="2" fill="none"/>
    <path d="M62 30 Q68 26 68 32" stroke="#9A88C0" stroke-width="2" fill="none"/>
  </svg>`,

  "hungrig": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="46" r="32" fill="#F5C8A0"/>
    <circle cx="39" cy="40" r="4" fill="#2C2C2A"/>
    <circle cx="61" cy="40" r="4" fill="#2C2C2A"/>
    <path d="M36 54 Q50 62 64 54" stroke="#C87060" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M42 60 Q50 68 58 60" fill="#E84040" stroke="none"/>
    <ellipse cx="50" cy="80" rx="22" ry="12" fill="#F5E8D0" stroke="#D4956A" stroke-width="2"/>
    <path d="M38 78 Q44 74 50 78 Q56 74 62 78" stroke="#C8845A" stroke-width="2" fill="none"/>
    <path d="M36 82 Q44 88 50 84 Q56 88 64 82" stroke="#C8845A" stroke-width="2" fill="none"/>
  </svg>`,

  "aufgeregt": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="36" fill="#F5C842"/>
    <circle cx="38" cy="42" r="6" fill="white"/>
    <circle cx="62" cy="42" r="6" fill="white"/>
    <circle cx="39" cy="43" r="4" fill="#2C2C2A"/>
    <circle cx="63" cy="43" r="4" fill="#2C2C2A"/>
    <circle cx="40" cy="42" r="1.5" fill="white"/>
    <circle cx="64" cy="42" r="1.5" fill="white"/>
    <path d="M30 60 Q50 76 70 60" stroke="#E8A820" stroke-width="4" fill="none" stroke-linecap="round"/>
    <line x1="20" y1="22" x2="26" y2="14" stroke="#F5A623" stroke-width="3" stroke-linecap="round"/>
    <line x1="50" y1="10" x2="50" y2="2" stroke="#F5A623" stroke-width="3" stroke-linecap="round"/>
    <line x1="80" y1="22" x2="74" y2="14" stroke="#F5A623" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  "ängstlich": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="36" fill="#C8D8F0"/>
    <circle cx="38" cy="42" r="6" fill="white"/>
    <circle cx="62" cy="42" r="6" fill="white"/>
    <circle cx="38" cy="43" r="4.5" fill="#2C2C2A"/>
    <circle cx="62" cy="43" r="4.5" fill="#2C2C2A"/>
    <circle cx="37" cy="41" r="1.5" fill="white"/>
    <circle cx="61" cy="41" r="1.5" fill="white"/>
    <path d="M36 36 Q38 30 42 36" stroke="#7A9EC8" stroke-width="2.5" fill="none"/>
    <path d="M58 36 Q62 30 66 36" stroke="#7A9EC8" stroke-width="2.5" fill="none"/>
    <path d="M36 62 Q42 56 50 60 Q58 56 64 62" stroke="#7A9EC8" stroke-width="3" fill="none"/>
    <line x1="44" y1="60" x2="44" y2="68" stroke="#7A9EC8" stroke-width="2"/>
    <line x1="50" y1="60" x2="50" y2="68" stroke="#7A9EC8" stroke-width="2"/>
    <line x1="56" y1="60" x2="56" y2="68" stroke="#7A9EC8" stroke-width="2"/>
  </svg>`,

  // ── WETTER ─────────────────────────────────────────────
  "regen": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 48 Q22 28 42 28 Q44 18 56 18 Q70 18 72 30 Q84 32 84 46 Q84 56 72 56 L28 56 Q22 56 22 48Z" fill="#B8C8D8"/>
    <line x1="30" y1="64" x2="24" y2="80" stroke="#4A90D9" stroke-width="3" stroke-linecap="round"/>
    <line x1="44" y1="64" x2="38" y2="82" stroke="#4A90D9" stroke-width="3" stroke-linecap="round"/>
    <line x1="58" y1="64" x2="52" y2="80" stroke="#4A90D9" stroke-width="3" stroke-linecap="round"/>
    <line x1="72" y1="64" x2="66" y2="82" stroke="#4A90D9" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  "schnee": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 40 Q22 22 40 22 Q42 13 54 13 Q68 13 70 24 Q82 26 82 40 Q82 50 70 50 L28 50 Q22 50 22 40Z" fill="#D0D8E8"/>
    <line x1="30" y1="62" x2="30" y2="78" stroke="#B8D0E8" stroke-width="2.5"/>
    <line x1="26" y1="70" x2="34" y2="70" stroke="#B8D0E8" stroke-width="2.5"/>
    <line x1="27" y1="64" x2="33" y2="76" stroke="#B8D0E8" stroke-width="2"/>
    <line x1="27" y1="76" x2="33" y2="64" stroke="#B8D0E8" stroke-width="2"/>
    <line x1="52" y1="60" x2="52" y2="80" stroke="#B8D0E8" stroke-width="2.5"/>
    <line x1="47" y1="70" x2="57" y2="70" stroke="#B8D0E8" stroke-width="2.5"/>
    <line x1="48" y1="62" x2="56" y2="78" stroke="#B8D0E8" stroke-width="2"/>
    <line x1="48" y1="78" x2="56" y2="62" stroke="#B8D0E8" stroke-width="2"/>
    <line x1="74" y1="62" x2="74" y2="78" stroke="#B8D0E8" stroke-width="2.5"/>
    <line x1="69" y1="70" x2="79" y2="70" stroke="#B8D0E8" stroke-width="2.5"/>
    <line x1="70" y1="64" x2="78" y2="76" stroke="#B8D0E8" stroke-width="2"/>
    <line x1="70" y1="76" x2="78" y2="64" stroke="#B8D0E8" stroke-width="2"/>
  </svg>`,

  "wind": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 38 Q40 34 60 38 Q70 40 72 36 Q76 30 82 32 Q88 36 84 42 Q78 46 60 44 L10 44Z" fill="#C8D8E8"/>
    <path d="M10 52 Q35 48 50 52 Q60 54 62 50 Q64 44 70 46 Q76 50 72 56 Q68 60 50 58 L10 58Z" fill="#B8C8D8"/>
    <path d="M10 66 Q28 62 40 66 Q48 68 48 64 Q50 58 54 60 Q58 64 54 70 Q50 74 40 72 L10 72Z" fill="#A8B8C8"/>
  </svg>`,

  "gewitter": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 44 Q18 26 38 26 Q40 16 52 16 Q66 16 68 28 Q80 30 80 44 Q80 54 68 54 L24 54 Q18 54 18 44Z" fill="#666870"/>
    <polygon points="55,54 44,72 52,72 42,88 62,68 54,68 64,54" fill="#F5C842"/>
  </svg>`,

  "wolke": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="38" cy="50" r="18" fill="#E0E8F0"/>
    <circle cx="56" cy="46" r="20" fill="#E8F0F8"/>
    <circle cx="72" cy="52" r="15" fill="#E0E8F0"/>
    <circle cx="26" cy="54" r="14" fill="#D8E4F0"/>
    <rect x="14" y="54" width="72" height="16" rx="6" fill="#E0E8F0"/>
  </svg>`,

  "regenbogen": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 75 Q10 25 50 25 Q90 25 90 75" stroke="#E84040" stroke-width="6" fill="none"/>
    <path d="M16 75 Q16 32 50 32 Q84 32 84 75" stroke="#F5A623" stroke-width="6" fill="none"/>
    <path d="M22 75 Q22 38 50 38 Q78 38 78 75" stroke="#F5C842" stroke-width="6" fill="none"/>
    <path d="M28 75 Q28 44 50 44 Q72 44 72 75" stroke="#4CAF50" stroke-width="6" fill="none"/>
    <path d="M34 75 Q34 50 50 50 Q66 50 66 75" stroke="#4A90D9" stroke-width="6" fill="none"/>
    <path d="M40 75 Q40 56 50 56 Q60 56 60 75" stroke="#9B59B6" stroke-width="6" fill="none"/>
    <circle cx="18" cy="76" r="6" fill="#F5C842"/>
    <circle cx="82" cy="76" r="6" fill="#F5C842"/>
  </svg>`,

  // ── WOCHENTAGE ─────────────────────────────────────────
  "montag":     `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" rx="12" fill="#4A90D9"/><text x="50" y="48" text-anchor="middle" font-size="28" fill="white" font-weight="bold">Mo</text><text x="50" y="68" text-anchor="middle" font-size="12" fill="rgba(255,255,255,0.85)">Δευτέρα</text><text x="50" y="82" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.7)">Def-te-ra</text></svg>`,
  "dienstag":   `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" rx="12" fill="#E84040"/><text x="50" y="48" text-anchor="middle" font-size="28" fill="white" font-weight="bold">Di</text><text x="50" y="68" text-anchor="middle" font-size="12" fill="rgba(255,255,255,0.85)">Τρίτη</text><text x="50" y="82" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.7)">Tri-ti</text></svg>`,
  "mittwoch":   `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" rx="12" fill="#4CAF50"/><text x="50" y="48" text-anchor="middle" font-size="28" fill="white" font-weight="bold">Mi</text><text x="50" y="68" text-anchor="middle" font-size="12" fill="rgba(255,255,255,0.85)">Τετάρτη</text><text x="50" y="82" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.7)">Te-tar-ti</text></svg>`,
  "donnerstag": `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" rx="12" fill="#9B59B6"/><text x="50" y="48" text-anchor="middle" font-size="28" fill="white" font-weight="bold">Do</text><text x="50" y="68" text-anchor="middle" font-size="12" fill="rgba(255,255,255,0.85)">Πέμπτη</text><text x="50" y="82" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.7)">Pemp-ti</text></svg>`,
  "freitag":    `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" rx="12" fill="#F5A623"/><text x="50" y="48" text-anchor="middle" font-size="28" fill="white" font-weight="bold">Fr</text><text x="50" y="68" text-anchor="middle" font-size="12" fill="rgba(255,255,255,0.85)">Παρασκευή</text><text x="50" y="82" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.7)">Pa-ras-ke-vi</text></svg>`,
  "samstag":    `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" rx="12" fill="#E84FA0"/><text x="50" y="48" text-anchor="middle" font-size="28" fill="white" font-weight="bold">Sa</text><text x="50" y="68" text-anchor="middle" font-size="12" fill="rgba(255,255,255,0.85)">Σάββατο</text><text x="50" y="82" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.7)">Sa-va-to</text></svg>`,
  "sonntag":    `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" rx="12" fill="#E8584A"/><text x="50" y="48" text-anchor="middle" font-size="28" fill="white" font-weight="bold">So</text><text x="50" y="68" text-anchor="middle" font-size="12" fill="rgba(255,255,255,0.85)">Κυριακή</text><text x="50" y="82" text-anchor="middle" font-size="10" fill="rgba(255,255,255,0.7)">Ki-ri-a-ki</text></svg>`
};

// Hilfsfunktion: SVG für ein Wort holen (Fallback = Emoji)
function getSvg(de, emoji) {
  var key = de.toLowerCase();
  return svgImages[key] || '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><text x="50" y="65" text-anchor="middle" font-size="55">' + emoji + '</text></svg>';
}

var vocab = [
  // Tiere
  {de:"Katze",  gr:"γάτα",      pr:"gha-ta",          emoji:"🐱", cat:"tiere"},
  {de:"Hund",   gr:"σκύλος",    pr:"ski-los",          emoji:"🐶", cat:"tiere"},
  {de:"Vogel",  gr:"πουλί",     pr:"pu-li",            emoji:"🐦", cat:"tiere"},
  {de:"Fisch",  gr:"ψάρι",      pr:"psa-ri",           emoji:"🐟", cat:"tiere"},
  {de:"Pferd",  gr:"άλογο",     pr:"a-lo-gho",         emoji:"🐴", cat:"tiere"},
  {de:"Schaf",  gr:"πρόβατο",   pr:"pro-va-to",        emoji:"🐑", cat:"tiere"},
  // Essen
  {de:"Apfel",  gr:"μήλο",      pr:"mi-lo",            emoji:"🍎", cat:"essen"},
  {de:"Brot",   gr:"ψωμί",      pr:"pso-mi",           emoji:"🍞", cat:"essen"},
  {de:"Wasser", gr:"νερό",      pr:"ne-ro",            emoji:"💧", cat:"essen"},
  {de:"Eis",    gr:"παγωτό",    pr:"pa-go-to",         emoji:"🍦", cat:"essen"},
  {de:"Milch",  gr:"γάλα",      pr:"gha-la",           emoji:"🥛", cat:"essen"},
  {de:"Käse",   gr:"τυρί",      pr:"ti-ri",            emoji:"🧀", cat:"essen"},
  // Farben
  {de:"Blau",   gr:"μπλε",      pr:"ble",              emoji:"🔵", cat:"farben"},
  {de:"Rot",    gr:"κόκκινο",   pr:"ko-ki-no",         emoji:"🔴", cat:"farben"},
  {de:"Grün",   gr:"πράσινο",   pr:"pra-si-no",        emoji:"🟢", cat:"farben"},
  {de:"Gelb",   gr:"κίτρινο",   pr:"ki-tri-no",        emoji:"🟡", cat:"farben"},
  {de:"Weiß",   gr:"άσπρο",     pr:"a-spro",           emoji:"⬜", cat:"farben"},
  {de:"Schwarz",gr:"μαύρο",     pr:"mav-ro",           emoji:"⬛", cat:"farben"},
  // Zahlen
  {de:"Eins",   gr:"ένα",       pr:"e-na",             emoji:"1️⃣", cat:"zahlen"},
  {de:"Zwei",   gr:"δύο",       pr:"di-o",             emoji:"2️⃣", cat:"zahlen"},
  {de:"Drei",   gr:"τρία",      pr:"tri-a",            emoji:"3️⃣", cat:"zahlen"},
  {de:"Vier",   gr:"τέσσερα",   pr:"te-se-ra",         emoji:"4️⃣", cat:"zahlen"},
  {de:"Fünf",   gr:"πέντε",     pr:"pen-de",           emoji:"5️⃣", cat:"zahlen"},
  {de:"Zehn",   gr:"δέκα",      pr:"de-ka",            emoji:"🔟", cat:"zahlen"},
  // Körper
  {de:"Kopf",   gr:"κεφάλι",    pr:"ke-fa-li",         emoji:"🗣️", cat:"koerper"},
  {de:"Hand",   gr:"χέρι",      pr:"che-ri",           emoji:"✋", cat:"koerper"},
  {de:"Auge",   gr:"μάτι",      pr:"ma-ti",            emoji:"👁️", cat:"koerper"},
  {de:"Nase",   gr:"μύτη",      pr:"mi-ti",            emoji:"👃", cat:"koerper"},
  {de:"Mund",   gr:"στόμα",     pr:"sto-ma",           emoji:"👄", cat:"koerper"},
  {de:"Ohr",    gr:"αυτί",      pr:"af-ti",            emoji:"👂", cat:"koerper"},
  // Kleidung
  {de:"Hemd",   gr:"πουκάμισο", pr:"pu-ka-mi-so",      emoji:"👕", cat:"kleidung"},
  {de:"Hose",   gr:"παντελόνι", pr:"pan-de-lo-ni",     emoji:"👖", cat:"kleidung"},
  {de:"Schuhe", gr:"παπούτσια", pr:"pa-pu-tsi-a",      emoji:"👟", cat:"kleidung"},
  {de:"Mütze",  gr:"σκούφος",   pr:"sku-fos",          emoji:"🧢", cat:"kleidung"},
  {de:"Jacke",  gr:"μπουφάν",   pr:"bu-fan",           emoji:"🧥", cat:"kleidung"},
  {de:"Kleid",  gr:"φόρεμα",    pr:"fo-re-ma",         emoji:"👗", cat:"kleidung"},
  // Zuhause
  {de:"Haus",   gr:"σπίτι",     pr:"spi-ti",           emoji:"🏠", cat:"zuhause"},
  {de:"Tür",    gr:"πόρτα",     pr:"por-ta",           emoji:"🚪", cat:"zuhause"},
  {de:"Fenster",gr:"παράθυρο",  pr:"pa-ra-thi-ro",     emoji:"🪟", cat:"zuhause"},
  {de:"Bett",   gr:"κρεβάτι",   pr:"kre-va-ti",        emoji:"🛏️", cat:"zuhause"},
  {de:"Stuhl",  gr:"καρέκλα",   pr:"ka-re-kla",        emoji:"🪑", cat:"zuhause"},
  {de:"Tisch",  gr:"τραπέζι",   pr:"tra-pe-zi",        emoji:"🪵", cat:"zuhause"},
  // Natur
  {de:"Baum",   gr:"δέντρο",    pr:"den-dro",          emoji:"🌳", cat:"natur"},
  {de:"Blume",  gr:"λουλούδι",  pr:"lu-lu-di",         emoji:"🌸", cat:"natur"},
  {de:"Meer",   gr:"θάλασσα",   pr:"tha-la-sa",        emoji:"🌊", cat:"natur"},
  {de:"Berg",   gr:"βουνό",     pr:"vu-no",            emoji:"⛰️", cat:"natur"},
  {de:"Sonne",  gr:"ήλιος",     pr:"i-li-os",          emoji:"☀️", cat:"natur"},
  {de:"Mond",   gr:"φεγγάρι",   pr:"fen-gha-ri",       emoji:"🌙", cat:"natur"},
  // Schule
  {de:"Buch",       gr:"βιβλίο",          pr:"vi-vli-o",         emoji:"📚", cat:"schule"},
  {de:"Stift",      gr:"μολύβι",          pr:"mo-li-vi",         emoji:"✏️", cat:"schule"},
  {de:"Tafel",      gr:"πίνακας",         pr:"pi-na-kas",        emoji:"🖊️", cat:"schule"},
  {de:"Schultasche",gr:"σχολική τσάντα",  pr:"scho-li-ki tsan-da",emoji:"🎒",cat:"schule"},
  {de:"Lehrer",     gr:"δάσκαλος",        pr:"das-ka-los",       emoji:"👨‍🏫",cat:"schule"},
  {de:"Klasse",     gr:"τάξη",            pr:"tak-si",           emoji:"🏫", cat:"schule"},
  // Verkehr
  {de:"Auto",     gr:"αυτοκίνητο",  pr:"af-to-ki-ni-to",  emoji:"🚗", cat:"verkehr"},
  {de:"Bus",      gr:"λεωφορείο",   pr:"le-o-fo-ri-o",    emoji:"🚌", cat:"verkehr"},
  {de:"Fahrrad",  gr:"ποδήλατο",    pr:"po-di-la-to",     emoji:"🚲", cat:"verkehr"},
  {de:"Flugzeug", gr:"αεροπλάνο",   pr:"a-e-ro-pla-no",   emoji:"✈️", cat:"verkehr"},
  {de:"Schiff",   gr:"πλοίο",       pr:"pli-o",           emoji:"🚢", cat:"verkehr"},
  {de:"Zug",      gr:"τρένο",       pr:"tre-no",          emoji:"🚆", cat:"verkehr"},
  // Gefühle
  {de:"Glücklich",  gr:"χαρούμενος",       pr:"cha-ru-me-nos",       emoji:"😊", cat:"gefuehle"},
  {de:"Traurig",    gr:"λυπημένος",        pr:"li-pi-me-nos",        emoji:"😢", cat:"gefuehle"},
  {de:"Müde",       gr:"κουρασμένος",      pr:"ku-ras-me-nos",       emoji:"😴", cat:"gefuehle"},
  {de:"Hungrig",    gr:"πεινασμένος",      pr:"pi-nas-me-nos",       emoji:"😋", cat:"gefuehle"},
  {de:"Ängstlich",  gr:"φοβισμένος",       pr:"fo-vis-me-nos",       emoji:"😨", cat:"gefuehle"},
  {de:"Aufgeregt",  gr:"ενθουσιασμένος",   pr:"en-thu-si-as-me-nos", emoji:"🤩", cat:"gefuehle"},
  // Wetter
  {de:"Regen",      gr:"βροχή",        pr:"vro-chi",      emoji:"🌧️", cat:"wetter"},
  {de:"Schnee",     gr:"χιόνι",        pr:"chi-o-ni",     emoji:"❄️", cat:"wetter"},
  {de:"Wind",       gr:"αέρας",        pr:"a-e-ras",      emoji:"💨", cat:"wetter"},
  {de:"Gewitter",   gr:"καταιγίδα",    pr:"ka-te-gi-da",  emoji:"⛈️", cat:"wetter"},
  {de:"Wolke",      gr:"σύννεφο",      pr:"si-ne-fo",     emoji:"☁️", cat:"wetter"},
  {de:"Regenbogen", gr:"ουράνιο τόξο", pr:"u-ra-ni-o tok-so", emoji:"🌈", cat:"wetter"},
  // Wochentage
  {de:"Montag",     gr:"Δευτέρα",    pr:"Def-te-ra",    emoji:"📅", cat:"wochentage"},
  {de:"Dienstag",   gr:"Τρίτη",      pr:"Tri-ti",       emoji:"📅", cat:"wochentage"},
  {de:"Mittwoch",   gr:"Τετάρτη",    pr:"Te-tar-ti",    emoji:"📅", cat:"wochentage"},
  {de:"Donnerstag", gr:"Πέμπτη",     pr:"Pemp-ti",      emoji:"📅", cat:"wochentage"},
  {de:"Freitag",    gr:"Παρασκευή",  pr:"Pa-ras-ke-vi", emoji:"📅", cat:"wochentage"},
  {de:"Samstag",    gr:"Σάββατο",    pr:"Sa-va-to",     emoji:"📅", cat:"wochentage"},
  {de:"Sonntag",    gr:"Κυριακή",    pr:"Ki-ri-a-ki",   emoji:"📅", cat:"wochentage"}
];
