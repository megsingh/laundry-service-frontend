import React, { useState } from 'react'
import Search from '../components/Search';
import Table from "../components/Table"

import "../assets/pastOrder.css"
import "../assets/create.css"

function Create() {

    return (
        <div>
            <div className='past__orders container'>

                <div className="orderpage__heading">
                    <div className='order__count'>
                        <label>Create Order</label>
                    </div>
                    <div className="search">
                        <Search></Search>
                    </div>
                </div>
                <div className='table'>
                    <Table/>
                </div>

            </div>

           
        </div>
    )
}

export default Create