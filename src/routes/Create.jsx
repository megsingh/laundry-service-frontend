import React, { useState } from 'react'
import Search from '../components/Search';
import Table from "../components/Table"
import Header from '../components/Header';
import Footer from '../components/footer';
import SideNavbar from '../components/SideNavbar';

import "../App.css"
import "../assets/pastOrder.css"
import "../assets/create.css"

function Create() {

    return (
        <div>
            <div className="header">
                <Header />
            </div>
            <div className='sidebar__create'>
                <SideNavbar />
            </div>
            <div className="createOrder">
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
                        <Table />
                    </div>

                </div>


            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>

    )
}

export default Create