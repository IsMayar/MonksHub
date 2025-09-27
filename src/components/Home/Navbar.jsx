import { navbarLinks, navbarLogo } from "../../constants/index";
import CustomButton from "../Common/CustomButton";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={navbarLogo} alt="MonksHub Logo" className="h-10" />
          </Link>
        </div>

        {/* Links */}
        <ul className="hidden md:flex justify-between gap-6 text-lg">
          {navbarLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.href} className="hover:text-red-400 font-semibold">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div>
          <CustomButton text="Get this template" />
        </div>
      </nav>
    </header>
  );
}
