import { CartContext } from "../routeConfig"
import { useContext } from "react"

function Cart() {
    const {cart, deleteFromCart} = useContext(CartContext)
    return (
        <section>
            <h1>Varukorg</h1>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <p>Totala belopp: {cart.reduce((delsumma,item) => delsumma + item.price, 0)} kr</p>
        </section>
    )
}

export default Cart