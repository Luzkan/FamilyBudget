import { AxiosResponse } from 'axios'

import { BudgetForm, BudgetUsersForm } from 'types/budget'
import api from './api'

class BudgetService {
  async add (budgetForm: BudgetForm): Promise<AxiosResponse<any, any>> {
    return api.post('/api/rest/budget/', {
      name: budgetForm.name,
      total_budget: budgetForm.totalBudget
    })
  }

  async updateUsers (budgetUsersForm: BudgetUsersForm): Promise<AxiosResponse<any, any>> {
    return api.post('/api/rest/budget/users/', { // TODO: budget/<int:budget_id>/users/
      budget_id: budgetUsersForm.budgetId,
      users: budgetUsersForm.users
    })
  }

  async getAll (): Promise<AxiosResponse<any, any>> {
    return api.get('/api/rest/budget/all')
  }
}

export default new BudgetService()
