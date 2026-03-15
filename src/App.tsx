import { useState } from "react"
import { toast } from "sonner"

import { ThemeToggle } from "@/components/theme/theme-toggle"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Toaster } from "@/components/ui/sonner"
import { Spinner } from "@/components/ui/spinner"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

const teamRows = [
  { name: "Design System", owner: "Ari", status: "Healthy", updated: "2m ago" },
  { name: "Marketing Site", owner: "Lane", status: "Review", updated: "14m ago" },
  { name: "Dashboard", owner: "Kai", status: "Blocked", updated: "1h ago" }
]

function App() {
  const [notifications, setNotifications] = useState(true)
  const [compactMode, setCompactMode] = useState(false)
  const [quality, setQuality] = useState([72])

  return (
    <main className="relative min-h-screen overflow-hidden bg-linear-to-b from-background via-background to-muted/40 px-4 py-6 md:px-8 md:py-10">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-16 -left-16 h-72 w-72 rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-chart-2/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-60 w-60 rounded-full bg-chart-4/10 blur-3xl" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <Card className="border border-border/60 bg-card/80 backdrop-blur">
          <CardHeader>
            <div className="flex flex-wrap items-center gap-2">
              <Badge>Vite+</Badge>
              <Badge variant="secondary">React 19</Badge>
              <Badge variant="outline">Tailwind v4</Badge>
              <Badge variant="outline">shadcn/ui</Badge>
            </div>
            <CardAction>
              <ThemeToggle />
            </CardAction>
            <CardTitle className="text-2xl md:text-3xl">
              Welcome to your component kitchen sink
            </CardTitle>
            <CardDescription>
              A complete playground for your design system primitives with realistic layout,
              interactions, and responsive behavior.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center gap-2">
            <Button>Get Started</Button>
            <Button variant="secondary">View Docs</Button>
            <Button variant="outline">Generate Component</Button>
            <Button variant="ghost">Open Changelog</Button>
            <Button
              variant="outline"
              onClick={() =>
                toast.success("Kitchen sink is ready", {
                  description: "All core components are mounted and interactive."
                })
              }
            >
              Show Toast
            </Button>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="border border-border/60 bg-card/85 backdrop-blur">
            <CardHeader>
              <CardTitle>Inputs and Controls</CardTitle>
              <CardDescription>
                Core form controls, settings toggles, and live values.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="project-name">Project Name</Label>
                  <Input id="project-name" placeholder="Nebula Admin" />
                </div>
                <div className="space-y-2">
                  <Label>Environment</Label>
                  <Select defaultValue="staging">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose an environment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Targets</SelectLabel>
                        <SelectItem value="local">Local</SelectItem>
                        <SelectItem value="staging">Staging</SelectItem>
                        <SelectItem value="production">Production</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="release-note">Release Note</Label>
                <Textarea
                  id="release-note"
                  placeholder="Summarize what changed in this release..."
                />
              </div>

              <Separator />

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-border/70 p-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notifications">Notifications</Label>
                    <Switch
                      id="notifications"
                      checked={notifications}
                      onCheckedChange={setNotifications}
                    />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Send alerts when build status changes.
                  </p>
                </div>

                <div className="rounded-lg border border-border/70 p-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="compact-mode">Compact Mode</Label>
                    <Switch
                      id="compact-mode"
                      checked={compactMode}
                      onCheckedChange={setCompactMode}
                    />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">Fit more metrics on screen.</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2 rounded-lg border border-border/70 p-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="quality">Render Quality</Label>
                    <span className="text-sm text-muted-foreground">{quality[0]}%</span>
                  </div>
                  <Slider
                    id="quality"
                    value={quality}
                    onValueChange={setQuality}
                    max={100}
                    step={1}
                  />
                  <Progress value={quality[0]} />
                </div>
                <div className="space-y-2 rounded-lg border border-border/70 p-3">
                  <Label className="inline-flex items-center gap-2">
                    <Checkbox defaultChecked />
                    Include migration checks
                  </Label>
                  <Label className="inline-flex items-center gap-2">
                    <Checkbox />
                    Enable zero-downtime rollout
                  </Label>
                  <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <Spinner className="size-4" />
                    Background sync is running
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border/60 bg-card/85 backdrop-blur">
            <CardHeader>
              <CardTitle>Navigation and FAQ</CardTitle>
              <CardDescription>Tabs and accordions in a compact right rail.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-3 pt-3">
                  <p className="text-sm text-muted-foreground">
                    This starter ships with opinionated tokens, components, and quality tooling.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Ready</Badge>
                    <Badge variant="outline">Type-safe</Badge>
                    <Badge variant="outline">Accessible</Badge>
                  </div>
                </TabsContent>
                <TabsContent value="activity" className="pt-3 text-sm text-muted-foreground">
                  8 components updated, 12 lint warnings auto-fixed, and 3 pull requests merged.
                </TabsContent>
                <TabsContent value="security" className="pt-3 text-sm text-muted-foreground">
                  SSO is enabled, audit logs are retained for 90 days, and dependency checks pass.
                </TabsContent>
              </Tabs>

              <Separator className="my-4" />

              <div className="space-y-2 rounded-lg border border-border/70 p-3">
                <p className="text-sm font-medium">Dialogs and Toasts</p>
                <p className="text-sm text-muted-foreground">
                  Demo feedback patterns with Sonner and Alert Dialog.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() =>
                      toast.info("Deployment started", {
                        description: "Build pipeline is now running in the background."
                      })
                    }
                  >
                    Toast Info
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" size="sm">
                        Open Alert Dialog
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete production environment?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. It will remove all production deploy
                          metadata and linked secrets.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction variant="destructive">Confirm Delete</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>

              <Accordion type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I add new UI components?</AccordionTrigger>
                  <AccordionContent>
                    Use the shadcn CLI through Vite+ with vp dlx and add components into
                    src/components/ui.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Where is linting configured?</AccordionTrigger>
                  <AccordionContent>
                    Linting and formatting are configured in vite.config.ts under lint and fmt keys.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can this page be used for QA snapshots?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It is designed as a visual verification surface for theme, spacing, and
                    interaction states.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <Card className="border border-border/60 bg-card/85 backdrop-blur">
          <CardHeader>
            <CardTitle>Team and Data Table</CardTitle>
            <CardDescription>Avatar groups and a compact status table.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <AvatarGroup>
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/80?img=12" alt="Ari" />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/80?img=32" alt="Lane" />
                <AvatarFallback>LN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/80?img=47" alt="Kai" />
                <AvatarFallback>KY</AvatarFallback>
              </Avatar>
              <AvatarGroupCount>+4</AvatarGroupCount>
            </AvatarGroup>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project</TableHead>
                  <TableHead>Owner</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Updated</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {teamRows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell className="font-medium">{row.name}</TableCell>
                    <TableCell>{row.owner}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          row.status === "Healthy"
                            ? "secondary"
                            : row.status === "Review"
                              ? "outline"
                              : "destructive"
                        }
                      >
                        {row.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{row.updated}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="justify-between">
            <span className="text-sm text-muted-foreground">Component kitchen sink ready</span>
            <Button variant="outline" size="sm">
              Export Snapshot
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Toaster richColors closeButton position="top-right" />
    </main>
  )
}

export default App
