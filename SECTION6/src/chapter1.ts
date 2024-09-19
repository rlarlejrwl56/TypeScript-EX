/**
 * @Author: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @Date: 2024-09-19 17:14:01
 * @LastEditors: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @LastEditTime: 2024-09-19 17:36:17
 * @FilePath: src/chapter1.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */


/**
 *  타입스크립트의 클래스
 * */


const employee = {
    name : '김기덕',
    age : 30,
    position : 'developer',
    work(){
        console.log('일함');
    }
}

class Employee {
    // 필드
    name : string;
    age : number;
    position : string;
    
    constructor(name : string, age : number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    
    // 메서드
    work() {
        console.log('일함')
    }
}

class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber : number;
    
    // 생성자
    constructor(name : string,age : number, position : string, officeNumber: number) {
        super(name , age, position);
        this.officeNumber = officeNumber;
    }
    
}


const employeeB = new Employee('김기덕', 30, '개발자');


console.log(employeeB);

const employeeC : Employee = {
    name : '',
    age : 0,
    position : '',
    work(){}
}