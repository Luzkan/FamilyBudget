export type ExpenseCategory = "Food" | "Goods" | "Billds" | "Other";

export type Expense = {
  id_user: number;
  amount: number;
  name: string;
  category: ExpenseCategory;
};
