
/* Credits - PLEASE DO NOT REMOVE

 - Project: Fire Chat Room 2.0
 - Credit: Developed By DragonFireGames
 - Remixer: (Your name)
 - Version: Beta Release 0.4.1

 My contact info:
 - Discord: DragonFire7z
 - Email: dragonfire7z@outlook.com
 contact me if you want.
 
 PS; Please contact me cool.
 
 PS; Thanks to @MonsterYT for helping me debug.
     Thanks to @cool for inspiring me to make a chat.
     Thanks to @Rocky for inspiring sounds.
     Big Thanks to @Varrience & @Owokoyo for the JSON request mechanics.
     Big Thanks to @Ravage for Vault

 Be sure to check out my other games:

 Pumpkin Smasher 2:
 URL - https://pumpkin-smasher.onrender.com
 Server - https://discord.gg/NqnXXy8mNz
 
 Also check out the game lab forum
 https://gamelab.freeflarum.com

*/

// Settings
var ownerName = "DragonFireGames";
var projectName = false;
var featuredLinks = { // Personalized Links
  "The Pumpkin Smasher Discord Server":"https://discord.gg/NqnXXy8mNz",
  "Pumpkin Smasher":"https://pumpkin-smasher.onrender.com",
  "My Google Site":"https://sites.google.com/view/dragonfiregames/home",
  "My p5.js":"https://editor.p5js.org/DragonFireGames/sketches",
  "My Gamelab Forum Profile":"https://gamelab.freeflarum.com/u/DragonFireGames",
  "My Youtube Channel":"https://www.youtube.com/channel/UC-xx3N7SI7oLSfkuVCcD1rQ",
  "My Replit":"https://replit.com/@DragonFireGames",
  "My Spotify":"https://open.spotify.com/user/gai02po3d25tisxgnke4h2qiy/playlists",
};

// Sign in

var user = Client();
constant("userId",getUserId());

//  UI SECTION

