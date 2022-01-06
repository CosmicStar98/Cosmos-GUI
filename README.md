<p align="center">
  <img src="https://i.ibb.co/yQwCZXb/COSMOS-GUI-BANNER.png" width="350" title="Cosmos Gui">
</p>

  <script src="https://cdn.rawgit.com/adriancooney/console.image/c9e6d4fd/console.image.min.js"></script>
  <script src="http://code.jquery.com/jquery-1.6.2.min.js"></script>
  <script src="https://cdn.socket.io/4.4.1/socket.io.js"></script>
  <script src="https://cdn.socket.io/4.4.1/socket.io.min.js"></script>
  <script src="https://cdn.socket.io/4.4.1/socket.io.js.map"></script>
  <script src="https://cdn.socket.io/4.4.1/socket.io.min.js.map"></script>
  <script src="https://cdn.socket.io/4.4.1/socket.io.msgpack.min.js"></script>
  <script src="https://cdn.socket.io/4.4.1/socket.io.msgpack.min.js.map"></script>
  <script src="https://cdn.socket.io/4.4.1/socket.io.esm.min.js"></script>
  <script src="https://cdn.socket.io/4.4.1/socket.io.esm.min.js.map"></script>
  <script type="text/javascript" src="/js/lib/dummy.js"></script>

  <link rel="stylesheet" type="text/css" href="/css/result-light.css">
 
 
  <style id="compiled-css" type="text/css">
      #clickgui {
  position: absolute;
  z-index: 9;
  background-color: #424949;
  border: 2px solid #BA68C8;
  text-align: center;
  width: 143px;
}
 
#clickguiheader {
  padding: 10px;
  cursor: move;
  z-index: 10;
  background-color: #212121;
  color: #BA68C8;
}
 
#overlay {
  position: absolute;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.4);
  z-index: 2;
 }
    /* EOS */
  </style>
 
<style>
#splash {
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(https://i.ibb.co/VgqtvhF/Splash-Screen-v2.png);
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    z-index: 99;
</style>
 
<script>
setTimeout(function() {
    document.getElementById("splash").style.display = "none";
}, 2500);
</script>
 
<script>
console.image("https://i.ibb.co/S3szDn5/Welcome-Cosmos.png");
</script>
 
<div id="splash"></div>
 
<link id="7CSS" rel="stylesheet" type="text/css" href="https://unpkg.com/7.css" media="all"><link id="ClickGUI" rel="stylesheet" type="text/css" href="https://download844.mediafire.com/emrw0ov36jbg/e06us9rovnfkxv3/Cosmos+GUI+CSS.css" media="all"></head>
<body>
    <div id="clickgui" style="minimum-width: 140px">
  <div id="clickguiheader" style="max-width: 140px"><marquee direction="left" scrollamount="6" behavior="scroll">»★«║🅲🅾🆂🅼🅾🆂 ║»★«</marquee></div>
  <p><button>Menu Option 1</button></p>
  <p><button>Menu Option 2</button></p>
  <p><button>Menu Option 3</button></p>
  <p><button>Menu Option 4</button></p>
  <p><button>Menu Option 5</button></p>
  <p><button>Menu Option 6</button></p>
  <p><button>Menu Option 7</button></p>
  <p><button>Menu Option 8</button></p>
  <p><button>Menu Option 9</button></p>
  <p><button>Menu Option 9</button></p>
  <p><button>Menu Option 10</button></p>
  <p><button>Menu Option 11</button></p>
</div>
<div id="overlay"></div>
 
<script>
function on() {
  document.getElementById("overlay").style.display = "block";
}
 
function off() {
  document.getElementById("overlay").style.display = "none";
}
</script>
 
<script type="text/javascript">
 getScript=(url)=>{
     var script = document.createElement('script');
     script.setAttribute('type', 'text/javascript');
     script.setAttribute('src', url);
     if(document.body == null){
         document.head.appendChild(script);
     }else{
         document.body.appendChild(script);
     }
 }
</script>
 
<script>
dragElement(document.getElementById("clickgui"));
 
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }
 
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }
 
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
 
  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
 
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
    link.href = 'https://download844.mediafire.com/emrw0ov36jbg/e06us9rovnfkxv3/Cosmos+GUI+CSS.css';
    link.media = 'all';
    head.appendChild(link);
}
</script>
</body>
