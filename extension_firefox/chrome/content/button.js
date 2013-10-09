buttonCLick = {

  1: function(){
    var myUrl = "chrome://errorsearch/content/results.html"
    var tBrowser = document.getElementById("content");
    var tab = tBrowser.addTab(myUrl);
    tBrowser.selectedTab = tab;
  },
}
