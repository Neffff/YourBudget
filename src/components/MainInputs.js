import React, {Component} from 'react';
import {CSVLink} from 'react-csv';
import '../styles/MainInputs.css';

class MainInputs extends Component {

    render() {
        const { descInputValue, typeInputValue, valInputValue, handleInputChange, handleSubmit, data } = this.props;
        return (
            <div>
            <form className="mainInputs" onSubmit={this.handleSubmit}>
                <select
                name="type"
                    value={typeInputValue}
                    onChange={handleInputChange}
                    className="mainInputs__sign">
                    <option value="+">+</option>
                    <option value="-">-</option>
                </select>
                <input
                name="description"
                    value={descInputValue}
                    onChange={handleInputChange}
                    className="mainInputs__description"
                    type="text"
                    placeholder="Add description"
                    autoFocus></input>
                <input
                name="value"
                    value={valInputValue}
                    onChange={handleInputChange}
                    className="mainInputs__value"
                    type="number"
                    placeholder="value"
                    min="0"></input>
                <button 
                onClick={handleSubmit}
                className="mainInputs__addbtn">add</button>
                
            </form>
            <CSVLink data={data} ><button className="mainInputs__downloadbtn">download</button></CSVLink>
               
            </div>
        );
    }
}

export default MainInputs;
