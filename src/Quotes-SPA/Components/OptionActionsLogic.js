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

// React-Redux Action & Dispatch Functions:
const mapStateToProps = (state, ownProps) => {
    return {
        loanSize:     state.loanSize,
        creditScore:  state.creditScore,
        propertyType: state.propertyType,
        occupancy:    state.occupancy,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sendQuotesToStore: listObj => {
            dispatch(getQuoteList(listObj))
        }
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

    printStoreProps() {
        console.log(this.props);
    }
    

    render() {
        return (
            <OptionActionsStruct
                printStoreProps = {this.printStoreProps}
            />
        )
    }
}

const OptionActionsStore = connect(
    mapStateToProps,
    mapDispatchToProps
)(OptionActionsLogic);

export default OptionActionsStore;