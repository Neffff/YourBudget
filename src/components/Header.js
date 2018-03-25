import React, {Component} from 'react';
import '../styles/Header.css';
import HeaderIncome from './HeaderIncome';
import HeaderExpenses from './HeaderExpenses';

const MONTH_NAMES = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__title">
                    <h1 className="header__title--month">Avaible budget in {MONTH_NAMES[new Date().getMonth()]} {new Date().getFullYear()}</h1>
                    <span className="header__title--value">{parseInt(this.props.allSum, 10).toLocaleString('de-DE')}</span>
                </div>
                <HeaderIncome incomeSum={this.props.incomeSum}/>
                <HeaderExpenses expensesSum={this.props.expensesSum}/>
            </div>
        );
    }
}

export default Header;
