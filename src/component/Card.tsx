import React, { Fragment } from "react"
import CardDetail from "./CardDetail"
import { userData } from "./interface"

const Card = (props: userData) => {
    const [show , setShow] = React.useState(false)
    return <Fragment><div className="card-body d-flex justify-content-between">
        <div className="col-md-2 my-3">
            <div className="card-body">
                <h6 className="font-weight-normal">{props.company.name}</h6>
            </div>
        </div>
        <div className="col-md-2">
            <div className="card-body">
                <h5 className="fw-bold ">CONTACT</h5>
                <h6 className="card-text">{props.name}</h6>
            </div>
        </div>
        <div className="col-md-2">
            <div className="card-body">
                <h5 className="fw-bold">STATE</h5>
                <h6 className="card-text">{props.address.suite}</h6>
            </div>
        </div>
        <div className="col-md-2">
            <div className="card-body">
                <h5 className="fw-bold">CITY</h5>
                <h6 className="card-text">{props.address.city}</h6>
            </div>
        </div>
        <div className="col-md-2 my-3">
            <div className="card-body">
                {!show ? 
                <button onClick={() => setShow(true)} className='btn btn-danger border-circle'>View Details</button>: <button onClick={() => setShow(false)} className='btn btn-danger border-circle'>Hide Details</button>}
            </div>
        </div>
    </div>
       {show && <CardDetail {...props} />}
    </Fragment>
}

export default Card