import React from "react";
import PropTypes from "prop-types";

const CustomerData = ({ name, dni, age }) => {
    return (
        <div>
            <div className="customer-data">
                <h2>Datos del cliente</h2>
                <div>
                    <stron>Nombre:</stron>
                    <i>{name}</i>
                </div>
                <div>
                    <stron>DNI:</stron>
                    <i>{dni}</i>
                </div>
                <div>
                    <stron>Edad:</stron>
                    <i>{age}</i>
                </div>
            </div>
        </div>
    );
};

CustomerData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
};

export default CustomerData;
