import React, { Component } from 'react';
import './Calculator.css';
import PropTypes from 'prop-types';
import CellElement from './CellElement';
import calculate from '../logic/calculate';
// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleCellClick = this.handleCellClick.bind(this);
    this.calculatorScreen = this.calculatorScreen.bind(this);
  }

  handleCellClick(e) {
    this.setState((prevState) => ({

      ...calculate(prevState, e.target.innerHTML),
    }));
  }

  calculatorScreen() {
    const { total, next, operation } = this.state;
    if (!next && !operation) return total;
    if (!total) return next;
    if (!next) return total + operation;
    return total + operation + next;
  }

  render() {
    const { cellElements } = this.props;
    return (
      <section className="calculator">
        <form>
          <input readOnly="readonly" value={this.calculatorScreen() || ''} />
        </form>
        <div className="cellElements">
          {
          cellElements.map((cellType) => <CellElement handleCellClick={this.handleCellClick} cellType={cellType} key={`cell_${cellType}`} isCellElementZero={cellType === '0'} />)
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
