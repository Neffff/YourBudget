import React, {Component} from 'react';
import '../styles/IncomeList.css';

class IncomeList extends Component {
  render() {
    return (
      <div className="incomeList">
        <h2 className="incomeList__name">INCOME</h2>
        <ul className="incomeList__list">
          {this.props.incomeItems.map((item, key) => <li key={key}><span>{item[1]}</span><span>+ {parseInt(item[2], 10).toLocaleString('de-DE')}</span></li>)}
        </ul>
      </div>
    );
  }
}

export default IncomeList;
