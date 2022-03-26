import { AxiosResponse } from 'axios'
import { TransactionForm } from 'types/transaction_form'

import api from './api'

class TransactionService {
  async add (transactionForm: TransactionForm): Promise<AxiosResponse<any, any>> {
    const data = {
      budget_id: transactionForm.budgetId,
      name: transactionForm.name,
      amount: transactionForm.amount,
      category: transactionForm.category
    }
    switch (transactionForm.transactionType) {
      case 'expense':
        return api.post('/api/rest/budget/expense/', data)
      case 'income':
        return api.post('/api/rest/budget/income/', data)
      default:
        throw new Error('Invalid transaction type')
    }
  }
}

export default new TransactionService()
