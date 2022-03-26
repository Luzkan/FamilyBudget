import { AxiosResponse } from "axios"

import { CredentialsData } from "../types/user"
import api from "./api"

class UsersService {
  async getAll(): Promise<AxiosResponse<CredentialsData>> {
    return api.get("/api/rest/users/all/")
  }
}

export default new UsersService()
