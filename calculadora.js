const inputStart = document.querySelector('#dtInicial')
const inputEnd = document.querySelector('#dtFinal')
const limpar = document.getElementById('limpar')
const consultar = document.getElementById('consultar')
const diferenca = document.getElementById('diferenca')

let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

//função para gravar os valores numa lista
function isNumero(dtInicial) {
    if(Date(dtInicial) != "" ){
        return true
    } else {
        return false
    }
}

function inLista(dtInicial, l){
    if (l.indexOf(Date(dtInicial)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar( ){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Date(num.value))
        let item = document.createElement('option')
        lista.appendChild(item)
    }else {
        window.alert("Valor inválido!")
    }
    num.value = "";
    num.focus();
}


function calculateDateDiff () {
    let dtInicial = inputStart.value;
    let dtFinal = inputEnd.value;

    dtInicial = new Date(dtInicial);
    dtFinal = new Date(dtFinal);

    let diffInTime = Math.abs(dtFinal - dtInicial);
    let timeInOneDay = 1000 * 60 * 60 * 24
    let diffInDays = Math.ceil(diffInTime / timeInOneDay);

    let diffInMonths = 0;
    let diffInYears = 0;

    while(diffInDays >= 365) {
        diffInYears = diffInYears + 1;
        diffInDays = diffInDays - 365;
    }

    
    while(diffInDays >= 30) {
        diffInMonths = diffInMonths + 1;
        diffInDays = diffInDays - 30;
    }

   
    retorno = res.innerHTML += `<p>Total em anos:   ${diffInYears} Total em meses:  ${diffInMonths} Total em dias: ${diffInDays}.</p> `;
    

}

consultar.addEventListener('click', () => {
    let retorno = calculateDateDiff();
    num.focus();

    diferenca.innerHTML = retorno;
})

limpar.addEventListener('click', () => {
    inputStart.value = "";
    inputEnd.value = "";
    retorno.value = ""
})