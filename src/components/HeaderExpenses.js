import React, {Component} from 'react';
import '../styles/HeaderExpenses.css';

class HeaderExpenses extends Component {
    render() {
        return (
            <div className="header__expenses">
                <span>EXPENSES</span><span>-23.00</span>
            </div>
        );
    }
}

export default HeaderExpenses;
