import { Hero } from "@/components/hero";
import { Timeline, type ExperienceItem } from "@/components/timeline";
import { ProjectCard, type Project } from "@/components/project-card";

export default function HomePage() {
  const experience: ExperienceItem[] = [
    {
      title: "Software Engineer",
      company: "Your Company",
      location: "Remote",
      start: "Jan 2024",
      end: "Present",
      description:
        "Building performant web apps with React, Next.js, and TypeScript. Collaborating with design and product to deliver features end-to-end.",
      bullets: [
        "Led migration to Next.js App Router and improved Lighthouse scores by 25%",
        "Built internal component library with Tailwind and shadcn patterns",
      ],
      tech: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    },
    {
      title: "Frontend Developer",
      company: "Another Org",
      location: "San Francisco, CA",
      start: "Sep 2022",
      end: "Dec 2023",
      bullets: [
        "Implemented accessible UI patterns and testing with Playwright",
        "Owned project scaffolding and DX improvements",
      ],
      tech: ["React", "Vitest", "Playwright"],
    },
  ];

  const projects: Project[] = [
    {
      title: "Personal Portfolio",
      description: "This website — built with Next.js 14, Tailwind CSS, and shadcn‑style UI.",
      tech: ["Next.js", "Tailwind", "TypeScript"],
      repo: "https://github.com/your-username/portfolio",
    },
    {
      title: "Timeline Component",
      description: "Accessible, responsive experience timeline component.",
      tech: ["React", "Tailwind"],
    },
  ];

  return (
    <div>
      <Hero />

      <section id="about" className="container space-y-4 py-16">
        <h2 className="text-3xl font-semibold tracking-tight">About</h2>
        <div className="container-prose max-w-3xl space-y-4">
          <p>
            I’m a software engineer focused on building high‑quality products across the
            web stack. I enjoy clean design systems, great developer experience, and shipping
            features that feel fast and polished.
          </p>
        </div>
      </section>

      <section id="experience" className="container space-y-8 py-16">
        <h2 className="text-3xl font-semibold tracking-tight">Experience</h2>
        <Timeline items={experience} />
      </section>

      <section id="projects" className="container space-y-8 py-16">
        <h2 className="text-3xl font-semibold tracking-tight">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </section>

      <section id="contact" className="container space-y-6 py-16">
        <h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
        <p className="text-muted-foreground">Interested in working together? Reach out anytime.</p>
        <div className="flex flex-wrap gap-3">
          <a className="underline-offset-4 hover:underline" href="mailto:max@example.com">max@example.com</a>
          <span className="text-muted-foreground">•</span>
          <a className="underline-offset-4 hover:underline" href="https://www.linkedin.com/in/your-handle" target="_blank" rel="noreferrer">LinkedIn</a>
          <span className="text-muted-foreground">•</span>
          <a className="underline-offset-4 hover:underline" href="https://github.com/your-username" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </section>
    </div>
  );
}
