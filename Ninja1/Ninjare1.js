/*
0. 아주 쉬운 기초 자바스크립트 관련 내용 (이전 시험 범위, 객관식)
1. spread 연산자(... 연산자)와 관련된 문제 다수 (객관식)
2. 코드를 분석하고 실행 "컨텍스트"와 관련된 설명을 해야 하는 문제 (서술형)
3. 클로저와 관련된 코드 문제 (약 2~3줄, 서술형)
4. 프로토타입과 관련된 코드 문제 (약 1줄, 서술형)
*/

// 자바스크립트 언어에서는 객체나 배열을 변수로 분해할 수 있는
// "구조 분해 할당" 사용 가능


let arr = ["yun", "choi"]
let [name, sur] = arr;

console.log(name);
console.log(sur);

//split 메서드 호출 결과로 배열 반환, 반환된 배열 변수에 바로 대입
let [f, s] = "yun choi".split(' ');

let user = {};
[user.name, user.sur] = "yun choi".split(' ');

//쉼포를 사용하여 특정 요소 무시 가능

let animal = ["dog", "male", 5];

let [n, , age] = animal;

console.log(n);
console.log(age);

//spread 문법

let [a, b, ...c] = ["A", "B", "C", "D", "E"];

console.log(a); //A
console.log(b); //B

console.log(c[0]); //C
console.log(c[1]); //D

console.log(c.length);

//12번 함수 심화1
// 전역 실행 컨텍스트 -> 렉시컬 환경 (a, b, add, result (호이스팅)) 
//함수를 실행할 때마다 실행 컨텍스트 만들어짐
//add를 호출하면 함수를 컨텍스트로 쓴다.
//add 함수 실행 컨텍스트 + 렉시컬 환경
// 렉시컬 환경 -> a, b (파라미터 값), argument

//클로저

// let [firstName, , title, , last] = ["Julius", "Caesar", "Consul", "of the Roman Republic", "No"];
// alert( firstName ); // Julius
// alert( title ); // Consul
// alert( last )

