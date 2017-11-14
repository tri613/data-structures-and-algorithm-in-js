function isPalindrome(str) {
  let characters = str
    .toLowerCase()
    .trim()
    .split("")
    .filter(c => /[a-z]/.test(c));

  return characters.join("") === characters.reverse().join("");
}