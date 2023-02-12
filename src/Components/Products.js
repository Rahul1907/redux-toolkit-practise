import React, { useEffect, useState } from 'react'


const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        FetchProducts()
    },[])

    const FetchProducts = async () => {
        let products = await fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => json)

        useEffect(products)
    }
    
    return (
        <div className='productsWrapper'>
            {products.map((product)=>{
                <div className='card' key={product.id}>
                    <img src={product.image} />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button className='btn'> Add to cart </button>
                </div>
            })}
        </div>
    )
}

export default Products