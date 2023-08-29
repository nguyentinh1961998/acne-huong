export default function Wave({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 100"
      preserveAspectRatio="none"
      className={className}
    >
      <path
        fill="#e6fce9"
        className="rotate-180 origin-center"
        // class="elementor-shape-fill"
        d="M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z"
      />
    </svg>
  )
}
