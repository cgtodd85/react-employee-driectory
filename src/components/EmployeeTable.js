import React from "react";
import API from "../utils/API";
import { Button, Header } from "react-bootstrap";
import EmployeeCard from "./EmployeeCard/EmployeeCard";
import Wrapper from "./Wrapper/index";
import Title from "./Title/index";
import "./index.css";

class EmployeeTable extends React.Component {
  state = {
    employees: [],
    filteredEmployees: [],
    sortedEmployees: [],
  };

  componentDidMount() {
    API.randomEmployees()
      .then((res) => {
        console.log(res.data.results);
        this.setState({
          employees: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  }

  filterByMale = () => {
    const males = this.state.employees.filter(
      (employee) => employee.gender === "male"
    );
    this.setState({ employees: males });
  };
  sortByName = () => {
    const sorted = this.state.employees.sort((a, b) => {
      if (a.name.first.toLowerCase() < b.name.first.toLowerCase()) return -1;
      if (a.name.first.toLowerCase() > b.name.first.toLowerCase()) return 1;
      return 0;
    });
    this.setState({ employees: sorted });
  };

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
      <div>
        <Title>
          Employee List, Cool!<i class="fas fa-users"></i>
        </Title>

        <header>
          {"   "} Sort options: {"   "}
          <Button onClick={this.sortByName}>Sort by name</Button>{" "}
          <Button onClick={this.filterByMale}>Men Only</Button>
        </header>
        <Wrapper>
          {this.state.employees.map((employee) => (
            <EmployeeCard
              name={employee.name.first}
              picture={employee.picture.medium}
              age={employee.dob.age}
              email={employee.email}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default EmployeeTable;
