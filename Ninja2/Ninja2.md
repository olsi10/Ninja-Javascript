# Date 객체와 날짜

- 날짜를 저장할 수 있고 날짜 관련 메서드를 제공해주는 내장 객체
- 인수없이 new 연산자와 함께 호출

<br />

```javascript
let date = new Date();
```

<br />

- milliseconds 단위 유닉스 시간을 나타내는 정수 반환
- 타임스탬프 => 1970월 1월 1일 기준으로 흘러간 밀리초를 나타내는 정수<br />
  타임스탬프 -> 유닉스 타임스탬프, Posix 시간, epoch등

<br />

1970년 1월 1일을 나타내는 객체

```javascript
let jan = new Date(0);

let jan1 = new Date(24 * 3600 * 1000); //1970년 1월 2일

let dec31 = new Date(-25 * 3600 * 1000); //1969년 12월 31일
```

<br />

```javascript
let date = new Date("2017-04-04");
console.log(date); //날짜 정보가 담긴 문자열을 전달했다면 자동 구문 변환됨
```

- getTime() : 주어진 일시와 1970년 1월 1이 사이 간격을 밀리초로 나타냄
- getTimezoneOffSet() : 현지 시간과 표준 시간의 차이(분) 반환

<br />

setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds) (1970년 1월 1일 00:00:00 UTC부터 밀리초 이후를 나타내는 날짜를
설정)

<br />

```javascript
let today = new Date();

today.setHours(0); //시만 0으로 변경
console.log(today);
```

<br />

# Date 객체를 숫자로 변경해 시간차 측정하기

- Date 객체를 숫자형으로 변경하면 타임스탬프 반환 (타임스탬프 => 밀리세컨드)

```javascript
let date = new Date();
//date.getTime() 호출한 것과 같은 값 반홤
console.log(+date);
```

<br />

```javascript
let start = new Date();

//시간이 걸리는, 원하는 작업 수행
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

//측정 졸료
let end = new Date();

//빼기 연산자 사용으로 숫자로 형변환, 타임스탬프 밴 값
console.log(`작업 완료까지 ${end - start} 밀리초 걸렸습니다.`);
```

<br />

# Date.now()

- Date.now는 new Date().getTime()과 동일한 결과 반환, 중간에 Date 안 만들어도 돼서 장점임!

```javascript
// 측정 시작
let start = Date.now();
// 시간이 걸리는, 원하는 작업을 수행
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}
// 측정 종료
let end = Date.now();
alert(`작업 완료까지 ${end - start} 밀리초가 걸렸습니다.`);
```

<br />

# Date.parse 와 문자열

- Date.parse(str) 메서드를 쓰면 문자열에서 타임스탬프 값을 반환받을 수 있음(날짜객체 X)

- 문자열 형식은 'yyyy-mm-dd:hh:mm:ss:ms

- 조건 안 맞으면 NaN 반환

```javascript
let ms1 = Date.parse("2005-03-04:12:45:34:455");
console.log(ms1);
```

<br />

```javascript
//parse 메소드 호출로 반환받은 타임스탬프를 이용해서 Date 객체 만들 수도 잇음
let date12 = new Date(Date.parse("2012-01-26T13:51:50.417-07:00"));
console.log(date12);
```

---

# 실행 컨텍스트와 스택

- 실행 중인 함수의 실행 절차에 대한 정보는 해당 함수의 실행 컨텍스트에 저장됨
- 실행 컨텍스트는 실행 함수에 대한 세부 정보를 담고 있는 내부 데이터 구조
- 제어 흐름의 위치, 변수 값, this 값 등 상세 내부 정보가 실행 컨텍스트에 저장
- 함수 호출 일회당 정확히 하나의 실행 컨텍스트가 생성

<br />

- 함수 내부에서 함수의 중첩 호출이 있으 경우 아래와 같은 절차 수행

