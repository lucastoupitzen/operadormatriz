import {Soma} from "./Soma.js"
import {Subtracao} from "./Subtracao.js"
import {Produto} from "./Produto.js"

let matrizA = [[1,5],[2,4],[9,0]]
let matrizB = [[3,6],[0,12],[8,1]]

let resultSoma = new Soma(matrizA,matrizB)

console.log(resultSoma)


let matrizE = [[1,2],[3,4]]
let matrizF = [[1,1],[1,1],[3,3]]

let resultprod = new Produto(matrizE,matrizF)

console.log(resultprod)


// node ./Programação/Javascript/alura/cursopoo/operadormatriz/index.js 