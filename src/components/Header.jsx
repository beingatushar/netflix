import React from 'react'
import { Link } from "react-router-dom";
import { BsSearch, BsBell } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import logo from "../logo.svg"
const Header = () => {
    return (
        <nav>
            <img src={logo} alt="" className="logo" />
            <div>
                <Link to="/">Home</Link>
                <Link to="/">TV Shows</Link>
                <Link to="/">Movies</Link>
                <Link to="/">New & Popular</Link>
                <Link to="/">My List</Link>
                <Link to="/">Browse by Languages</Link>
            </div>
            <div>
                <BsSearch />
                <BsBell />
                <IoMdArrowDropdown />
            </div>
        </nav>
    )
}

export default Header
