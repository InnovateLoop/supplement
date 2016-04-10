module.exports = function(a,b){
    for (var c in b) {
        a[c] = b[c];
    }
    
    return a;
};