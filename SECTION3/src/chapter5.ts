/**
 * @Author: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @Date: 2024-08-27 17:01:40
 * @LastEditors: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @LastEditTime: 2024-08-27 17:29:27
 * @FilePath: src/chapter6.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */


/**
 * 타입 추론
 * */

let a = 10;
let b = 'hello';
let c = {
    id : 1,
    name : '김기덕',
    profile : {
        nickName : 'winterlood',
    },
    urls : ['https://winterlood.com']
};


let {id, name, profile} = c;
let [one, two, three] = [1,'hello',true];

function func(message = 'hello') {
    return 'hello';
}


/**
 * 암묵적으로 any 타입을 지정하면 타입이 진화한다.
 * */
let d;

d = 10;
d.toFixed();

d = 'hello';
d.toUpperCase();

const num = 10;
const str = 'hello';

let arr = [1, 'string'];
