import api from "../api/api";
import { LoginCredentials, RegisterCredentials } from "../types/user";


class AuthService {
  async login(loginCredentials: LoginCredentials): Promise<any> {
    const response = await api
      .post("/api/rest/login/", {
        email: loginCredentials.email,
        password: loginCredentials.password,
      });
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  }


  async register(registerCredentials: RegisterCredentials): Promise<any> {
    const response = await api
      .post("/api/rest/register/", {
        email: registerCredentials.email,
        password: registerCredentials.password,
      });
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  }

  logout(): void {
    localStorage.removeItem("user");
  }

  getCurrentUser(): string | null {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  }
}

export default new AuthService();
