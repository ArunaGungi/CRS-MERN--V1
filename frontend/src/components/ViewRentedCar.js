import { Link, useNavigate } from "react-router-dom";
import "../static/stylesheets/ownerviewcars.css";
import "../static/stylesheets/confirmrent.css";
import axios from "axios";
import { useEffect, useState } from "react";

export const ViewRentedCar = () => {

    const navigate = useNavigate();

    const setLogout = () => {
        window.localStorage.setItem("isLoggedIn",false); 
        navigate("/");
    }

    const [rentData, setRentData] =  useState([]);

    const useremail = window.localStorage.getItem("email");

    useEffect(() => {
        axios.get(`http://localhost:2300/crs/api/v1/getRentData?useremail=${useremail}`)
        .then((result) => setRentData(result.data))
    },[])

    console.log(rentData);
    
    return (
        <>
        <div id="topnav">
			<Link to="/" className={"rentx"}>HOME</Link>
			<Link to="/viewrentedcar" className={"history"}>VIEW RENTED CARS</Link>
			<Link to="/rentcar" className={"status"}>RENT CAR</Link>
			<Link to="/contact" className={"contact"}>CONTACT ADMIN</Link>
			<Link to="/" className={"logout"} onClick={setLogout}>LOG OUT</Link>
		</div>
        <table id="cars">
            <tr>
                <th>Vehicle Name</th>
                <th>Rent Duration</th>
                <th>Total Price</th>
                <th>Owner Email ID</th>
                <th>STATUS</th>
            </tr>
            <tbody>
            {rentData.map((res, key) => (
                <tr key={key}>
                    <td>{res.carname}</td>
                    <td>{res.rentduration} days</td>
                    <td>{res.totalprice}$</td>
                    <td>{res.owneremail}</td>
                    <td>{res.status ? res.status : "Pending Approval"}</td>
                </tr>
            ))}
            </tbody> 
        </table>
        </>
    )
}
