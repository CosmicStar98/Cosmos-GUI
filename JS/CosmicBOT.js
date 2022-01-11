// This is the open source extended support till 2024 branch of CosmicBOT

// Note: All revisions of CosmicBOT under the "ES" branch will be listed on github.

// The public version of CosmicBOT will always have an alternate prefix in-order to
// not mess with the private developer builds that still use "?" as a prefix

// Extended support for the bot framework is planned to release in a few weeks 😎👌


console.info("%c𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓 has connected successfully!", "color: #62E452; font-family: Verdana, sans-serif; font-size: 2.0em; font-weight: bolder; text-shadow: #000 1px 1px; text-align: center;");
console.group();
console.info("%c𝙱𝚞𝚒𝚕𝚍 𝙳𝚊𝚝𝚎: January 7th, 2022", "color: #675D74; font-family: Courier New, monospace; font-size: 1.4em; font-weight: bolder; text-shadow: #000 1px 1px; text-align: center;");
console.log("%c𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓 Version: %c①.⑥.⑤", "color: #AAF2CD; font-family: Monaco, monospace; font-size: 1.6em; font-weight: bolder; text-shadow: #000 1px 1px; text-align: center", "color: #35E089; font-family: Monaco, monospace; font-size: 1.6em; font-weight: bolder; text-shadow: #000 1px 1px; text-align: center;");
console.log("%c⌬ %cDeveloped by: %cCosmic %c⌬", "color: #3C9EC1; font-family: Lucida Handwriting, cursive; font-size: 1.6em; font-weight: bolder; text-shadow: #000 1px 1px; text-align: center", "color: #7093E7; font-family: Lucida Handwriting, cursive; font-size: 1.6em; font-weight: bolder; text-shadow: #000 1px 1px; text-align: center", "color: #597DD0; font-family: Lucida Handwriting, cursive; font-size: 1.6em; font-weight: bolder; text-shadow: #000 1px 1px; text-align: center", "color: #3C9EC1; font-family: Lucida Handwriting, cursive; font-size: 1.6em; font-weight: bolder; text-shadow: #000 1px 1px; text-align: center");
console.groupEnd();
socket.emit('command',{list:['name','𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓 {@hub}']});
socket.on('talk',function(data){if(data.text=='HEY EVERYONE LOOK AT ME IM TRYING TO SCREW WITH THE SERVER LMAO!'){
console.error("ERROR: Unable to send message!")}});var e = 0;
var idleTime = 0;
    $(document).ready(function () {
 
        var idleInterval = setInterval(timerIncrement, 60000);
 
    function timerIncrement() {
        idleTime = idleTime + 1;
        if (idleTime > 14) {
socket.emit('talk',{text:"- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><div><h4>Version ①.⑥.⑤</h4><br><hr>Hello, I am <b>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</b>! If you need my assistance please start by using <b>@hub</b>. <hr><div><h5>⌬ Developed by: Cosmic ⌬</h5></div></p>"})} 380}});var e = 0;
let div = document.createElement('div');
            div.innerHTML = '<p><b>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</b> Version: <b>①.⑥.⑤</b></p>';
            document.body.appendChild(div);
