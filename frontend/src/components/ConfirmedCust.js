import { Link, Routes,Route, useNavigate, useLocation } from "react-router-dom";
import "../static/stylesheets/ownerviewcars.css";
import "../static/stylesheets/confirmrent.css";
import { RentCar } from "./RentCar";

export const ConfirmedCust = () => {

    const navigate = useNavigate();

    const setLogout = () => {
        window.localStorage.setItem("isLoggedIn",false); 
        navigate("/");
    }
    return (
        <>
        <div id="topnav">
            <Link to="/" className={"rentx"}>HOME</Link>
			<Link to="/viewrentedcar" className={"status"}>VIEW RENTED CARS</Link>
			<Link to="/contactOwner" className={"contact"}>CONTACT OWNER</Link>
            <Link to="/rentcar" className={"contact"}>VIEW MORE CARS</Link>
			<Link to="/" className={"logout"} onClick={setLogout}>LOG OUT</Link>
        </div>

        <h3 style={{"position":"relative", "marginTop":"100px"}}>Thank you for choosing the car for rent. <h3>We have sent the approval notice to
            the owner </h3>and will provide you the approval confirmation over your registered E-mail ID
        </h3>

        <p style={{"textAlign":"center"}}>Meanwhile you can headover to check the services</p>
        
        </>
    )
}
