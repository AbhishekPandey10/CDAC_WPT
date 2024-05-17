exports.factorial=function(a){
    fact=1;
    for(i=1;i<=a;i++)
        fact=fact*i;
    return fact;
}
exports.myprime=function(a){
    for(i=2;i<a;i++)
        if(a%i==0)
            return false;
    return true;
}
exports.printable=function(a){
    for(i=1;1<=10;i++)
        console.log(a*i);
}