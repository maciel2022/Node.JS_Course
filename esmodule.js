  // Podemnos importar por default, o utilizano destructiring y exportando individualmete cada funcion
  import math, { add, subtract, divide, multiply } from './math/index.js'

  console.log(math.add(10, 20))
  console.log(math.subtract(10, 20))
  console.log(math.divide(10, 20))
  console.log(math.multiply(10, 20))

  console.log(add(10, 20))
  console.log(subtract(10, 20))
  console.log(divide(10, 20))
  console.log(multiply(10, 20))