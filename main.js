import HashMap from "./hash-map.js";

const hashMap = new HashMap();

console.log(`1. Rama's hash: ${hashMap.hash("Rama")}`);
console.log(`2. Sita's hash: ${hashMap.hash("Sita")}`);

hashMap.set("chicken", "nugget");