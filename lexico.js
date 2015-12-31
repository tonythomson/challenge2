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

  var orderHash = {};
function lexicoSort(arrayOfStrings, orderStr) {
  'use strict';


  function initOrderHash(orderStr) {
    var hash = {};
    orderStr
      .split('')
      .forEach(function(char, index) {
        hash[char] = index + 1;     // Add 1 to index so there are no zero entries
      });

    return hash;
  }

  function customComparator(a, b, orderHash) {
    // Set to -1 here to handle case of empty string; we want those to come first
    var first = orderHash[a] ? orderHash[a] : -1,
      second = orderHash[b] ? orderHash[b] : -1;

    return first - second;
  }

  orderHash = initOrderHash(orderStr);

  return arrayOfStrings.sort(function(aStr, bStr) {
    var pos = 0;

    while (aStr[pos] === bStr[pos]) {
      pos++
    }
    return customComparator(aStr[pos], bStr[pos], orderHash);
  })
};


lexicoSort(['acb', 'abc', 'bca'], 'abc')
lexicoSort(['acb', 'abc', 'bca'], 'cba')
lexicoSort(['aaa','aa',''], 'a')
