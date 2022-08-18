import React from 'react'
import {BrowserRouter,Switch, Router, Route, Routes } from 'react-router-dom'
import App from '../containers/App'
import Produs from '../containers/Productos';
import NavBar from '../components/NavBar';
import Clientes from '../containers/Clientes'
import Compras from '../containers/Compras'
import Ventas from '../containers/Ventas'
import Usuario from "../containers/Usuario"
import Reportes from '../containers/Reportes'
import { AddCli } from '../components/AddCli';
import AddProd from '../components/AddProd';
import AddUsu from "../components/AddUsu";
import Gasto from "../containers/Gastos";
import Provee from "../containers/Proveedores";
import AddProv from "../components/AddProv";
import AddGast from "../components/AddGasto"
import Menu from "../containers/Menu.jsx";

export const Routers = () => {
  return (

   <BrowserRouter>
    <NavBar/>
     <Routes>
         <Route  exact path='/' element={App}></Route>
         <Route exact path='/menu' element={<Menu/>} ></Route>
         <Route exact path='/cli' element={<Clientes/>} ></Route>
         <Route  exact path='/produ' element={<Produs/>}  ></Route>
         <Route exact path='/comp' element={<Compras/>} ></Route>
         <Route  exact path='/vent' element={<Ventas/>} ></Route>
         <Route  exact path='/rep' element={<Reportes/>} ></Route>
         <Route  exact path='/usu' element={<Usuario/>} ></Route>
         <Route  exact path='/gast' element={<Gasto/>} ></Route>
         <Route  exact path='/prov' element={<Provee/>} ></Route>


              <Route  exact path='/newcli' element={<AddCli/>} ></Route>
              <Route  exact path='/newprod' element={<AddProd/>} ></Route>
              <Route  exact path='/newusu' element={<AddUsu/>} ></Route>
              <Route  exact path='/newgas' element={<AddUsu/>} ></Route>
              <Route  exact path='/newprov' element={<AddProv/>} ></Route>
              <Route  exact path='/newventa' element={<AddUsu/>} ></Route>
              <Route  exact path='/newgast' element={<AddGast/>} ></Route>

              
               </Routes>
      </BrowserRouter>
    
  )
}

export default Router;