let nums = [3,3];
let target = 6;
const result = [];

var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j] == target){
                // console.log(nums[i],nums[j]);
                // console.log(i,j)
                result[0] = i;
                result[1] = j;
                // console.log(result)
                return result
                
            }
            // console.log(nums[i],nums[j])
        }
    }
    // console.log(nums)
};


console.log(twoSum(nums,target))


// test case successfully cleared