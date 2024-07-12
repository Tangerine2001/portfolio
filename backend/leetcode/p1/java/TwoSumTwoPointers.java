import java.util.ArrayList;
import java.util.Comparator;

public class TwoSumTwoPointers implements TwoSumSolution {
    private class IndexedValue {
        private int value;
        private int index;

        public IndexedValue(int value, int index) { this.value = value; this.index = index; }
    }

    public int[] twoSum(int[] nums, int target) {
        ArrayList<IndexedValue> ivs = new ArrayList<>(nums.length);
        for (int i = 0; i < nums.length; i++) {
            IndexedValue iv = new IndexedValue(nums[i], i);
            ivs.add(iv);
        }

        ivs.sort(Comparator.comparingInt(iv -> iv.value));

        int l = 0, r = nums.length - 1;
        while (l < r) {
            if (ivs.get(l).value + ivs.get(r).value == target) {
                return new int[]{ivs.get(l).index, ivs.get(r).index};
            } else if (ivs.get(l).value + ivs.get(r).value < target) {
                l++;
            } else {
                r--;
            }
        }

        return new int[]{0, 1};
    }
}
