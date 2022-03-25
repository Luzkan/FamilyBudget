import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import BMModal from "../../../../../../../common/components/button-modal/components/BMModal";
import { BudgetForm } from "../../../../../../../types/budget";
import AddBudgetButton from "./components/AddBudgetButton";
import AddBudgetBody from "./components/AddBudgetBody";
import { creatorsBudgets } from "../../../../../../../store/budgets/creators";
import { useDispatch } from "react-redux";

const AddBudget = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const onHide = () => setModalShow(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BudgetForm>();

  const onSubmit = (data: BudgetForm) => {
    // To refresh I could make yet another call to the server
    // but I can just receive the added budget in response and
    // handle it client side.
    dispatch(creatorsBudgets.add(data))
  }

  return (
    <>
      <AddBudgetButton showModal={() => setModalShow(true)} />
      <BMModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onSubmit={handleSubmit(onSubmit)}
        headerTitle={"Add New Budget"}
        bodyContent={<AddBudgetBody register={register} />}
        bodyFooter={[
          <Button type="submit">
            Add Budget
          </Button>,
          <Button onClick={onHide}>Close</Button>,
        ]}
      />
    </>
  );
};

export default AddBudget;
