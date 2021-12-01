import {Verificador} from "./Verificador.js"

export class Produto extends Verificador{
    constructor(matriz1,matriz2){
        super()
        return this._produto(matriz1,matriz2)
    }
    _produto(matriz1,matriz2){
        super.confereMatriz(matriz1)
        super.confereMatriz(matriz2) 
        let resultado = super.criaMatriz(super.linha(matriz1),super.coluna(matriz2))
        if(super.coluna(matriz1) == super.linha(matriz2)) {
            //percorre as linhas da matriz1
            for(let i = 0; i < matriz1.length; i++){
                //percorre as colunas da matriz2
                for(let k = 0; k < matriz2[0].length; k++){
                    var controle = 0
                    //percorre as colunas da matriz1 e linhas da matriz2
                    for(let j = 0; j < matriz2.length; j++) {
                        controle += matriz1[i][j] * matriz2[j][k]
                    }
                    resultado[i][k] = controle 
                }
            }
            return resultado
        }else {
            throw new Error("Não é possível realizar essa multiplicação de matrizes")
        }
        
        
    }
}