var themeList = [
  {
    name:"Default",
    creator:"DragonFireGames",
    cost:false,
    background: "#191919",
    stroke:false,
    messages: "rgba(255,255,255,0.02)",
    message_hover: "rgba(255,255,255,0.05)",
    panel: "rgba(255,255,255,0.02)",
    panel_hover: "rgba(255,255,255,0.02)",
    panel_stroke: false,
    panel_stroke_hover: "rgba(255,255,255,0.1)",
    ping_messages: "rgba(255,255,0,0.1)",
    ping_message_hover: "rgba(255,255,0,0.15)",
    input_box: "#303030",
    input_box_hover: "#383838",
    input_box_typing: "#383838",
    buttons: "#444444",
    button_hover: "#505050",
    button_pressed: "#555555",
    button_pressed_hover: "#656565",
    button_stroke: "#000000",
    button_stroke_hover: "#000000",
    warning_buttons:"#401010",
    warning_button_hover:"#502020",
    notifications: "#333333",
    announcement: "#e9e9e9",
    date: "#777777",
    placeholder: "#777777",
    placeholder_hover: "#858585",
    text: "#c9c9c9",
    button_text: "#c9c9c9",
    button_text_hover: "#c9c9c9",
    font: "Verdana",
    text_style: NORMAL,
    cursor: "#d4d4d4",
    bevel: 5,
    avatar_stroke: false,
    show_online: true,
    background_music: false,
  },
  {
    name:"space",
    creator:"DragonFireGames",
    cost:false,
    background: "#101019",
    background_image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/space-universe-blue-background-igor-sokalski.jpg",
    messages: "rgba(110,110,150,0.9)",
    message_hover: "rgba(100,100,140,0.9)",
    ping_messages: "rgba(140,140,180,0.9)",
    panel: "rgba(110,110,150,0.6)",
    input_box: "rgba(110,110,150,1.0)",
    buttons: "rgba(110,110,150,0.9)",
    button_hover: "rgba(90,90,130,0.9)",
    button_pressed: "rgba(140,140,180,0.9)",
    announcement: "#e9e9ff",
    date: "#a0a0d4",
    placeholder: "#a0a0d4",
    text: "#000014",
    button_text: "#e0e0e0",
    cursor: "#d4d4d4",
    font: "Courier New",
    text_style: BOLD,
    stroke: 0,
    background_music: "https://dl.sndup.net/h483/Fragment_by_Thomas_Barrandon.mp3"
  },
  {
    name:"sunset",
    creator:"DragonFireGames",
    cost:false,
    background: "#c00000",
    background_image: "https://charispsallo.files.wordpress.com/2013/09/bootleg-sunset-square.jpg",
    messages: "rgba(210,61,0,0.75)",
    ping_messages: "rgba(240,91,30,0.75)",
    message_hover: "rgba(255,111,50,0.8)",
    input_box: "rgba(190,41,10,1.0)",
    buttons: "rgba(210,61,0,0.75)",
    button_pressed: "rgba(240,91,30,0.75)",
    button_hover: "rgba(255,111,50,0.8)",
    announcement: "#ffff00",
    date: "#ff7a00",
    placeholder: "#ff7a00",
    text: "#300000",
    font: "Comic Sans",
    cursor: "#ff7a00",
    bevel: 5,
    circle_avatars: true,
    stroke: 0,
    avatar_stroke: 0,
  },
  {
    name:"Matrix",
    creator:"DragonFireGames",
    cost:false,
    background: "#000000",
    //background_image: "",
    messages: "#000000",
    message_hover: "#404040",
    ping_messages: "#202020",
    panel: "#000000",
    button_pressed: "#202020",
    button_hover: "#404040",
    announcement: "#00ff00",
    date: "#00ff00",
    placeholder: "#00ff00",
    text: "#00ff00",
    cursor: "#00ff00",
    font: "Courier New",
    stroke: "#00ff00",
    avatar_stroke: 0,
  },
  {//Purple??
    name:"Purple???",
    creator:"DragonFireGames\n(inspired by Rocky)",
    cost:false,
    background: "#400040",
    background_image: "https://i.ibb.co/T8h5QqK/download.png",
    messages: "rgba(108,0,158,0.6)",
    ping_messages: "rgba(138,30,188,0.6)",
    announcement: "#ff00c8",
    date: "#7a00ff",
    placeholder: "#7a00ff",
    text: "#d0d0d0",
    cursor: "#ff00ff",
    stroke: false,
  },
  {
    name:"Sonic Chill",
    creator:"Binary_Coder",
    cost:false,
    background: "rgb(50, 175, 150)",
    background_image: "https://proton-uploads-production.s3.amazonaws.com/f9f05c02339615a726a24953d2f5351c87fe532c14ef4847f1322b3ea06259ea.png",
    background_music: "https://dl.sndup.net/xppt/Sonic%20&%20Chill%20-%20Green%20Hill%20Zone.mp3",
    messages: "rgba(255, 255, 255, 0.5)",
    ping_messages: "rgba(255, 255, 100, 0.6)",
    input_box: "rgba(255, 255, 255, 0.2)",
    input_box_typing: "rgba(255, 255, 255, 0.5)",
    placeholder: "rgb(0, 0, 0)",
    placeholder_hover: "rgb(0, 10, 100)",
    cursor: "rgb(0, 10, 100)",
    announcement: "rgb(0, 10, 100)",
    date: "rgb(0, 20, 120)",
    text: "rgb(0, 10, 100)",
    stroke: false,
    font: "Arial Rounded MT Bold",
    bevel: 3
  },
  {
    name:"Orange 🍊",
    creator:"Binary_Coder",
    cost:false,
    background: "rgb(255, 120, 30)",
    background_image: Gradient.linear(30,simpleInterp("rgb(255, 180, 70)","rgb(255, 120, 30)",Ease.out.quad)),
    messages: "rgba(245, 245, 245,0.3)",
    message_hover: "rgba(255, 255, 255, 0.5)",
    ping_messages: "rgba(200, 225, 255, 0.75)",
    ping_message_hover: "rgba(255, 255, 255, 0.5)",
    notifications: "rgba(245, 245, 245, 0.75)",
    input_box: "rgba(245, 245, 245, 0.5)",
    input_box_typing: "rgba(255, 255, 255, 0.75)",
    placeholder: "rgb(0, 0, 0)",
    placeholder_hover: "rgb(0, 0, 0)",
    cursor: "rgb(0, 0, 0)",
    panel: "rgba(245, 245, 245, 0.2)",
    panel_stroke: "rgb(245, 245, 245)",
    panel_stroke_hover: "rgb(255, 120, 30)",
    buttons: "rgba(245, 245, 245, 0.8)",
    button_pressed: "rgb(255, 255, 255)",
    button_hover: "rgba(255, 255, 255, 0.9)",
    announcement: "rgb(0, 0, 0)",
    text: "rgb(0, 0, 0)",
    date: "rgb(75, 75, 75)",
    font: "Roboto,system-ui,-apple-system,BlinkMacSystemFont,segoe ui,Ubuntu,Cantarell,Oxygen,Helvetica,Arial,sans-serif",
    bevel: 4,
  },
  {
    name:"Notepad",
    creator:"Binary_Coder",
    cost:false,
    background: "rgb(240, 240, 220)",
    background_image: "https://proton-uploads-production.s3.amazonaws.com/fc3e932c755617e1e6535e22ab3918153a4caa9e1b3c2107d58af1d33c0dc9bf.jpg",
    stroke: false,
    messages: "rgba(250, 250, 250, 0.1)",
    message_hover: "rgb(250, 250, 250)",
    ping_messages: "rgb(255, 255, 225)",
    input_box: "rgb(250, 250, 250)",
    input_box_typing: "rgb(255, 255, 225)",
    placeholder: "rgb(50, 50, 50)",
    placeholder_hover: "rgb(0, 0, 0)",
    cursor: "rgb(0, 0, 0)",
    announcement: "rgb(0, 0, 0)",
    date: "rgb(50, 50, 50)",
    text: "rgb(0, 0, 0)",
    font: "Comic Sans MS",
  },
  {
    name:"The LGM\nAwards",
    creator:"LGM Productions",
    cost:false,
    background: "#efefef",
    background_image: "https://studio.code.org/v3/assets/ySiIkA1yMqPToL3EE0Wl4efYzNuxMpp7gcTS4zrPwvU/The-LGM-Awards-'24-400x400.png?t=1705270318234",
    messages: "rgba(245,255,255,0.5)",
    message_hover: "rgba(245,255,255,0.6)",
    ping_messages: "rgba(245,255,0,0.8)",
    ping_message_hover: "rgba(255,255,0,0.9)",
    input_box: "rgba(245,255,255,0.4)",
    input_box_typing: "rgba(245,255,255,0.5)",
    buttons: "rgba(245,255,255,0.6)",
    button_pressed: "rgba(245,255,255,1.0)",
    button_hover: "rgba(145,155,155,0.5)",
    button_stroke: "rgba(245,255,255,0.6)",
    notifications: "rgba(245,255,255,0.8)",
    announcement: "#ffffff",
    date: "#777777",
    placeholder: "#777777",
    placeholder_hover: "#606060",
    text: "#ffffff",
    font: "Franklin Gothic Heavy, Hiragino Kaku Gothic Pro system-ui,-apple-system,Arial Black",
    cursor: "#d4d4d4",
    bevel: 5,
  },
  {
    name:"Wii",
    creator:"Binary_Coder",
    cost: false,
    background: "rgb(230, 230, 230)",
    //https://proton-uploads-production.s3.amazonaws.com/e01fd684649f74ff06cd1e2bea0ec9ae790658c7a2ab2c3cdd3a52add530bec2.jpg
    background_image: "https://proton-uploads-production.s3.amazonaws.com/502a6a171f67aa5c741ae80f644286b0b37e6170ebb9233ffb3744b7e5a94035.jpg",
    background_music: "https://archive.org/download/wii-system-soundtrack-flac/Wii%20System%20Soundtrack%20%5BFLAC%5D/05%20Mii%20Channel%20Medley.mp3",
    stroke: "rgb(210, 210, 210)",
    messages: "rgb(230, 230, 230)",
    message_hover: "rgb(210, 210, 210)",
    ping_messages: "rgb(210, 210, 210)",
    input_box: "rgb(230, 230, 230)",
    input_box_typing: "rgb(210, 210, 210)",
    placeholder: "rgb(50, 50, 50)",
    placeholder_hover: "rgb(0, 0, 0)",
    cursor: "rgb(0, 0, 0)",
    announcement: "rgb(0, 0, 0)",
    date: "rgb(50, 50, 50)",
    text: "rgb(0, 0, 0)",
    font: "Arial",
    text_style: BOLD,
    bevel: 8
  },
  {//Raya
    name:"Raya's Place",
    creator:"DragonFireGames\n(inspired by Raya)",
    cost:false,
    background: "#303030",
    background_image: "https://i.pinimg.com/736x/be/70/f7/be70f71cd827414e310a02ddfcbc3530.jpg",
    //background_image: "https://www.asiamediajournal.com/wp-content/uploads/2022/11/Download-DARK-AESTHETIC-ANIME-PFP-300x300.jpg",
    //background_image: "https://www.inspirationde.com/wp-content/uploads/2022/12/1670574553_444_Pinterest.jpg",
    messages: "rgba(255,255,255,0.1)",
    message_hover: "rgba(255,255,255,0.15)",
    button_hover: "rgba(255,255,255,0.15)",
    ping_messages: "rgba(138,138,30,0.6)",
    announcement: "#ffffff",
    date: "#909090",
    placeholder: "#909090",
    text: "#d0d0d0",
    cursor: "#ffffff",
    stroke: false,
  },
  {
    name:"Spocco",
    creator:"wutadam",
    cost:false,
    background: "#efefef",
    background_image: "https://studio.code.org/v3/assets/qwharL4IfGlf-yrJjjOQJmtZoCHbRJoh7YyGgFIvxXE/spocco.jpg",
    messages: "rgba(245,255,255,0.5)",
    message_hover: "rgba(245,255,255,0.6)",
    ping_messages: "rgba(245,255,0,0.8)",
    ping_message_hover: "rgba(255,255,0,0.9)",
    input_box: "rgba(245,255,255,0.4)",
    input_box_typing: "rgba(245,255,255,0.5)",
    buttons: "rgba(245,255,255,0.6)",
    button_pressed: "rgba(245,255,255,1.0)",
    button_hover: "rgba(245,255,255,1.0)",
    button_stroke: "rgba(245,255,255,0.6)",
    notifications: "rgba(245,255,255,0.8)",
    announcement: "#232323",
    date: "#777777",
    placeholder: "#777777",
    placeholder_hover: "#606060",
    text: "#454545",
    font: "Roboto,system-ui,-apple-system,BlinkMacSystemFont,segoe ui,Ubuntu,Cantarell,Oxygen,Helvetica,Arial,sans-serif",
    cursor: "#d4d4d4",
    bevel: 5,
  },
  {
    name:"sunrise",
    creator:"wutadam",
    cost:false,
    background: "#78BBE1",
    background_image: "https://i.ibb.co/7bcG9hX/sunrise.jpg",
    messages: "rgba(255,255,255,0.5)",
    message_hover: "rgba(255,255,255,0.6)",
    ping_messages: "rgba(255,255,0,0.8)",
    ping_message_hover: "rgba(255,255,0,0.9)",
    input_box: "rgba(255,255,255,0.4)",
    input_box_typing: "rgba(255,255,255,0.5)",
    buttons: "rgba(255,255,255,0.6)",
    button_pressed: "rgba(255,255,255,1.0)",
    button_hover: "rgba(255,255,255,1.0)",
    button_stroke: "rgba(255,255,255,0.6)",
    notifications: "rgba(255,255,255,0.8)",
    announcement: "#232323",
    date: "#777777",
    placeholder: "#777777",
    placeholder_hover: "#606060",
    text: "#454545",
    font: "system-ui,-apple-system,BlinkMacSystemFont,segoe ui,Ubuntu,Cantarell,Oxygen,Roboto,Helvetica,Arial,sans-serif",
    cursor: "#d4d4d4",
    bevel: 5,
  },
];
var selTheme = 0;

