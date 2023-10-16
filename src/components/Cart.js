import { useState } from 'react'

function Cart({cart, updateCart}) {
    const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce(
        (acc, productType) => acc + productType.amount * productType.price, 0
    )
    return isOpen ? (
        <div>
            <button onClick={() => setIsOpen(false)}>Fermer</button>
            {cart.length > 0 ? (
                <div>
                    <h2>Panier</h2>
                        <ul>
                            {cart.map(({name, price, amount}, index) =>
                            (<div key={`${name}- ${index}`}>
                                {name} {price} Ar x {amount}
                            </div>))}
                        </ul>
                        <h3>Total: {total}Ar</h3>
                        <button onClick={() => updateCart([])}>Vider le panier</button>
                </div>
            ) : (
                <div>
                    Votre panier est vide
                </div>
            )}
        </div>
        ) : (
        <div>
            <button onClick= {() => setIsOpen(true)}>Ouvrir le panier</button>
        </div>
    )
}

export default Cart
