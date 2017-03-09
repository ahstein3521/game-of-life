import React from 'react';

const Cell = props => {
  const {onClick,status} = props;
  return (
  <div className={status? 'cell-active':'cell'} onClick = {onClick}></div>
  )
}

export default Cell;