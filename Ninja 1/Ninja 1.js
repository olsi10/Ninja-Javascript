/* 시험 기간이므로 닌자 시험 공부로 합니도...

    <나오는 것>
    1. 아주 쉬운 기초 자바스크립트 내용
    2. spread 연산자 (...연산자)와 관련된 문제 다수 (객)
    3. 코드 분석 실행 "컨텍스트" 관련된 설명 문제 (서)
    4. 클로저 관련 코드 문제 (약 2~3줄 서)
    5. 프로토타입과 관련된 코드 문제 (약 1줄 서)

    <안 나오는 것>
    10. 자료구조 자료형 3
    -맵 관련 내용
    -중첩 구조 분해 관련

    객체 분해하기

    구조 분해는 나올 수 있는데
    동적 구조 분해같은 복잡하는 건 안 나옴

    12. 함수 심화학습 1
    - 재귀 관련 
    - 오래된 var
    - 즉시 실행 함수 표현식

    16. 프로토타입과 프로토타입 상속
    - 생성자 함수의 상속과 관련된 내용 
    
*/

//객체나 배열을 변수로 분해할 수 있게 하는 문법 - 구조 분해 할당 

let arr = ["Ninja", "Lee"];

let [first, second] = arr;

//상수 표현 가능
//const [f, s] = arr;

// let fitsrt = arr[0];
//let second = arr[1];

console.log(first);
console.log(second);

let myhome = ["Dad",  "Mom", "Sister", "Me", "Brother"];

//let [d, m, s, i, b] = myhome;

console.log("아빠 : ", myhome[0]);

//split 메서드 호출 결과로 배열 반환, 이후 배열된 반환을 바로 변수로 대입

let [d, m, s, i ,b] = "Dad Mom Sister Me Brother".split(' ');

console.log(d);
console.log(i);

//구조 분해 할당 적용 시 대입문 왼쪽에 몯느 종류의 대입이 가능한 무언가(변수, 상수, 속성 등) 올 수 있음

//쉼표로 특정 요소 무시 가능

let [f, , t] = ["Hi", "my", "name", "is"];

console.log(f);
console.log(t);

//위처럼 구조 할당에 포함되지 않는 요소들을 한 데 모아 저장하고 싶을 때 점 세 개... 연산자 사용

let [n1, n2, ...n3] = ["Hi", "my", "name", "is", "frog"];

console.log(n1);
console.log(n2);

//n3은 배열
console.log(n3[0]); //name
console.log(n3[1]); //is
console.log(n3[2]); //frog

//할당하고자 하는 변수의 개수가 분해하고자 하는 배열의 길이보다 크더라도 에러 X
let [q, w] = [];

console.log(q); //undefined
console.log(w); //undefined

//대입 기호를 사용하여 할당값이 없을 때 기본값 설정 가능

let [name = "Guest", surname = "Anonymous"] = ["Julius"];

console.log(name); //배열에서 받아온 값
console.log(surname); //기본값

let [ani = "dog", se] = [];

console.log(ani); //dog
console.log(se); //undefined

//객체 분해하기

let {var1, var2} = {var1 : 0, var2 : 1};

//할당 연산자 우측에 분해하고자 하는 객체 / 좌측에 상응하는 객체 프로퍼티 패턴
let op = {title : "menu", width : 100, height : 200};

//순서 바뀌어도 동일하게 동작
let { width, title, height} = op;

console.log(title);
console.log(width);
console.log(height);

//좌측 콜론 사용하여 프로퍼티 값을 프로퍼티 키와 다른 이름을 가진 변수에 저장가능
let options = {tit: "menu", width : 100, height : 200};

let {width : wid, height: hei, tit} = options;

console.log(wid);
console.log(hei);
console.log(tit);

//프로퍼티가 없는 경우를 대비해 대입 기호를 사용해 기본값 설정 가능
let opt = {titl : "menu"};

let {widt = 100, heig = 200, titl} = opt;

console.log(widt);
console.log(heig);
console.log(tit);

//콜론과 할당 연산자 동시에 사용 가능
let opti = {title : "menu"};

let {width : th = 100, height :ht = 200, tt} = opti;

console.log(th); //100
console.log(ht); //200
console.log(tt); //menu

//나머지 프로퍼티 ...를 객체에 할당 가능
let my = {name : "yun", mbti : "INFJ", chool : "mirim"};

let {na, ...rest} = my;

console.log(na);
console.log(rest.mbti);
console.log(rest.chool);

//자료구조와 자료형 3 끝!!!!