import { useLoaderData, Link } from "react-router-dom";

export const loader = () => tempData

function Products() {
    const productData = useLoaderData()
    
    return (
        <section>
            <h1>Våra produkter</h1>
            <p>Vill du ha kul i solen? Här hittar du alla våra sommarleksprodukter som är perfekta för stranden, trädgården eller parken.</p>
            <p>Vi har allt från vattenpistoler och till badbollar. Oavsett om du vill leka eller av koppla av har vi något för dig.</p>  
            <p>Beställ idag och få leverans inom några dagar!</p>

            <ul>
                {productData.map(({}) => (
                    <li key={id}> 
                        <Link to={'products/' + id}>
                            <h2>{name}</h2>
                            <image></image>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Products