import React, { useState } from 'react'
import "../assets/header.css"
import jwt_decode from 'jwt-decode'
import axios from "axios"

function Header(props) {
    let text = <div>Sign In</div>
    const [userName,setUserName] = useState(null)
    if(props.isLoggedIn){
        const token = localStorage.getItem("Token")
        const userId = jwt_decode(token)
        axios.get(`http://localhost:5000/user${userId}`).then(res => {
            setUserName(res.data.user.name)
        })
        text = (
            <div className='text list__item'>
                <img className='user__img' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60' alt = "user"/>
                <p>{userName}</p>
            </div>
        )
    }
  return (
      
    <div className='header'>
        <label className='title__header'>LAUNDRY</label>
        <nav className='Navbar'>
            <div className='list__item'>
                Pricing
            </div >
            <div className='list__item'>
                Career
            </div>
            {text}
        </nav>

    </div>
  )
}

export default Header