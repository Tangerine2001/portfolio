import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type Project = {
  title: string;
  description: string;
  tech?: string[];
  href?: string;
  repo?: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      {project.tech && project.tech.length > 0 && (
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <Badge key={i} className="bg-accent text-accent-foreground">{t}</Badge>
            ))}
          </div>
        </CardContent>
      )}
      {(project.href || project.repo) && (
        <CardFooter className="gap-2">
          {project.href && (
            <Button asChild size="sm">
              <a href={project.href} target="_blank" rel="noreferrer">Live</a>
            </Button>
          )}
          {project.repo && (
            <Button asChild size="sm" variant="outline">
              <a href={project.repo} target="_blank" rel="noreferrer">Code</a>
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
