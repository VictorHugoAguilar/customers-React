import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field} from 'redux-form';

const CustomerEdit = props => {
    const { name, age, dni } = props;
    return (
        <div>
            <h2>Edición de cliente</h2>
            <form>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <Field name="name" component="input" type="text"></Field>
                    
                </div>
                <div>
                    <label htmlFor="dni">Dni</label>
                    <Field name="dni" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="age">Edad</label>
                    <Field name="age" component="input" typpe="number"></Field>
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

export default reduxForm({ form: 'CustomerEdit'})( CustomerEdit);
