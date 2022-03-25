import ModalFormInputGroup from "common/modal-form/components/InputGroup";
import React from "react";
import { UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<any>;
}

const AddTransactionBody = ({ register }: Props) => {
  return (
    <>
      <ModalFormInputGroup
        handleInput={register}
        icon={undefined}
        formControlProps={{
          placeholder: "Transaction Name",
          type: "text",
          id: "name",
          name: "name",
        }}
      />
      <ModalFormInputGroup
        handleInput={register}
        icon={undefined}
        formControlProps={{
          placeholder: "Amount",
          type: "number",
          id: "amount",
          name: "amount",
        }}
      />
      <ModalFormInputGroup
        handleInput={register}
        icon={undefined}
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
