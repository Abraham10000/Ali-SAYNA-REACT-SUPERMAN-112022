import React from 'react'

function ProductItem({id, cover, name, price}) {
    return (
        
        <li key={id}>
            <img src={cover} alt={`${name} cover`}/>           
            <div>
                <p>{name}</p>
                <p>{price}</p>
            </div>           
        </li>
        
        
    )
}

export default ProductItem
