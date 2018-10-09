import React from 'react';

import BootstrapTable from 'react-bootstrap-table-next';

const products = [ {
    lenderName: "TFB Federal",
    loanType: "10/1 ARM",
    interestRate: 4.125,
    closingCosts: 10000,
    monthlyPayment: 2000,
    apr: 4.375
},{
    lenderName: "TFB Federal",
    loanType: "10/1 ARM",
    interestRate: 4.125,
    closingCosts: 10000,
    monthlyPayment: 2000,
    apr: 4.375
} ];

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
            data={ products } 
            columns={ columns } />);
}

export default QuoteTableStruct;