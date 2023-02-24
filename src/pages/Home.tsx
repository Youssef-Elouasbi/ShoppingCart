import React from 'react'
import { useDarkMode } from '../context/DarkModeContext'
import { IoIosRocket } from 'react-icons/io'
import { IconContext } from 'react-icons'
import storeItems from "../data/items.json"
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
        // <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        //     <ol className="carousel-indicators">
        //         <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        //         <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        //         <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        //     </ol>
        //     <div className="carousel-inner">
        //         <div className="carousel-item active">
        //             <img className="d-block w-100" src="/images/Nike/Air Jordan 1 Mid SE.png" alt="First slide" />
        //         </div>
        //         <div className="carousel-item">
        //             <img className="d-block w-100" src="/images/Nike/Air Jordan 5 Retro SE.png" alt="Second slide" />
        //         </div>
        //         <div className="carousel-item">
        //             <img className="d-block w-100" src="/images/Nike/Nike Aire Force.png" alt="Third slide" />
        //         </div>
        //     </div>
        //     <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span className="sr-only">Previous</span>
        //     </a>
        //     <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span className="sr-only">Next</span>
        //     </a>
        // </div>
        // <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        //     <div className="carousel-inner">
        //         <div className="carousel-item active" >
        //             <img className="d-block w-100" src="/images/Nike/Air Jordan 1 Mid SE.png" alt="First slide" />
        //         </div>
        //         <div className="carousel-item">
        //             <img className="d-block w-100" src="/images/Nike/Air Jordan 5 Retro SE.png" alt="Second slide" />
        //         </div>
        //         <div className="carousel-item">
        //             <img className="d-block w-100" src="/images/Nike/Nike Aire Force.png" alt="Third slide" />
        //         </div>
        //     </div>
        // </div >
    )
}

export default Home