import React, { Component } from 'react';
import css from './format.module.css';

import {formatNumber, porcent, disableNan} from './formatHelpers';
import PropTypes from 'prop-types';



export default class DescontoInss extends Component {
    render() {

        const {descontoInss, label, salarioCompleto} = this.props;

        const porcento = porcent(salarioCompleto, descontoInss);
        
        return (
            <div className={css.formato }>
                <span> {label}  </span> 
                {/* <span>{ `${disableNan(formatNumber(descontoInss))}  (${disableNan(porcento)}%)` }</span> */}

          <input type='text' readOnly value={`R$ ${formatNumber(descontoInss) || ''}  (${disableNan(porcento)}%)` } />

            </div>
        )
    }
}

DescontoInss.propTypes = {
    descontoInss: PropTypes.number,
  };

  DescontoInss.defaultProps = {
      descontoInss: 0
  }
