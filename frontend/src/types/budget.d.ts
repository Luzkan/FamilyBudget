import { Expense } from "./expense";
import { Income } from "./income";
import { User } from "./user";

export type BudgetForm = {
  name: string;
  totalBudget: number;
};

export type Budget = {
  id: number;
  name: string;
  total_budget: number;
  expenses: Expense[];
  incomes: Income[];
  users: User[];
};

export type BudgetResponse = {
  budgets: Budget[];
  success?: boolean;
};
