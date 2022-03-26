import { AxiosResponse } from "axios"

import { BudgetForm, BudgetResponse, BudgetUsersForm } from "types/budget"
import { UserGetAllResponse } from "types/user"
import api from "./api"

class BudgetService {
  async add(
    budgetForm: BudgetForm
  ): Promise<AxiosResponse<BudgetResponse>> {
    return api.post("/api/rest/budget/", {
      name: budgetForm.name,
      total_budget: budgetForm.totalBudget,
    })
  }

  async updateUsers(
    budgetUsersForm: BudgetUsersForm
  ): Promise<AxiosResponse<UserGetAllResponse>> {
    return api.post("/api/rest/budget/users/", {
      // TODO: budget/<int:budget_id>/users/
      budget_id: budgetUsersForm.budgetId,
      users: budgetUsersForm.users,
    })
  }

  async getAll(): Promise<AxiosResponse<BudgetResponse>> {
    return api.get("/api/rest/budget/all")
  }
}

export default new BudgetService()
