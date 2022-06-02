import React, { Component } from 'react';
// eslint-disable-next-line react/prefer-stateless-function

export default class CellElement extends Component{
    render(){
      return(
        <div className={`cellElement ${this.props.isCellElementZero ? ' cellZero':''}`}  >
          {this.props.cellType}
        </div>
      );
    }
  }