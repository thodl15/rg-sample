// ----------------------------------------------------------------------------
// Core Imports:

// React Imports:
import React from 'react';

// React-Redux Imports:
import { connect } from 'react-redux';

// Structure Import:
import QuoteTableStruct from './QuoteTableStruct';


// ----------------------------------------------------------------------------
// Utility Functions & Constants:

// React-Redux Action & Dispatch Functions:
const mapStateToProps = (state, ownProps) => {
    return {
        quoteList: state.quoteList,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}


// ----------------------------------------------------------------------------
// Module Exports:
class QuoteTableLogic extends React.Component {
    render() {
        return (
            <QuoteTableStruct
                tableContent = { this.props.quoteList }
            />
        )
    }
}

const QuoteTableStore = connect(
    mapStateToProps,
    mapDispatchToProps
)(QuoteTableLogic);

export default QuoteTableStore;