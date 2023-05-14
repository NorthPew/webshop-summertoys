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
    width: inherit;
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
    min-width: 50%;
    max-height: 750px;
    border-radius: 6.5px;

    @media (orientation: portrait) {
            flex-grow: 1;
            width: 85vw;
    }
`


const ProductContainer = styled.div `
    display: flex;
    flex-flow: row wrap;
    width: 100%;
`

const ProductNamePriceAddBox = styled.div `
    display: flex;
    flex-flow: column wrap;
    row-gap: 7.5px;
    width: 35vw;

    @media (orientation: portrait) {
            flex-grow: 1;
            width: 85vw;
    }
`

const ProductName = styled.p `
    font-size: 20px;
    margin: 0px;
`

const ProductPrice = styled.p `
    font-size: 26px;
    font-weight: 600;
    margin: .35em;
    margin-left: 0em;
`

const ProductDescription = styled.p `
    font-size: 18px;
    font-weight: 500;
`

const FreeShippingBanner = styled.div `
    min-height: calc(50px - 15px);
    border-radius: 6.5px;
    background-color: #F9F9F9;
    display: flex;
    flex-flow: row wrap;
    padding-top: 7.5px;
    padding-bottom: 7.5px;
`

const FreeShippingBox = styled.div `
    display: flex;
    flex-flow: column wrap;
`

const FreeShippingIconDiv = styled.div `
    height: 50px;
    width: 50px;
    display: grid;
    place-content: center;
`

const FreeShippingTitle = styled.p `
    font-size: 18px;
    font-weight: 600;
    margin: 0px;
`

const FreeShippingText = styled.p `
    font-size: 16px;
    font-weight: 400;
    margin: 0px;
`

const ProductDescriptionTitle = styled.h2 `
    font-size: 20px;
    font-weight: 600;
    margin: 0px;
`

const PageTitle = styled.h1 `
    font-size: 38px;
    margin: 0px;
`

const WrongLinkBox = styled.div `
    display: flex;
    flex-flow: column wrap;
`


function ProductDetails() {
    const navigate = useNavigate()
    const { id } = useParams()
    const allProducts = useLoaderData()
    const product = allProducts.find(p => String(p.id) === id)

    if (!product) {
        return (
            <Wrapper>
                <TitleContainer>
                    <PageTitle>Denna produkt finns inte i vårt lager.</PageTitle>
                </TitleContainer>
                <WrongLinkBox>
                    <p>Det kan vara så att vi har slutat att sälja denna produkt eller har du skrivit in fel sökväg.</p>
                    <p>Kolla så att du har fått rätt länk eller navigera tillbaka till <Link to="/">startsidan</Link></p>
                </WrongLinkBox>
            </Wrapper>

        )
    }

    return (
        <Wrapper>
            <TitleContainer>
                <PageNavigation>
                    <PageLinkBox><PageLink to='/'>Hem</PageLink> &gt; <PageLink to='/products'>Produkter</PageLink> &gt; <p>{product.name}</p>  </PageLinkBox>
                </PageNavigation>
            </TitleContainer>
            <ProductContainer>
                <ProductImage src={product.picture} alt={product.name} />
                <ProductNamePriceAddBox>
                    <ProductName>{product.name}</ProductName>
                    <ProductPrice>{product.price} kr</ProductPrice>
                    <AddToCartButton product={product} />
                    <FreeShippingBanner>
                        <FreeShippingIconDiv>
                            <span className="material-symbols-outlined">local_shipping</span>
                        </FreeShippingIconDiv>
                        <FreeShippingBox>
                            <FreeShippingTitle>Gratis frakt</FreeShippingTitle>
                            <FreeShippingText>Gratis leverans på beställningar över 99kr.</FreeShippingText>
                        </FreeShippingBox>
                    </FreeShippingBanner>
                    <ProductDescriptionTitle>
                        Beskrivning
                    </ProductDescriptionTitle>
                    <ProductDescription>{product.description}</ProductDescription>
                </ProductNamePriceAddBox>

            </ProductContainer>

        </Wrapper>
    )
}

export default ProductDetails