```javascript
1. 현재 함수의 실행이 일시 중지됨
2. 중지된 함수와 연관된 실행 컨텍스트는 실행 컨텍스트 스택(execution context stack) 이라
는 특별한 자료 구조에 저장됨
3. 중첩된 함수의 호출이 실행됨
4. 중첩 호출 실행이 끝난 이후 실행 컨텍스트 스택에서 일시 중단한 함수의 실행 컨텍스트를 꺼내
오고, 중단한 함수의 실행을 다시 진행함
```

---

<br />

# 나머지 매개변수와 전개 문법

- 자바스크립트 언어에서 임의의 개수의 인자값을 전달받는 법
- 함수 호출 시 배열의 내용을 가변인자 형태로 전달하는 법

<br />

## 나머지 매개 변수

- 자바스크립트에서 함수에 넘겨주는 인수의 개수에 제약 업승ㅁ

```javascript
function sum(a, b) {
  return a + b;
}

//호출할 때 원하는만큼 인자값 전달 가능
console.log(sum(1, 2, 3, 4, 5));
```

<br />

- 함수를 정의할 때 인수를 두 개만 받고, 실제 함수 호출 시 더 많은 인수를 줘도 에러 X
- 가변 인자를 전달받으려면 뒤에 ...을 붙이면 됨, **나머지 매개변수를 모아 배열에 넣는다**

<br />

```javascript
function sumAll(...args) {
  console.log(Array.isArray(args)); //true

  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}

console.log(sumAll(1)); // [1]

console.log(sumAll(1, 2)); //[[ 1, 2 ]]

console.log(sumAll(1, 2, 3)); //[1, 2, 3]
```

<br />

- 앞 부분은 매개변수는 변수로, 그 이외 매개변수는 배열로 받을 수 있음
- 단, 가변 인자를 받을 배열은 반드시 맨 마지막에 정의

```javascript
function showName(f, l, ...titles) {
  console.log(f + " " + l + " "); //Choi yun

  console.log(titles[0]); //hi
  console.log(titles[1]); //bye
  console.log(titles.length); //3
}

showName("Choi", "yun", "hi", "bye", "poop");
```

<br />

# arguments 변수

- arguments 라는 이름의 특별한 유사 객체를 이용하면 인덱스로 전달받는 모든 인수에 접근 가능
- arguments 함수 호출 시점에서 함수 내부에 접근할 수 있는 특수한 객체<br />**(함수 호출 시 함수 실행 컨텍스트의 생성 단계에서 만들어지는 객체)**<br />
- arguments 는 유사 배열 객체면서 반복 가능한 객체
- 즉, 엄격히 말하자면 배열은 아님. 그래서 배열에서 제공하는 메서드 사용 불가
- 반복 가능하므로 순회 가능

<br />

```javascript
function sumAll() {
  console.log(Array.isArray(arguments)); //false
  let sum = 0;

  for (let arg of arguments) {
    sum += arg;
  }
  return sum;
}

console.log(sumAll(1, 2)); //3
console.log(sumAll(1, 2, 3)); //6
```

<br />

```javascript
function showName() {
  alert(arguments.length);
  alert(arguments[0]);
  alert(arguments[1]);
  // arguments는 이터러블 객체이기 때문에 다음과 같이 for ... of 구문을 사용해서 인수 나열 가능
  // for(let arg of arguments) alert(arg);
}
// 2, Julius, Caesar가 출력됨
showName("Julius", "Caesar");
// 1, Bora, undefined가 출력됨(두 번째 인수는 없음)
showName("Bora");
```

<br />

## 화살표 함수

- this도 갖지 않고, 자체 arguments도 갖지 않음!

---

# spread 문법

- 전개 문법을 이용해 배열을 가변 인자로 받는 함수에 전달 가능
- 점 세 개 (...) 사용, 나머지 매개변수와 비슷해 보이지만,
- **전개 문법은 나머지 매개 변수와 반대의 역할을 함!!!**

<br />

```javascript
console.log(Math.max(3, 5, 1)); // NaN

let arr = [3, 5, 1];
//배열 직접 전달 불가!! max는 가변 인수를 전달받는 함수
console.log(Math.max(arr));
console.log(Math.max(...arr)); //5

let arr1 = [1 - 2];
let arr2 = [8, -8];

//여러개 전달 가능!
console.log(Math.max(...arr1, ...arr2)); //8
```

