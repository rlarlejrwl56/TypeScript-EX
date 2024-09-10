/**
 * @Author: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @Date: 2024-09-10 14:22:53
 * @LastEditors: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @LastEditTime: 2024-09-10 14:47:35
 * @FilePath: src/chapter8.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */


/**
 * 서로소 유니온 타입 = 태그드 유니온타입 이라고 부르기도함
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함.
 * */

type Admin = {
    tag : 'ADMIN';
    name : string;
    kickCount : number;
}

type Member = {
    tag : 'MEMBER';
    name : string;
    point : number;
}

type Guest = {
    tag : 'GUEST';
    name : string;
    visitCount : number;
};

type User = Admin | Member | Guest;


// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {poing}를 모았습니다..
// Guest -> {name}님 현재까지 {visitCount}번 방문하셨습니다..

function login(user : User){
    switch (user.tag){
        case  "ADMIN" : {
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다`);
            break;
        }
        case "MEMBER": {
            console.log(`${user.name}님 현재까지 ${user.point}를 모았습니다.`);
            break;
        }
        case "GUEST": {
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
            break;
        }
    }
    
   /* if(user.tag === 'ADMIN'){
        // admin 타입
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다`)
    }else if(user.tag === 'MEMBER'){
        // member타입
        console.log(`${user.name}님 현재까지 ${user.point}를 모았습니다.`)
    }else{
        // guest타입
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`)
    }*/
}


/**
 * 복습겸 한가지 더 사례
 * */

// 비동기 작업의 결과를 처리하는 객체
type LoadingTask = {
    state : 'LOADING'
}    
type FailedTask ={
    state : 'FAILED'
    error : {
        message : string;
    }
}
type SuccessTask = {
    state : 'SUCCESS',
    response : {
        data : string;
    }
}
    
type AsyncTask = {
    state : 'LOADING' | 'FAILED' | 'SUCCESS';
    error ?: {
        message : string;
    }
    response ?: {
        data : string;
    }
}
    
const loading : AsyncTask = {
    state : 'LOADING',
    
};

const failed : AsyncTask = {
    state : 'FAILED',
    error : {
        message : '오류 발생 원인은 ~',
    }
};

const success : AsyncTask = {
    state : 'SUCCESS',
    response : {
        data : '데이터 ~~'
    }
};

// 로딩 중 -> 콘솔에 로딩 출력
// 실패 -> 실패 : 에러메시지 출력
// 성공 -> 성공 : 데이터를 출력
function processResult(task : LoadingTask | FailedTask | SuccessTask) {
    switch (task.state){
        case 'LOADING' : {
            console.log('로딩중...');
            break;
        }
        case 'FAILED' : {
            console.log(`에러 발생 : ${task.error.message}`);
            break;
        }
        case 'SUCCESS' : {
            console.log(`성공 : ${task.response.data}`);
            break;
        }
    }
}
