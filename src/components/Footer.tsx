import { personalInfo } from "@/data/resume";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background px-5 py-8 md:px-10">
      <div className="container-wide flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="spaced-heading !text-[0.6rem]">
          © {year} {personalInfo.name}
        </p>
        <SocialLinks size="sm" />
        <p className="text-sm text-muted">
          MERN Stack Developer · Kerala, India
        </p>
      </div>
    </footer>
  );
}
