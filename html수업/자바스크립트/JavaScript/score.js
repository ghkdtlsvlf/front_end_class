const prompt = require('prompt-sync')();

const score = prompt('성적을 입력하세요');


score>=90 ? console.log('A'):
    score>=80 ? console.log('B') :
        score>=70? console.log('C'):
            score>=60? console.log('D'): console.log("강해져서 돌아와라");
