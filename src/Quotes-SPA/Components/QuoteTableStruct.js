import React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';

// Table Column Definitions:
// dataField - what attribute it should display
// text      - what should display in the column header
const columns = [{
    dataField: 'lenderName',
    text:      'Lender'
}, {
    dataField: 'loanType',
    text:      'Product',
    sort:      true
}, {
    dataField: 'interestRate',
    text:      'Rate',
    sort:      true
}, {
    dataField: 'closingCosts',
    text:      'Closing Costs',
    sort:      true
}, {
    dataField: 'monthlyPayment',
    text:      'Monthly Payment',
    sort:      true
}, {
    dataField: 'apr',
    text:      'APR',
    sort:      true
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