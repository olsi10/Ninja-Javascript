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
// console.log(window);

//실행 컨텍스트의 경우 항상 두 가지 단계를 거침
// 생성 단계
//      코드를 본격적으로 시작하기 전 실행할 코드를 분석하여 초기 컨텍스트 단계
// 실행 단계
//      코드를 한 줄씩 실행하며 컨텍스트 내용 수정하는 단계

var aa = 100;
let bb = 200;

function f1() {
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
let reuslt = add(aaa, bbb);

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
let reuslt1 = addAndDouble(aaaa, bbbb);

/*
global = window
this = window
aaaa = 100
bbbb = 200
addAndDouble = f
double = f
resutl1 = uninitialized

    add
    arguments = [100, 200]
    this = undefined
    x = 100
    y = 200
    
        double
        arguments = [300]
        this = undefined
        x = 300
*/

//addAndDouble 호출되는 시점에 호출 컨텍스트에서는 double 함수를 찾을 수 없으므로 double을 호출하기 위해
//전역 실행 컨텍스트를 참조 (즉, 호출된 함수 상위에 있는 실행 컨텍스트를 참조하며 검색)

var p = 100;
let q = 200;
function aAd(x, y) { //100, 200 <<1>>
    function d(x) { // 300 <<3>>
        return 2 * x; // 600 <<4>>
    }
    return d(x + y); //100 + 200 = 300 <<2>>
}
let r = aAd(p, q);
console.log(r)

/*
전역
global = window
this = window
p = 100
q = 200
r = uninitialized
aAd = f

aAd 함수
this = undefined
arguments = [100, 200]
x = 100
y = 200
double = f //aAd 함수 실행 컨텍스트의 생성 시점에 double을 위한 저장 공간 확보 및 함수 저장

d 함수
arguments = [300]
this = undefined
x = 300
*/



// 클로저의 실행 컨텍스트
// 함수 내부에서 함수를 반환할 경우 함수가 만들어진 상황을 기억하는 클로저 환경이 함수와 같이 반환
// 함수가 생성되는 시점에 참조한 외부 변수 및 환경에 접근 가능

let sum = 0;
let y = 100;
function makeAdder(init = 0) {
    let sum = init;
    return function(x) {
        sum += x + y;
        return sum;
    }
}
let adder = makeAdder(sum);
let result2 = adder(1); // 101
// makeAdder의 반환값을 받는 adder에 반환 이름이 없으므로 adder를 호출하면 익명 함수 컨텍스트에서 실행
//adder가 호출되는 시점에 클로저 컨텍스트와 함께 전달
//adder 함수에서 찾을 수 없는 값 (sum, y)에 접근할 때 클로저 컨텍스트 참조

//클로저 컨텍스트가 외부 실행 컨텍스트(전역)를 참조하기 때문에 클로저 컨텍스트에 존재하지 않는 y 값에도 접근 가능

/*
전역
global = window
this = window
sum = 0
y = 100
makeAdder = f
adder = f
result2 = uninitialized

makeAdder 클로저 컨텍스트
    arguments = [0] // sum = 0
    this = undefined
    sum = 0;
    init = 0

익명 함수
    arguments = [1]
    this = undefined
    x = 1
*/

// Q1) johnSayHelloToSally가 호출되는 시점의 실행 환경 컨텍스트 분석해보기

// let person = {name : "John"};
// person.makeSayToHello = function(to) {
//     let name = this.name();
//     return function() {
//         console.log(name, 'say hello to', to);
//     }
// }
// let jonSayHelloToSally = person.makeSayToHello('Sally');
// jonSayHelloToSally();

/*
전역
global = window
this = window
person = {name : John, makeSayYoHello = f};
jonSayHellotoSally = f

jonSayHellotoSally 클로저 컨텍스트
arguments = [Sally]
this = person //person.makeSayHelloTo <- . 앞을 참조함! 
name : John
to = Sally

익명 함수 클로저 컨텍스트
arguments = [0]
this = undefined
*/





//나머지 매개변수와 전개 문법


//나머지 매개변수
//함수에 넘겨주는 인수에 제약이 없다.

// function ss(a, b) {
//     return a + b;
// }

// console.log(ss(1,2,3,4,5,6)); //a, b에 해당하는 1, 2만 사용

//함수 정의할 때 받을 인수 개수보다 더 많이 전달해도 에러 X
//단 반환값은 처음 두 개 인수해서 계산

//가변 인자를 전달받기 위해선 값들을 전달받을 배열 ... 연산자 사용
//... => 나머지들을 모아서 배열에 넣어라


function sumAll(...args) {
    console.log(Array.isArray(args)); //true
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}
console.log(sumAll(1)); // [1] = 1
console.log(sumAll(1, 2)); //[1, 2] = 3
console.log(sumAll(1, 2, 3)); //[1, 2, 3] = 6

//앞부븐은 매개변수는 변수, 뒤는 배열로 받을 수도 있다
//단!!!!! 가변 인자를 받을 배열은 맨 마지막에 정의.

function showName(firstName, lastName, ...Name) {
    console.log(firstName + ' ' + lastName);

    console.log(Name[0]); //young
    console.log(Name[1]); //Julius
    console.log(Name.length); //3
}

showName("Choi", "yun", "young", "Julius", "John");

//arguments 변수
//특별한 유사 배열 객체를 쓰면 인덱스를 사용해 전달받은 모든 인수에 접근 가능!!
//arguments 함수 호출 시점에 함수 내부에 접근할 수 있는 특수한 객체
//(함수 호출시 함수 실행 컨텍스트 생성 단계에서 만들어지는 객체)

//이터러블함. 즉 반복 가능한 객체, 순회 가능
//그러나 유사 배열이기 때문에 배열에서 제공하는 메소드 사용 불가

function sumALL() {
    //arguments는 배열 X
    console.log(Array.isArray(arguments)); //false
    
    let sum = 0;
    for (let arg of arguments) {
        sum += arg;
    }
    return sum;
}

console.log(sumALL(1, 2)); //3
console.log(sumALL(1, 2, 3)); //6

//나머지 매개변수는 최근에 개정된 문법에서 제공, 그러므로 레거시 코드 분석할 줄 알아야 함

function Name() {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);

    // for(let arg of arguments) {
    //     console.log(arg);
    // }
}

