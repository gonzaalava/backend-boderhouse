const sum = (a,b) => a + b
const substract = (a,b) => a - b
const multiply = (a,b) => a * b 

export const calc = (a, b, operation) => {
    switch (operation) {
        case "sum":
            console.log(sum(a,b))
            break
        case "subtract":
            console.log(subtractk(a, b))
            break
        case "multiply":
            console.log(multiply(a,b))
            break
        default:
            console.log("invalid operation: ${operation}")
            break
    }
}