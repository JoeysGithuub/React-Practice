import React, { Component } from '../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react'
import EmployeeList from "./EmployeeList"  // Import EmployeeList component
import LocationList from "./locationList"
import AnimalList from "./animalList"
import OwnersList from "./owners"
export default class Kennel extends Component {

    state = {
        employees: [
            { id: 1, name: "Jessica Younker" },
            { id: 2, name: "Jordan Nelson" },
            { id: 3, name: "Zoe Leblanc" },
            { id: 4, name: "Blaise Roberts" }
        ],
        locations: [
            { id: 1, name: "Nashville North" },
            { id: 2, name: "Nashville South" }
        ],
        animals: [
            { id: 1, name: "Dice"},
            { id: 2, name: "Rice"},
            { id: 3, name: "Ben"},
            { id: 4, name: "Rick"}
        ],
        owners: [
            { id: 1, name: "Ryan Tanay" },
            { id: 2, name: "Emma Beaton" },
            { id: 3, name: "Dani Adkins" },
            { id: 4, name: "Adam Oswalt" },
            { id: 5, name: "Fletcher Bangs" },
            { id: 6, name: "Angela Lee" }
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