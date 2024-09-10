/**
 * @Author: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @Date: 2024-08-27 17:46:41
 * @LastEditors: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @LastEditTime: 2024-09-04 13:52:43
 * @FilePath: src/chapter6.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */


/**
 * 타입 단언
 * */

type Person = {
    name : string;
    age : number;
}

let person = {} as Person;

person.name = '김기덕';
person.age = 30;


type Dog = {
    name : string;
    color : string;
}

let dog   = {
    name : '돌돌이',
    color : 'brown',
    breed : 'IG'
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A 가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 * */

let num1 = 10 as never;
let num2 = 10 as unknown;

let num3 = 10 as string;


/**
 * const 단언
 * as const 로 단언하면 read only 가 자동으로 된다.
 */

let num  = 10 as const;

let cat = {
    name : '고양이',
    color : 'yellow'
} as const;


/**
 * Non null 단언
 * 
 * 변수.! 를 붙이면 확실히 있다고 받아들임.
 * */

type Post = {
    title : string;
    author ?: string;
};


let post : Post = {
    title : '게시글1',
    author : '김기덕'
}

const len : number   = post.author!.length;








