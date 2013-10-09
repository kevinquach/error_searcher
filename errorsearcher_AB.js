
var error = $(".span9.group-row-description:first-of-type span").first().text();
cleanString = function(s) {
  var string = s.replace(/\"/g,"");
  return string;
};
searchStackOverflow = function(string) {
  open('http://stackoverflow.com/search?tab=votes&q='+cleanString(error));
};
searchStackOverflow(error);
