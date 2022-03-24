type UserData = {
  id: number;
  email: string;
};

export type CredentialsData = {
  token: string;
  user: UserData;
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