Name("Choiii", "yunnn"); //2, Choi yun

Name("Choiii"); //1, Choi undefined

//화살표 함수는 this를 갖지도 않고 바깥 환경에서 가져오는 것과 같이 화살표 함수는 자체 arguments도 갖지 않음

// function ff() {
//     //화살표 함수 바깥 ff의 함수 arguments를 참조
//     let showArg = () => console.log(arguments);
//     showArg(); //1, Worlds
    
//     let another = () => console.log(arguments);
//     another(2, "World"); //1, World

//     function gg() {
//         //화살표 함수 바깥 g의 arguments 참조
//         let showArg = () => console.log(arguments);
//         showArg(); //2, World
        
//         let another = () => console.log(arguments);
//         animal(2, "World"); //2, World
//     }
//     gg(2, "World");
// }
// ff(1, "Hello");


//spread 문법
//배열을 가변 인자를 받는 함수에 전달 가능
//점 세 개를쓰기 때문에 나머지 매개변수와 비슷해보이지만. 반대역할을 함
//나머지는 한데 모았다면 스프레드는 흩뿌림

console.log(Math.max(3, 5, 1)); //5

let arrr = [3, 5, 1];
console.log(Math.max(arrr)); //배열 값은 전달 불가.
console.log(Math.max(...arrr)); //5

let arrr1 = [1, -2];
let arrr2 = [8, -8];

console.log(Math.max(...arrr1, ...arrr2)); //8

//배열 합칠 때도 전개 문법 사용 가능

let arrr3 = ["Hello", 1234];
let arrr4 = [5678, "World"];

let merged = [1, ...arrr3, 2, ...arrr4];

console.log(merged); //1, Hello, 1234, 2, 5678, World




//배열, 객체 복사
//전개문법으로 배열, 객체 내용 복사 가능
//객체 불변성을 이용하는 라이브러리에서 사용

