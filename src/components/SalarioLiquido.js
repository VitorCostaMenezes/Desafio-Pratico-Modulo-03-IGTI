import React, { Component } from 'react';

import css from './format.module.css';
import {formatNumber, porcent,disableNan} from './formatHelpers';




export default class SalarioLiquido extends Component {
    render() {

        const {salarioLiquido, label, salarioCompleto} = this.props;

        const porcento = porcent(salarioCompleto, salarioLiquido);

        
        return (
            <div className={css.formato }>
                <span> {label}  </span> 
                {/* <span>{salarioLiquido}</span> */}

          {/* <input type='text' readOnly value={ formatNumber(salarioLiquido) || ''}   /> */}

          <input type='text' readOnly value={`R$ ${formatNumber(salarioLiquido) || ''}  (${disableNan(porcento)}%)` } />


                
            </div>
        )

       
    }
}
