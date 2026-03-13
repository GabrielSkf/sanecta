'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from '@/components/ui/field';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
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
    </svg>
  );
}

function SanectaLogo() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-b from-sky-100 to-sky-50 shadow-sm">
        <svg
          viewBox="0 0 64 64"
          className="h-12 w-12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Water drop shape */}
          <path
            d="M32 4C32 4 12 28 12 40C12 52 21 60 32 60C43 60 52 52 52 40C52 28 32 4 32 4Z"
            fill="url(#dropGradient)"
          />
          {/* Handshake */}
          <g transform="translate(16, 28)">
            <path
              d="M4 8L10 4L16 8L22 4L28 8"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M4 14L10 10L16 14L22 10L28 14"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>
          <defs>
            <linearGradient
              id="dropGradient"
              x1="32"
              y1="4"
              x2="32"
              y2="60"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#38BDF8" />
              <stop offset="1" stopColor="#0284C7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span className="text-xl font-semibold text-sky-500">Sanecta</span>
    </div>
  );
}

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Login realizado com sucesso!', {
      description: 'Redirecionando para o dashboard...',
    });
  };

  const handleGoogleLogin = () => {
    toast.loading('Conectando com Google...', {
      description: (
        <span className="text-black/50 font-semibold">
          Aguarde enquanto redirecionamos você.
        </span>
      ),
    });
  };

  return (
    <TooltipProvider>
      <div className="flex min-h-screen items-center justify-center bg-muted/30 p-4 font-sans">
        <Card className="w-full max-w-md border-0 shadow-lg">
          <CardHeader className="flex flex-col items-center gap-4 pb-2 pt-8">
            <SanectaLogo />
            <div className="flex flex-col items-center gap-1 text-center">
              <CardTitle className="text-2xl font-bold tracking-tight">
                Welcome to Sanecta
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Sign in to continue
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="px-8">
            <form onSubmit={handleSubmit}>
              <FieldGroup>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className="h-11 w-full gap-3 text-base font-medium"
                      onClick={handleGoogleLogin}
                    >
                      <GoogleIcon className="h-5 w-5" />
                      Continue with Google
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Quick login with your Google account</p>
                  </TooltipContent>
                </Tooltip>

                <div className="flex items-center w-full">
                  <FieldSeparator className="flex-1 h-px" />
                  <span className="px-2 text-sm text-muted-foreground">OR</span>
                  <FieldSeparator className="flex-1 h-px" />
                </div>

                <Field>
                  <FieldLabel className="text-center text-sm font-medium">
                    Email
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupAddon align="inline-start">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                    </InputGroupAddon>
                    <InputGroupInput
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </InputGroup>
                </Field>

                <Field>
                  <FieldLabel className="text-center text-sm font-medium">
                    Password
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupAddon align="inline-start">
                      <Lock className="h-4 w-4 text-muted-foreground" />
                    </InputGroupAddon>
                    <InputGroupInput
                      type="password"
                      placeholder="********"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </InputGroup>
                </Field>

                <Button
                  type="submit"
                  className="h-11 w-full bg-slate-900 text-base font-medium text-slate-50 hover:bg-slate-800"
                >
                  Sign in
                </Button>
              </FieldGroup>
            </form>
          </CardContent>

          <Separator className="mx-8" />

          <CardFooter className="flex items-center justify-between px-8 py-4">
            <Button variant="link" className="h-auto p-0 text-sky-600" asChild>
              <Link href="/forgot-password">Forgot password?</Link>
            </Button>
            <div className="text-sm text-muted-foreground">
              Need an account?{' '}
              <Button
                variant="link"
                className="h-auto p-0 font-semibold text-foreground"
                asChild
              >
                <Link href="/signup">Sign up</Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </TooltipProvider>
  );
}
