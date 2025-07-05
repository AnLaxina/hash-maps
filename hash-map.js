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
        for (let i = 0; i < strKey.length; i++) {
            // Generate a hash code by multiplying and adding char codes of the stringified key
            hashCode = primeNumber * hashCode + strKey.charCodeAt(i);
        }

        return this.#ifExceededMaxInteger(hashCode) ? hashCode % Number.MAX_SAFE_INTEGER : hashCode;
    }

    set(key, value) {
        const hashCode = this.hash(key);
        const bucketIndex = hashCode % this.capacity;

        if (this.buckets[bucketIndex] === undefined) {
            this.buckets[bucketIndex] = [];
        }

        const bucket = this.buckets[bucketIndex];

        // Check if key already exists and update if so
        for (let pair of bucket) {
            const [storedKey] = pair;

            if (storedKey === key) {
                pair[1] = value;
                return;
            }
        }

        bucket.push([key, value]);
        this.size++;
    }

    get(key) {
        const hashCode = this.hash(key);
        const bucketIndex = hashCode % this.capacity;
        const bucket = this.buckets[bucketIndex];

        if (bucket === undefined) {
            return null;
        }

        for(const [storedKey, storedValue] of bucket) {
            if(key === storedKey) {
                return storedValue;
            }
        }

        return null
    }

    has(key) {
        const hashCode = this.hash(key);
        const bucketIndex = hashCode % this.capacity;
        const bucket = this.buckets[bucketIndex];

        if(bucket === undefined) {
            return false;
        }

        for(const [storedKey, _] of bucket) {
            if(key === storedKey) {
                return true;
            }
        }

        return false;
        
    }


    #ifExceededMaxInteger(hashCode) {
        if (hashCode > Number.MAX_SAFE_INTEGER) {
            // Use modulo to avoid an incredibly large hashcode
            return true;
        }
        return false;
    }

    #getBucketValue(bucketIndex) {
        // Retrieve the first bucket found given a key, and the second element of that bucket to get the actual value
        return this.buckets[bucketIndex][0][1];
    }

}