// Process themes
for (var i = 0; i < themeList.length; i++) {
  if (typeof themeList[i].background_image == 'string') themeList[i].background_image = loadImage(themeList[i].background_image);
  if (themeList[i].background_music) {
    themeList[i].background_music = loadSound(themeList[i].background_music);
    themeList[i].background_music.loop = true;
  }
}

var activeSounds = {};
var theme;
function selectTheme(sel) {
  sel += themeList.length;
  sel %= themeList.length;
  selTheme = sel;
  if (Object.keys(activeSounds).length == 0) {
    if (theme && theme.background_music) theme.background_music.stop();
  }
  theme = themeList[selTheme];
  if (Object.keys(activeSounds).length == 0) {
    if (theme.background_music) theme.background_music.play();
  }
  // Optional Defaults
  function n() {
    for (var i in arguments) {
      if (arguments[i] !== undefined) return arguments[i];
    }
  }
  function c() {
    theme[arguments[0]] = n.apply(this,arguments.map(function(v){return theme[v];}));
  }
  c("stroke_hover","stroke");
  c("message_hover","messages");
  c("panel_stroke_hover","panel_stroke","stroke_hover");
  c("panel_stroke","stroke");
  c("ping_message_hover","ping_messages","message_hover");
  c("ping_messages","messages");
  c("panel_hover","panel","message_hover");
  c("panel","messages");
  c("button_hover","buttons","message_hover");
  c("buttons","messages");
  c("button_pressed_hover","button_pressed","button_hover");
  c("button_pressed","buttons");
  c("button_stroke_hover","button_stroke","stroke_hover");
  c("button_stroke","stroke");
  c("warning_button_hover","warning_buttons","button_hover");
  c("warning_buttons","buttons");
  c("input_box_hover","input_box","button_hover");
  c("input_box_typing","input_box_hover");
  c("input_box","buttons");
  c("notifications","buttons");
  c("announcement","text");
  c("date","placeholder","text");
  c("placeholder","date");
  c("placeholder_hover","placeholder");
  c("button_text","text");
  c("button_text_hover","button_text");
  theme.font = n(theme.font,"Verdana");
  theme.text_style = n(theme.text_style,NORMAL);
  textFont(theme.font);
  textStyle(theme.text_style);
}
selectTheme(selTheme);

