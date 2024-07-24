/**
 * @Author: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @Date: 2024-07-24 11:13:58
 * @LastEditors: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @LastEditTime: 2024-07-24 11:24:07
 * @FilePath: src/chapter1.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */

// 기본적인 원시 타입 다섯가지

// number (숫자)
/**
 *  : number 타입 주석 | 어노테이션(annotation) 
 *  기본적인 방법
 * **/
let num1 : number = 123;
let num2 : number = -123;
let num3 : number = 0.123;
let num4 : number = - 0.123;
let num5 : number = Infinity;
let num6 : number = -Infinity;
let num7 : number = NaN;


// string (문자형)
let str1 : string = "hello";
let str2 : string = 'hello';
let str3 : string = `hello`;
let str4 : string = `hello  + ${num1}`;


// boolean (참 | 거짓)
let bool1 : boolean = true;
let bool2 : boolean = false;


// null 
let null1 : null = null;

// undefined 
let unde1 : undefined = undefined;

// 리터럴 타입
// 리터럴 -> 값
let numA : 10 = 10;
