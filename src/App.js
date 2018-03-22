import React, {Component} from 'react';
import Header from './components/Header'
import './styles/App.css';
import MainInputs from './components/MainInputs';
import IncomeList from './components/IncomeList';
import ExpensesList from './components/ExpensesList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incomeItems: [],
      expensesItems: [],
      currentInputsValues: {
        type: '+',
        description: '',
        value: ''
      }
    }
  }

  handleInputChange = event => {
    this.setState({currentInputsValues: {...this.state.currentInputsValues, [event.target.name]: event.target.value}});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    (this.state.currentInputsValues.type === '+') ? this.setState({
      incomeItems: [
            ...this.state.incomeItems,
            [this.state.currentInputsValues.type, this.state.currentInputsValues.description, this.state.currentInputsValues.value]
        ]
    }) : this.setState({
      expensesItems: [
            ...this.state.expensesItems,
            [this.state.currentInputsValues.type, this.state.currentInputsValues.description, this.state.currentInputsValues.value]
        ]
    });
    this.setState({currentInputsValues: { type: '+', description: '', value: ''}})
}

  render() {
    const { currentInputsValues, incomeItems, expensesItems } = this.state;
    return (
      <div className="App">
        <Header/>
        <MainInputs
          descInputValue={currentInputsValues.description}
          typeInputValue={currentInputsValues.type}
          valInputValue={currentInputsValues.value}
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}/>
        <div className="App__lists">
          <IncomeList incomeItems={incomeItems}/>
          <ExpensesList expensesItems={expensesItems}/>
        </div>
      </div>
    );
  }
}

export default App;
