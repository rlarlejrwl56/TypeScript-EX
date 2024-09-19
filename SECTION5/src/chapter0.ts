/**
 * @Author: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @Date: 2024-09-11 13:28:13
 * @LastEditors: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @LastEditTime: 2024-09-11 13:36:42
 * @FilePath: src/chapter0.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */


/**
 * 인터페이스
 * */

// 대문자 I를 붙이는 표기법을 헝가리안 표기법이라고 한다. 
// 언더바를 붙이는 스네이크 표기법을 쓰거나 카멜, 스네이크 표기법을 쓴다.

interface Person {
    readonly name : string;
    age ?: number;
    sayHi() : void;
    sayHi(a : number, b : number) : void;
}

type Type1 = number | string;
type Type2 = number & string;

// 인터섹션이나 유니온을 이용할때는 type 별칭에 활용하거나 타입 주석에 활용해야 한다.

type Func = {
    () : void;
}

const func : Func = () => {};
const person : Person = {
    name : '김기덕',
    sayHi : function(){
        console.log('hi');
    }
};

// person.name = '홍길동';

person.sayHi();
person.sayHi(1,2);