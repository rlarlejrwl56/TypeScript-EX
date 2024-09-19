/**
 * @Author: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @Date: 2024-09-19 17:38:22
 * @LastEditors: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @LastEditTime: 2024-09-19 17:56:41
 * @FilePath: src/chapter2.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */


/**
 * 접근 제어자
 * access modifier
 * => public private proteced
 * */

class Employee {
    // 필드
    private name : string;
    protected age : number;
    public position : string;

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

class ExcutiveOfficer extends Employee {
    // 필드
    officeNumber : number;
    
    // 생성자
    constructor(name : string, age : number, position : string, officeNumber: number) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
    
    func(){
        this.age;
        //this.name;
    }
}

const employee = new Employee('김기덕', 30, '개발자');
// employee.name = '홍길동';
// employee.age = 21;
employee.position = '디자이너';

console.log(employee);


/**
 * public 외부에서도 접근 가능
 * protected 외부에서는 접근이 안되지만 파생클래스 내부에서는 접근할 수 있는 접근 제어자 이다.
 * private 외부 내부에서 접근 불가
 * 생성자에 접근 제어자를 달면 자동으로 필드에 정의가 된다.
 * */