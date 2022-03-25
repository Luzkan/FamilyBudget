import { AxiosResponse } from "axios";

import { BudgetForm } from "../types/budget";
import api from "./api";

class BudgetService {
  async add(budgetForm: BudgetForm): Promise<AxiosResponse<any, any>> {
    return api.post("/api/rest/budget/", {
      name: budgetForm.name,
      total_budget: budgetForm.totalBudget,
    });
  }

  async getAll(): Promise<AxiosResponse<any, any>> {
    return api.get("/api/rest/budget/all");
  }
}

export default new BudgetService();
