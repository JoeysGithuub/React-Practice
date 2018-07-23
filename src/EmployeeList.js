import React, { Component } from "react"
import Employee from "./employee"
import Database from "./ApiManager"

export default class EmployeeList extends Component {
    state = {
        employees: [ ]
            
    }
    componentDidMount () {
       Database.getAllEmployees()
        .then(employees => this.setState({ employees: employees }))
    }
    checkOutEmployee = (employeeId) => {
        // Delete the specified animal from the API
        fetch(`http://localhost:5002/employees/${employeeId}`, {
            method: "DELETE"
        })
        // When DELETE is finished, retrieve the new list of animals
        .then(() => {
            // Remember you HAVE TO return this fetch to the subsequenet `then()`
            return fetch("http://localhost:5002/employees")
        })
        // Once the new array of animals is retrieved, set the state
        .then(a => a.json())
        .then(employeeList => {
            this.setState({
                employees: employeeList
            })
        })
    }

    makeEmployee = () => {
        let name = document.getElementById("name").value
        // let breed = document.getElementById("breed").value
        console.log(name)
        // Delete the specified animal from the API
        fetch("http://localhost:5002/employees/", {
            method: "POST",
            data: {
                "name": name,
                // "breed": breed
            }
        })
        // When DELETE is finished, retrieve the new list of animals
        .then(() => {
            // Remember you HAVE TO return this fetch to the subsequenet `then()`
            return fetch("http://localhost:5002/employees")
        })
        // Once the new array of animals is retrieved, set the state
        .then(a => a.json())
        .then(employeeList => {
            this.setState({
                employee: employeeList
            })
        })
    }


    render() {
        return (
            <React.Fragment>
                  {
                <ul>
                {this.state.employees.map(employee => <Employee key = {employee.id} employee={employee} />)}
               </ul>
            }
                </React.Fragment>
        )
    }
}