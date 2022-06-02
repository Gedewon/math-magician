import React, { Component } from 'react';
import './Calculator.css';
import PropTypes from 'prop-types';
import CellElement from './CellElement';
import calculate from '../logic/calculate';
import operate from '../logic/operate';
// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends Component {
  render() {
    const { cellElements } = this.props;
    return (
      <section className="calculator">
        <form>
          <input readOnly="readonly" />
        </form>
        <div className="cellElements">
          {
          cellElements.map((cellType) => <CellElement cellType={cellType} key={`cell_${cellType}`} isCellElementZero={cellType === '0'} />)
          }
        </div>
      </section>
    );
  }
}

Calculator.propTypes = {
  cellElements: PropTypes.arrayOf(PropTypes.string),
};
Calculator.defaultProps = {
  cellElements: [''],
};
