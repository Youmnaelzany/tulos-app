import CartIcon from "./CartIcon";
import Container from "./Container";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import SearchBar from "./Searchbar";

<CartIcon />;
const Header = () => {
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
          <div className="">
            <button className="font hover:text-darkColor hoverEffect text-sm font-semibold">
              Login
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
