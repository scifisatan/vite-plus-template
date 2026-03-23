import { Link, NavLink } from "react-router-dom"

import { useSession } from "@/shared/auth/index"
import { ThemeToggle } from "@/shared/theme/index"
import { Button } from "@/shared/ui/index"

const navItems = [
  { to: "/", label: "Landing" },
  { to: "/auth", label: "Auth" },
  { to: "/dashboard", label: "Dashboard" }
]

export function SiteHeader() {
  const { isAuthenticated } = useSession()

  return (
    <header className="sticky top-0 z-20 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link className="text-sm font-semibold tracking-wide" to="/">
          VP FSD Starter
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <Button asChild key={item.to} size="sm" variant="ghost">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }
              >
                {item.label}
              </NavLink>
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" variant={isAuthenticated ? "secondary" : "outline"}>
            <Link to={isAuthenticated ? "/dashboard" : "/auth"}>
              {isAuthenticated ? "Workspace" : "Sign in"}
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
