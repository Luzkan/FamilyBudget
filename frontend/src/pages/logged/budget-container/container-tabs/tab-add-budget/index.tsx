import ModalFormModal from 'common/modal-form/components/Modal';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { creatorsBudgets } from 'store/budget/creators';
import { BudgetForm } from 'types/budget';

import AddBudgetBody from './components/AddBudgetBody';
import AddBudgetButton from './components/AddBudgetButton';

const BudgetContainerTabAddBudget = () => {
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
    dispatch(creatorsBudgets.add(data));
  };

  return (
    <>
      <AddBudgetButton showModal={() => setModalShow(true)} />
      <ModalFormModal
        functionalHandlers={{
          show: modalShow,
          onHide: () => setModalShow(false),
          onSubmit: handleSubmit(onSubmit),
        }}
        content={{
          headerTitle: "Add New Budget",
          bodyContent: <AddBudgetBody register={register} />,
          bodyFooter: [
            <Button type="submit">Add Budget</Button>,
            <Button onClick={onHide}>Close</Button>,
          ],
        }}
      />
    </>
  );
};

export default BudgetContainerTabAddBudget;
