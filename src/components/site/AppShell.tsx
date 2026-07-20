import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import { brand, navItems } from "../../data/siteContent";
import { buttonStyles } from "../ui/button";
import { cn } from "../../lib/utils";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-950">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-stone-50/90 backdrop-blur">
      <nav className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={brand.logo} alt="MonksHub logo" className="h-10 w-10" />
          <span className="text-xl font-bold text-slate-950">{brand.name}</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "rounded-md px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-slate-950",
                  isActive && "bg-white text-slate-950 shadow-sm"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/contact"
            className={buttonStyles({ variant: "dark", size: "default" })}
          >
            Book a call
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-950 lg:hidden"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-slate-200 bg-stone-50 lg:hidden"
          >
            <div className="container grid gap-2 py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "rounded-md px-3 py-3 text-sm font-semibold text-slate-700",
                      isActive ? "bg-white text-slate-950 shadow-sm" : "hover:bg-white"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="max-w-md">
          <div className="flex items-center gap-3">
            <img src={brand.logo} alt="" className="h-10 w-10 rounded-md bg-white p-1" />
            <span className="text-xl font-bold">{brand.name}</span>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-300">{brand.promise}</p>
          <p className="mt-6 text-sm text-slate-400">
            &copy; {new Date().getFullYear()} MonksHub Studio. All rights reserved.
          </p>
        </div>

        <FooterGroup
          title="Platform"
          links={[
            ["Courses", "/courses"],
            ["Mentors", "/mentors"],
            ["Insights", "/blogs"],
          ]}
        />
        <FooterGroup
          title="Company"
          links={[
            ["About", "/about"],
            ["Contact", "/contact"],
            ["For teams", "/contact"],
          ]}
        />
        <div>
          <h2 className="text-sm font-semibold uppercase text-slate-400">Contact</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <p>{brand.email}</p>
            <p>{brand.phone}</p>
            <p>{brand.location}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({
  title,
  links,
}: {
  title: string;
  links: Array<[string, string]>;
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase text-slate-400">{title}</h2>
      <div className="mt-4 grid gap-3 text-sm">
        {links.map(([label, href]) => (
          <Link key={label} to={href} className="text-slate-300 hover:text-white">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
