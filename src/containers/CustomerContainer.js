import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AppFrame from "../components/AppFrame";
import { getCustomerByDni } from "../selectors/customers";
import { Route, withRouter } from "react-router-dom";

// importamos los componentes
import CustomerEdit from "./../components/CustomerEdit";
import CustomerData from "./../components/CustomerData";
import { fetchCustomers } from "./../actions/fetchCustomers";

class CustomerContainer extends Component {
    componentDidMount() {
        if (!this.props.customer) {
            this.props.fetchCustomers();
        }
    }
    //<p>Datos del cliente {this.props.customer.name}</p>

    /* 
        Utilizamos children que nos permite un rute de otro nivel
        no solmante en el nivel principal si no que dentro de cada 
        componente
    */

    /*
        Podemos utilizar cualquiera de las dos siguiente manera para enviar
        los datos entre los componentes <CustomerEdit {...this.props.customer} />
        o  <CustomerData
                        age={this.props.customer.age}
                        dni={this.props.customer.dni}
                        name={this.props.customer.name}
                    />
    */

    handleSubmit = values => {
        console.log(JSON.stringify(values));
    };

    handleOnBack = () => {
        this.props.history.goBack();
    };

    renderBody = () => (
        <Route
            path="/customers/:dni/edit"
            children={({ match }) => {
                const CustomerControl = match ? CustomerEdit : CustomerData;
                return (
                    <CustomerControl
                        {...this.props.customer}
                        onSubmit={this.handleSubmit}
                        onBack={this.handleOnBack}
                    />
                );
            }}
        />
    );

    render() {
        return (
            <div>
                <AppFrame
                    header={`Cliente ${this.props.dni}`}
                    body={this.renderBody()}
                ></AppFrame>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
});

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object.isRequired,
    fetchCustomers: PropTypes.func.isRequired
};

export default withRouter(
    connect(
        mapStateToProps,
        { fetchCustomers }
    )(CustomerContainer)
);
