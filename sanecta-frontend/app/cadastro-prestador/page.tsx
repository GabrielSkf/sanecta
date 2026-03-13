"use client"

import { ArrowLeft, Building2, Sun, Moon } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

const areasAtuacao = [
  { id: "tratamento-agua", label: "Tratamento de Agua" },
  { id: "tratamento-esgoto", label: "Tratamento de Esgoto" },
  { id: "infraestrutura-redes", label: "Infraestrutura de Redes" },
  { id: "manutencao-equipamentos", label: "Manutencao de Equipamentos" },
  { id: "consultoria-tecnica", label: "Consultoria Tecnica" },
  { id: "projetos-obras", label: "Projetos e Obras" },
  { id: "analises-laboratoriais", label: "Analises Laboratoriais" },
  { id: "automacao-controle", label: "Automacao e Controle" },
  { id: "gestao-residuos", label: "Gestao de Residuos" },
  { id: "outros", label: "Outros" },
]

export default function CadastroPrestador() {
  const { theme, setTheme } = useTheme()

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
              <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-primary-foreground">
                Cadastro de Prestador
              </h1>
              <p className="text-primary-foreground/80 text-xs sm:text-sm">
                Preencha os dados da sua empresa
              </p>
            </div>
          </div>
        </div>

        <CardContent className="p-4 sm:p-6">
          <form className="space-y-6">
            {/* Secao: Dados da Empresa */}
            <div className="space-y-4">
              <h2 className="text-base sm:text-lg font-semibold text-foreground">
                Dados da Empresa
              </h2>

              {/* Nome da Empresa */}
              <div className="space-y-2">
                <Label htmlFor="nome-empresa">
                  Nome da Empresa <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="nome-empresa"
                  placeholder="Ex: Saneamento Tech Ltda"
                />
              </div>

              {/* CNPJ e Anos de Experiencia */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cnpj">
                    CNPJ <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="cnpj"
                    placeholder="00.000.000/0000-00"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="anos-experiencia">
                    Anos de Experiencia <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="anos-experiencia"
                    type="number"
                    placeholder="5"
                    min="0"
                  />
                </div>
              </div>

              {/* Cidade e Estado */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cidade">
                    Cidade <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="cidade"
                    placeholder="Sao Paulo"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="estado">
                    Estado <span className="text-destructive">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger id="estado">
                      <SelectValue placeholder="UF" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AC">AC</SelectItem>
                      <SelectItem value="AL">AL</SelectItem>
                      <SelectItem value="AP">AP</SelectItem>
                      <SelectItem value="AM">AM</SelectItem>
                      <SelectItem value="BA">BA</SelectItem>
                      <SelectItem value="CE">CE</SelectItem>
                      <SelectItem value="DF">DF</SelectItem>
                      <SelectItem value="ES">ES</SelectItem>
                      <SelectItem value="GO">GO</SelectItem>
                      <SelectItem value="MA">MA</SelectItem>
                      <SelectItem value="MT">MT</SelectItem>
                      <SelectItem value="MS">MS</SelectItem>
                      <SelectItem value="MG">MG</SelectItem>
                      <SelectItem value="PA">PA</SelectItem>
                      <SelectItem value="PB">PB</SelectItem>
                      <SelectItem value="PR">PR</SelectItem>
                      <SelectItem value="PE">PE</SelectItem>
                      <SelectItem value="PI">PI</SelectItem>
                      <SelectItem value="RJ">RJ</SelectItem>
                      <SelectItem value="RN">RN</SelectItem>
                      <SelectItem value="RS">RS</SelectItem>
                      <SelectItem value="RO">RO</SelectItem>
                      <SelectItem value="RR">RR</SelectItem>
                      <SelectItem value="SC">SC</SelectItem>
                      <SelectItem value="SP">SP</SelectItem>
                      <SelectItem value="SE">SE</SelectItem>
                      <SelectItem value="TO">TO</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <Separator />

            {/* Secao: Areas de Atuacao */}
            <div className="space-y-4">
              <h2 className="text-base sm:text-lg font-semibold text-foreground">
                Areas de Atuacao <span className="text-destructive">*</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {areasAtuacao.map((area) => (
                  <div key={area.id} className="flex items-center space-x-2">
                    <Checkbox id={area.id} />
                    <Label 
                      htmlFor={area.id} 
                      className="text-sm font-normal text-foreground cursor-pointer"
                    >
                      {area.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Secao: Qualificacoes */}
            <div className="space-y-4">
              <h2 className="text-base sm:text-lg font-semibold text-foreground">
                Qualificacoes
              </h2>

              {/* Certificacoes */}
              <div className="space-y-2">
                <Label htmlFor="certificacoes">
                  Certificacoes (separadas por virgula)
                </Label>
                <Input
                  id="certificacoes"
                  placeholder="Ex: ISO 9001, ISO 14001, ABNT NBR"
                />
              </div>

              {/* Casos de Sucesso */}
              <div className="space-y-2">
                <Label htmlFor="casos-sucesso">Casos de Sucesso</Label>
                <Textarea
                  id="casos-sucesso"
                  placeholder="Descreva alguns projetos importantes que sua empresa realizou..."
                  className="min-h-[100px] resize-y"
                />
              </div>
            </div>

            <Separator />

            {/* Secao: Responsavel pelo Cadastro */}
            <div className="space-y-4">
              <h2 className="text-base sm:text-lg font-semibold text-foreground">
                Responsavel pelo Cadastro
              </h2>

              {/* Nome Completo e Cargo */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome-completo">
                    Nome Completo <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="nome-completo"
                    placeholder="Joao Silva"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cargo">
                    Cargo <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="cargo"
                    placeholder="Ex: Diretor Comercial"
                  />
                </div>
              </div>

              {/* E-mail e Telefone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">
                    E-mail <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="contato@empresa.com.br"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone">
                    Telefone <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="telefone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>
            </div>

            {/* Botao Criar Conta */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-base"
            >
              Criar Conta
            </Button>

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
