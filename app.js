const input = document.getElementById("input");
const output = document.getElementById("output");

input.addEventListener("input", () => {
  output.value = transliterate(input.value);
});