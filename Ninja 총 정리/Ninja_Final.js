let arr = ["Choi", "yun"];

let [f, s] = arr;

console.log(f); //Choi
console.log(s); //yun

//const [f, s] =  arr; 상수로 대입받아도 됨!!

// 구조 분해 할당과 같은 코드!
// let f = arr[0];
// let s = arr[1];

//응용 코드
//split 메서드 호출 결과로 배열 반환, 반환된 배열을 변수에 대입
let [fn, sc] = "Choi yun".split(' ');

console.log(fn); console.log(sc);

//구조 분해 할당 적용할 때 대입문의 왼쪽에
//모든 종류의 대입이 가능한 무언가(변수, 상수, 속성) 올 수 있음!

let user = {}; //평범한 변수에 대입된 객체
[user.name, user.surname] = "Choi yun".split(' '); //split 메서드 반환 결과로 배열 속 객체 프로퍼티에 넣기
console.log(user.name);

//쉼표로 특정 요소 무시 가능
let [first, , second] = ["Choi", "yun", "Young"];

console.log(first);
console.log(second);

//Spread syntax로 나머지 요소 가져오기 (...)

let [name1, name2, ...rest] = ["Choi", "yun", "Young", "Grade 2", "Hi!!"];

console.log(name1, name2, rest[0], rest[1]);

//기본 값
let [ff, ss] = [];
console.log(ff); //undefined
console.log(ss); //undefined

//대입 기호로 기본값 설정 가능
let [animal = "dog", se = "female"] = ["cat"];

console.log(animal); //cat 
console.log(se); //기본값 female

//객체 분해
//할당 연산자 우측에 분해하고자 하는 객체, 좌측에 상응하는 객체 프로퍼티 패턴 입력
//let {var1, var2} = {var1, var2};

let opt = {title : "book", page : 200, author : "Choi"};

let {title, page, author} = opt;

console.log(title); console.log(page); console.log(author); //book, 200, choi
//순서가 바뀌어도 동일하게 동작

//좌측에 콜론으로 프로퍼티 키와 다른 이름을 가진 변수에 저장 가능
let o = {tit : "menu", wid : 100, hei : 200};

let {tit, wid : w, hei : h} = o;

console.log(tit); console.log(w); console.log(h)

//프로퍼티가 없는 경우를 대비하여 대입 기호로 기본값 설정 가능

let b = {tt : "menu"};

let {width = 200, height = 300, tt} = b;

console.log(width); console.log(height); console.log(tt);

//콜론, 대입 동시 사용 가능
let sing = {ttt : "song"};

let {singer : sg = 300, ttt} = sing;

console.log(ttt); console.log(sg);

//전개 구문을 쓰면 나머지 프로퍼티를 객체에 할당 가능

let game = {gn : "LOL", age : 18, device : "computer"};

let {gn : g = "FIFA", ...re} = game;

console.log(g); console.log(re.age); console.log(re.device);
















//Date 객체와 날짜
//date = 날짜 저장 가능, 날짜 관련 메서드를 제공하는 내장 객체
//인수 없이 new 연산자와 함께 호출하면 현재 날짜, 시간이 저장된 date객체 반환

let now = new Date();
console.log(now);

//new Date(milliseconds)
//밀리세컨드 단위 유닉스 시간을 나타내는 정수반환
//타임 스탬프 1970, 1, 1년부터 흘러간 밀리초를 정수로 나타냄
//타임스탬프 => 유닉스 타임스탬프, Posix, 유닉스 시간 에포크 등 다양하게 불림
//유닉스 타임스탬프, 유닉스 시간, 포직스, 에포크

//1970 / 01 / 01 나타내는 객체
let Jan01_1970 = new Date(0);
console.log(Jan01_1970);

//1970 / 01/ 02 나타내는 법
let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log(Jan02_1970);

//1969 / 12/ 31 나타내는 법
let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969);

//날짜 정보가 담긴 문자열을 전달했다면 자동 변환되어 날짜 객체가 됨
//전달한 문자열은 GMT(UTC)로 가정, 현재 OS 시간대의 offset이 더해진 시간이 출력됨
let date1 = new Date("2017-05-06");
console.log(date1);

//날짜 관련 숫자 정보 직접 전달로 날짜 객체 생성 가능
let date2 = new Date(2011, 0, 31); //년, 월, 일, 시간, 분, 초, 밀리초
console.log(date2);

let d1 = new Date(2011, 0, 1); //1월 1일
console.log(d1);

//지역 시간대가 아닌 UTC로 해야 한다면 Date.UTC 사용
let arg = Date.UTC(2011, 0, 1, 0, 0, 0);
console.log(arg);

let d2 = new Date(arg);
console.log(d2); 

//날짜 구성 요소 얻기
let date3 = new Date();
console.log(date3.getHours()); //11
console.log(date3.getMinutes()); //59

//UTC 표준시 기준 날짜 구성요소를 반환하는 요소
console.log(date3.getUTCHours());

//getTime() 주어진 일시와 1970/01/01 사이를 밀리초로 반환
//getTimezoneOffset() 현지 시간과 표준 시간 차이를 분으로 반환

//getMonth = 0 ~ 11, getDate = 1 ~ 31, getDay = 0 ~ 6

