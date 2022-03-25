import ModalFormInputGroup from "common/modal-form/components/InputGroup";
import React from "react";
import { BoxSeam, CardText, Cash } from "react-bootstrap-icons";
import { UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<any>;
}

const AddTransactionBody = ({ register }: Props) => {
  const IconCash = (): JSX.Element => <Cash />;
  const IconCard = (): JSX.Element => <CardText />;
  const IconBox = (): JSX.Element => <BoxSeam />;

  return (
    <>
      <ModalFormInputGroup
        handleInput={register}
        icon={IconCard}
        formControlProps={{
          placeholder: "Transaction Name",
          type: "text",
          id: "name",
          name: "name",
        }}
      />
      <ModalFormInputGroup
        handleInput={register}
        icon={IconCash}
        formControlProps={{
          placeholder: "Amount",
          type: "number",
          id: "amount",
          name: "amount",
        }}
      />
      <ModalFormInputGroup
        handleInput={register}
        icon={IconBox}
        formControlProps={{
          placeholder: "category",
          type: "text",
          id: "category",
          name: "category",
        }}
      />
    </>
  );
};

export default AddTransactionBody;
