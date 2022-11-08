import "../static/stylesheets/login.css";
import {useState} from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import { CustHome } from "./CustHome";
import { OwnerHome } from "./OwnerHome";
import { AdminHome } from "./AdminHome";
import {Link} from "react-router-dom";
import { Landingpage } from "./Landingpage";
import axios from "axios";

export const Login = () => {

	const navigate = useNavigate();

	const setCust = () => {
        window.localStorage.setItem("homeredirection","customer");
    }
    const setOwner = () => {
        window.localStorage.setItem("homeredirection","owner");
    }
    const setAdmin = () => {
        window.localStorage.setItem("homeredirection","admin");
    }

	const [credentials, setCredentials] = useState({
		email:"",
		password:""
	});

	const register = async() => {
		try {
			const result = await axios.post("http://localhost:2300/crs/api/v1/register",credentials);
			if(result.status == 200) {
				window.alert("Registration successful");
				window.localStorage.setItem("email",credentials.email); 
				const state = window.localStorage.getItem("homeredirection");
				if(state === "customer")
					navigate('/custdashboard')
				else if(state === "owner")
					navigate("/ownerdashboard")
				else if(state === "admin")
					navigate("/admindashboard")
			}
			else {
				window.alert("Registration unsuccessful, please try with different credentails");
				console.log(result.status);
			}
		}
		catch(error) {
			if(error.response.status == 400) {
				console.log(error.response);
				window.alert("Registration unsuccessful, Please try with different credentails");
			}
			
		}
	}

	const login = async() => {

		let found=0;
		console.log("In login function");

		await axios.get("http://localhost:2300/crs/api/v1/login")
		.then((allUsers) => {
			
			const data = allUsers.data;
			console.log(data);

			data.map((eachUser) => {
				if(found!==1) {
					if(eachUser.email === credentials.email && eachUser.password === credentials.password) {
						found=1;
					}
					else {
						found=0;
					}
				}
			});
			if(found === 1) {
				
				console.log(credentials.email);

				window.localStorage.setItem("email",credentials.email); 
				window.localStorage.setItem("isLoggedIn",true); 
				
				const state = window.localStorage.getItem("homeredirection");
					if(state === "customer")
						navigate('/custdashboard')
					else if(state === "owner")
						navigate("/ownerdashboard")
					else if(state === "admin")
						navigate("/admindashboard")
			}
			else   {
				window.localStorage.setItem("userEmail","");
				window.localStorage.setItem("isLoggedIn",false);   
				window.alert("InValid credentails"); 
			}
		})
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

			<div className="signup">
					<label htmlFor="chk" aria-hidden="true">Sign up</label>
					<input type="email" name="email" placeholder="Email" required=""
					onChange={(e) => setCredentials({...credentials, email:e.target.value})}
					/>
					
					<input type="password" name="pswd" placeholder="Password" required=""
					onChange={(e) => setCredentials({...credentials, password:e.target.value})}
					/>

					<button type="submit" onClick={register}>Sign up</button>
			</div>

			<div className="login">
					<label htmlFor="chk" aria-hidden="true">Login</label>
					<input type="email" className={"email"} name="email" placeholder="Email" required=""
					onChange={(e) => setCredentials({...credentials, email:e.target.value})}
					/>
					<input type="password" name="pswd" placeholder="Password" required=""
					onChange={(e) => setCredentials({...credentials, password:e.target.value})}/>
					
					<button type="submit" onClick={login}>Login</button>
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