
base = chrome.extension.getURL('');
var baseNode = document.createElement("script");
var baseText = document.createTextNode("var base = '" + base + "';");
baseNode.appendChild(baseText);
baseNode.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(baseNode);


var script = document.createElement("script");
script.src = chrome.extension.getURL("script/Init.js");
script.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(script);

var script1 = document.createElement("script");
script1.src = chrome.extension.getURL("InitInitializer.js");
document.getElementsByTagName("head")[0].appendChild(script1);