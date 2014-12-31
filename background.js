  // Called when the user clicks on the browser action.
  chrome.browserAction.onClicked.addListener(function(tab) {
      var width = localStorage['pageShrinker_width'];
      if (!width) width = "1000";
      chrome.tabs.executeScript(null, {code:
          "var html = document.documentElement; if (html.style.maxWidth == '')" +
          "{html.style.maxWidth = '" + width + "px';html.style.position = 'relative'} else {" +
          "html.style.maxWidth = '';html.style.position = ''}"});
  });