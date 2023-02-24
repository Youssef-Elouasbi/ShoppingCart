import React, { useEffect } from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { GrStatusGood } from 'react-icons/gr'
import { IconContext } from 'react-icons'
import { IoIosRocket } from 'react-icons/io'
import { MdGppGood } from 'react-icons/md'
import { useDarkMode } from '../context/DarkModeContext'
const Success = () => {
    const { cartItems, removeFromCart } = useShoppingCart()
    const { Dark } = useDarkMode()
    useEffect(() => {
        cartItems.map((item) => {
            removeFromCart(item.id)
        })
    }, [])
    return (
        <div>
            <IconContext.Provider
                value={{ color: '#48823a' }}
            >

                <h1 className={'fs-1 ' + (Dark === true && 'text-white')}><MdGppGood /> Payment successfully</h1>
            </IconContext.Provider>
        </div>
    )
}

export default Success