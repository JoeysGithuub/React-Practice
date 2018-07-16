import { Route } from "react-router-dom"
import React, { Component } from "react"
import AnimalList from './animalList'
import LocationList from './locationList'
import EmployeeList from './employeeList'
import Animal from "./animal"
import Employee from "./employee"
import Location from "./location"
import Login from './login'


export default class ApplicationViews extends Component {
    // Check if credentials are in local storage
    isAuthenticated = () => localStorage.getItem("credentials") !== null

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={props => {
                    if (this.isAuthenticated()) {
                        return <LocationList />
                    } else {
                        return <Login />
                    }
                }} />
                <Route path="/locations/:locationId" render={(props) => {
                    return <Location location={props.location.state.location} />
                }} />

                <Route exact path="/animals" render={props => {
                    if (this.isAuthenticated()) {
                        return <AnimalList />
                    } else {
                        return <Login />
                    }
                }} />
                <Route path="/animals/:animalId" render={(props) => {
                    return <Animal animal={props.location.state.animal} />
                }} />
                <Route exact path="/employees" render={props => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList />
                    } else {
                        return <Login />
                    }
                }} />
                <Route path="/employees/:employeeId" render={(props) => {
                    return <Employee employee={props.location.state.employee} />
                }} />
            </React.Fragment>
        );
    }
}