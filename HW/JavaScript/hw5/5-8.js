function add( a , b )
{
    var m , n ;
    var d = [];
    for(m=0 ; m<a.length ; m++)
    {
        d[m]=[];
        for(n=0 ; n<a[m].length ; n++)
        {
            d[m][n] =a[m][n] + b[m][n] 


        }
    }
    return d;
}