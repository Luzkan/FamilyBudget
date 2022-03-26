import ModalFormInputGroup from "common/modal-form/components/InputGroup";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { Lock, Mailbox } from "react-bootstrap-icons";
import { UseFormRegister } from "react-hook-form";
import { RootStateOrAny, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { CredentialsData } from "types/user";

import FormSwitch from "../components/FormSwitch";

interface Props {
  handleInput: UseFormRegister<any>;
  onSubmit: () => void;
  additionalFields: JSX.Element[] | null;
  handleFormSwitch: () => void;
  buttonText: string;
  isLoginForm: boolean;
}

const AbstractCredentialsForm = ({
  handleInput,
  onSubmit,
  additionalFields,
  handleFormSwitch,
  buttonText,
  isLoginForm,
}: Props) => {
  const loginData: CredentialsData = useSelector(
    (state: RootStateOrAny) => state.login
  );

  if (loginData.token) return <Navigate replace to="/budgets" />;

  const IconEmail = (): JSX.Element => <Mailbox />;
  const IconPassword = (): JSX.Element => <Lock />;

  return (
    <Form className="form landing-page-login" onSubmit={onSubmit}>
      <ModalFormInputGroup
        handleInput={handleInput}
        icon={IconEmail}
        formControlProps={{
          placeholder: "Email",
          type: "email",
          id: "email",
          name: "email",
        }}
      />
      <ModalFormInputGroup
        handleInput={handleInput}
        icon={IconPassword}
        formControlProps={{
          placeholder: "Password",
          type: "password",
          id: "password",
          name: "password",
        }}
      />
      {additionalFields && additionalFields.map((field, index) => <div key={index}>{field}</div>)}
      <FormSwitch handleClick={handleFormSwitch} isLoginForm={isLoginForm} />
      <Button className="btn-round" color="primary" size="lg" type="submit">
        {buttonText}
      </Button>
    </Form>
  );
};

export default AbstractCredentialsForm;
