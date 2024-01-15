
const prompt = require('prompt-sync')();

const score = prompt('성적을 입력하세요');

const result = score>=90 ?'A':
    score>=80 ? 'B' :
        score>=70? 'C':
            score>=60? 'D': 'fail';


switch(result){

    case 'A':
        console.log("A");
        break;
    case 'B':
        console.log("B");
        break;

    case 'C':
        console.log("C");
        break;
    case 'D':
        console.log("D");
        break;
    default:
        console.log("강해져서 돌아와라");
        break;

}

switch(true){

    case score>=90:
        console.log("A");
        break;
    case score>=80:
        console.log("B");
        break;
    case score>=70:
        console.log("C");
        break;
    case score>=60:
        console.log("D");
        break;
    default:
        console.log("강해져서 돌아와라");
        break;

}

