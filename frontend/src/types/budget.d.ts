import { Expense } from "./transactions/expense"
import { Income } from "./transactions/income"
import { User } from "./user"

export type Budget = {
  id: number
  name: string
  total_budget: number // eslint-disable-line camelcase
  expenses: Expense[]
  incomes: Income[]
  users: User[]
}

// ------------
// API Request

export type AddNewBudgetForm = {
  name: string
  totalBudget: number
}

export type UpdateBudgetUsers = {
  budgetId: number
  users: User[]
}

// ------------
// API Response

export type BudgetResponse = {
  budgets: Budget[]
  created?: boolean
}
