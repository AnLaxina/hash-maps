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

        for (const [storedKey, storedValue] of bucket) {
            if (key === storedKey) {
                return storedValue;
            }
        }

        return null;
    }

    has(key) {
        const hashCode = this.hash(key);
        const bucketIndex = hashCode % this.capacity;
        const bucket = this.buckets[bucketIndex];

        if (bucket === undefined) {
            return false;
        }

        for (const [storedKey, _] of bucket) {
            if (key === storedKey) {
                return true;
            }
        }

        return false;

    }

    remove(key) {
        if (!this.has(key)) {
            return false;
        }
        else {
            const hashCode = this.hash(key);
            const bucketIndex = hashCode % this.capacity;
            const bucket = this.buckets[bucketIndex];

            for(let i = 0; i < bucket.length; i++) {
                const [storedKey] = bucket[i]
                if(storedKey === key) {
                    bucket.splice(i, 1);
                    this.size--;
                    return true;
                }
            }
        }
    }

    length() {
        return this.size;
    }

    clear() {
        this.buckets = new Array(this.capacity);
        this.size = 0;
    }

    keys() {
        if(this.buckets.length === 0) {
            return [null];
        }
        else {
            const keys = []
            for(const bucket of this.buckets) {
                if(bucket !== undefined) {
                    for (const [key, value] of bucket) {
                        keys.push(key);
                    }
                }
            }

            return keys;
        }
        
    }

    values() {
        if(this.buckets.length === 0) {
            return null;
        }
        else {
            const values = [];
            for(const bucket of this.buckets) {
                if(bucket !== undefined) {
                    for (const [key, value] of bucket) {
                        values.push(value);
                    }
                }
            }

            return values;
        }
    }

    entries() {
        if(this.buckets.length === 0) {
            return [null];
        }
        else {
            const entries = [];
            for(const bucket of this.buckets) {
                if(bucket !== undefined) {
                    for(const pair of bucket) {
                        entries.push(pair);
                    }
                }
            }
            return entries;
        }
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