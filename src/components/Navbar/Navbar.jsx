import {
  navbarLinks,
  navbarCTA,
  navbarLogo,
} from "../../constants/navbar_constants";
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
          <a href={navbarCTA.href} className={navbarCTA.classes}>
            {navbarCTA.label}
          </a>
        </div>
      </nav>
    </header>
  );
}
