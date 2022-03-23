import React from "react";
import { Col, Row } from "react-bootstrap";
import AddTransaction from "./components/add-transaction";

interface Props {
  budgetName: string;
}

const Header = ({ budgetName }: Props) => {
  return (
    <Row>
      <Col xs={8}>
        <h2>Turbośmieszki</h2>
      </Col>
      <Col xs={2}>
        <AddTransaction />
      </Col>
      <Col xs={2}>
        <button className="btn btn-primary">Add/Remove</button>
      </Col>
    </Row>
  );
};

export default Header;
