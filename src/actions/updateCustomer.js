import {createAction} from 'redux-actions';
import {UPDATE_CUSTOMERS} from '../constants';
import {urlCustomers} from '../api/urls';
import { apiPut } from '../api';

export const updateCustomer = createAction(UPDATE_CUSTOMERS, 
    (id, customer) => apiPut(urlCustomers, id, customer)() );
    