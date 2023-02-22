import React from 'react'
import { useDarkMode } from '../context/DarkModeContext'
import { IoIosRocket } from 'react-icons/io'
import { IconContext } from 'react-icons'
const Home = () => {
    const { Dark } = useDarkMode()
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <h1 className={(Dark === true ? "text-white " : "text-black ") + "text-center"}>Welcome to <span style={{ color: (Dark === true ? "#bef3b0" : "#70c957") }}>Youssef Shoes </span>where you can find the best brand like Adidas, Nike and Puma
                <IconContext.Provider
                    value={{ color: '#92227e' }}
                >
                    <IoIosRocket />
                </IconContext.Provider>
            </h1>
        </div>
    )
}

export default Home