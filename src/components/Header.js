import React, {Component} from 'react';
import '../styles/Header.css';
import HeaderIncome from './HeaderIncome';
import HeaderExpenses from './HeaderExpenses';
class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__info">
                    <h1>Avaible budget in March 2018:</h1>
                    <span>+1000k</span>
                </div>
                <HeaderIncome />
                <HeaderExpenses />
            </div>
        );
    }
}

export default Header;
