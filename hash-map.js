export default class HashMap {
    
    constructor(numberOfEntries = 0) {
        // For now, I'll just choose 16 for the capacity!
        this.capacity = 16;
        this.buckets = new Array(this.capacity);
        this.size = numberOfEntries;
        this.loadFactor = numberOfEntries / this.capacity;
    }

    hash(key) {
        let hashCode = 0;
        let strKey = key.toString();
        const primeNumber = 31;
        for(let i = 0; i < strKey.length; i++) {
            // Generate a hash code by multiplying and adding char codes of the stringified key
            hashCode = primeNumber * hashCode + strKey.charCodeAt(i);
        }

        return this.#ifExceededMaxInteger(hashCode) ? hashCode % Number.MAX_SAFE_INTEGER: hashCode; 
    }

    set(key, value) {
        const hashCode = this.hash(key);
        const bucketIndex = hashCode % this.capacity;
        if(this.buckets[bucketIndex] === undefined) {
            const bucket = [key, value];
            this.buckets[bucketIndex] = bucket;
            console.log(`The bucketIndex is: ${bucketIndex} and the bucket is: ${bucket}`);
        }

    }

    #ifExceededMaxInteger(hashCode) {
        if(hashCode > Number.MAX_SAFE_INTEGER) {
            // Use modulo to avoid an incredibly large hashcode
            return true;
        }

        return false;
    }

}