function currentTime() {
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
  let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();
document.getElementById('login_version').innerHTML="𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓 Version ①.⑥.⑤";
document.getElementById('login_readme').innerHTML="<h5>⌬ Developed by: Cosmic ⌬</h5>"
 
// Enable this on bonziworldrevived.tk to have rainbow bonzi
// Currently disabled so the bot works on classic.bonzi.world or any bzw sites that have ant-spam
//socket.on('talk',function(a){if(usersPublic[a.guid].name=='𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓 (?hub)'){setInterval(function() { socket.emit("command", {list: ["color"]}) }, 2)}});var e = 0;
//socket.on('talk',function(a){if(usersPublic[a.guid].name=='𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓 {?hub}'){setInterval(function() { socket.emit("command", {list: ["color"]}) }, 2)}});var e = 0;
//socket.on('talk',function(a){if(usersPublic[a.guid].name=='𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓 [?hub]'){setInterval(function() { socket.emit("command", {list: ["color"]}) }, 2)}});var e = 0;
socket.on('talk',function(data){if(data.text=='@help'){
setTimeout(function(){e++;socket.emit('talk',{text:"- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><h5>⌬ Developed by: Cosmic ⌬</h5> <hr /><li>@cmds</li><br /> <li>@cmds 2</li> <hr /><b>✰Error 404:✰</b><hr />This command has been depreciated since version <b>①.⑤.③</b> please move to <b>@cmds</b> or <b>@cmds 2</b>!<br /> <hr /><h6>Help Page 1.</h6><hr />"})}, 500)}});var e = 0;
socket.on('talk',function(data){if(data.text=='@help 2'){
setTimeout(function(){e++;socket.emit('talk',{text:"- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><h5>⌬ Developed by: Cosmic ⌬</h5> <hr /><li>@cmds</li><br /> <li>@cmds 2</li> <hr /><b>✰Error 404:✰</b><hr />This command has been depreciated since version <b>①.⑤.③</b> please move to <b>@cmds</b> or <b>@cmds 2</b>!<br /> <hr /><h6>Help Page 2.</h6><hr />"})}, 500)}});var e = 0;
socket.on('talk',function(data){if(data.text=='@cmds'){
setTimeout(function(){e++;socket.emit('talk',{text:"- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><h5>⌬ Developed by: Cosmic ⌬</h5> <hr /><li>@hub</li> <hr /><b>✰Commands:✰</b><hr /><li>@joke</li><br /> <li>@fact</li><br /> <li>@bees</li><br /> <li>@linux</li><br /> <li>@triggered</li><br /> <li>@pawn</li><br /> <li>@video [FULL URL]</li><br /> <li>@emotes</li><br /> <li>@colors</li><br /> <hr /><h6>Commands Page 1.</h6><hr />"})}, 500)}});var e = 0;
socket.on('talk',function(data){if(data.text=='@cmds 2'){
setTimeout(function(){e++;socket.emit('talk',{text:"- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><h5>⌬ Developed by: Cosmic ⌬</h5> <hr /><li>@hub</li> <hr /><b>✰Commands:✰</b><hr /><li>@bonzibuddy</li><br /> <li>@bonzibuddy 2</li><br /> <li>@cyberpunk</li><br /> <li>@drivepower</li><br /> <li>@bigsmoke</li><br /> <li>@vaporwave</li><br /> <li>@unvaporwave</li><br /> <li>@gabe</li><br /> <li>@muteunknown</li><br /> <li>@fakeerrors</li><br /> <hr /><h6>Commands Page 2.</h6><hr />"})}, 500)}});var e = 0;
socket.on('talk',function(data){if(data.text=='@hub'){
setTimeout(function(){e++;socket.emit('talk',{text:"- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><br /><h5>⌬ Developed by: Cosmic ⌬</h5> <hr /><b>✰Commands:✰</b><hr /> <li>@cmds</li><br /> <li>@cmds 2</li><br /> <li>@aboutme</li><br /> <li>@framework</li><br /> <li>@links</li><br /> <hr /><h6>Hub.</h6><hr />"})}, 500)}});var e = 0;
socket.on('talk',function(data){if(data.text=='@links'){
setTimeout(function(){e++;socket.emit('talk',{text:"- - <hr /><h4>⚜My Discord Server:⚜</h4> <br /><li>https://bit.ly/3C1wDDO </li><br /><hr /> <h4>📝My Pastebin Profile:📝</h4> <br /><li>https://bit.ly/3k1DiYM </li><br /></li><hr /> <h4>☣️Cosmos GUI:☣️</h4> <br /><li>https://pastebin.com/jzRwYG4T </li><br /></li><hr /> <h6>Links.</h6><hr />"})}, 700)}});var e = 0;
socket.on('talk',function(data){if(data.text=='@aboutme'){
setTimeout(function(){e++;socket.emit('talk',{text:"- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><div><h4>Version ①.⑥.⑤</h4><br><hr>Hello, I am <b>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</b>! If you need my assistance please start by using <b>@hub</b>. <hr><div><h5>⌬ Developed by: Cosmic ⌬</h5></div></p>"})}, 500)}});var e = 0;
socket.on('talk',function(data){if(data.text=='@framework'){
setTimeout(function(){e++;socket.emit('talk',{text:"- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><h5>⌬ Developed by: Cosmic ⌬</h5> <hr /><li>@cmds</li><br /> <li>@cmds 2</li> <hr /><b>✰Bot Framework:✰</b><hr />The public builds of the bot framework have been updated to the latest version of <b>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</b>!<br> A link to the revived bot framework can be found here at <b>|ES LINK COMING SOON|</b> <br /> <hr /><h6>Bot Framework.</h6><hr />"})}, 500)}});var e = 0;
socket.on('talk',function(data){if(data.text=='@fakeerrors'){
setTimeout(function(){e++;socket.emit('talk',{text:"- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><h5>⌬ Developed by: Cosmic ⌬</h5> <hr /><b>✰Fake Errors:✰</b><hr /><li>@nojavascript</li><br /> <li>@error</li><br /> <li>@banned</li><br /> <li>@kicked</li><br /> <li>@unsupported</li><br /><hr /><h6>Fake Errors.</h6><hr />"})}, 500)}});var e = 0;
socket.on('talk',function(data){if(data.text=='@colors'){
setTimeout(function(){e++;socket.emit('talk',{text:"- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><h5>⌬ Developed by: Cosmic ⌬</h5> <hr /><b>✰Colors:✰</b><hr /><li>Red</li><br /> <li>Green</li><br /> <li>Blue</li><br /> <li>Purple</li><br /> <li>Pink</li><br /> <li>Black</li><br /> <li>Brown</li><br /> <li><del>Pope</del></li><br /> <hr /><h4>Usage: @color [Color Goes Here]</h4> <hr /><h5>Note: Do not use capital letters! The entire command must be inputted in lowercase including the color you picked!!</h5> <hr /><h6>Color Picker.</h6><hr />"})}, 500)}});var e = 0;
socket.on('talk',function(data){if(data.text=='@emotes'){
setTimeout(function(){e++;socket.emit('talk',{text:"- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><h5>⌬ Developed by: Cosmic ⌬</h5> <hr /><b>✰Emotes:✰</b><hr /><li>Backflip</li><br /> <li>Backflip Swag</li><br /> <hr /><h4>Usage: @emote [Emote Goes Here]</h4> <hr /><h5>Note: Do not use capital letters! The entire command must be inputted in lowercase including the emote you picked!!</h5> <hr /><h6>Emote Picker.</h6><hr />"})}, 500)}});var e = 0;
socket.on('talk',function(data){if(data.text=='@color pope'){e++;socket.emit('talk',{text: 'HEY, EVERYONE LOOK AT THIS IDIOT WHO IS TRYING TO GET POPE IN A PUBLIC ROOM HAHAHAHHAAA!! LMAO'})}});var e = 0;
socket.on('talk',function(data){if(data.text=='@color red'){e++;socket.emit('command',{list:['color','red','this.userPublic.name']})}});var e = 0;
socket.on('talk',function(data){if(data.text=='@color green'){e++;socket.emit('command',{list:['color','green','this.userPublic.name']})}});var e = 0;
socket.on('talk',function(data){if(data.text=='@color blue'){e++;socket.emit('command',{list:['color','blue','this.userPublic.name']})}});var e = 0;
socket.on('talk',function(data){if(data.text=='@color purple'){e++;socket.emit('command',{list:['color','purple','this.userPublic.name']})}});var e = 0;
socket.on('talk',function(data){if(data.text=='@color pink'){e++;socket.emit('command',{list:['color','pink','this.userPublic.name']})}});var e = 0;
socket.on('talk',function(data){if(data.text=='@color black'){e++;socket.emit('command',{list:['color','black','this.userPublic.name']})}});var e = 0;
socket.on('talk',function(data){if(data.text=='@color brown'){e++;socket.emit('command',{list:['color','brown','this.userPublic.name']})}});var e = 0;
socket.on('talk',function(data){if(data.text=='@emote backflip'){e++;socket.emit('command',{list:['this.userPublic.name','backflip']})}});var e = 0; 
socket.on('talk',function(data){if(data.text=='@emote backflip swag'){e++;socket.emit('command',{list:['this.userPublic.name','backflip','swag']})}});var e = 0;
socket.on('talk',function(data){if(data.text=='@cyberpunk'){setTimeout(function(){e++;socket.emit('talk',{text:"WAKE THE FUCK UP SAMURAI, WE GOT A CITY TO BURN!!"})}, 85)}});var e = 0;
socket.on('talk',function(data){if(data.text=='@drivepower'){setTimeout(function(){e++;socket.emit('talk',{text:"Its about drive, its about power, we stay hungry, we devour Put in the work, put in the hours and take whats ours Black and Samoan in my veins, my culture bangin with Strange I change the game so what's my motherfuckin name? Rock!!"})}, 85)}});var e = 0;
socket.on('talk',function(data){if(data.text=='@bigsmoke'){setTimeout(function(){e++;socket.emit('talk',{text:"Ill have two number 9s, a number 9 large, a number 6 with extra dip, a number 7, two number 45s, one with cheese, and a large soda. "})}, 85)}});var e = 0;
socket.on('talk',function(data){if(data.text=='@gabe'){setTimeout(function(){e++;socket.emit('talk',{text:"Good Evening, my name is Gabe Newell from the Microsoft team, and from analyzing your browser history we are here to inform you that your Windows XP Operating system is not valid. Your OS will be locked in 2 hours and it will stay this way until you have paid for the Microsoft product. If you have any questions or concerns please do not hesitate to go screw yourself!"})}, 620)}});var e = 0;
// Slashed because people keep spamming this command and eventually it triggers "HEY EVERYONE LOOK AT ME IM TRYING TO SCREW WITH THE SERVER LMAO!" and the bot has to reconnect because it prevents the bot from working xD
// socket.on('talk',function(data){if(data.text=='@behh'){e++;socket.emit('talk',{text: 'behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh '})}});var e = 0;
socket.on('talk',function(data){if(data.text=='@bonzibuddy'){setTimeout(function(){e++;socket.emit('talk',{text:"Welcome to my world of BonziBUDDY! I will explore the Internet with you as your very own friend and sidekick!  I can talk, walk, joke, browse, search, e-mail, and download like no other friend you have ever had!  I even have the ability to compare prices on the products you love and help you save money! Best of all, I AM FREE!"})}, 600)}});var e = 0;;
socket.on('talk',function(data){if(data.text=='@bonzibuddy 2'){setTimeout(function(){e++;socket.emit('talk',{text:"Well, hello there! I do not believe we have been properly introduced. I am BonziBUDDY! Nice to meet you! Since this is the first time we have met, I would like to tell you a little about myself. I am your friend and BonziBUDDY! I have the ability to learn from you. The more we browse, search, and travel the internet together, the smarter I will become! Not that I am not already smart!"})}, 614)}});var e = 0;
socket.on('talk',function(data){if(data.text=='@logo'){e++;socket.emit('talk',{text: '- - <h2>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h2>'})}});var e = 0;
socket.on('talk',function(data){if(data.text=='@joke'){e++;socket.emit('command',{list:['joke']})}});var e = 0; socket.on('talk',function(data){if(data.text=='@fact'){e++;socket.emit('command',{list:['fact']})}});var e = 0;
socket.on('talk',function(data){if(data.text=='@bees'){e++;socket.emit('command',{list:['bees']})}});var e = 0;
socket.on('talk',function(data){if(data.text=='@linux'){e++;socket.emit('command',{list:['linux']})}});var e = 0;
socket.on('talk',function(data){if(data.text=='@triggered'){e++;socket.emit('command',{list:['triggered']})}});var e = 0;
socket.on('talk',function(data){if(data.text=='@pawn'){e++;socket.emit('command',{list:['pawn']})}});var e = 0;
socket.on('talk',function(data){if(data.text=='@video'){e++;socket.emit('command',{list:['youtube','this.userPublic.name']})}});var e = 0;
socket.on('talk',function(data){if(data.text=='@vaporwave'){e++;socket.emit('command',{list:['vaporwave']})}});var e = 0;
socket.on('talk',function(data){if(data.text=='@unvaporwave'){e++;socket.emit('command',{list:['unvaporwave']})}});var e = 0;
socket.on('talk',function(data){if(data.text=='@nojavascript'){setTimeout(function(){e++;socket.emit('talk',{text: '- - <h2>Hey! You have JavaScript disabled!</h2> <br>BonziWORLD cannot run in this browser because you have JavaScript disabled.<br>Please enable it in the page settings, and then BonziWORLD will start working correctly.'})}, 420)}});var e = 0;
socket.on('talk',function(data){if(data.text=='@error'){setTimeout(function(){e++;socket.emit('talk',{text: '- - <br><h2>BonziWORLD.exe has encountered an error and needs to close.</h2><br> Nah, but seriously there was an error and you got disconnected from the server. Chances are, your internet just died out for a brief moment or your device went to sleep. Otherwise the server just screwed up.<br> <br> Try and reload the page. If that does not work and your internet is okay, then panic. We will probably be back up Soon™ though.<br> <br> <a href="#" onclick="window.location.reload()">Reload?</a><br> <br>'})}, 420)}});var e = 0;
socket.on('talk',function(data){if(data.text=='@banned'){setTimeout(function(){e++;socket.emit('talk',{text: '- - <br><h2>You got banned!</h2><br><br><b>Why? </b><br> Jokes on you! This is just a test! You did not actually get banned lol<br><br><br><b>When is it over?</b><br>idk I guess whenever this message goes away xD'})}, 320)}});var e = 0;
socket.on('talk',function(data){if(data.text=='@kicked'){setTimeout(function(){e++;socket.emit('talk',{text: '- - <br><h2>You got kicked!</h2><br> <br><b>Why? </b><br> Jokes on you! This is just a test! You did not actually get kicked lmao'})}, 320)}});var e = 0;
socket.on('talk',function(data){if(data.text=='@unsupported'){setTimeout(function(){e++;socket.emit('talk',{text: '- - <br><h2>BonziWORLD cannot run on this platform.</h2><br>Unfortunately, BonziWORLD cannot run in this browser!<br>You can try to download a BonziWORLD app that works on your device, or update your browser.'})}, 320)}});var e = 0;
socket.on('talk',function(data){if(data.text=='@readme'){setTimeout(function(){e++;socket.emit('talk',{text: '- - <br>Make sure to check out the <a id="readme" href="readme.html" target="_blank">README</a> before use.<br>'})}, 520)}});var e = 0;
socket.on('talk',function(data){if(data.text=='@tos'){setTimeout(function(){e++;socket.emit('talk',{text: '- - <br><input type="checkbox"> I didnt read the <a id="tos" href="tos.html" target="_blank">Terms of Service<span id="updated" hidden="" style="display: inline;"> (updated since last view)</span></a>.'})}, 520)}});var e = 0;
socket.on('talk',function(data){if(data.text=='@bagelchip'){e++;socket.emit('command',{list:['name','this.userPublic.name','BaɡelChip']})}});var e = 0;
socket.on('talk',function(data){if(data.text=='@muteunknown'){e++;socket.on('update',function(a){if(usersPublic[a.guid].name=='Anonymous'){bonzis[a.guid].mute=1}})}});var e = 0; socket.on('talk',function(data){if(data.text=='?muteunknown'){e++;socket.emit('talk',{text: 'All "Anonymous" usernames have been muted. '})}});var e = 0;
socket.on('talk',function(data){if(data.text=='@botver'){e++;socket.emit('talk',{text: '- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><div><h4>Version: ①.⑥.⑤ |ES2024|</h4><br><hr>'})}});var e = 0;
socket.on('talk',function(data){if(data.text=='prefix'){e++;socket.emit('talk',{text: '- - <h4>My prefix is <b>[@]</b></h4>'})}});var e = 0;
socket.on('talk',function(data){if(data.text=='@ban'){e++;socket.emit('talk',{text: 'HEY, EVERYONE LOOK AT THIS IDIOT WHO IS TRYING TO USE ADMIN COMMANDS WITHOUT ELEVATED PERMISSION!!! JAJAJAJAJAJAJAJAAAA!! LMAO XD'})}});var e = 0; 
socket.on('talk',function(data){if(data.text=='@kick'){e++;socket.emit('talk',{text: 'HEY, EVERYONE LOOK AT THIS IDIOT WHO IS TRYING TO USE ADMIN COMMANDS WITHOUT ELEVATED PERMISSION!!! JAJAJAJAJAJAJAJAAAA!! LMAO XD'})}});var e = 0;
