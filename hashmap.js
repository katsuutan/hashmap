function HashMap() {
    const loadFactor = 0.8;
    const capacity = 16;
    let buckets = [16];
    let size = 0;

    // Takes a key and produces a hash code with it.
    function hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            // apply % modulo on each iteration to ensure output does not become larger than bucket's length
            hashCode = hashCode % capacity;
        }

        return hashCode;
    }

    // Adds new key-value pair to hash map. If key exists, updates the value.
    function set(key, value) {
        const hashCode = hash(key);
        const bucket = buckets[hashCode];

        // Finds index of a key that matches the current key being set. If no element/key matches, returns -1.
        const index = bucket.findIndex(([k]) => k === key);
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
        if (index !== -1) {
            bucket[index][1] = value; // Update existing key
        } else {
            bucket.push([key, value]); // Insert new key-value pair.
            size++;
        }

        // Add resize if needed
        if (size / capacity > loadFactor)
            resize();
    }

    // Returns the value that is assigned to key, else returns null.
    function get(key) {
        const hashCode = hash(key);
        const bucket = buckets[hashCode];
        const value = bucket.find(([k]) => k === key);
        return value ? value[1] : null;
    }

    // Returns true or false based on whether or not the key is in the hash map.
    function has(key) {
        return get(key) !== null;
    }

    // If given key is in hash map, it should remove the entry with that key and return true. If key is not in hashmap, return false.
    function remove(key) {
        const hashCode = hash(key);
        const bucket = buckets[hashCode];
        const index = bucket.findIndex(([k]) => k === key);
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
        if (index !== -1) {
            bucket.splice(index, 1);
            size--;
            return true;
        } else
            return false;
    }

    // Returns the number of stored keys in the hash map.
    function length() {
        return size;
    }

    // Removes all entries in the hash map.
    function clear() {
        buckets = [];
        buckets = [16];
        size = 0;
    }

    // Returns an array containing all the keys inside the hash map.
    function keys() {

    }

    // Returns an array containing all the values.
    function values() {

    }

    // Returns an array that contains each key, value pair. e.g. [[key, value], [key, value]]
    function entries() {

    }

    // Doubles capacity and rehashes all key-value pair into new hashmap.
    function resize() {
        const oldBuckets = buckets;
        capacity = capacity * 2;
        buckets = [capacity];
        size = 0;

        for (const bucket of oldBuckets) {
            for (const [key, value] of bucket) {
                set(key, value);
            }
        }
    }

    return {};
}

