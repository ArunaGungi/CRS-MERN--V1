import "../static/stylesheets/login.css";
import {useState} from "react";
import axios from "axios";
import { useNavigate, Routes, Route } from "react-router-dom";
import { CustHome } from "./CustHome";
import { OwnerHome } from "./OwnerHome";
import { AdminHome } from "./AdminHome";
import {Link} from "react-router-dom";
import { Landingpage } from "./Landingpage";

export const AdminLogin = () => {

    const setCust = () => {
        window.localStorage.setItem("homeredirection","customer");
    }
    const setOwner = () => {
        window.localStorage.setItem("homeredirection","owner");
    }
    const setAdmin = () => {
        window.localStorage.setItem("homeredirection","admin");
    }

	const navigate = useNavigate();

	const [credentials, setCredentials] = useState({
		email:"",
		password:""
	});

	const login = async() => {
        if(credentials.email === "adminCRS@gmail.com" && credentials.password === "adminCRS@45") {
            navigate("/admindashboard");
        }
        else {
            window.alert("Invalid Credentails");
        }
	}
    return (
        <div>
		<div id="main1">
            <Link to="/" onClick={<Landingpage/>}>RentX</Link>
            <Link to="/login" id="ownerbtn" onClick={setOwner}>Owner Dashboard</Link>
            <Link to="/login" id="adminbtn" onClick={setCust}>Customer Dashboard</Link>
            <Link to="/login" id="customerbtn" onClick={setAdmin}>Admin Dashboard</Link>
            <Link to="/contact" id="contact">About</Link>
        </div>

        <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>


			<div className="login">
                    <div className="admlogin">
					<label htmlFor="chk" aria-hidden="true">Login</label>
					<input type="email" className={"email"} name="email" placeholder="Email" required=""
					onChange={(e) => setCredentials({...credentials, email:e.target.value})}
					/>
					<input type="password" name="pswd" placeholder="Password" required=""
					onChange={(e) => setCredentials({...credentials, password:e.target.value})}/>
					
					<button type="submit" onClick={login}>Login</button>
                </div>
			</div>
	</div>
    
	<Routes>
		<Route path="/custdashboard" element={<CustHome/>}></Route>
		<Route path="/ownerdashboard" element={<OwnerHome/>}></Route>
		<Route path="/admindashboard" element={<AdminHome/>}></Route>
	</Routes>
    </div>
	)
}