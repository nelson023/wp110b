function Avg(Array)
{
    var i = 0, sum = 0, ArrayLen = Array.length;
    while (i < ArrayLen)
    {
        sum = sum + Array[i++];
}
    return sum / ArrayLen;
}
var Array = [1, 2, 3, 4, 5];
var a = Avg(Array);
console.log(a)
