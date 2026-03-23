import type { ReactNode } from "react"

import { Navigate, useLocation } from "react-router-dom"

import { useSession } from "@/shared/auth/index"

type RequireAuthProps = {
  children: ReactNode
}

export function RequireAuth({ children }: RequireAuthProps) {
  const { isAuthenticated } = useSession()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/auth" state={{ from: location.pathname }} replace />
  }

  return children
}
