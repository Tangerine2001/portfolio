import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RotatingText } from "@/components/rotating-text";

export function Hero() {
  return (
    <section className="container flex flex-col items-center gap-8 py-20 text-center md:py-28">
      <Image src="/icon.svg" alt="Logo" width={80} height={80} className="rounded-md" />
      <div className="mx-auto max-w-2xl space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Hi, I&apos;m Max Tang</h1>
        <p className="text-lg text-muted-foreground">
          AI Product Engineer crafting fast, reliable, and accessible products.
          This portfolio showcases my work, experience, and ways to get in touch.
          <br className="hidden sm:block" />
          Most of my experience is in AWS and Terraform, building CI/CD pipelines with GitHub Actions.
        </p>
        <p className="text-sm text-muted-foreground">
          I build&nbsp;
          <span className="font-medium">
            <RotatingText
              phrases={[
                "AWS infrastructure",
                "Terraform modules",
                "GitHub Actions CI/CD",
                "reliable cloud pipelines",
              ]}
              typingSpeed={55}
              deletingSpeed={30}
              pauseMs={1200}
              ariaLabel="Rotating skills"
            />
          </span>
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Button asChild>
          <Link href="#projects">View Projects</Link>
        </Button>
        <Button asChild variant="outline">
          <a href="/Max Tang Resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
        </Button>
      </div>
    </section>
  );
}
