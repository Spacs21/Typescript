// 1 masala
function evenNum(num) {
    var total = 0;
    for (var i = 1; i <= num; i++) {
        if (i % 2 === 0)
            total += i;
    }
    return total;
}
console.log(evenNum(12));
// 2 masala
function checkNumber(bool) {
    return (bool ? 1 : 0);
}
console.log(checkNumber(true));
// 3 masala
function checkName(name) {
    return name.slice(0, 2);
}
console.log(checkName("laylo"));
// 4 masala
function mathNum(num) {
    return Math.floor(num) + 2;
}
console.log(mathNum(5.3));
// 5 masala
function numToStr(num) {
    ++num;
    var result = num.toString();
    return result;
}
console.log(numToStr(4));
// 6 masala
function loopStr(str) {
    for (var i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
}
console.log(loopStr("salom"));
// 7 masala
function reverseNum(n) {
    for (var i = n; i >= -n; i--) {
        console.log(i);
    }
}
console.log(reverseNum(2));
// 8 masala
function boolNum(num) {
    return num ? true : false;
}
console.log(boolNum(1));
// 9 masala
function identity(name, nation) {
    return "My name is ".concat(name, ". I'm an ").concat(nation);
}
console.log(identity("Laylo", "Uzbek"));
