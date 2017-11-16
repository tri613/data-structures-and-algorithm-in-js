function caesarChiper(str, num) {
  const [min, max] = [97, 122];
  const len = (max - min + 1);

  return str
    .toLowerCase()
    .trim()
    .split("")
    .map((char, index) => {
      if (!/[a-z]/.test(char)) {
        return char;
      }

      let newCode = char.charCodeAt() + (num % len); //*

      if (newCode > max) {
        newCode = newCode - len;
      }

      if (newCode < min) {
        newCode = newCode + len;
      }

      return str[index] == char.toUpperCase() //*
        ? String.fromCharCode(newCode).toUpperCase()
        : String.fromCharCode(newCode);
    })
    .join("");
}