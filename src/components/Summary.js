import React from 'react'
import "../assets/summary.css"

function Summary(props) {
    console.log("summary popup");
    console.log(props.order);
    let showButton = false
    const washType = []
    const washPrice = []
    const Price = []

    const handleCancelClick = () => {
        props.handleSummaryClose()
        props.handleAlertClose()
    }

    if (props.order.status === "Ready to Pickup") {
        showButton = true
    } else {
        showButton = false
    }

    props.order.products.forEach(product => {
        let wash = ""
        let price = 0
        //console.log(product);
        if (product.washing === true) {
            wash += "Washing  "
            price += 10
        }
        if (product.ironing === true) {
            wash += "Ironing  "
            price += 15
        }
        if (product.chemicalwash === true) {
            wash += "Chemical wash  "
            price += 10
        }
        if (product.drywash === true) {
            wash += "Dry wash  "
            price += 25
        }
        Price.push(product.quantity * price)
        washType.push(wash)
        washPrice.push(price)
    });

    // console.log("washType: ",washType);
    // console.log("washPrice: ",washPrice);
    // console.log("totalPrice: ",totalPrice);

    return (
        <div className='popup-box'>
            <div className='summary__box'>
                <div className='summary__header'>
                    Summary
                    <button className='summary__btn__close' onClick={props.handleSummaryClose}>x</button>
                </div>
                <div className='summary__storeinfo'>
                    <div className='store__detail'>
                        <h4><strong>Store Location</strong></h4>
                        <p>Jp Nagar</p>
                    </div>
                    <div className='store__detail'>
                        <h4><strong>Store Address</strong></h4>
                        <p>Near phone Booth, 10th road</p>
                    </div>
                    <div className='store__detail'>
                        <h4><strong>Phone</strong></h4>
                        <p>+91 9999999999</p>
                    </div>
                </div>
                <div className='summary__status'>
                    <div className='circle'></div>
                    <p>Picked up</p>
                    <div className='line'></div>
                    <div className='circle'></div>
                    <p>Washed</p>
                    <div className='line'></div>
                    <div className='circle'></div>
                    <p>Ironed</p>
                    <div className='line'></div>
                    <div className='circle'></div>
                    <p>Delivered</p>
                </div>
                <div className='summary__order'>
                    <h4>Order Details</h4>
                    <table className='summary__table'>
                        <tbody>
                            {props.order.products.map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <td className='product__type'>
                                            {product.productType} {props.canCancel}
                                        </td>
                                        <td className='product__washtype'>
                                            {washType[index]}
                                        </td>
                                        <td className='price__calculation'>
                                            {product.quantity} x {washPrice[index]}
                                        </td>
                                        <td className='product__price'>
                                            {Price[index]}
                                        </td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td /><td />
                                <td>Sub total:</td>
                                <td style={{ fontWeight: "bold" }}>{props.order.totalPrice}
                                </td>
                            </tr>
                            <tr>
                                <td /><td />
                                <td>Pickup Charges:</td>
                                <td style={{ fontWeight: "bold" }}>90</td>
                            </tr>
                            <tr className='product__total'><td /><td />
                                <td>
                                    Total:
                                </td>
                                <td>Rs {props.order.totalPrice + 90}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div className='summary__address'>
                    <label>Address</label>
                    <div>
                        <p className='address__title'>Home</p>
                        <p>#223, 10th road, Jp Nagar,</p>
                        <p>Bangalore</p>

                    </div>
                </div>

                <div className='summary__footer'>

                    {showButton && <button className="cancel__button" onClick={handleCancelClick}>Cancel order</button>}
                </div>

            </div>
        </div>

    )
}

export default Summary