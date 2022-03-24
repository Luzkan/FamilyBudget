import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Email from "./components/Email";
import FormSwitch from "./components/FormSwitch";
import Password from "./components/Password";

interface Props {
  setLoginForm: (loginForm: boolean) => void;
}

type LoginCredentials = {
  email: string;
  password: string;
};

const Login = ({ setLoginForm }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>();

  const onSubmit = (data: LoginCredentials) => console.log(data);

  // const onSubmit = handleSubmit((data: LoginCredentials) => {
  //   console.log(JSON.stringify(data));
  // });

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
