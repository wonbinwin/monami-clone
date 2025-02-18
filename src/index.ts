//강력한 타입 주는 법
//변수 또는 props-drilling의 값 오른편에 : 쓰고 타입을 줄때 값을 지정해주면 됨
//정해진 값 이외의 다른 값을 쓸 수 없게 됨

//Super App, Start App, Fun App
//여러 타입을 지정하고 싶을 때 | 기호로 구분하여 추가
//많은 타입을 변수처럼 담아서 저장하고 사용할 수 있음
// type interface
//type 사용법 type을 쓰고 오른편에 타입의 이름을 정해주면 됨
//ts 작명법은 무조건 대문자로 시작, 캐멀케이스 따라감

// const name:'김영화'

export type AppTitle = "Super App" | "Super App" | "Fun App";
//심지어 내보기까지 가능함

type P = {
  name: string;
  age: number;
};

//객체처럼 하나의 타입에 많은 속성/ 값들이 주어져 있을 때 =을 쓰지 않고 바로 {}안에서 값과 타입을 정해줌

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "",
  age: number,
};
const appTitle: AppTitle = "";

//문자열 타입 주고 5개 변수 선언하기
const a: string = "1";

const a: "a" = "a";
const b: string = "2";
const c: string = "3";
const d: string = "4";
const e: string = "5";

//숫자타입 5개
const b: 0 = 3;
const n1: number = 0;
const n2: number = 0;
const n3: number = 0;
const n4: number = 0;
const n5: number = 0;
//불리언타입 5개
const b1: boolean = true;
const b2: boolean = false;
const b3: boolean = true;
const b4: boolean = false;
const b5: boolean = true;

///함수에서 타입 지정하기
//인자값, return 값을 지정할 수 있음

//()와 =>사이에 :을 쓰고 타입을 정하면 함수의 return값의 타입을 정할 수 있음

//()안의 각각의 인자값에도 :을 써서 타입을 지정할 수 있음

const fn = (n1: number, n2: number): string => {
  console.log(n1 * n2);
  return `${n1}*${n2}`;
};
fn(1234, 12);

// 함수 자체에도 타입으로 만들 수 있음
//()=> return 하는 값이 있으면 타입을 적기
// return 하는 값이 없을 때에는 void 적어주면 됨

const fn1: Fn1 = () => "test";
const fn2 = (): string => "random text";
fn1()
const string= fn2()
console.log(string)

type fn1 = () => void;
type fn2 = () => string;

interface ComponentProps{
    fn1:Fn1
    fn2:Fn2
}

const Component = ({ fn1, fn2 }:ComponentProps) { 
  return;
};
