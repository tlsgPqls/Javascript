import { add, multiply } from "./math.js";
console.log(add(2, 3)); // 타입을 취소해준다 반환형도 애니타입
console.log(multiply(2, 3));
// 라이브러리를 사용하려면 임포트해서 모듈을 가지고 와야함

import greet from "./greet.js";
console.log(greet("로키"));

import getUserName, { age } from "./user.js";

console.log(getUserName());
console.log(age);
