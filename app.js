console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

// var user = os.userInfo();
//
// //NON-ES6
// // fs.appendFile('greetings.txt', 'Hello ' + user.username + '!', function(err) {
// //   if(err) {
// //     console.log('Unable to write to file');
// //   }
// // });
//
// //ES6 with backticks
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function(err) {
//   if(err) {
//     console.log('Unable to write to file');
//   }
// });

// var res = notes.addNote();
// console.log(res);

// var res = notes.add(1,17);
// console.log(res);

console.log(_.isString(false));
console.log(_.isString('true'));

console.log(_.uniq(['Jose']));
