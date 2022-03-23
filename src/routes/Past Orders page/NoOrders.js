import React from 'react'
import ButtonOrder from '../../components/ButtonOrder'
import Search from '../../components/Search'
import { Link } from "react-router-dom"
import "../../assets/pastOrder.css"

function NoOrders() {

    return (
        <div className='past__orders container'>
            <div className="orderpage__heading">
                <div className='order__count'>
                    <label>Orders | 0</label>
                </div>
                <div className = "search">
                    <Search></Search>
                </div>
                
            </div>
            <div className='no__orders'>
            {console.log("no orders component rendering")}
                <p>No Orders available</p>
                <Link to="/create">
                <ButtonOrder bg = "whitesmoke" color ="#5861AE" content="Create"/>
            </Link>
                
                </div>
            </div>
        
    )
}

export default React.memo(NoOrders)