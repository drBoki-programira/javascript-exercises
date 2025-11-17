const sumAll = function(a, b) {
    let result = 0

    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) return 'ERROR'
    
    if (a > b) [a, b] = [b, a]
    
    for (a; a <= b; a++) {
        result += a
    }
    
    return result 
};

// Do not edit below this line
module.exports = sumAll;
