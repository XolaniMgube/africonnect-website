export default function ServiceIcon({
  id,
  size = 24,
  className = "",
}: {
  id: string;
  size?: number;
  className?: string;
}) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  if (id === "brand") {
    return (
      <svg {...props}>
        <path d="m12 3 2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2L12 3Z" />
        <path d="M5 3v3M3.5 4.5h3M19 18v3M17.5 19.5h3" />
      </svg>
    );
  }

  if (id === "print") {
    return (
      <svg {...props}>
        <path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <rect x="6" y="14" width="12" height="7" rx="1" />
        <path d="M18 12h.01" />
      </svg>
    );
  }

  if (id === "websites") {
    return (
      <svg {...props}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4M8.5 8 6.5 10l2 2M15.5 8l2 2-2 2" />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <rect x="3" y="3" width="7" height="6" rx="1.5" />
      <rect x="14" y="3" width="7" height="6" rx="1.5" />
      <rect x="8.5" y="15" width="7" height="6" rx="1.5" />
      <path d="M6.5 9v2.5H12V15M17.5 9v2.5H12" />
    </svg>
  );
}
