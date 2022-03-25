import React from "react";
import { Col, Row } from "react-bootstrap";
import AddTransaction from "./components/add-transaction";
import ManageUsers from "./components/manage-users";

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <Row>
      <Col xs={8}>
        <h2>{title}</h2>
      </Col>
      <Col xs={2}>
        <AddTransaction />
      </Col>
      <Col xs={2}>
        <ManageUsers />
      </Col>
    </Row>
  );
};

export default Header;
