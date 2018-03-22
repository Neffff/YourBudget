import React, {Component} from 'react';
import '../styles/HeaderIncome.css';

class HeaderIncome extends Component {
    render() {
        return (
            <div className="header__income">
                <span className="header__income--name">INCOME</span>
                <span className="header__income--value">+{parseInt(this.props.incomeSum, 10).toLocaleString('de-DE')}</span>
            </div>
        );
    }
}

export default HeaderIncome;
