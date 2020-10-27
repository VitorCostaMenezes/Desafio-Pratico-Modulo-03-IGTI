import React from "react";
import "./styles.css";
import Bar from "./Bar";
// import Bar from "./Bar";

export default class AppBarra extends React.Component {
  constructor() {
    super();

    this.state = {
      barSalario: 0,
      barInss: 0,
      barIrfp: 0
    };
  }


  handleChangeBar1 = event => {

    const {porcentSalario, porcentInss, porcentIrfp} = this.props;

    const barSalario = porcentSalario;

    const barInss = porcentInss;

    const barIrfp = porcentIrfp

    this.setState({ barSalario, barInss, barIrfp });
  };



//   handleChangeBar2 = event => {
//     const bar2 = +event.target.value;
//     const bar1 = 100 - bar2;

//     this.setState({ bar1, bar2 });
//   };

componentDidUpdate(_, previous) {
    
}

  

  render() {
    const { barSalario, barInss, barIrfp} = this.state;

    

    return (
      <div>
        <div className="App">
          <h1>React barras</h1>

          <input  type="number" placeholder="Barra 1" value={barSalario} 
           min="0" max="100"  step="1"  />

          &nbsp;

          <input   type="number"  placeholder="Barra 2"  value={barInss}
              min="0"  max="100"  step="1"  />

            &nbsp;

          <input   type="number"  placeholder="Barra 3"  value={barIrfp}
              min="0"  max="100"  step="1"  />

        </div>




        <div  style={{  display: "flex", flexDirection: "row",
            alignItems: "center", justifyContent: "center" }}  >
                
                
          <Bar value={barSalario} color="red" />
          <Bar value={barInss} color="green" />
          <Bar value={barIrfp} color="gray" />


        
          
        </div>
      </div>
    );
  }
}