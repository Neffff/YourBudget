import React, { Component } from 'react';
import Header from './components/Header'
import './styles/App.css';
import MainInputs from './components/MainInputs';
import IncomeList from './components/IncomeList';
import ExpensesList from './components/ExpensesList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainInputs/>
        <div className="App__lists">
        <IncomeList/>
        <ExpensesList/>
        </div>
      </div>
    );
  }
}

export default App;
