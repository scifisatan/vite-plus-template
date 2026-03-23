import { Link } from "react-router-dom"

import { useSession } from "@/shared/auth/index"
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator
} from "@/shared/ui/index"

const metrics = [
  { label: "Active projects", value: "12" },
  { label: "Team members", value: "8" },
  { label: "Pending reviews", value: "5" }
]

export function DashboardPage() {
  const { user, signOut } = useSession()

  return (
    <section className="space-y-6">
      <Card className="border-border/60 bg-card/80 backdrop-blur">
        <CardHeader>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <CardTitle className="text-2xl">Dashboard</CardTitle>
              <CardDescription>
                {user ? `Signed in as ${user.name} (${user.email})` : "No active user"}
              </CardDescription>
            </div>
            <Badge>{user?.role ?? "Guest"}</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-border/70 bg-background/50 p-4"
              >
                <p className="text-xs tracking-wide text-muted-foreground uppercase">
                  {metric.label}
                </p>
                <p className="mt-2 text-2xl font-semibold">{metric.value}</p>
              </div>
            ))}
          </div>

          <Separator />

          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <Link to="/">Back to landing</Link>
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                signOut()
              }}
              asChild
            >
              <Link to="/auth">Sign out</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
