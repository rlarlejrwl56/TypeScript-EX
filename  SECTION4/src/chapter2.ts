/**
 * @Author: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @Date: 2024-09-10 15:54:37
 * @LastEditors: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @LastEditTime: 2024-09-10 17:05:43
 * @FilePath: src/chapter2.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */

/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환되는가?
 * 2. 매개변수의 타입이 호환되는가?
 * */

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
//b = a;

// 기준2. 매개변수가 호환되는가?
// 2-1. 매개변수의 개수가 같을 때
type C = (value : number) => void;
type D = (value : 10) => void;

let c : C = (value) => {};
let d : D = (value) => {};

c = d;
d = c;

type Animal = {
    name : string;
}
type Dog = {
    name : string;
    color : string;
}

let animalFunc = (animal : Animal) =>{
    console.log(animal.name);
}

let dogFunc = (dog : Dog) => {
    console.log(dog.name);
    console.log(dog.color);
}

//animalFunc = dogFunc;
dogFunc = animalFunc;
let testFunc = (animal : Animal)=> {
    console.log(animal.name);
    //console.log(animal.color);
}

let testFunc2 = (dog : Dog)=> {
    console.log(dog.name);
}


// -> 매개변수를 기준으로 업캐스팅은 안된다. 하지만 다운캐스팅은 허용한다.
// 2-2. 매개변수의 개수가 다를 때

type Func1 = (a : number, b : number ) => void;
type Func2 = (a : number ) => void;

let func1 : Func1 = (a, b) => {};
let func2 : Func2 = (a) => {};

func1 = func2;
func2 = func1;

// -> 매개변수의 갯수가 다를 때에는 할당하려고 하는 타입에 매개변수의 갯수가 더 적을 때에만 호환이 된다.