<br />

- 배열 합칠 때도 전개 문법 사용 가능

```javascript
let arr1 = ["Hello", 1234];
let arr2 = [5678, "world"];

let merged = [1, ...arr1, 2, ...arr2];
console.log(merged); //[1, "Hello", 1234, 2, 5678, "world"];
```

<br />

# 배열 객체 복사

- 전개 문법을 이용하여 배열, 객체의 내용 복사 가능
- 객체의 불변성을 이용하는 라이브러리에서 자주 사용됨

### 배열 복사

```javascript
let arr = [1, 2, 3];

//전개 연산자 써서 새 배열에 기존 배열의 내용 복사
let arrCopy = [...arr];
//let arrCopy = Object.assign([],arr); 과 가틍ㅁ

console.log(JSON.stringfy(arr) === JSOn.stringfy(arrCopy)); //true

//똑같은 내용을 가지지만 각자 다른 새 배열임!!

//값 변경을 해도 영향을 미치지 않음!!!
```

<br />

### 객체 복사

```javascript
let obj = { a : 1. b : 2, c : 3};
let objCopy = {...obj};

console.log(JSON.stringfy(obj) === JSOn.stringfy(objCopy)); //true

//이것도 동일하게 같은 참조가 아닌 새로운 각각의 객체임!!!

//그래서 값 변경을 해도 기존 객체 내용을 변경해도 복사된 객체에 영향을 미치지 않음!!
```

- **그치만!! 객체 내부에 중첩 객체가 있을 경우 주의@@@**

```javascript
let person = {
    name : "John",
    address = {
        city : "Seoul",
        postal : '01234'
    }
};

//내부 객체 얕은 복사
let personCopy = {...person};

personCopy.name = "Jane";

console.log(personCopy.name); // Jane
console.log(person.name); //John

personCopy.address.city = 'New York';

console.log(personCopy.address.city); //New York
console.log(person.address.city); //New York 내부 객체 접근 시 원본 객체도 영향 끼침

//중첩된 객체 복사, 내부 객체는 내용 복사!!!

let personCopy2 = {...person, address : {...person, address}};

personCopy2.address.city = 'Tokyo';

console.log(personCopy2.address.city); //Tokyo
console.log(person.address.city); //New York
```

---

<br />

# 변수의 유효범위와 클로저 \*\*

- 자바스크립트는 객체 지향 언어면서 동시에 함수 지향 언어의 특징을 가짐
- 함수 동적 생성 가능
- 생성한 함수를 값처럼 다른 함수의 인수로 넘길 수 있으며, 함수가 생성된 곳에서도 함수 호출 가능<br />(함수에서 반환한 함수를 호출 가능 => 클로저)
- 요약 -> 함수를 일급 객체로 취급

<br />

## 코드 블록

- 중괄호 코드 블록으로 진입하며 새로운 접근 범위 (scope) 생성, 접근 범위 안에서 선언한 변수는 **블록 안에서만 사용 가능**
- 접근 범위 => 변수 저장할 수 있는 일종의 공간 (객체)

<br />

```javascript
{
  let msg = "Hello";
  console.log(msg);
}

console.loG(msg); //중괄호 밖에서는 접근 불가
```

<br />

- 다음 예제 코드 결과를 오해하지 않도록!

```javascript
let msg;
{
  //msg를 참조하는 것!
  msg = "Hello";
  console.log(msg); //hello
}
console.log(msg); //hello
```

<br />

- 이미 선언된 변수와 동일한 이름을 가진 변수를 별도의 블록 없이 let으로 선언하면 에러

```javascript
let msg = "안녕하세요";
console.log(msg);

let msg = "안녕히 가세요"; //에러
console.log(msg);
```

<br />

- 다음 코드는 잘 됨!

```javascript
let msg = "hello";
{
  let msg = "hello";
  console.log(msg);
}

{
  let msg = "hello";
  console.log(msg);
}

console.log(msg);
```

