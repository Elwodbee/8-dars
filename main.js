let newArray =[];

let numbers = [76,88,99,2,6,25,62,14,22,97,43,64]
for(i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 == 0){
        newArray.push(numbers[i])
    }
}
console.log(newArray);