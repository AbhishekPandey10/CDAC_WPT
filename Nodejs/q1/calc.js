exports.add=function(a,b){
    return a+b;
}
exports.subtract=function(a,b){
    return a-b;
}
exports.multiply=function(a,b){
    return a*b;
}
exports.divide=function(a,b){
    return a/b;
}
exports.square=function(a){
    return a*a;
}
exports.sum=function(...list){
    intit=0
    s=list.reduce((x,y)=>{
        return x+y
    },intit)
    return s
}