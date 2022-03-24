import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import AbsoluteBackground from "../../common/components/absolute-background";
import { creators } from "../../api/rest_check";
import BudgetContainer from "./budget-container";
import BudgetTabs from "./budget-container/components/budget-tabs";

const LoggedPage = () => {
  const dispatch = useDispatch();
  const restCheck = useSelector((state: RootStateOrAny) => state.restCheck);
  useEffect(() => {
    const action = creators.fetchRestCheck();
    dispatch(action);
  }, [dispatch]);

  return (
    <>
      <AbsoluteBackground />
      {/* <Container fluid="md" className="m-5 mx-auto align-middle"> */}
      <Container fluid="md" className="logged-page mx-auto align-middle">
        <BudgetContainer />
      </Container>
    </>
  );
};

export default LoggedPage;
