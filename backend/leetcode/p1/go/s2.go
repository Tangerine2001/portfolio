package main

import "sort"

// IndexedValue Define a struct to hold the value and the original index
type IndexedValue struct {
	Value int // The value from the nums slice
	Index int // The original index of the value in the nums slice
}

func TwoSumTwoPointers(nums []int, target int) []int {
	// Create a slice of IndexedValue with the same length as nums
	indexedArr := make([]IndexedValue, len(nums))

	// Populate the indexedArr slice with values and their original indices from nums
	for i, v := range nums {
		indexedArr[i] = IndexedValue{Value: v, Index: i}
	}

	// Sort the indexedArr slice based on the values in ascending order
	sort.Slice(indexedArr, func(i, j int) bool {
		return indexedArr[i].Value < indexedArr[j].Value
	})

	// Initialize two pointers: l starts at the beginning, r starts at the end of the slice
	l, r := 0, len(nums)-1

	// Loop until the two pointers meet
	for l < r {
		// Get the values at the two pointers
		lValue := indexedArr[l].Value
		rValue := indexedArr[r].Value

		// Calculate the sum of the two values
		sum := lValue + rValue

		// Check if the sum is equal to the target
		if sum == target {
			// If the sum equals the target, return the original indices of the two values
			return []int{indexedArr[l].Index, indexedArr[r].Index}
		} else if sum < target {
			// If the sum is less than the target, move the left pointer to the right
			l += 1
		} else if sum > target {
			// If the sum is greater than the target, move the right pointer to the left
			r -= 1
		}
	}

	// If no such pair is found, return a default value of indices 0 and 1.
	// This could be a placeholder or an indicator that no solution was found.
	return []int{0, 1}
}
