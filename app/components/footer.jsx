import { NavLink } from "react-router";

const links = [
  {
    title: "Home",
    href: "/", // ganti "#" → "/" agar tidak bug
  },
  {
    title: "Disease",
    href: "/disease",
  },
  {
    title: "Classification",
    href: "/clasify",
  },
];

export default function Footer() {
  return (
    <footer className="py-16 md:py-16">
      <div className="mx-auto max-w-5xl px-6">
        {/* Logo */}
        <NavLink
          to="/" /* FIX */
          aria-label="go home"
          className="mx-auto block size-fit"
        >
          <img
            className="text-foreground h-12 w-auto"
            src="logo/detomato-h.png"
            alt="Logo Detomato"
          />
        </NavLink>

        {/* Menu Links */}
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.href} /* FIX */
              className="text-muted-foreground hover:text-primary block duration-150"
            >
              <span>{link.title}</span>
            </NavLink>
          ))}
        </div>

        <span className="text-muted-foreground block text-center text-sm">
          © {new Date().getFullYear()} Detomato, All rights reserved
        </span>
      </div>
    </footer>
  );
}
