<p align="left">
  <img src="https://i.ibb.co/yQwCZXb/COSMOS-GUI-BANNER.png" title="Cosmos Gui">
</p>

*A simple click gui template designed for bonziworld.*

**This requires the following Google Chrome extension to allow CORS for XMLHttpRequest: https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf/related?hl=en**

***To inject this into bonziworld simply copy and paste the code below into the javascript console***
```
var xmlHttp = null;
 
xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", ("https://raw.githubusercontent.com/CosmicStar98/Cosmos-GUI/ff98d94dec9a9c21898cf0eca3800e91865076ca/Cosmos.html"), false );
xmlHttp.send( null );
    
var inject  = document.createElement("div");
inject.innerHTML = xmlHttp.responseText
document.body.insertBefore (inject, document.body.firstChild);
 
var cssId = '7CSS';
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://unpkg.com/7.css';
    link.media = 'all';
    head.appendChild(link);
}
 
var cssId = 'ClickGUI';
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://raw.githubusercontent.com/CosmicStar98/Cosmos-GUI/8663e52fbd305816e83f102b512245bb28ca8dea/CSS/Cosmos.css';
    link.media = 'all';
    head.appendChild(link);
}
 
function loadScript1()  {
document.getElementsByTagName('body')[0].innerHTML += "<script src='https://github.com/CosmicStar98/Cosmos-GUI/raw/main/JS/Rainbow.js'></script>";
}
 
function loadScript2()  {
document.getElementsByTagName('body')[0].innerHTML += "<script src='https://github.com/CosmicStar98/Cosmos-GUI/raw/main/JS/CrashTTS.js'></script>";
}
 
function loadScript3()  {
document.getElementsByTagName('body')[0].innerHTML += "<script src='https://github.com/CosmicStar98/Cosmos-GUI/raw/main/JS/EarrapeTTS.js'></script>";
}
 
function loadScript4()  {
document.getElementsByTagName('body')[0].innerHTML += "<script src='https://github.com/CosmicStar98/Cosmos-GUI/raw/main/JS/FixTTS.js'></script>";
}
 
function loadScript5()  {
document.getElementsByTagName('body')[0].innerHTML += "<script src='https://github.com/CosmicStar98/Cosmos-GUI/raw/main/JS/CosmicBOT.js'></script>";
}
 
function loadScript6()  {
document.getElementsByTagName('body')[0].innerHTML += "<script src='https://github.com/CosmicStar98/Cosmos-GUI/raw/main/JS/Clock.js'></script>";
}
 
function loadScript7()  {
document.getElementsByTagName('body')[0].innerHTML += "<script src='https://github.com/CosmicStar98/Cosmos-GUI/raw/main/JS/Clippy.js'></script>";
}
 
function loadScript8()  {
document.getElementsByTagName('body')[0].innerHTML += "<script src='testing.js'></script>";
}
 
function loadScript9()  {
document.getElementsByTagName('body')[0].innerHTML += "<script src='testing.js'></script>";
}
 
function loadScript10()  {
document.getElementsByTagName('body')[0].innerHTML += "<script src='testing.js'></script>";
}
 
function loadScript11()  {
document.getElementsByTagName('body')[0].innerHTML += "<script src='testing.js'></script>";
}
 
function newTab()  {
window.open(
"https://github.com/CosmicStar98/Cosmos-GUI", "_blank");
}
```
