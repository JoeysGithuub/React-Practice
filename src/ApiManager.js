const Database = Object.create({}, {

    //getting locations
    getAllLocations: {
        value: () => {
            return fetch("http://localhost:5002/locations")
            .then(e => e.json())   
        }
    },
    //getting animals
    getAllAnimals: {
        value: () => {
            return fetch("http://localhost:5002/animals")
            .then(e => e.json())   
        }
    },
    //getting employees
    getAllEmployees: {
        value: () => {
            return fetch("http://localhost:5002/employees")
            .then(e => e.json())   
        }
    }

})
export default Database