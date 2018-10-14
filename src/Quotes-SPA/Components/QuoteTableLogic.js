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

function noDataFound() {
    return "No entries have been found that matched the given criteria.";
}

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
                noDataMsg    = { noDataFound          }
                />
        )
    }
}

const QuoteTableStore = connect(
    mapStateToProps,
    mapDispatchToProps
)(QuoteTableLogic);

export default QuoteTableStore;