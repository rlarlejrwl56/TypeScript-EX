/**
 * @Author: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @Date: 2024-07-25 10:31:04
 * @LastEditors: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @LastEditTime: 2024-07-25 10:39:00
 * @FilePath: src/chapter3.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */

/**
 *  Unknown 타입
 * **/
function unknownExam(){
    let a: unknown = 1;
    let b: unknown = 'hello';
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar : unknown;
    
}

/**
 * Never 타입 -> 공집합
 * **/

function neverExam(){
    function neverFunc() : never {
        while (true) {}
    }
    
    let num : number = neverFunc();
    let str : string = neverFunc();
    let bool : boolean = neverFunc();
    
}


/**
 * Void 타입 
 * **/

function voidExam() {
    function voidFunc() : void {
        console.log('hi');
    }
    
    let voidVar :void = undefined;
}


/**
 *  Any 타입 (치트키)
 * **/

function anyExam(){
    let unknownVar : unknown;
    let anyVar : any;
    
    anyVar = unknownVar;
    
}

