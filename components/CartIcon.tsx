import Link from "next/link";

import { ShoppingBag } from "lucide-react";

const CartIcon = () => {
  return (
    <Link href={"/cart"} className="group relative">
      <ShoppingBag className="group-hover:text-darkColor hoverEffect size-5" />
      <span className="bg-darkColor absolute -top-1 -right-1 flex size-3.5 items-center justify-center rounded-full text-xs font-semibold text-white">
        0
      </span>
    </Link>
  );
};
export default CartIcon;
