import React, { Component } from 'react'
import Location from "./location"
import Database from "./ApiManager"

export default class LocationList extends Component {
    state = {
        locations: []

    }

    componentDidMount() {
        Database.getAllLocations()
            .then(locations => this.setState({ locations: locations }))
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.locations.map(location => {
                        return <Location key={location.id} location={location} />
                    })
                }
            </React.Fragment>
        )
    }
}