import Link from "next/link";

import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface SocialMediaLinksProps {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const SocialLinks = [
  {
    name: "GitHub",
    icon: <Github className="size-5" />,
    link: "https://github.com/Youmnaelzany",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="size-5" />,
    link: "https://www.linkedin.com/in/youmna-elzany/",
  },
  {
    name: "Twitter",
    icon: <Twitter className="size-5" />,
    link: "https://twitter.com/YoumnaElzany",
  },
  {
    name: "Instagram",
    icon: <Instagram className="size-5" />,
    link: "https://www.instagram.com/youmnaelzany/",
  },
  {
    name: "Facebook",
    icon: <Facebook className="size-5" />,
    link: "https://www.facebook.com/youmna.elzany.5",
  },
  {
    name: "YouTube",
    icon: <Youtube className="size-5" />,
    link: "https://www.youtube.com/@youmnaelzany",
  },
];

const SocialMediaLinks = ({
  className,
  iconClassName,
  tooltipClassName,
}: SocialMediaLinksProps) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {SocialLinks.map((link) => (
          <Tooltip key={link.name}>
            <TooltipTrigger asChild>
              <Link
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "hoverEffect rounded-full border p-2 hover:border-white hover:text-white",
                  iconClassName
                )}
              >
                {link.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "text-darkColor bg-white font-semibold",
                tooltipClassName
              )}
            >
              <p>{link.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};
export default SocialMediaLinks;
