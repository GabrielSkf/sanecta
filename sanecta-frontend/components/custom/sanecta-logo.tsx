export function SanectaLogo() {
  return (
    <div className="flex flex-col items-center gap-2">
      {/* Ícone do Logo */}
      <div className="relative flex size-20 items-center justify-center rounded-full bg-gradient-to-b from-sky-100 to-sky-50 shadow-sm">
        <svg
          viewBox="0 0 64 64"
          className="size-14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Gota d'água */}
          <path
            d="M32 4C32 4 14 24 14 38C14 48.5 22 56 32 56C42 56 50 48.5 50 38C50 24 32 4 32 4Z"
            fill="url(#dropGradient)"
          />
          
          {/* Mãos dando aperto */}
          <g transform="translate(18, 28)">
            {/* Mão esquerda */}
            <path
              d="M4 8C4 8 8 4 14 4C14 4 10 8 10 12C10 12 6 12 4 8Z"
              fill="white"
              stroke="white"
              strokeWidth="0.5"
            />
            {/* Mão direita */}
            <path
              d="M24 8C24 8 20 4 14 4C14 4 18 8 18 12C18 12 22 12 24 8Z"
              fill="white"
              stroke="white"
              strokeWidth="0.5"
            />
            {/* Aperto de mão */}
            <ellipse cx="14" cy="8" rx="6" ry="4" fill="white" />
          </g>
          
          <defs>
            <linearGradient id="dropGradient" x1="32" y1="4" x2="32" y2="56" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="1" stopColor="#0EA5E9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Texto do Logo */}
      <span className="text-xl font-semibold text-sky-500">
        Sanecta
      </span>
    </div>
  )
}
