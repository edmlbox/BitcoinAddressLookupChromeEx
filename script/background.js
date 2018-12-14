chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  var sendto = "empty";
  var ccc = new XMLHttpRequest();
  ccc.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      sendto = this.responseText;
    }
  };
  ccc.open(
    "GET",
    "http://cryptobit-env.7hiybanifg.eu-central-1.elasticbeanstalk.com/" +
      request.greeting,
    false
  );
  ccc.send();

  sendResponse({ helloWorld: sendto });
});
