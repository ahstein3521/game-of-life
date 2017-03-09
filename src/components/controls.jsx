import React from 'react';
import Button from './button.jsx';



const Controls = props => {
  const {count, running, onReset, onUpdate}= props
  return(
    <div className='controls'>
      <div className='btn-group'>
        <Button text = {running? 'Pause' : 'Play'} className='info' onClick = {onUpdate}/>
        <Button text='Reset' className='danger' onClick={onReset}/>
      </div>
      <h4>Generations: <span>{count}</span></h4>
    </div>
  )
}

export default Controls;