const prompt = require('prompt-sync')();

const  age = prompt("나이를 입력하세요:");

parseFloat(age);


if (age >= 18) {
    console.log("안녕하세요");
} else if (age >= 10) {
    console.log("안녕!반가워 꼬마 친구!");
} else {
    console.log("부럽다.");
}