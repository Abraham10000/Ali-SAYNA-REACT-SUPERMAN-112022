import { productList } from '../datas/productList'
import ProductItem from './ProductItem'

function ProductList ({cart, updateCart}) {
    const categories = productList.reduce (
        (acc, product) =>

        acc.includes(product.category)
        ? acc:
        acc.concat(product.category),
        []
        )
    function addToCart(name, price) {
        const currentProductSaved = cart.find ((product) => product.name === name)
        if (currentProductSaved) {
            const cartFilteredCurrentProduct = cart.filter ((product) => product.name !== name)
            updateCart([...cartFilteredCurrentProduct,
            {name, price, amount: currentProductSaved.amount + 1}
        ])
        } else {
            updateCart([...cart, {name, price, amount: 1}])
        }
    }

    return(
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul>
                {productList.map(({id, cover, name, price}) => (
                    <div key={id}>
                        <ProductItem cover={cover} name={name} price={price}/>
                        <button onClick={()=> addToCart(name, price)}>
                            Ajouter au panier
                        </button>
                    </div>
                ))}
            </ul>
        </div>
        
    )
}

export default ProductList
