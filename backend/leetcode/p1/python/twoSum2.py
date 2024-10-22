class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
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
