import React from 'react'
import { IconContext } from 'react-icons'
import { MdCancel, MdGppGood } from 'react-icons/md'
import { useDarkMode } from '../context/DarkModeContext'
import { useShoppingCart } from '../context/ShoppingCartContext'

const Cancel = () => {
    const { cartItems, removeFromCart } = useShoppingCart()
    const { Dark } = useDarkMode()
    return (
        <div>
            <IconContext.Provider
                value={{ color: '#a21826' }}
            >

                <h1 className={'fs-1 ' + (Dark === true && 'text-white')}><MdCancel /> Payment canceled</h1>
            </IconContext.Provider>
        </div>
    )
}

export default Cancel