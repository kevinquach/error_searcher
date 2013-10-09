## Error Searcher

The goal of this project is to create a bookmarklet for [Airbrake](airbrake.io), and Chrome/Firefox extensions that provide automatic search results for server/rails errors.

### Contributors

* Ben Calegari
* Kevin Quach
* Carl Schwope
* Beth Tenorio

### How to use ErrorSearcher bookmarklet with Airbrake.io

1. Drag the link below to your bookmarks bar.

  [SA Searcher][1]
    [1]: javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://bencalegari.com/javascripts/errorsearcher_AB.js';})();

2. Navigate to your project page in Airbrake.
3. Choose any error from the left hand side.
4. Click the bookmarklet on your bookmarks bar.
5. Use the wealth of knowledge on stackoverflow to fix your bugs.
6. Repeat. 