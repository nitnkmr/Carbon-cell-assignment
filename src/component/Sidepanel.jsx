import React,{useState} from 'react'
import "./Sidepane.css"

import { FaBars } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { BiHomeAlt } from "react-icons/bi";
import { GoOrganization } from "react-icons/go";
import { BiCube } from "react-icons/bi";
import { LuArrowDownUp } from "react-icons/lu";
import { GiSandsOfTime } from "react-icons/gi";
import { BiWallet } from "react-icons/bi";
import { BiBell } from "react-icons/bi";
import {NavLink } from "react-router-dom";
import logo from "../assets/logo2.png"
import miniProfile from "../assets/mini_profile.png"

const Sidepanel = ({getState}) => {
    const [hideSideBar, setHideSideBar] = useState(false)
    function handleSideBar(){
    setHideSideBar(!hideSideBar);
    getState(hideSideBar)
    console.log("bar clicked")
    }
    return (
        <div className='sidepanel'>
            <div className="sidepanel-top">
                <div className="bar">
                    <img src={logo} alt="carbon cell" />
                    <FaBars onClick={handleSideBar}/>
                </div>
                <div className="search"><BiSearch /><input type="search" id='search' placeholder='Search' /></div>
            </div>
            <div className="side-center">
                <div className='card'>
                    <BiHomeAlt /> <div className="div">
                        <NavLink  to="/" style={({ isActive }) => 
                      (isActive ? {color: '#28a828'} : {color:"white"})}>Home</NavLink>
                    </div>
                </div>
                <div className='card'>
                    <GoOrganization /> <div className="div">
                        <NavLink to="organization" style={({ isActive }) => 
                      (isActive ? {color: '#28a828'} : {color:"white"})}>Organization</NavLink>
                         
                    </div>
                </div>
                <div className='card'>
                    <BiCube /> <div className="div">
                        <NavLink  to="assets" style={({ isActive }) => 
                      (isActive ? {color: '#28a828'} : {color:"white"})}>Assets</NavLink>
                        
                        
                    </div>
                </div>
                <div className='card'>
                    <LuArrowDownUp /> <div className="div">
                        <NavLink to="trade" style={({ isActive }) => 
                      (isActive ? {color: '#28a828'} : {color:"white"})}>Trade</NavLink>
                        
                    </div>
                </div>
                <div className='card'>
                    <GiSandsOfTime /> <div className="div">
                        <NavLink  to="history" style={({ isActive }) => 
                      (isActive ? {color: '#28a828'} : {color:"white"})}>History</NavLink>
                        
                    </div>
                </div>
                <div className='card'>
                    <BiWallet /> <div className="div">
                        <NavLink  to="wallet" style={({ isActive }) => 
                      (isActive ? {color: '#28a828'} : {color:"white"})}>Wallet</NavLink>
                        
                    </div>
                </div>
            </div>
            <div className="footer">
                <ul>
                    <li><BiBell /><span className='span'>sp</span>
                        <NavLink  to="notification" style={({ isActive }) => 
                      (isActive ? {color: '#28a828'} : {color:"white"})}>Notification</NavLink>
                     
                     </li>
                    <li><BiHelpCircle /><span className='span'>sp</span>
                        <NavLink  to="support" style={({ isActive }) => 
                      (isActive ? {color: '#28a828'} : {color:"white"})}>Support</NavLink>
                    
                    </li>
                    <li><AiFillSetting />< span className='span'>sp</span>
                        <NavLink  to="setting" style={({ isActive }) => 
                      (isActive ? {color: '#28a828'} : {color:"white"})}>Settings</NavLink>
                    
                    </li>
                </ul>
                <div className="sidepanel-profile">
                        <img src={miniProfile} alt="" />
                    <div className="user-details">
                        <h4>Brooklyn Simmons</h4>
                        <p>brooklyn@simmons.con</p>
                    </div >
                    <BsThreeDotsVertical/>

                </div>
            </div>
          
        </div>
    )
}

export default Sidepanel