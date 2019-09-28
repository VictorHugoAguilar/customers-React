import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// importamos componentes
import HomeContainer from "./containers/HomeContainer";
import CustomersContainer from "./containers/CustomersContainer";
import CustomerContainer from "./containers/CustomerContainer";
/* 
            switch para evitar conflictos de rutas 
            cuando encuentra la coincidencia entra si no continua
            para ello tambien tenemos que poner la ruta mas especifica 
            primero asi la validacion no falla
            
            <Switch>
            <Route extact path="/customers/new" component={} />
            <Route extact path="/customers/:dni" component={} />
            </Switch>
            <Route extact path="/customers/new" component={} />
            */
function App() {
    return (
        <Router>
            <Route extact path="/" component={HomeContainer} />
            <Route extact path="/customers" component={CustomersContainer} />
            <Switch>
                <Route
                    extact
                    path="/customers/:dni"
                    render={props => (
                        <CustomerContainer dni={props.match.params.dni} />
                    )}
                />
            </Switch>
        </Router>
    );
}

export default App;
