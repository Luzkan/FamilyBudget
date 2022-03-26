export type Transaction = {
  id_user: number;
  amount: number;
  name: string;
};

export type TransactionTypes = "expense" | "income";
