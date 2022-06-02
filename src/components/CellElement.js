import React, { Component } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line react/prefer-stateless-function
export default class CellElement extends Component {
  render() {
    const { cellType, isCellElementZero ,handleCellClick} = this.props;
    return (
      <div onClick={handleCellClick} className={`cellElement ${isCellElementZero ? ' cellZero' : ''}`}>
        {cellType}
      </div>
    );
  }
}

CellElement.propTypes = {
  handleCellClick:PropTypes.func,
  cellType: PropTypes.string.isRequired,
  isCellElementZero: PropTypes.bool.isRequired,
};
