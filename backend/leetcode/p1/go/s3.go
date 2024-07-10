package main

func TwoSumHashMap(nums []int, target int) []int {
	// Create a map to keep track of the numbers we have seen and their indices.
	seen := make(map[int]int)

	// Populate the map with the value as the key and the index as the value.
	for index, value := range nums {
		seen[value] = index
	}

	// Iterate through each element in the nums slice.
	for i := 0; i < len(nums); i++ {
		// Check if the complement (target - nums[i]) exists in the map
		// and ensure it is not the same element by checking the indices.
		if j, ok := seen[target-nums[i]]; ok && i != j {
			// If the complement exists and is not the same element, return the indices.
			return []int{i, j}
		}
	}

	// If no such pair is found, return a default value of indices 0 and 1.
	// This could be a placeholder or an indicator that no solution was found.
	return []int{0, 1}
}
