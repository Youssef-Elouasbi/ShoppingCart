import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import storeItems from "../data/items.json"
import formatCurrency from '../utilities/formatCurrency'
type CartItemProps = {
    id: number,
    quantity: number
}
export function CardItem({ id, quantity }: CartItemProps) {
    const { removeFromCart, decreaseItemQuantity, increaseItemQuantity } = useShoppingCart()
    const item = storeItems.find(item => item.id === id)
    if (item == null) return null
    return (
        <Stack direction='horizontal' gap={3} className="d-flex align-items-center">
            <img src={item.imgUrl} style={{ width: "125px", height: "75px", objectFit: "cover" }} />
            <div className="me-auto">
                <div>
                    {item.name} {quantity > 1 && <span className='text-muted' style={{ fontSize: "1rem" }}>x{quantity}</span>}
                </div>
                <div className="text-muted" style={{ fontSize: ".75rem" }}>
                    {formatCurrency(item.price)}
                </div>
            </div>

            <div>
                {formatCurrency(item.price * quantity)}
            </div>
            <div className='d-flex align-items-center justify-content-center' style={{ gap: ".5rem" }}>
                <div className='border border-success border-2 rounded-pill'>
                    <Button size='sm' style={{ width: "20px", height: "20px" }} className='d-flex align-items-center justify-content-center border-0 border-bottom border-1 rounded-0 rounded-top border-success ' variant="outline-success" onClick={() => increaseItemQuantity(id)}>+</Button>
                    <Button size='sm' style={{ width: "20px", height: "20px" }} className='d-flex align-items-center justify-content-center border-0 border-top border-1 rounded-0 rounded-bottom border-success' variant="outline-success" onClick={() => decreaseItemQuantity(id)}>-</Button>
                </div>
                <Button variant='outline-danger' size='sm' onClick={() => removeFromCart(item.id)}>
                    &times;
                </Button>
            </div>
        </Stack>

    )
}
