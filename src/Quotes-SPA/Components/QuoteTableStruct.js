import React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';

// Table Column Definitions:
// dataField - what attribute it should display
// text      - what should display in the column header
const columns = [{
    dataField: 'lenderName',
    text: 'Lender'
}, {
    dataField: 'loanType',
    text: 'Product'
}, {
    dataField: 'interestRate',
    text: 'Rate'
}, {
    dataField: 'closingCosts',
    text: 'Closing Costs'
}, {
    dataField: 'monthlyPayment',
    text: 'Monthly Payment'
}, {
    dataField: 'apr',
    text: 'APR'
}];

const QuoteTableStruct = (props) => {
    return (
        <BootstrapTable
            hover
            condensed={true}
            keyField='lenderName' 
            data={ props.tableContent } 
            columns={ columns } />);
}

export default QuoteTableStruct;