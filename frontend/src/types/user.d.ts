export type User = {
  id: number
  email: string
}

// ------------
// API Request

export type LoginCredentials = {
  email: string
  password: string
}

export type RegisterCredentials = {
  email: string
  password: string
  passwordConfirm: string
}

// ------------
// API Response

export type CredentialsData = {
  token: string
  user: User
}

export type UserGetAllResponse = {
  users: User[]
}
