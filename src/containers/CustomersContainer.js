import React, { Component } from "react";

// importamos componentes
import AppFrame from "./../components/AppFrame";
import CustomerList from "./../components/CustomersList";
import CustomerActions from "../components/CustomersActions";

const customers = [
    { dni: "50592848R", name: "Victor Hugo", age: 34 },
    { dni: "30592848R", name: "Jose Manuel", age: 24 },
    { dni: "30392848R", name: "Ignatios Rod", age: 44 }
];

class CustomersContainer extends Component {
    hadleAddNew = () => {};

    renderBody = customers => (
        <div>
            <CustomerList customers={customers} urlPath={"customers/"} />
            <CustomerActions>
                <button onClick={this.hadleAddNew}>Nuevo Cliente</button>
            </CustomerActions>
        </div>
    );

    render() {
        return (
            <div>
                <AppFrame
                    header={"Listado de clientes"}
                    body={this.renderBody(customers)}
                ></AppFrame>
            </div>
        );
    }
}

export default CustomersContainer;
