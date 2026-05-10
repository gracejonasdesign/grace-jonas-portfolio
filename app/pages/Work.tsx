export function Work() {
  const projects = [
    {
      title: "The Cookout",
      client: "ParshipMeet Group",
      date: "November 2025",
      role: "Brand & Product Design",
      description:
        "ParshipMeet's first cross-community content event. Designed in-app contest UI and marketing assets that drove significant revenue increases across all platforms.",
      impact: [
        "24% revenue lift on MeetMe week-over-week",
        "43% revenue lift on Skout week-over-week",
        "50% revenue lift on Tagged week-over-week",
      ],
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80",
    },
    {
      title: "SUS Reality Show",
      client: "ParshipMeet Group",
      date: "March 2026",
      role: "Brand Design & Marketing",
      description:
        "Branding for ParshipMeet's first original reality show featuring 16 live creators. Designed show identity, promotional materials, and social media assets.",
      impact: [
        "21K+ views on Instagram recap within 24 hours",
        "12% engagement rate on launch content",
        "Established visual system for future original content",
      ],
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80",
    },
    {
      title: "Free Library Map System",
      client: "Free Library of Philadelphia",
      date: "2020 – 2023",
      role: "Exhibition & Graphic Design",
      description:
        "Complete redesign of the citywide wayfinding and map system across 54 library locations. Created a cohesive visual language for spatial navigation.",
      impact: [
        "Improved visitor navigation across all locations",
        "Unified brand experience citywide",
        "Accessible design standards implementation",
      ],
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80",
    },
    {
      title: "CCD Environmental Branding",
      client: "Center City District",
      date: "2018 – 2020",
      role: "Graphic Design",
      description:
        "Designed environmental branding, signage systems, and large-format banners that shaped the visual identity of Philadelphia's public parks and spaces.",
      impact: [
        "Enhanced public space brand identity",
        "Large-scale installation design",
        "Seasonal campaign development",
      ],
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80",
    },
    {
      title: "LiveCoinWatch Brand Guidelines",
      client: "LiveCoinWatch",
      date: "October 2025 – Present",
      role: "Brand & Marketing Design",
      description:
        "Comprehensive brand guidelines and product launch assets for a leading crypto data platform. Established visual identity and design system.",
      impact: [
        "Complete brand guidelines documentation",
        "Product launch asset library",
        "Scalable design system foundation",
      ],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
      <div className="mb-24">
        <h1 className="text-5xl md:text-6xl tracking-tight mb-6">Selected Work</h1>
        <p className="text-xl text-muted-foreground max-w-3xl tracking-wide">
          A collection of brand, product, and UX design projects spanning social platforms, public
          institutions, and digital products.
        </p>
      </div>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <div key={project.title} className="grid lg:grid-cols-2 gap-12 items-start">
            <div className={`order-2 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="lg:sticky lg:top-32">
                <div className="mb-6">
                  <div className="flex items-baseline gap-4 mb-2">
                    <h2 className="text-3xl md:text-4xl tracking-tight">{project.title}</h2>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-muted-foreground">
                    <span>{project.client}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="text-sm">{project.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{project.role}</p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {project.description}
                </p>

                <div>
                  <h3 className="text-sm tracking-widest uppercase mb-4 text-muted-foreground">
                    Impact
                  </h3>
                  <ul className="space-y-2">
                    {project.impact.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className={`order-1 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
