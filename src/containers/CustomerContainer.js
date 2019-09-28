import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AppFrame from "../components/AppFrame";
import { getCustomerByDni } from "../selectors/customers";
import { Route } from "react-router-dom";

// importamos los componentes
import CustomerEdit from "./../components/CustomerEdit";
import CustomerData from "./../components/CustomerData";

class CustomerContainer extends Component {
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
    renderBody = () => (
        <Route
            path="/customers/:dni/edit"
            children={({ match }) =>
                match ? (
                    <CustomerEdit initialValues={this.props.customer} />
                ) : (
                    <CustomerData
                        name={this.props.customer.name}
                        dni={this.props.customer.dni}
                        age={this.props.customer.age}
                    />
                )
            }
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

CustomerContainer.propTypes = { dni: PropTypes.string.isRequired };

export default connect(
    mapStateToProps,
    null
)(CustomerContainer);
