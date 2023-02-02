import { userData } from "./interface"

const CardDetail = (props:userData) => {
    return <div className=' card container shadow border-0  mb-3' style={{ borderRadius: "15px", height: "400px" }}>
        <div className="card-body">
            <h5 className="fw-semibold">Description</h5>
            <p className="card-text">{props.company.catchPhrase}</p>
        </div>

        <div className="d-flex justify-content-between align-items-center w-50">
            <div className="card-body">
                <div className='carrd'>
                    <h5 className="fw-semibold">Contact Person</h5>
                    <p className="card-text">{props.name}</p>
                </div>
                <div className='carrd'>
                    <h5 className="fw-semibold">User Name</h5>
                    <p className="card-text">{props.username}</p>
                </div>
                <div className='carrd'>
                    <h5 className="fw-semibold">Emails</h5>
                    <p className="card-text">{props.email}</p>
                </div>
                <div className='carrd'>
                    <h5 className="fw-semibold">Phones</h5>
                    <p className="card-text">{props.phone}</p>
                </div>
            </div>
            <div className="card-body">
                <div className='carrd'>
                    <h5 className="fw-semibold">Address</h5>
                    <p className="card-text">{`${props.address.city},${props.address.street},${props.address.zipcode}`}</p>
                </div>
                <div className='carrd'>
                    <h5 className="fw-semibold">City</h5>
                    <p className="card-text">{props.address.city}</p>
                </div>
                <div className='carrd'>
                    <h5 className="fw-semibold">State</h5>
                    <p className="card-text">{props.address.suite}</p>
                </div>
                <div className='carrd'>
                    <h5 className="fw-semibold">Country</h5>
                    <p className="card-text">{props.address.city}</p>
                </div>
            </div>
        </div>
    </div>
}

export default CardDetail