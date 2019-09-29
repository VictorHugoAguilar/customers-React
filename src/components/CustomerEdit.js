import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import { setPropsAsInitial } from "../helpers/setPropsAsInitial";

// importamos componentes
import CustomersActions from "./CustomersActions";

const isRequired = value => !value && "Este campo es requerido";

const MyField = ({ input, meta, type, label, name }) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={!type ? "text" : type} />
        {meta.touched && meta.error && <span>{meta.error}</span>}
        <span></span>
    </div>
);

const isNumber = value => isNaN(Number(value)) && "El campo debe ser un número";

const validate = values => {
    const error = {};
    if (!values.name) {
        error.name = "El campo nombre es requerido";
    }
    if (!values.dni) {
        error.dni = "El campo dni es requerido";
    }
    if (!values.age) {
        error.age = "La edad es un campo obligatorio";
    }
    return error;
};

const CustomerEdit = props => {
    // const { name, age, dni } = props;
    const { handleSubmit, submitting,onBack } = props;
    return (
        <div>
            <h2>Edición de cliente</h2>
            <form onSubmit={handleSubmit}>
                <Field
                    name="name"
                    component={MyField}
                    type="text"
                    validate={isRequired}
                    label="Nombre "
                ></Field>
                <Field
                    name="dni"
                    component={MyField}
                    validate={isRequired}
                    type="text"
                    label="Dni "
                ></Field>
                <Field
                    name="age"
                    component={MyField}
                    validate={[isNumber, isRequired]}
                    type="number"
                    label="Edad "
                ></Field>
                <CustomersActions>
                    <button type="submit" disabled={submitting}>Aceptar</button>
                    <button onClick={onBack} >Cancelar</button>

                </CustomersActions>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
};

const CustomerEditForm = reduxForm({
    form: "CustomerEdit",
    validate: validate
})(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);
