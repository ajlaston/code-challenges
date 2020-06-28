//reverse string with spaces
unction reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}
