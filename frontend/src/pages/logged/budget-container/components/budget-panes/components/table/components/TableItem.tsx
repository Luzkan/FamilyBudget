import React from "react";

interface Props {
  amount: number;
  type: string;
  category: string;
  user: string;
}

const TableItem = ({amount, type, category, user}: Props ) => {
  return (
    <tr>
      <td>2</td>
      <td>{amount}</td>
      <td>{type}</td>
      <td>{user}</td>
    </tr>
  );
};

export default TableItem;
