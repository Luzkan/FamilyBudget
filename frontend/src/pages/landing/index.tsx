import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import AbsoluteBackground from "../../layout/absolute-background";
import { creators } from "../../store/misc/creators";
import LoginForm from "./credentials-form/login-form";
import RegisterForm from "./credentials-form/register-form";

const PageLanding = () => {
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = React.useState(true);
  const restCheck = useSelector((state: RootStateOrAny) => state.restCheck);
  useEffect(() => {
    const action = creators.restCheck();
    dispatch(action);
  }, [dispatch]);

  return (
    <>
      <AbsoluteBackground />
      <Container className="landing-page">
        <div className="content-center">
          <h1 className="title">Family Budget</h1>
          <h3 className="subtitle">Gather your spendings.</h3>
          {loginForm ? (
            <LoginForm setLoginForm={setLoginForm} />
          ) : (
            <RegisterForm setLoginForm={setLoginForm} />
          )}
          <div>{restCheck.result}</div>
        </div>
      </Container>
    </>
  );
};

export default PageLanding;
