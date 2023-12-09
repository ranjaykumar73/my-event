import React from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
export const Sidebar =({setToggle,toggle})=>{
    return(
        <div className="h-[230px] w-[200px] bg-slate-500 text-slate-900 hover:opacity-90 px-10 py-3 ml-[85%] text-center">
        <IoMdClose className="text-2xl text-right bg-slate-50" onClick={()=>setToggle(!toggle)}/>
         <Link to="/login" >Login</Link><br/>
        <Link to="/">Home</Link><br/>
         <Link to="/solution" >Solution</Link><br/>
         <Link to="/pricing" >Pricing</Link><br/>
         <Link to="/customer" >Customers</Link><br/>
         <Link to="/company" >Company</Link><br/>
         <Link to="/contact" >Contact Us</Link><br/>
        
        </div>
    )
}