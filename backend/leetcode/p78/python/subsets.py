class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = []
        def dfs(curr, i):
            if i >= len(nums):
                res.append(curr.copy())
                return

            # Include element at i
            curr.append(nums[i])
            dfs(curr, i + 1)

            # Don't include element at i
            curr.pop()
            dfs(curr, i + 1)

        dfs([], 0)
        return res
