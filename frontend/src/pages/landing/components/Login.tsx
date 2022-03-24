import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { login, LoginCredentials } from "../../../api/login";
import Email from "./components/Email";
import FormSwitch from "./components/FormSwitch";
import Password from "./components/Password";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface Props {
  setLoginForm: (loginForm: boolean) => void;
}

const Login = ({ setLoginForm }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>();

  const restLogin = useSelector((state: RootStateOrAny) => state.restLogin);
  const dispatch = useDispatch();

  const onSubmit = (data: LoginCredentials) => {
    // Sending password in plaintext (even when SSL is used) is a questionable practice.
    // https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html
    dispatch(login.post(data));
  };

  if (restLogin.verified) {
    return <Navigate replace to="/budgets" />;
  }

  return (
    <Form className="form landing-page-login" onSubmit={handleSubmit(onSubmit)}>
      <Email handleInput={register} name={"email"} />
      <Password handleInput={register} name={"password"} hint={"Password"} />
      <FormSwitch handleClick={() => setLoginForm(false)} isLoginForm={true} />
      <Button className="btn-round" color="primary" size="lg" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default Login;
