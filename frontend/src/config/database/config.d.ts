import { ExpenseCategory } from "types/transactions/expense"
import { IncomeCategory } from "types/transactions/income"

export type ExpenseConfig = {
  categories: ExpenseCategory[]
}

export type IncomeConfig = {
  categories: IncomeCategory[]
}

export type TransactionType = {
  expense: ExpenseConfig
  income: IncomeConfig
}

export type ConfigDatabase = {
  transactionTypes: TransactionType
}
