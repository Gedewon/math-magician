import React from 'react';
import PropTypes from 'prop-types';

const CellElement = ({ cellType, isCellElementZero, handleCellClick }) => (<button type="button" onClick={handleCellClick} className={`cellElement ${isCellElementZero ? ' cellZero' : ''}`}>{cellType}</button>);

CellElement.propTypes = {
  handleCellClick: PropTypes.func.isRequired,
  cellType: PropTypes.string.isRequired,
  isCellElementZero: PropTypes.bool.isRequired,
};

export default CellElement;
