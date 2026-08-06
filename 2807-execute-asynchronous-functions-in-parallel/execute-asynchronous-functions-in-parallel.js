/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const n = functions.length;
        const result = new Array(n);
        let completed = 0;

        if (n === 0) {
            resolve([]);
            return;
        }


        for (let i = 0; i < n; i++) {
            functions[i]().then((value) => {
                result[i] = value;
                completed++;

                if (completed === n) {
                    resolve(result);
                }
            }, reject);
        }
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */