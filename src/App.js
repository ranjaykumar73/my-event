
import { Routes,Route } from "react-router-dom";
import { Navbar } from "./Pages/navbar";
import { Home } from "./Pages/Home";
import {Solution} from "./Pages/solution";
import{Pricing} from "./Pages/pricing";
import {Customer} from "./Pages/customer";
// import Company from './Pages/company'; 
// import {Company} from "./Pages/company";
import {Contact} from "./Pages/contact";
import {Login} from "./Pages/login";
import {Signup} from "./Pages/signup";
import { OurStory } from "./Pages/ourStory";
import { Career } from "./Pages/career";


function App() {
  return (
  <div className="">
   <Navbar/>
    <Routes>
   <Route  path="/"  element={<Home/>}/> 
   <Route  path="/solution"  element={<Solution/>}/> 
   <Route  path="/pricing"  element={<Pricing/>}/> 
   <Route  path="/customer"  element={<Customer/>}/> 
   {/* <Route  path="/company"  element={<Company/>}/>  */}
   <Route path="/ourStory" element={<OurStory/>}/>
   <Route path="/career" element={<Career/>}/>
   <Route  path="/contact"  element={<Contact/>}/> 
   <Route  path="/login"  element={<Login/>}/> 
   <Route  path="/signup"  element={<Signup/>}/> 
   
    </Routes>
  </div>
  );
}

export default App;
