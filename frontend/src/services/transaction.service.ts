import { AxiosResponse } from "axios"
import { BudgetResponse } from "types/budget"
import { TransactionForm } from "types/transactions/transaction"

import api from "./api"

class TransactionService {
  async add(
    transactionForm: TransactionForm
  ): Promise<AxiosResponse<BudgetResponse>> {
    const data = {
      budget_id: transactionForm.budgetId,
      name: transactionForm.name,
      amount: transactionForm.amount,
      category: transactionForm.category,
    }
    switch (transactionForm.transactionType) {
      case "expense":
        return api.post("/api/rest/budget/expense/", data)
      case "income":
        return api.post("/api/rest/budget/income/", data)
      default:
        throw new Error("Invalid transaction type")
    }
  }
}

export default new TransactionService()
