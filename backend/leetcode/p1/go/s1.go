package main

func TwoSumBruteForce(nums []int, target int) []int {
	// Outer loop to iterate through each element in the slice 'nums' except the last one.
	for i := 0; i < len(nums)-1; i++ {
		// Inner loop to iterate through each element in the slice 'nums' starting from the element after 'i'.
		for j := i + 1; j < len(nums); j++ {
			// Check if the sum of nums[i] and nums[j] equals the target.
			if nums[i]+nums[j] == target {
				// If the sum equals the target, return the indices i and j.
				return []int{i, j}
			}
		}
	}
	// If no such pair is found, return a default value of indices 0 and 1.
	// This could be a placeholder or an indicator that no solution was found.
	return []int{0, 1}
}
