<p align="left">
  <img src="https://i.ibb.co/yQwCZXb/COSMOS-GUI-BANNER.png" title="Cosmos Gui">
</p>

*A simple click gui template designed for bonziworld.*

**This requires the following Google Chrome extension to allow CORS for XMLHttpRequest: https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf/related?hl=en**

***To inject this into bonziworld simply copy and paste the code below into the javascript console***
```
var xmlHttp = null;
 
xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", ("https://raw.githubusercontent.com/CosmicStar98/Cosmos-GUI/5fd440c0f32883803ba7e75716be329746e6317c/Cosmos.html"), false );
xmlHttp.send( null );
    
var inject  = document.createElement("cosmos");
inject.innerHTML = xmlHttp.responseText
document.body.insertBefore (inject, document.body.firstChild);
 
function consolealert() {
console.log("%cCosmos Injected!", "color: purple; font-family: Courier New, monospace; font-size: 5.5em; font-weight: bolder; text-shadow: #000 1px 1px; text-align: center;");
}

function loadScript1()  {
javascript:setInterval(function(){socket.emit('command', {list:['color']})}, 888);
}

function loadScript2()  {
socket.emit('talk',{text:"[[llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll COSMOS"});var e = 0;
}

function loadScript3()  {
socket.emit('talk',{text:"COSMOS AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA! [[lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
"});var e = 0;
}

function loadScript4()  {
javascript:speak = {};var e = socket.on('talk',n=>{speechSynthesis.cancel();speechSynthesis.speak(new SpeechSynthesisUtterance(n.text))});
}

function loadScript5()  {
document.getElementsByTagName('body')[0].innerHTML += "<script src='https://github.com/CosmicStar98/Cosmos-GUI/raw/main/JS/CosmicBOT.js'></script>";
}

function loadScript6() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";
 
  if(hh == 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }
 
   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss + " " + session;
 
  document.getElementById("room_info").innerText = time; 
  let t = setTimeout(function(){ loadScript6() }, 1000);
}
loadScript6();
}

function loadScript7()  {
(()=>{var b,c,a=document,f="onreadystatechange",h="https://rawgithub.com/smore-inc/clippy.js/master/build/",j=(p,q)=>{p.readyState?p[f]=()=>{"loaded"!=p.readyState&&"complete"!=p.readyState||(p[f]=null,q&&q())}:p.onload=function(){q&&q()}},k=()=>{clippy.load("Clippy",p=>{$(".clippy").css("position","fixed"),$(".clippy").css("z-index",1e3),p.show(),p.moveTo(100,100)})},m=()=>{(c=a.createElement("script")).src=h+"clippy.js",a.body.appendChild(c);var p=a.createElement("link");p.rel="stylesheet",p.type="text/css",p.media="all",p.href=h+"clippy.css",a.getElementsByTagName("head")[0].appendChild(p)};"undefined"==typeof jQuery?(b=a.createElement("script"),b.src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js",a.body.appendChild(b),j(b,()=>{m(),j(c,k)})):"undefined"==typeof clippy?(m(),j(c,k)):k()})();
}

 
function newTab()  {
window.open(
"https://github.com/CosmicStar98/Cosmos-GUI", "_blank");
}
```
