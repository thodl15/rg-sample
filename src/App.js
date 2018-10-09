// ----------------------------------------------------------------------------
// Core Imports:

// React Imports:
import React, { Component } from 'react';

// React-Redux Imports:
import { createStore } from 'redux';
import { Provider    } from 'react-redux';
import paramsState     from './Quotes-SPA/Redux/Reducers/QuoteReducers';

// Style Imports:
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


// Component Imports:
import OptionActionsStore from './Quotes-SPA/Components/OptionActionsLogic';
import OptionValuesStore  from './Quotes-SPA/Components/OptionValuesLogic';
import QuoteTableLogic    from './Quotes-SPA/Components/QuoteTableLogic';
import { Container      } from 'reactstrap';

// Redux store initialization:
const store = createStore(paramsState);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
            <OptionValuesStore/>
            <OptionActionsStore/>
            <br/>
            <QuoteTableLogic/>
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