<br />

- if, for, while 과 같은 제어문의 중괄호 블록 안에서 선언한 변수는 오직 블록 안에서만 접근 가능.
- 즉, **중괄호가 생기면 매번 새로운 접근 범위가 생성**

<br />

```javascript
if (true)
{
  let phrase = "안녕하세요";
  console.log(phrase);
}

//console.log(phrase); //블록을 벗어나면 접근 불가!!!

//let = i는 블록에 속하는 ''지역변수''
for (let i = 0; i < 3; i++) {
  console.log(i);
}

//console.log(i); //블록을 벗어나면 접근 불가!!!
```

<br />

## 중첩 함수

- 함수 내부에서 선언한 함수를 중첩 함수라고 함
- 중첩 함수는 코드를 정돈하는 데 사용 가능<br />즉, 거대한 작업을 하는 큰 함수의 기능을 쪼개서 중첩 함수로 정의 가능
- 중첩 함수는 거대한 함수가 정의된 함수 내부에서만 접근 가능

<br />

```javascript
function syaHiBye(f, l)
{
  function getFullName() {
    return f + " " + l;
  }

  console.log("Helllo, " + getFullName());
  console.log("Bye, " + getFullName());
}

sayHiBye("철수", "김");

// getFullName(); //접근 불가
```

<br />

- 중첩 함수는 함수의 반환값으로 반환될 수 있다. => 즉 **함수에서 함수 반환 가능**
- 꼭 함수가 아니라도 **익명 함수, 화살표 함수 형태**로 함수 반환 가능
- 함수 내부에서 생성한 객체 프로퍼티 형태(메서드)로 반환 가능

<br />

```javascript
function makeObjectwithClosureMethod(value) {
    let x = 100;
    let obj = {
        method(arg) {
            //메서드 형태지만, 함수와 똑같이 메서드가 정의된 시점의 바깥 환경 기억 가능
            console.log(value, x, arg);
        }
    };

    return arg;
}

let o = makeOjectwithClosureMethod("Hello");
o.method("world");
```

<br />

- 이렇게 반환된 함수는 어디서든 호출해서 사용 가능
- **반환된 함수가 호출될 때 함수가 참조하고 있는 외부 변수에도 접근 가능(클로저)**

<br />

```javascript
function makeCounter() {
    let count = 0;

    return function() {
        return count ++;
    };
}

let counter = makeCounter();

console.log(counter()); //0
console.log(counter()); //1
console.log(counter()); //2
```

<br />

# 클로저

- 클로저 (or 클로저 함수) 정의 => 외부 변수를 기억하고 외부 변수에 접근할 수 있는 함수
- 자바스크립트에선 모든 함수가 자연스럽게 클로저
- 클로저 => 함수 + 함수가 참조하는 외부 렉시컬 환경
- 모든 함수가 생성되는 시점에 외부 렉시컬 환경을 저장하는 **[Enviroment] 생성, 이를 통해 외부 렉시컬 환경을 참조**할 수 있기 때문
- **외부 변수에 접근 가능**, 그러므로 모든 함수는 클로저의 특성을 지님

<br />

# 클로저란 외부 변수를 기억하고 접근할 수 있는 함수를 말한다

---

<br />

# 가비지 컬렉션

- 기본적으로 함수 호출이 끝나면 함수 호출 스택 정리 과정에서 **함수에 대응하는 렉시컬 환경이 메모리에서 제거**
- 함수와 관련된 인수, 지역 변수가 이때 삭제
- 자바스크립트에서 모든 객체는 **도달 가능한 상태일 때만 메모리 유지**하므로 함수 호출 끝나면 관련 변수 참조 불가
- 만약 함수 반환 과정에서 반환된 **함수가 외부 변수를 참조할 경우 [[Enviroment]]프로퍼티에 외부 렉시컬 환경에 대한 정보가 저장되므로 도달 가능한 상태임.** 때문에 가비지 컬렉션 대상 X

<br />

