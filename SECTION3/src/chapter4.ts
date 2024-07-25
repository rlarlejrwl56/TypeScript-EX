/**
 * @Author: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @Date: 2024-07-25 11:02:04
 * @LastEditors: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @LastEditTime: 2024-07-25 11:08:19
 * @FilePath: src/chapter4.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */


/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재한다
 * */

/**
* 1. 합집합 - Union 타입
*/

let a : string | number | boolean;

a = 1;
a = 'a';
a = true;

let arr : (number | string | boolean) [] = [1, 'hello', true];


type Dog = {
    name : string;
    color : string;
    
}

type Person = {
    name : string;
    language : string
};


type Union1 = Dog | Person;

let union1 : Union1 = {
    name : '',
    color : ''
}

let union2 : Union1 = {
    name : '',
    language : ''
};

let union3 : Union1 = {
    name : '',
    color : '',
    language : ''
};




