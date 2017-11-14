function reverseWords(str) {
  return str.trim()
    .split(" ")
    .map(word => {
      let reversed = "";
      for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
      }
      return reversed;
    })
    .join(" ");
}