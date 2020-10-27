import React, { Component } from 'react';
import css from './format.module.css';

import { formatNumber} from './formatHelpers';



export default class BaseIrpf extends Component {
    render() {

        const {baseIrpf, label} = this.props;
        
        return (
            <div className={css.formato }>
                <span> {label}  </span> 

                {/* <span>{formatNumber(baseIrpf)}</span> */}

        
          <input type='text' readOnly value={`R$ ${formatNumber(baseIrpf)}`  || ''}   />



                
            </div>
        )
    }
}