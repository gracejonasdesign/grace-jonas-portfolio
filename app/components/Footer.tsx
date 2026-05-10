export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="text-sm text-muted-foreground">
              © 2026 Grace Jonas. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="mailto:gracejonasdesign@gmail.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </a>
            <a
              href="https://behance.net/gracejonas7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Behance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
