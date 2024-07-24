/**
 * @Author: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @Date: 2024-07-24 13:54:26
 * @LastEditors: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @LastEditTime: 2024-07-24 14:01:22
 * @FilePath: src/chapter6.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */

// any
// 특정 변수의 타입을 우리가 확실히 모를때

let anyVar : any = 10;

anyVar = '10';
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed();

let num : number = 10;
num = anyVar;

// unknown
let unknownVar : unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};


// unknown 타입은 정제해서 사용할 수 있다
if(typeof unknownVar === 'number'){
    num = unknownVar;
}
