/**
 * @author Tony Thomson

* Summary: Write a function to sort an array of strings based on an arbitrary
* lexicographic ordering. The function will take two parameters: an array of
* strings to sort and a string specifying the lexicographic order.

* Example input #1: ( ["acb", "abc", "bca"], "abc")
* Example output #1: ["abc","acb","bca"]

* Example input #2: ( ["acb", "abc", "bca"], "cba")
* Example output #2: ["bca", "acb", "abc"]

* Example input #3: (["aaa","aa",""], "a")
* Example output #3: ["", "aa", "aaa"]

* You may assume that the strings to be sorted consist only of characters from
* the specified lexicographical ordering. You may also assume that the
* characters in the strings to sort consist only of lowercase a-z.
*/

function lexicoSort(arrayOfStrings, orderStr) {
  'use strict';

  function customComparator(a, b, orderStr) {
    return orderStr.indexOf(a) - orderStr.indexOf(b);
  }

  return arrayOfStrings.sort(function(aStr, bStr) {
    var pos = 0;

    while (aStr[pos] === bStr[pos]) {
      pos++
    }
    return customComparator(aStr[pos], bStr[pos], orderStr);
  })
};


lexicoSort(['acb', 'abc', 'bca'], 'abc')
lexicoSort(['acb', 'abc', 'bca'], 'cba')
lexicoSort(['aaa','aa',''], 'a')
