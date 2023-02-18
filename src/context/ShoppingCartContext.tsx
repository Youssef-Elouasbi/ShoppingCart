import React, { createContext, ReactNode, useContext, useState } from 'react'
import { ShoppingCart } from '../components/ShoppingCart'

type ShoppingCartProviderProps = {
    children: ReactNode
}
type CartItem = {
    id: number,
    quantity: number
}
type ShoppingCartContext = {
    OpenCart: () => void
    CloseCart: () => void
    getItemQuantity: (id: number) => number
    increaseItemQuantity: (id: number) => void
    decreaseItemQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [ShoppingCartSlide, setShoppingCartSlide] = useState(false)
    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    function OpenCart() {
        setShoppingCartSlide(true)
    }
    function CloseCart() {
        setShoppingCartSlide(false)
    }

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseItemQuantity(id: number) {
        setCartItems(cartItems => {
            if (cartItems.find(item => item.id === id) == null) {
                return [...cartItems, { id, quantity: 1 }]
            } else {
                return cartItems.map(item => {
                    return item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                })
            }
        })
    }
    function decreaseItemQuantity(id: number) {
        setCartItems(cartItems => {
            if (cartItems.find(item => item.id === id)?.quantity === 1) {
                return cartItems.filter(item => item.id != id)
            } else {
                return cartItems.map(item => {
                    return item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                })
            }
        })
    }
    function removeFromCart(id: number) {
        setCartItems((cartItems) => {
            return cartItems.filter((item) => item.id != id)
        }
        )
    }
    return (
        <ShoppingCartContext.Provider value={{ getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeFromCart, cartItems, cartQuantity, OpenCart, CloseCart }}>
            {children}
            <ShoppingCart isOpen={ShoppingCartSlide} />
        </ShoppingCartContext.Provider>
    )
}
export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}





