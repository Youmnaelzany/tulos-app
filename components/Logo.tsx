import Link from "next/link";

import { cn } from "@/lib/utils";

interface LogoProps {
  children?: React.ReactNode;
  className?: string;
}
const Logo = ({ children, className }: LogoProps) => {
  return (
    <Link href={"/"}>
      <h2
        className={cn(
          "text-darkColor text-2xl font-black tracking-wider uppercase",
          className
        )}
      >
        {children}
      </h2>
    </Link>
  );
};
export default Logo;
