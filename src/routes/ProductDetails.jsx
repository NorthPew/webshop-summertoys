import { useParams, useLoaderData, Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import AddToCartButton from "./components/AddToCartButton"


// Styled

// Wrapper

const Wrapper = styled.section `
    width: 85vw;
    height: 100%;
    gap: 15px;
    display: grid;
`

// Title

const TitleContainer = styled.div `
    width: 100%;
    height: 64px;
    border-bottom: 1px solid #000;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;

`

const PageNavigation = styled.p `
    font-size: 16px;
    font-weight: 400;
    margin: 0px;
`

const PageLink = styled(Link) `
    color: #242424;
    &:link {
        color: #242424;
    }
    &:active {
        color: #242424;
    }
`

const PageLinkBox = styled.div `
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    column-gap: .65em;
`

const ProductImage = styled.img `
    width: 605px;
    max-height: 750px;
`


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
        <Wrapper>
            <TitleContainer>
                <PageNavigation>
                    <PageLinkBox><PageLink to='/'>Hem</PageLink> &gt; <PageLink to='/products'>Produkter</PageLink> &gt; <p>{product.name}</p>  </PageLinkBox>
                </PageNavigation>
            </TitleContainer>
            <ProductImage src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price} kr</p>
            <AddToCartButton product={product} />
        </Wrapper>
    )
}

export default ProductDetails