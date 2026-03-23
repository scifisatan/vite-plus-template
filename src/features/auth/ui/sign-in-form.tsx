import { useState, type FormEvent } from "react"
import { Link, useNavigate } from "react-router-dom"

import { useSession } from "@/shared/auth/index"
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label
} from "@/shared/ui/index"

export function SignInForm() {
  const navigate = useNavigate()
  const { isAuthenticated, signIn } = useSession()
  const [email, setEmail] = useState("operator@nebula.app")
  const [password, setPassword] = useState("demo-password")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!email || !password) {
      setError("Email and password are required.")
      return
    }

    setError(null)
    setIsLoading(true)
    try {
      await signIn({ email, password })
      void navigate("/dashboard")
    } catch {
      setError("Could not sign in. Try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isAuthenticated) {
    return (
      <Card className="w-full border-border/70 bg-card/85 backdrop-blur">
        <CardHeader>
          <CardTitle>Already signed in</CardTitle>
          <CardDescription>Your session is active. Open your workspace dashboard.</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button asChild className="w-full">
            <Link to="/dashboard">Go to dashboard</Link>
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card className="w-full border-border/70 bg-card/85 backdrop-blur">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>Use your team credentials to continue.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          {error ? <p className="text-sm text-destructive">{error}</p> : null}
          <Button className="w-full" disabled={isLoading} type="submit">
            {isLoading ? "Signing in..." : "Continue"}
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">
          Demo mode accepts any non-empty credentials.
        </p>
      </CardFooter>
    </Card>
  )
}
