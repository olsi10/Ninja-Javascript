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
