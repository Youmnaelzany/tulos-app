import Link from "next/link";

import { ClerkLoaded, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { ListOrdered } from "lucide-react";

import CartIcon from "./CartIcon";
import Container from "./Container";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import SearchBar from "./Searchbar";

<CartIcon />;
const Header = async () => {
  const user = await currentUser();
  return (
    <header className="border-b border-b-gray-400 bg-white py-5">
      <Container className="text-lightColor flex items-center justify-between gap-7">
        {/* Left Nav */}
        <HeaderMenu />
        <div className="flex w-auto items-center justify-center gap-2.5 md:w-1/3">
          {/* Logo */}
          <MobileMenu />
          <Logo>Tulos</Logo>
        </div>
        {/* Right Nav */}
        <div className="flex w-auto items-center justify-end gap-5 md:w-1/3">
          {/* Search Bar */}
          <SearchBar />
          {/* Cart Icon */}
          <CartIcon />
          {/* Clerk */}
          <ClerkLoaded>
            <SignedIn>
              {/* List Orders */}
              <Link href={"/orders"} className="group relative">
                <ListOrdered className="group-hover:text-darkColor hoverEffect size-5" />
                <span className="bg-darkColor absolute -top-1 -right-1 flex size-3.5 items-center justify-center rounded-full text-xs font-semibold text-white">
                  0
                </span>
              </Link>
              {/* User Button */}
              <UserButton />
            </SignedIn>
            {!user && (
              <SignInButton mode="modal">
                <button className="font hover:text-darkColor hoverEffect text-sm font-semibold">
                  Login
                </button>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};
export default Header;
