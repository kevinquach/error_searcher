chrome.browserAction.onClicked.addListener(function(tab) {

  var createTab = function( ){
    chrome.tabs.create({'url': chrome.extension.getURL('results.html')},
      function(tab) {

      });
  };

  var readPage = function(){
    var result = chrome.tabs.executeScript(null, {file: "read_page.js"}, createTab);
  };

  readPage( );
});
