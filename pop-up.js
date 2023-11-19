document.addEventListener("DOMContentLoaded", function () {
  chrome.runtime.sendMessage({ type: "getWordCount" }, function (response) {
    if (response) {
      if (response.wordCount) {
        document.getElementById("wordCount").textContent =
          "Nombre de mots : " + response.wordCount;
      }
      if (response.charCount) {
        document.getElementById("charCount").textContent =
          "Nombre de caracteres : " + response.charCount;
      }
      if (response.readingTime) {
        document.getElementById("readingTime").textContent =
          "Temps de lecture : moins de " + response.readingTime + " minute(s)";
      }
    }
  });
});
