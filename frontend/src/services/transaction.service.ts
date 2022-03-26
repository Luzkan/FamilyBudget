import { AxiosResponse } from "axios";
import { TransactionForm } from "types/transaction_form";

import api from "./api";

class TransactionService {
  async add(budgetForm: TransactionForm): Promise<AxiosResponse<any, any>> {
    return api.post("/api/rest/expense/", {
      budget_id: budgetForm.budgetId,
      name: budgetForm.name,
      amount: budgetForm.amount,
      category: budgetForm.category,
    });
  }
}

export default new TransactionService();
