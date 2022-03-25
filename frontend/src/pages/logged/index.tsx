import AbsoluteBackground from "layout/absolute-background";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import AuthService from "services/auth.service";
import { creatorsAuth } from "store/auth/creators";

import BudgetContainer from "./budget-container";

const PageLogged = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedUser = AuthService.getCurrentUser();
    loggedUser ? (
      dispatch(creatorsAuth.checkLoggedUserAuthorized(loggedUser))
    ) : (
      <Navigate replace to="/" />
    );
  }, []);

  return (
    <>
      <AbsoluteBackground />
      <Container fluid="md" className="logged-page mx-auto align-middle">
        <BudgetContainer />
      </Container>
    </>
  );
};

export default PageLogged;
