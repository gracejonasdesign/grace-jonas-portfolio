import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export function Home() {
  const featuredWork = [
    {
      title: "The Cookout",
      client: "ParshipMeet Group",
      year: "2025",
      description: "Cross-community content event driving 24-50% revenue lift across platforms",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    },
    {
      title: "SUS Reality Show",
      client: "ParshipMeet Group",
      year: "2026",
      description: "Original reality show branding with 21K+ views and 12% engagement",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    },
    {
      title: "Free Library Map System",
      client: "Free Library of Philadelphia",
      year: "2020-2023",
      description: "Citywide wayfinding redesign across 54 locations",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
    },
  ];

  return (
    <div className="w-full">
      <section className="min-h-[calc(100vh-5rem)] flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 w-full">
          <div className="max-w-5xl">
            <h1
              className="text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] mb-8"
              style={{ letterSpacing: '-0.02em' }}
            >
              Building consumer experiences for{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, var(--gradient-pink), var(--gradient-green))",
                }}
              >
                dating, social & lifestyle
              </span>{" "}
              platforms
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 tracking-wide">
              Brand & Product Designer based in Philadelphia with 5+ years designing engagement-driven experiences
            </p>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-lg tracking-wide hover:gap-4 transition-all"
            >
              View Selected Work
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <h2 className="text-4xl md:text-5xl tracking-tight mb-16">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWork.map((project) => (
            <Link
              key={project.title}
              to="/work"
              className="group"
            >
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline gap-3">
                  <h3 className="text-xl tracking-tight">{project.title}</h3>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
                <p className="text-sm text-muted-foreground tracking-wide">{project.client}</p>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
