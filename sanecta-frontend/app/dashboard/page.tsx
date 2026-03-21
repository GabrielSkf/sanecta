"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { getAuthToken, logout } from "@/app/services/authService"

interface AuthUser {
  username: string
  email: string
  message: string
}

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    const authUser = getAuthToken()
    if (!authUser) {
      if (isMounted) router.push("/")
      return
    }

    if (isMounted) {
      setUser(authUser)
      setLoading(false)
    }

    return () => {
      isMounted = false
    }
  }, [router])

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  if (loading) {
    return <div>Carregando...</div>
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Button onClick={handleLogout} variant="destructive">
            Sair
          </Button>
        </div>

        <div className="bg-card p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Bem-vindo, {user?.username}!</h2>
          <p className="text-muted-foreground">Email: {user?.email}</p>
        </div>
      </div>
    </div>
  )
}