```javascript
function f() {
    let value = 123;

    return function() {
        console.log(value); //value를 참조하기 때문에 [Enviroment]에 value에 대한 참조 저장
    }
}
//g 변수가 참조를 잃지 않는 동안 g.[Enviroment] 메모리에 value 값 존재
let g = f();

//null 대입으로 g.[Enviroment]에 도달할 수 없음. 때문에 메모리에서 value값 삭제
g = null;
```


<br />


- 외부 변수를 참조하는 변수를 반환하지 않는 경우

```javascript
function sum(a, b) {
    let c = 100;
    return a + b + c;
}

let result = sum(1, 2);
```

<br />

----

# 전역 객체

- 전역 객체를 사용하면 어디서나 사용 가능한 전역 변수나 함수 생성 가능
- **단, 전역 변수, 함수는 전역적으로 사용하는 경우에만 사용 (잘 없음)**
- 브라우저 환경에서 전역 객체 => window 각 호스트 환경마다 다를 수 있음
- alert, prompt, confirm 을 포함한 빌트인 함수는 글로벌 객체 소속 전역함수

<br />

```javascript
alert("Hello");
//위 아래 코드 모두 동일하게 동작
window.alert("Hello");
```

<br />

- 중요한 변수 또는 함수라서 모든 곳에 사용할 수 있게 하려면 아래와 같이 **명시적으로 전역 객체에 직접 프로퍼티 추가**

```javascript
//몯느 스크립트에서 currentUser를 사용할 수 있도록 
window.currentUser = {
  name : "John"
};

//이처럼 모든 스크립트에서 currentUser에 접근 가능
alert(currentUser.name); //John

//지역 변수 currentUser가 있다면 지역 변수와 충돌없이 전역 객체 windoow에서 이를 명시적으로 가져올 수 있음
alert(window.currentUser.name); //John
```

<br />

- 전역 함수는 몰라도 전역 객체는 되도록이면 사용 X
- 가급적 함수 만들 땐 외부 변수나 전역 변수를 함수 내부에서 사용하기 보단 **전달받은 입력값만을 활용해서 값을 반환해야 테스트, 재사용이 쉬움**

<br />

# setTimeOut, setInterval 호출 스케줄링

- 호출 스케줄링 => 일정 시간이 지난 후 원하는 함수를 예약 실행할 수 있게 하는 것
- 호출 스케줄링 구현법<br />setTimeout, setInterval 함수 사용

<br />

## setTimeOut

- 일정 시간이 지난 후 함수 실행할 때 사용

```javascript
let timeId = setTimeout(func|code, [delay], [arg1], [ars2], ...)
```

<br />

- func => 함수
- delay => ms 단위 대기 시간
- arg1, arg2, ... => 추가 가변 인수

<br />

```javascript
function sayHi() {
  console.log("안녕하세요");
}

setTimeout(sayHi, 1000);
```

<br />

- setTimeOut에 가변 인수 전달 가능
- 해당 가변 인수들이 호출될 때 함수 인수값으로 전달됨

```javascript
function sayHi(who, phrase) {
  console.log(who + "님, " + phrase);
}

//1초 뒤
setTimeout(sayHi, 1000, "홀길동", "안녕하세요");

//다른 방식, 익명 함수 전달 가능
setTimeout(function () {
  sayHi("홍길동", "안녕하세요");
}, 1000);
```

<br />

- setTimeout을 호출하면 타이머 식별자 반환
- clearTimeout 함수에 반환받은 식별자 전달하여 스케줄링 취소 가능

<br />

```javascript
let timeId = setTimeout(...);

clear(timeId);
```

<br />

## setInterval

- 일정 시간 간격을 두고 함수 실행할 때 사용
- setTimeout이 단 한 번 실행하는 것과 달리 setInterval은 주기적 실행
- setInterval 메소드는 setTimeout과 동일한 문법 (함수 호출 인자가 같음)
- 함수 호출을 중단하려면 clearInterval 사용

<br />

```javascript
let timeId = setInterval(() => console.log("째깍"), 2000); //2초
setTimeout(() => {
  cleartInterval(timeId);
}, 6000);
```

