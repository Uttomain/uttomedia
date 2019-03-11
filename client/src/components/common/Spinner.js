import React from 'react';
import spinner from './spinner.gif';

export default () => {
  return (
    <div>
      <img 
        src={spinner} 
        style={{width: '100px', margin: 'auto', display: 'block'}}
        alt="loading"
        />
        <h4 style={{width: '100px', margin: 'auto', display: 'block'}} >Loading...</h4>
    </div>
  )
}
