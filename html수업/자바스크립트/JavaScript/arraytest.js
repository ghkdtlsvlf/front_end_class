
// const fish = ['정어리', '고등어', '돌고래', '참치', '고래상어', '코끼리'];
//
// fish.splice(5,1,);
//
// console.log(fish);
//
// fish.splice(4,0,'다금바리');
//
// console.log(fish);
//
// fish.splice(2,1,'옥돔','갈치');
//
//
// console.log(fish);
//
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArr = arr.map(function(el) {
//     if(el%2 === 0)  return el;
//
// });
//
// console.log(newArr);
//
// const babaYaga = {
//     name: "John Wick",
//     age: 53,
//     from: "벨라루스",
//     askingHim(){
//         console.log("Yeah, I'm thinking I'm back!");
//     }
// };
//
// console.log(`${babaYaga.name} from ${babaYaga.from}`);
// console.log(`${babaYaga['name']} from ${babaYaga['from']}`);


// const aespa = {
//     members: ['카리나', '윈터', '지젤', '닝닝'],
//     from: '광야',
//     sing: function(){
//         return "적대적인 고난과 슬픔은 널 더 popping 진화시켜!"
//     }
// };
// //
// // console.log(aespa.hasOwnProperty('itzy'));
// // console.log(aespa.hasOwnProperty('from'));
//
// console.log(Object.keys(aespa));
// console.log(Object.values(aespa));
// function sayName(){
//     console.log(this.name);
// }
// var name = 'Hero';
//
// let peter = {
//     name : 'Peter Parker',
//     sayName : sayName
// };
//
// let bruce = {
//     name : 'Bruce Wayne',
//     sayName : peter.sayName
// };
//
// bruce.sayName();

// const me = {
//     name : '황신필',
//     address : '서울 용산구',
//     phoneNum : '010-0-0000',
//     canWalk : function(){
//         console.log('내가 걷는다. ');
//     },
//     callname : function (friend){
//         friend.sayname();
//     }
// }

function friend(name)  {
    this.name = name;
}

friend.prototype.sayYourName = function (){
    console.log(`삐리비리. 제 이름은 ${this.name}입니다.`);
}

let friend1 = new friend('주성');

friend1.sayYourName();


