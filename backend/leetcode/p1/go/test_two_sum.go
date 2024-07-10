package main

import (
	"fmt"
	"reflect"
)

func main() {
	fmt.Println(testCaseOne())
	fmt.Println(testCaseTwo())
	fmt.Println(testCaseThree())
}

func testCaseOne() bool {
	nums := []int{2, 7, 11, 15}
	target := 9
	solution := []int{0, 1}
	return genTestCase(solution, nums, target)
}

func testCaseTwo() bool {
	nums := []int{3, 2, 4}
	target := 6
	solution := []int{1, 2}
	return genTestCase(solution, nums, target)
}

func testCaseThree() bool {
	nums := []int{3, 3}
	target := 6
	solution := []int{0, 1}
	return genTestCase(solution, nums, target)
}

func genTestCase(solution []int, nums []int, target int) bool {
	bruteForceTrue := reflect.DeepEqual(solution, TwoSumBruteForce(nums, target))
	twoPointerTrue := reflect.DeepEqual(solution, TwoSumTwoPointers(nums, target))
	hashMapTrue := reflect.DeepEqual(solution, TwoSumHashMap(nums, target))
	return bruteForceTrue && twoPointerTrue && hashMapTrue
}
