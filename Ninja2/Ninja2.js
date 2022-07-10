let now = new Date();
console.log(now)

//타임 스탬프 -> 유닉스 타임스탬프, 유닉스 시간, posix 시간 등 이렇게 부름 

let Jan01_1970 = new Date(0)
console.log(Jan01_1970);

let jan1970 = new Date(24 * 3600 * 1000)

console.log(jan1970)

//1970년 1월 1일 기준으로 흘러간 밀리초 나타내냄

let jan1971 = new Date(-24 * 3600 * 1000)

console.log(jan1971)

//하루 전인 1969 12월 31일 반환

//인수가 하나이며 날짜 정보가 담김 문자열을 전달핶다면
//해당 문자열은 자동으로 구문 분석되어 날짜 객체로 변환

let date = new Date("2005-03-04");

console.log(date)

//인수를 지정하지 않아서 GMT = 자정으로 가정하고 코드가 시간대에 따라 출력 문자열이 바뀜


//날짜와 관련된 숫자 정보를 전달하여 날짜 객체 생성가능
//단 UTC가 아닌 지역 시간대 객체가 생성

//year은 무조건 네 자리, month는 0~11,

let d1 = new Date(2011, 0, 1, 0, 0, 0, 0)

console.log(d1)

let d2 = new Date(2011, 0, 1);

console.log(d2);

//만약 지역 시간대가 아닌 UTc 기준 시간으로 날짜 객체를 생성해야 할 경우
//Date.UTC사용

let arg = Date.UTC(2011, 0, 1, 0, 0, 0, 0);
console.log(arg); //타임스탬프 값 반환

let d = new Date(arg);
console.log(d) //GMT 표준시

//날짜 구성요소

let date3 = new Date();

console.log(date3.getFullYear()); //연도 네 자리수 반환
console.log(date3.getMonth()); //월 반환 0 ~ 11
console.log(date3.getDate()); //일 반환 1 이상 31 이하
console.log(date3.getHours(), date3.getMinutes(), date3.getSeconds(), date3.getMilliseconds());
console.log(date3.getDay()); //요일을 나타냄 일요일 0, 토요일 6

//위 메서드들은 모두 지역 시간 기준으로 날짜 구성요소 반환

//get 다음 UTC 붙여주면 UTC 표준시 기준 날짜 구성 요소 반환하는 메서드인
//getUTCFullYear(), getUTCMonth(), getUTCDay() 접근 가능

let date4 = new Date();
console.log(date4.getUTCFullYear(), date4.getUTCMonth(), date4.getUTCHours())

//gettime() 주어진 일시와 1970 사이 간격(밀리초) 타임 스탬프 반환
//getTimezoneOffset() 현지 시간과 표준 시간 차이

console.log(new Date().getTime());
console.log(new Date().getTimezoneOffset());

//날짜 구성 요소 설정

let today = new Date();

today.setFullYear(2022, [0], [1]);

console.log(today); //2022 1얼 1일

today.setFullYear

let dec = new Date(-48 * 3600 * 1000)
console.log(dec) //1970 1월 1일 이틀전

let dd = new Date("2018; 01; 25")
console.log(dd)

//-, , , .

let today9 = new Date();

today9.setHours(0); //시만 0으로 변경
console.log(today9);

today9.setMinutes(30);
today9.setFullYear(2005, 2, 4)

console.log(today9)

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let doSomething = i * i * i;
}

let end = new Date()

console.log(`작업 완료까지 ${end - start} 밀리초 걸렸습니다.`)

let ms1 = Date.parse('2012-01-25T11:51:50.417-07:00');
console.log(ms1);

let date12 = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );
console.log(date12);

function sum(a, b) {
    return a + b;
  }
  
  //호출할 때 원하는만큼 인자값 전달 가능
  console.log(sum(1, 2, 3, 4, 5));

// function showName(f, l, ...titles) {
// console.log(f + ' ' + l + ' ');

