// ----------------------------------------------------------------------------
// Core Imports:

// React Imports:
import React from 'react';

// React-Redux Imports:
import { connect } from 'react-redux';
import { changeQuoteParams } from '../Redux/Actions/ActionTypes';

// Structure Import:
import OptionValuesStruct from './OptionValuesStruct';


// ----------------------------------------------------------------------------
// Utility Functions & Constants:

// React-Redux Action & Dispatch Functions:
const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sendQuoteParamsToStore: paramsObj => {
            dispatch(changeQuoteParams(paramsObj))
        }
    }
}


// ----------------------------------------------------------------------------
// Module Exports:
class OptionValuesLogic extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state ={
            loanSize:     0,
            creditScore:  0,
            propertyType: "SingleFamily",
            occupancy:    "Primary",
        }
    }

    render() {
        return (
            <OptionValuesStruct
            />
        )
    }
}

const OptionValuesStore = connect(
    mapStateToProps,
    mapDispatchToProps
)(OptionValuesLogic);

export default OptionValuesStore;