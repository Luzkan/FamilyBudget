import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import AbsoluteBackground from "../../common/components/absolute-background";
import BudgetContainer from "./budget-container";

const LoggedPage = () => {
  
  // const [user, setUser] = useState()

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("user");
  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     setUser(foundUser);
  //   }
  // }, []);

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
