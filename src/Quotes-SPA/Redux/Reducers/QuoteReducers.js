// ----------------------------------------------------------------------------
// Store Components:

// Action Types:
import { CHANGE_QUOTE_PARAMS } from './../Actions/ActionTypes.js';


// ----------------------------------------------------------------------------
// Utility Functions & Constants:
const initialState = {
    
}


// ----------------------------------------------------------------------------
// Module Exports:
export default function paramsState(state = initialState, action) {
    switch(action.type) {
        case CHANGE_QUOTE_PARAMS:
            return Object.assign({}, state, {

            })
        default:
            return state
    }
}