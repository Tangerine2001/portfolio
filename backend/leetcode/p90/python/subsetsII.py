class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        # Sort to make it easier to not select duplicate values
        nums = sorted(nums)

        res = []
        curr = []
        def dfs(i):
            if i >= len(nums):
                res.append(curr.copy())
                return

            # Include i
            curr.append(nums[i])
            dfs(i + 1)

            # Don't include i. Move i to next value not equal to nums[i]
            value = curr.pop()
            while i < len(nums) and nums[i] == value:
                i += 1
            dfs(i)

        dfs(0)
        return res