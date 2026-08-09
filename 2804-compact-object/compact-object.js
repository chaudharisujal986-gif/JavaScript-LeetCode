/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if(Array.isArray(obj)) {
        let result = [];

        for (let value of obj) {
            if(Boolean(value)) {
                result.push(
                    typeof value === "object" && value !== null ? compactObject(value) : value
                );
            }
        }

        return result;
    }

    let result = {};

    for(let key in obj) {
        let value = obj[key];

        if(Boolean(value)) {
            result[key] = typeof value === "object" && value !== null ? compactObject(value) : value;
        }
    }

    return result;
};