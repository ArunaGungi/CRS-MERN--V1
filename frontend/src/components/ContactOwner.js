import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../static/stylesheets/ownerviewcars.css";
import "../static/stylesheets/confirmrent.css";
import axios from "axios";
import { useEffect, useState } from "react";


const ContactOwner = ({props}) => {

    console.log("props:",props);
    const navigate = useNavigate();

    const setLogout = () => {
        window.localStorage.setItem("isLoggedIn",false); 
        navigate("/");
    }

    return (
        <>
        <div id="topnav">
			<Link to="/" className={"rentx"}>HOME</Link>
			<Link to="/viewrentedcar" className={"history"}>VIEW RENTED CARS</Link>
			<Link to="/rentcar" className={"status"}>RENT A CAR</Link>
			<Link to="/contactOwner" className={"contact"}>CONTACT OWNER</Link>
			<Link to="/" className={"logout"} onClick={setLogout}>LOG OUT</Link>
		</div>

        <br></br>
        
        <h1>Please provide your query in the below box</h1>
        <input type="text" style={{"display":"flex", "width":"550px", "height":"350px", "borderRadius":"15px"}}></input>
        <button type="submit" style={{"width":"100px"}}>Submit</button>
        
        </>

    )
}

export default ContactOwner;