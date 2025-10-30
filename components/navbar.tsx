"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/icon.svg" alt="Logo" width={28} height={28} />
            <span className="hidden text-sm font-semibold sm:inline">Max Tang</span>
          </Link>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="#about" className="text-muted-foreground transition-colors hover:text-foreground">About</Link>
          <Link href="#experience" className="text-muted-foreground transition-colors hover:text-foreground">Experience</Link>
          <Link href="#projects" className="text-muted-foreground transition-colors hover:text-foreground">Projects</Link>
          <Link href="#contact" className="text-muted-foreground transition-colors hover:text-foreground">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm">
            <a href="/Max Tang Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
