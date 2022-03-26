import { ExpenseCategory } from "types/expense";
import { IncomeCategory } from "types/income";

export type TransactionForm = {
  amount: number;
  name: string;
  category: ExpenseCategory | IncomeCategory;
};
