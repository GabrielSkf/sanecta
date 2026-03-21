'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Mail, Lock, Sun, Moon } from 'lucide-react';
import { toast } from 'sonner';
import { useTheme } from 'next-themes';
import { authenticate, setAuthToken } from '@/app/services/authService';

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

interface User {
  username: string;
  email: string;
}

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
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-b from-primary/20 to-primary/10 shadow-sm">
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
              <stop stopColor="oklch(0.7 0.15 180)" />
              <stop offset="1" stopColor="oklch(0.55 0.18 200)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span className="text-xl font-semibold text-primary">Sanecta</span>
    </div>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const user = await authenticate({ email, password });
      setAuthToken(user);
      toast.success('Login realizado com sucesso!', {
        description: 'Redirecionando para o dashboard...',
      });
      router.push('/dashboard');
    } catch (error) {
      toast.error('Erro no login', {
        description: error instanceof Error ? error.message : 'Credenciais inválidas',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    toast.loading('Conectando com Google...', {
      description: (
        <span className="text-muted-foreground font-semibold">
          Aguarde enquanto redirecionamos voce.
        </span>
      ),
    });
  };

  const handleGetUsers = async () => {
    try {
      const response = await fetch('http://localhost:8080/users', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
        setMessage('Usuários carregados com sucesso!');
      } else {
        setMessage('Erro ao carregar usuários.');
      }
    } catch (error) {
      setMessage('Erro: ' + (error instanceof Error ? error.message : String(error)));
    }
  };

  return (
    <TooltipProvider>
      <div className="flex min-h-screen items-center justify-center bg-background p-4 font-sans">
        {/* Botao de Troca de Tema */}
        <div className="fixed top-4 right-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Alternar tema</span>
          </Button>
        </div>

        {/* Botão para GET Users */}
        <div className="fixed top-4 left-4">
          <Button onClick={handleGetUsers} variant="outline">
            GET
          </Button>
        </div>

        {/* Mensagem e Lista de Usuários */}
        {message && (
          <div className="fixed top-16 left-4 bg-white dark:bg-gray-800 p-4 rounded shadow max-w-sm">
            <p>{message}</p>
            {users.length > 0 && (
              <ul className="mt-2">
                {users.map((user: User, index: number) => (
                  <li key={index} className="text-sm">{user.username} - {user.email}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        <Card className="w-full max-w-md border-0 shadow-lg mx-4 sm:mx-0">
          <CardHeader className="flex flex-col items-center gap-3 sm:gap-4 pb-2 pt-6 sm:pt-8 px-4 sm:px-6">
            <SanectaLogo />
            <div className="flex flex-col items-center gap-1 text-center">
              <CardTitle className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                Bem-vindo ao Sanecta
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Faca login para continuar
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="px-4 sm:px-8">
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
                      Continuar com Google
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Login rapido com sua conta Google</p>
                  </TooltipContent>
                </Tooltip>

                <div className="flex items-center w-full">
                  <FieldSeparator className="flex-1 h-px" />
                  <span className="px-2 text-sm text-muted-foreground">OU</span>
                  <FieldSeparator className="flex-1 h-px" />
                </div>

                <Field>
                  <FieldLabel className="text-center text-sm font-medium">
                    E-mail
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupAddon align="inline-start">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                    </InputGroupAddon>
                    <InputGroupInput
                      type="email"
                      placeholder="voce@exemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </InputGroup>
                </Field>

                <Field>
                  <FieldLabel className="text-center text-sm font-medium">
                    Senha
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
                  className="h-11 w-full bg-primary text-base font-medium text-primary-foreground hover:bg-primary/90"
                  disabled={loading}
                >
                  {loading ? 'Entrando...' : 'Entrar'}
                </Button>
              </FieldGroup>
            </form>
          </CardContent>

          <Separator className="mx-4 sm:mx-8" />

          <CardFooter className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 px-4 sm:px-8 py-4">
            <Button variant="link" className="h-auto p-0 text-primary" asChild>
              <Link href="/forgot-password">Esqueceu a senha?</Link>
            </Button>
            <div className="text-sm text-muted-foreground">
              Precisa de uma conta?{' '}
              <Button
                variant="link"
                className="h-auto p-0 font-semibold text-foreground"
                asChild
              >
                <Link href="/cadastro">Cadastre-se</Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </TooltipProvider>
  );
}
