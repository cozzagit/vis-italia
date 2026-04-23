export default function VisLogo({ className = "h-10", light = false }) {
  const textColor = light ? '#ffffff' : '#3a3a3a';
  const subColor = light ? 'rgba(255,255,255,0.65)' : '#6b6b6b';
  return (
    <svg
      viewBox="0 0 320 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="VIS ITALIA"
    >
      {/* Magnifying glass handle */}
      <line x1="28" y1="62" x2="14" y2="80" stroke="#1a7c3e" strokeWidth="6" strokeLinecap="round" />
      <rect x="8" y="77" width="14" height="9" rx="4" fill="#1a7c3e" transform="rotate(-38 15 81)" />

      {/* Outer green arc */}
      <path
        d="M 10,45 A 28,28 0 1,1 52,72"
        fill="none"
        stroke="#1a7c3e"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      {/* Middle orange arc */}
      <path
        d="M 15,45 A 22,22 0 1,1 48,67"
        fill="none"
        stroke="#E8821A"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Inner red arc */}
      <path
        d="M 20,45 A 16,16 0 1,1 44,62"
        fill="none"
        stroke="#D93025"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* VIS ITALIA text */}
      <text x="68" y="58" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="38" fill={textColor} letterSpacing="-1">
        VIS ITALIA
      </text>
      {/* Subtitle */}
      <text x="68" y="74" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="11.5" fill={subColor} letterSpacing="2.5">
        VISITE ISPETTIVE SCAFFALATURE
      </text>
    </svg>
  );
}