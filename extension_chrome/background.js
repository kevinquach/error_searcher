chrome.browserAction.onClicked.addListener(function(tab) {

        alert( document.body.innerHTML );
  chrome.tabs.create({
      'url': chrome.extension.getURL('results.html'),
      'active': false
      },
      function(tab) {
        //func($('body'));
      }
  );
});
