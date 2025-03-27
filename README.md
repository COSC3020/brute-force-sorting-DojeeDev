# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

### Analysis:

The best case will be a list that is already sorted. This will take n! steps to generate the permuations, then n steps to check that the list is sorted. The way the code generates permuations means that if the list is already sorted, the first iteration of perumations is the same as the input, so will return a sorted list the fastest. Giving us a final time complexity of $n + n! \in \Theta(n + n!)$ For the best case input, a sorted list, we only need to check if the list is sorted 1 time which takes n steps.

Worst case would if the input is reverse sorted. Then we have to go to the end of the permutations to find the right list. That would give us $n! + n! \cdot n = n!(n+1) = (n+1)! \in \Theta ((n+1)!)$

If we generated permutations randomly and didn't have a way to avoid duplicates we could theoritically run it forever since we couldn't be sure it would stop. If we used a random generator that avoids duplicates then the complexity would be n! since we dont generate all permutations. first.























I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
 