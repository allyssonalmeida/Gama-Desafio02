import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import {HeaderContainer} from "./style";

const Header = () =>{
  return(
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="Logo" className="logo" />
      </Link>
      <nav>
        <Link to="/"> 
          <FaHome /> Página Inicial
        </Link>
        <Link to="/produtos">
          <FaFileInvoice /> Produtos
        </Link>
        <Link to="/clientes">
          <FaUsers /> Clientes
        </Link>
      </nav>
    </HeaderContainer>
  );
}

export default Header;