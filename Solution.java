import java.math.BigDecimal;
import java.util.PriorityQueue;
import java.util.Stack;

class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }

    @Override
    public String toString() {
        String val = ""+ this.val;
        while (next!=null ){
            val+=", "+next.val;
            next= next.next;
        }
        return val;
    }
}

public class Solution {


    public static void main(String[] args) {
        float d = 0.02f+5.43f;

        System.out.println("0.02+5.43="+d);
        System.out.println("5.45-(0.02+5.43)="+(5.45f-(0.02f+5.43f)));





//        [[1,4,5],[1,3,4],[2,6]]
//        ListNode l1 = new ListNode(1, new ListNode(2));
//        l1.next.next= new ListNode(3, new ListNode(4));
//
//        ListNode l2 = new ListNode(1, new ListNode(3));
//        l2.next.next= new ListNode(4);
//
//        ListNode l3 = new ListNode(2, new ListNode(6));
//        System.out.println(reverseList(l1));


//        System.out.println(mergeKLists(new ListNode[]{l1, l2, l3}));
    }

    public static ListNode reverseList(ListNode head) {
        ListNode prev = null; // Previous node, initially null
        ListNode current = head; // Current node to process

        while (current != null) {
            ListNode nextNode = current.next; // Store the next node
            current.next = prev; // Reverse the current node's pointer
            prev = current; // Move prev to current node
            current = nextNode; // Move to the next node
        }

        return prev; // Prev becomes the new head of the reversed list
    }

    public static ListNode mergeKLists(ListNode[] lists) {
        // Use a priority queue (min-heap) to keep nodes sorted by value
        PriorityQueue<ListNode> pq = new PriorityQueue<>((a, b) -> a.val - b.val);

        // Add the head of each non-null list to the priority queue
        for (ListNode list : lists) {
            if (list != null) {
                pq.offer(list);
            }
        }

        // Dummy node to start the merged list
        ListNode dummy = new ListNode(0);
        ListNode current = dummy;

        // Merge lists by repeatedly extracting the smallest element
        while (!pq.isEmpty()) {
            ListNode node = pq.poll();
            current.next = node;  // Add the smallest node to the merged list
            current = current.next;  // Move to the next position in the merged list

            // If the node has a next, add it to the priority queue
            if (node.next != null) {
                pq.offer(node.next);
            }
        }

        // Return the merged list (dummy.next is the actual head)
        return dummy.next;
    }

    public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummyHead = new ListNode(0);
        ListNode current = dummyHead;
        int carry = 0;

        while (l1 != null || l2 != null || carry != 0) {
            int sum = carry; // Начинаем с переноса

            if (l1 != null) {
                sum += l1.val; // Добавляем значение текущего узла l1
                l1 = l1.next;  // Переходим к следующему узлу
            }

            if (l2 != null) {
                sum += l2.val; // Добавляем значение текущего узла l2
                l2 = l2.next;  // Переходим к следующему узлу
            }

            carry = sum / 10; // Обновляем перенос
            current.next = new ListNode(sum % 10); // Создаем новый узел с остатком от деления
            current = current.next; // Переходим к следующему узлу
        }

        return dummyHead.next; // Возвращаем результат, начиная со следующего узла от фиктивного
    }


    //    ----search
    public int search(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2; // Avoid overflow

            if (nums[mid] == target) {
                return mid; // Target found
            } else if (nums[mid] < target) {
                left = mid + 1; // Search in the right half
            } else {
                right = mid - 1; // Search in the left half
            }
        }

        return -1; // Target not found
    }


    public boolean isValid(String s) {
        // Use a stack to track opening brackets
        Stack<Character> stack = new Stack<>();

        // Iterate through each character in the string
        for (char ch : s.toCharArray()) {
            // If the character is an opening bracket, push it onto the stack
            if (ch == '(' || ch == '[' || ch == '{') {
                stack.push(ch);
            }
            // If the character is a closing bracket
            else {
                // If the stack is empty, there's no matching opening bracket
                if (stack.isEmpty()) {
                    return false;
                }
                // Check if the top of the stack matches the closing bracket
                char top = stack.pop();
                if ((ch == ')' && top != '(') ||
                        (ch == ']' && top != '[') ||
                        (ch == '}' && top != '{')) {
                    return false;
                }
            }
        }

        // If the stack is empty, all brackets were matched
        return stack.isEmpty();
    }

//    public int guessNumber(int n) {
//        int left = 1; // Начало диапазона
//        int right = n; // Конец диапазона
//
//        while (left <= right) {
//            int mid = left + (right - left) / 2; // Вычисляем середину, избегая переполнения
//
//            int result = guess(mid); // Вызов API guess
//
//            if (result == 0) {
//                return mid; // Угадали число
//            } else if (result == -1) {
//                right = mid - 1; // Число меньше загаданного
//            } else {
//                left = mid + 1; // Число больше загаданного
//            }
//        }
//
//        return -1; // По логике игры сюда мы не дойдем, но метод требует возврат значения
//    }

    public boolean searchMatrix(int[][] matrix, int target) {
        int rowStart = 0;
        int rowEnd = matrix.length-1;
        while (rowStart <= rowEnd) {
            int mid = rowStart + (rowEnd - rowStart) / 2;

            if (matrix[mid][0] == target) {
                return true;
            } else if (matrix[mid][0] < target) {
                rowStart = mid + 1; // Search in the right half
            } else {
                rowEnd = mid - 1; // Search in the left half
            }
        }
        int colStart = 0;
        int colend = matrix[rowEnd].length;
        while (colStart<=colend){
            int mid = colStart+(colend-colStart)/2;
            if(matrix[rowEnd][mid]== target){
                return true;
            }else if(matrix[rowEnd][mid]< target) {
                colStart= mid+1;
            }else {
                colend = mid-1;
            }
        }
        return false;
    }
}