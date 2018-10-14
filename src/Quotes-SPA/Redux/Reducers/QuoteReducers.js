// ----------------------------------------------------------------------------
// Store Components:

// Action Types:
import { CHANGE_QUOTE_PARAMS,
         GET_QUOTE_LIST }     from './../Actions/ActionTypes.js';


// ----------------------------------------------------------------------------
// Utility Functions & Constants:
const initialState = {
    loanSize:     0,
    creditScore:  300,
    propertyType: "SingleFamily",
    occupancy:    "Primary",
    quoteList:    [],
}


// ----------------------------------------------------------------------------
// Module Exports:
export default function paramsState(state = initialState, action) {
    switch(action.type) {
        case CHANGE_QUOTE_PARAMS:
            return Object.assign({}, state, {
                loanSize:     action.loanSize,
                creditScore:  action.creditScore,
                propertyType: action.propertyType,
                occupancy:    action.occupancy,
            })
        case GET_QUOTE_LIST:
            return Object.assign({}, state, {
                quoteList: action.quoteList,
            })
        default:
            return state
    }
}