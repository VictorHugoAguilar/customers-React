import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import { setPropsAsInitial } from "../helpers/setPropsAsInitial";

const isRequired = value => !value && "Este campo es requerido";

const MyField = ({ input, meta, type }) => (
    <div>
        <input {...input} type={!type ? "text" : type} />
        {meta.touched && meta.error && <span>{meta.error}</span>}
        <span></span>
    </div>
);

const isNumber = value => isNaN(Number(value)) && "El campo debe ser un número";

const CustomerEdit = props => {
    // const { name, age, dni } = props;
    return (
        <div>
            <h2>Edición de cliente</h2>
            <form>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <Field
                        name="name"
                        component={MyField}
                        type="text"
                        validate={isRequired}
                    ></Field>
                </div>
                <div>
                    <label htmlFor="dni">Dni</label>
                    <Field
                        name="dni"
                        component={MyField}
                        validate={isRequired}
                        type="text"
                    ></Field>
                </div>
                <div>
                    <label htmlFor="age">Edad</label>
                    <Field
                        name="age"
                        component={MyField}
                        validate={[isNumber, isRequired]}
                        type="number"
                    ></Field>
                </div>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number
};

const CustomerEditForm = reduxForm({ form: "CustomerEdit" })(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);
