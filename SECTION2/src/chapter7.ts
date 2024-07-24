/**
 * @Author: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @Date: 2024-07-24 14:02:26
 * @LastEditors: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @LastEditTime: 2024-07-24 15:25:59
 * @FilePath: src/chapter7.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */

// void 
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없을 의미하는 

function func1 () : string {
    return "hello";
}

function func2 () : void {
    console.log('hello');
}

let a : void;
a = undefined;


// nver
// never -> 존재하지 않는
// 불가능한 타입

function func3() : never {
    while (true){}
}

function func4() : never {
    throw new Error();
}

