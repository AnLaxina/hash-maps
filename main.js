import HashMap from "./hash-map.js";

const hashMap = new HashMap();

console.log(`1. chicken's hash: ${hashMap.hash("chicken")}`);
console.log(`2. chicken's hash: ${hashMap.hash("chicken")}`);

hashMap.set("chicken", "nugget");
hashMap.set("chicken", "sauce");

console.log(hashMap.get("chicken"));
console.log(hashMap.remove("chicken"));
console.log(hashMap.get("chicken"));