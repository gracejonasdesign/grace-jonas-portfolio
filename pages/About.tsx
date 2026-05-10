export function About() {
  const experiences = [
    {
      role: "Senior Brand Designer",
      company: "ParshipMeet Group",
      period: "Dec 2020 – Present",
      description:
        "Leading brand and product design across four social platforms (MeetMe, Tagged, Skout, Growlr). Creating in-app gamification systems, contest UI, live features, and marketing campaigns that drive measurable engagement and revenue.",
    },
    {
      role: "Exhibition & Graphic Designer",
      company: "Free Library of Philadelphia",
      period: "2020 – 2023",
      description:
        "Redesigned citywide map system across 54 locations. Led branded exhibition experiences including spatial planning, murals, and blueprints.",
    },
    {
      role: "Graphic Design Assistant≠≠≠`",
      company: "Center City District",
      period: "2018 – 2020",
      description:
        "Designed environmental branding, signage, and large-format banners shaping the visual identity of Philadelphia's parks and public spaces.",
    },
    {
      role: "Freelance Brand & Marketing Designer",
      company: "LiveCoinWatch",
      period: "Oct 2025 – Present",
      description: "Brand guidelines and product launch assets for a crypto data platform.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-12 py-24">
      <div className="mb-24">
        <h1 className="text-5xl md:text-6xl tracking-tight mb-8">
          Designing with purpose & impact
        </h1>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm Grace Jonas, a Senior Brand Designer at ParshipMeet Group with 5+ years of experience
            designing for social and dating apps including MeetMe, Tagged, Skout, and Growlr.
          </p>
          <p>
            I blend brand identity work with product and UX design — concepting visual identities,
            building in-app gamification systems, designing UI for contests and live features, and
            shipping marketing campaigns that drive measurable engagement and revenue.
          </p>
          <p>
            I hold a BA in Advertising: Art Direction from Temple University's Klein College and an AA
            in Mass Media from Community College of Philadelphia.
          </p>
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-3xl md:text-4xl tracking-tight mb-12">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.company + exp.period} className="border-l-2 border-border pl-6">
              <div className="mb-2">
                <h3 className="text-xl tracking-tight mb-1">{exp.role}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-muted-foreground">
                  <span>{exp.company}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl md:text-4xl tracking-tight mb-12">Skills</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg mb-4 tracking-wide">Design Programs</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Figma</li>
              <li>Adobe Creative Suite</li>
              <li>Illustrator</li>
              <li>Photoshop</li>
              <li>InDesign</li>
              <li>After Effects</li>
              <li>Premiere Pro</li>
              <li>Canva</li>
              <li>PowerPoint</li>
              <li>Generative AI</li>
              <li>Jira</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg mb-4 tracking-wide">Product & UX</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>User Flows</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>Component Libraries</li>
              <li>Mobile UI Design</li>
              <li>Design Systems</li>
              <li>Gamification</li>
              <li>Engagement Loops</li>
              <li>Sprint Planning</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg mb-4 tracking-wide">Brand & Visual</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Sales Decks</li>
              <li>Email Campaigns</li>
              <li>Infographics</li>
              <li>Motion Graphics</li>
              <li>Video Editing</li>
              <li>Presentation Templates</li>
              <li>Social Media</li>
              <li>Marketing Campaigns</li>
              <li>Website Design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
