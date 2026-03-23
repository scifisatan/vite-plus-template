import { SignInForm } from "@/features/auth"

export function AuthPage() {
  return (
    <section className="mx-auto grid w-full max-w-md gap-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Welcome back</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Authenticate to access your protected workspace dashboard.
        </p>
      </div>
      <SignInForm />
    </section>
  )
}
