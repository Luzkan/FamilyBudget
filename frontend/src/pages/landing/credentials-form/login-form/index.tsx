import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { creatorsAuth } from "store/auth/creators";
import { LoginCredentials } from "types/user";

import AbstractCredentialsForm from "../components/AbstractCredentialForm";

interface Props {
  setLoginForm: (loginForm: boolean) => void;
}

const LoginForm = ({ setLoginForm }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>();

  const dispatch = useDispatch();

  const onSubmit = (data: LoginCredentials) => {
    // Sending password in plaintext (even when SSL is used) is a questionable practice.
    // https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html
    dispatch(creatorsAuth.login(data));
  };

  return (
    <AbstractCredentialsForm
      handleInput={register}
      onSubmit={handleSubmit(onSubmit)}
      additionalFields={null}
      handleFormSwitch={() => setLoginForm(false)}
      buttonText={"Login"}
      isLoginForm={true}
    />
  );
};

export default LoginForm;
