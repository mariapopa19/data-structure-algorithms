let rob = function(nums: number[]): number {
    const n: number = nums.length;

    if (n === 1) {
        return nums[0];
    }

    const dp = Array(n).fill(0);

    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
    }

    return dp[n - 1];    
};

const nums: number[] = [1,2,3,1]

console.log(rob(nums));