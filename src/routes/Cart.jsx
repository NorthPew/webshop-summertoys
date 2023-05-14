import { CartContext } from "../Wrapper"
import { useContext, useEffect, useState } from "react"

import {Wrapper, TitleContainer, PageTitle, ShipToCountryBannerField, ShipToCountryIconDiv, ShipToCountryText, ShippingBannerCostField, ShippingCostTitle, ShippingCostText, ShippingIconDiv, ShippingContainer, OverviewBannerField, OverviewIconDiv, OverviewTitleBox, OverviewTitle, OverviewTextsContainer, OverviewText, ArticlesBox, ArticleLi, ArticleImg, ArticleValuesContainer, ArticleAmountBox, ArticleAmountMinBtn, ArticleAmountMaxBtn, ArticleAmountP, BannerFieldsContainer, BannersAndSubTotalContainer, SubTotalBox, SubTotalTitle, SubTotalText, SubTotalTextsContainer, SubTotalPrice, SubTotalBoxForButton, CheckoutButton, EmptyCartContainer, ShopNowButton} from "./styles/cart"


// När du ökar kvantitet på produkt, lägg till en ny prop på produkten i carten

//cart[2].quantity = itemQuantity;

function Cart() {
    const { cart, deleteFromCart, setCart } = useContext(CartContext)

    const changeArticleAmount = (amountChange, itemId, index) => {
        console.log(cart[index].id);
        if (amountChange == true) {
            setCart((prevCartItems) =>
                prevCartItems.map((item) =>
                item.id === cart[index].id
                    ? { ...item, amount: item.amount + 1 }
                    : item
        )
		    );
        } else if (amountChange == false) {
            if (cart[index].amount === 1) {
                deleteFromCart(itemId)
            } else if (cart[index].amount > 1) {
                setCart((prevCartItems) =>
                    prevCartItems.map((item) =>
                        item.id === cart[index].id
                            ? { ...item, amount: item.amount - 1 }
                            : item
                    )
                );
            }
        }
    }

	const totalPrice = cart.reduce(
		(sum, item) => sum + item.price * item.amount,
		0
	);

	return (
		<Wrapper>
            <TitleContainer>
                <PageTitle>
                    Varukorg
                </PageTitle>
            </TitleContainer>
            {cart.length ? (
                <>
                    <BannersAndSubTotalContainer>
                        <BannerFieldsContainer>
                            <ShipToCountryBannerField>
                                <ShipToCountryIconDiv>
                                    <span className="material-symbols-outlined">flag</span>
                                </ShipToCountryIconDiv>
                                <ShipToCountryText>Skicka till Sverige</ShipToCountryText>
                            </ShipToCountryBannerField>
                            <ShippingBannerCostField>
                                <ShippingIconDiv>
                                    <span className="material-symbols-outlined">local_shipping</span>
                                </ShippingIconDiv>
                                <ShippingContainer>
                                    <ShippingCostTitle>Fraktkostnad</ShippingCostTitle>
                                    {
                                        totalPrice > 99 ? <ShippingCostText>Berättigad till GRATIS FRAKT!</ShippingCostText> : <ShippingCostText>99kr frakt</ShippingCostText>
                                    }
                                </ShippingContainer>
                            </ShippingBannerCostField>
                            <OverviewBannerField>
                                <OverviewIconDiv>
                                    <span className="material-symbols-outlined">overview_key</span>
                                </OverviewIconDiv>
                                <OverviewTitleBox>
                                    <OverviewTitle>Översikt</OverviewTitle>
                                </OverviewTitleBox>
                                <OverviewTextsContainer>
                                    <OverviewText>Artikel</OverviewText>
                                    <OverviewText>Pris</OverviewText>
                                    <OverviewText>Styck</OverviewText>
                                    <OverviewText>Totalt</OverviewText>
                                </OverviewTextsContainer>
                            </OverviewBannerField>
                        </BannerFieldsContainer>
                        <SubTotalBox>
                            <SubTotalTitle>Order sammanfattning</SubTotalTitle>
                            <SubTotalTextsContainer>
                                <SubTotalText>Delsumma</SubTotalText>
                                    <SubTotalPrice>{totalPrice} kr</SubTotalPrice>
                            </SubTotalTextsContainer>
                            <SubTotalBoxForButton>
                                <CheckoutButton>Kassa nu</CheckoutButton>
                            </SubTotalBoxForButton>
                        </SubTotalBox>
                    </BannersAndSubTotalContainer>
                    <ArticlesBox>
                        {cart.map((item, index) => (
                            <ArticleLi key={index}>
                                <ArticleImg src={item.picture} alt={item.name} />
                                <ArticleValuesContainer>
                                    <p>{item.name}</p><p>{item.price} kr</p>
                                    <ArticleAmountBox>
                                        <ArticleAmountMinBtn onClick={() => changeArticleAmount(false, item.id, index)}>-</ArticleAmountMinBtn>
                                        <ArticleAmountP>{item.amount}</ArticleAmountP>
                                        <ArticleAmountMaxBtn onClick={() => changeArticleAmount(true, item.id, index)}>+</ArticleAmountMaxBtn>
                                    </ArticleAmountBox>
                                    <p>{item.price * item.amount} kr</p>
                                </ArticleValuesContainer>
                            </ArticleLi>
                        ))}
                    </ArticlesBox>

            </>
            ) : 
            <EmptyCartContainer>
                <h1>Din varukorg är tom</h1>
                <ShopNowButton to="/products">SHOPPA NU</ShopNowButton>
            </EmptyCartContainer>
            
            }

		</Wrapper>
	);
}


export default Cart