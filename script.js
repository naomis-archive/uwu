import Uwuifier from "https://unpkg.com/uwuifier";

const uwuifier = new Uwuifier({
  spaces: {
    faces: 0.1,
    actions: 0,
    stutters: 0.1,
  },
  words: 1,
  exclamations: 1,
});

const button = document.querySelector("#uwu");

button.addEventListener("click", () => {
  const input = document.querySelector("#input").value;
  const split = input.split('\n');
  console.log(split);
  const translatedSplit = split.map(sentence => uwuifier.uwuifySentence(sentence));
  const parsed = translatedSplit.join('\n');
  document.querySelector("#output").innerHTML = parsed;
});
