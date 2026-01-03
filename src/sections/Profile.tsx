import GitHubIcon from "@/utils/GitHubIcon";
import LinkedInIcon from "@/utils/LinkedInIcon";
import ResumeIcon from "@/utils/ResumeIcon";
import { CheckIcon, CopyIcon, MailIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { useClipboard } from "../hooks/use-clipboard";

const EMAIL = "facioljordan5@gmail.com";
const PHONE = "+63 9273618160";

const Profile = () => {
  const emailClipboard = useClipboard();
  const phoneClipboard = useClipboard();

  const [isPhotoHovered, setIsPhotoHovered] = useState<boolean>(false);

  const handleEmailCopy = async () => {
    await emailClipboard.copy(EMAIL);
  };

  const handlePhoneCopy = async () => {
    await phoneClipboard.copy(PHONE);
  };

  const handleReachOut = () => {
    const subject = "Hi Jordan, I saw your portfolio and...";
    const destination = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(subject)}`;
    const gmailUrl = `https://accounts.google.com/AccountChooser?continue=${encodeURIComponent(destination)}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="grid grid-cols-12 gap-3">
      <div
        className="col-span-5 md:col-span-2"
        onMouseEnter={() => setIsPhotoHovered(true)}
        onMouseLeave={() => setIsPhotoHovered(false)}
      >
        {isPhotoHovered ? (
          <img
            src="assets/gomu-gomu-no-boh.webp"
            alt="Jordan Faciol - Gomu Gomu no Boh"
            className="h-36 w-36 rounded-lg object-cover"
            loading="lazy"
          />
        ) : (
          <img
            src="assets/jordan-faciol.webp"
            alt="Jordan Faciol"
            className="h-36 w-36 rounded-lg object-cover"
            loading="lazy"
          />
        )}
      </div>

      <div className="col-span-7 flex flex-col gap-1 md:col-span-10">
        <div className="flex items-center gap-2 text-2xl font-semibold">
          <p>Jordan Faciol</p>
          <img
            src="https://img.icons8.com/color/48/verified-badge.png"
            alt="verified-badge"
            className="size-4"
          />
        </div>

        <p>Software Engineer</p>

        <div
          className="mb-2 flex cursor-pointer items-center gap-1 text-green-600 dark:text-green-400"
          onClick={handleReachOut}
        >
          <p className="text-xl">•</p>
          <div className="relative cursor-pointer overflow-hidden">
            <div className="group">
              <p className="ease-slow flex flex-col border-b-2 border-dashed border-green-600 transition-all duration-1000 group-hover:-translate-y-full dark:border-green-400">
                Available for work
              </p>
              <div className="ease-slow absolute top-full flex items-center justify-center gap-1 border-b-2 border-dashed border-green-600 transition-all duration-1000 group-hover:-translate-y-full dark:border-green-400">
                <p>Reach out</p> <MailIcon className="size-3.5" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            type="button"
            aria-label="linkedin"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/jordanfaciol/",
                "_blank",
                "noopener,noreferrer",
              );
            }}
          >
            <LinkedInIcon className="fill-primary-foreground" /> LinkedIn
          </Button>
          <Button
            type="button"
            aria-label="github"
            onClick={() => {
              window.open(
                "https://github.com/winterwind999",
                "_blank",
                "noopener,noreferrer",
              );
            }}
          >
            <GitHubIcon className="fill-primary-foreground" /> GitHub
          </Button>
          <Button
            type="button"
            aria-label="resume"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/assets/Jordan G. Faciol - Resume.pdf";
              link.download = "Jordan G. Faciol - Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <ResumeIcon className="fill-primary-foreground" />
            Resume
          </Button>

          <div className="flex flex-wrap items-center gap-1">
            <p className="text-sm">{EMAIL}</p>
            <button
              type="button"
              aria-label="copy-email"
              title="Copy Email Address"
              onClick={handleEmailCopy}
            >
              {emailClipboard.copied ? (
                <CheckIcon className="size-4" />
              ) : (
                <CopyIcon className="size-4" />
              )}
            </button>
          </div>

          <div className="flex items-center gap-1">
            <p className="text-sm">{PHONE}</p>
            <button
              type="button"
              aria-label="copy-phone"
              title="Copy Mobile Number"
              onClick={handlePhoneCopy}
            >
              {phoneClipboard.copied ? (
                <CheckIcon className="size-4" />
              ) : (
                <CopyIcon className="size-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
