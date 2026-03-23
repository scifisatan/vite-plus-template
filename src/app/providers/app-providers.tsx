import type { ReactNode } from "react"

import { QueryClientProvider } from "@tanstack/react-query"

import { queryClient } from "@/shared/api/query-client"
import { SessionProvider } from "@/shared/auth/index"
import { ThemeProvider } from "@/shared/theme/index"
import { TooltipProvider } from "@/shared/ui/tooltip"

type AppProvidersProps = {
  children: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <TooltipProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SessionProvider>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </SessionProvider>
      </ThemeProvider>
    </TooltipProvider>
  )
}
