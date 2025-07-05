import HashMap from "./hash-map.js";

const hashMap = new HashMap();
const coolStringToTest = "Hello! I'm sooo cool!";
const coolNum = 100000000000000000000;

// console.log(`1. coolStringToTest's hash: ${hashMap.hash(coolStringToTest)}`);
// console.log(`2. coolStringToTest's hash: ${hashMap.hash(coolStringToTest)}`);
// console.log(`3. coolStringToTest's hash: ${hashMap.hash(coolStringToTest)}`);

// console.log(`coolNum is: ${hashMap.hash(coolNum.toString())}`);
console.log(`coolNum is: ${hashMap.hash(coolNum)}`);