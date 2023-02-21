import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, ToggleButton, ToggleButtonGroup } from "react-bootstrap"
import StoreItem from '../components/StoreItem'
import storeItems from "../data/items.json"
import Spinner from 'react-bootstrap/Spinner'
type Item = {
    id: number,
    name: string,
    price: number,
    imgUrl: string,
    categorie: string
}

const Store = () => {

    const [categorie, setCategorie] = useState("All")
    const [Items, setItems] = useState(storeItems)
    const [Ready, setReady] = useState(false)

    const [isCompleted, setIsCompleted] = useState(false)
    const [index, setIndex] = useState(6)
    const initialItems = Items.slice(0, index)
    console.log(isCompleted)
    function GenerateItems(): Item[] {
        setIndex(6)
        setIsCompleted(false)
        return categorie === "All" ? storeItems
            : storeItems.filter((i) => {
                return i.categorie === categorie
            })
    }
    const loadMore = () => {
        setIndex(index + 3)
        if (index >= Items.length) {
            setIsCompleted(true)
            console.log("true", Items.length, index)
        } else {
            setIsCompleted(false)
            console.log("false", Items.length, index)
        }
    }
    useEffect(() => {
        setReady(false)
        setTimeout(() => {
            setReady(true)
            setItems(() => GenerateItems())
        }, 1000)
    }, [categorie])
    return (
        <>
            <h1>Store</h1>
            <Row className='my-3 '>
                <span className='fs-4'>Filter : </span>
                <ToggleButtonGroup type="radio" name="options" defaultValue={"All"}>
                    <ToggleButton id="tbg-radio-1" value={"All"} className='m-2 rounded' variant='outline-secondary' onClick={() => setCategorie("All")}>
                        All
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={"Cat1"} className='m-2 rounded' variant='outline-secondary' onClick={() => setCategorie("Nike")}>
                        Nike
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={"Cat2"} className='m-2 rounded' variant='outline-secondary' onClick={() => setCategorie("Adidas")}>
                        Adidas
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-4" value={"Cat3"} className='m-2 rounded' variant='outline-secondary' onClick={() => setCategorie("Puma")}>
                        Puma
                    </ToggleButton>

                </ToggleButtonGroup>
            </Row>
            {
                Ready === true ?
                    <><Row xs={1} md={2} lg={3} className="g-3">
                        {initialItems.map(item => (
                            <Col key={item.id}><StoreItem {...item} /></Col>
                        ))}
                    </Row>
                        <div className='d-grid align-items-center justify-content-center mt-3 mb-5' style={{ width: "100%", margin: "auto" }}>
                            {isCompleted ||
                                <Button onClick={loadMore} variant="secondary"  >
                                    Load More
                                </Button>
                            }
                        </div>
                    </> : <div className='d-flex justify-content-center'><Spinner animation="grow" variant="success" /></div>
            }
        </>
    )
}

export default Store