import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CustomerListItem = props => {
    const { name, editAction, delAction, urlPath, dni } = props;
    return (
        <div>
            <div className="customer-list-item">
                <div className="field">
                    <Link to={`${urlPath}${dni}`}>{name}</Link>
                </div>
                <div className="field">
                    <Link to={`${urlPath}${dni}/edit`}>{editAction}</Link>
                </div>
                <div className="field">
                    <Link to={`${urlPath}${dni}/del`}>{delAction}</Link>
                </div>
            </div>
        </div>
    );
};

CustomerListItem.propTypes = {
    name: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired
};

export default CustomerListItem;
