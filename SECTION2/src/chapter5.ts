/**
 * @Author: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @Date: 2024-07-24 13:44:42
 * @LastEditors: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @LastEditTime: 2024-07-24 13:54:08
 * @FilePath: src/chapter5.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */

// 이넘(enum) 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// enum 은 컴파일을 해도 사라지지 않는다.

enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2
}

enum Language {
    korean = 'ko',
    English = 'en',
}
// 0 : 관리자, 1 : 일반 유저, 2 : 게스트
const user1 = {
    name : '김기덕',
    role : Role.ADMIN,
    language : Language.korean
}

const user2 = {
    name : '홍길동',
    role : Role.USER
}

const user3 = {
    name : '김아무개',
    role : Role.GUEST
}


console.log(user1.role);
console.log(user2.role);
console.log(user3.role);
