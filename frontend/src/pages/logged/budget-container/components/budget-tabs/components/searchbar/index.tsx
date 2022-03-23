import React from "react";
import { Badge, Button, Form, FormControl, ListGroup } from "react-bootstrap";


const Searchbar = () => {
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Search Budget...</div>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Kowalsky Family"
            className="me-2"
            aria-label="Search"
          />
        </Form>
      </div>

    </ListGroup.Item>
  );
};

export default Searchbar;
