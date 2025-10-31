import {Hero} from "@/components/hero";
import {Timeline, type ExperienceItem} from "@/components/timeline";
import {ProjectCard, type Project} from "@/components/project-card";

export default function HomePage() {
    const experience: ExperienceItem[] = [
        {
            title: "Software Engineer I",
            company: "GEICO",
            location: "Atlanta, GA",
            start: "Aug 2024",
            end: "Present",
            description:
                "Supporting enterprise network observability and modernizing internal engineering tooling for improved reliability and developer productivity.",
            bullets: [
                "Diagnosed on-prem connectivity issues using iperf and implemented metric-based alerting",
                "Deployed and maintained internal observability tooling on production servers for network engineering teams",
                "Championed adoption of modern DevOps practices including Docker containerization and deployment workflows",
                "Provisioned and deployed PostgreSQL and Redis in production to support Flask-based services",
            ],
            tech: ["Python", "Flask", "PostgreSQL", "Redis", "Docker", "Linux"],
        },
        {
            title: "Software Engineer Intern",
            company: "Deloitte US",
            location: "Dallas, TX",
            start: "May 2023",
            end: "Aug 2023",
            description:
                "Developed cloud-native data processing and search solutions for healthcare clients, improving reliability, performance, and deployment workflows.",
            bullets: [
                "Built a PoC for OpenSearch to optimize medical data indexing and embeddings",
                "Restructured GitLab CI pipelines to enable seamless Docker deployments on Amazon ECS",
                "Improved data ingestion pipeline performance by ~40% using TDD practices",
                "Led adoption of automated testing frameworks, improving reliability across two major systems",
            ],
            tech: ["AWS", "OpenSearch", "Docker", "GitLab CI", "Python", "TDD"],
        },
        {
            title: "Software Engineer Intern",
            company: "Principal Financial Group",
            location: "Des Moines, IA",
            start: "May 2022",
            end: "Aug 2022",
            description:
                "Built scalable cloud infrastructure and CI/CD pipelines to accelerate delivery and enhance reliability for internal applications.",
            bullets: [
                "Implemented CI/CD pipelines with Terraform and GitHub Actions, increasing service uptime by ~20%",
                "Enhanced observability for 100+ applications using AWS services and Dynatrace",
                "Improved infrastructure reliability and security in AWS by ~10%",
                "Migrated 3 on-prem applications to cloud environments using IaC",
            ],
            tech: ["AWS", "Terraform", "GitHub Actions", "Dynatrace", "CI/CD"],
        },
        {
            title: "Software Engineer Intern",
            company: "ADVA Optical Networking",
            location: "Atlanta, GA",
            start: "Dec 2021",
            end: "May 2022",
            description:
                "Automated internal processes and supported machine learning model reliability to improve product performance.",
            bullets: [
                "Optimized staging and deployment workflows for business-critical projects",
                "Built internal tools to visualize and monitor ML model performance",
                "Developed automated Python scripts increasing product uptime by ~5%",
            ],
            tech: ["Python", "Bash", "Linux", "Automation"],
        },
    ];


    const projects: Project[] = [
        {
            title: "Helios Analytics Platform",
            description: "Full-stack analytics platform built as a founding engineer. Designed and deployed scalable cloud architecture, automated CI/CD, and refactored service layers for significant performance and deployment gains.",
            tech: ["Python", "FastAPI", "Next.js", "AWS ECS", "RDS", "Terraform", "GitHub Actions", "PostgreSQL"],
        },
    ];

    return (
        <div>
            <Hero/>

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
                <Timeline items={experience}/>
            </section>

            <section id="projects" className="container space-y-8 py-16">
                <h2 className="text-3xl font-semibold tracking-tight">Projects</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((p, i) => (
                        <ProjectCard key={i} project={p}/>
                    ))}
                </div>
            </section>

            <section id="contact" className="container space-y-6 py-16">
                <h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
                <p className="text-muted-foreground">Interested in working together? Reach out anytime.</p>
                <div className="flex flex-wrap gap-3">
                    <a className="underline-offset-4 hover:underline" href="mailto:max@example.com">max@example.com</a>
                    <span className="text-muted-foreground">•</span>
                    <a className="underline-offset-4 hover:underline" href="https://www.linkedin.com/in/your-handle"
                       target="_blank" rel="noreferrer">LinkedIn</a>
                    <span className="text-muted-foreground">•</span>
                    <a className="underline-offset-4 hover:underline" href="https://github.com/your-username"
                       target="_blank" rel="noreferrer">GitHub</a>
                </div>
            </section>
        </div>
    );
}
