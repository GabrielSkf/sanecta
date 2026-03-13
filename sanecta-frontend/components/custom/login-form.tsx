"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { SanectaLogo } from "@/components/custom/sanecta-logo"

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Card className="w-full max-w-md border-0 shadow-lg">
      <CardContent className="space-y-6 pt-8">
        {/* Logo e Header */}
        <div className="flex flex-col items-center space-y-4 text-center">
          <SanectaLogo />
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              Welcome to Sanecta
            </h1>
            <p className="text-sm text-muted-foreground">
              Sign in to continue
            </p>
          </div>
        </div>

        {/* Botão Google */}
        <Button
          variant="outline"
          className="w-full h-12 text-sm font-medium"
          type="button"
        >
          <GoogleIcon />
          Continue with Google
        </Button>

        {/* Divisor OR */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-4 text-muted-foreground">OR</span>
          </div>
        </div>

        {/* Formulário */}
        <form className="space-y-4">
          {/* Campo Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-center block">
              Email
            </Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <Mail className="size-4 text-muted-foreground" />
              </InputGroupAddon>
              <InputGroupInput
                id="email"
                type="email"
                placeholder="you@example.com"
              />
            </InputGroup>
          </div>

          {/* Campo Password */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-center block">
              Password
            </Label>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <Lock className="size-4 text-muted-foreground" />
              </InputGroupAddon>
              <InputGroupInput
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
              />
              <InputGroupAddon align="inline-end">
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="size-4" />
                  ) : (
                    <Eye className="size-4" />
                  )}
                  <span className="sr-only">
                    {showPassword ? "Esconder senha" : "Mostrar senha"}
                  </span>
                </button>
              </InputGroupAddon>
            </InputGroup>
          </div>

          {/* Botão Sign In */}
          <Button
            type="submit"
            className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white"
          >
            Sign in
          </Button>
        </form>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex flex-col gap-4 pb-8">
        <div className="flex w-full items-center justify-between text-sm">
          <Link
            href="/forgot-password"
            className="text-primary hover:underline"
          >
            Forgot password?
          </Link>
          <span className="text-muted-foreground">
            Need an account?{" "}
            <Link href="/signup" className="font-semibold text-foreground hover:underline">
              Sign up
            </Link>
          </span>
        </div>
      </CardFooter>
    </Card>
  )
}

function GoogleIcon() {
  return (
    <svg className="size-5" viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
      <path d="M1 1h22v22H1z" fill="none" />
    </svg>
  )
}
