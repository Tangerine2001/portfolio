import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type ExperienceItem = {
  title: string;
  company?: string;
  location?: string;
  start: string; // e.g. "Jan 2023"
  end: string;   // e.g. "Present" or "Dec 2024"
  description?: string;
  bullets?: string[];
  tech?: string[];
};

export function Timeline({ items, className }: { items: ExperienceItem[]; className?: string }) {
  return (
    <ol className={cn("relative border-l border-border pl-6", className)}>
      {items.map((item, idx) => (
        <li key={idx} className="mb-10 ml-4">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary" />
          <div className="flex flex-wrap items-baseline gap-x-2">
            <h3 className="text-lg font-semibold leading-none">{item.title}</h3>
            {item.company && (
              <span className="text-sm text-muted-foreground">@ {item.company}</span>
            )}
          </div>
          {(item.start || item.end) && (
            <time className="mt-1 block text-xs text-muted-foreground">
              {item.start} — {item.end}
              {item.location ? ` • ${item.location}` : ""}
            </time>
          )}
          {item.description && (
            <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
          )}
          {item.bullets && item.bullets.length > 0 && (
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {item.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
          {item.tech && item.tech.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tech.map((t, i) => (
                <Badge key={i} className="bg-accent text-accent-foreground">{t}</Badge>
              ))}
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
