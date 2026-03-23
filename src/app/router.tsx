import { createBrowserRouter } from "react-router-dom"

import { RequireAuth } from "@/features/auth/index"
import { AuthPage } from "@/pages/auth"
import { DashboardPage } from "@/pages/dashboard"
import { LandingPage } from "@/pages/landing"
import { NotFoundPage } from "@/pages/not-found"
import { AppShell } from "@/widgets/app-shell/index"

export const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/auth",
        element: <AuthPage />
      },
      {
        path: "/dashboard",
        element: (
          <RequireAuth>
            <DashboardPage />
          </RequireAuth>
        )
      },
      {
        path: "*",
        element: <NotFoundPage />
      }
    ]
  }
])
