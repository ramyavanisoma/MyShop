import React from 'react'
import { Link,useParams } from 'react-router-dom'
import {Row,Col,Image,Card,Button,ListGroup, ListGroupItem} from 'react-bootstrap'
import products from '../../../backend/data/products';
import Rating from '../components/Rating';
const ProductScreen = () => {
    const Params=useParams();
    const product=products.find(p=>p._id===Params.id)
   
  return (
    <>
        <Link className='btn btn-light my-3' to='/'>
            Go Back
        </Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid/>
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroupItem>
                        <h3>{products.name}</h3>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Rating value={products.rating} text={`${product.numReviews} reviews`} />
                    </ListGroupItem>
                    <ListGroupItem>Price:${product.price}</ListGroupItem>
                    <ListGroupItem>Description: {product.description}</ListGroupItem>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <Row>
                                <Col>Price:</Col>
                                <Col>
                                <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col>Status:</Col>
                                <Col>{product.countInStock>0? 'In Stock' :'Out Of Stock'}</Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button className='btn-block' type='button' disabled={product.countInStock===0}>Add To Cart</Button>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </>
  )
}

export default ProductScreen