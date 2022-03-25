type Transaction = {
  id_user: number;
  amount: number;
  name: string;
};

export type ExpenseCategory = "Food" | "Goods" | "Billds" | "Other";

export type Expense = Transaction & {
  category: ExpenseCategory;
};

export type IncomeCategory = "Job" | "Gift" | "Theft" | "Other";

export type Income = Transaction & {
  category: IncomeCategory;
};

export type TransactionForm = {
  amount: number;
  name: string;
  category: ExpenseCategory | IncomeCategory;
};