var buttonStyler = {};
buttonStyler.style = createStyle(false,{
  fill:function(){return theme.buttons;},
  textFill:function(){return theme.button_text;},
  stroke:function(){return theme.button_stroke;},
  horizAlign:"center",
  vertAlign:"center",
  font:function(){return theme.font;},
  bevel:function(){return theme.bevel;},
  imageBevel:function(){return theme.bevel;},
  imageFit:"inside"
});
buttonStyler.hoverStyle = createStyle(buttonStyler.style,{
  fill:function(){return theme.button_hover;},
  stroke:function(){return theme.button_stroke_hover;},
  textFill:function(){return theme.button_text_hover;},
});
buttonStyler.clickStyle = buttonStyler.hoverStyle;

var warningButtonStyler = {};
warningButtonStyler.style = createStyle(buttonStyler.style,{
  fill:function(){return theme.warning_buttons;},
});
warningButtonStyler.hoverStyle = createStyle(buttonStyler.hoverStyle,{
  fill:function(){return theme.warning_button_hover;}
});
warningButtonStyler.clickStyle = warningButtonStyler.hoverStyle;

var inputStyler = {};
inputStyler.style = createStyle(buttonStyler.style,{
  horizAlign:"left",
  vertAlign:"top",
  cursor:alpha(0,0),
  placeholderTextFill:function(){return theme.placeholder;}
});
inputStyler.hoverStyle = createStyle(inputStyler.style,{
  fill:function(){return theme.button_hover;}
});
inputStyler.clickStyle = createStyle(inputStyler.hoverStyle,{
  cursor:function(){return theme.cursor;},
});
inputStyler.activeStyle = inputStyler.clickStyle;