// console.log(titles[0]);
// console.log(titles[1]);
// console.log(titles.length);
// }

//showName("Choi", "yun", "hi", "bye", "poop");

function showName() {
    console.log( arguments.length );
    console.log( arguments[0] );
    console.log( arguments[1] );
    // arguments는 이터러블 객체이기 때문에 다음과 같이 for ... of 구문을 사용해서 인수나열 가능
    for(let arg of arguments) console.log(arg);
    }
    // 2, Julius, Caesar가 출력됨
    console.log("Julius", "Caesar");
    // 1, Bora, undefined가 출력됨(두 번째 인수는 없음)
    console.log("Bora");


function f() {
    // 화살표 함수 바깥의 함수(f)의 arguments를 참조 (자체 arguments를 가지지 않음)
    let showArg = () => console.log(arguments); // [1, "Hello"]
    showArg();
    // 인자값을 여럿 전달했지만 바깥의 arguments를 참조
    let another = () => console.log(arguments); // [1, "Hello"]
    another(2, "World");

function g() {
    // 화살표 함수 바깥의 함수(여기서는 g)의 arguments를 참조
    let showArg = () => console.log(arguments); // [2, "World"]
    showArg();
    let another = () => console.log(arguments); // [2, "World"]
    another(2, "World");
    }
    g(2, "World");
    }
    f(1, "Hello");
    

    let msg;
    {
        //msg를 참조하는 것!
        msg = 'Hello';
        console.log(msg);
    }
    console.log(msg);

function makeObjectwithClosureMethod(value) {
    let x = 100;
    let obj = {
        method(arg) {
            //메서드 형태지만, 함수와 똑같이 메서드가 정의된 시점의 바깥 환경 기억 가능
            console.log(value, x, arg);
        }
    };

    return obj;
}

let o = makeObjectwithClosureMethod("Hello");
o.method("world");

//위 코드 활용

// function make(value) {
//     let x = "Hi!"
//     let obj = {
//         bye(arg) {
//             console.log(value, x, arg);
//         }
//     };

//     return obj;
// }

// let m = make("Hi!!!!!!");
// m.bye("뿡");

//이해가 잘 안돼서 한 번 더... 활용

function makeShool(SchoolName) {
    let level = "high";
    let region = {
        adr(rh) {
            console.log(rh, level, SchoolName);
        }
    };

    return region;
}

let ms = makeShool("Mirim");
ms.adr("Seoul");

let timeId = setInterval(() => console.log("째깍"), 2000); //2초
setTimeout(() => {
  cleartInterval(timeId);
}, 60000);

function printThis() {
    console.log(this);
  }
  
  let person = {name : "John", age : 20};
  let dog = {name : "Sam", age : 5};
  
  printThis.call(person); //printThis 함수를 호출하되, this값을 person 객체로 지정
  printThis.call(dog); //호출하되, this값을 dog 객체로 지정
  
  function printName(prefix, times = 1) {
    console.log(this);
    for (let i = 0 ; i < times; i++) {
      console.log(prefix, this.name);
    }
  }
  
  
  //printName로 함수 호출하되, this값을 person 객체로 지정하며 prefix 값으로 "Hello", times를 2로 전달
  printName.call(person, "Hello", 2);
  printName.call(dog, "Good!");




  let user = {
    fn : "John",
    sayHi() {
      console.log(`Hello! ${this.fn}`);
    }
  };
  
  let sayHi = user.sayHi.bind(user);
  //sayHi에 저장된 함수는 user.sayHi가 아닌 완전히 새로운 this가 user로 고정된 함수!!
  console.log(sayHi === user.sayHi); // 참조가 같지 않으니 False
  
  sayHi(); //Hello, John this 값 기억
  
  //1초 이내 user 값이 변화해도 sayHi는 기존값 사용
  setTimeout(sayHi, 1000);
  user = {sayHi() {
    console.log("또 다른 사용자");
  }
  };

  