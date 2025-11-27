# Two Pointers Pattern

The **Two Pointers** pattern is an extremely efficient technique used to iterate through a data structure (typically an **Array** or **Linked List**) by using two variables, often indices, that move through the collection based on specific conditions.

## Why Use Two Pointers?

* **Efficiency:** It reduces common $\mathbf{O(n^2)}$ solutions (like nested loops) down to $\mathbf{O(n)}$ (linear time), as you only iterate through the data once.
* **In-Place Operations:** It is essential for algorithms that must modify the input structure without allocating extra memory ($\mathbf{O(1)}$ space).

## Pattern Types

### Opposite Direction (Converging)

| Description | Pointers | Movement | Common Use Cases |
| :--- | :--- | :--- | :--- |
| Pointers start at opposite ends and move toward each other. | **Left** (start, index 0) & **Right** (end, index $n-1$) | Move inward until they cross or meet. | Finding a **Target Sum** in a sorted array, checking for **Palindromes**, **Reversing** an array. |

### Same Direction (Fast/Slow)

| Description | Pointers | Movement | Common Use Cases |
| :--- | :--- | :--- | :--- |
| Both pointers start at or near the same point and move in the same direction. | **Slow** (marks the result/unique boundary) & **Fast** (iterates all elements) | The Fast pointer moves quickly; the Slow pointer only moves when a condition is met. | **Removing Duplicates** in-place, finding the **Middle Node** of a list, **Cycle Detection** (e.g., Floyd's algorithm). |

## Examples in this Directory

* **`TargetSum.js`**: Demonstrates the **Opposite Direction** approach.
* **`RemoveDuplicates.js`**: Demonstrates the **Same Direction (Fast/Slow)** approach.