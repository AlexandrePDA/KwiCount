document.addEventListener("mouseup", function () {
  var selectedText = window.getSelection().toString().trim();
  if (selectedText.length > 0) {
    var wordCount = selectedText.split(/\s+/).length;
    var charCount = selectedText.length; // Compter les caractères
    chrome.runtime.sendMessage({
      type: "textCount",
      wordCount: wordCount,
      charCount: charCount,
    });
  }
});
