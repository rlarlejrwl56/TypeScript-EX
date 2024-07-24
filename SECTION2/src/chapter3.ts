/**
 * @Author: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @Date: 2024-07-24 13:15:19
 * @LastEditors: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @LastEditTime: 2024-07-24 13:24:56
 * @FilePath: src/chapter3.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */

// 객체(Object) 
    // 아래 방식이 객체 리터럴 타입 방식
    // 구조 기준을 따라 정의하기 때문에 구조적 타입 시스템이라고 한다. -> Property Type System
    // 이름을 기준으로 정의는 명목적 타입 시스텝이라고 한다.
    // ?를 선택적 프로퍼티 또는 Optional Property 라고 한다
let user : { id ?: number , name : string } = {
    id : 1,
    name : '김기덕'
};

let config: { readonly apiKey : string} = {
    apiKey : 'My Api Key'
}

