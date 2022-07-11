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