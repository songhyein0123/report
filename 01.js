// const lion = {
//     이름 : "심바",
//     나이 : 3,
//     주인공 : true,
//     대사 : "하쿠나마타타",
// };

// function incrementAge(lion) {
//     lion.나이 = lion.나이 + 1;
//     return lion.나이;
// }
// console.log(incrementAge(lion));

// const x = 3;

// if(x===3) {
//     console.log("x는 3입니다")
// } else {
//     console.log("x는 3이 아닙니다.")
// }

// 문제 1
// function checkNumber(num){
//     if(num>=1){
//         console. log("x는 양수입니다.")
//     } else if (num=0) {
//         "x는 0입니다."
//     } else {
//         console. log("x는 음수입니다.")
//     }
// }

// 문제2.
// function checkAge(age){
//     if (age>17){
//         console. log("Access granted")
//     } else {
//         console. log("Access denied")
//     }
// } 

// // 문제3. 
// function checkEvenOdd(num) {
//     if (num%2===0){
//         console.log ("짝수입니다.")
//     } else if(num===0){
//         console.log ("0입니다.")
//     }
//     else {
//         console.log ("홀수입니다.")
//     }
// }
// checkEvenOdd(4)

// //문제4.
// function assignGrade(score){
//     if (score>=90){
//         console.log("A")
//     }else if(score >=80){
//         console.log("B")
//     }else if(score >=70){
//         console.log("C")
//     }else if(score >=60){
//         console.log("D")
//     }else {
//         console.log("F")
//     }
// }

// assignGrade(95);

// //문제5.
// for(let i = 0; i < 101; i = i + 5){
//     console.log(i);
// }

// function printNumbers() {
//     for (let i = 1; i <= 10; i++) {
//         console.log(i);
//     }
// }

// printNumbers()

// function sumUpTo(n) {
//     for (let i = 1; i <= n; i++) {
//         sum = sum + i;
//         console. log(sum);
//     }
// }

// sumUpTo(5);

// fucnction printEvenNumbers(arr){
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0)
//             console.log(arr[i])
//     }
//  } 

// fuction printTest (arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] % 3 === 0)
//         console.log(arr[i])
//     }
// }

// function printReversed(arr){
//     for(let i = arr.lenth; i>0; i--){
//         console.log(arr[i - 1])
//     }
// }

// function getName(person) {
//     for(let i = 0; i<person.length; 1++)
//     if(person[i] = name){
//         console.log(name)
//     }
//   }
  
  
//   const name1 = getName({ name: 'Alice', age: 25 });
//   console.log(name1); 
  
//   const name2 = getName({ name: 'Bob', age: 30 });
//   console.log(name2); 

// 2번이 안나온 이유 함수를 실행안시켜서 -> Test();를 실행시켜야한다
// -> 이번 실습에 함수를 실행시켜달라는 문제가 많을 것이다. 그러므로 무조건 실행시켜라.

// 반복문 응용이 실습에 나오는데 그게 좀 어려울 수 있다.
// 내일 실습에 반복문 어렵게 나온다.
// if과 섞여서 나온다. 

function getName(person) {
    return person["name"];
  }
  
  const name1 = getName({ name: 'Alice', age: 25 });
  console.log(name1); // 출력: Alice
  
  const name2 = getName({ name: 'Bob', age: 30 });
  console.log(name2); // 출력: Bob