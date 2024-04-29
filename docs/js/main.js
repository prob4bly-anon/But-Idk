//(function () { var script = document.createElement('script'); script.src="//cdn.jsdelivr.net/npm/eruda"; document.body.appendChild(script); script.onload = function () { eruda.init() } })();
//^^^ Eruda :)
function ghProfile() {
  return location.href = 'https://github.com/prob4bly-anon'
}
function openTab(event, tabId) {
  var tabContent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  var tabLinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
  document.getElementById(tabId).style.display = "block";
  event.currentTarget.className += " active";
}
