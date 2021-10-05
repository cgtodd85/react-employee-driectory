import React from "react";
import { Container } from "react-bootstrap";
import API from "../utils/API";
import EmployeeCard from "./EmployeeCard/EmployeeCard";
import Wrapper from "./Wrapper/index";
import Title from "./Title/index";

class EmployeeTable extends React.Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    API.randomEmployees().then((res) => {
      console.log(res.data.results);
      this.setState({
        employees: res.data.results,
      });
    });
  }

  mapEmployees = () => {
    this.state.employees.map((employee) => (
      <EmployeeCard
        name={employee.name.first}
        picture={employee.picture.medium}
        age={employee.dob.age}
        email={employee.email}
      />
    ));
  };

  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.mapEmployees()}
      </Wrapper>
    );
  }
}

export default EmployeeTable;
