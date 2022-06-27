const arr=[1,1,2,2,3,4,4,4,5];
let count=0;
for (i=0;i<=arr.length;i++)
{
    if (arr[i]==arr[i+1])
    {
        arr.splice(arr[i],1);
        count+=1;
    }
   
}
console.log(count,arr);
