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


/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

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