import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Max Tang. All rights reserved.</p>
        <nav className="flex items-center gap-6">
          <Link href="#about" className="hover:text-foreground">About</Link>
          <Link href="#experience" className="hover:text-foreground">Experience</Link>
          <Link href="#projects" className="hover:text-foreground">Projects</Link>
          <Link href="#contact" className="hover:text-foreground">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
