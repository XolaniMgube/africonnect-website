export type SocialPlatform = "TikTok" | "Instagram" | "Facebook";

export default function SocialIcon({ platform }: { platform: SocialPlatform }) {
  if (platform === "TikTok") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M14.5 3a6.5 6.5 0 0 0 5.5 5.5v3.1a9.5 9.5 0 0 1-5.5-1.8v6.1a6.1 6.1 0 1 1-5.3-6v3.2a3 3 0 1 0 2.2 2.8V3h3.1Z" />
      </svg>
    );
  }

  if (platform === "Instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 fill-none stroke-current"
        strokeWidth="2"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M14 8.5V7c0-.8.5-1 1-1h2.5V2.2A22 22 0 0 0 14.3 2C11 2 8.8 4 8.8 7.6v.9H5.5V13h3.3v9H14v-9h3.5l.7-4.5H14Z" />
    </svg>
  );
}
