import { CartContext } from "../main"
import { useContext } from "react"

const calculateSum = (cart) => {
   let sum = cart.reduce((delsumma,item) => delsumma + item.price, 0)
   sum = Math.round(sum)
   return sum
}

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
            <p>Totala belopp: {calculateSum(cart)} kr</p>
        </section>
    )
}

export default Cart