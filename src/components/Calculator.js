import React, { useState } from 'react';
import './Calculator.css';
import PropTypes from 'prop-types';
import CellElement from './CellElement';
import calculate from '../logic/calculate';

const Calculator = ({ cellElements }) => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleCellClick = (e) => {
    setState({
      ...calculate(state, e.target.innerHTML),
    });
  };

  const calculatorScreen = () => {
    const { total, next, operation } = state;
    if (!next && !operation) return total;
    if (!total) return next;
    if (!next) return total + operation;
    return total + operation + next;
  };

  return (
    <section className="calculator">
      <form>
        <input data-testid="calculator-screen" readOnly="readonly" value={calculatorScreen() || ''} />
      </form>
      <div className="cellElements">
        {
          cellElements.map((cellType) => <CellElement  handleCellClick={handleCellClick} cellType={cellType} key={`cell_${cellType}`} isCellElementZero={cellType === '0'} />)
          }
      </div>
    </section>
  );
};

Calculator.propTypes = {
  cellElements: PropTypes.arrayOf(PropTypes.string),
};
Calculator.defaultProps = {
  cellElements: [''],
};

export default Calculator;
