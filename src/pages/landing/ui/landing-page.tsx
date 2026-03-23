import { Link } from "react-router-dom"

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/shared/ui/index"

const highlights = [
  {
    title: "Composable Architecture",
    description: "Clear boundaries across app, pages, widgets, features, entities, and shared."
  },
  {
    title: "Fast Delivery",
    description:
      "Route-first slices let teams ship pages quickly and extract shared pieces only when needed."
  },
  {
    title: "Scalable by Design",
    description: "Public APIs and import rules keep growth predictable as the codebase expands."
  }
]

export function LandingPage() {
  return (
    <section className="space-y-8">
      <div className="rounded-2xl border border-border/60 bg-card/75 p-8 shadow-sm backdrop-blur sm:p-10">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <Badge variant="secondary">Feature-Sliced Design</Badge>
          <Badge variant="outline">Vite+</Badge>
          <Badge variant="outline">React 19</Badge>
        </div>

        <h1 className="max-w-3xl text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
          Ship a clean web app structure from day one.
        </h1>

        <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          This starter includes a focused landing page, an auth flow, and a protected dashboard,
          organized using Feature-Sliced Design conventions.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/auth">Start with auth</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/dashboard">Open dashboard</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <Card key={item.title} className="border-border/60 bg-card/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-lg">{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Ready for customization.
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
