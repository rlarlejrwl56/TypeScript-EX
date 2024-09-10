/**
 * @Author: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @Date: 2024-09-10 14:56:23
 * @LastEditors: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @LastEditTime: 2024-09-10 15:42:25
 * @FilePath: src/chapter0.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */


/**
 * 함수 타입 정의
 * */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a : number, b : number){
    return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 * */

const add = (a : number ,b : number)=> a+b;


/**
 * 함수의 매개변수
 * 생략할 수 없는 매개변수는 필수 매개변수라고 부른다.
 * 선택적 매개변수를 사용할 때는 필수 매개변수 뒷쪽에 배치해야한다.
 * */

function introduce(name = '김기덕',age : number,  tall ?: number){
    console.log(`name ::: ${name}`);
    if(typeof tall === "number"){
        console.log(`tall ::: ${tall + 10}`);
    }
}

introduce('김기덕', 120);

introduce('김기덕',30);

// ... 가변적인 길이의 인수들을 전달을 하면 배열로 묶어서 rest 라는 변수에 저장해준다.
function getSum(...rest : number[]){
    let sum = 0;
    
    rest.forEach((it) => {sum += it})
    
    return sum;
}

getSum(1,2,3);
getSum(1,2,3,4,5);
