import React from "react";
import logo from "../../assets/img/logo.png";
import "./menu.css";
//import ButtonLink from "./components/ButtonLink";
import Button from "../Button";
//import BannerMain from "../BannerMain/components";

function Menu(){
    return(
        <nav className="menu">
            <a href="/"> 
                <img className="logo" src={logo} alt="Logo TVFLIX"/> 
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
        

    );
}

export default Menu;