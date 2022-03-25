import api from "./api";
import { AxiosResponse } from "axios";
import { BudgetForm } from "../types/budget";

class BudgetService {
  async add(
    budgetForm: BudgetForm
  ): Promise<AxiosResponse<any, any>> {
    const response = await api.post("/api/rest/budget/add/", {
      name: budgetForm.name,
      total_budget: budgetForm.totalBudget,
    });
    return response
  }

}

export default new BudgetService();
