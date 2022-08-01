import React from 'react'
import './search.css'
import { useHistory } from 'react-router-dom'


export const visible = {
    hide: {
        display: 'none',
    },
    show: {
        display: 'block',
    }
}

const Search = () => {
    const history = useHistory();
    const [select, setSelect] = React.useState("Select")

    const [cities, setCities] = React.useState("Select Destination")

    const handleBooking = () => {
        history.push("/booking");
    }

    return (
        <>
            <div className="background">
                <div className="option1">
                    <p>Zostel</p>
                </div>
                <div className="option2">
                    <p>Zostel Homes</p>
                </div>


                <div className="container ">
                    <div className="d-flex gap-2">
                        
                        <select
                            style={{ color: "#F1563F" }}
                            className=" bg-white py-3 col-4 btn"
                            onChange={(e) => setCities(e.target.value)}
                            value="Select Destination">
                            {cities}
                            <option value="Select Destination">{cities}</option>
                        </select>

                      

                        <input
                            style={{ color: "#F1563F" }}
                          
                            className="py-2 btn  btn  col-2  bg-white" type="date" name="" id="" />
                        <input
                            style={{ color: "#F1563F" }}
                            className=" py-2 btn col-2 bg-white" type="date" name="" id="" />
                        <div></div>
                     
                        <button
                            style={{ background: "#F1563F" }}
                            onClick={() => {
                                history.push("/booking")
                            }}
                            className="col-5 py-2 size btn text-uppercase text-white">Book Now</button>
                    </div>
                </div>



            </div >
        </>
    )
}
