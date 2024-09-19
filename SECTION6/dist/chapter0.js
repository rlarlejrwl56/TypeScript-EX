/**
 * @Author: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @Date: 2024-09-11 13:57:00
 * @LastEditors: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @LastEditTime: 2024-09-11 14:02:42
 * @FilePath: src/chapter0.js
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */
/**
 * 클래스
 * */
let studendA = {
    name: '김기덕',
    grade: 'A+',
    age: 30,
    study() {
        console.log('열심히 공부');
    },
    introduce() {
        console.log('안녕하세요');
    }
};
// 클래스 생성시 앞글자를 대문자로하는 파스칼 표기법을 쓴다
class Student {
    // 필드
    name;
    grade;
    age;
    // 생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }
}
let studentB = new Student('홍길동', 'B', 30);
console.log(studentB);
export {};
