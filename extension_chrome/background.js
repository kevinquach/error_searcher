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

function processHtml( result ){
  var newHtml = generateSearchResults( result[0] , click_event.url );
  var url = "data:text/html," + encodeURIComponent(newHtml);
  chrome.tabs.create({url: url});
}
function buttonClick( current_tab ) {
  click_event = new ClickEvent( current_tab );
  chrome.tabs.executeScript({ code: 'document.body.outerHTML' }, processHtml);
}


chrome.browserAction.onClicked.addListener( buttonClick );
