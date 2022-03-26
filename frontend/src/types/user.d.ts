export type User = {
  id: number;
  email: string;
};

export type UserGetAllResponse = {
  users: User[];
};

export type CredentialsData = {
  token: string;
  user: User;
};

export type LoginCredentials = {
  email: string;
  password: string;
};

export type RegisterCredentials = {
  email: string;
  password: string;
  passwordConfirm: string;
};
