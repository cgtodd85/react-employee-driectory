import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

class EmployeeTable extends React.Component {
  state = {
    employees: [],
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>1</Col>
          <Col>2</Col>
          <Col>3</Col>
        </Row>
      </Container>
    );
  }
}

export default EmployeeTable;
