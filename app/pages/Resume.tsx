import { Download } from "lucide-react";

export function Resume() {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-12 py-24">
      <div className="flex items-start justify-between mb-16">
        <div>
          <h1 className="text-5xl md:text-6xl tracking-tight mb-4">Grace Jonas</h1>
          <p className="text-xl text-muted-foreground">Brand & Product Designer</p>
          <p className="text-muted-foreground">Philadelphia, PA</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
          <Download className="w-4 h-4" />
          Download PDF
        </button>
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl tracking-tight mb-6 pb-3 border-b border-border">Contact</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-muted-foreground">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Email</p>
              <a href="mailto:gracejonasdesign@gmail.com" className="hover:text-foreground transition-colors">
                gracejonasdesign@gmail.com
              </a>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Phone</p>
              <a href="tel:267.608.6839" className="hover:text-foreground transition-colors">
                267.608.6839
              </a>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Portfolio</p>
              <a
                href="https://behance.net/gracejonas7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                behance.net/gracejonas7
              </a>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl tracking-tight mb-6 pb-3 border-b border-border">Experience</h2>
          <div className="space-y-8">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                <div>
                  <h3 className="text-lg tracking-tight">Senior Brand Designer</h3>
                  <p className="text-muted-foreground">ParshipMeet Group</p>
                </div>
                <p className="text-sm text-muted-foreground">Dec 2020 – Present</p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                  <span>Lead brand and product design across four social platforms (MeetMe, Tagged, Skout, Growlr)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                  <span>Designed The Cookout (Nov 2025), driving 24% revenue lift on MeetMe, 43% on Skout, and 50% on Tagged</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                  <span>Created branding for SUS (Mar 2026), ParshipMeet's first original reality show with 21K+ views and 12% engagement</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                <div>
                  <h3 className="text-lg tracking-tight">Freelance Brand & Marketing Designer</h3>
                  <p className="text-muted-foreground">LiveCoinWatch</p>
                </div>
                <p className="text-sm text-muted-foreground">Oct 2025 – Present</p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                  <span>Brand guidelines and product launch assets for a crypto data platform</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                <div>
                  <h3 className="text-lg tracking-tight">Exhibition & Graphic Designer</h3>
                  <p className="text-muted-foreground">Free Library of Philadelphia</p>
                </div>
                <p className="text-sm text-muted-foreground">2020 – 2023</p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                  <span>Redesigned citywide map system across 54 locations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                  <span>Led branded exhibition experiences including spatial planning, murals, and blueprints</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                <div>
                  <h3 className="text-lg tracking-tight">Graphic Design Assistant</h3>
                  <p className="text-muted-foreground">Center City District</p>
                </div>
                <p className="text-sm text-muted-foreground">2018 – 2020</p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                  <span>Designed environmental branding, signage, and large-format banners for Philadelphia's parks and public spaces</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl tracking-tight mb-6 pb-3 border-b border-border">Education</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg tracking-tight">BA in Advertising: Art Direction</h3>
              <p className="text-muted-foreground">Temple University, Klein College</p>
            </div>
            <div>
              <h3 className="text-lg tracking-tight">AA in Mass Media</h3>
              <p className="text-muted-foreground">Community College of Philadelphia</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl tracking-tight mb-6 pb-3 border-b border-border">Skills</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg mb-3 tracking-tight">Design Programs</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Figma, Adobe Creative Suite (Illustrator, Photoshop, InDesign, Lightroom, After Effects, Premiere Pro), Canva, PowerPoint, Generative AI, Jira
              </p>
            </div>
            <div>
              <h3 className="text-lg mb-3 tracking-tight">Product & UX</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                User flows, wireframing, prototyping, component libraries, mobile UI design, in-app design systems, gamification, engagement loops, sprint planning, HTML/CSS
              </p>
            </div>
            <div>
              <h3 className="text-lg mb-3 tracking-tight">Brand & Visual Design</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sales decks, email campaigns, infographics, motion graphics, video editing, branded presentation templates, social media, marketing campaigns, website design
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
