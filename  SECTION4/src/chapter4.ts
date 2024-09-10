/**
 * @Author: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @Date: 2024-09-10 17:49:36
 * @LastEditors: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @LastEditTime: 2024-09-10 17:56:55
 * @FilePath: src/chapter4.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */

/**
 * 사용자 정의 타입가드
 * */

type Dog = {
    name : string;
    isBark : boolean;
}

type Cat = {
    name : string;
    isScratch : boolean;
}

type Animal = Dog | Cat;

function isDog(animal : Animal) : animal is Dog {
    return (animal as Dog).isBark !== undefined;
}

function isCat(animal : Animal) : animal is Cat {
    return (animal as Cat).isScratch !== undefined;
}
function warning(animal : Animal) {
    if(isDog(animal)){
        // 강아지
    }else if(isCat(animal)){
        // 고양이
    }
}