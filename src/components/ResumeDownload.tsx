import { personalInfo } from "@/data/resume";

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
    >
      <path
        d="M7 2v7M4.5 6.5 7 9l2.5-2.5M2 11h10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type ResumeDownloadProps = {
  variant?: "nav" | "hero" | "contact";
  className?: string;
  onClick?: () => void;
};

export default function ResumeDownload({
  variant = "hero",
  className = "",
  onClick,
}: ResumeDownloadProps) {
  const { file, downloadName } = personalInfo.resume;

  if (!file?.trim()) return null;

  const baseClass =
    variant === "nav"
      ? "inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-medium text-background transition-opacity hover:opacity-80"
      : variant === "contact"
        ? "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-accent/30"
        : "inline-flex w-fit items-center gap-2 rounded-full border border-accent/25 bg-accent px-6 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90";

  return (
    <a
      href={file}
      download={downloadName || undefined}
      className={`${baseClass} ${className}`}
      onClick={onClick}
    >
      Download resume
      <DownloadIcon />
    </a>
  );
}
