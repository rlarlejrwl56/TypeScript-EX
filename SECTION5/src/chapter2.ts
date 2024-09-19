/**
 * @Author: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @Date: 2024-09-11 13:47:26
 * @LastEditors: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @LastEditTime: 2024-09-11 13:55:14
 * @FilePath: src/chapter2.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */


/**
 * 선언 합침
 * */

interface Person {
    name : string;
}
 
interface Person {
    age : number;
}


const person : Person = {
    name : '',
    age : 30
}

// 인터페이스는 동일한 이름으로 중복 선언이 가능하다. 따라서 중복 선언시 합쳐진다.(충돌은 허용하지 않음)


/**
 * 모듈 보강
 * */

interface Lib {
    a : number;
    b : number;
}

interface Lib {
    c : string;
}

const lib : Lib = {
    a : 1,
    b : 2,
    c : 'hello',
};

