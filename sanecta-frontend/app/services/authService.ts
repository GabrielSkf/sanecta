interface LoginRequest {
  email: string
  password: string
}

interface LoginResponse {
  username: string
  email: string
  message: string
}

export async function authenticate(credentials: LoginRequest): Promise<LoginResponse> {
  const response = await fetch('http://localhost:8080/users/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(error || 'Autenticação falhou')
  }

  return response.json()
}

export function setAuthToken(user: LoginResponse) {
  localStorage.setItem('user', JSON.stringify(user))
}

export function getAuthToken() {
  if (typeof window === 'undefined') return null
  const user = localStorage.getItem('user')
  return user ? JSON.parse(user) : null
}

export function logout() {
  localStorage.removeItem('user')
}
