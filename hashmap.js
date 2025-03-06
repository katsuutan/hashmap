function HashMap() {
    const loadFactor = 0.8;
    const capacity = 12;

    // Takes a key and produces a hash code with it.
    function hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);

            // apply % modulo on each iteration?
        }

        return hashCode;
    }

    // 
    function set(key, value) {

    }

    // Returns the value that is assigned to key.
    function get(key) {

    }

    return {};
}