var panelStyler = {};
panelStyler.style = createStyle(buttonStyler.style,{
  fill:function(){return theme.panel;},
  stroke:function(){return theme.panel_stroke;}
});
panelStyler.hoverStyle = createStyle(inputStyler.style,{
  fill:function(){return theme.panel_hover;},
  stroke:function(){return theme.panel_stroke_hover;}
});
panelStyler.clickStyle = panelStyler.hoverStyle;

/*
var textButtonStyle = createStyle(buttonStyle,{
  fill:alpha(0,0),
  stroke:false,
  textSize:20,
});
var textButtonHoverStyle = createStyle(textButtonStyle,{
  //textStroke:"#fbfbfb",
  //textStrokeWeight:1,
  textShadow:"#fbfbfb",
  textShadowBlur:10,
});
*/

var PAGES = [
  "loading",
  "signupin",
  "home",
  "friends",
  "profile",
  "shop",
  "adminpanel",
  "chatroom",
  "editgc"
];
PAGES.forEach(function(e){
  createPage(e);
});

// Custom
function createListDiv(label,x,y,width,height,page) {
  var div = createElement(x,y,width,height,page);
  div.addComponent("div");
  div.addComponent("button");
  div.setStyles(panelStyler);
  div.changecursor = false;
  div.label = label;
  div.reset = function() {
    div.list = [];
    div.showlist = [];
    //div.maxScrollY = 15+25-div.height;
  };
  div.push = function(v,n) {
    if (!v || v === "undefined") return;
    div.list.push(v);
    //div.maxScrollY += 35;
    if (!n) div.updatelist();
  }
  div.updatelist = function() {
    div.showlist = div.list;
    if (search.value) div.showlist = div.showlist.filter(function(v){
      return (v.displayname||"").includes(search.value) || 
        (v.name||"").includes(search.value) || 
        (v.users||[""]).join(", ").includes(search.value);
    });
    div.maxScrollY = 15+25+35*div.showlist.length-div.height;
    var rank = function(v) {
      return max((v.displayname||"").indexOf(search.value),
        (v.name||"").indexOf(search.value),
        (v.users||[""]).join(", ").indexOf(search.value));
    };
    div.showlist.sort(function(a,b){
      var d = rank(b) - rank(a);
      if (d !== 0) return;
      return (b.lastActiveAt||0) - (a.lastActiveAt||0);
    });
  };
  div.beforedraw = function(b) {
    b.push();
    b.format(theme.text,false,0,12,LEFT,TOP);
    b.text(div.label+" ("+div.list.length+"):",5,5);
    b.translate(0,15+25);
    var ty = 15-div.scrollY;
    if (frameCount % 600 == 0) div.updatelist();
    for (var i = 0; i < div.showlist.length; i++) {
      if (ty < -35-15-25) {
        b.translate(0,35);
        ty += 35;
        continue;
      }
      if (ty > div.height) {
        break;
      }
      var data = div.showlist[i];
      var hover = b.mouseRect(5,5,div.width-10,30);
      if (hover) {
        cursor(HAND);
        b.format(theme.button_hover,theme.button_stroke_hover);
      } else {
        b.format(theme.buttons,theme.button_stroke);
      }
      b.rect(5,5,div.width-10,30,theme.bevel);
      // Avatar
      var users = data.users || [];
      var tx = 10;
      if (data.avatar === false) {
        tx = users.length*10-10;
        for (var j = 0; j < users.length; j++) {
          if (users[j] == user.name) continue;
          tx -= 10;
          var p = getProfile(users[j]);
          b.coloredAvatarImage(p,20+tx,20,30);
        }
        tx = users.length*10-10;
      } else {
        b.coloredAvatarImage(data,20,20,30);
      }
      // Names
      b.format(theme.text,false,0,12,LEFT,TOP);
      b.text(data.displayname || data.name || users.join(", "),27+tx,9);
      // Active
      b.format(theme.placeholder,false,0,12,LEFT,TOP);
      b.text(date(data.lastActiveAt),27+tx,22);
      // User count
      if (users.length > 0) {
        b.format(theme.placeholder,false,0,12,RIGHT,TOP);
        b.text("("+users.length+")",div.width-7,22);
      }
      //
      b.translate(0,35);
      ty += 35;
      if (!clicked || !hover) continue;
      data.onclick();
    }
    b.pop();
  }
  var search = createInput("Search",5,20,width-10,20,page);
  search.setStyles(inputStyler,{horizAlign:"center"});
  search.validateinput = function(e) {
    if (e == "\n") {
      div.updatelist();
      return false;
    }
  }
  search.onchange = function(e) {
    div.updatelist();
  }
  div.appendChild(search);
  div.reset();
  return div;
}
function createButton(text,x,y,width,height,page) {
  var btn = createElement(x,y,width,height,page);
  btn.addComponent("button");
  if (text) btn.addComponent("text",text);
  btn.setStyles(buttonStyler);
  return btn;
}
function createInput(placeholder,x,y,width,height,page) {
  var inp = createElement(x,y,width,height,page);
  inp.addComponent("input");
  inp.setStyles(inputStyler);
  if (placeholder) inp.placeholder = placeholder;
  return inp;
}

