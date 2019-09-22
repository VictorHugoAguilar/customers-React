import React, { Component } from "react";
import PropTypes from "prop-types";
import { fetchCustomers } from "./../actions/fetchCustomers";
/* 
    withRoute es un HOC (high orden component) que agrega las propiedades 
    match, location, history, y re-renderiza al componente cuando estas 
    propiedades se modifican.
*/
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

// importamos componentes
import AppFrame from "./../components/AppFrame";
import CustomerList from "./../components/CustomersList";
import CustomerActions from "../components/CustomersActions";
// importamos un selector para desacoplar datos en la app
import { getCustomers } from "../selectors/customers";

class CustomersContainer extends Component {
    componentDidMount() {
        this.props.fetchCustomers();
    }

    handleAddNew = () => {
        this.props.history.push("/customers/news");
    };

    renderBody = customers => (
        <div>
            <CustomerList customers={customers} urlPath={"customers/"} />
            <CustomerActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomerActions>
        </div>
    );

    render() {
        return (
            <div>
                <AppFrame
                    header={"Listado de clientes"}
                    body={this.renderBody(this.props.customers)}
                ></AppFrame>
            </div>
        );
    }
}

CustomersContainer.protoType = {
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired
};

CustomersContainer.defaultProps = {
    customers: []
};

const mapStateToProps = state => ({
    customers: getCustomers(state)
});

export default withRouter(
    connect(
        mapStateToProps,
        {
            fetchCustomers
        }
    )(CustomersContainer)
);
