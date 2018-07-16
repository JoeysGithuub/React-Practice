import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

export default props => {
    let employee = {}

    // Check if the data is in `props.animal`
    if (props.hasOwnProperty("employee")) {
        employee = props.employee

        // If not, data will be in `props.location.state.animal`
    } else {
        employee = props.location.state.employee
    }


    return (
        <div className="card" style={{ width: `18rem` }}>
            <div className="card-body">
                <h5 className="card-title">
                    {employee.name}
                </h5>
                <p className="card-text">{employee.name}</p>
                <Link className="card-link"
                    to={{
                        pathname: `/employees/${employee.id}`,
                        state: { employee: employee }
                    }}>
                    Details
                </Link>
            </div>
        </div>
    )
}
