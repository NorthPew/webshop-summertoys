import { useLoaderData, Link } from "react-router-dom";
import AddToCartButton from "./components/AddToCartButton";

const tempData = [
        {
            "id": 1,
            "name": "Product 1",
            "description": "This is a short description of Product 1.",
            "price": 9.99,
            "img": "https://example.com/fake-image-1.jpg"
        },
        {
            "id": 2,
            "name": "Product 2",
            "description": "This is a short description of Product 2.",
            "price": 19.99,
            "img": "https://example.com/fake-image-2.jpg"
        },
        {
            "id": 3,
            "name": "Product 3",
            "description": "This is a short description of Product 3.",
            "price": 29.99,
            "img": "https://example.com/fake-image-3.jpg"
        }
    ]

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
                {
                productData.map((product) => (
                    <li key={product.id}> 
                        <Link to={'/products/' + product.id}>
                            <h2>{product.name}</h2>
                            <image src={product.img} alt={product.name} />
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                        </Link>
                        <AddToCartButton product={product} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Products