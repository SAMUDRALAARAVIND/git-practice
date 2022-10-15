function One() {
    console.log("One")
}
function constructorFunction() {
    this.name = "Aravind" 
    this.age = 22 
}
let x = new constructorFunction() 
console.log(x)