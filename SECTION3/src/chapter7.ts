/**
 * @Author: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @Date: 2024-09-04 13:54:18
 * @LastEditors: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @LastEditTime: 2024-09-10 14:22:38
 * @FilePath: src/chapter7.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */


/**
* 타입 좁히기
* 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
* 타입을 상황에 따라 좁히는 방법을 이야기
* */
type Person = {
    name : string;
    age : number;
}

// value => number : toFixed
// value => string : toUpperCase
// value => Person : name은 age살 입니다.
function func(value : number | string | Date | null | Person) {
    if(typeof value === 'number') {
        console.log(value.toFixed());
    }else if( typeof value === 'string') {
        console.log(value.toUpperCase());
    }
    else if(value instanceof Date){
        console.log(value.getTime());
    }
    else if(value && 'age' in value){
        console.log(`${value.name}은 ${value.age}살 입니다.`);
    }
}

// instanceof 는 타입이 와서는 안된다.