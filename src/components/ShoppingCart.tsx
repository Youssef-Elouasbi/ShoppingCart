import React from 'react'
import { Button, Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { CardItem } from './CardItem'
import storeItems from "../data/items.json"
import formatCurrency from '../utilities/formatCurrency'
import { MdPayments } from 'react-icons/md'
type ShoppingCartProps = {
    isOpen: boolean
}
export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { CloseCart, cartItems } = useShoppingCart()
    const totalPrice = cartItems.reduce((total, item) => {
        const price = storeItems.find(i => i.id === item.id)?.price || 0
        return price != 0 ? total + item.quantity * price : total
    }, 0)

    const checkout = async () => {
        // http://localhost:4000/checkout
        await fetch('https://backend-shoppingcart.onrender.com/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ items: cartItems })
        }).then((res) => {
            return res.json()
        }).then((res) => {
            res?.url && window.location.assign(res.url)
        })
    }
    return (
        <Offcanvas show={isOpen} onHide={CloseCart} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {
                        cartItems.map((item) => {
                            return <CardItem key={item.id} {...item} />
                        })
                    }
                    <div className='ms-auto fw-bold fs-5'>
                        Total : {formatCurrency(totalPrice)}
                    </div>
                </Stack>
                {
                    cartItems.length != 0 &&
                    <Button size="sm" className='w-100 mt-2 fs-5 text-white' style={{ backgroundColor: "#9900ff", border: "1px solid #9900ff" }} onClick={checkout}>
                        Buy Now <MdPayments />

                    </Button>
                }
            </Offcanvas.Body>
        </Offcanvas>
    )
}
