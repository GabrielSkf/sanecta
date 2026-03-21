interface CreateUserRequest {
  username: string
  email: string
  password: string
}

interface CreateUserResponse {
  id?: number
  username: string
  email: string
}

export async function createUser(userData: CreateUserRequest): Promise<CreateUserResponse> {
  const response = await fetch('http://localhost:8080/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })

  if (!response.ok) {
    throw new Error('Erro ao criar usuário')
  }

  return response.json()
}
