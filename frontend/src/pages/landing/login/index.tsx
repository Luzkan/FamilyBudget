import React, { useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { creators } from "../../../store/rest_check";
import Email from "./components/Email";
import Password from "./components/Password";

const Login = () => {
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = React.useState(true);

  const restCheck = useSelector((state: RootStateOrAny) => state.restCheck);
  useEffect(() => {
    const action = creators.fetchRestCheck();
    dispatch(action);
  }, [dispatch]);

  return (
    <Container className="landing-page">
      <div className="content-center">
        <h1 className="title">Family Budget</h1>
        <h3 className="subtitle">Gather your spendings.</h3>

        <Form className="form landing-page-login">
          <Email />
          <Password />
          <p className="text-hint switch-form">
            New? Click{" "}
            <span
              onClick={() => setLoginForm(!loginForm)}
              className="text-clickable"
            >
              here
            </span>{" "}
            to register instead.
          </p>
          <Button className="btn-round" color="primary" size="lg">
            Login
          </Button>
        </Form>

        <div>{restCheck.result}</div>
      </div>
    </Container>
  );
};

export default Login;
