/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;

  return nums[0] * product(nums.slice(1))
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0

  let current = words[0].length;
  let longestLength = longest(words.slice(1));

  return Math.max(current, longestLength)

}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return ""
  let char = str[0]
  let remainder;
  if (str.length > 1) {
    remainder = str.substring(2)
  } else {
    remainder = ""
  }
  let otherChars = everyOther(remainder)
  return char + otherChars;
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  let char, lastChar
  if (str.length > 1) {
    char = str[0];
    lastChar = str.substring(str.length - 1);
    isPalindrome(str.slice(1, str.length - 1));
  }

  return char === lastChar;

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx >= arr.length) return -1;

  if (arr[idx] === val) return idx

  return findIndex(arr, val, idx + 1);


}

/** revString: return a copy of a string, but in reverse. */

function revString(str, rev = "") {
  if (str.length === 0) return rev;
  let char = str[str.length - 1];
  rev += char;
  return revString(str.slice(0, str.length - 1), rev)


}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj = {}, strArr = []) {
  if (Object.values(obj).length === 0) return strArr;
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "string") {
      strArr.push(value);
    } else {
      strArr = gatherStrings(value, strArr);
    }
  }
  return strArr;

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, low = 0, high = arr.length - 1) {
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === val) return mid;
  while (low < high) {
    if (arr[mid] < val) {
      return binarySearch(arr, val, low = mid + 1, high = arr.length - 1);
    } else {
      return binarySearch(arr, val, low, high = mid - 1);
    }
  }
  return -1
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
