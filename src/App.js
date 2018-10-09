import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import OptionActionsStruct from './Quotes-SPA/Components/OptionActionsStruct';
import OptionValuesStruct  from './Quotes-SPA/Components/OptionValuesStruct';
import QuoteTableStruct from './Quotes-SPA/Components/QuoteTableStruct';

import {Container} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* 
          General structure:
            1. OuterOptionWrapper
              1.A OptionValues
              1.B OptionActions
            2. OuterTableWrapper
              2.A TableObject
        */}
        <Container>
          <OptionValuesStruct/>
          <OptionActionsStruct/>
          <br/>
          <QuoteTableStruct/>
        </Container>
      </div>
    );
  }
}

export default App;
