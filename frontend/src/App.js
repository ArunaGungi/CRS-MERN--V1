import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AddCars } from './components/AddCars';
import { AdminHome } from './components/AdminHome';
import { AdminLogin } from './components/AdminLogin';
import { AdminViewCars } from './components/AdminViewCars';
import { ApproveCar } from './components/ApproveCar';
import { ConfirmedCust } from './components/ConfirmedCust';
import { ConfirmRent } from './components/ConfirmRent';
import ContactOwner from './components/ContactOwner';
import { CustHome } from './components/CustHome';
import { Landingpage } from './components/Landingpage';
import { Login } from './components/Login';
import { OwnerHome } from './components/OwnerHome';
import { OwnerViewCars } from './components/OwnerViewCars';
import { RentCar } from './components/RentCar';
import { ViewAllOwners } from './components/ViewAllOwners';
import { ViewAllUsers } from './components/ViewAllUsers';
import {ViewRentedCar} from "./components/ViewRentedCar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage/>}></Route>
          <Route path="/login/*" element={<Login/>}></Route>
          <Route path="/custdashboard/*" element={<CustHome/>}></Route>
          <Route path="/ownerdashboard/*" element={<OwnerHome/>}></Route>
          <Route path="/admindashboard" element={<AdminHome/>}></Route>
          <Route path="/addcars/*" element={<AddCars/>}></Route>
          <Route path="/viewcars" element={<OwnerViewCars/>}></Route>
          <Route path="/rentcar/*" element={<RentCar/>}></Route>
          <Route path="/confirmrent" element={<ConfirmRent/>}></Route>
          <Route path="/confirmedcust" element={<ConfirmedCust/>}></Route>
          <Route path="/viewrentedcar" element={<ViewRentedCar/>}></Route>
          <Route path="/approvecar" element={<ApproveCar/>}></Route>
          <Route path="/adminlogin" element={<AdminLogin/>}></Route>
          <Route path="/admindashboard" element={<AdminHome/>}></Route>
          <Route path="/adminviewcars" element={<AdminViewCars/>}></Route>
          <Route path="/viewallusers" element={<ViewAllUsers/>}></Route>
          <Route path="/viewallowners" element={<ViewAllOwners/>}></Route>
          <Route path="/contactOwner" element={<ContactOwner/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
