import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { CardItem } from './CardItem'
import storeItems from "../data/items.json"
import formatCurrency from '../utilities/formatCurrency'
type ShoppingCartProps = {
    isOpen: boolean
}
export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { CloseCart, cartItems } = useShoppingCart()
    const totalPrice = cartItems.reduce((total, item) => {
        const price = storeItems.find(i => i.id === item.id)?.price || 0
        return price != 0 ? total + item.quantity * price : total
    }, 0)
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
            </Offcanvas.Body>
        </Offcanvas>
    )
}
