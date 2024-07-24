/**
 * @Author: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @Date: 2024-07-24 13:24:54
 * @LastEditors: rlarlejrwl56 63471869+rlarlejrwl56@users.noreply.github.com
 * @LastEditTime: 2024-07-24 13:44:24
 * @FilePath: src/chapter4.ts
 * @Description: 这是默认设置,可以在设置》工具》File Description中进行配置
 */


// 타입 별칭
type User = {
    id : number,
    name : string, 
    nickname : string, 
    birth : string, 
    bio : string, 
    location : string
}
let user : User = {
    id : 1,
    name : '김기덕',
    nickname : 'winterlood',
    birth : '1995.02.20',
    bio : '하이하이',
    location : '성남시'
}


let user2 : User = {
    id : 2,
    name : '김가덕',
    nickname : 'winterlood2',
    birth : '1995.02.20',
    bio : '하이하이',
    location : '성남시'
}

// 인덱스 시그니처

type CountryCodes = {
    [key : string] : string;
}
let countryCodes : CountryCodes = {
    Korea : 'ko',
    UnitedState : 'us',
    UnitedKingdom : 'uk'
}


type CountryNumbers = {
    [key : string] : number | string
    Korea : number | string;
 }
let countryNumberCodes : CountryNumbers = {
    Korea : 'ko'
}

