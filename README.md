<p align="left">
  <img src="https://i.ibb.co/yQwCZXb/COSMOS-GUI-BANNER.png](https://github.com/CosmicStar98/Cosmos-GUI/raw/main/IMG/COSMOS%20GUI.png" title="Cosmos Gui">
</p>

*A simple click gui template designed for bonziworld.*

<a href="https://www.bitcoinqrcodemaker.com/pay/?type=2&amp;style=bitcoin&amp;fiat=CAD&amp;amount=10&amp;address=bc1qc2xkp6pmju9tqgzwgtzfsczw4yevjzyrm9aehm" target="_blank"><img src="https://www.pootinpodcast.com/wp-content/uploads/2020/11/bitcoin-donate-button.png" border="0" width="220" height="66" alt="Support me by donating with bitcoin!" title="Support me by donating with bitcoin!" /></a>

**This requires the following Google Chrome extension to allow CORS for XMLHttpRequest: https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf/related?hl=en**

***To inject this into bonziworld simply copy and paste the code below into the javascript console***
```
var xmlHttp = null;
 
xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", ("https://github.com/CosmicStar98/Cosmos-GUI/blob/6b5ca710ba17ec292fc6303901049c86f38e1f5e/Cosmos.html"), false );
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
javascript:speak = {};var e = socket.on('talk',n=>{speechSynthesis.cancel();speechSynthesis.speak(new SpeechSynthesisUtterance(n.text))});
}

function loadScript3()  {
var socket = io("http://server.erik.red:3000")
socket.emit('login',{name:'CosmicBOT {c@hub}',room:''})
socket.on('reconnected',reconnect)
var reconnect = function(){
    var socket = io("http://server.erik.red:3000")
	socket.emit('login',{name:'CosmicBOT {c@hub}',room:''})
    socket.on('talk',function(data){
        var text = data.text
        if(text.startsWith('c@')){
            text = text.slice(2)
            var cmd = text.split(' ')[0]
            var oth = text.slice(cmd.length+1)
            if(Object.keys(commands).includes(cmd)){
                var command = commands[cmd](oth)
                setTimeout(function(){
                    socket.emit('talk',{text:command})
                },100)
            }
        }
    })
    socket.on('reconnected',reconnect)
};
socket.emit("command", { list: ["name", "CosmicBOT {c@hub}"] });

socket.emit('command', {list:['pitch','77']})
socket.emit('command', {list:['speed','146']})
var lists = [];
var reloadit;
var cmdcount = 0;
var ytcount = 0;
var sockets = []
var talkmode = true;
console.info("%c𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓 has connected successfully!", "color: #62E452; font-family: Verdana, sans-serif; font-size: 2.0em; font-weight: bolder; text-shadow: #000 1px 1px; text-align: center;");
console.group();
console.info("%c𝙱𝚞𝚒𝚕𝚍 𝙳𝚊𝚝𝚎: January 7th, 2022", "color: #675D74; font-family: Courier New, monospace; font-size: 1.4em; font-weight: bolder; text-shadow: #000 1px 1px; text-align: center;");
console.log("%c𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓 Version: %c①.⑥.⑨", "color: #AAF2CD; font-family: Monaco, monospace; font-size: 1.6em; font-weight: bolder; text-shadow: #000 1px 1px; text-align: center", "color: #35E089; font-family: Monaco, monospace; font-size: 1.6em; font-weight: bolder; text-shadow: #000 1px 1px; text-align: center;");
console.log("%c⌬ %cDeveloped by: %cCosmic %c⌬", "color: #3C9EC1; font-family: Lucida Handwriting, cursive; font-size: 1.6em; font-weight: bolder; text-shadow: #000 1px 1px; text-align: center", "color: #7093E7; font-family: Lucida Handwriting, cursive; font-size: 1.6em; font-weight: bolder; text-shadow: #000 1px 1px; text-align: center", "color: #597DD0; font-family: Lucida Handwriting, cursive; font-size: 1.6em; font-weight: bolder; text-shadow: #000 1px 1px; text-align: center", "color: #3C9EC1; font-family: Lucida Handwriting, cursive; font-size: 1.6em; font-weight: bolder; text-shadow: #000 1px 1px; text-align: center");
console.groupEnd();

var idleTime = 0;
    $(document).ready(function () {
 
        var idleInterval = setInterval(timerIncrement, 60000);
 
    function timerIncrement() {
        idleTime = idleTime + 1;
        if (idleTime > 14) {
socket.emit('talk',{text:"- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><div><h4>Version ①.⑥.⑨</h4><br><hr>Hello, I am <b>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</b>! If you need my assistance please start by using <b>@hub</b>. <hr><div><h5>⌬ Developed by: Cosmic ⌬</h5></div></p>"})} 380}});var e = 0;
let div = document.createElement('div');
            div.innerHTML = '<p><b>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</b> Version: <b>①.⑥.⑨</b></p>';
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
document.getElementById('login_version').innerHTML="𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓 Version ①.⑥.⑨";
document.getElementById('login_readme').innerHTML="<h5>⌬ Developed by: Cosmic ⌬</h5>"
var commands = {
    echo(txt){
        if(txt.startsWith('c@')){
            return "hahahaha nice spam lmao hahaha fuck you"
        }
        return txt
    },
	asshole(txt){
		if(txt.startsWith('c@')){
            return "hahahaha nice asshole... no homo lmao"
        }
		console.log('Assholed ' + txt)
		cmdcount++
		socket.emit('command', {list:['asshole',txt]})
    },
	owo(txt){
		if(txt.startsWith('c@')){
            return "hahahaha nice boner... no homo lmao"
        }
		console.log('Owo\'ed ' + txt)
		cmdcount++
		socket.emit('command', {list:['owo',txt]})
    },
	cmds:function(){
		console.log('Loaded commands menu.')
		cmdcount++
		return "- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><h5>⌬ Developed by: Cosmic ⌬</h5> <hr /><li>c@hub</li> <hr /><b>✰Commands:✰</b><hr /><li>c@copypastas</li><br /> <li>c@utilities</li><br /> <li>c@fun</li><br /> <li>c@misc</li><br /> <hr /><h6>Commands.</h6><hr />"
	},
		copypastas(txt){
		console.log('Loaded copypastas menu.')
		cmdcount++
		return '- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><h5>⌬ Developed by: Cosmic ⌬</h5> <hr /><li>c@hub</li> <hr /><b>✰Copypastas:✰</b><hr /> <li>c@bigsmoke</li><br /> <li>c@drivepower</li><br /> <li>c@gabe</li><br />  <li>c@pacertest</li><br /> <li>c@triggered</li><br /> <li>c@cyberpunk</li><br /> <li>c@bonzibuddy</li><br /> <li>c@bonzibuddy2</li><br /> <li>c@bees</li><br /> <li>c@pawn</li><br /> <li>c@linux</li><br /> <hr /><h6>Copypastas.</h6><hr />'
	},
	utilities(txt){
		console.log('Loaded utilities menu.')
		cmdcount++
		return '- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><h5>⌬ Developed by: Cosmic ⌬</h5> <hr /><li>c@hub</li> <hr /><b>✰Utilities:✰</b><hr /> <li>c@message</li><br /> <li>c@google</li><br /> <li>c@ddg</li><br /> <li>c@bing</li><br /> <li>c@video</li><br /> <li>c@emotes</li><br /> <li>c@colors</li><br /> <hr /><h6>Utilities.</h6><hr />'
	},
	fun(txt){
		console.log('Loaded fun menu.')
		cmdcount++
		return '- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><h5>⌬ Developed by: Cosmic ⌬</h5> <hr /><li>c@hub</li> <hr /><b>✰Fun Commands:✰</b><hr /> <li>c@joke</li><br /> <li>c@fact</li><br /> <li>c@nigger</li><br /> <li>c@skiddie</li><br /> <li>c@asshole</li><br /> <li>c@owo</li><br /> <li>c@vaporwave</li><br /> <li>c@unvaporwave</li><br /> <li>c@echo</li><br /> <hr /><h6>Fun.</h6><hr />'
	},
	misc(txt){
		console.log('Loaded misc menu.')
		cmdcount++
		return '- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><h5>⌬ Developed by: Cosmic ⌬</h5> <hr /><li>c@hub</li> <hr /><b>✰Misc Commands:✰</b><hr /> <li>c@fakeerrors</li><br /> <li>c@matrix</li><br /> <li>c@dvd</li><br /> <li>c@logo</li><br /> <li>c@calendar</li><br /> <hr /><h6>Miscellaneous.</h6><hr />'
	},
	changelog(txt){
		console.log('Loaded changelog menu.')
		cmdcount++
		return '- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><h5>⌬ Developed by: Cosmic ⌬</h5> <hr /><li>c#hub</li> <hr /><b>✰①.⑥.⑨ Changelog:✰</b><hr /> <li>Updated to <b>①.⑥.⑨</b></li><br /> <li>Sorted the commands into categories</li><br /> <li>Removed legacy commands</li><br /> <hr /><h6>Changelog.</h6><hr />'
	},
	hub(txt){
		if(txt.startsWith('c@')){
            return "jajajajaa cool command lmao hahaha shut the fuck up"
        }
		console.log('Loaded hub menu.')
		cmdcount++
		return '- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><br /><h5>⌬ Developed by: Cosmic ⌬</h5> <hr /><b>✰Commands:✰</b><hr /> <li>c@cmds</li><br /> <li>c@changelog</li><br /> <li>c@aboutme</li><br /> <li>c@links</li><br /> <hr /><h6>Hub.</h6><hr />'
	},
	links(txt){
		if(txt.startsWith('c@')){
            return "hahahaha nice command lmao hahaha fuck you"
        }
		console.log('Loaded links menu.')
		cmdcount++
		return '- - <hr /><h4>⚜My Discord Server:</h4> <br /><h5>https://bit.ly/3C1wDDO</h5><br /><hr /> <h4>📝My Pastebin Profile:</h4> <br /><h5>https://bit.ly/3k1DiYM</h5><br /><hr /> <h4>🌐My Github Profile:</h4> <br /><h5>https://tinyurl.com/ykx6s9hj</h5><br /><hr /> <h4>☣️Cosmos GUI:</h4> <br /><h5>https://pastebin.com/jzRwYG4T</h5><br /><hr /> <h6>Links.</h6><hr />'
	},
	aboutme(txt){
		if(txt.startsWith('c@')){
            return "hahahaha nice command lmao hahaha fuck you"
        }
		console.log('Loaded aboutme menu.')
		cmdcount++
		return '- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><div><h4>Version ①.⑥.⑨</h4><br><hr>Hello, I am <b>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</b>! If you need my assistance please start by using <b>c@hub</b>. <hr><div><h5>⌬ Developed by: Cosmic ⌬</h5></div></p>'
	},
	fakeerrors(txt){
		if(txt.startsWith('c@')){
            return "haha cool command lmao hahaha shut the fuck up"
        }
		console.log('Loaded fakeerrors menu.')
		cmdcount++
		return '- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><h5>⌬ Developed by: Cosmic ⌬</h5> <hr /><b>✰Fake Errors:✰</b><hr /><li>c@nojavascript</li><br /> <li>c@error</li><br /> <li>c@banned</li><br /> <li>c@kicked</li><br /> <li>c@unsupported</li><br /><hr /><h6>Fake Errors.</h6><hr />'
	},
	colors(txt){
		if(txt.startsWith('c@')){
            return "hahahaha nice command lmao hahaha fuck you"
        }
		console.log('Loaded colors menu.')
		cmdcount++
		return '- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><h5>⌬ Developed by: Cosmic ⌬</h5> <hr /><b>✰Colors:✰</b><hr /><li>c@red</li><br /> <li>c@green</li><br /> <li>c@blue</li><br /> <li>c@purple</li><br /> <li>c@pink</li><br /> <li>c@black</li><br /> <li>c@brown</li><br /> <li><del>c@pope</del></li><br /> <hr /><h6>Color Picker.</h6><hr />'
	},
	emotes(txt){
		if(txt.startsWith('c@')){
            return "hahahaha nice command lmao hahaha fuck you"
        }
		console.log('Loaded emotes menu.')
		cmdcount++
		return '- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><h5>⌬ Developed by: Cosmic ⌬</h5> <hr /><b>✰Emotes:✰</b><hr /><li>c@backflip</li><br /> <li>c@swagflip</li><br /> <hr /><h6>Emote Picker.</h6><hr />'
	},
	calendar(txt){
		if(txt.startsWith('c@')){
            return "jajajajjaaa nice command lmao xddd fuck you"
        }
		console.log('Loaded calendar menu.')
		cmdcount++
		return '- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><h5>⌬ Developed by: Cosmic ⌬</h5> <hr /><b>✰Calendar:✰</b><hr /><form><input type="date"><br><br></form><br /> <hr /><h6>Calendar.</h6><hr />'
  },
	nigger(txt){
		cmdcount++
		console.log('Called somebody a nigger.')
        return ([txt]+[' is a nigger'])
    },
	skiddie(txt){
		cmdcount++
		console.log('Called somebody a script kiddie.')
        return ([txt]+[' is a skiddie'])
    },
	video(txt){
		console.log('Played a Youtube video. URL: https://www.youtube.com/watch?=' + txt)
		socket.emit('command', {list:['youtube',txt]})
    },
	google(txt){
		if(txt==""){
			return 'Please enter this value, if you wish to enter for Google search.'
		} else {
		cmdcount++
		console.log('Searched on Google. URL: https://www.google.com/search?q=' + txt)
        return ('Google Link: https://www.google.com/search?q=' + [txt])
		}
    },
	ddg(txt){
		if(txt==""){
			return 'Please enter this value, if you wish to enter for DuckDuckGo search.'
		} else {
		cmdcount++
		console.log('Searched on DuckDuckGo. URL: https://duckduckgo.com/?q=' + txt)
        return ('DuckDuckGo Link: https://duckduckgo.com/?q=' + [txt])
		}
    },
	bing(txt){
		if(txt==""){
			return 'Please enter this value, if you wish to enter for Bing search.'
		} else {
		cmdcount++
		console.log('Searched on Bing. URL: https://www.bing.com/search?q=' + txt)
        return ('Bing Link: https://www.bing.com/search?q=' + [txt])
		}
    },
	pope(txt){
		if(txt.startsWith('c@')){
            return "hahahaha nice color lmao hahaha fuck you"
        }
		console.log('Attempted to give a non-admin pope.')
		cmdcount++
		return 'HEY, EVERYONE LOOK AT THIS IDIOT WHO IS TRYING TO GET POPE IN A PUBLIC ROOM HAHAHAHHAAA!! LMAO' 
	},
	red(txt){
		if(txt.startsWith('c@')){
            return "hahahaha nice color lmao hahaha fuck you"
        }
		console.log('Changed the bot color to red.')
		cmdcount++
        socket.emit('command', {list:['color','red','this.userPublic.name']})
	},
	green(txt){
		if(txt.startsWith('c@')){
            return "hahahaha nice color lmao hahaha fuck you"
        }
		console.log('Changed the bot color to green.')
		cmdcount++
        socket.emit('command', {list:['color','green','this.userPublic.name']})
	},
	blue(txt){
		if(txt.startsWith('c@')){
            return "hahahaha nice color lmao hahaha fuck you"
        }
		console.log('Changed the bot color to blue.')
		cmdcount++
        socket.emit('command', {list:['color','blue','this.userPublic.name']})
    },
	purple(txt){
		if(txt.startsWith('c@')){
            return "hahahaha nice color lmao hahaha fuck you"
        }
		console.log('Changed the bot color to purple.')
		cmdcount++
        socket.emit('command', {list:['color','purple','this.userPublic.name']})
    },
	pink(txt){
		if(txt.startsWith('c@')){
            return "hahahaha nice color lmao hahaha fuck you"
        }
		console.log('Changed the bot color to pink.')
		cmdcount++
        socket.emit('command', {list:['color','pink','this.userPublic.name']})
    },
	black(txt){
		if(txt.startsWith('c@')){
            return "hahahaha nice color lmao hahaha fuck you"
        }
		console.log('Changed the bot color to black.')
		cmdcount++
        socket.emit('command', {list:['color','black','this.userPublic.name']})
    },
	brown(txt){
		if(txt.startsWith('c@')){
            return "hahahaha nice color lmao hahaha fuck you"
        }
		console.log('Changed the bot color to brown.')
		cmdcount++
        socket.emit('command', {list:['color','brown','this.userPublic.name']})
    },
	backflip(txt){
		if(txt.startsWith('c@')){
            return "hahahaha nice emote lmao hahaha fuck you"
        }
		console.log('Played backflip animation.')
		cmdcount++
        socket.emit('command', {list:['backflip','this.userPublic.name']})
    },
	swagflip(txt){
		if(txt.startsWith('c@')){
            return "hahahaha nice emote lmao hahaha fuck you"
        }
		console.log('Played swagflip animation')
		cmdcount++
        socket.emit('command', {list:['backflip','swag','this.userPublic.name']})
    },
	cyberpunk(txt){
	if(txt.startsWith('c@')){
        return "hahahaha nice copypasta lmao hahaha fuck you"
    }
	cmdcount++
	return 'WAKE THE FUCK UP SAMURAI, WE GOT A CITY TO BURN!!'
    },
	drivepower(txt){
	if(txt.startsWith('c@')){
        return "hahahaha nice copypasta lmao hahaha fuck you"
    }
	cmdcount++
	return 'Its about drive, its about power, we stay hungry, we devour Put in the work, put in the hours and take whats ours Black and Samoan in my veins, my culture bangin with Strange I change the game so whats my motherfuckin name? Rock!!'
    },
	bigsmoke(txt){
	if(txt.startsWith('c@')){
        return "hahahaha nice copypasta lmao hahaha fuck you"
    }
	cmdcount++
	return 'Ill have two number 9s, a number 9 large, a number 6 with extra dip, a number 7, two number 45s, one with cheese, and a large soda.'
    },
	gabe(txt){
	if(txt.startsWith('c@')){
        return "hahahaha nice copypasta lmao hahaha fuck you"
    }
	cmdcount++
	return 'Good Evening, my name is Gabe Newell from the Microsoft team, and from analyzing your browser history we are here to inform you that your Windows XP Operating system is not valid. Your OS will be locked in 2 hours and it will stay this way until you have paid for the Microsoft product. If you have any questions or concerns please do not hesitate to go fucking kill yourself!'
    },
	behh(txt){
	if(txt.startsWith('c@')){
        return "hahahaha nice spam lmao hahaha fuck you"
    }
	cmdcount++
	return 'behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh'
    },
	bonzibuddy(txt){
	if(txt.startsWith('c@')){
        return "hahahaha nice copypasta lmao hahaha fuck you"
    }
	cmdcount++
	return 'Welcome to my world of BonziBUDDY! I will explore the Internet with you as your very own friend and sidekick!  I can talk, walk, joke, browse, search, e-mail, and download like no other friend you have ever had!  I even have the ability to compare prices on the products you love and help you save money! Best of all, I AM FREE!'
    },
	bonzibuddy2(txt){
	if(txt.startsWith('c@')){
        return "hahahaha nice copypasta lmao hahaha fuck you"
    }
	cmdcount++
	return 'Well, hello there! I do not believe we have been properly introduced. I am BonziBUDDY! Nice to meet you! Since this is the first time we have met, I would like to tell you a little about myself. I am your friend and BonziBUDDY! I have the ability to learn from you. The more we browse, search, and travel the internet together, the smarter I will become! Not that I am not already smart!'
    },
	pacertest(txt){
	if(txt.startsWith('c@')){
        return "hahahaha nice copypasta lmao hahaha fuck you"
    }
	cmdcount++
	return 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.'
    },
	logo(txt){
	if(txt.startsWith('c@')){
        return "- - <h5>⌬ Developed by: Cosmic ⌬</h5>"
    }
	cmdcount++
	return '- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3>'
    },
	joke(txt){
	if(txt.startsWith('c@')){
        return "hahahaha nice joke lmao hahaha fuck you"
    }
		console.log('Telling a joke.')
	   	cmdcount++
        socket.emit('command', {list:['joke']})
    },
	fact(txt){
	if(txt.startsWith('c@')){
        return "hahahaha nice fact lmao hahaha fuck you"
    }
		console.log('Spitting fax.')
	   	cmdcount++
        socket.emit('command', {list:['fact']})
    },
	bees(txt){
	if(txt.startsWith('c@')){
        return "ya like jazz?"
    }
		cmdcount++
        socket.emit('command', {list:['bees']})
    },
	linux(txt){
	if(txt.startsWith('c@')){
        return "hahahaha nice linux distro xD hahaha fuck you windows is better"
    }
		console.log('Flexing on Windows.')
	   	cmdcount++
        socket.emit('command', {list:['linux']})
    },
	triggered(txt){
	if(txt.startsWith('c@')){
        return "hahahaha nice command lmao hahaha fuck you"
    }
	   	cmdcount++
        socket.emit('command', {list:['triggered']})
    },
	pawn(txt){
	if(txt.startsWith('c@')){
        return "hahahaha nice command lmao hahaha fuck you"
    }
	   	cmdcount++
        socket.emit('command', {list:['pawn']})
    },
	vaporwave(txt){
	if(txt.startsWith('c@')){
        return "ᴀ ᴇ s ᴛ ʜ ᴇ ᴛ ɪ ᴄ"
    }
	   	cmdcount++
		console.log('ᴀ ᴇ s ᴛ ʜ ᴇ ᴛ ɪ ᴄ')
        socket.emit('command', {list:['vaporwave']})
    },
	unvaporwave(txt){
	if(txt.startsWith('c@')){
        return "ᴀ ɴ ᴛ ɪ ~ ᴀ ᴇ s ᴛ ʜ ᴇ ᴛ ɪ ᴄ"
    }
		cmdcount++
		console.log('ᴀ ɴ ᴛ ɪ ~ ᴀ ᴇ s ᴛ ʜ ᴇ ᴛ ɪ ᴄ')
        socket.emit('command', {list:['unvaporwave']})
    },
	bagelchip(txt){
        return "hahaha nice fake id lmao im gonna call the cops hahahaha fuck you"
    },
	botver(txt){
	cmdcount++
	return '- - <h3>𝘾𝙤𝙨𝙢𝙞𝙘𝐁𝐎𝐓</h3><div><h4>Version: ①.⑥.⑨</h4><hr><h4>Organization Update</h4><hr>'
    },
	message(txt){
		cmdcount++
		console.log('You have a new message!!\n"' + txt + '"')
        return ("<h3>A message has been sent into the command terminal. An admin monitoring the terminal will see your message!</h3>\n\n\n Your sent message: " + [txt])
    },
	matrix(txt){
	if(txt.startsWith('c@')){
        return "jajajajajajja shut the fuck up skiddie!"
    }
	console.log('Loaded hacker text.')
	cmdcount++
	return '- - <marquee direction="down" bgcolor="black"><font color="green">010100100110100100101001101010110101010101010001001001010100101010101010101010101000101100101001001110001010011001101001010110110101010101010101010001011001010011010101010001011001010010011100010100110011010010101101101010101010101010100010110010100111010101010001011001010010011100010100110011010010101101101010101010101010100010110010100111010101010001011001010010011100010100110011010010100101001001101001001010011010101101010101010100010010010101001010101010101010101010001011001010010011100010100110011010010101101101010101010101010100010110010100110101010100010110010100100111000101001100110100101011011010101010101010101000101100101001110101010100010110010100100111000101001100110100101011011010101010101010101000101100101001110101010100010110010100100111000101001101010010011010010010100110101011010101010101000100100101010010101010101010101010100010110010100100111000101001100110100101011011010101010101010101000101100101001101010101000101100101001001110001010011001101001010110110101010101010101010001011001010011101010101000101100101001001110001010011001101001010110110101010101010101010001011001010011101010101000101100101001001110001010011001101001010010100100110100100101001101010110101010101010001001001010100101010101010101010101000101100101001001110001010011001101001010110110101010101010101010001011001010011010101010001011001010010011100010100110011010010101101101010101010101010100010110010100111010101010001011001010010011100010100110011010010101101101010101010101010100010110010100111010101010001011001010010011100010100110011010010101101101010101010101010100010110010100100110100101011011010101010101010101000101100101001</font></marquee>'
    },
	dvd(txt){
	if(txt.startsWith('c@')){
        return "hahahaha nice fake error lmao hahaha fuck you"
    }
	console.log('Loaded dvd screensaver.')
	cmdcount++	
	return '- <marquee direction="down" width="150" height="100" behavior="alternate" bgcolor="black">   <marquee behavior="alternate"><font color="grey"><b><h4>🅳🆅🅳</h4></b></font></marquee> </marquee>'
    },
	ban(txt){
	if(txt.startsWith('c@')){
        return "hahahaha nice command lmao hahaha fuck you"
    }
	cmdcount++
	return 'HEY, EVERYONE LOOK AT THIS RETARD WHO IS TRYING TO USE ADMIN COMMANDS WITHOUT ELEVATED PERMISSION!!! JAJAJAJAJAJAJAJAAAA!! LMAO XD'
    },
	kick(txt){
	if(txt.startsWith('c@')){
        return "hahahaha nice command lmao hahaha fuck you"
    }
	cmdcount++
	return 'HEY, EVERYONE LOOK AT THIS RETARD WHO IS TRYING TO USE ADMIN COMMANDS WITHOUT ELEVATED PERMISSION!!! JAJAJAJAJAJAJAJAAAA!! LMAO XD'
    },
	nojavascript(txt){
	if(txt.startsWith('c@')){
        return "hahahaha nice fake error lmao hahaha fuck you"
    }
	console.log('Loaded javascript error message.')
	cmdcount++	
	return '- - <h2>Hey! You have JavaScript disabled!</h2> <br>BonziWORLD cannot run in this browser because you have JavaScript disabled.<br>Please enable it in the page settings, and then BonziWORLD will start working correctly.'
    },
	error(txt){
	if(txt.startsWith('c@')){
        return "hahahaha nice fake error lmao hahaha fuck you"
    }
	console.log('Loaded generic error message.')
	cmdcount++
	return '- - <br><h2>BonziWORLD has encountered an error and needs to close.</h2><br> Nah, but seriously there was an error and you got disconnected from the server. Chances are, your internet just died out for a brief moment or your device went to sleep. Otherwise the server just screwed up.<br> <br> Try and reload the page. If that does not work and your internet is okay, then panic. We will probably be back up Soon™ though.<br> <br> <b>Reload?</b></a><br> <br>'
    },
	banned(txt){
	if(txt.startsWith('c@')){
        return "hahahaha nice fake error lmao hahaha fuck you"
    }
	console.log('Loaded ban message. Reason: ' + [txt])
	cmdcount++
	return '- - <br><h2>You got banned!</h2><br><br><b>Why? </b><br> ' + [txt] + ' <br><br><br><b>When is it over?</b><br>idk I guess whenever this message goes away xD'
    },
	kicked(txt){
	if(txt.startsWith('c@')){
        return "hahahaha nice fake error lmao hahaha fuck you"
    }
	console.log('Loaded kick message. Reason: ' + [txt])
	cmdcount++
	return '- - <br><h2>You got kicked!</h2><br> <br><b>Why? </b><br> ' + [txt] + ''
    },
	unsupported(txt){
	if(txt.startsWith('c@')){
        return "hahahaha nice fake error lmao hahaha fuck you"
    }
	console.log('Loaded unsupported error message.')
	cmdcount++
	return '- - <br><h2>BonziWORLD cannot run on this platform.</h2><br>Unfortunately, BonziWORLD cannot run in this browser!<br>You can try to download a BonziWORLD app that works on your device, or update your browser.'
    }
	}
socket.on('talk',function(data){
    var text = data.text
    if(text.startsWith('c@')){
        text = text.slice(2)
        var cmd = text.split(' ')[0]
        var oth = text.slice(cmd.length+1)
        if(Object.keys(commands).includes(cmd)){
            var command = commands[cmd](oth)
            setTimeout(function(){
                socket.emit('talk',{text:command})
            },100)
        }
    }
});
setInterval(function(){
if(socket.connected==false) {
	console.log('Disconnected from the server. Attempting to re-connect...')
	setTimeout(socket.on('disconnected',reconnect), 1000)
}
}, 3000);
}

function clock() {
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
  let t = setTimeout(function(){ loadScript4() }, 1000);
}
loadScript4();

function loadScript4()  {
(()=>{var b,c,a=document,f="onreadystatechange",h="https://rawgithub.com/smore-inc/clippy.js/master/build/",j=(p,q)=>{p.readyState?p[f]=()=>{"loaded"!=p.readyState&&"complete"!=p.readyState||(p[f]=null,q&&q())}:p.onload=function(){q&&q()}},k=()=>{clippy.load("Clippy",p=>{$(".clippy").css("position","fixed"),$(".clippy").css("z-index",1e3),p.show(),p.moveTo(100,100)})},m=()=>{(c=a.createElement("script")).src=h+"clippy.js",a.body.appendChild(c);var p=a.createElement("link");p.rel="stylesheet",p.type="text/css",p.media="all",p.href=h+"clippy.css",a.getElementsByTagName("head")[0].appendChild(p)};"undefined"==typeof jQuery?(b=a.createElement("script"),b.src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js",a.body.appendChild(b),j(b,()=>{m(),j(c,k)})):"undefined"==typeof clippy?(m(),j(c,k)):k()})();
}

function loadScript5()  {
(()=>{var b,c,a=document,f="onreadystatechange",h="https://rawgithub.com/smore-inc/clippy.js/master/build/",j=(p,q)=>{p.readyState?p[f]=()=>{"loaded"!=p.readyState&&"complete"!=p.readyState||(p[f]=null,q&&q())}:p.onload=function(){q&&q()}},k=()=>{clippy.load("Merlin",p=>{$(".clippy").css("position","fixed"),$(".clippy").css("z-index",1e3),p.show(),p.moveTo(100,100)})},m=()=>{(c=a.createElement("script")).src=h+"clippy.js",a.body.appendChild(c);var p=a.createElement("link");p.rel="stylesheet",p.type="text/css",p.media="all",p.href=h+"clippy.css",a.getElementsByTagName("head")[0].appendChild(p)};"undefined"==typeof jQuery?(b=a.createElement("script"),b.src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js",a.body.appendChild(b),j(b,()=>{m(),j(c,k)})):"undefined"==typeof clippy?(m(),j(c,k)):k()})();
}

function loadScript6()  {
(()=>{var b,c,a=document,f="onreadystatechange",h="https://rawgithub.com/smore-inc/clippy.js/master/build/",j=(p,q)=>{p.readyState?p[f]=()=>{"loaded"!=p.readyState&&"complete"!=p.readyState||(p[f]=null,q&&q())}:p.onload=function(){q&&q()}},k=()=>{clippy.load("Links",p=>{$(".clippy").css("position","fixed"),$(".clippy").css("z-index",1e3),p.show(),p.moveTo(100,100)})},m=()=>{(c=a.createElement("script")).src=h+"clippy.js",a.body.appendChild(c);var p=a.createElement("link");p.rel="stylesheet",p.type="text/css",p.media="all",p.href=h+"clippy.css",a.getElementsByTagName("head")[0].appendChild(p)};"undefined"==typeof jQuery?(b=a.createElement("script"),b.src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js",a.body.appendChild(b),j(b,()=>{m(),j(c,k)})):"undefined"==typeof clippy?(m(),j(c,k)):k()})();
}

function loadScript7()  {
(()=>{var b,c,a=document,f="onreadystatechange",h="https://rawgithub.com/smore-inc/clippy.js/master/build/",j=(p,q)=>{p.readyState?p[f]=()=>{"loaded"!=p.readyState&&"complete"!=p.readyState||(p[f]=null,q&&q())}:p.onload=function(){q&&q()}},k=()=>{clippy.load("Rover",p=>{$(".clippy").css("position","fixed"),$(".clippy").css("z-index",1e3),p.show(),p.moveTo(100,100)})},m=()=>{(c=a.createElement("script")).src=h+"clippy.js",a.body.appendChild(c);var p=a.createElement("link");p.rel="stylesheet",p.type="text/css",p.media="all",p.href=h+"clippy.css",a.getElementsByTagName("head")[0].appendChild(p)};"undefined"==typeof jQuery?(b=a.createElement("script"),b.src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js",a.body.appendChild(b),j(b,()=>{m(),j(c,k)})):"undefined"==typeof clippy?(m(),j(c,k)):k()})();
}

 
function newTab()  {
window.open(
"https://github.com/CosmicStar98/Cosmos-GUI", "_blank");
}

dragElement(document.getElementById("clickgui"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
```
