import React, { Component } from 'react'
import EmployeeList from "./EmployeeList"  // Import EmployeeList component
import KennelLocation from "./LocationList"


export default class Kennel extends Component {
    render() {
        return (
            <div>
                <EmployeeList />
                <KennelLocation/>
            </div>
        );
    }
}