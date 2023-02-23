import React, { createContext, ReactNode, useContext, useState } from 'react'
import { ShoppingCart } from '../components/ShoppingCart'
import { useLocalStorage } from '../hooks/useLocalStorage'

type ShoppingCartProviderProps = {
    children: ReactNode
}
type CartItem = {
    id: string,
    quantity: number
}
type ShoppingCartContext = {
    OpenCart: () => void
    CloseCart: () => void
    getItemQuantity: (id: string) => number
    increaseItemQuantity: (id: string) => void
    decreaseItemQuantity: (id: string) => void
    removeFromCart: (id: string) => void
    addToCart: (id: string) => void
    cartQuantity: number
    cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", [])
    const [ShoppingCartSlide, setShoppingCartSlide] = useState(false)
    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)
    function OpenCart() {
        setShoppingCartSlide(true)
    }
    function CloseCart() {
        setShoppingCartSlide(false)
    }

    function getItemQuantity(id: string) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function addToCart(id: string) {
        setCartItems(() => {
            const newItem: CartItem = { id: id, quantity: 1 }
            return [...cartItems, newItem]
        })
    }

    function increaseItemQuantity(id: string) {
        setCartItems(cartItems => {
            // if (cartItems.find(item => item.id === id) == null) {
            //     return [...cartItems, { id, quantity: 1 }]
            // } else {
            return cartItems.map(item => {
                return item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            })
            // }
        })
    }
    function decreaseItemQuantity(id: string) {
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
    function removeFromCart(id: string) {
        setCartItems((cartItems) => {
            return cartItems.filter((item) => item.id != id)
        }
        )
    }
    return (
        <ShoppingCartContext.Provider value={{ getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeFromCart, cartItems, cartQuantity, OpenCart, CloseCart, addToCart }}>
            {children}
            <ShoppingCart isOpen={ShoppingCartSlide} />
        </ShoppingCartContext.Provider>
    )
}
export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}





