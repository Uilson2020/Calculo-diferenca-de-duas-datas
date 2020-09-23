const valorInicial = document.querySelector('#dtInicial')
const valorFinal = document.querySelector('#dtFinal')
const limparRetorno = document.getElementById('limpar')
const consultar = document.getElementById('consultar')
const diferenca = document.getElementById('diferenca')
const res = document.querySelector('#res')

function eData() {
    var retorno = true

    if(valorInicial.value == "" || valorFinal.value == ""){
        retorno = false
        window.alert("Valor de um campo ou mais está(ão) vazio(s), preencha os dois campos!")
    } 

    if(valorInicial.value != "" && valorInicial.value == valorFinal.value){
        retorno = false
        window.alert("Datas iguais, digite uma data diferente!")
    }

    return retorno   
}

function calculaDiferenca () {
    if(eData() == true){
        let verificarDataMenor = true
        let dtInicial = valorInicial.value;
        let dtFinal = valorFinal.value;

        let ano = dtInicial.substring(0,4)
        let ano1 = parseInt(ano,10);
        let anoV = dtFinal.substring(0,4) 
        let ano2 = parseInt(anoV,10)
        let diferencaAnos = ano2 - ano1
      
        let mes = dtInicial.substring(5,7)
        let mes1 = parseInt(mes,10)
        let mesV = dtFinal.substring(5,7)
        let mes2 = parseInt(mesV,10)
        let diferencaMes = mes2 - mes1

        let dia = dtInicial.substring(8,10)
        let dia1 = parseInt(dia, 10)
        let diaV = dtFinal.substring(8,10)
        let dia2 = parseInt(diaV,10)
        let diferencaDia = (dia2 - dia1)

        if(diferencaAnos < 0 || (diferencaMes < 0 && diferencaAnos <= 0) || (diferencaDia < 0 && diferencaAnos <= 0 && diferencaMes <= 0) ){
            window.alert("Data final deve ser maior que data inicial")
            verificarDataMenor = false
        } 


        if(diferencaMes < 0 ){
            diferencaAnos = diferencaAnos -1
            diferencaMes = diferencaMes + 12
        }
 
        if(diferencaDia < 0){
            diferencaMes = diferencaMes - 1
            diferencaDia = diferencaDia + 30
        }
        
        if(verificarDataMenor == false){
            retorno = ""
        } else {
            retorno = res.innerHTML += `<p>Total em anos:   ${diferencaAnos} Total em meses:  ${diferencaMes} Total em dias: ${diferencaDia}.</p> `;
        }
    }  
}

limparRetorno.addEventListener('click', () => {
    valorInicial.value = "";
    valorFinal.value = "";
    res.innerHTML = ""

})

consultar.addEventListener('click', () => {
    let retorno = calculaDiferenca();
    diferenca.innerHTML = retorno;
})

