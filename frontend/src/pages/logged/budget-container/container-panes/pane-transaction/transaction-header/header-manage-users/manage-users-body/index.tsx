import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { UseFormRegister } from "react-hook-form";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { creatorsBudgets } from "store/budget/creators";
import { creatorsUsers } from "store/users/creators";
import { BudgetResponse } from "types/budget";
import { User, UserGetAllResponse } from "types/user";

export interface UserForm {
  id: number;
  email: string;
  isInBudget: boolean;
}

interface Props {
  manageUsers: UserForm[];
  register: UseFormRegister<any>;
}

const BudgetContainerPaneHeaderManageUsersBody = ({
  manageUsers,
  register,
}: Props) => {
  return (
    <>
      {manageUsers.map((user) => (
        <div key={`default-${user.id}`} className="mb-3">
          <Form.Check
            type="checkbox"
            id={`default-${user.id}`}
            defaultChecked={user.isInBudget}
            label={user.email}
            value={user.email}
            {...register(`${user.id}`)}
          />
        </div>
      ))}
    </>
  );
};

export default BudgetContainerPaneHeaderManageUsersBody;
