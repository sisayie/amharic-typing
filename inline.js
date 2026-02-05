import { transliterateWord, getSuggestions } from "./engine.js";

const editor = document.getElementById("editor");
const suggestionsBox = document.getElementById("suggestions");

editor.addEventListener("input", () => {
  const pos = editor.selectionStart;
  const text = editor.value;

  const left = text.slice(0, pos);
  const right = text.slice(pos);

  const match = left.match(/([a-zA-Z]+)$/);

  if (!match) {
    suggestionsBox.innerHTML = "";
    return;
  }

  const word = match[1];
  const converted = transliterateWord(word);

  const newLeft = left.slice(0, left.length - word.length) + converted;
  editor.value = newLeft + right;
  editor.selectionStart = editor.selectionEnd = newLeft.length;

  showSuggestions(word);
});

function showSuggestions(word) {
  const suggestions = getSuggestions(word);
  suggestionsBox.innerHTML = "";

  suggestions.forEach(s => {
    const btn = document.createElement("button");
    btn.textContent = s;
    btn.onclick = () => replaceLastWord(s);
    suggestionsBox.appendChild(btn);
  });
}

function replaceLastWord(choice) {
  const pos = editor.selectionStart;
  const text = editor.value;
  const left = text.slice(0, pos);

  const match = left.match(/([\u1200-\u137F]+)$/);
  if (!match) return;

  const newLeft = left.slice(0, left.length - match[1].length) + choice;
  editor.value = newLeft + text.slice(pos);
  editor.selectionStart = editor.selectionEnd = newLeft.length;
}
