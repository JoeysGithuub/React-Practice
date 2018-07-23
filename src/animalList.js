import React, { Component } from 'react';
import Animal from "./animal"
import Database from "./ApiManager"

export default class animalList extends Component {
    state = {
        animals: [],
        owners: [],
        animalsAndOwners: []
    }

    componentDidMount () {
        Database.getAllAnimals()
            .then(animals => this.setState({
                animals: animals
            }))
    }

    checkOutAnimal = (animalId) => {
        // Delete the specified animal from the API
        fetch(`http://localhost:5002/animals/${animalId}`, {
            method: "DELETE"
        })
        // When DELETE is finished, retrieve the new list of animals
        .then(() => {
            // Remember you HAVE TO return this fetch to the subsequenet `then()`
            return fetch("http://localhost:5002/animals")
        })
        // Once the new array of animals is retrieved, set the state
        .then(a => a.json())
        .then(animalList => {
            this.setState({
                animals: animalList
            })
        })
    }

    makeAnimal = () => {
        let name = document.getElementById("name").value
        let breed = document.getElementById("breed").value
        console.log(name, breed)
        // Delete the specified animal from the API
        fetch("http://localhost:5002/animals/", {
            method: "POST",
            data: {
                "name": name,
                "breed": breed
            }
        })
        // When DELETE is finished, retrieve the new list of animals
        .then(() => {
            // Remember you HAVE TO return this fetch to the subsequenet `then()`
            return fetch("http://localhost:5002/animals")
        })
        // Once the new array of animals is retrieved, set the state
        .then(a => a.json())
        .then(animalList => {
            this.setState({
                animals: animalList
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                Name: <input id="name" />
                Breed: <input id="breed" />
                <button id="addAnimal" onClick={this.makeAnimal}>Add Animal</button>
                {
                    this.state.animals.map(animal =>
                        <Animal key={animal.id} animal={animal} checkOutAnimal={this.checkOutAnimal} >
                            {animal.name}
                        </Animal>
                    )
                }
            </React.Fragment>
        )
    }
}