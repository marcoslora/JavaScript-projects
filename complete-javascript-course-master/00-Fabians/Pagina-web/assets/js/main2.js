const textChange = document.getElementById("text-change");
const btnInput = document.getElementById("btn-input");
const textoName = document.getElementById("text-name");
btnInput.addEventListener("click", function () {
  const inputWord = document.getElementById("text-input").value;
  textChange.textContent = "";
  textoName.textContent =
    inputWord.charAt(0).toUpperCase() + inputWord.slice(1);
  const palabraContador = {};
  for (let i = 0; i < inputWord.length; i++) {
    const letra = inputWord[i];
    if (!palabraContador[letra]) {
      palabraContador[letra] = 1;
    } else {
      palabraContador[letra]++;
    }
  }
  for (let i = 0; i < Object.keys(palabraContador).length; i++) {
    textChange.textContent = `Tiene ${
      Object.values(palabraContador)[i]
    } ${Object.keys(palabraContador)[i].toUpperCase()} ${
      textChange.textContent
    }`;
  }
});
