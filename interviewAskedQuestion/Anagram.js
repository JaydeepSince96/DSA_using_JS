function isAnagram(str1, str2) {
    // Step 1: Convert to lowercase and remove spaces
    str1 = str1.toLowerCase().split(" ").join("");
    str2 = str2.toLowerCase().split(" ").join("");

    // Step 2: Check length
    if (str1.length !== str2.length) return false;

    // Step 3: Convert to arrays and sort
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');

    // Step 4: Compare
    return sortedStr1 === sortedStr2;
}

// 🔍 Test cases
console.log(isAnagram("listen", "silent"));        // true
console.log(isAnagram("hello", "world"));          // false
console.log(isAnagram("Debit Card", "Bad Credit"));// true
