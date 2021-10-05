import React from "react";
import API from "../utils/API";
import { Button } from "react-bootstrap";
import EmployeeCard from "./EmployeeCard/EmployeeCard";
import Wrapper from "./Wrapper/index";
import Title from "./Title/index";

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
        <Title>Employee List</Title>
        <button onClick={this.sortByName}>Sort by name</button>
        <Button onClick={this.filterByMale}>Men Only</Button>
        <Wrapper>
          {console.log(this.state.employees)}
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
