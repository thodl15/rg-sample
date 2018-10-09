import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import OptionActionsLogic from './Quotes-SPA/Components/OptionActionsLogic';
import OptionValuesLogic  from './Quotes-SPA/Components/OptionValuesLogic';
import QuoteTableLogic    from './Quotes-SPA/Components/QuoteTableLogic';

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
          <OptionValuesLogic/>
          <OptionActionsLogic/>
          <br/>
          <QuoteTableLogic/>
        </Container>
      </div>
    );
  }
}

export default App;
