/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if (obj === null || obj === undefined) return false;
    if (typeof classFunction !== "function") return false;

    return obj instanceof classFunction || 
    Object(obj) instanceof classFunction;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */