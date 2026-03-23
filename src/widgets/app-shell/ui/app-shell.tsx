import { Outlet } from "react-router-dom"

import { SiteHeader } from "@/widgets/site-header"

export function AppShell() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,oklch(0.96_0.03_220),transparent_40%),radial-gradient(circle_at_bottom_right,oklch(0.95_0.04_145),transparent_35%)] dark:bg-[radial-gradient(circle_at_top_left,oklch(0.3_0.04_240),transparent_40%),radial-gradient(circle_at_bottom_right,oklch(0.3_0.04_150),transparent_35%)]">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  )
}