//배열 복사//
let arrrr = [1,2,3];
let arrrrCopy = [...arrrr];

//let arrrrCopy = Object.assign([], arrrr)과 같은 역할

//똑같은 내용
console.log(JSON.stringify(arrrr) === JSON.stringify(arrrrCopy)); //true

//같은 참조 X, 각각 다른 배열임
console.log(arrrr === arrrrCopy); //false

arrrr.push(4);
console.log(arrrr);
console.log(arrrrCopy);


//객체 복사//

let obj = {a : 1, b : 2, c : 3};
let objCopy = {...obj};

console.log(JSON.stringify(obj) === JSON.stringify(objCopy)); //ture
console.log(obj === objCopy); //false

obj.d = 4; //d 추가
console.log(JSON.stringify(obj));
console.log(JSON.stringify(objCopy));


////그러나!!!!!!! 객체내부에 중첩 객체가 있는 경우 주의.

let person = {
    name : "John",
    address : {
        city : "Seoul",
        postal : '01234'
    }
};

let personCopy1 = {...person};
personCopy1.name = "Jane";
console.log(person.name); //John
console.log(personCopy1.name); //Jane

personCopy1.address.city = "New York";
console.log(person.address.city); //New York;//내부 객체 접근 시 원본 객체도 영향
console.log(personCopy1.address.city); // New york

//중첩된 객체복사
//personCopy2도 새로운 객체, 내부 객체 address도 새로운 객체로 복사
let personCopy2 = {...person, address : {...person.address}};
personCopy2.address.city = "Tokyo";
console.log(personCopy2.address.city); //Tokyo
console.log(person.address.city); //New York






//변수의 유효범위와 클로저'

//자바스크립트는 객체 지향이면서 함수 지향 언어 특징을 가짐
//함수 동적 생성 가능
//생성한 함수를 값처럼 다른 함수에 인수로 넘길 수 있다.
//함수가 생성된 곳이 아니어도 함수 호출 가능. 반환된 함수를 호출 가능 (클로저)

//함수를 일급 객체 취급!!!

//코드 블록
//중괄호 코드 블록으로 진입하면 새로운 접근 범위 scope 생성.
//접근 범위 안에서 선언한 변수는 블록 안에서만 사용

{
    let msg = "Hello";
    console.log(msg);
}

//console.log(msg); //nnono

let msgg;
{
    msgg = "Hello"; //지역 변수 선언 X 바깐 msgg 참조
    console.log(msgg);
}
console.log(msgg);

//이미 선언된 변수를 중괄호 없이 let으로 선언하면 에러

let msg1 = "hi";
console.log(msg1);

//let msg1 = "bye"; Error

//다음은 잘 작동

let msg2 = "Hi!";
{
    let msg2 = "Hi!"; //바깥 변수 이름을 지역변수가 가리는 쉐도잉 현상
    console.log(msg2); //안녕하세요.
}

{
    let msg2 = "Bye!";
    console.log(msg2);
}

console.log(msg2); //Hi!


//if for while 같은 제어문의 중괄호 블록 안에서 선언한 변수는 오직 변수 속에서 접근

if(true)
{
    let phrase = "Hi!";
    console.log(phrase);
}

//console.log(phrase); Error

for(let i = 0; i < 3; i++) //i 지역변수 ㅡ,,ㅡ!
{
    console.log(i);
}

//console.log(i); Error!

function makeObjectWithClosureMethod(value) {
    let x = 100;
    let obj = {
    method(arg) {
    // 메서드 형태이지만, 함수와 똑같이 메서드가 정의된 시점의 바깥 환경을 기억 가능
        console.log(value, x, arg);
    }
    };
    return obj;
    }
    let ob = makeObjectWithClosureMethod("Hello");
    ob.method("World");



function makeCount() {
    let count = 0;
    //함수는 본인이 정의된 시점에서 바깥 환경을 기억함
    return function() {
        //반환 후에도 호출되어 외부 영역 값도 접근 가능 (클로저)
        return count++;
    };
}

let counter = makeCount();

console.log(counter()); //0
console.log(counter()); //1
console.log(counter()); //2