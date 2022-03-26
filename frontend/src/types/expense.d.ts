import { Transaction } from "types/transaction"

export type ExpenseCategory = "Food" | "Goods" | "Bills" | "Other"

export type Expense = Transaction & {
  category: ExpenseCategory
}
