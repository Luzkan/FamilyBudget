import React from "react";
import { ListGroup, Pagination} from "react-bootstrap";
import { Budget } from "../../../../../types/budget";
import AddBudget from "./components/add";
import BudgetTabItem from "./components/budget-tab-item";
import Searchbar from "./components/searchbar";


interface Props {
  budgets: Budget[];
  paginations: any;
}

const BudgetTabs = ({budgets, paginations}: Props) => {

  return (
    <ListGroup>
      <AddBudget/>
      <Searchbar/>
      {budgets.map((budget: Budget, index: number) => (
        <BudgetTabItem budget={budget} budgetItemIndex={index} key={index} />
      ))}
      <Pagination>{paginations}</Pagination>
    </ListGroup>
  );
};

export default BudgetTabs;
