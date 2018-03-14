import React, {Component} from 'react';
import '../styles/HeaderIncome.css';

class HeaderIncome extends Component {
    render() {
        return (
            <div className="header__income">
                <span className="header__income--name">INCOME</span><span className="header__income--value">+423.00</span>
            </div>
        );
    }
}

export default HeaderIncome;
