function ClickEvent( tab ) {
  this.tab = tab;
  this.url = tab.url;
  this.id  = tab.id;
  this.response = undefined;

  this.tab_options = {
    'url': chrome.extension.getURL('results.html'),
    'active': false
  };
}

click_event = undefined;

function onCreateTab( new_tab ){
  var result = generateSearchResults( click_event.response , click_event.url );
  // alert(result);
}

function onMessageRecieved( response ){
  click_event.response = response.response
  chrome.tabs.create( click_event.tab_options, onCreateTab );
};

function buttonClick( current_tab ) {
  click_event = new ClickEvent( current_tab );
  chrome.tabs.sendMessage(click_event.id, {}, onMessageRecieved );
}

chrome.browserAction.onClicked.addListener( buttonClick );
