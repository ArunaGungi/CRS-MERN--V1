import { Link, useNavigate } from "react-router-dom";
import "../static/stylesheets/ownerviewcars.css";
import "../static/stylesheets/confirmrent.css";
import axios from "axios";
import { useEffect, useState } from "react";

export const ApproveCar = () => {

    const navigate = useNavigate();

    const setLogout = () => {
        window.localStorage.setItem("isLoggedIn",false); 
        navigate("/");
    }

    const [rentData, setRentData] =  useState([]);

    const owneremail = window.localStorage.getItem("email");

    useEffect(() => {
        axios.get(`http://localhost:2300/crs/api/v1/getRentData?owneremail=${owneremail}`)
        .then((result) => setRentData(result.data))
    },[])

    const approveCar = async(_id, carname, useremail) => {
        await axios.put(`http://localhost:2300/crs/api/v1/updateStatus/${_id}`,{status:"approved"})
        .then((result) => console.log(result));
        setTimeout(() =>  {
            sendStatusEmail(carname, useremail);
        },3000);
        window.location.reload(false);
    }
    const rejectCar = async(_id, carname, useremail) => {
        await axios.put(`http://localhost:2300/crs/api/v1/updateStatus/${_id}`,{status:"rejected"})
        .then((result) => console.log(result));
        setTimeout(() =>  {
            sendStatusEmail(carname, useremail);
        },3000);
        window.location.reload(false);
    }

    console.log(rentData);

    const sendStatusEmail = async(carname, useremail) => {

        const body = {
            name:carname,
            useremail:useremail
        }
        console.log(body);

        try {
            const result = await axios.post("http://localhost:2300/crs/api/v1/sendStatusEmail",body);
            console.log(result);

        }
        catch(error) {
            console.log(error);
        }
    }


    const handleApproval = (_id,name,email) => {
        approveCar(_id,name,email);
    }
    const handleRejection = (_id,name,email) => {
        rejectCar(_id,name,email);
    }
    
    const [emailBody, setEmailBody] = useState({
        carName:"",
        userEmail:""
    });
    //{() => setEmailBody({...emailBody, carName:res.carname, userEmail:res.useremail})}

    return (
        <>
        <div className={"topnav"}>
			<Link to="/ownerdashboard" className={"rentx"}>RentX</Link>
			<Link to="/approvecar" className={"history"}>VIEW APPROVAL/REJECT STATUS</Link>
			<Link to="/addcars" className={"status"}>ADD CARS</Link>
			<Link to="/viewcars" className={"contact"}>VIEW ADDED CARS</Link>
			<Link to="/" className={"logout"} onClick={setLogout}>LOG OUT</Link>
		</div>

        <table id="cars">
            <tr>
                <th>Vehicle Name</th>
                <th>Rent Duration</th>
                <th>Total Price</th>
                <th>User Email ID</th>
                <th>Status</th>

            </tr>
            <tbody>
            {rentData.map((res, key) => (
                <tr key={key}>
                    <td>{res.carname}</td>
                    <td>{res.rentduration}days</td>
                    <td>{res.totalprice}$</td>
                    <td >{res.useremail}</td>
                    <td>
                    <button onClick={() => handleApproval(res._id, res.carname, res.useremail)} className={"approval"}>
                    {res.status === "approved" ? "Approved" : "Pending Approval"}</button>                    
                    <br></br><br></br>
                    
                    <button 
                    onClick={() => handleRejection(res._id, res.carname, res.useremail)} className={"rejection"}
                    >
                    {res.status === "rejected" ? "Rejected" : "Pending Rejection"}</button>                    
                    </td>
                
                </tr>
            ))}
            </tbody> 
        </table>
        </>
    )
}
