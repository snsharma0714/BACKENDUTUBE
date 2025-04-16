// array
// foreach map.filter.find.indexof
// var arr = [1, 2, 2, 3, 4, 5];
// arr.forEach(function (val) {
//     console.log(val + " Hello World!");
// })

// var ans = arr.map(function (val) {
//     return val * 2;
// })
// console.log(ans);

// var ans = arr.filter(function (val) {
//     if (val > 2) {
//         return true;
//     }
//     else return false;
// })
// console.log(ans);

// var ans = arr.find(function (val) {
//     if (val === 2) {
//         return true;
//     }
//     else return false;
// })
// console.log(ans);

var obj = {
    name : "Harsh",
    age : 12
}

Object.freeze(obj);
obj.age = 25;