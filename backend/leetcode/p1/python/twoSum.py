class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        pass

## Two Sum Brute Force Solution
def twoSumBrute();
    n = len(nums)
    for i in range(n - 1):
        for j in range(i + 1, n):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []  # No solution found

## Two Sum Two Pointer Solution O(nlogn)
def twoSumTwoPointers():
    # Create a list of tuples (number, index)
    nums = [(num, i) for i, num in enumerate(nums)]
    # Sort the list of tuples by number
    nums.sort()
    # Initialize two pointers
    left, right = 0, len(nums) - 1
    while left < right:
        # Calculate the sum of the two numbers
        total = nums[left][0] + nums[right][0]
        if total == target:
            return [nums[left][1], nums[right][1]]
        elif total < target:
            left += 1
        else:
            right -= 1
    return []  # No solution found

## Two Sum HashMap Solution
def twoSumHashMap():
    # Create a dictionary to store the index of each number
    num_to_index = {}
    for i, num in enumerate(nums):
        if target - num in num_to_index:
            return [num_to_index[target - num], i]
        num_to_index[num] = i
    return []  # No solution found