// -------
// Loading
// -------

setPage("loading");
window.onserverload = function() {
  setPage("signupin");
  user.checkIn(function(){
    setPage("home");
  });
};

pageMap.loading.before = function() {
  format(theme.announcement,false,0,36,CENTER,CENTER);
  text("Booting up server...",200,200);
};

// ----------
// Sign Up/In
// ----------

var accInput = createInput("Enter account name.",100,200,200,22,"signupin");
accInput.validateinput = function(e) {
  if (e == "\n") {
    activeElement = pswInput;
    pswInput.cursorPos = pswInput.value.length;
    return false;
  }
}

var pswInput = createInput("Enter a password.",100,225,200,22,"signupin");
pswInput.password = true;
pswInput.validateinput = function(e) {
  if (e == "\n") {
    logInButton.click();
    return false;
  }
}

var feedbackSignText = {t:"",f:"#FF0000"};
feedbackSignText.draw = function(){
  fill(this.f);
  textSize(12);
  textAlign(CENTER,CENTER);
  text(this.t,200,190);
};
feedbackSignText.setText = function(t){
  this.t = t;
  if(this.tm) clearTimeout(this.tm);
  this.tm = setTimeout(function(){this.t=""}.bind(this),5000);
};

var signUpButton = createButton("Sign Up",100,250,98.5,22,"signupin");
signUpButton.onclick = function(){
  if(!pswInput.value){
    feedbackSignText.setText("Enter a password.");
    return;
  }
  if(!accInput.value){
    feedbackSignText.setText("Enter an account name.");
    return;
  }
  window.user.signUp(accInput.value,pswInput.value,defaultData,function(){
    setPage("home");
  },function(e){
    if (typeof e != 'string') e = "Error: Cannot connect to server";
    feedbackSignText.setText(e.slice(7));
  });
};

var logInButton = createButton("Log In",201.5,250,98.5,22,"signupin");
logInButton.onclick = function(){
  if(!pswInput.value){
    feedbackSignText.setText("Enter a password.");
    return;
  }
  if(!accInput.value){
    feedbackSignText.setText("Enter an account name.");
    return;
  }
  window.user.signIn(accInput.value,pswInput.value,defaultData,function(){
    setPage("home");
  },function(e){
    if (typeof e != 'string') e = "Error: Cannot connect to server";
    feedbackSignText.setText(e.slice(7));
  });
};

