import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AppFrame from "../components/AppFrame";
import { getCustomerByDni } from "../selectors/customers";
import  { Route} from 'react-router-dom';

class CustomerContainer extends Component {
        //<p>Datos del cliente {this.props.customer.name}</p>

        /* Utilizamos children que nos permite un rute de otro nivel
            no solmante en el nivel principal si no que dentro de cada 
            componente
        */

    renderBody = () => (
        <Route path="/customers/:dni/edit" children={
            ({ match }) => ( match ? <p>Es edicion</p> : <p>no es edicion</p> )
        } />
    )

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
