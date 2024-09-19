/**
 * @Author: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @Date: 2024-09-11 13:37:35
 * @LastEditors: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @LastEditTime: 2024-09-11 13:46:42
 * @FilePath: src/chapter1.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */


/**
 * 인터페이스의 확장
 * */

interface Animal {
    name : string;
    color : string;
}

/*interface Dog {
    name :string;
    age : number;
    isBark : boolean;
}

interface Cat {
    name : string;
    age : number;
    isScratch : boolean;
}

interface Chicken {
    name : string;
    age : number;
    isFly : boolean;
}*/

interface Dog extends Animal{
    isBark : boolean;
}

interface Cat extends Animal{
    isScratch : boolean;
}

interface Chicken extends Animal{
    isFly : boolean;
}

// 동일 프로퍼티를 재정의할떄는 원본 프로퍼티의 타입의 서브 타입이 되도록 다시 정의를 해줘야 한다.


interface DogCat extends Dog, Cat {
    
}

const dogCat : DogCat = {
    name : '',
    color : '',
    isBark : true,
    isScratch : true
}