project = loadProject(projectId);
setInterval(function(){
  loadProjectAbuse(projectId,function(abuse){
    if (abuse.abuse_score == 0 && !abuse.sharing_disabled) return;
    prompt("This project has been reported, please remix!","https://studio.code.org/projects/gamelab/"+projectId+"/remix");
  });
},180000);
pageMap.signupin.after = function(){
  push();
  var str = "Welcome to "+(projectName||project.name)+"!";
  textSize(12);
  format(theme.announcement,false,0,12,CENTER,BOTTOM);
  textfit(str,200,77,370,100);
  format(theme.announcement,false,0,12,CENTER,TOP);
  if (ownerName != "DragonFireGames") {
    text("By: "+ownerName+" & DragonFireGames",200,77);
  } else {
    text("By: DragonFireGames",200,77);
  }
  pop();
  
  push();
  var halfMove = Object.keys(featuredLinks).length*35/2;
  translate(200-halfMove,95);
  for (var i in featuredLinks) {
    var icon = loadIcon(featuredLinks[i]);
    var hover = mouseRect(0,0,30,30);
    if (hover) {
      cursor(HAND);
      image(icon,-1,-1,32,32);
    } else image(icon,0,0,30,30);
    if (clicked && hover) {
      prompt(i,featuredLinks[i]);
    }
    translate(35,0);
  }
  translate(-200-halfMove,-95);
  pop();
  
  feedbackSignText.draw();
};


// ----
// Tabs
// ----

var tabStyler = {};
tabStyler.style = createStyle(buttonStyler.style,{fill:function(){return theme.messages;}});
tabStyler.hoverStyle = createStyle(buttonStyler.style,{fill:function(){return theme.message_hover;}});
tabStyler.clickStyle = tabStyler.hoverStyle;
tabStyler.styleOn = buttonStyler.style;
tabStyler.hoverStyleOn = buttonStyler.hoverStyle;
tabStyler.clickStyleOn = buttonStyler.hoverStyle;

var tabPages = {
  "home":"Chats",
  "friends":"Friends",
  "profile":"Account",
  "shop":"Shop",
  "adminpanel":"Admin"
};
var tabX = 5;
var tabList = {};
function createTab(page,name) {
  var tab = createElement(tabX,5,20,20);
  tab.addComponent("toggle");
  tab.addComponent("text",name);
  tab.setStyles(tabStyler);
  tab.onclick = function() {
    for (var i in tabList) {
      tabList[i].toggle = false;
    }
    tab.toggle = true;
    if (activePage.name == page) return;
    setPage(page);
  }
  textSize(tab.style.textSize);
  tab.width = textWidth(name)+20;
  tabX += tab.width+5;
  for (var i in tabPages) {
    tab.addToPage(i);
  }
  return tab;
}
for (var i in tabPages) {
  tabList[i] = createTab(i,tabPages[i]);
}
tabList.home.toggle = true;
tabList.adminpanel.x = 395-tabList.adminpanel.width;
tabList.adminpanel.adminclick = tabList.adminpanel.onclick;
tabList.adminpanel.onclick = function() {
  if (user.isAdmin) {
    tabList.adminpanel.adminclick();
  } else {
    user.elevate(prompt("Enter admin password:"),function(v){
      tabList.adminpanel.adminclick();
    },function(e) {
      prompt(e.slice(7));
    });
    tabList.adminpanel.toggle = false;
  }
}

// -----------
// Home Screen
// -----------

roomMap = {};
pageMap.home.onopen = function() {
  getRoomList(function(map){
    roomMap = map;
    var h = 20+Object.keys(map).length * 25;
    roominp.y = h;
    roombtn.y = h;
    roomlistdiv.maxScrollY = h+25-roomlistdiv.height;
  });
  loadProfile(user.name,function(p) {
    gcList.reset();
    for (var i in p.public.chats) (function(i){
      getGC(i,function(d){
        d.onclick = function() {
          if (keyDown(SHIFT)) {
            getGC(i,function(e){
              editingGC = e;
              setPage("editgc");
            });
            return;
          }
          setPage("chatroom");
          setRoom(i);
        };
        gcList.push(d);
      });
    })(i);
    return p;
  });
  // setTimeout(function(){
  //   setPage("chatroom");
  // },0);
};

var roomlistdiv = createElement(5,30,170,365,"home");
roomlistdiv.addComponent("div");
roomlistdiv.addComponent("button");
roomlistdiv.setStyles(panelStyler);
roomlistdiv.changecursor = false;
roomlistdiv.beforedraw = function(b) {
  b.push();
  b.format(theme.text,false,0,12,LEFT,TOP);
  b.text("Public Rooms:",5,5);
  b.translate(0,15);
  var map = JSON.parse(JSON.stringify(roomMap));
  //*if (user.isAdmin || EVERYONE_CAN_MAKE_ROOMS)*/ map["___MakeRoom___"] = true;
  for (var i in map) {
    var hover = b.mouseRect(5,5,160,20);
    if (hover) {
      cursor(HAND);
      b.format(theme.button_hover,theme.button_stroke_hover);
    } else {
      b.format(theme.buttons,theme.button_stroke);
    }
    b.rect(5,5,160,20,theme.bevel);
    if (hover) b.fill(theme.button_text_hover);
    else b.fill(theme.button_text);
    b.noStroke();
    b.textAlign(CENTER, CENTER);
    b.text(i,85,15);
    b.translate(0,25);
    if (!clicked || !hover) continue;
    //playSound(clickSound);
    if (keyDown(SHIFT)) {
      if (prompt("Are you sure you want to delete room "+i+"?","") !== null) { 
        var chat = createChatRoom(i);
        chat.public = true;
        chat.removeFromList();
      }
    } else {
      setPage("chatroom");
      setRoom(i,true);
    }
  }
  b.pop();
}

