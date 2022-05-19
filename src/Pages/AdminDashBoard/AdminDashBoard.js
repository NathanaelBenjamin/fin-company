import React from 'react'
import styled from 'styled-components';
import './AdminDashBoard.css'
import { AdminDashBoardContainer,
    linkStyle} 
from './AdminDashBoard.css';
import {Routes, Route, Navigate, useLocation, Link} from "react-router-dom";
import { useEffect, useState } from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import Logout from './images/logout.svg';
import Menu from './images/menu.svg';
import  Dashboard  from '../Dashboard/Dashboard';
import Client from '../../components/Dashboard/Client/Client'
import Product from '../../components/Dashboard/Product/Product'
import TeamMembers from '../../components/Dashboard/Team/Team'

function AdminDashBoard () {
    // const [click, setClick]=useState(false)
    // const handleClick =()=> setClick(!click)

  const location = useLocation().pathname;
  const [path, setPath] = useState("");
  
  const openNav = () => {
      document.getElementById("sidebar").style.left = "0px";
  }
  
  const closeNav = () => {
      document.getElementById("sidebar").style.left = "-450px";
  }

  const changePathAndClose = (path) => {
      if(window.innerWidth<=992){
          closeNav()
      }
      setPath(path);
      
  }

  useEffect(()=>{
      setPath(location);
     
  }, [location])
 
  let userDetails = JSON.parse(sessionStorage.getItem("userDetails"))

  return (
    <AdminDashBoardContainer>
        <div className='sideBar' id='sidebar' 
        // onClick={handleClick} click={click}
        >
            <div className='dashBoardTop' >
                <p className='dashWelcome'>Welcome, <span className='colorYellow'>{userDetails.displayName}</span></p>
                <Link style={linkStyle} to="/dashboard">
                    <div 
                        className={path.includes("dashboard") || path==="dashboard"
                            ?"dashboardWrapperactive"
                            :"dashboardWrapper"}
                        onClick={()=>changePathAndClose("dashboard") }
                        >
                        <AiIcons.AiFillHome/>
                        <p className='dashPara'> Dashboard</p>
                    </div>
                </Link>
                <Link style={linkStyle} to="/client">
                    <div 
                        className={path.includes("client") || path==="client"
                            ?"clientContaineractive"
                            :"clientContainer"}
                        onClick={()=>changePathAndClose("client") }
                        >
                        <IoIcons.IoIosPaper/>
                        <p className='dashPara'>Our Clients</p>
                    </div>
            </Link>
            <Link style={linkStyle} to="/team">
                <div 
                    className={path.includes("team") || path==="team"
                        ?"teamsContaineractive"
                        :"teamsContainer"}
                    onClick={()=>changePathAndClose("team") }
                    >
                    <IoIcons.IoMdPeople/>
                    <p className="dashPara"> Team Members</p>
                </div>
            </Link>
            <Link style={linkStyle} to="/product">
                <div 
                    className={path.includes("product") || path==="product"
                        ?"productContaineractive"
                        :"productContainer"}
                    onClick={()=>changePathAndClose("product") }
                    >
                    <FaIcons.FaCartPlus/>
                    <p className='dashPara'> Products</p>
                </div>
            </Link>
            </div>
            <Link to ='/auth' style={linkStyle}>
                <div className='logOutWrapper'>
                    <img src={Logout} alt="icon" />
                    <p className='dashPara'>Logout</p>
                </div>
            </Link>
        </div>
        <div>
          {/* <div className='mobileIcons' onclick={handleClick}>
              {click?<FaIcons.FaTimes/> :<FaIcons.FaBars/>}
          </div> */}
            <Container>
                <div className="mobileNav">
                    <img src={Menu} alt="menu"  className="bugger" 
                        onClick={()=>openNav()}/>
                    {/* <p className="mobileHead">Managee</p>  */}
                </div>   
            </Container> 
                <div className="rooo">
                    <Routes>
                        <Route path="/" element={<Navigate to="/dashboard" />}/>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/client" element={<Client />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/team" element={<TeamMembers/>} />
                    </Routes>
                </div>
        </div>
    </AdminDashBoardContainer>
  )
}
export default AdminDashBoard

const Container=styled.div`

`