import React from 'react';
import './style.css';
import style from './Custom.module.css';

function Style() {
    return(
        <div>
            <h1 className='primary'>Style type 1 in React JS</h1>
            <h1 style={{color: 'red', backgroundColor: 'black'}}>Style type 2 in React JS</h1>
            <h1 className={style.success}>Style type 3 in React JS</h1>
            
        </div>
    )
}

export default Style;