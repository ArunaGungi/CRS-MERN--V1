import { Link, useNavigate } from "react-router-dom";

export const CustViewCars = () => {

    const navigate = useNavigate();
    
    const setLogout = () => {
        window.localStorage.setItem("isLoggedIn",false); 
        navigate("/");
    }
	return (
        <>
        <div id="topnav">
        <Link to="/" className={"home"}>HOME</Link>
		<Link to="/rentcars" className={"rentcar"}>RENT CAR</Link>
	    <Link to="/status" className={"status"}>VIEW HISTORY</Link>
		<Link to="/contactOwner" className={"contact"}>CONTACT OWNER</Link>
		<Link to="/" className={"logout"} onClick={setLogout}>LOG OUT</Link>
        </div>
        <div>
            Enter the City Name: <input type="text" name="city">Example: - Hyderabad</input>
            <button type="submit">Submit</button>
        </div>
        </>
    )
}