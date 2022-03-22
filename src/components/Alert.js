import React from 'react'
import { Redirect } from "react-router-dom"
import "../assets/alert.css"
import warning from "../images/warning.jpg"
import ButtonOrder from './ButtonOrder';
import axios from "axios"


function Alert(props) {
    console.log("alert popup");
    console.log(props.id);
    const updateStatus = () => {
    console.log("proceed clicked");
        // const token = localStorage.getItem("token")
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjIzNzU0NmUxYWYyYTA5NDZhMzFmMDJhIiwiaWF0IjoxNjQ3NzkzMjY2LCJleHAiOjE2NDgzOTgwNjZ9.gQRci9zeR7PSo5ZNTIYAAgCll4jqh49qMjZ5KjRAwiA"
        let config = {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
        let id = props.id
        
        axios.put(`http://localhost:5000/orders/${id}`, {},config)
            .then(res => {
                console.log(res);
                console.log("alert closed");
                props.handleClose();
                <Redirect to = "/orders"></Redirect>
                        })
            .catch(err => console.log(err)
            );

    }

    return (
        <div className='popup-box'>
            <div className='alert__box'>
                <div className='alert__header'>
                    Alert
                    <button className='btn__close' onClick={props.handleClose}>x</button>
                </div>

                <div className='alert__content'>
                    <div>
                        <img className='warning__icon' src={warning} alt="warning" />
                    </div>
                    <div>
                        <p className='alert__message'> Are you sure you want to cancel the
                            <br></br>
                            order No: props. OR000{props.content}
                        </p>

                        <div onClick={updateStatus}>
                        <ButtonOrder content="Proceed" bg="#5861AE" color="white" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Alert