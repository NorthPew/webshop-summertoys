import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../../Wrapper";
import styled from "styled-components";

const NavPlaceholder = styled.header `
    width: 100%;
    height: 48px;
    display: flex;
    flex-flow: row wrap;
`

const NavBody = styled.nav `
    background-color: #272727;
    display: flex;
    flex-flow: row wrap;
    height: inherit;
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100vw;
`

const NavSideLogoBox = styled.section `
    width: 25vw;
    height: inherit;
    display: inherit;
    flex-flow: inherit;

    @media (orientation: portrait) {
        width: 35vw;
    }
`

const NavMainBox = styled.section `
    display: flex;
    width: 50vw;
    height: inherit;
    display: inherit;
    justify-content: center;

    @media (orientation: portrait) {
        display: none;
    }
`

const NavSideButtonsBox = styled.section `
    display: inherit;
    width: 25vw;
    height: inherit;
    flex-flow: row-reverse wrap;

    @media (orientation: portrait) {
        width: 65vw;
    }
`

const NavLinkBtn = styled(NavLink) `
    padding: 0em .75em;
    height: inherit;
    display: grid;
    justify-content: center;
    align-items: center;
    border-radius: 6.5px;
    color: #f1f1f1;

    &:hover {
        background-color: #3c44d5;
        color: #f1f1f1;
    }
    &:link, &:visited {
        color: #f1f1f1;
    }
`

const ImposterNavLink = styled.button `
    border: none;
    background-color: transparent;
    outline: none;
    padding: 0em .75em;
    height: inherit;
    display: grid;
    justify-content: center;
    align-items: center;
    border-radius: 6.5px;
    color: #f1f1f1;
    cursor: pointer;

    &:hover {
        background-color: #3c44d5;
        color: #f1f1f1;
    }
    &:link, &:visited {
        color: #f1f1f1;
    }
    display: none;
        @media (orientation: portrait) {
            display: flex;
    }
`

const NavMobileMainBox = styled.div `
    margin-top: 48px;
    background-color: #242424;
    width: 100%;
    height: 100%;
    z-index: 999;
    position: fixed;
    
    @media (orientation: landscape) {
            display: none;
    }
`

const NavMobileLinkBtn = styled(NavLinkBtn) `
    height: 48px;
`

const SideNavPlaceholder = styled.div `
    width: 48px;
    background-color: #242424;
    height: calc(100vh - 48px);
    float: left;
`

const SideNavBody = styled(NavBody) `
    width: 48px;
    height: inherit;
    top: 48px;
`

const SideNavLink = styled(NavLinkBtn) `
    height: 48px;
`

const SideNavBox = styled(NavSideButtonsBox) `
    height: 192px;
`


function Header() {
    const {isLoggedIn, setIsLoggedIn} = useContext(CartContext)

    const [showMobileMainBox, setShowMobileMainBox] = useState(false)
    return (
        <>
        
        <NavPlaceholder>
            <NavBody>
                <NavSideLogoBox>
                    <NavLinkBtn to='/'>Sommarleksaker</NavLinkBtn>
                </NavSideLogoBox>
                <NavMainBox>
                    <NavLinkBtn to='/products'>Produkter</NavLinkBtn>
                    <NavLinkBtn to='/customer-support'>Kundtjänst</NavLinkBtn>
                </NavMainBox>
                <NavSideButtonsBox>
                    <ImposterNavLink onClick={() => setShowMobileMainBox(!showMobileMainBox)} title="Meny"><span className="material-symbols-outlined">menu</span></ImposterNavLink>
                    <NavLinkBtn to="/cart" title="Varukorg"><span className="material-symbols-outlined">shopping_bag</span></NavLinkBtn>
                    <NavLinkBtn to="/admin" title="Admin panel"><span className="material-symbols-outlined">admin_panel_settings</span></NavLinkBtn>
                    <NavLinkBtn to="/user" title="Logga in"><span className="material-symbols-outlined">login</span></NavLinkBtn>
                </NavSideButtonsBox>
            </NavBody>
            {showMobileMainBox && (
                <NavMobileMainBox>
                    <NavMobileLinkBtn to='/products'>Produkter</NavMobileLinkBtn>
                    <NavMobileLinkBtn to='/customer-support'>Kundtjänst</NavMobileLinkBtn>
                </NavMobileMainBox>
                )
                }
        </NavPlaceholder>
        {isLoggedIn ? (<SideNavPlaceholder>
            <SideNavBody>
                <SideNavBox>
                    <SideNavLink to='/admin/add-product' title="Lägg till ny produkt"><span className="material-symbols-outlined">library_add</span></SideNavLink>
                    <SideNavLink to='/admin/add-user' title="Lägg till ny användare"><span className="material-symbols-outlined">group_add</span></SideNavLink>
                    <SideNavLink to='/admin/edit-products' title="Redigera produkter"><span className="material-symbols-outlined">edit_square</span></SideNavLink>
                    <SideNavLink to='/admin/edit-users' title="Redigera användare"><span className="material-symbols-outlined">settings_account_box</span></SideNavLink>
                </SideNavBox>
            </SideNavBody>
        </SideNavPlaceholder>) : null}
        </>

    )
} 

export default Header