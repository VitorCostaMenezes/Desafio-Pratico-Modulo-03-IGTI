//importando a api propria do java script para formatação dw números
const formatter =  Intl.NumberFormat('pt-BR');


function porcent (fullsalario, desconto) {
    return  (100 - ( (100 * (fullsalario - desconto)) / fullsalario )).toFixed(2)
}


function disableNan (valor) {
    if(isNaN(valor)){
     return  '';
    } else {
        return valor;
    }
    
}


function formatNumber (value) {
    //transforma o valor recebedio para um padrão de numeração brasileiro
    return formatter.format(value);
}

export {  formatNumber, porcent, disableNan };