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

        this.validateLoanValue  = this.validateLoanValue.bind(this);
        this.validateCreditValue = this.validateCreditValue.bind(this);
        this.setPropertyType     = this.setPropertyType.bind(this);
        this.setOccupancy        = this.setOccupancy.bind(this);



        this.state ={
            loanSize:     0,
            creditScore:  0,
            propertyType: "SingleFamily",
            occupancy:    "Primary",
        }
    }

    validateLoanValue(evt) {
        let amnt = parseInt(evt.target.value);
        if(isNaN(amnt) || amnt <= 0) {
            console.log("Not a valid loan amount.");
        } else {
            this.setState({
                loanSize: amnt,
            })
            this.props.sendQuoteParamsToStore({
                loanSize: amnt,
                creditScore: this.state.creditScore,
                propertyType: this.state.propertyType,
                occupancy: this.state.occupancy,
            })
        }
    }

    validateCreditValue(evt) {
        let value = parseInt(evt.target.value);
        if(isNaN(value) || value <= 0 || value > 800) {
            console.log("Not a valid credit score.");
        } else {
            this.setState({
                creditScore: value,
            })
            this.props.sendQuoteParamsToStore({
                loanSize: this.state.loanSize,
                creditScore: value,
                propertyType: this.state.propertyType,
                occupancy: this.state.occupancy,
            });
        }
    }

    setPropertyType(evt) {
        this.setState({
            propertyType: evt.target.value,
        })
        this.props.sendQuoteParamsToStore({
            loanSize: this.state.loanSize,
            creditScore: this.state.creditScore,
            propertyType: evt.target.value,
            occupancy: this.state.occupancy,
        });
    }

    setOccupancy(evt) {
        this.setState({
            occupancy: evt.target.value,
        })
        this.props.sendQuoteParamsToStore({
            loanSize: this.state.loanSize,
            creditScore: this.state.creditScore,
            propertyType: this.state.propertyType,
            occupancy: evt.target.value,
        });
    }

    render() {
        return (
            <OptionValuesStruct
                validateLoanValue   = {this.validateLoanValue}
                validateCreditValue = {this.validateCreditValue}
                setPropertyType     = {this.setPropertyType}
                setOccupancy        = {this.setOccupancy}
            />
        )
    }
}

const OptionValuesStore = connect(
    mapStateToProps,
    mapDispatchToProps
)(OptionValuesLogic);

export default OptionValuesStore;