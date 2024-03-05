export default function createIteratorObject(report) {
    return [Symbol.iterator] () {
        return {
            keys: Object.keys(report),

            next() {
                current: keys
                if (this.keys.length > 0)
                    return {done: false, value: }
            }
        }
    }
}