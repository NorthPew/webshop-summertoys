import styled from "styled-components"
import { Link } from "react-router-dom"

// Styled

// Wrapper

export const Wrapper = styled.section`
    width: 85vw;
    height: 100%;
    gap: 15px;
    display: grid;
`

// Title

export const TitleContainer = styled.div`
    width: inherit;
    height: 64px;
    border-bottom: 1px solid #000;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;

`

export const PageTitle = styled.h1`
    font-size: 38px;
    margin: 0px;
`

// Banners

export const ShipToCountryBannerField = styled.div`
    height: 50px;
    font-size: 18px;
    border-radius: 6.5px;
    font-weight: 500;
    background-color: #F3F3F3;
    width: 54vw;
    display: flex;
    align-items: center;
    flex-flow: row wrap;
`

export const ShipToCountryIconDiv = styled.div`
    height: 50px;
    width: 50px;
    display: grid;
    place-content: center;
`

export const ShipToCountryText = styled.p`
    margin: 0px;
`

// Shipping

export const ShippingBannerCostField = styled.div`
    height: 50px;
    width: 54vw;
    background-color: #F3F3F3;
    font-size: 18px;
    border-radius: 6.5px;
    font-weight: 500;
    display: flex;
    flex-flow: row wrap;
    justify-content: left;
`

export const ShippingCostTitle = styled.p`
    margin: 0px;
`

export const ShippingCostText = styled.p`
    margin: 0px;
    font-weight: lighter;
`

export const ShippingIconDiv = styled.div`
    height: 50px;
    width: 50px;
    display: grid;
    place-content: center;
`

export const ShippingContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
`

// Overview (Table header)

export const OverviewBannerField = styled.div`
    height: 50px;
    width: 54vw;
    display: flex;
    flex-flow: row wrap;
    justify-content: left;
    background-color: #F3F3F3;
    font-size: 18px;
    border-radius: 6.5px;
`

export const OverviewIconDiv = styled.div`
    height: 50px;
    width: 50px;
    display: grid;
    place-content: center;
`

export const OverviewTitleBox = styled.div`
    height: 50px;
`

export const OverviewTitle = styled.p`
    font-size: 18px;
    margin: 0px;
    margin-top: .4em;
`

export const OverviewTextsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    column-gap: 5em;
    align-content: center;
    margin-left: .75em;
`

export const OverviewText = styled.p`
    font-size: 18px;
    margin: 0px;
`

//  Article

export const ArticlesBox = styled.ul`
    max-width: calc(54vw - 7.5px);
    background-color: #F3F3F3;
    height: calc(100% - 7.5px);
    border-radius: 6.5px;
    padding-left: 0em;
    list-style-type: none;
    display: flex;
    justify-items: center;
    flex-flow: column wrap;
    gap: 15px;
    padding-left: 7.5px;
    padding-top: 7.5px;
`

export const ArticleLi = styled.li`
    display: flex;
    flex-flow: row wrap;
`

export const ArticleImg = styled.img`
    width: 116px;
    height: 120px;
`

export const ArticleValuesContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    column-gap: 5em;
    margin-left: calc(.75em - 7.5px);
`

export const ArticleAmountBox = styled.div`
    width: 250px;
    border-radius: 6.5px;
    height: 24px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
`

export const ArticleAmountMinBtn = styled.button`
    background-color: transparent;
    border: .5px solid #373737;
    height: 24px;
    width: 1em;
    display: grid;
    place-content: center;
    border-radius: 6.5px 0px 0px 6.5px;
`

export const ArticleAmountMaxBtn = styled.button`
    background-color: transparent;
    border: .5px solid #373737;
    height: 24px;
    width: 1em;
    display: grid;
    place-content: center;
    border-radius: 0px 6.5px 6.5px 0px;
    margin-right: 1.75em;
`

export const ArticleAmountInputField = styled.input`
    background-color: transparent;
    width: 32px;
    height: 20px;
    display: flex;
    justify-items: center;
    outline: none;
    border: .5px solid #373737;
    text-align: center;
`

// Containers

export const BannerFieldsContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    row-gap: 15px;
    width: 54vw;
`

export const BannersAndSubTotalContainer = styled.div`
    width: 85vw;
    height: 100%;
    display: flex;
    column-gap: 1vw;
`

// Subtotal

export const SubTotalBox = styled.div`
    border-radius: 6.5px;
    min-height: 180px;
    width: 30vw;
    background-color: #F3F3F3;
    padding-left: 7.5px;
    padding-right: 7.5px;
`

export const SubTotalTitle = styled.h2`
    font-size: 24px;
    font-weight: 500;
`

export const SubTotalText = styled.p`
    font-size: 20px;
    font-weight: 500;
`

export const SubTotalTextsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    column-gap: 5em;
`

export const SubTotalPrice = styled.p`
    font-weight: 600;
    font-size: 20px;
`

export const SubTotalBoxForButton = styled.div`
    width: 100%;
    display: grid;
`

export const CheckoutButton = styled.button`
    background-color: #242424;
    color: #fff;
    font-weight: 600;
    border-radius: 0px;
    font-size: 22px;
`

// Empty cart
export const EmptyCartContainer = styled.div`
    width: calc(85vw - 15px);
    border-radius: 6.5px;
    background-color: #F3F3F3;
    height: 70vh;
    display: grid;
    place-content: center;
    padding-left: 7.5px;
    padding-right: 7.5px;
`

export const ShopNowButton = styled(Link)`
    background-color: #242424;
    color: #fff;
    font-weight: 600;
    padding: 1.5em 1em;
    text-align: center;
    &:hover {
        color: #fff;
    }
`