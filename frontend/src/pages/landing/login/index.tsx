import React, { useEffect } from 'react';
import { Container } from "react-bootstrap";
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { creators } from '../../../store/rest_check';

const Login = () => {

  const dispatch = useDispatch();

  const restCheck = useSelector((state: RootStateOrAny) => state.restCheck);
  useEffect(() => {
    const action = creators.fetchRestCheck();
    dispatch(action);
  }, [dispatch]);

  return (
    <Container className="landing-page">
      <div className="content-center">
        <h1 className="title">Family Budget</h1>
        <h3 className="subtitle">
          Login/Register form TBA.
        </h3>
        <div>{restCheck.result}</div>
      </div>
    </Container>
  );
}

export default Login;


