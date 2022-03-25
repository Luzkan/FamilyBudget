import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import AbsoluteBackground from "../../common/components/absolute-background";
import { creators } from "../../store/misc/creators";
import Login from "./components/Login";
import Register from "./components/Register";

const LandingPage = () => {
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
            <Login setLoginForm={setLoginForm} />
          ) : (
            <Register setLoginForm={setLoginForm} />
          )}
          <div>{restCheck.result}</div>
        </div>
      </Container>
    </>
  );
};

export default LandingPage;
