import React, { useState } from 'react'
import ButtonOrder from '../components/ButtonOrder';
import SummaryToCreate from '../components/SummaryToCreate';
import OrderConfirm from '../components/OrderConfirm';
import Search from '../components/Search';
import "../assets/pastOrder.css"
import "../assets/create.css"

function Create() {
    const [isSummaryOpen, setIsSummaryOpen] = useState(false);
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

    const toggleSummaryPopup = () => {
        setIsSummaryOpen(!isSummaryOpen);
    }

    const toggleConfirmationPopup = () => {
        setIsConfirmationOpen(!isConfirmationOpen);
    }

    const order = {
        status: "Ready to Pickup",
        products: [
            {
                productType: "boxers",
                quantity: 6,
                washing: true,
                ironing: true,
                drywash: true,
                chemicalwash: true,
            },
            {
                productType: "shirt",
                quantity: 2,
                washing: false,
                ironing: false,
                drywash: true,
                chemicalwash: false,
            }
        ],
        totalPrice: 230,
        totalQuantity: 6
    }

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
                <div className='create__table'>

                </div>
            </div>
            <div className='create__buttons'>
            <ButtonOrder bg="white" color="#5861AE" content="cancel"></ButtonOrder>
            <div onClick={toggleSummaryPopup}>
                <ButtonOrder bg="#5861AE" color="white" content="proceed"></ButtonOrder>
            </div>
            </div>

            {isSummaryOpen && <SummaryToCreate order={order} handleConfirmationPopup={toggleConfirmationPopup} handleSummaryClose={toggleSummaryPopup} />}
            {isConfirmationOpen && <OrderConfirm handleConfirmationPopup={toggleConfirmationPopup} />}
        </div>
    )
}

export default Create