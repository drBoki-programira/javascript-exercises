const removeFromArray = function(array, ...toRemove) {
    for (const item of toRemove) {
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i] === item) array.splice(array.indexOf(item), 1)
        }   
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
