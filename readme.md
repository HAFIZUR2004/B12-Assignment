
### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---
Answer
1.getElementById - element with a single id.

getElementsByClassName - multiple elements with the same class.

querySelector - first match of a CSS selector.

querySelectorAll - all matches.

getElementById - element with a single id.

getElementsByClassName - multiple elements with the same class.

querySelector - first match of a CSS selector.

querySelectorAll - all matches.
 
 <!-- 2 -->

2.createElement() - create element

innerText / setAttribute - provide data

appendChild() - insert into DOM
<!-- 3 -->
3.
Event bubbling = event goes from bottom to top.

First target element works → then its parent - then more parents…
<!-- 4 -->
4.
Event Delegation means – placing an event on a parent element, instead of placing separate event listeners on many child elements.
Then, due to bubbling, the event reaches the parent, and we don't check which child has been clicked.
<!-- 5 -->
5.
preventDefault() stops default actions (e.g. form submit, link redirect)
stopPropagation() stops bubbling/capturing events