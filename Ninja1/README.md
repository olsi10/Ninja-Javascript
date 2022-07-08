# Ninaja 1. 정리

## 구조 분해 할당 \*

- 자바스크립트 언어에서는 객체나 배열을 변수로 분해할 수 있게 하는 특별한 문법이 있다.

<br/>

## 1. 배열 분해하기

```javascript
//이름과 성을 요소로 가진 배열
let arr = ["yun", "choi"];

//구조 분해 할당
let [f, n] = arr;

/* 위 코드와 같은 역할
let f = arr[0];
let n = arr[0]; */

console.log(n); //choi
console.log(f); //yun

//상수로 대입 받기 가능
//const [f, n] = arr;
```

```javascript
//활용

let animal = ["dog", "male", "cute"];

let [ani. se, per] = animal;

console.log(ani); //dog
console.log(se); //male
console.log(per); //cute

```

- split 메서드 사용해서 바로 변수 대입

```javascript
let [f, n] = "yun choi".split(" ");
let [ani, se, per] = "dog male cute".split(" ");
```

- 구조 분해 할당 적용할 때 대입 문자 왼쪽에 모든 종류의 대입이 가능한 것이 올 수 있다.

```javascript
let arr = {};
[user.name, user.surname] = "dog male".split(" ");

console.log(user.name); //dog
```

- 쉼포로 특정 요소 무시 가능

```javascript
let [ani, , per] = [dog, male, cute];
console.log(ani); //dog
console.log(per); //cute
```

<br/>

# 2. Spread syntax(...)로 나머지 요소 가져오기

- 배열 앞에 위치한 값 몇 개만 필요하고 나머지를 한데 모아 저장하고 싶을 때 ... 연자 사용

```javascript
let [name1, name2, ...name3] = ["sam", "smith", "max", "jane"];

console.log(name1); //sam
cosnole.log(name2); //smith

console.log(name3[0]); //max
console.log(name3[1]); //jane
```

<br/>

# 기본값

- 할당하고자 하는 변수의 개수가 분해하고자 하는 배열의 길이보다 크더라도 에러 X
- **대입할 값이 없으므로 자료형이 정해지지(undefined) 않은 상태를 대입**

```javascript
let [first, second] = [];

console.log(first); //undefined
console.log(second); //undefined
```

- 대입 기호로 할당할 값이 없을 때 기본값 설정 가능

```javascript
let [name = "yun", age = "no"] = ["Yun"];

console.log(name); //Yun
console.log(age); //no
```

<br/>

# 3. 객체 분해하기

- 구조 분해 할당 문법으로 객체 분해 가능

```javascript
let { var1, var2 } = { var1: _, var2: _ };
```

- 할당 연산자 우측 : 분해하고자 하는 객체
- 할당 연산자 우측 : 상응하는 객체 프로퍼티 패턴

```javascript
let my = { name: "yun", age: 18, height: 160 };
let { name, age, height } = my;

console.log(name); //yun
console.log(age); //18
console.log(height); //160
```

- let 괄호 안 변수 순서 바뀌어도 동일하게 동작

```javascript
let { age, name, height } = my;

console.log(name); //yun
console.log(age); //18
console.log(height); //160
```

- 좌측 패턴에 콜론(:) 사용해서 객체 프로퍼티 값을 프로퍼티 키와 다른 이름을 가진 변수에 저장 가능

```javascript
let my = { name: "yun", age: 18, height: 160 };

let { age: a, height: h, name } = my;

console.log(a); //18
console.log(h); //160
console.log(name); //yun
```

- 프로퍼티가 없는 것을 대비하여 대입 기호로 기본값 설정 가능

```javascript
let my = { name: "yun" };

let { age = 18, height = 160, name } = my;

console.log(age); //18
console.log(height); //160
console.log(name); //yun
```

- 콜론(:)과 할당 연산자(=) 동시 사용 가능

```javascript
let my = { name: "yun" };

let { age: a = 18, height: h = 160, name } = my;

console.log(age); //18
console.log(height); //160
console.log(name); //yun
```

- 나머지 프로퍼티들 객체 할당 가능

```javascript
let my = { name: "yun", age: 18, height: 160 };

let { name, ...rest } = my;

console.log(name); //yun
consoel.log(rest.age); //18
console.log(rest.height); //160
```
