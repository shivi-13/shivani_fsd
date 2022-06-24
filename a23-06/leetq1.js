var twoSum = function(nums, target) 
{
    let sum=[];
    for (i=0;i<nums.length;i++)
    {
       for(j=i+1;j<nums.length;j++)
       {
           if (nums[i]+nums[j]==target)
           {
               sum.push(i,j)
           }
       }  
    }
   return sum;
}