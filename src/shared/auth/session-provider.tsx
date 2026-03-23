import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react"

export type SessionUser = {
  name: string
  email: string
  role: "Admin" | "Analyst"
}

type SessionContextValue = {
  user: SessionUser | null
  isAuthenticated: boolean
  signIn: (payload: { email: string; password: string }) => Promise<void>
  signOut: () => void
}

const SessionContext = createContext<SessionContextValue | null>(null)

const STORAGE_KEY = "vp-session"

function readStoredUser() {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) {
    return null
  }

  try {
    return JSON.parse(raw) as SessionUser
  } catch {
    return null
  }
}

type SessionProviderProps = {
  children: ReactNode
}

export function SessionProvider({ children }: SessionProviderProps) {
  const [user, setUser] = useState<SessionUser | null>(() => readStoredUser())

  const signIn = useCallback(async ({ email }: { email: string; password: string }) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 450)
    })

    const nextUser: SessionUser = {
      name: email.split("@")[0] ?? "Operator",
      email,
      role: "Admin"
    }

    setUser(nextUser)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser))
  }, [])

  const signOut = useCallback(() => {
    setUser(null)
    localStorage.removeItem(STORAGE_KEY)
  }, [])

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      signIn,
      signOut
    }),
    [user, signIn, signOut]
  )

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
}

export function useSession() {
  const context = useContext(SessionContext)

  if (!context) {
    throw new Error("useSession must be used within SessionProvider")
  }

  return context
}
