import React, { Component } from 'react';
import './Calculator.css'

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
          cellElements.map((cellType,index)=><CellElement key={index} cellType={cellType} isCellElementZero={cellType === '0'? true :false}/>)
        }
        </div>
      </section>
    );
  }
}

const cellElements = ['AC','+/-','%','÷','7','8','9','x','4','5','6','-','1','2','3','+','0','.','=']

class CellElement extends Component{
  render(){
    return(
      <div className={`cellElement ${this.props.isCellElementZero ? ' cellZero':''}`}  >
        {this.props.cellType}
      </div>
    );
  }
}