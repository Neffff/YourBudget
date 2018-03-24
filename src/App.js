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
      },
      incomeSum: 0,
      expensesSum: 0,
      allSum: 0
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.incomeItems !== this.state.incomeItems) {
      this.setState({
        incomeSum: this
          .state
          .incomeItems
          .reduce((aku, cur) => aku + parseInt(cur[2], 10), 0)
      })
    } else if (prevState.expensesItems !== this.state.expensesItems) {
      this.setState({
        expensesSum: this
          .state
          .expensesItems
          .reduce((aku, cur) => aku + parseInt(cur[2], 10), 0)
      })
    }
    if (prevState.incomeSum !== this.state.incomeSum || prevState.expensesSum !== this.state.expensesSum) {
      this.setState({ allSum: this.state.incomeSum - this.state.expensesSum })
    }
  }
  handleInputChange = event => {
    this.setState({
      currentInputsValues: {
        ...this.state.currentInputsValues,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    (this.state.currentInputsValues.type === '+')
      ? this.setState({
        incomeItems: [
          ...this.state.incomeItems,
          [this.state.currentInputsValues.type, this.state.currentInputsValues.description, this.state.currentInputsValues.value]
        ]
      })
      : this.setState({
        expensesItems: [
          ...this.state.expensesItems,
          [this.state.currentInputsValues.type, this.state.currentInputsValues.description, this.state.currentInputsValues.value]
        ]
      });
    this.setState({
      currentInputsValues: {
        type: '+',
        description: '',
        value: ''
      }
    });
  }

  render() {
    const {currentInputsValues, incomeItems, expensesItems, expensesSum, incomeSum, allSum} = this.state;
    return (
      <div className="App">
        <Header expensesSum={expensesSum} incomeSum={incomeSum} allSum={allSum}/>
        <MainInputs
          descInputValue={currentInputsValues.description}
          typeInputValue={currentInputsValues.type}
          valInputValue={currentInputsValues.value}
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          data={incomeItems.concat(expensesItems)}/>
        <div className="App__lists">
          <IncomeList incomeItems={incomeItems}/>
          <ExpensesList expensesItems={expensesItems}/>
        </div>
      </div>
    );
  }
}

export default App;
