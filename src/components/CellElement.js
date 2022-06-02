import React, { Component } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line react/prefer-stateless-function
export default class CellElement extends Component {
  render() {
    const { cellType, isCellElementZero, handleCellClick } = this.props;
    return (
      <button type="button" onClick={handleCellClick} className={`cellElement ${isCellElementZero ? ' cellZero' : ''}`}>
        {cellType}
      </button>
    );
  }
}

CellElement.propTypes = {
  handleCellClick: PropTypes.func.isRequired,
  cellType: PropTypes.string.isRequired,
  isCellElementZero: PropTypes.bool.isRequired,
};
