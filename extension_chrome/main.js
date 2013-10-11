function generateSearchResults( html, url ){

  // if url is local host
  query = processLocalHost( html );

  // use the query at stack overflow
  result = queryStackOverflow( query );

  // compile the result into an html string ( or whatever we need it to be )
  new_html = compileResult( result );
  return new_html;
};
