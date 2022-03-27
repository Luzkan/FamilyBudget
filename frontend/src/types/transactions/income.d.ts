import { Transaction } from "types/transactions/transaction"

export type IncomeCategory = "Job" | "Gift" | "Theft" | "Other"
export type Income = Transaction & { category: IncomeCategory }
