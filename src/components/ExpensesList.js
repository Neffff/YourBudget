import React, { Component } from 'react';
import '../styles/ExpensesList.css';
import FaTrashO from 'react-icons/lib/fa/trash-o';

class ExpensesList extends Component {
  render() {
    return (
      <div className="expensesList">
        <h2 className="expensesList__name">EXPENSES</h2>
        <ul className="expensesList__list">
        {this.props.expensesItems.map((item, key) => <li key={key}><span>{item[1]}</span><span>- {parseInt(item[2], 10).toLocaleString('de-DE')}<FaTrashO onClick={() => this.props.handleItemDelete(item)} className="expensesList__trash"/></span></li>)}
            </ul>
      </div>
    );
  }
}

export default ExpensesList;
