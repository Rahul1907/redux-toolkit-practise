import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice'

const Products = () => {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch();
    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        let products = await fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => json)

        setProducts(products)
    }

    const onAddToCart = (product) => {
        dispatch(add(product))
    }

    return (
        <div className='productsWrapper'>
            {products.map((product) => {

                return (<div className='card' key={product.id}>
                    <img src={product.image} />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button className='btn' onClick={() => { onAddToCart(product) }}> Add to cart </button>
                </div>)
            })}
        </div>
    )
}

export default Products