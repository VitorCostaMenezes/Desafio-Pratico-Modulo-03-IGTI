import React, { Component } from 'react';
import css from './format.module.css';

import PropTypes from 'prop-types';


import {formatNumber, porcent, disableNan} from './formatHelpers';


export default class DescontoIrpf extends Component {
    render() {

        const {descontoIrpf, label, salarioCompleto} = this.props;

        
        const porcento = porcent(salarioCompleto, descontoIrpf);

        
        return (
            <div className={css.formato }>
                 <span> {label}  </span> 

                {/* <span>{ `${formatNumber(descontoIrpf)}  (${porcento}%)` }</span> */}

                {/* <span>{ `${formatNumber(descontoIrpf)}  (${disableNan(porcento)}%)` }</span> */}

          <input type='text' readOnly value={`R$ ${formatNumber(descontoIrpf) || ''}  (${disableNan(porcento)}%)` }  />



                
            </div>
        )
    }
}

DescontoIrpf.propTypes = {
    descontoIrpf: PropTypes.number,
  };

  DescontoIrpf.defaultProps = {
      descontoIrpf: 0,
      
  }



