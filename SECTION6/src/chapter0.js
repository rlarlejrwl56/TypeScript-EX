/**
 * @Author: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @Date: 2024-09-11 13:57:00
 * @LastEditors: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @LastEditTime: 2024-09-19 17:13:09
 * @FilePath: src/chapter0.js
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */


/**
 * 클래스
 * */

let studendA = {
    name : '김기덕',
    grade : 'A+',
    age : 30,
    study() {
        console.log('열심히 공부')
    },
    introduce() {
        console.log('안녕하세요')
    }
}

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
    
    // 메서드
    study() {
        console.log('열심히 공부')
    }
    introduce() {
        console.log(`안녕하세요 ${this.name}입니다.`);
    }
}

class StudentDeveloper extends Student {
    // 필드
    favoriteSkill;
    
    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }
    
    // 메서드
    programing(){
        console.log(`${this.favoriteSkill}로 프로그래밍함`);
    }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스라고 한다
let studentB = new Student('김기덕', 'B', 30);

console.log(studentB);

studentB.study();
studentB.introduce();

const studentDeveloper = new StudentDeveloper('김기덕', 'B+', 30, 'TypeScript');

console.log(studentDeveloper);
studentDeveloper.study();
studentDeveloper.introduce();
studentDeveloper.programing();