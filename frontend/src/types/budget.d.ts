import { Expense, Income } from "./transaction";
import { User } from "./user";

export type BudgetForm = {
  name: string;
  totalBudget: number;
};

export type Budget = {
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
