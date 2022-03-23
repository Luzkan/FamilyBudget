import React from "react";
import { Button, Form } from "react-bootstrap";
import Email from "./components/Email";
import Password from "./components/Password";

interface Props {
  setLoginForm: (loginForm: boolean) => void;
}

const Login = ({ setLoginForm }: Props) => {
  return (
    <Form className="form landing-page-login">
      <Email />
      <Password hint={"Password"} />
      <p className="text-hint switch-form">
        New? Click{" "}
        <span onClick={() => setLoginForm(false)} className="text-clickable">
          here
        </span>{" "}
        to register instead.
      </p>
      <Button className="btn-round" color="primary" size="lg">
        Login
      </Button>
    </Form>
  );
};

export default Login;
