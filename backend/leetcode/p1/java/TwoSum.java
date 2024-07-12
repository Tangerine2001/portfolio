import java.util.Arrays;

public class TwoSum {
    public static void main(String[] args) {
        System.out.println(TestCaseOne());
        System.out.println(TestCaseTwo());
        System.out.println(TestCaseThree());
    }

    private static boolean TestCaseOne() {
        int[] nums = new int[]{2,7,11,15};
        int target = 9;
        int[] solution = new int[]{0, 1};

        return GeneralTestCase(nums, target, solution);
    }

    private static boolean TestCaseTwo() {
        int[] nums = new int[]{3,2,4};
        int target = 6;
        int[] solution = new int[]{1, 2};

        return GeneralTestCase(nums, target, solution);
    }

    private static boolean TestCaseThree() {
        int[] nums = new int[]{3, 3};
        int target = 6;
        int[] solution = new int[]{0, 1};

        return GeneralTestCase(nums, target, solution);
    }

    private static boolean GeneralTestCase(int[] nums, int target, int[] solution) {
        TwoSumBruteForce twoSumBruteForce = new TwoSumBruteForce();
        TwoSumTwoPointers twoSumTwoPointers = new TwoSumTwoPointers();
        TwoSumHashMap twoSumHashMap = new TwoSumHashMap();

        boolean bruteForceWorks = Arrays.equals(twoSumBruteForce.twoSum(nums, target), solution);
        boolean twoPointerWorks = Arrays.equals(twoSumTwoPointers.twoSum(nums, target), solution);
        boolean twoSumHashMapWorks = Arrays.equals(twoSumHashMap.twoSum(nums, target), solution);

        System.out.println("bruteForceWorks: " + bruteForceWorks);
        System.out.println("twoPointerWorks: " + twoPointerWorks);
        System.out.println("twoSumHashMapWorks: " + twoSumHashMapWorks);

        return bruteForceWorks && twoPointerWorks && twoSumHashMapWorks;
    }
}
