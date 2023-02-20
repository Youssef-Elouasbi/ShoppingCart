import React, { useEffect, useState } from 'react'
import { Col, Container, Row, ToggleButton, ToggleButtonGroup } from "react-bootstrap"
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
    function GenerateItems(): Item[] {
        return categorie === "All" ? storeItems
            : storeItems.filter((i) => {
                return i.categorie === categorie
            })
    }
    useEffect(() => {
        setReady(false)
        setTimeout(() => {
            setReady(true)
            setItems(() => GenerateItems())
        }, 1000)
    }, [categorie])
    console.log(categorie)
    return (
        <>
            <h1>Store</h1>
            <Row className='my-3 '>
                <span className='fs-4'>Filter : </span>
                <ToggleButtonGroup type="radio" name="options" defaultValue={"All"}>
                    <ToggleButton id="tbg-radio-1" value={"All"} className='m-2 rounded' variant='outline-secondary' onClick={() => setCategorie("All")}>
                        All
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={"Cat1"} className='m-2 rounded' variant='outline-secondary' onClick={() => setCategorie("Cat 1")}>
                        Cat 1
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-3" value={"Cat2"} className='m-2 rounded' variant='outline-secondary' onClick={() => setCategorie("Cat 2")}>
                        Cat 2
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-4" value={"Cat3"} className='m-2 rounded' variant='outline-secondary' onClick={() => setCategorie("Cat 3")}>
                        Cat 3
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-5" value={"Cat4"} className='m-2 rounded' variant='outline-secondary' onClick={() => setCategorie("Cat 4")}>
                        Cat 4
                    </ToggleButton>
                </ToggleButtonGroup>
            </Row>
            {
                Ready === true ?
                    <Row xs={1} md={2} lg={3} className="g-3">
                        {Items.map(item => (
                            <Col key={item.id}><StoreItem {...item} /></Col>
                        ))}
                    </Row> : <div className='d-flex justify-content-center'><Spinner animation="grow" variant="success" /></div>
            }
        </>
    )
}

export default Store