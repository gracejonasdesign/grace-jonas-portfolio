import { Link, useLocation } from "react-router";

export function Navigation() {
  const location = useLocation();

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/work", label: "Work" },
    { path: "/resume", label: "Resume" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-xl tracking-tight">
            Grace Jonas
          </Link>

          <div className="flex gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors tracking-wide ${
                  location.pathname === link.path
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
