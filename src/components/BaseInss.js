import React, { Component } from 'react';

import css from './format.module.css';
import { formatNumber} from './formatHelpers';
// import { formatNumber, disableNan } from './formatHelpers';


export default class BaseInss extends Component {
    
    render() {

        
        const {baseInss, label} = this.props;


        
        return (
            <div className={css.formato }>
                <span> { label}  </span> 
                {/* <span>{disableNan(formatNumber(baseInss))}</span> */}

          <input type='text' readOnly value={`R$ ${formatNumber(baseInss)}`  || ''}   />

                
            </div>
        )
    }
}

