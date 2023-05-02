import { Link } from "react-router-dom"

function Error() {

    return (
        <section>
            <h1>Error 404 - Den sidan du söker finns ej!</h1>
            <p>Vänligen kolla in din länk. Eller navigera tillbaka till <Link to="/">startsidan</Link></p>
        </section>
    )
}

export default Error