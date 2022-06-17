var ans=[];
function factor(num){
    for(var i = 2 ; i <= num ; i++){
        if(num % i == 0){
            num /= i;
            ans.push(i);
            i = 2;
        }
    }
        console.log(ans);
}
factor(45)
