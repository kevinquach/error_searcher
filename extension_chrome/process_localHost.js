function processLocalHost( html ){

  // process the raw html into a javscript object that contains
  // important query data
  var x = html.search('2>');
  var y = html.search('</h2>');
  var result =  html.substring(x+2, y);

  var query = {
    example: result
  }

  return query;
}
