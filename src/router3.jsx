import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./navlink.css";
import Product from './product'
import Member from "./member";
import Home from "./home";

const Router3 = () => {
  return (
    <BrowserRouter>
      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active_menu" : "menu")}
          style={({ isActive }) => {
            return { fontWeight: isActive ? "bold" : "" };
          }}
        >
          Home
        </NavLink>
        -&nbsp;
        <NavLink
          to="/product"
          className={({ isActive }) => (isActive ? "active_menu" : "menu")}
        >
          Products
        </NavLink>{" "}
        -&nbsp;
        <NavLink
          to="/member"
          className={({ isActive }) => (isActive ? "active_menu" : "menu")}
        >
          Member
        </NavLink>{" "}
        -&nbsp;
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active_menu" : "menu")}
        >
          Contact us
        </NavLink>{" "}
        -&nbsp;
      </nav>
      <Routes style={{margin:'20px'}}>
          <Route path="/" element={<Home/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/member" element={<Member/>}/>
          <Route path="/contact" element={<div style={{textAlign:'center'}}>Contact Page</div>}/>
          <Route path="/*" element={<div style={{textAlign:'center'}}>Error 404 Not found</div>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router3;
