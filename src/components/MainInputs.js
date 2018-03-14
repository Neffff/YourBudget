import React, { Component } from 'react';
import '../styles/MainInputs.css';

class MainInputs extends Component {
  render() {
    return (
      <div className="mainInputs">
    <select className="mainInputs__sign">
  <option value="+">+</option>
  <option value="-">-</option>
</select>
<input className="mainInputs__description" type="text" placeholder="Add description" autoFocus></input>
<input className="mainInputs__value" type="number" placeholder="value" min="0"></input>
<button className="mainInputs__addbtn">add</button>
<button className="mainInputs__downloadbtn">download</button>
      </div>
    );
  }
}

export default MainInputs;
