export type IncomeCategory = "Job" | "Gift" | "Theft" | "Other";

export type Income = {
  id_user: number;
  amount: number;
  name: string;
  category: IncomeCategory;
};
