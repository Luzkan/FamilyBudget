export type Transaction = {
  id: number
  id_user: number // eslint-disable-line camelcase
  amount: number
  name: string
}

export type TransactionTypes = "expense" | "income"
