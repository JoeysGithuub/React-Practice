import React, { Component } from '../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react'
import EmployeeList from "./EmployeeList"  // Import EmployeeList component
import LocationList from "./locationList"
import AnimalList from "./animalList"
import OwnersList from "./owners"
export default class Kennel extends Component {

    state = {
        owners: [
            { id: 1, name: "Ryan Tanay", phoneNumber: 342-323-2323 },
            { id: 2, name: "Emma Beaton", phoneNumber: 342-432-4324 },
            { id: 3, name: "Dani Adkins", phoneNumber: 432-423-3423 },
            { id: 4, name: "Adam Oswalt", phoneNumber: 343-343-2343 },
            { id: 5, name: "Fletcher Bangs", phoneNumber: 343-342-2343 },
            { id: 6, name: "Angela Lee", phoneNumber: 334-434-4433}
        ],
        employees: [
            { id: 1, name: "Jessica Younker" },
            { id: 2, name: "Jordan Nelson" },
            { id: 3, name: "Zoe LeBlanc" },
            { id: 4, name: "Blaise Roberts" }
        ],
        locations: [
            { id: 1, name: "Nashville North" },
            { id: 2, name: "Nashville South" }
        ],
        animals: [
            { id: 1, name: "Doodles" },
            { id: 2, name: "Jack" },
            { id: 3, name: "Angus" },
            { id: 4, name: "Henley" },
            { id: 5, name: "Derkins" },
            { id: 6, name: "Checkers" }
        ]
    }

    render() {
        return (
            <React.Fragment>
                <LocationList locations={this.state.locations}/>
                 {/* <EmployeeList employees={this.state.employees}/>  */}
                <AnimalList animals={this.state.animals}owners={this.state.owners}/>
                <OwnersList owners={this.state.owners} />
            </React.Fragment>
        );
    }
}