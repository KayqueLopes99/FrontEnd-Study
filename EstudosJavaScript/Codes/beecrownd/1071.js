let num1 = 15
let num2 = 12
let sum = 0

let min = Math.min(num1, num2)
let max = Math.max(num1, num2)


for(let i=min + 1; i < max; i++){
    if(i % 2 !== 0){
        sum+=i
    }
}

console.log(sum)
