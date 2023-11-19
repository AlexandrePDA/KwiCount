let wordCount = 0;
let charCount = 0;
let readingTime = 0; // Ajout pour le temps de lecture

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === "textCount") {
    wordCount = request.wordCount;
    charCount = request.charCount;
    readingTime = Math.ceil(wordCount / 300); // Calcul du temps de lecture
    console.log(
      "Word count updated:",
      wordCount,
      "Char count updated:",
      charCount,
      "Reading time:",
      readingTime
    );
  } else if (request.type === "getWordCount") {
    sendResponse({
      wordCount: wordCount,
      charCount: charCount,
      readingTime: readingTime,
    });
  }
});
