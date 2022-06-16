import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Rating from './Rating';

function Product(props) {
    const { product } = props;
    return (
        <Card className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} className="card-img-top"/>
            </Link>
            <Card.Body className="product-info">
                <Link to={`/product/${product.slug}`}>
                    <Card.Title>{product.name} </Card.Title>
                </Link>
                <Rating rating={product.rating} numReviews={product.numReviews} />
                <Card.Text>${product.price}</Card.Text>
                <Button>Add to cart</Button>
            </Card.Body>
        </Card>
    )
}

export default Product