var roominp = createInput("Create Room",5,0,120,20,"home");
roominp.setStyles(inputStyler,{horizAlign:"center"});
roominp.validateinput = function(e) {
  if (e == " ") e = "-";
  if (!e.match(/[\w\d-]/)) return false; 
  e = e.toLowerCase();
  return e;
}
roomlistdiv.appendChild(roominp);

var roombtn = createButton("+",130,0,35,20,"home");
roombtn.onclick = function() {
  setRoom(roominp.value,true);
  setPage("chatroom");
};
roomlistdiv.appendChild(roombtn);

var gcdatadb = createDatabase("groupchats");
var gcList = createListDiv("DMs & GCs",180,30,215,335,"home");
function createGC(users,name,avatar) {
  var obj = {};
  obj.id = randomId(16);
  obj.users = users;
  obj.name = name||false;
  obj.avatar = avatar||false;
  for (var i = 0; i < users.length; i++) (function(i){
    var prof = loadProfile(users[i],function(p){
      var chats = p.public.chats || {};
      chats[obj.id] = true;
      user.updatepublic(users[i],{chats:chats});
      return p;
    });
  })(i);
  gcdatadb.set(obj.id,obj);
  return obj;
};
function addToGC(gc,name,callback) {
  loadProfile(name,function(p){
    var chats = p.public.chats || {};
    chats[gc.id] = true;
    user.updatepublic(name,{chats:chats});
    return p;
  });
  gcdatadb.update(gc.id,function(e){
    e.users.push(name);
    gc.users = e.users;
    callback();
    return e;
  });
};
function removeFromGC(gc,name,callback) {
  loadProfile(name,function(p){
    var chats = p.public.chats || {};
    delete chats[gc.id];
    user.updatepublic(name,{chats:chats});
    return p;
  });
  gcdatadb.update(gc.id,function(e){
    var i = e.users.indexOf(name);
    if (i == -1) return;
    e.users.splice(i,1);
    gc.users = e.users;
    callback();
    return e;
  });
};
function deleteGC(id,callback) {
  getGC(id,function(e){
    for (var i = 0; i < e.users.length; i++) (function(i){
      var prof = loadProfile(e.users[i],function(p){
        var chats = p.public.chats || {};
        delete chats[e.id];
        user.updatepublic(e.users[i],{chats:chats});
        return p;
      });
    })(i);
    gcdatadb.delete(e.id,callback);
  });
};
function getGC(id,callback) {
  gcdatadb.get(id,function(data){
    if (!data) return;
    data = onloadprofile(data);
    if (typeof callback == 'function') callback(data);
  });
};

var addgcbtn = createButton("Create New Private Group Chat",180,370,215,25,"home");
addgcbtn.onclick = function() {
  editingGC = onloadprofile(createGC([user.name]));
  setPage("editgc");
};

// -------
// Edit GC
// -------

var editingGC = false;
var memberList = createListDiv("Members",5,140,192.5,225,"editgc");
var nonmemberList = createListDiv("People",202.5,5,192.5,360,"editgc");
pageMap.editgc.onopen = function() {
  if (editingGC.name) gcnameInput.value = editingGC.name;
  if (editingGC.old.avatar) gcavatarBtn.img = loadImage(editingGC.old.avatar);
  else gcavatarBtn.img = defaultAvatar;
  loadAllProfiles(function(e){
    memberList.reset();
    nonmemberList.reset();
    for (var i in e) (function(p){
      var member = false
      for (var j = 0; j < editingGC.users.length; j++) {
        if (editingGC.users[j] != p.name) continue;
        member = true;
        break;
      }
      if (member) {
        memberList.push(p,1);
        p.onclick = function() {
          removeFromGC(editingGC,p.name,function(){
            pageMap.editgc.onopen();
          });
        };
      } else {
        nonmemberList.push(p,1);
        p.onclick = function() {
          addToGC(editingGC,p.name,function(){
            pageMap.editgc.onopen();
          });
        };
      }
    })(e[i]);
    memberList.updatelist();
    nonmemberList.updatelist();
    return e;
  });
};
pageMap.editgc.after = function() {
  format(255,false,0,12,LEFT);
  text("Display Name:",12.5,12.5);
  text("Display Image:",12.5,55.5);
};

