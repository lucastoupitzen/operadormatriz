export class Verificador{
    constructor(){
        if (this.constructor == Verificador){
            throw new Error("Não acesse a classe verificador diretamente.")
        }
    }
    //conta o número de linhas
    linha(matriz){
        return matriz.length 
    }
    //conta o numero de colunas
    coluna(matriz) {
        return matriz[0].length
    }
    confereMatriz(matriz){
        var comprimentoLinhaRef = matriz[0].length
        var controle = true
        for(var i=0; i < matriz.length; i++){
            // se alguma linha tem comprimento diferente da linha 0(referencia)
            if (matriz[i].length != comprimentoLinhaRef) {
                controle = false
            }
        }
        if (controle == true) {
            return
        } else {throw new Error("Há um erro na construção da matriz")}
    }
    criaMatriz(linha,coluna){
        let matriz = []
        for (let i=0; i < linha; i++){
            matriz.push([])
        }
        for (let k = 0; k < matriz.length; k++){
            for (let j = 0; j < coluna; j++) {
                matriz[k].push(0)
            }
        }
        return matriz
    }
}