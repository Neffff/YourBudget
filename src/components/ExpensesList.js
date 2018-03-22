import React, { Component } from 'react';
import '../styles/ExpensesList.css';

class ExpensesList extends Component {
  render() {
    return (
      <div className="expensesList">
        <h2 className="expensesList__name">EXPENSES</h2>
        <ul className="expensesList__list">
        {this.props.expensesItems.map((item, key) => <li key={key}><span>{item[1]}</span><span>- {parseInt(item[2], 10).toLocaleString('de-DE')}</span></li>)}
        {
          console.log(this.props.expensesItems)
        }
            </ul>
      </div>
    );
  }
}

export default ExpensesList;
