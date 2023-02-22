import React from 'react'
import { Card, Button } from "react-bootstrap"
import { useShoppingCart } from '../context/ShoppingCartContext'
import formatCurrency from '../utilities/formatCurrency'
import { FaShoppingCart } from 'react-icons/fa';
import { useDarkMode } from '../context/DarkModeContext';

type Product = {
    id: number,
    name: string,
    price: number,
    imgUrl: string

}
const StoreItem = ({ id, name, price, imgUrl }: Product) => {
    const { Dark } = useDarkMode()
    const { getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeFromCart, addToCart } = useShoppingCart()
    const quantity: number = getItemQuantity(id);
    return (
        <Card className={'h-100 ' + (Dark === true && 'bg-black text-white')} style={{ boxShadow: (Dark === true ? "0px 0px 22px grey" : "") }}>
            <Card.Img variant="top" src={imgUrl} height="200px" style={{ objectFit: "cover" }} />
            <Card.Body className="d-flex flex-column" >
                <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                    <span className="fs-4">{name}</span>
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button className='w-100 d-flex align-items-center justify-content-center' variant="success" onClick={() => addToCart(id)}>Add to cart <FaShoppingCart /></Button>
                    ) : <div className='d-flex align-items-center flex-column' style={{ gap: ".5rem" }}>
                        <div className='d-flex align-items-center justify-content-center' style={{ gap: ".5rem" }}>
                            <Button style={{ width: "30px", height: "30px" }} className='d-flex align-items-center justify-content-center rounded-circle' variant="outline-success" onClick={() => decreaseItemQuantity(id)}>-</Button>
                            <div>
                                <span className="fs-4" >{quantity}</span>
                            </div>
                            <Button style={{ width: "30px", height: "30px" }} className='d-flex align-items-center justify-content-center rounded-circle ' variant="outline-success" onClick={() => increaseItemQuantity(id)}>+</Button>

                        </div>
                        <Button variant='danger' onClick={() => removeFromCart(id)}>Remove</Button>
                    </div>}
                </div>
            </Card.Body>
        </Card >
    )
}

export default StoreItem