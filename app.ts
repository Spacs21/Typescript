// 1 masala
function evenNum(num: number):number{
    let total = 0
    for(let i = 1; i <= num; i++){
        if(i%2===0) total+=i;
    }
    return total
}
console.log(evenNum(12));


// 2 masala
function checkNumber(bool: boolean): number {
    return (bool ? 1 : 0)
}
console.log(checkNumber(true))

// 3 masala
function checkName(name: string):string{
    return name.slice(0,2)
}
console.log(checkName("laylo"))

// 4 masala
function mathNum(num: number):number{
    return Math.floor(num) + 2
}
console.log(mathNum(5.3))

// 5 masala
function numToStr(num: number):string{
    ++num
    let result = num.toString()
    return result
}
console.log(numToStr(4))

// 6 masala
function loopStr(str: string): void{
    for(let i = 0; i < str.length; i++){
        console.log(str[i])
    }
} 
console.log(loopStr("salom"))

// 7 masala
function reverseNum(n:number): void{
    for(let i = n; i >= -n; i--){
        console.log(i)
    }
}
console.log(reverseNum(2))

// 8 masala
function boolNum(num:number):boolean{
    return num ? true : false
}
console.log(boolNum(1))

// 9 masala
function identity(name: string, nation: string):string{
    return `My name is ${name}. I'm an ${nation}`
}
console.log(identity("Laylo", "Uzbek"))