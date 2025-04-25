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

// var obj = {
//     name : "Harsh",
//     age : 12
// }

// Object.freeze(obj);
// obj.age = 25;

// function abcd() {
//     return 123;
// }


// var ans = abcd();

// async function abcd() {
//     var blob = await fetch(`https://randomuser.me/api/`);
//     var data = await blob.json();

//     console.log(data.results[0].name);
// }

// abcd();



//------------------------------ lecture 2------------------------

// const fs = require('fs');

// First, let's write some content to the file
// fs.writeFile("hey.txt", "Hey hello kaise ho", function(err) {
// fs.appendFile("hey.txt", " Mai to acha hu", function(err) {
// fs.rename("hey.txt", "hey1.txt", function(err) {

//  fs.copyFile("hey1.txt", "./copy/chacha.txt", function(err) {
// fs.unlink("hey1.txt", function(err) {

// fs.rm("./copy", {recursive: true}, function(err) {
//  fs.readFile("hey.txt", "utf-8", function(err, data) {
//     if (err) {
//         console.error(err);
//     } else {
        // console.log("File written successfully!");
        // console.log("File deleted successfully!");
        // console.log("Directory deleted successfully!");
//         console.log(data);
//     }
// });

// Now watch for changes in the file
// fs.watchFile("hey.txt", function(curr, prev) {
//     console.log("File changed!");
//     console.log("Previous size:", prev.size);
//     console.log("Current size:", curr.size);
// });


// const http = require('http');

// const server = http.createServer(function(req, res) {
//     res.end("Hello World!");
// });

// server.listen(3000);

// --------------------lecture 4-------------------------

// import express from 'express'

// const app = express()

// app.get('/', (req, res) => {
//   res.send('Hello Worlddddd')
// })

// app.listen(3000)


// import express from 'express';
// const app = express();

// app.use(function(req, res, next) {
//     console.log("I am a middleware");
//     next();
// });

// app.get('/', function(req, res) {
//     res.send('Hello World!');
// })
// app.get('/about', function(req, res) {
//     res.send('Hello About!');
// });

// app.get('/profile', function(req, res, next) {
//     return next(new Error("I am an error"));
// });

// app.use(function(err, req, res, next) {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

// app.listen(3000);

//---------------------------------Lecture 5--------------------------------

//hum log kuch bhi data frontend par browser pr rakh skte hai abd jab bhi aap kuch 
// bhi request par karoge wo fe pr saved data automatically backend par chla jayega

