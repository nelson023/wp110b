let text = "name:nelsonchang , age:20 , height:170 , email:nelson30492@gmail.com"

let re1 = /[0-9]+/g;
let re2 = /[a-z]+/g;
let re3 = /:([0-9a-zA-Z])+/g;
let re4 = /:([0-9a-zA-Z])+/
let re5 = /:([0-9a-zA-Z]+)/
let re6 = /:\w+/;
let re7 = /:\d+/g;
let re8= /:\D+/g;
let re9 = /\w+@[\w\.]+/g;



console.log(text.match(re1));
console.log(text.match(re2));
console.log(text.match(re3));
console.log(text.match(re4));
console.log(text.match(re5));
console.log(text.match(re6));
console.log(text.match(re7));
console.log(text.match(re8));
console.log(text.match(re9));

//一開始忘記加逗點QQ，看來我需要更加細心
