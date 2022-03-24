import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Email from "./components/Email";
import FormSwitch from "./components/FormSwitch";
import Password from "./components/Password";

interface Props {
  setLoginForm: (loginForm: boolean) => void;
}

type RegisterCredentials = {
  email: string;
  password: string;
  passwordConfirm: string;
};

const Register = ({ setLoginForm }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterCredentials>();

  const onSubmit = (data: RegisterCredentials) => console.log(data);

  // const onSubmit = handleSubmit((data: RegisterCredentials) => {
  //   console.log(JSON.stringify(data));
  // })

  return (
    <Form className="form landing-page-login" onSubmit={handleSubmit(onSubmit)}>
      <Email handleInput={register} name={"email"} />
      <Password handleInput={register} name={"password"} hint={"Password"} />
      <Password
        handleInput={register}
        name={"passwordConfirm"}
        hint={"Confirm Password"}
      />
      <FormSwitch handleClick={() => setLoginForm(true)} isLoginForm={false} />
      <Button className="btn-round" color="primary" size="lg" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default Register;
