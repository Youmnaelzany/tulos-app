import Link from "next/link";
import { usePathname } from "next/navigation";

import { X } from "lucide-react";
import { motion } from "motion/react";

import { headerData } from "@/constants";

import Logo from "./Logo";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  return (
    <div
      className={`bg-darkColor/50 hoverEffect fixed inset-y-0 left-0 z-50 w-full shadow-xl ${isOpen ? "translate-x-0" : "-translate-x-full"} `}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="bg-darkColor flex h-full max-w-96 min-w-72 flex-col gap-6 border-r-2 border-r-white p-10 text-white/70"
      >
        <div className="flex items-center justify-between">
          <button onClick={onClose}>
            <Logo className="text-white">Tulos</Logo>
          </button>
          <button className="" onClick={onClose}>
            <X className="hoverEffect size-7 text-white hover:text-red-500" />
          </button>
        </div>
        <div className="flex flex-col gap-3.5 text-base font-semibold tracking-wide">
          {headerData.map((item) => (
            <Link
              onClick={onClose}
              href={item.href}
              key={item.title}
              className={`hoverEffect hover:text-white ${pathname === item.href && "text-white"}`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
export default Sidebar;
