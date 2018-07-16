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