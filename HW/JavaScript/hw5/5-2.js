function fraction(n)
{
  let result = 1
  while (n>0)
  {
    result*=n
    n-=1
  }
  return result 
}
