import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AppFrame from "../components/AppFrame";
import { getCustomerByDni } from "../selectors/customers";

class CustomerContainer extends Component {
    render() {
        return (
            <div>
                <AppFrame
                    header={`Cliente ${this.props.dni}`}
                    body={<p>Datos del cliente {this.props.customer.name}</p>}
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
