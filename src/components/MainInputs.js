import React, { Component } from 'react';
import { CSVLink } from 'react-csv';
import { FaDownload, FaCheckCircleO } from 'react-icons/lib/fa';
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
                    <FaCheckCircleO 
                    onClick={handleSubmit}
                    className="mainInputs__addbtn"/>
            </form>
            
            <CSVLink data={data} ><FaDownload className="mainInputs__downloadbtn"/></CSVLink>
               
            </div>
        );
    }
}

export default MainInputs;
