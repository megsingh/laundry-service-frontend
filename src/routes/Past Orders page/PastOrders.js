import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import axios from "axios"

import NoOrders from "./NoOrders"
import Search from '../../components/Search'
import TableComponent from './TableComponent'
import ButtonOrder from '../../components/ButtonOrder'
import Header from '../../components/Header';
import Footer from '../../components/footer';
import SideNavbar from '../../components/SideNavbar';

import "../../App.css"
import "../../assets/pastOrder.css"


function PastOrders() {
    const [orders, setOrders] = useState([])
    const [orderCount, setOrderCount] = useState(0)
    const history = useHistory()

    const handleCreateButton = () => {
        history.push("/create")
    }
    // const token = localStorage.getItem("token")
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjIzNzU0NmUxYWYyYTA5NDZhMzFmMDJhIiwiaWF0IjoxNjQ3NzkzMjY2LCJleHAiOjE2NDgzOTgwNjZ9.gQRci9zeR7PSo5ZNTIYAAgCll4jqh49qMjZ5KjRAwiA"
    useEffect(() => {

        axios.get(`http://localhost:5000/orders`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(res => {

            setOrders(res.data.orders)
            setOrderCount(res.data.orders.length)
        })
    })

    let ChildComponent


    if (orderCount === 0) {
        ChildComponent = (
            <NoOrders />

        )
    } else {
        ChildComponent = (

            <div className='past__orders container'>

                <div className="orderpage__heading">
                    <div className='order__count'>
                        <label>Orders | {orderCount}</label>
                    </div>
                    <div onClick={handleCreateButton} className='button'>
                        <ButtonOrder bg="#5861AE" color="whitesmoke" content="Create" />
                    </div>
                    <div className="search">
                        <Search></Search>
                    </div>
                </div>
                <TableComponent orders={orders} />


            </div>
        )
    }


    return (
        <div>
            <div className="header">
                <Header />
            </div>
            <div className='sidebar__orders'>
                <SideNavbar />
            </div>
            <div>
                {console.log("past orders component rendering")}
                {ChildComponent}
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>



    )
}

export default React.memo(PastOrders)