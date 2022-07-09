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
