import { useParams, useLoaderData, Link, useNavigate } from "react-router-dom"

function ProductDetails() {
    const navigate = useNavigate()
    const { id } = useParams()
    const allProducts = useLoaderData()
    const product = allProducts.find(p => String(p.id) === id)

    if (!product) {
        return (
            <section>
                <h1>Denna produkt finns inte i vårt lager.</h1>
                <p>Det kan vara så att vi har slutat att sälja denna produkt eller har du skrivit in fel sökväg.</p>
                <p>Kolla så att du har fått rätt länk eller navigera tillbaka till <Link to="/">startsidan</Link></p>
            </section>

        )
    }

    return (
        <section>
            <h1>{product.name}</h1>
        </section>
    )
}