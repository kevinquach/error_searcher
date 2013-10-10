chrome.browserAction.onClicked.addListener( function(tab){


  chrome.tabs.sendMessage(tab.id, {greeting: "hello"},
    function(response){
      body_html = response.response;
      chrome.tabs.create({
          'url': chrome.extension.getURL('results.html'),
          'active': false
          },
          function(new_tab) {
            var result = generateSearchResults( body_html , tab.url );
            alert( result );
          }
      );
    }
  );

});
