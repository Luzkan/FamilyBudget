import { Transaction } from "types/transactions/transaction"

export type ExpenseCategory = "Food" | "Goods" | "Bills" | "Other"
export type Expense = Transaction & { category: ExpenseCategory }
