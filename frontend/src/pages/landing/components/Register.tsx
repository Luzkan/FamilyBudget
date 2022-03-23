import React from "react";
import { Button, Form } from "react-bootstrap";
import Email from "./components/Email";
import Password from "./components/Password";

interface Props {
  setLoginForm: (loginForm: boolean) => void;
}

const Register = ({ setLoginForm }: Props) => {
  return (
    <Form className="form landing-page-login">
      <Email />
      <Password hint={"Password"} />
      <Password hint={"Confirm Password"} />
      <p className="text-hint switch-form">
        Already registered? Click{" "}
        <span onClick={() => setLoginForm(true)} className="text-clickable">
          here
        </span>{" "}
        to login.
      </p>
      <Button className="btn-round" color="primary" size="lg">
        Register
      </Button>
    </Form>
  );
};

export default Register;
