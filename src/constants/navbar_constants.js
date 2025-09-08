// src/constants/navbar_constants.js
import { MonksHubLogo } from "./images_constants";

export const navbarLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Mentors", href: "/mentors" },
  { label: "Blogs", href: "/blogs" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const navbarLogo = MonksHubLogo;

export const navbarCTA = {
  label: "Get this Template",
  href: "#",
  classes: "px-6 py-4 bg-blue-300 border rounded-full",
};
