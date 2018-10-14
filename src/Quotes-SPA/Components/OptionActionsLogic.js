// ----------------------------------------------------------------------------
// Core Imports:

// React Imports:
import React from 'react';

// React-Redux Imports:
import { connect      } from 'react-redux';
import { getQuoteList } from '../Redux/Actions/ActionTypes';


// Structure Import:
import OptionActionsStruct from './OptionActionsStruct';


// ----------------------------------------------------------------------------
// Utility Functions & Constants:

// Ideally, you would want these following variables
// as environment variables instead, but for the sake
// of expediting the completion of the sample
// assignment, I am just declaring them here:
const api_url = "https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/quotes";

function attemptAPIfetch(objProps) {
    // Given that the information from the application
    // isn't identifiable to a given user, we could
    // still pass the information directly as params
    // within the URL string and be compliant with GDPR.

    console.log("Display API fetch");
    return fetch(api_url + "?" +
            "loanSize="      + objProps.loanSize     +
            "&creditScore="  + objProps.creditScore  +
            "&propertyType=" + objProps.propertyType +
            "&occupancy="    + objProps.occupancy,   {
        headers: {
                Authorization : "RG-AUTH " + rg_auth,
        }
    });
}

function attemptStoreUpdateWithResult(objProps) {
    console.log("Display Store Update Attempt");
    return function () {
        return attemptAPIfetch(objProps).then(
            res => {
                console.log(res.json());
                //console.log(res.body.rateQuotes);
                //getQuoteList(res.body.rateQuotes);
            },
            error => printError(error)
        );
    };
}

function printError(error) {
    console.log("Temporary Error Message Handling.");
    console.log(error);
}


// React-Redux Action & Dispatch Functions:
const mapStateToProps = (state, ownProps) => {
    return {
        quoteParams: {
            loanSize:     state.loanSize,
            creditScore:  state.creditScore,
            propertyType: state.propertyType,
            occupancy:    state.occupancy,
        },
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sendQuotesToStore: listObj => {
            dispatch(getQuoteList(listObj))
        },
        asyncListUpdate: (objProps) => {
            console.log(objProps);
            dispatch(attemptStoreUpdateWithResult(objProps))
        },
    }
}


// ----------------------------------------------------------------------------
// Module Exports:
class OptionActionsLogic extends React.Component {
    constructor(props, context) {
        super(props, context);

        //Binding functions to the scope of the given object.
        this.printStoreProps = this.printStoreProps.bind(this);
    }

    render() {
        return (
            <OptionActionsStruct
                printStoreProps = { this.printStoreProps       }
                storeUpdate     = { this.props.asyncListUpdate }
                params          = { this.props.quoteParams     }
            />
        )
    }
}

const OptionActionsStore = connect(
    mapStateToProps,
    mapDispatchToProps
)(OptionActionsLogic);

export default OptionActionsStore;