let a=([[1,2,3], [3,2,1]]);
let b=[];
for(var i = 0 ; i < a[0].length ; i++){
    b[i]=[];
    for(var j = 0 ; j < a.length ; j++){
        b[i][j] = a[j][i];
    }
}
console.log(a);
