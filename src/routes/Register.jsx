import React, { useState } from 'react'
import '../assets/register.css'
import Header from '../components/Header'
import Refer from '../components/ReferFooter'
import ButtonReg from '../components/ButtonOrder'
import axios from 'axios'
import { Link,useHistory } from 'react-router-dom'

export default function Register(){
    let history = useHistory()
    const [user,setUser] = useState({
        name:"",email:"",phone:"",state:"",district:"",address:"",pincode:"",password:""
    })
    let valname,value
    const handleInputs = (e)=>{
        valname = e.target.name
        value = e.target.value
        setUser({...user,[valname]:value})
    }
    const Submit = async(e)=>{
        e.preventDefault()
        var {name,email,phone,state,district,address,pincode,password} = user
        console.log(user)
        axios.post("http://localhost:5000/register",{name,email,phone,state,district,address,pincode,password},{
            headers:{
                "Content-Type":"application/json"
            }
        }).then((res)=>{
            console.log(res)
            if(res.status === 200){
                history.push('./signin')
            }
        }).catch(error=>{
            window.alert("Invalid User Details or User Already Existed")
        })
    }

    return(
        <div>
            {/* <Header isLoggedin="false"></Header> */}
            <div className='register_main'>
                <div className='register_left'>
                    <div className='register_top'>
                        <h1 className='h-tag'>Laundry Service</h1>
                        <p className='p-tag'>Doorstep Wash & Dryclean Service</p>
                    </div>
                    <div className='register_bottom'>
                        <p className='p-tag'>Already have an account?</p>
                        <Link to='/signin'><ButtonReg content="Sign In"></ButtonReg></Link>
                    </div>
                </div>
                <div className='register_middle'></div>
                <div className='register_right'>
                    <h2>REGISTER</h2>
                    <form className='register_form' onSubmit={Submit}>
                        <div className='register_form_top'>
                            
                    <div className='register_name'>
                            <label>Name</label><br></br>
                            <input type='text' name="name" value={user.name} onChange={handleInputs}></input><br></br>
                        </div>
                    <div className='register_email'>
                            <label>Email</label><br></br>
                            <input type='text' name="email" value={user.email} onChange={handleInputs}></input><br></br>
                        </div>
                      <div className='register_mobile'>
                            <label>Phone</label><br></br>
                            <input type='text' name="phone" value={user.phone} onChange={handleInputs}></input><br></br>
                        </div>
                        <div className='register_state'>
                            <label>State</label><br></br>
                            <input type='text' name="state" value={user.state} onChange={handleInputs}></input><br></br>
                        </div>
                        <div className='register_district'>
                            <label>District</label><br></br>
                            <input type='text' name="district" value={user.district} onChange={handleInputs}></input><br></br>
                        </div>
                        <div className='register_address'>
                            <label>Address</label><br></br>
                            <input type='text' name="address" value={user.address} onChange={handleInputs}></input><br></br>
                        </div>
                        <div className='register_pincode'>
                            <label>Pincode</label><br></br>
                            <input type='text' name="pincode" value={user.pincode} onChange={handleInputs}></input><br></br>
                        </div>
                        <div className='register_password'>
                            <label>Password</label><br></br>
                            <input type='password' name='password' value={user.password} onChange={handleInputs}></input><br></br>
                        </div>
                        </div>
                        <div className='register_checkbox_button'>
                        <div className='register_checkbox'>
                            <input type='checkbox' required></input>
                            <a href='#'>I agree to Terms and Condition receiving marketing and promotional materials</a><br></br>
                        </div>
                        <div className='register_button'>
                            <ButtonReg content="Register"></ButtonReg>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
            <Refer></Refer>
        </div>
    )
}