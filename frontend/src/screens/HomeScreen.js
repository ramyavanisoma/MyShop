import React,{useEffect} from 'react'
import {Row,Col} from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';
const HomeScreen = () => {
  useEffect(()=>{
    
      const fetchProducts=()=>{
        const {data}= axios.get('/api/products')
      }
      
    })
  }
  return (
    <>
        <h1>Latest Products</h1>
        <Row>
            {products.map((product)=>(
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Product product={product}/>
                </Col>
            ))}
        </Row>
    </>
  )
}

export default HomeScreen