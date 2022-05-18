
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './product.css'

const Product = () => {

    const [products, setProducts] = useState([])

    const url = 'https://fakerapi.it/api/v1/products?_quantity=9';



    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data.data))

    }, [])

    const ProductList = (
        products ? products.map((product, idx) => (

            <Col>
                <div key={idx} className='card mt-3' style={{ width: 20 + 'rem' }}>


                    <img src={product.image} className="card-img-top" alt="" />


                    <div className='card-text mt-3'>
                        <h5 className='fs-'>{product.name} </h5>
                        <p> Net Price :${product.net_price}</p>
                        <p> Taxes: {product.taxes} </p>
                        <p> Price: ${product.price}</p>
                    </div>

                </div>
            </Col>

        ))
            : null
    )


    return (
        <Container>
            <Row>


                {ProductList}




            </Row>

        </Container>
    )
}

export default Product