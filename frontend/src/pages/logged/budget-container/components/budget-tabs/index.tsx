import React from "react";
import { ListGroup, Pagination} from "react-bootstrap";
import AddBudget from "./components/add";
import BudgetTabItem from "./components/budget-tab-item";
import Searchbar from "./components/searchbar";

const BudgetTabs = () => {
  const budgetsMock = Array(6).fill(0);

  let activePaginationTab: number = 1;
  let paginations = [];

  for (let number = 1; number <= 5; number++) {
    paginations.push(
      <Pagination.Item key={number} active={number === activePaginationTab}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <ListGroup>
      <AddBudget/>
      <Searchbar/>
      {budgetsMock.map((_, index) => (
        <BudgetTabItem budgetItemIndex={index} key={index} />
      ))}
      <Pagination>{paginations}</Pagination>
    </ListGroup>
  );
};

export default BudgetTabs;
