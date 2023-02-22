import React, { useEffect, useState } from 'react'
import { Navbar as NavbarBs, Container, Nav, Button, Form } from "react-bootstrap"
import { NavLink as Link } from "react-router-dom"
import { useShoppingCart } from '../context/ShoppingCartContext'
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md'
import { BsSunFill } from 'react-icons/bs'
import { useDarkMode } from '../context/DarkModeContext'
import { IconContext } from 'react-icons'

const NavBar = () => {
    const { cartQuantity, OpenCart } = useShoppingCart()
    const { Dark, setDark } = useDarkMode()
    function changeStatus({ target: { value } }: any) {
        setDark(!Dark)
    }
    useEffect(() => {
        return Dark === true ? document.body.classList.add('bg-black') : document.body.classList.remove('bg-black')
    }, [Dark])
    return (
        <NavbarBs sticky='top' className={(Dark === true ? "bg-black " : "bg-white ") + " mb-3"}
            style={{ boxShadow: (Dark === true ? "0px 1px 20px white" : "0px 1px 10px gray") }}>
            <Container>
                <Nav className="me-auto d-flex align-items-center ">
                    <img src="images/Logo3.png" style={{ width: "50px", height: "50px" }} />
                    <Nav.Link className={(Dark === true && "text-white") + ""} to="/" as={Link} >Home</Nav.Link>
                    <Nav.Link className={(Dark === true && "text-white") + ""} to="/Store" as={Link} >Store</Nav.Link>
                    {/* <Nav.Link className={(Dark === true && "text-white") + ""} to="/About" as={Link} >About</Nav.Link> */}
                </Nav>
                <Form className='d-flex justify-content-between align-items-center mx-3'>
                    <Form.Check
                        type="switch"
                        checked={Dark === true}
                        onChange={changeStatus}
                    />
                    {Dark === true ? <IconContext.Provider
                        value={{ color: 'yellow' }}
                    >
                        {/* <MdOutlineDarkMode /> */}
                        <BsSunFill />
                    </IconContext.Provider> : <MdDarkMode />}
                </Form>
                {
                    cartQuantity > 0 &&
                    <Button style={{ width: "3.2rem", height: "3.2rem", position: "relative" }} variant="outline-success" className='rounded-circle' onClick={OpenCart}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='lightgreen'>! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.<path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z" /></svg>
                        <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{ color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: 0, right: 0, transform: "translate(25%, 25%)" }}>{cartQuantity}</div>
                    </Button>
                }


            </Container>
        </NavbarBs >
    )
}

export default NavBar