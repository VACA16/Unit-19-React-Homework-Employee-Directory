import React, { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import employees from "./components/Data/employees.json";
import * as ReactBootstrap from "react-bootstrap";

const App = () => {
  const [dataEmployee, setDataEmployee] = useState(employees);

  function handleSearch(e) {
    const letter = e.target.value;
    const letterSearch = employees.filter((employee) =>
      employee.firstName.toLowerCase().startsWith(letter.toLowerCase())
    );
    console.log(letter);
    setDataEmployee(letterSearch);
  }

  const renderEmployee = (employee, index) => {
    return (
      <tr key={index}>
        <td>{employee.id}</td>
        <td>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.contactPhone}</td>
      </tr>
    );
  };

  return (
    <div className="App">
      <Navbar>
        <ReactBootstrap.Form inline>
          <ReactBootstrap.FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={handleSearch}
          />
        </ReactBootstrap.Form>
      </Navbar>

      <Container>
        <h2>Employees</h2>

        <ReactBootstrap.Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Contact Phone</th>
            </tr>
          </thead>
          <tbody>{dataEmployee.map(renderEmployee)}</tbody>
        </ReactBootstrap.Table>
      </Container>
    </div>
  );
};

export default App;
