import { FETCH_CUSTOMERS } from "./../constants";
import { createAction } from "redux-actions";

const customers = [
    { dni: "50592848R", name: "Victor Hugo", age: 34 },
    { dni: "30592848R", name: "Jose Manuel", age: 24 },
    { dni: "30392848R", name: "Ignatios Rod", age: 44 },
    { dni: "30392843R", name: "Coquis", age: 5 }
];

export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers );
