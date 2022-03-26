import { ExpenseCategory } from "types/expense";
import { IncomeCategory } from "types/income";

export type ExpenseConfig = {
  categories: ExpenseCategory[]
}

export type IncomeConfig = {
  categories: IncomeCategory[]
}

export type TransactionType = {
  expense: ExpenseConfig;
  income: IncomeConfig;
}

export type ConfigDatabase = {
  transactionTypes: TransactionType
}

