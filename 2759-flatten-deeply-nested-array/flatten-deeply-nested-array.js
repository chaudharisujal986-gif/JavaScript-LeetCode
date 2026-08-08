/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let result = [];

    function flatten(array, depth) {
        for(let element of array) {

            if(Array.isArray(element) && depth < n) {
                flatten(element, depth + 1);
            } else {
                result.push(element);
            }
        }
    }
    flatten(arr, 0);

    return result;
};