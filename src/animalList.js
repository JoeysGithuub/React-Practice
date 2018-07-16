import React, { Component } from "react"
import Animal from "./animal"

export default class AnimalList extends Component {
    state = {
        animals: []
    }

    render() {
        return (
            <React.Fragment>
                <ul>
                {
                    this.state.animals.map(animal =>  <li>{animal.name}</li> )
                }
                </ul>
            </React.Fragment>
        )
    }
}