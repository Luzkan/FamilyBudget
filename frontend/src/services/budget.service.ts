import { AxiosResponse } from "axios"

import {
  AddNewBudgetForm,
  BudgetResponse,
  UpdateBudgetUsers,
} from "types/budget"
import { UserGetAllResponse } from "types/user"
import api from "./api"

class BudgetService {
  async add(
    budgetForm: AddNewBudgetForm
  ): Promise<AxiosResponse<BudgetResponse>> {
    return api.post("/api/rest/budget/", {
      name: budgetForm.name,
      total_budget: budgetForm.totalBudget,
    })
  }

  async updateUsers(
    budgetUsersForm: UpdateBudgetUsers
  ): Promise<AxiosResponse<UserGetAllResponse>> {
    return api.post("/api/rest/budget/users/", {
      // TODO: budget/<int:budget_id>/users/
      budget_id: budgetUsersForm.budgetId,
      users: budgetUsersForm.users,
    })
  }

  async get(searchQuery: string): Promise<AxiosResponse<BudgetResponse>> {
    return api.get("/api/rest/budget/", {
      params: { searchQuery: searchQuery },
    })
  }
}

export default new BudgetService()
