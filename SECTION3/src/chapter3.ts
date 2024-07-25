/**
 * @Author: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @Date: 2024-07-25 10:45:07
 * @LastEditors: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @LastEditTime: 2024-07-25 10:55:48
 * @FilePath: src/ chapter3.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */


/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 * **/

type Animal = {
    name : string;
    color : string;
}


type Dog  = {
    name : string;
    color : string;
    breed : string;
}

let animal : Animal = {
    name : '기린',
    color : 'yellow'
}

let dog : Dog = {
    name : '시루',
    color : 'black',
    breed : 'IG'
}


animal = dog;

type Book = {
    name : string;
    price : number;
}

type ProgrammingBook = {
    name : string;
    price : number;
    skill : string;
}

let book : Book;

let programmingBook : ProgrammingBook = {
    name : '한 입 크기로 잘라먹는 리액트',
    price :33000,
    skill : 'reactjs'
};

book = programmingBook;

// programmingBook = book


/**
 *  초과 프로퍼티 검사
 * **/
let book2 : Book = {
    name : '한 입 크기로 잘라먹는 리액트',
    price :33000,
    //skill : 'reactjs'
}


