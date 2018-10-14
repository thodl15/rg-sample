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

//NOTE:
//REMOVE THIS VALUE ANY TIME THAT I AM PUSHING UPDATES TO THE REPO:
const rg_auth = "";

function attemptAPIfetch(objProps) {
    // Given that the information from the application
    // isn't identifiable to a given user, we could
    // still pass the information directly as params
    // within the URL string and be compliant with GDPR.

    return fetch(api_url + "?" +
        "loanSize="      + objProps.loanSize     +
        "&creditScore="  + objProps.creditScore  +
        "&propertyType=" + objProps.propertyType +
        "&occupancy="    + objProps.occupancy    , {
            headers: {
                Authorization : "RG-AUTH " + rg_auth,
            }
        }
    );
}

function attemptStoreUpdateWithResult(objProps) {
    return function (dispatch) {
        return attemptAPIfetch(objProps).then(
            res => res.json()
        ).then(data => {
            dispatch(getQuoteList(data.rateQuotes));
        }).catch(error => printError(error));
    };
}

function printError(error) {
    console.log("There was an error, see message below:");
    console.log(error);
}


// React-Redux Action & Dispatch Functions:
const mapStateToProps = (state) => {
    return {
        quoteParams: {
            loanSize:     state.loanSize,
            creditScore:  state.creditScore,
            propertyType: state.propertyType,
            occupancy:    state.occupancy,
        },
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendQuotesToStore: listObj => {
            dispatch(getQuoteList(listObj))
        },
        asyncListUpdate: (objProps) => {
            dispatch(attemptStoreUpdateWithResult(objProps));
        },
    }
}


// ----------------------------------------------------------------------------
// Module Exports:
class OptionActionsLogic extends React.Component {
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