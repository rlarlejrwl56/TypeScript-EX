/**
 * @Author: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @Date: 2024-09-10 15:42:57
 * @LastEditors: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @LastEditTime: 2024-09-10 15:53:01
 * @FilePath: src/chapter1.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */


/**
 * 함수 타입 표현식
 */

type Operation = (a : number, b : number ) => number;

const add : Operation = (a,b) => a + b;

const sub : Operation = (a, b) => a - b;

const multiply : Operation = (a, b) => a * b;

const divide : Operation = (a, b) => a / b;

/**
 * 호출 시그니쳐
 * (콜 시그니쳐)
 * */

type Operation2 = {
    (a : number, b : number ) : number;
    name : string;
}

const add2 : Operation2 = (a,b) => a + b;

const sub2 : Operation2 = (a, b) => a - b;

const multiply2 : Operation2 = (a, b) => a * b;

const divide2 : Operation2 = (a, b) => a / b;