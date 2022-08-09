// Cuadrado
console.group("Cuadrado")
const ladoCuadrado = 5
console.log("lado del cuadrado es: "+ladoCuadrado+ "cm")

const perimetroCuadrado = ladoCuadrado * 4
console.log("el perimetro es: "+perimetroCuadrado+ "cm")

const areaCuadrado = ladoCuadrado * ladoCuadrado
console.log("el area es de: "+areaCuadrado+"cm2")
console.groupEnd()

//! triangulo
console.group("Trinagulo")
const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const baseTriangulo = 4
const alturaTriangulo = 5.5
let encapsular

console.log(
  "Los lados del triangulo miden: "
  +ladoTriangulo1+"cm "
  +ladoTriangulo2+"cm "
  +baseTriangulo+"cm"
)

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
console.log("El perimetro es: "+perimetroTriangulo+"cm")

const areaTriangulo = (alturaTriangulo * baseTriangulo) / 2
console.log("El area del triangulo es: "+areaTriangulo+"cm")
console.groupEnd()

//Circulo
console.group("Circulo")
const radioCirculo = 4
const diametroCirculo = radioCirculo * 2
const PI = Math.PI
const perimetroCirculo = diametroCirculo * PI
const areaCirculo = (radioCirculo * radioCirculo) * PI

console.log(
  "El radio es: "+radioCirculo+"cm "
  +"El diametro es: "+diametroCirculo+"cm "
  +"El PI es: "+PI
  +" El perimetro es: "+perimetroCirculo+"cm "
  +"el area es: "+areaCirculo+"cm2"
)

console.groupEnd()

function saludar(){
  console.log("hola amigos")
}

//todo: codigo nuevo

let cuadricula = [
  {
    name: 'jesus',
    edad: 26
  },
  {
    name: 'mauro',
    edad: 29
  }
]
console.log(cuadricula)

const imprimirArry = array =>{

  for (let element of array){
    for(let object of element){
      console.log(object)
    }
  }
}

imprimirArry(cuadricula)