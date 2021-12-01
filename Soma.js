import {Verificador} from "./Verificador.js"

export class Soma extends Verificador{

    constructor(matriz1,matriz2){
        super()
        return this._soma(matriz1,matriz2)
    }
    _soma(matriz1,matriz2){
        super.confereMatriz(matriz1)
        super.confereMatriz(matriz2)
        var resultado = super.criaMatriz(super.linha(matriz1),super.coluna(matriz2))
        // se o numero de linhas e colunas for igual nas duas matrizes
        if (super.linha(matriz1) == super.linha(matriz2) && super.coluna(matriz1) == super.coluna(matriz2)) { 
            for(var i = 0; i < super.linha(matriz1); i++){
                for(var j = 0; j < super.coluna(matriz1); j++) {
                    resultado[i][j] = matriz1[i][j] + matriz2[i][j]
                }
            }
            return resultado
        } else {throw new Error('As matrizes não têm a mesma dimensão')}
    }
    
}