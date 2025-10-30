import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="container flex flex-col items-center gap-8 py-20 text-center md:py-28">
      <Image src="/icon.svg" alt="Logo" width={80} height={80} className="rounded-md" />
      <div className="mx-auto max-w-2xl space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Hi, I&apos;m Max Tang</h1>
        <p className="text-lg text-muted-foreground">
          Software engineer crafting delightful, fast, and accessible web experiences.
          This portfolio showcases my experience, projects, and ways to get in touch.
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
