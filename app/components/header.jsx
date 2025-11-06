import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";
import { ThemeSwitch } from "@/components/ui/theme";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "EDA", href: "/eda" },
  { name: "Predict", href: "/predict" },
];

export default function Header() {
  const [menuState, setMenuState] = useState(false);
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="bg-background/50 fixed z-20 w-full border-b backdrop-blur-3xl"
      >
        <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4">
            <div className="flex w-full items-center justify-between gap-12 md:w-auto">
              <NavLink
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <img
                  className="text-foreground h-10 w-auto transition-transform duration-300 ease-in-out hover:scale-110"
                  src="logo/logo2_removed.png"
                  alt="Logo Rego Omah"
                />
              </NavLink>

              <div className="flex gap-2 md:hidden items-center">
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                  className="relative z-20 cursor-pointer p-2"
                >
                  <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                  <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                </button>

                <ThemeSwitch />
              </div>

              <div className="hidden md:block">
                <ul className="flex gap-8 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <NavLink
                        to={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-background in-data-[state=active]:block md:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap md:m-0 md:flex md:w-fit md:gap-6 md:space-y-0 md:border-transparent md:bg-transparent md:p-0 md:shadow-none dark:shadow-none dark:md:bg-transparent">
              <div className="md:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="hidden md:block">
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
