import React, { Component } from 'react';
import BaseInss from './components/BaseInss';
import { calculateSalaryFrom } from './salary-5/salary';
import DescontoInss from './components/DescontoInss';
import BaseIrpf from './components/BaseIrpf';
import DescontoIrpf from './components/DescontoIrpf';
import SalarioLiquido from './components/SalarioLiquido';
import css from './components/format.module.css';
// import AppBarra from './components/AppBarra';

import { porcent} from './components/formatHelpers';
import Bar from './components/Bar';

export default class App extends Component {

  constructor () {
    super();


    this.state ={
      fullSalary: '',
      recebeSalario: 0,

      resultados: { baseINSS: 0,
                    discountINSS: 0,
                    baseIRPF: 0,
                    discountIRPF: 0,
                    netSalary: 0,}
                }

  }

  handleInputChange = (event) => {

      const salarioDigitado = Number(event.target.value);

      this.setState({
        fullSalary: salarioDigitado,
        // recebeSalario: Number(salarioDigitado),
        
      })

  }


componentDidUpdate (_, previous) {

  const {fullSalary} = this.state;

  const {fullSalary: oldsalary} = previous;

  const {fullSalary: newSalary} = this.state;


  if (oldsalary !== newSalary) {

  const results =   calculateSalaryFrom(fullSalary);

    this.setState({
      resultados: results,
    })

  }


}


  render() {

      const {fullSalary, resultados} = this.state;

       const { baseINSS,  discountINSS, baseIRPF, discountIRPF, netSalary} = resultados;

    return (

      <div>

        <h1>React Salário</h1>

        <div className={css.formato}>

        <span> {"Salário Bruto:"} </span> 

                 <input  type='number'  value={fullSalary}  onChange={this.handleInputChange}
                      placeholder='Digite o valor do seu salário' />
        </div>
                 

         <BaseInss label='Base INSS:  ' baseInss={baseINSS} />
       
         <DescontoInss label='Desconto INSS:  ' descontoInss={discountINSS} salarioCompleto={fullSalary} />

        <BaseIrpf label='Base IRPF: ' baseIrpf={baseIRPF}  />

        <DescontoIrpf label='Desconto IRPF: ' descontoIrpf={discountIRPF} salarioCompleto={fullSalary} />

        <SalarioLiquido label='Salário liquido: ' salarioLiquido={netSalary} salarioCompleto={fullSalary} />

        {/* <AppBarra porcentSalario={porcent(fullSalary, netSalary)}  porcentInss={porcent(fullSalary, discountINSS)}
                  porcentIrfp={porcent(fullSalary, discountIRPF)}    
        /> */}

      <div  style={{  display: "flex", flexDirection: "row",
            alignItems: "center", justifyContent: "center" }}  >

            <Bar value={porcent(fullSalary, discountINSS)} color="#e67e22"  />

            <Bar value={porcent(fullSalary, discountIRPF)} color="#c0392b" />

            <Bar value={porcent(fullSalary, netSalary)} color="#16a085" />

          

            </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

      </div>


    );
  }
}
