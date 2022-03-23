import React, { useState } from 'react'
import ButtonOrder from '../components/ButtonOrder';
import SummaryToCreate from '../components/SummaryToCreate';
import OrderConfirm from '../components/OrderConfirm';
import "../assets/table.css"
import shirt from "../images/shirt.jpg"
import washingIcon from "../images/washing-machine.svg"
import washingIconBlue from "../images/washing-machineblue.svg"
import bleachIcon from "../images/bleach.svg"
import bleachIconBlue from "../images/bleachblue.svg"
import ironingIcon from "../images/ironing.svg"
import ironingIconBlue from "../images/ironingblue.svg"
import drywashIcon from "../images/towel.svg"
import drywashIconBlue from "../images/towelblue.png"
import tshirt from "../images/tshirt.jpg"
import jeans from "../images/jeans.jpg"
import trousers from "../images/trousers.jpg"
import boxers from "../images/boxers.jpg"
import others from "../images/others.jpg"
import joggers from "../images/joggers.jpg"


export default function Table() {
    const [isSummaryOpen, setIsSummaryOpen] = useState(false);
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
    const [order, setOrder] = useState({})

    let washing = washingIcon
    let ironing = ironingIcon
    let dryWashing = drywashIcon
    let chemicalWashing = bleachIcon

    const toggleSummaryPopup = () => {
        setIsSummaryOpen(!isSummaryOpen);
    }

    const toggleConfirmationPopup = () => {
        setIsConfirmationOpen(!isConfirmationOpen);
    }

    const [wash, setWash] = useState({
        shirt: 0, tshirt: 0, trousers: 0, jeans: 0, boxers: 0, joggers: 0, others: 0
    })
    const [quantity, setQuantity] = useState({
        shirt: 0, tshirt: 0, trousers: 0, jeans: 0, boxers: 0, joggers: 0, others: 0
    })
    var name, value, prev
    const Value = (e) => {
        name = e.target.name
        value = e.target.value
        setQuantity({ ...quantity, [name]: Number(value) + Number(1) })
    }
    const Reset = (e) => {
        name = e.target.name
        setQuantity({ ...quantity, [name]: 0 })
    }
    const Total = (e) => {
        value = e.target.value
        name = e.target.name
        prev = wash[name]
        console.log(prev, name)
        setWash({ ...wash, [name]: Number(prev) + Number(value) })
    }
    return (
        <div>
            <div className='create__container'>
                <table className='create__table'>
                    <thead>
                        <tr>
                            <th>Product Type</th>
                            <th>Quantity</th>
                            <th>Washtype</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className='title'>
                                    <img className="product__img" src={shirt} alt="shirt" />
                                    <div className='product__about'>
                                        <p className='product__title'>Shirt</p>
                                        <p className='product__subtitle'>Lorem Ipsum is simply dummy text of the</p>
                                    </div>
                                </div>
                            </td>
                            <td><button className="quantity__button" name="shirt" value={quantity.shirt} onClick={Value}>{quantity.shirt}</button></td>
                            <td>
                                <button value="20" name="shirt" onClick={Total} className="wash__button"><img src={washing} className='washing__icon  wash__image' alt="washing" /></button>
                                <button name="shirt" value="15" className="wash__button"><img src={ironing} className='ironing__icon wash__image' alt="ironing" /></button>
                                <button value="10" name="shirt" className="wash__button"><img src={dryWashing} className='dryyWash__icon  wash__image' alt="dry-washing" /></button>
                                <button value="25" name="shirt" className="wash__button"><img src={chemicalWashing} className='chemicalWashing__icon  wash__image' alt="chemical-washing" /></button>
                            </td>
                            <td>{wash.shirt * quantity.shirt}</td>
                            <td><button name="shirt" onClick={Reset} className = "reset__button">Reset</button></td>
                        </tr>
                        <tr>
                            <td>
                                <div className='title'>
                                    <img className="product__img" src={tshirt} alt="tshirt" />
                                    <div className='product__about'>
                                        <p className='product__title'>T-Shirt</p>
                                        <p className='product__subtitle'>Lorem Ipsum is simply dummy text of the</p>
                                    </div>
                                </div>
                            </td>
                            <td><button className="quantity__button" name="tshirt" value={quantity.tshirt} onClick={Value}>{quantity.tshirt}</button></td>
                            <td>
                                <button value="20" name="tshirt" onClick={Total} className="wash__button"><img src={washing} className='washing__icon  wash__image' alt="washing" /></button>
                                <button name="tshirt" value="15" onClick={Total} className="wash__button"><img src={ironing} className='ironing__icon wash__image' alt="ironing" /></button>
                                <button value="10" name="tshirt" onClick={Total} className="wash__button"><img src={dryWashing} className='dryyWash__icon  wash__image' alt="dry-washing" /></button>
                                <button value="25" name="tshirt" onClick={Total} className="wash__button"><img src={chemicalWashing} className='chemicalWashing__icon  wash__image' alt="chemical-washing" /></button>
                            </td>
                            <td>{wash.tshirt * quantity.tshirt}</td>
                            <td><button name="tshirt" onClick={Reset} className = "reset__button">Reset</button></td>
                        </tr>
                        <tr>
                            <td>
                                <div className='title'>
                                    <img className="product__img" src={trousers} alt="trousers" />
                                    <div className='product__about'>
                                        <p className='product__title'>Trousers</p>
                                        <p className='product__subtitle'>Lorem Ipsum is simply dummy text of the</p>
                                    </div>
                                </div>
                            </td>
                            <td><button className="quantity__button" name="trousers" value={quantity.trousers} onClick={Value}>{quantity.trousers}</button></td>
                            <td>
                                <button value="20" name="trousers" onClick={Total} className="wash__button"><img src={washing} className='washing__icon  wash__image' alt="washing" /></button>
                                <button name="trousers" value="15" onClick={Total} className="wash__button"><img src={ironing} className='ironing__icon wash__image' alt="ironing" /></button>
                                <button value="10" name="trousers" onClick={Total} className="wash__button"><img src={dryWashing} className='dryyWash__icon  wash__image' alt="dry-washing" /></button>
                                <button value="25" name="trousers" onClick={Total} className="wash__button"><img src={chemicalWashing} className='chemicalWashing__icon  wash__image' alt="chemical-washing" /></button>
                            </td>
                            <td>{wash.trousers * quantity.trousers}</td>
                            <td><button name="trousers" onClick={Reset} className = "reset__button">Reset</button></td>
                        </tr>
                        <tr>
                            <td>
                                <div className='title'>
                                    <img className="product__img" src={jeans} alt="jeans" />
                                    <div className='product__about'>
                                        <p className='product__title'>Jeans</p>
                                        <p className='product__subtitle'>Lorem Ipsum is simply dummy text of the</p>
                                    </div>
                                </div>
                            </td>
                            <td><button className="quantity__button" name="jeans" value={quantity.jeans} onClick={Value}>{quantity.jeans}</button></td>
                            <td>
                                <button name="jeans" value="20" onClick={Total} className="wash__button"><img src={washing} className='washing__icon  wash__image' alt="washing" /></button>
                                <button name="jeans" value="15" onClick={Total} className="wash__button"><img src={ironing} className='ironing__icon wash__image' alt="ironing" /></button>
                                <button value="10" name="jeans" onClick={Total} className="wash__button"><img src={dryWashing} className='dryyWash__icon  wash__image' alt="dry-washing" /></button>
                                <button value="25" name="jeans" onClick={Total} className="wash__button"><img src={chemicalWashing} className='chemicalWashing__icon  wash__image' alt="chemical-washing" /></button>
                            </td>
                            <td>{wash.jeans * quantity.jeans}</td>
                            <td><button name="jeans" onClick={Reset} className = "reset__button">Reset</button></td>
                        </tr>
                        <tr>
                            <td>
                                <div className='title'>
                                    <img className="product__img" src={boxers} alt="boxers" />
                                    <div className='product__about'>
                                        <p className='product__title'>Boxers</p>
                                        <p className='product__subtitle'>Lorem Ipsum is simply dummy text of the</p>
                                    </div>
                                </div>
                            </td>
                            <td><button className="quantity__button" name="boxers" value={quantity.boxers} onClick={Value}>{quantity.boxers}</button></td>
                            <td>
                                <button name="boxers" value="20" onClick={Total} className="wash__button"><img src={washing} className='washing__icon  wash__image' alt="washing" /></button>
                                <button name="boxers" value="15" onClick={Total} className="wash__button"><img src={ironing} className='ironing__icon wash__image' alt="ironing" /></button>
                                <button value="10" name="boxers" onClick={Total} className="wash__button"><img src={dryWashing} className='dryyWash__icon  wash__image' alt="dry-washing" /></button>
                                <button value="25" name="boxers" onClick={Total} className="wash__button"><img src={chemicalWashing} className='chemicalWashing__icon  wash__image' alt="chemical-washing" /></button>
                            </td>
                            <td>{wash.boxers * quantity.boxers}</td>
                            <td><button name="boxers" onClick={Reset} className = "reset__button">Reset</button></td>
                        </tr>
                        <tr>
                            <td>
                                <div className='title'>
                                    <img className="product__img" src={joggers} alt="joggers" />
                                    <div className='product__about'>
                                        <p className='product__title'>Joggers</p>
                                        <p className='product__subtitle'>Lorem Ipsum is simply dummy text of the</p>
                                    </div>
                                </div>
                            </td>
                            <td><button className="quantity__button" name="joggers" value={quantity.joggers} onClick={Value}>{quantity.joggers}</button></td>
                            <td>
                                <button name="joggers" value="20" onClick={Total} className="wash__button"><img src={washing} className='washing__icon  wash__image' alt="washing" /></button>
                                <button name="joggers" value="15" onClick={Total} className="wash__button"><img src={ironing} className='ironing__icon wash__image' alt="ironing" /></button>
                                <button value="10" name="joggers" onClick={Total} className="wash__button"><img src={dryWashing} className='dryyWash__icon  wash__image' alt="dry-washing" /></button>
                                <button value="25" name="joggers" onClick={Total} className="wash__button"><img src={chemicalWashing} className='chemicalWashing__icon  wash__image' alt="chemical-washing" /></button>
                            </td>
                            <td>{wash.joggers * quantity.joggers}</td>
                            <td><button name="joggers" onClick={Reset} className = "reset__button">Reset</button></td>
                        </tr>
                        <tr>
                            <td>
                                <div className='title'>
                                    <img className="product__img" src={others} alt="others" />
                                    <div className='product__about'>
                                        <p className='product__title'>Others</p>
                                        <p className='product__subtitle'>Lorem Ipsum is simply dummy text of the</p>
                                    </div>
                                </div>
                            </td>
                            <td><button className="quantity__button" name="others" value={quantity.others} onClick={Value}>{quantity.others}</button></td>
                            <td>
                                <button name="others" value="20" onClick={Total} className="wash__button"><img src={washing} className='washing__icon  wash__image' alt="washing" /></button>
                                <button name="others" value="15" onClick={Total} className="wash__button"><img src={ironing} className='ironing__icon wash__image' alt="ironing" /></button>
                                <button value="10" name="others" onClick={Total} className="wash__button"><img src={dryWashing} className='dryyWash__icon  wash__image' alt="dry-washing" /></button>
                                <button value="25" name="others" onClick={Total} className="wash__button"><img src={chemicalWashing} className='chemicalWashing__icon  wash__image' alt="chemical-washing" /></button>
                            </td>
                            <td>{wash.others * quantity.others}</td>
                            <td><button name="others" onClick={Reset} className = "reset__button">Reset</button></td>
                        </tr>
                    </tbody>
                </table>
                <div className='create__buttons'>
                    <ButtonOrder bg="white" color="#5861AE" content="cancel"></ButtonOrder>
                    <div onClick={toggleSummaryPopup}>
                        <ButtonOrder bg="#5861AE" color="white" content="proceed"></ButtonOrder>
                    </div>
                    {isSummaryOpen && <SummaryToCreate order={order} handleConfirmationPopup={toggleConfirmationPopup} handleSummaryClose={toggleSummaryPopup} />}
                    {isConfirmationOpen && <OrderConfirm handleConfirmationPopup={toggleConfirmationPopup} />}
                </div>
            </div>

        </div>
    )
}