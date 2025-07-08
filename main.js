import HashMap from "./hash-map.js";

const hashMap = new HashMap();

console.log(`1. chicken's hash: ${hashMap.hash("chicken")}`);
console.log(`2. chicken's hash: ${hashMap.hash("chicken")}`);

console.log("Adding chicken, cow, and dog:");
hashMap.set("chicken", "nugget");
hashMap.set("cow", "sauce");
hashMap.set("dog", "sauce");

console.log(`The values of the hashmap are: ${hashMap.values()}`);
