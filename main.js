import HashMap from "./hash-map.js";

const hashMap = new HashMap();

console.log(`1. chicken's hash: ${hashMap.hash("chicken")}`);
console.log(`2. chicken's hash: ${hashMap.hash("chicken")}`);

hashMap.set("chicken", "nugget");
hashMap.set("chicken", "sauce");

hashMap.set("cheap trick", "doggy");