---

<br />

# call / apply

<br />

## call

- call 메서드
- 함수나 메소드 객체에는 call 메서드 제공
- 함수(메소드) 호출 과정에서 this 값 지정하여 호출하고 싶을 때 사용
- call(this, ...args)<br />첫 번째 인자값으로 this로 사용할 값을, 그 뒤에는 가변 인자 형태로 함수, 메서드 전달할 함수 인자 제공 가능

<br />

```javascript
function printThis() {
  console.log(this);
}

let person = {name : "John", age : 20};
let dog = {name : "Sam", age : 5};

printThis.call(person); //printThis 함수를 호출하되, this값을 person 객체로 지정
printThis.call(dog); //호출하되, this값을 dog 객체로 지정

function printName(prefix, thimes = 1) {
  console.log(this);
  for (let i = 0 ; i < times; i++) {
    console.log(prefix, this.name);
  }
}


//printName로 함수 호출하되, this값을 person 객체로 지정하며 prefix 값으로 "Hello", times를 2로 전달
printName.call(person, "Hello", 2);
printName.call(dog, "Good!");
```

<br />

## apply

- call과 비슷한 용도로 사용하지만 **메서드에 인자를 전달하는 방식에 차이**
- apply(this, args)<br />args 값은 함수 호출 시 전달할 인자값이 담긴 배열

<br />

```javascript
function printThis() {
  console.log(this);
}

let person = {name : "John", age : 20};
let dog = {name : "Sam", age ; 5};

//단순히 this 값 지정이라면 call과 동일함
printThis.apply(person);
printThis.apply(dog);

function printName(prefix, times = 1) {
  console.log(this);
  for( let i = 0; i < times; i++) {
    console.log(prefix, this.name);
  }
}

//인자를 전달할 때 가변 인자가 아닌 인자값이 담긴 "배열" 전달
printName.apply(perseon, ["Hello", 2]);
printName.apply(dog, ["Good"]);

//굳이 배열을 전달하면서 call을 써야한다면 전개 연산자를 써서 배열을 가변인자로 바꿔서 전달!!!
printName.call(person, ...["Hello", 2]);
```

<br />

---

<br />


# 함수 바인팅

- 객체 메서드가 객체 내부가 아닌 다른 곳에 전달되어 호출되면 this값 사라지는 현상 발생

```javascript
let user = {
  fn : "John",
  sayHi() {
    console.log(`Hello, ${this.fn}!`);
  }
};

//Hello, John!
user.sayHi();

//Hello, undefined //객체 내부가 아닌 다른 곳에 전달되어 호출되면 this값 사라짐
setTimeout(user.sayHi(), 1000);
```

<br />

- 메서드 전달시 this값 유지하는 법

## 1. 래퍼

```javascript
let user = {
  fn : "john",
  sayHi() {
    console.log(`Hi!, ${this.fn}!`);
  }
};

serTimeout(function() {
  //주체 (user)가 있는 상태에서 출력 (this 보존)
  user.sayHi();
}, 1000);
```

<br />

## 2. bin

- 모든 함수는 this를 수정(바인딩)하게 해주는 내장 메서드 bind 제공
- **func.bind(context)는 함수처럼 호출 가능한 특수 객체 반환**
- 객체를 호출하면 this가 context로 고정된 함수 func 반환

```javascript
let user = {fn : "John"};

function func() {
  console.log(this.fn);
}

//func.bind(user)는 func의 this를 user로 바인딩한 변형된 함수
let funcUser = func.bind(user);

funcUser(); //John
```

<br />

- 객체의 메소드에 bind 적용

```javascript
let user = {
  fn : "John",
  sayHi() {
    console.log(`Hello! ${this.fn}`);
  }
};

let sayHi() = user.sayHi.bind(user);
console.log(sayHi === user.sayHi); //False

sayHi(); //Hello, John

setTimeout(sayHi, 1000);
user = {sayHi() {
  console.log("또 다른 사용자");
}
};
```