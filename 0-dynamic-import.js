// const calc = require("./utils/calc.mjs")
const CALC = true

if (CALC) {
import("./utils/calc.mjs")
    .then(calcModule => {
        console.log(calcModule)
        calcModule.calc(5, 5, "sum")
        calcModule.calc(7, 3, "subtract")
        calcModule.calc(5, 3, "multiply")
    })
}