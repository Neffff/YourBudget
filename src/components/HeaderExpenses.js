import React, {Component} from 'react';
import '../styles/HeaderExpenses.css';

class HeaderExpenses extends Component {
    render() {
        return (
            <div className="header__expenses">
                <span>EXPENSES</span><span>-{parseInt(this.props.expensesSum, 10).toLocaleString('de-DE')}</span>
            </div>
        );
    }
}

export default HeaderExpenses;
