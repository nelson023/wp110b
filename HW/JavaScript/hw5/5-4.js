function filter357(a,b)
{
    var ans = [];
    for (let i = a; i < b; i++)
    {
        if (i % 3 != 0 && i % 5 != 0 && i % 7 != 0)
        {
           ans.push(i);
        }
    }

    return ans;
}
