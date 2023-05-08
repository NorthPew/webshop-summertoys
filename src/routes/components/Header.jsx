import { NavLink } from "react-router-dom";
import { useState } from "react";
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


function Header() {
    const [showMobileMainBox, setShowMobileMainBox] = useState(false)
    return (
        <NavPlaceholder>
            <NavBody>
                <NavSideLogoBox>
                    <NavLinkBtn to='/'>Sommarleksaker</NavLinkBtn>
                </NavSideLogoBox>
                <NavMainBox>
                    <NavLinkBtn to='/products'>Produkter</NavLinkBtn>
                    <NavLinkBtn to='/about-us'>Om oss</NavLinkBtn>
                    <NavLinkBtn to='/customer-support'>Kundtjänst</NavLinkBtn>
                </NavMainBox>
                <NavSideButtonsBox>
                    <ImposterNavLink onClick={() => setShowMobileMainBox(!showMobileMainBox)}><span className="material-symbols-outlined">menu</span></ImposterNavLink>
                    <NavLinkBtn to="/cart"><span className="material-symbols-outlined">shopping_bag</span></NavLinkBtn>
                    <NavLinkBtn to="/admin"><span className="material-symbols-outlined">admin_panel_settings</span></NavLinkBtn>
                    <NavLinkBtn to="/user"><span className="material-symbols-outlined">login</span></NavLinkBtn>
                </NavSideButtonsBox>
            </NavBody>
            {showMobileMainBox && (
                <NavMobileMainBox>
                    <NavMobileLinkBtn to='/products'>Produkter</NavMobileLinkBtn>
                    <NavMobileLinkBtn to='/about-us'>Om oss</NavMobileLinkBtn>
                    <NavMobileLinkBtn to='/customer-support'>Kundtjänst</NavMobileLinkBtn>
                </NavMobileMainBox>
                )
                }
        </NavPlaceholder>
    )
} 

export default Header