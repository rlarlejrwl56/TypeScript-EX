/**
 * @Author: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @Date: 2024-08-27 16:32:43
 * @LastEditors: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @LastEditTime: 2024-08-27 16:59:54
 * @FilePath: src/chapter5.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */

const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
    }, 3000);
})

promise.then((response) => {
    console.log(response * 10);
})

/**
 * 중간 정리 promise는 제네릭클래스 타입 기반으로 선언 되어 있기 때문에 타입 변수로 비동기처리의 결과값을 정의해줄 수 있지만 reject 실패했을 때에는 정의할 수 없다. 
 * */

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 * */

interface Post {
    id : number;
    title : string;
    contents : string;
}

function fetchPost() : Promise<Post>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id : 1,
                title : '게시글 제목',
                contents : '게시글 컨텐츠'
            });
        },3000);
    });
}

const postRequest = fetchPost();

postRequest.then((post) => {
    post.id;
})
