import React from "react";
import { Switch, Route,  BrowserRouter,  } from "react-router-dom";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import novoProduto from "./pages/NovoProduto";
import Clientes from "./pages/Clientes";
import NovoCliente from "./pages/NovoCliente";

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/produtos" exact component={Produtos} />
        <Route path="/novo-produto" exact component={novoProduto} />
        <Route path="/clientes" exact component={Clientes} />
        <Route path="/novo-cliente" exact component={NovoCliente} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;