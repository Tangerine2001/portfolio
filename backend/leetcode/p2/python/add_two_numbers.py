class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        carry = 0
        curr = ListNode(0)
        res = curr
        while l1 or l2:
            l1_val = l1.val if l1 else 0
            l2_val = l2.val if l2 else 0

            curr_sum = l1_val + l2_val + carry
            carry = curr_sum // 10

            curr.next = ListNode(curr_sum % 10)
            curr = curr.next

            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None

        if carry:
            curr.next = ListNode(carry)

        return res.next
