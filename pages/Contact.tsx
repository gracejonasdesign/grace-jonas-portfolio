import { Mail, Phone, Globe } from "lucide-react";

export function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-12 py-24">
      <div className="mb-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight mb-8 leading-tight">
          Let's work together
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl tracking-wide">
          I'm always interested in new opportunities and collaborations. Get in touch to discuss your project.
        </p>
      </div>

      <div className="space-y-12">
        <div className="grid sm:grid-cols-2 gap-8">
          <a
            href="mailto:gracejonasdesign@gmail.com"
            className="group p-8 border border-border rounded-lg hover:border-foreground transition-colors"
          >
            <Mail className="w-8 h-8 mb-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            <h2 className="text-xl tracking-tight mb-2">Email</h2>
            <p className="text-muted-foreground group-hover:text-foreground transition-colors">
              gracejonasdesign@gmail.com
            </p>
          </a>

          <a
            href="tel:267.608.6839"
            className="group p-8 border border-border rounded-lg hover:border-foreground transition-colors"
          >
            <Phone className="w-8 h-8 mb-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            <h2 className="text-xl tracking-tight mb-2">Phone</h2>
            <p className="text-muted-foreground group-hover:text-foreground transition-colors">
              267.608.6839
            </p>
          </a>
        </div>

        <a
          href="https://behance.net/gracejonas7"
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-8 border border-border rounded-lg hover:border-foreground transition-colors"
        >
          <Globe className="w-8 h-8 mb-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          <h2 className="text-xl tracking-tight mb-2">Portfolio</h2>
          <p className="text-muted-foreground group-hover:text-foreground transition-colors">
            behance.net/gracejonas7
          </p>
        </a>
      </div>

      <div className="mt-24 p-12 bg-muted rounded-lg">
        <h2 className="text-3xl tracking-tight mb-6">Based in Philadelphia</h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Available for remote work and local collaborations. Open to full-time positions, freelance projects, and design consulting opportunities.
        </p>
      </div>
    </div>
  );
}
