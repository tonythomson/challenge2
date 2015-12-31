#lexicoSort

A lexicographic sorting function to sort an array of strings based on a
user-defined ordering.

## Problem description

Summary: Write a function to sort an array of strings based on an arbitrary
lexicographic ordering. The function will take two parameters: an array of
strings to sort and a string specifying the lexicographic order.

Example input #1: ( ["acb", "abc", "bca"], "abc")
Example output #1: ["abc","acb","bca"]

Example input #2: ( ["acb", "abc", "bca"], "cba")
Example output #2: ["bca", "acb", "abc"]

Example input #3: (["aaa","aa",""], "a")
Example output #3: ["", "aa", "aaa"]

You may assume that the strings to be sorted consist only of characters from
the specified lexicographical ordering. You may also assume that the
characters in the strings to sort consist only of lowercase a-z.

## Algorithmic Complexity

To determine the algorithmic complexity of this method, we need to look at the
complexity of both the native JS `Array.sort()` method and the comparator.

### Array.sort()

The complexity of the sorting approach is going to depend on what algorithm is
used. Based on some [quick searching](http://stackoverflow.com/questions/234683/javascript-array-sort-implementation), most browsers are most likely using either
a mergeSort or quickSort, both of which have a complexity of O(N log N) (for the average case—quickSort has a worst case of O(n^2)).

The complexity of the comparator depends largely on the cost of looking up the position of a character in the hash object. This should require one operation, or a cost of O(1) (this is a significant improvement over the previous approach, that used `indexOf`).

O(N log N) x O(1) = O(N log N)

At this point, our function has the same complexity of the native JS `sort()` function, however it was implemented by the relevant browser or engine.
