import ModalForm from "common/modal-form";
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { creatorsBudgets } from "store/budget/creators";
import { creatorsUsers } from "store/users/creators";
import { User, UserGetAllResponse } from "types/user";
import BudgetContainerPaneHeaderManageUsersBody, {
  UserForm,
} from "./manage-users-body";

interface Props {
  budgetId: number;
  budgetUsers: User[];
}

const BudgetContainerPaneHeaderManageUsers = ({ budgetId, budgetUsers }: Props) => {
  // TODO: This whole component is dirty and requires a refactor; deadline driven development

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<undefined>();

  type CheckedUsers = { [key: number]: string | boolean };

  const allUsers: UserGetAllResponse = useSelector(
    (state: RootStateOrAny) => state.users
  );

  const manageUsers: UserForm[] = allUsers.users.map((user: User) => {
    return {
      id: user.id,
      email: user.email,
      isInBudget: budgetUsers.some(
        (budgetUser: User) => budgetUser.id === user.id
      ),
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(creatorsUsers.getAll());
  }, [dispatch]);

  const onSubmit = (checkedUsers: CheckedUsers) => {
    const users: User[] = Object.keys(checkedUsers)
      // @ts-ignore
      .filter((key) => checkedUsers[key] !== false)
      .map((key) => Number(key))
      .map((id) => manageUsers.find((user) => user.id === id));

    console.log({budgetId: budgetId, users: users})
    dispatch(creatorsBudgets.updateUsers({budgetId: budgetId, users: users}));
  };

  return (
    <>
      <ModalForm
        button={{
          text: "Manage Users",
        }}
        modal={{
          headerTitle: "Manage Users",
          bodyContent: (
            <BudgetContainerPaneHeaderManageUsersBody
              manageUsers={manageUsers}
              register={register}
            />
          ),
          footer: [<Button type="submit">Confirm</Button>],
          onSubmit: handleSubmit(onSubmit),
        }}
      />
    </>
  );
};

export default BudgetContainerPaneHeaderManageUsers;
