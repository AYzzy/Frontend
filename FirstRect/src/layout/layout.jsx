import React from "react"
import SideBar from "../components/SideBar" 
import Footer from "../components/Footer"
import {Outlet} from "react-router-dom"
import style from "../styles/layout.module.css"

const Layout = () => {
  return(
    <>
      <NavBar/>
      <div className={style.outletContainer}>
        <SideBar/>
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default Layout