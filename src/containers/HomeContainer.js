import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// importamos componentes
import AppFrame from "./../components/AppFrame";
import CustomersActions from "./../components/CustomersActions";

class HomeContainer extends Component {
    handleOnClick = () => {
        // console.log("handleOnClick");
        this.props.history.push("/customers");
    };

    render() {
        return (
            <div>
                <AppFrame
                    header="Home"
                    body={
                        <div>
                            <CustomersActions>
                                <button onClick={this.handleOnClick}>
                                    Listado de clientes
                                </button>
                            </CustomersActions>
                        </div>
                    }
                ></AppFrame>
            </div>
        );
    }
}

/* podemos decorar con withRouter para que siempre inyecte las propiedades */
export default withRouter(HomeContainer);
