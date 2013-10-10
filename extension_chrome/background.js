/*
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){
    alert('recieved');
    sendResponse({farewell:"thanks"});
  }
);
*/

chrome.browserAction.onClicked.addListener( function(tab){


  //chrome.tabs.sendMessage(tab.id, {greeting: "hello"}, function(response){});


  chrome.tabs.create({
      'url': chrome.extension.getURL('results.html'),
      'active': false
      },
      function(new_tab) {
        var result = parseError( 'string', tab.url );
      }
  );
});

