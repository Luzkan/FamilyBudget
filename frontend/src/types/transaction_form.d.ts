import { ExpenseCategory } from 'types/expense'
import { IncomeCategory } from 'types/income'

export type TransactionForm = {
  budgetId: number;
  transactionType: 'expense' | 'income';
  amount: number;
  name: string;
  category: ExpenseCategory | IncomeCategory;
};
