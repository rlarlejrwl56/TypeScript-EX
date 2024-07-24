/**
 * @Author: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @Date: 2024-07-24 11:25:49
 * @LastEditors: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @LastEditTime: 2024-07-24 13:15:01
 * @FilePath: src/chapter2.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */

// 배열 
let numArr : number[] = [1,2,3,4,5,6];

let strArr : string[] = ['a','b','c'];

let boolArr : Array<boolean> = [true,false,true];

// 배열 요소 타입이 다양할 경우
let multiArr : (string | number) [] = [1,'hello'];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr : number[][] = [
    [1,2,3],
    [4,5]
];

// 튜플 -> 길이와 타입이 고정된 배열
let tup1 : [number, number] = [1,2];

let tup2 : [number, string, boolean] = [1,"2", true];

const users :[string, number][] = [
    ["김기덕", 1],
    ["이아무개", 1],
    ["박아무개", 1],
    ["김아무개", 1],
    // [5, "최아무개"]
];
