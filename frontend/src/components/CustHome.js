import {Link, Routes, Route, useNavigate} from "react-router-dom";
import "../static/stylesheets/ownerhome.css";
import image from "../static/images/rentcars1.jpg";
import { CustViewCars } from "./CustViewCars";

export const CustHome = () => {

	const navigate = useNavigate();

	const setLogout = () => {
        window.localStorage.setItem("isLoggedIn",false); 
        navigate("/");
    }
    return (
		<>
        <div className="topnav">
		<div>
			<Link to="/" id={"rentx"}>HOME</Link>
			<Link to="/rentcar" id={"rentcar"}>RENT A CAR</Link>
			<Link to="/viewrentedcar" id={"history"}>VIEW HISTORY</Link>
			<Link to="/contactOwner" id={"contactowner"}>CONTACT OWNER</Link>
			<Link to="/" id={"logout"} onClick={setLogout}>LOG OUT</Link>
		</div>
		</div>
		<img src={image}></img>

		<Routes>
			<Route path="/viewcustcars" element={<CustViewCars/>}></Route>
		</Routes>
		</>
    )
}