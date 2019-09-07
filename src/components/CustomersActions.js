import React from "react";
import PropTypes from "prop-types";

const CustomerActions = ({ children }) => {
    return (
        <div>
            <div className="customers-actions">
                <div>{children}</div>
            </div>
        </div>
    );
};

CustomerActions.propTypes = {
    children: PropTypes.node.isRequired
};

export default CustomerActions;