console.log(new Date().getTime());
console.log(new Date().getTimezoneOffset()); //한국은 UTC+9 이므로 -60 * 9 = - 540

//날짜 구성 요소 설정하기
let today = new Date();

today.setFullYear(2011, 0, 1);
console.log(today);

today.setHours(4);
console.log(today);

//Date 객체를 숫자로 변경해 시차 측정
let date5 = new Date();
console.log(+date5); //date5.getTime()을 호출한 것과 같음

//벤치마크 작업시 가능
let start = new Date();

for (let i = 0 ; i < 100000; i++) {
    let something = i * i * i;
}

let end = new Date();

//빼기 연산자를 쓰므로 숫자형으로 형변환, 결과적으로 타임스탬프 반환
console.log(`작업 완료까지 ${end - start}초 걸렸습니다.`);

//Date.now() Date 객체를 만들지 않고 타임스탬프를 반환하는 메서드
//Date.now()는 new Date().getTime()과 같다.

let st = Date.now();

for (let i = 0; i < 100000; i++) {
    let something =  i * i * i;
}

let ed = Date.now();

console.log(`작업 완료까지 ${ed - st} 밀리초 걸렸습니다.`);

//Date.parse와 문자열
//Date.parse(str) 메서드 쓰면 문자열에서 타임스탬프 값 변형 (날짜 객체X)
//문자열 형식은 yyyy-mm-ddThh:mm:ss.sssZ
//조건 안 맞으면 NaN

//UTC 시간에서 -7인 타임존 시간
let ms1 = Date.parse('2005-03-04T12:30:40.417-07:00');
console.log(ms1);

let ms2 = Date.parse('2009-03-27T05:43:31.519-04:00');
console.log(ms2);

//parse 메소드 호출로 받은 타임스탬프를 이용해서 Date 객체 생성 가능

let ms3 = new Date(ms2);
console.log(ms3);

//보통 Date 객체를 쓰기 보단 날짜 관련 라이브러리 momtnejs 사용










// 실행 컨텍스트와 스택
// 함수 실행 절차에 대한 정보는 함수의 실행 컨텍스트에 저장
// 실행 컨텍스트는 함수 실행에 대한 세부 정보를 담고 있는 내부 데이터 구조
// 제어 흐름의 현재 위치, 변수의 현재 값, this 값 등 상세 내부 정보가 실행 컨텍스트에 저장
// 함수 호출 일회당 정하ㅗㄱ히 하나의 실행 컨텍스트가 생성

// 함수 내부에서 함수의 중첩 호출이 있을 경우 아래와 같은 절차 수행

// 전역 실행 컨텍스트
// 스크립트가 시작되면 곧바로 전역 실행 컨텍스트 생성-> 실행
// 특정 함수 안에서 실행되는 코드가 아니면 모두 전역 컨텍스트에서 실행
// 전역 컨텍스트를 생성하는 시점에서 세 가지 작업 수행
// 1. 전역 객체 생성 (브라우저 window, 노드 global)
// 2. this를 전역 객체로 할당
// 3. 사용할 값들(변수, 함수 등)을 위한 메모리 할당 및 초기화

/*
<script>
script 내부는 비었지만 어쨌든 전역 실행 컨텍스트가 생성되고 실행 단계로 진입
내용은 없지만 1, 2의 작업이 수행되었으므로 다음과 같이 this 값 및 전역 객체 확인이 가능
(사용할 값들이 없으면 3의 작업 결과는 없음)
</script>
*/

console.log(this);
console.log(window);

//실행 컨텍스트의 경우 항상 두 가지 단계를 거침
// 생성 단계
//      코드를 본격적으로 시작하기 전 실행할 코드를 분석하여 초기 컨텍스트 단계
// 실행 단계
//      코드를 한 줄씩 실행하며 컨텍스트 내용 수정하는 단계

var aa = 100;
let bb = 200;

function f() {
    console.log('hello');
}
aa = 300;
bb = 400;

/*
global = window
this = window

aa = undefined
bb = uninitialized

f = f() { console.log('hello'); }
*/

// 함수 실행 컨텍스트
// 새로운 함수가 실행될 때마다 매번 새로운 함수 실행 컨텍스트가 생성 단계로 진입하여 생성, 이후 실행

var aaa = 100;
let bbb = 200;
function add(x, y) {
    console.log(arguments);
    return x + y;
}
let reuslt = add(a, b);

/* 생성 컨텍스트
aaa = undefined
bbb = uninitialized
result = uninitialized
add = add(x, y) {
    console.log(arguments);
    return x + y;
}
 */

// 전역 객체 대신 접근할 수 있는 arguments 유사 배열 생성
// arguments에는 전달된 인자값들이 모두 저장

/* add 함수의 실행 컨텍스트
arguments = [100, 200]
this = undefined (엄격모드로 가정)
x = 100
y = 200
*/

// 함수 실행 컨텍스트는 함수 실행이 종료되는 시점에 반환값을 반환하며 사라지게 됨

var aaaa = 100;
let bbbb = 200;
function addAndDouble(x, y) {
    return double(x + y);
}
function double(x) {
    return 2 * x;
}
let reuslt1 = addAndDouble(a, b);

/*
global = window
this = window
aaaa = 100
bbbb = 200
addAndDouble = f
double = f
resutl1 = uninitialized
*/