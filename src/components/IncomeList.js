import React, {Component} from 'react';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import '../styles/IncomeList.css';

class IncomeList extends Component {
  render() {
    return (
      <div className="incomeList">
        <h2 className="incomeList__name">INCOME</h2>
        <ul className="incomeList__list">
          {this.props.incomeItems.map((item, key) => <li key={item}><span>{item[1]}</span><span>+ {parseInt(item[2], 10).toLocaleString('de-DE')}<FaTrashO className="incomeList__trash" onClick={() => this.props.handleItemDelete(item)}/></span></li>)}
        </ul>
      </div>
    );
  }
}

export default IncomeList;
