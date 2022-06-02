import React, { Component } from 'react';
import './Calculator.css'
import CellElement from './CellElement.js'
// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends Component {
  render() {
    return (
      <section className='calculator'>
        <form>
          <input readOnly="readonly"/>
        </form>
        <div className='cellElements'>
        {
          this.props.cellElements.map((cellType,index)=><CellElement cellType={cellType} key={index} isCellElementZero={cellType === '0'? true :false}/>)
        }
        </div>
      </section>
    );
  }
}
