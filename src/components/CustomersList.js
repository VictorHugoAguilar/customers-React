import React from "react";
import PropTypes from "prop-types";
import CustomerListItem from "./CustomersListItem";

const CustomerList = props => {
    const { customers, urlPath } = props;
    return (
        <div>
            <div className="custom-list">
                {customers.map(c => (
                    <CustomerListItem
                        key={c.dni}
                        dni={c.dni}
                        name={c.name}
                        editAction={"Editar"}
                        delAction={"Eliminar"}
                        urlPath={urlPath}
                    />
                ))}
            </div>
        </div>
    );
};

CustomerList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired
};

export default CustomerList;
