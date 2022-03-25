import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import BMModal from "../../../../../../../common/components/button-modal/components/BMModal"; // TODO: Absolute import
import { BudgetForm } from "../../../../../../../types/budget";
import AddBudgetButton from "./components/AddBudgetButton";
import AddBudgetBody from "./components/AddBudgetBody";
import budgetService from "../../../../../../../services/budget.service";

const AddBudget = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const onHide = () => setModalShow(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BudgetForm>();

  const onSubmit = (data: BudgetForm) => {
    budgetService.add(data)
  };

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
