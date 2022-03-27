import { ExpenseCategory } from "types/transactions/expense"
import { IncomeCategory } from "types/transactions/income"

export type Transaction = {
  id: number
  id_user: number // eslint-disable-line camelcase
  amount: number
  name: string
}

// ------------
// API Request

export type TransactionTypes = "expense" | "income"

export type TransactionForm = {
  budgetId: number
  transactionType: "expense" | "income"
  amount: number
  name: string
  category: ExpenseCategory | IncomeCategory
}
