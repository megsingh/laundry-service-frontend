import React, { useEffect, useState } from 'react'
import { useHistory,useLocation } from "react-router-dom"
import "../assets/header.css"

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(null)
    const [userName, setUserName] = useState("Sign In")
    const history = useHistory()
    const location = useLocation()
    //console.log(location);
    useEffect(() => {
        if (location.pathname === "/create" || location.pathname === "/orders"){
            setIsLoggedIn(true)
            let userData = localStorage.getItem("user")
            console.log(userData);
            setUserName(userData)
        }else{
            setIsLoggedIn(false)
            setUserName("Sign In")
            localStorage.removeItem("token")
            localStorage.removeItem("user")
        }
    },[location,isLoggedIn])

    const logout = () => {
        if (isLoggedIn){
            setIsLoggedIn(false)
        localStorage.removeItem("token") // check if token names match witht= teammates
        localStorage.removeItem("user") // check
        history.push("/")
        } 
    }


    return (

        <div className='header'>
            {console.log("inside return")}
            <label className='title__header'>LAUNDRY</label>
            <nav className='Navbar'>
                <div className='list__item'>
                    Pricing
                </div>
                <div className='list__item'>
                    Career
                </div>
                <div onClick={logout} className='user__header list__item'>
                    { isLoggedIn && <img className='user__img' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60' alt="user" /> }
                    <p>{userName}</p>
                </div>
            </nav>

        </div>
    )
}

export default Header