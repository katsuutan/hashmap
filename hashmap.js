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
        if (index !== -1) {
            bucket[index][1] = value; // Update existing key
        } else {
            bucket.push([key, value]); // Insert new key-value pair.
            size++;
        }

        // Add resize if needed

    }

    // Returns the value that is assigned to key.
    function get(key) {
        const hashCode = hash(key);
        const bucket = buckets[hashCode];
        const value = bucket.find(([k]) => k === key);
        return value ? value[1] : null;
    }



    return {};
}

