"use client"

import { ArrowLeft, FileText, Sun, Moon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useTheme } from "next-themes"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { createUser } from "@/app/services/userService"

export default function CadastroAutarquia() {
  const { theme, setTheme } = useTheme()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      await createUser({
        username: nome,
        email: email,
        password: senha,
      })

      setMessage('Usuário criado com sucesso!')
      setNome('')
      setEmail('')
      setSenha('')
    } catch (error) {
      setMessage('Erro: ' + (error instanceof Error ? error.message : String(error)))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background py-4 sm:py-6 px-3 sm:px-4">
      {/* Header com Link Voltar e Toggle de Tema */}
      <div className="max-w-3xl mx-auto mb-4 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Link>
        
        {/* Botao de Troca de Tema */}
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Alternar tema</span>
        </Button>
      </div>

      {/* Card Principal */}
      <Card className="max-w-3xl mx-auto shadow-lg border-0 overflow-hidden">
        {/* Header com Gradiente */}
        <div className="bg-gradient-to-r from-header-start to-header-end px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="bg-primary-foreground/20 p-2 sm:p-3 rounded-lg">
              <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-primary-foreground">
                Cadastro de Autarquia
              </h1>
              <p className="text-primary-foreground/80 text-xs sm:text-sm">
                Preencha os dados da sua instituicao
              </p>
            </div>
          </div>
        </div>

        <CardContent className="p-4 sm:p-6">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Secao: Dados da Instituicao */}


            {/* Secao: Responsavel pelo Cadastro */}
            <div className="space-y-4">
              <h2 className="text-base sm:text-lg font-semibold text-foreground">
                Responsavel pelo Cadastro
              </h2>

              {/* Nome Completo e Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome-completo">
                    Nome Completo <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="nome-completo"
                    placeholder="João Silva"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="contato@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Senha */}
              <div className="space-y-2">
                <Label htmlFor="senha">
                  Senha <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="senha"
                  type="password"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Botao Criar Conta */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-base"
            >
              {loading ? 'Criando Conta...' : 'Criar Conta'}
            </Button>

            {/* Mensagem de feedback */}
            {message && (
              <p className={`text-center text-sm ${message.includes('sucesso') ? 'text-green-600' : 'text-red-600'}`}>
                {message}
              </p>
            )}

            {/* Texto de rodape */}
            <p className="text-center text-sm text-muted-foreground">
              Seu cadastro sera analisado pela equipe Sanecta
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
