import Container from "./Container";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="border-b border-b-gray-400 bg-white py-5">
      <Container className="text-lightColor flex items-center justify-between gap-7">
        {/* Left Nav */}
        <HeaderMenu />
        {/* Logo */}
        <Logo />
        {/* Right Nav */}
        <div className="">Right</div>
      </Container>
    </header>
  );
};
export default Header;
