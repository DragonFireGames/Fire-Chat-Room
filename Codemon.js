var FTEMP = (function(){

// FTEMP Fire Template
// By: DragonFireGames
// Version: 1.0
// desc: A template for future projects

// Settings
window.ownerName = "DragonFireGames";
window.projectName = false;
window.featuredLinks = { // Personalized Links
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

window.user = Client();
constant("userId",getUserId());

//  UI SECTION

window.themeList = [
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
    notification_stroke: false,
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
window.selTheme = 0;

// Process themes
for (var i = 0; i < themeList.length; i++) {
  if (typeof themeList[i].background_image == 'string') themeList[i].background_image = loadImage(themeList[i].background_image);
  if (themeList[i].background_music) {
    themeList[i].background_music = loadSound(themeList[i].background_music);
    themeList[i].background_music.loop = true;
  }
}

window.activeSounds = {};
window.theme = {};
window.selectTheme = function(sel) {
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
  c("notification_stroke","button_stroke");
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

window.buttonStyler = {};
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

window.warningButtonStyler = {};
warningButtonStyler.style = createStyle(buttonStyler.style,{
  fill:function(){return theme.warning_buttons;},
});
warningButtonStyler.hoverStyle = createStyle(buttonStyler.hoverStyle,{
  fill:function(){return theme.warning_button_hover;}
});
warningButtonStyler.clickStyle = warningButtonStyler.hoverStyle;

window.inputStyler = {};
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

window.panelStyler = {};
panelStyler.style = createStyle(buttonStyler.style,{
  fill:function(){return theme.panel;},
  stroke:function(){return theme.panel_stroke;}
});
panelStyler.hoverStyle = createStyle(inputStyler.style,{
  fill:function(){return theme.panel_hover;},
  stroke:function(){return theme.panel_stroke_hover;}
});
panelStyler.clickStyle = panelStyler.hoverStyle;

window.textButtonStyler = {};
textButtonStyler.style = createStyle(buttonStyler.style,{
  fill:alpha(0,0),
  stroke:false,
  textSize:20,
});
textButtonStyler.hoverStyle = createStyle(buttonStyler.hoverStyle,{
  //textStroke:"#fbfbfb",
  //textStrokeWeight:1,
  textShadow:"#fbfbfb",
  textShadowBlur:10,
  fill:alpha(0,0),
  stroke:false,
  textSize:20,
});
textButtonStyler.clickStyle = textButtonStyler.hoverStyle;

// Custom
window.createListDiv = function(label,x,y,width,height,page) {
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
      var hover = div.hover && b.mouseRect(5,5,div.width-10,30);
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
window.createButton = function(text,x,y,width,height,page) {
  var btn = createElement(x,y,width,height,page);
  btn.addComponent("button");
  if (text) btn.addComponent("text",text);
  btn.setStyles(buttonStyler);
  return btn;
}
window.createInput = function(placeholder,x,y,width,height,page) {
  var inp = createElement(x,y,width,height,page);
  inp.addComponent("input");
  inp.setStyles(inputStyler);
  if (placeholder) inp.placeholder = placeholder;
  return inp;
}

// -------
// Loading
// -------

createPage("loading");
setPage("loading");
window.onserverload = function() {
  setPage("signupin");
  user.checkIn(function(){
    setPage("home");
  });
  user.referAuth(function(){
    setPage("home");
    var params = getURLParams();
    if (params.notify) {
      handleNotification(JSON.parse(decodeURIComponent(params.notify)));
    }
  });
};

var loadingTime = Date.now();
pageMap.loading.onopen = function() {
  loadingTime = Date.now();
};
pageMap.loading.before = function() {
  format(theme.announcement,false,0,36,CENTER,CENTER);
  text("Booting up server...",200,182);
  textSize(24);
  text(floor((Date.now()-loadingTime)/1000)+" secs",200,216);
  textSize(12);
  text("May take up to 60 seconds",200,236);
};

// ----------
// Sign Up/In
// ----------

createPage("signupin");
window.accInput = createInput("Enter account name.",100,200,200,22,"signupin");
accInput.validateinput = function(e) {
  if (e == "\n") {
    activeElement = pswInput;
    pswInput.cursorPos = pswInput.value.length;
    return false;
  }
}

window.pswInput = createInput("Enter a password.",100,225,200,22,"signupin");
pswInput.password = true;
pswInput.validateinput = function(e) {
  if (e == "\n") {
    logInButton.click();
    return false;
  }
}

window.feedbackSignText = {t:"",f:"#FF0000"};
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

window.signUpButton = createButton("Sign Up",100,250,98.5,22,"signupin");
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

window.logInButton = createButton("Log In",201.5,250,98.5,22,"signupin");
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

window.project = loadProject(projectId);
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

window.tabStyler = {};
tabStyler.style = createStyle(buttonStyler.style,{fill:function(){return theme.messages;}});
tabStyler.hoverStyle = createStyle(buttonStyler.style,{fill:function(){return theme.message_hover;}});
tabStyler.clickStyle = tabStyler.hoverStyle;
tabStyler.styleOn = buttonStyler.style;
tabStyler.hoverStyleOn = buttonStyler.hoverStyle;
tabStyler.clickStyleOn = buttonStyler.hoverStyle;

window.tabPages = {
  "friends":"Friends",
  "profile":"Account",
  "shop":"Shop",
  "adminpanel":"Admin"
};
setTimeout(function(){
  var tabX = 5;
  window.tabList = {};
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
  tabList[Object.keys(tabPages)[0]].toggle = true;
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
  };
},0);
createPage("adminpanel");

// ----
// Shop
// ----

createPage("shop");
pageMap.shop.before = function() {
  format(theme.announcement,false,0,14,LEFT,TOP);
  text("You have Ⓒ "+user.balance+":",10,30);
  format(theme.announcement,false,0,24,CENTER,CENTER);
  text("Daily Item Shop\nComing Soon...",200,100);
  translate(0,286);
  format(theme.date,false,0,12,LEFT,BOTTOM);
  //text("Use CRTL+LEFT or CTRL+RIGHT to shift themes",0,1)
  text("Your Purchased Themes:",1,1)
  drawThemes();
  translate(0,-286);
};
window.drawThemes = function() {
  push();
  fill(theme.panel);
  rect(0,0,400,114,theme.bevel);
  translate(150,0);
  var keys = Object.keys(themeList);
  var size = {
    "-2":50,
    "-1":80,
    "0":100,
    "1":80,
    "2":50,
  };
  translate(-50-80-14,0)
  for (var i = -2; i <= +2; i++) {
    var t = themeList[keys[(i+selTheme+keys.length) % keys.length]];
    var s = size[i]/100;
    var h = 50*(1-s)/s;
    format(t.background,t.stroke,1);
    scale(s,s);
    if (t.background_image && t.background_image.width > 1) {
      noFill();
      beveledImage(t.background_image,0,7/s+h,100,100,t.bevel);
    }
    rect(0,7/s+h,100,100,t.bevel);
    textAlign(CENTER,BOTTOM);
    textSize(16);
    noStroke();
    fill(t.announcement);
    textFont(t.font || "Verdana");
    textStyle(t.text_style || NORMAL);
    text(t.name,50,60+h);
    textAlign(CENTER,TOP);
    textSize(8);
    text("By: "+t.creator,50,60+h);
    translate(100+7/s,0);
    scale(1/s,1/s);
  }
  pop();
  var button = function(x,l,a) {
    push();
    var hover = mouseRect(x,0,30,114);
    if (hover) {
      cursor(HAND);
      format(theme.button_hover,theme.button_stroke_hover);
    } else {
      format(theme.buttons,theme.button_stroke);
    }
    rect(x,0,30,114,theme.bevel);
    if (hover) fill(theme.button_text_hover);
    else fill(theme.button_text);
    textAlign(CENTER,CENTER);
    textSize(30);
    text(l,x+15,57+2);
    if (clicked && hover) {
      selectTheme(selTheme+a);
    }
    pop();
  }
  button(0,"<",-1);
  button(370,">",1)
}

// -------
// Friends
// -------

createPage("friends");
pageMap.friends.onopen = function() {
  loadProfile(user.name,function(p) {
    friendList.reset();
    outgoingList.reset();
    incomingList.reset();
    for (var i in p.friends) (function(i){
      loadProfile(i,function(p2){
        p2 = onloadprofile(p2);
        if (p2.friends[user.name]) {
          friendList.push(p2);
          p2.onclick = function(){
            user.unfriend(p2.name,function(){
              pageMap.friends.onopen();
            });
          };
        } else {
          outgoingList.push(p2);
          p2.onclick = function(){
            user.unfriend(p2.name,function(){
              pageMap.friends.onopen();
            });
          };
        }
        return p2;
      });
    })(i);
    for (var i in p.requests) (function(i){
      loadProfile(i,function(p2){
        p2 = onloadprofile(p2);
        incomingList.push(p2);
        p2.onclick = function(){
          user.friend(p2.name,function(){
            pageMap.friends.onopen();
          });
        };
        return p2;
      });
    })(i);
    return p;
  });
};
window.friendList = createListDiv("Mutual Friends",5,30,192.5,365,"friends");
window.outgoingList = createListDiv("Outgoing Friend Requests",202.5,30,192.5,180,"friends");
window.incomingList = createListDiv("Incoming Friend Requests",202.5,215,192.5,180,"friends");

// --------
// Profiles
// --------

var randcol = hsv(random(0,360),random(50,100),100)._array;
randcol = [randcol[0],randcol[1],randcol[2],1];
randcol = randcol.map(function(v){return floor(v*255);});
window.defaultData = {
  color: randcol,
  public: {
    chats: {},
  }
};

defaultProfile.color = [0,0,0,0];
window.defaultAvatar = loadImage("https://as2.ftcdn.net/v2/jpg/04/10/43/77/1000_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg");
window.onloadprofile = function(data) {
  data.old = JSON.parse(JSON.stringify(data));
  if (typeof data.avatar != 'string') return data;
  avatarBtn.img = defaultAvatar;
  if (data.avatar !== "default") loadImage(data.avatar,function(img) {
    data.avatar = img;
    if (data.public && data.name == user.name) avatarBtn.img = img;
  });
  data.avatar = defaultAvatar;
  var key;
  if (data.id) key = "last_active_"+data.id;
  else key = "last_active_user_"+data.name;
  getKeyValue(key,function(v){
    data.lastActiveAt = v || 0;
  });
  return data;
};

// old button drawer
window.drawButton2 = function(label,x,y,w,h,filler) {
  var hover = mouseRect(x,y,w,h);
  if (hover) {
    cursor(HAND);
    format(theme.button_hover,theme.button_stroke_hover);
  } else {
    fill(theme.buttons);
    format(theme.buttons,theme.button_stroke);
  }
  if (filler) filler(hover);
  rect(x,y,w,h,theme.bevel);
  fill(theme.text);
  noStroke();
  textAlign(CENTER,CENTER)
  text(label,x+w/2,y+h/2);
  //if (hover && clicked) playSound(clickSound);
  return hover;
}

// Draw profiles
window.drawProfileButtons = function(prof) {}
window.drawProfileScreen = function(prof) {
  if (!prof.displayname) return;
  var h = 390;
  if (prof.name == user.name) h -= 30;
  fill("#202020");
  rect(5,5,190,h,5);
  fill(prof.color);
  rect(5,5,190,60,5,5,0,0);
  fill("#202020");
  ellipse(50,60,60,60);
  fill("#101010");
  rect(10,90,180,270,5);
  format(255,false,0,18,LEFT,TOP);
  text(prof.displayname,15,92);
  textSize(12);
  text(prof.name,15,110);
  
  var coins = "Ⓒ "+prof.coins;
  text(coins,80,72.5);
  
  push();
  translate(0,130);
  
  textSize(10);
  textStyle(BOLD);
  text("ABOUT ME",15,0);
  translate(0,12.5);
  
  textSize(12);
  textStyle(NORMAL);
  text(prof.bio,15,0,180);
  translate(0,getLines(prof.bio,180).length*15);
  
  textSize(10);
  textStyle(BOLD);
  text("FCR MEMBER SINCE",15,0);
  translate(0,12.5);
  
  textSize(12);
  textStyle(NORMAL);
  text(new Date(prof.joinedAt||0).toString(),15,0,180);
  pop();
  
  var hover = mouseEllipse(50,60,50,50);
  //var rad = hover ? 52 : 50;
  var rad = 50;
  coloredAvatarImage(prof,50,60,rad);
  if (hover && mouseWentDown("left")) {
    prompt("Avatar image:",prof.old.avatar);
  }
  
  if (prof.name == user.name) return;
  
  drawProfileButtons(prof);
  
  var str = "+";
  if (prof.requests[user.name]) str = "-";
  var hoverfriend = drawButton2(str,165,365,25,25);
  if (hoverfriend && clicked) {
    if (str == "+") user.friend(prof.name);
    else user.unfriend(prof.name);
  }
}

_bindGraphicsMethod("coloredAvatarImage",function(prof,x,y,rad) {
  this.avatarImage(prof.avatar,"circle",x,y,rad);
  var c = prof.color;
  if (prof.avatar == defaultAvatar && typeof c == 'object' && c instanceof Array) {
    this.noStroke();
    this.fill(alpha(c,0.5));
    this.ellipse(x,y,rad,rad);
  }
  if (theme.avatar_stroke || theme.avatar_stroke === 0) {
    this.noFill();
    this.stroke(theme.avatar_stroke);
    this.ellipse(x,y,rad,rad);
  }
});

// -------
// Account
// -------

createPage("profile");
var profile;
pageMap.profile.onopen = function() {
  nameInput.placeholder = user.name;
  loadProfile(user.name,function(data){
    profile = data;
    nameInput.value = profile.displayname;
    nameInput.update();
    bioInput.value = profile.bio;
    bioInput.update();
    colorBtn.style.fill = color(profile.color||128);
  });
};
pageMap.profile.before = function() {
  if (!profile) return;
  format(255,false,0,12,LEFT);
  text("Display Name:",12.5,37.5);
  text("Color:",12.5,77.5);
  text("Avatar:",12.5,117.5);
  text("About Me:",12.5,207.5);
  
  textSize(12);
  
  translate(200,27.5);
  drawProfileScreen(profile);
  translate(-200,-27.5);
};

window.nameInput = createInput(false,7.5,43.5,190,22,"profile");
nameInput.validateinput = function(e) {
  if (e == "\n") return false;
};
nameInput.onchange = function() {
  user.update({displayname:nameInput.value||user.name});
};

window.colorBtn = createButton(false,7.5,83.5,190,22,"profile");
colorBtn.hoverStyle = colorBtn.style;
colorBtn.clickStyle = colorBtn.style;
colorBtn.onclick = function() {
  var col = colorBtn.style.fill.toString();
  var ncol = prompt("Paste hex of color: ",col) || col;
  try {
    var c = color(ncol);
    ncol = c._array;
    ncol = [ncol[0],ncol[1],ncol[2],1];
    ncol = ncol.map(function(v){return floor(v*255);});
    user.update({color:ncol});
    colorBtn.style.fill = color(c);
  } catch(e) {}
};

window.avatarBtn = createButton(false,7.5,123.5,190,72,"profile");
avatarBtn.addComponent("image",defaultAvatar);
avatarBtn.onclick = function() {
  var url = profile.avatarurl;
  if (url === "default") url = "";
  var nurl = prompt("Paste image: ",url);
  if (nurl === null) {
    user.update({avatar:"default"});
    avatarBtn.img = defaultAvatar;
  }
  if (!nurl) return;
  loadImage(nurl,function(img) {
    user.update({avatar:nurl});
    avatarBtn.img = img;
  });
};

window.bioInput = createInput(false,7.5,213.5,190,149,"profile");
bioInput.onchange = function() {
  user.update({bio:bioInput.value});
};

window.signOutButton = createButton("Sign Out",7.5,369,87.5,22.5,"profile");
signOutButton.onclick = function() {
  user.signOut(function(){
    tabList.home.click();
    setPage("signupin");
  });
};

window.deleteAccButton = createButton("Delete Acc",100,369,97.5,22.5,"profile");
deleteAccButton.setStyles(warningButtonStyler);
deleteAccButton.onclick = function() {
  var cred = prompt("Enter password to confirm deletion:","");
  if (!cred) return;
  user.delete(cred,function(){
    tabList.home.click();
    setPage("signupin");
  },prompt);
};

// ----
// Draw
// ----

window.clicked = false;
window.viewProfile = false;
// Draw Function
Event.mousePressed = function() {
  clicked = true;
};
function draw() {
  background(theme.background);
  if (theme.background_image) {
    image(theme.background_image,0,0,400,400);
  }
  FGUI.draw();
  if (viewProfile) {
    translate(200,0);
    drawProfileScreen(viewProfile);
    if (clicked && !mouseRect(5,5,190,390,5)) {
      viewProfile = false;
    }
    translate(-200,0);
  }
  var notify = user.data && user.data.public.notify;
  notification.visible = notify;
  clicked = false;
}

// -------------
// Notifications
// -------------

setInterval((function notify(){
  if (user.name) loadProfile(user.name);
  return notify;
})(),30000);

window.notifyUser = function(name,header,content,data) {
  if (!profileCache[name]) return;
  var obj = {};
  obj.project = projectId;
  obj.date = Date.now();
  obj.header = header;
  obj.content = content;
  obj.data = data;
  user.updatepublic(name,{
    notify:obj
  });
}

window.notification = createElement(5,5,200,100);
notification.style = createStyle(buttonStyler.style,{
  fill: function(){return theme.notifications;},
  stroke: function(){return theme.notification_stroke;},
});
notification.addComponent("button");
notification.content = function() {
  var notify = user.data.public.notify;
  if (!notify) return;
  format(theme.announcement,false,0,15,LEFT,TOP);
  text(notify.header||"(undefined)",this.x+5,this.y+5,this.width-10);
  var h = textBounds(notify.header||"(undefined)",this.width-10).height;
  format(theme.text,false,0,12,LEFT,TOP);
  text(notify.content||"",this.x+5,this.y+h+5,this.width-10);
  var h2 = textBounds(notify.content||"",this.width-10).height;
  textAlign(CENTER,CENTER);
  var s = mouseEllipse(this.x+this.width-12.5,this.y+12.5,15,15)*2;
  if (s) cursor(HAND);
  textSize(12+s);
  text("X",this.x+this.width-12.5,this.y+13.5);
  format(false,theme.text,1);
  ellipse(this.x+this.width-12.5,this.y+12.5,15+s,15+s);
  this.height = h+h2+5;
};
window.handleNotification = function() {};
notification.onclick = function() {
  var notify = user.data.public.notify;
  var s = mouseEllipse(this.x+this.width-12.5,this.y+12.5,15,15)*2;
  user.updatepublic(user.name,{
    notify:null
  });
  if (s) return;
  if (notify.project == projectId) {
    handleNotification(notify.data);
  } else {
    user.refer(notify.project,false,"&notify="+encodeURIComponent(JSON.stringify(notify.data)));
  }
}
notification.changecursor = false;
notification.drawers.push("content");
notification.visible = false;
setTimeout(function(){
  for (var i in pageMap) {
    pageMap[i].addElement(notification);
  }
},0);

// Misc

window.date = function(time) {
  
  var seconds = (Date.now() - time) / 1000;

  if (time == 0) return "never";

  var interval = floor(seconds / (365.25 * 24 * 60 * 60));
  if (interval == 1) return "1 year ago";
  else if (interval > 1) return interval + " years ago";
  
  interval = floor(seconds / (30.4375 * 24 * 60 * 60));
  if (interval == 1) return "1 month ago";
  else if (interval > 1) return interval + " months ago";
  
  interval = floor(seconds / (7 * 24 * 60 * 60));
  if (interval == 1) return "1 week ago";
  else if (interval > 1) return interval + " weeks ago";
  
  interval = floor(seconds / (24 * 60 * 60));
  if (interval == 1) return "1 day ago";
  else if (interval > 1) return interval + " days ago";
  
  interval = floor(seconds / (60 * 60));
  if (interval == 1) return "1 hour ago";
  else if (interval > 1) return interval + " hours ago";
  
  interval = floor(seconds / (60));
  if (interval == 1) return "1 minute ago";
  else if (interval > 1) return interval + " minutes ago";
  
  interval = floor(seconds);
  if (interval == 1) return "1 second ago";
  return interval + " seconds ago";
  
  //return new Date(time).toUTCString();
}

//Coins
setInterval((function coins(){
  for (var i = 0; i < 10; i++) setTimeout(function() {
    if (Date.now()-_lastEventTime >= 1000) return;
    if (!user.data) return;
    user.balance += 0.1;
  },random()*60000);
  return coins;
})(),60000);
//Activity
setInterval((function active(){
  if (!user.name) return active;
  setKeyValue("last_active_user_"+user.name,Date.now());
  return active;
})(),15000);

return {draw:draw};
})();

/* Credits - PLEASE DO NOT REMOVE

 - Project: Codemon
 - Credit: Developed By DragonFireGames
 - Remixer: (Your name)
 - Version: Beta Release 0.1.0

 My contact info:
 - Discord: DragonFire7z
 - Email: dragonfire7z@outlook.com
 contact me if you want.
 
 PS; Big Thanks to @Varrience & @Owokoyo for the JSON request mechanics.
     Big Thanks to @Ravage for Vault

 Be sure to check out my other games:

 Pumpkin Smasher 2:
 URL - https://pumpkin-smasher.onrender.com
 Server - https://discord.gg/NqnXXy8mNz
 
 Also check out the game lab forum
 https://gamelab.freeflarum.com

*/

/*
window.ownerName = "Your Name";
window.projectName = false; // Put project name here if u want
window.featuredLinks = { // Personalized Links
  "link1":"https://example.com",
};
//*/

window.tabPages = {
  "home":"Home",
  "deck":"Deck",
  "friends":"Friends",
  "profile":"Account",
  "shop":"Shop",
  "adminpanel":"Admin"
};

// ----
// Home
// ----

createPage("home");
pageMap.home.onopen = function() {
  getKeyValue("game_"+user.name,function(gid){
    if (gid) joinMatch(gid);
  });
  loadProfile(user.name,function(p) {
    challengeList.reset();
    for (var i in p.friends) (function(i){
      loadProfile(i,function(p2){
        p2 = onloadprofile(p2);
        if (p2.friends[user.name]) {
          challengeList.push(p2);
          p2.onclick = function(){
            var gid = randomId(8);
            notifyUser(p2.name,user.data.displayname+" challenged you to a match of Codemon","",{game:gid});
            joinMatch(gid);
          };
        }
        return p2;
      });
    })(i);
    return p;
  });
};
//var thumbnail = loadImage("");
pageMap.home.before = function() {
  //beveledImage(thumbnail,5,30,170,170,theme.bevel);
  image(cardback,5+170/7,30,170*5/7,170);
  format(theme.announcement,false,0,14,LEFT,TOP);
  text("Playing: Codemon\n - Cards Owned: "+Object.keys(user.codemonCards||{}).length+"/"+CardList.length+"\n - Wins: "+(user.data.codemonWins||0)+"\n - Losses: "+(user.data.codemonLosses||0),5,205);
};
var challengeList = createListDiv("Challenge Friends",180,30,215,365,"home");

var matchmakingbtn = createButton("Join Matchmaking",5,300,170,95,"home");
matchmakingbtn.style.textSize = 20;
matchmakingbtn.hoverStyle.textSize = 20;
matchmakingbtn.clickStyle.textSize = 20;
matchmakingbtn.onclick = function() {
  getKeyValue("matchmaking",function(gid){
    getKeyValue("match_"+gid+"_users",function(v){
      console.log(gid);
      console.log(v);
      if (!v) v = {};
      v[user.name] = user.data;
      setKeyValue("match_"+gid+"_users",v);
      joinMatch(gid,true);
      if (Object.keys(v).length >= 2) {
        setKeyValue("matchmaking",randomId(8));
      }
    });
  });
};

var game = {
  id: false,
  users: {},
  over: false,
};
function joinMatch(gid) {
  game = {
    id: gid,
    users: {},
    over: false,
  };
  //
  PlayerMap = {};
  InstMap = {};
  eventId = 0;
  currentTurn = false;
  currentEvent = false;
  //
  setPage("game");
  updateKeyValue("match_"+gid+"_users",function(v){
    if (!v) v = {};
    v[user.name] = user.data;
    return v;
  });
  setKeyValue("game_"+user.name,gid);
  watchKeyValue("match_"+gid+"_users",function(v){
    if (!v) v = {};
    game.users = v;
  });
}
function leaveMatch() {
  game.id = false;
  updateKeyValue("match_"+game.id+"_users",function(v){
    if (!v) v = {};
    delete v[user.name];
    return v;
  });
  setKeyValue("game_"+user.name,false,function(){
    setPage("home");
  });
  abandonKeyValue("match_"+game.id+"_users");
}

window.handleNotification = function(data) {
  if (data.game) {
    joinMatch(data.game);
  }
};

// ----
// Game
// ----

function createCardBack(back,filler,center) {
  var card = createGraphics(500,700);
  loadImage("https://studio.code.org/assets/logo-2acd4ebc69c447786b866b98034bb3c0777b5f67cd8bd7955e97bba0b16f2bd1.svg",function(logo) {
    var buf1 = createGraphics(500,700);
    buf1.background(back);
    buf1.noStroke();
    for (var i = 3; i >= 0; i--) {
      filler(buf1,i);
      var r = 200+i*i*50;
      buf1.ellipse(250,350,r,r);
    }
    center(buf1,logo);
    var buf2 = createGraphics(500,700);
    buf2.rect(0,0,500,700,30);
    buf1 = buf1.get();
    buf2 = buf2.get();
    buf1.mask(buf2);
    card.image(buf1,0,0,500,700);
    card.noFill();
    card.stroke(255);
    card.strokeWeight(10);
    card.rect(5,5,490,690,20);
  });
  return card;
}
var cardback = createCardBack("#00dfee",function(buf,i) {
  var h = i*10;
  buf.fill(0,173+h,188+h);
},function(buf,logo) {
  buf.image(logo,160,260,180,180);
});
var defeatedcardback = createCardBack(205,function(buf,i) {
  buf.fill(165+i*10);
},function(buf,logo) {
  buf.image(logo,160,260,180,180);
});
var mysterycard = createCardBack(40,function(buf,i) {
  buf.fill(80-i*10);
},function(buf) {
  buf.format(255,false,0,350,CENTER,CENTER);
  buf.text("?",250,385);
});

var rarityColors = {
  "God":"red",
  "Legendary":"gold",
  "Epic":"#8844ff",
  "Rare":"#44dddd",
  "Uncommon":"lime",
  "Common":"white",
};
var cardMap = {};
var ibuf = createGraphics(500,350);
function createCard(p) {
  p.onselect = p.onselect || function(){};
  p.ondefeat = p.ondefeat || function(){};
  p.onturn = p.onturn || function(){};
  p.tier = {
    "God":5,
    "Legendary":4,
    "Epic":3,
    "Rare":2,
    "Uncommon":1,
    "Common":0,
  }[p.rarity];
  p.isEX = p.isEX === undefined ? p.tier >= 3 : p.isEX;
  p.hpcol = p.hpcol === undefined ? 255 : p.hpcol;
  p.img = loadImage(p.image,function(img){
    var c = p.isEX ? {w:500,h:350} : {w:450,h:315};
    ibuf.clear();
    var bb = centerRect(img.width,img.height,c.w,c.h);
    bb.x += p.offx*(img.width-bb.w)/2, bb.y += p.offy*(img.height-bb.h)/2;
    ibuf.image(img,bb.x,bb.y,bb.w,bb.h,0,0,c.w,c.h);
    img = ibuf.get(0,0,c.w,c.h);
    ibuf.clear();
    ibuf.noStroke();
    if (p.isEX) ibuf.rect(0,0,500,350,30,30,0,0);
    else ibuf.rect(0,0,450,315,10);
    var mask = ibuf.get(0,0,c.w,c.h);
    img.mask(mask);
    p.img = img;
    updateCardGraphics(p);
  });
  p.card = cbuf;
  cardMap[p.name] = p;
  return p;
}
var cbuf = createGraphics(500,700);
function showCardGraphics(inst,x,y,wid,hig,selmove,nodraw) {
  var p = inst.parent||inst;
  var rcol = rarityColors[p.rarity];
  // idk
  cbuf.clear();
  //
  cbuf.noStroke();
  cbuf.fill("#141e1f");
  cbuf.rect(0,0,500,700,30);
  //
  if (p.isEX) {
    cbuf.image(p.img,0,0,500,350);
  } else {
    cbuf.image(p.img,50,60,400,280);
    cbuf.format(false,rcol,5);
    cbuf.rect(50,60,400,280,10);
  }
  //
  if (p.isEX) {
    cbuf.format("rgba(0,0,0,0.6)",0,2,30);
  } else {
    var nc = color(rcol.toString());
    nc._array[3] = 0.2;
    cbuf.format(nc,rcol,2,30);
  }
  var w = cbuf.textWidth(p.name)+40;
  cbuf.beginShape();
  cbuf.vertex(25,15);
  cbuf.vertex(15,55);
  cbuf.vertex(w,55);
  cbuf.vertex(10+w,15);
  cbuf.endShape(CLOSE);
  //
  cbuf.noStroke();
  cbuf.fill(rcol);
  cbuf.textSize(20);
  w = cbuf.textWidth(p.rarity)+35;
  cbuf.beginShape();
  cbuf.vertex(23,50);
  cbuf.vertex(15,75);
  cbuf.vertex(w,75);
  cbuf.vertex(8+w,50);
  cbuf.endShape(CLOSE);
  //
  cbuf.format(255,false,0,30,LEFT,CENTER);
  cbuf.text(p.name,32.5,35);
  cbuf.textSize(20);
  cbuf.fill(0);
  cbuf.text(p.rarity,29,62.5);
  cbuf.textSize(30);
  cbuf.fill(p.hpcol);
  cbuf.textAlign(RIGHT,CENTER);
  cbuf.text(p.def+" DEF",480,35);
  if (inst.hp !== p.def) {
    cbuf.fill(inst.hp<p.def?"red":"green");
    cbuf.stroke(0);
    cbuf.strokeWeight(2);
    cbuf.text((inst.hp<p.def?"-":"+")+abs(inst.hp-p.def)+" HP",480,65);
  }
  //
  cbuf.format(255,false,0,p.tsize||19,LEFT,TOP);
  cbuf.text(p.desc,20,355,460);
  for (var i = 0; i < inst.moves.length; i++) {
    cbuf.textSize(inst.moves[i].tsize||19);
    cbuf.textAlign(LEFT,TOP);
    cbuf.text(inst.moves[i].name+":\n"+inst.moves[i].desc,26,435+85*i,455,70);
    cbuf.textSize(19);
    cbuf.textAlign(RIGHT,TOP);
    cbuf.text(inst.moves[i].cost+" ⚛ "+inst.moves[i].cooldown+"❄",26,435+85*i,455,70);
  }
  ///
  cbuf.strokeWeight(5);
  //cbuf.stroke("#00adbc");
  for (var i = 0; i < inst.moves.length; i++) {
    if (!inst.parent || inst.activeMove(i)) {
      cbuf.stroke(rcol);
      inst.moves[i].hovering = mouseRect2(x,y,wid,hig,500,700,20,430+85*i,460,75);
      if (inst.moves[i].hovering) cbuf.fill("rgba(255,255,255,0.6)");
      else cbuf.noFill();
      if (inst.moves[i].hovering && clicked && selmove) selmove(i);
    } else {
      cbuf.noFill();
      cbuf.stroke(150);
    }
    cbuf.rect(20,430+85*i,460,75,10);
  }
  ///
  cbuf.noFill();
  cbuf.stroke(rcol);
  cbuf.strokeWeight(10);
  cbuf.rect(5,5,490,690,20);
  ///
  if (!nodraw) {
    image(cbuf,x,y,wid,hig);
    if (inst.flavor && mouseRect2(x,y,wid,hig,500,700,20,355,460,30)) {
      drawFlavor(inst.flavor);
    }
    for (var i = 0; i < inst.moves.length; i++) {
      if (inst.moves[i].flavor && inst.moves[i].hovering) {
        drawFlavor(inst.moves[i].flavor);
      }
    }
  }
  return cbuf;
}
function updateCardGraphics(inst) {
  inst.card = showCardGraphics(inst,0,0,0,0,0,1).get();
}
function mouseRect2(bx,by,bw,bh,cw,ch,x,y,w,h) {
  y = by+y/ch*bh;
  h = h/ch*bh;
  x = bx+x/cw*bw;
  w = w/cw*bw;
  return mouseRect(x,y,w,h);
}
function centerRect(w1,h1,w2,h2) {
  var fatness1 = w1 / h1;
  var fatness2 = w2 / h2;

  var scale;
  if (fatness2 >= fatness1) scale = w1 / w2;
  else scale = h1 / h2;
  var w = w2 * scale;
  var h = h2 * scale;

  var xCenter = 0 + (w1 / 2);
  var yCenter = 0 + (h1 / 2);

  var x = xCenter - (w / 2);
  var y = yCenter - (h / 2);

  return { x:x, y:y, w:w, h:h };
}
var savebuf = createGraphics(500,700);
function saveCard(card,name) {
  if (typeof card == "string") {
    card = Inst(card);
    card.draw();
  }
  if (card.parent) card = card.parent.card;
  if (card.card) card = card.card;
  //
  savebuf.image(card,0,0,500,700);
  saveCanvas(savebuf,name||card.player.name);
}
function saveAllCards() {
  for (var i in cardMap) saveCard(i);
  saveCard(cardback,"Back");
  saveCard(defeatedcardback,"DefeatedBack");
  saveCard(mysterycard,"Mystery");
}

/*
Fortified: You have good project security, increasing your defense rating by [LEVEL/2]%
EMP: Your first ability becomes the Electro-Magnetic Pulse ability. (this will allow your card to disable one of the opponent's card for [LEVEL/3] turns)
Prediction. Model your opponent's data and predict the next cards (can only be used once per match duh and allows you to see [LEVEL] cards of the deck)
Nanites: Your HP and defense are brought down by 1/2, but your cooldowns are brought down by [LEVEL/16] (8 is the max for any skill)
Intelligent: You use [LEVEL*5]% less points.
Clarity: your code is clearer and increases HP by 50\*LEVEL
Hacker: deal an extra 25*[LEVEL] damage to the targeted cards
Determined: you are so hard working that upon death, this card will return to the bottom of the deck with [100*LEVEL/8]% of its full health
Collaborative coder: Heals teammates each turn by 10*[LEVEL]
Bug Catcher: your code is less likely to catch bugs, effect of negative status effects reduced by [20+10*LEVEL]%
*/

var EffectList = [
  {
    name:"Invulnerable",
    desc:function(lvl) {
      return "This card takes "+(lvl*100)+"% less damage.";
    },
    //icon:"",
    random:false
  },
  {
    name:"Arrogant",
    desc:function(lvl) {
      return "This card refuses help and heals "+(lvl*100)+"% less.";
    },
    //icon:"",
    random:false
  },
  {
    name:"Virus",
    desc:function(lvl) {
      return "This card takes "+lvl+" damage each turn.";
    },
    //icon:"",
    random:true
  },
  {
    name:"Virus 2.0",
    desc:function(lvl) {
      return "This card's health is reduced "+lvl+"% each turn.";
    },
    //icon:"",
    random:true
  },
  // not implemented
  {
    name:"Frozen",
    desc:function(lvl) {
      return "This card cannot move, has a "+(lvl*100)+"% chance of unfreezing each turn.";
    },
    //icon:"",
    random:false
  },
  {
    name:"Laggy",
    desc:function(lvl) {
      return "This card has a "+(lvl*100)+"% chance of being unable to move.";
    },
    //icon:"",
    random:false
  },
  {
    name:"Optomized",
    desc:function(lvl) {
      return "This card's cooldowns are reduced by "+lvl+" turns.";
    },
    //icon:"",
    random:true
  },
  {
    name:"Rate Limited",
    desc:function(lvl) {
      return "This card's cooldowns are increased by "+lvl+" turns.";
    },
    //icon:"",
    random:true
  },
  {
    name:"Genius",// Maybe this should be "inspired"
    desc:function(lvl) {
      return "This card uses "+lvl+" less points.";
    },
    //icon:"",
    random:true
  },
  {
    name:"Stupid",
    desc:function(lvl) {
      return "This card uses "+lvl+" more points.";
    },
    //icon:"",
    random:true
  },
  // What should these do
  {
    name:"Inspired",
    desc:function(lvl) {
      return "idk";
    },
    //icon:"",
    random:true
  },
  {
    name:"Confused",
    desc:function(lvl) {
      return "idk";
    },
    //icon:"",
    random:true
  },
  {
    name:"Buggy",
    desc:function(lvl) {
      return "idk";
    },
    //icon:"",
    random:true
  },
];
var CardList = [
  {
    name:"DragonFireGames", // Name
    rarity:"Legendary", // Rarity
    hp:5200, // Starting HP
    def: 5000, // Max HP for heals
    image:"https://mcdn.wallpapersafari.com/medium/75/47/2gJuCk.jpg", // Thumbnail
    offx: 1, // Offset the thumbnail in the x direction, range: (-1,1)
    offy: 0, // Offset the thumbnail in the y direction, range: (-1,1)
    hover: "The dev of FCR and Codémon.", // Description from hover
    desc: "The developer of FCR. Good at game development as well but loves tech demos. Takes pride in their use of keyValues & outside sites. Made Codémon.", // Long description
    //tsize: 19, // description text size (defaults to 19)
    //hpcol: 255, // color of hp (defaults to white)
    //isEX: true // Defaults to true for legendary/epic/god cards, false otherwise
    effectModifiers: { // Status modifiers
      "Laggy": 0.5, // If a number it will multiply the lvl by that number
      "Frozen": function(e) { // Function to apply to the effect
        e.turns /= 2;
        return e;
      },
    },
    moves:[{ // List of all moves
      name:"Admin", // Name
      desc:"Strike your opponent down for 300 ATK. Each time this move is used, its damage increases by 100 ATK.", // What does it do?
      //tsize: 19, // description text size (defaults to 19)
      cost:1, // Cost in points
      cooldown:1, // How many turns before it can be used again
      target:"opp", // Target: "opp" "self" "none" or a custom function
      use:function(sel,self) { // Code for how it works:
        sel.hit(300+self.admindmg+sel);
        self.admindmg += 100;
      },
      //flavor: "text", // Optional flavor text
    },{
      name:"Lag Bomb",
      desc:"Lag out your opponent with 3D minecraft for 8 turns. Deal 200 ATK.",
      cost:3,
      cooldown:1,
      target:"opp",
      use:function(sel,self) {
        sel.hit(200);
        sel.giveEffect("Laggy",0.5,8);
      },
      flavor: "\"Just get a better PC\"",
    },{
      name:"Special - Reflection",
      desc:"Hack code.org and deal twice as much damage as health missing by all of your cards in your hand.",
      cost:5,
      cooldown:2,
      target:function(use,inst,opp,self) { // Target will be run only once on one client | WARNING: | do not modify anything here
        var dmg = 0;
        for (var i = 0; i < self.hand.length; i++) {
          dmg += max(self.hand[i].def-self.hand[i].hp,0);
        }
        dmg *= 2;
        opp.hand.pick(function(sel){
          use(sel,dmg);
        });
      },
      use:function(sel,dmg) { // Use will be run on both clients | WARNING: | do not put random functions or card pickers in here
        sel.hit(dmg);
      },
    }],
    //flavor: "text", // Optional flavor text
    setup:function(inst) { // Called when card instance is created
      inst.admindmg = 0;
    },
    //onselect:function(inst,opp,self) { // Called when card enters hand (optional)
    //  // Code here
    //},
    //onturn:function(inst,opp,self) { // Called every turn in hand
    //  // Code here
    //},
    ondefeat:function(killer,inst,opp,self) { // Called when card defeated (optional)
      killer.hit(100); // Hits the killer for 100 HP
    },
    profile: "https://gamelab.freeflarum.com/u/DragonFireGames"
  },
  {
    name:"Ravage",
    rarity:"Legendary",
    hp:6000,
    def:6000,
    image:"https://static.wikia.nocookie.net/solo-leveling/images/c/c3/Gunhee1.jpg",
    offx: 0,
    offy: -1,
    hover: "Former CDO daddy.",
    desc: "Former CDO scripter, specializing in every non-external part of it. Hacked the forum to get Owner role. Now gone.",
    hpcol: 200,
    modifiers: {
      "Confused":0,
      "Irritable":1.5,
      "Frozen":0.3,
    },
    moves:[{
      name:"Impenetrable Vault",
      desc:"Make this card invulnerable for the next turn.",
      cost:1,
      cooldown:2,
      target:"none",
      use:function(inst){
        inst.giveEffect("Invulnerable",1,1);
      }
    },{
      name:"Head Admin",
      desc:"Strike your opponent down for 400 ATK. Each time this card is used it's damage increases by 125 ATK.",
      cost:3,
      cooldown:1,
      target:"opp",
      use:function(sel,inst) {
        sel.hit(400+inst.admindmg);
        inst.admindmg += 125;
      },
      flavor: "Hide the pain Harold...."
    },{
      name:"Special - Hack",
      desc:"Hack any user's account other than Owokoyo's and use any ability. Can only be used every other turn.",
      cost:5,
      cooldown:2,
      target:function(use,inst,opp,self) {
        var n;
        while (!n || !CardMap[n] || n === "Owokoyo") {
          n = prompt("Enter name:"); // I'm lazy
        }
        var a;
        var abilityDesc = "Enter ability number:\n";
        for (var i = 1; i <= CardMap[n].moves.length; i++) {
          abilityDesc += i+") "+CardMap[n].moves[i].name;
        }
        while (a < 0 || a >= CardMap[n].moves.length) {
          a = promptNum(abilityDesc)-1; // I'm lazy
        }
        //
        CardMap[n].moves[a].setup(inst);
        CardMap[n].moves[a].target(function(){
          arguments.unshift(inst);
          arguments.unshift(n);
          arguments.unshift(a);
          use.apply(null,arguments);
        },inst,opp,self);
      },
      use:function(inst,n,a) {
        CardMap[n].moves[a].use.apply(inst,arguments.slice(3));
      }
    }],
    setup:function(inst) {
      inst.admindmg = 0;
    },
    profile: "https://gamelab.freeflarum.com/u/Ravage"
  },
  {
    name:"Owokoyo",
    rarity:"God",
    hp:6969,
    def:6969,
    image:"https://pngimg.com/uploads/pacman/pacman_PNG6.png",
    offx: 1,
    offy: -1,
    hover: "The god of Code.org.",
    desc: "By far the single greatest CDO user to ever exist. Founded almost every known exploit and contributed to every Code.org field from 3D to networking.",
    tsize: 18.5,
    isEX: false,
    modifiers: {
      //"Immune to everything except Arrogant.";
    },
    moves:[{
      name:"Script it",
      desc:"Make a custom script which hacks the opponent's projects. Half the health of your opponent.",
      cost:1,
      cooldown:1,
      target: "opp",
      use:function(sel) {
        sel.hit(sel.hp/2);
      }
    },{
      name:"Special - Infinite Stasis",
      desc:"Disables a card for 10 turns.",
      cost:3,
      cooldown:15,
      target: "opp",
      use:function(sel) {
        sel.giveEffect("Frozen",1,10);
      }
    },{
      name:"Special - Holy Aura", //which is us supporting him :)
      desc:"Deal the sum of all your hand's legend cards' HP divided by 10 to every card in the opponent's hand.",
      cost:5,
      cooldown:2,
      target: "none",
      use:function(inst,opp,self) {
        var dmg = self.hand.reduce(function(a,e){return a+(e.rarity=="Legendary"?e.hp:0)});
        dmg /= 10;
        for (var i = 0; i < opp.hand.length; i++) {
          opp.hand[i].hit(dmg);
        }
      }
    }],
    profile: "https://gamelab.freeflarum.com/u/imreallyhuman",
  },
  {
    name:"Varrience",
    rarity:"Legendary",
    hp:4800,
    def:5150,
    image:"https://i.ibb.co/hRrYHWx/avatar.png",
    offx: 0,
    offy: -1,
    hover: "Mysterious console master.",
    desc: "A mysterious and talented developer. Master of the console, Varrience has countless intriguing games and demos both on and off code.org.",
    moves:[{
      name:"Hack",
      desc:"Hack your opponent dealing 400 ATK, if opponent dies, put the most recently defeated card in deck at 1/4 HP",
      cost:1,
      cooldown:1,
      target: "opp",
      use:function(sel,inst,opp,self) {
        sel.hit(400);
        if (sel.hp < 0 && self.defeated.length > 0) {
          var revive = self.defeated.pop();
          revive.hp = revive.parent.hp/4;
          self.deck.push(revive);
        }
      }
    },{
      name:"Script it",
      desc:"Make a custom script which hacks the opponents projects. Half the health of your opponent.",
      cost:3,
      cooldown:5,
      target: "opp",
      use:function(sel) {
        sel.hit(sel.hp/2);
      }
    },{
      name:"Special - Rebound",
      desc:"A base of 200 ATK which will be multiplied by 2x every time it is used against that card. This card cannot die this turn.",
      cost:3,
      cooldown:1,
      target: "opp",
      use:function(sel,inst) {
        sel.rebounds = sel.rebounds || 0;
        sel.hit(200*pow(2,sel.rebounds));
        sel.rebounds++;
        inst.giveEffect("Invulnerable",1,1);
      }
    }],
    profile: "https://gamelab.freeflarum.com/u/Varrience"
  },
  {
    name:"[WUT] Adam",
    rarity:"Legendary",
    hp:6000,
    def:5500,
    image:"https://gamelab.freeflarum.com/assets/files/2024-04-07/1712457317-129604-mii2hq.jpg",
    //image:"https://i.ibb.co/xJsJrct/IMG-8642.jpg",
    offx: 0,
    offy: 0,
    hover: "The forum's Owner.",
    desc: "The self-proclaimed pioneer of CDO communications. Also likes Miis! Owns the forum and created the brendan chat format.",
    hpcol: 0,
    moves:[{
      name:"Silence",
      desc:"Silently ban one of your opponent's cards, preventing them from being used for 3 turns.",
      cost:2,
      cooldown:4,
      target: "opp",
      use:function(sel) {
        sel.giveEffect("Frozen",1,3);
      },
      flavor: "... wench!"
    },{
      name:"Impersonate",
      //desc:"Copy the moves of any card in play. You cannot switch or cancel until this card or the other card dies.",
      desc:"Transform this card into any of your opponent's cards besides Owokoyo. You cannot switch or cancel this.",
      cost:3,
      cooldown:1,
      target: "opp",
      use:function(sel,inst,opp,self) {
        var i = self.hand.indexOf(inst);
        self.hand[i] = Inst(sel.parent.name);
        self.hand[i].parent.onselect(self.hand[i],opp,self);
        self.hand[i].hp = min(inst.hp,self.hand[i].hp);
        self.hand[i].effects = inst.effects;
      }
    },{
      name:"Special - Mercy Kill",
      desc:"Instantly defeat any cards in the opponent's hand that are on low HP.",
      cost:7,
      cooldown:1,
      target: "none",
      use:function(inst,opp,self) {
        for (var i = 0; i < opp.hand.length; i++) {
          var o = opp.hand[i];
          var percent = o.hp/o.parent.hp;
          var defeatMap = {
            "Common":0.45,
            "Uncommon":0.35,
            "Rare":0.275,
            "Epic":0.2,
            "Legendary":0.15,
            "God":0.1,
          };
          if (percent <= defeatMap[o.rarity]) o.hp = 0;
        }
      }
    }],
    profile: "https://gamelab.freeflarum.com/u/wutadam",
  },
  {
    name:"Ziriksi",
    rarity:"Legendary",
    hp:5600,
    def: 4800,
    image:"https://yt3.googleusercontent.com/Jrmv02I0t17PVoiBGowx7U6JSqPcCnLhqytsFClaCbAsnprFbqV_JmvUqB0pAosDN9R63DEEjQ=s176-c-k-c0x00ffffff-no-rj",
    offx: 1,
    offy: 0,
    hover: "Ancient Code.org master.",
    desc: "A long-forgotten master of Code.org. Made the first GameLab chat.",
    hpcol: 0,
    modifiers: {
      "Confused":0,
      "Backdoored":1.1
    },
    moves:[{
      name:"Kick",
      desc:"Kicks the opponent so they have to rejoin. Does 400 ATK just for the inconvenience of making the opponent do that.",
      cost:0,
      cooldown:3,
      use:function() {
        OppPlayer.hand.pick(function(opp){opp.hit(400)});
      }
    },{
      name:"Optimise",
      desc:"Optimise your code, decreasing one of your card's cooldowns by 1.3x",
      cost:1,
      cooldown:5,
      target:"self",
      use:function(sel) {
        for (var i = 0; i < sel.moves.length; i++) {
          sel.moves[i].cooldown /= 1.3;
        }
      }
    },{
      name:"Special - Dark Sage",
      desc:"Spread your dark knowledge to others. Deal 400 DMG to every card in the opponent's hand.",
      cost:5,
      cooldown:4,
      target:"none",
      use:function(inst,opp) {
        for (var i = 0; i < opp.hand.length; i++) {
          opp.hand[i].hit(400);
        }
      }
    }],
    //profile: "https://gamelab.freeflarum.com/u/",
  },
  {
    name:"Ackvonhuelio",
    rarity:"Epic",
    hp:4200,
    def:4000,
    image:"https://gamelab.freeflarum.com/assets/avatars/dVtSoXAWZBhz7BKZ.png",
    offx: 0,
    offy: 0,
    hover: "KA devotee.",
    desc: "A pretty cool guy who made some stuff on KA, and insists on spreading the faith to others like a good KA missionary would do. Not a narcissist.",
    modifiers: {
      "Virus":0,
      "Tired":0,
      "Arrogant":3,
    },
    moves:[{
      name:"Stall",
      desc:"Get an extra point to help stall the game. Does no damage.",
      cost:1,
      cooldown:3,
      target:"none",
      use:function(inst,opp,self) {
        self.points += 2;
      }
    },{
      name:"Disable",
      desc:"One of your opponent's attacks will permanently cost 2 more energy.",
      cost:3,
      cooldown:2,
      target: function(use,inst,opp,self) {
        var sel = opp.hand.random();
        var i = floor(random()*sel.moves.length);
        use(sel,i);
      },
      use:function(sel,i) {
        sel.moves[i].cost += 2;
      }
    },{
      name:"KA Pestering",
      desc:"Yeah, yeah, we get it. Deal 350 ATK times the number of times this move has been used. Give yourself Arrogant.",
      cost:6,
      cooldown:1,
      target: "opp",
      use:function(sel,inst) {
        inst.usedKA++;
        sel.hit(this.usedKA*350);
        inst.giveEffect("Arrogant",3,3);
      }
    }],
    onsetup: function(inst) {
      inst.usedKA = 0;
    },
    profile: "https://gamelab.freeflarum.com/u/ackvonhuelio",
  },
  {
    name:"gZany",
    rarity:"Epic",
    hp:3600,
    def: 3800,
    image:"https://gamelab.freeflarum.com/assets/files/2024-01-15/1705280431"+"-"+"816010-card-game-image.png",
    offx: 1,
    offy: 0,
    hover: "OG Codémon dev.",
    desc: "Formerly Gabriel, The og creator of the card game. Has no actual talent except thinking up game ideas.",
    moves:[{
      name:"Hi-Typing",
      desc:"Type at 1000 wpm bypassing your opponents comprehension while dealing 300 ATK.",
      cost:2,
      cooldown:1,
      target:"opp",
      use:function(sel) {
        sel.hit(300);
      }
    },{
      name:"Suit and Tie",
      desc:"Transfer all status's on this card to your opponent.",
      cost: 3,
      cooldown: 1,
      target:"opp",
      use:function(sel,inst) {
        for (var i in inst.effects) {
          opp.giveEffect(i,effects[i].lvl,effects[i].turns);
        }
        inst.effects = {};
      }
    },{
      name:"Special - Braincell swarm",
      desc:"Use brain cells to overload your opponent with knowledge while dealing 500 ATK. Gives the Stupid effect.",
      cost:6,
      cooldown:1,
      target:"opp",
      use:function() {
        opp.hit(500);
        opp.giveEffect("Stupid",0.6,4);
      }
    }],
    profile: "https://gamelab.freeflarum.com/u/gZany",
  },
  {
    name:"Colack",
    rarity:"Epic",
    hp:1001,
    def:999,
    image:"https://colack.github.io/Joker-Persona-5-feature.png",
    offx: 0,
    offy: 0,
    hover: "Nonsensical forum user.",
    desc: "Wouldn't the world be better off if we took nonsense more seriously? | Technical Card Type | Helped A1r with Jooz for a bit",
    isEX: false,
    moves:[{
      name:"Gamble",
      desc:"Flip a coin. If heads, double your points, otherwise half them.",
      cost:1,
      cooldown:0,
      target:function(use,inst,opp,self) {
        use(randomNumber(0,1),self,opp);
      },
      use:function(r,self,opp) {
        if (r == 0) self.points /= 2;
        if (r == 1) self.points *= 2;
      }
    },{
      name:"Variations on a cloud",
      desc:"Shuffle this card and the rest of your hand back into your deck, then draw 4 cards.",
      cost:3,
      cooldown:0,
      target:function(use,inst,opp,self) {
        var l = self.deck.length;
        var r = [];
        for (var i = 0; i < self.hand.length; i++) {
          r.push(randomNumber(0,l+i));
        }
        use(r,opp,self);
      },
      use:function(r,opp,self) {
        for (var i = self.hand.length-1; i >= 0; i--) {
          var sel = self.hand[i].pop();
          self.deck.splice(r[i],0,sel);
          sel.parent.onselect(sel,opp,self);
        }
      }
    },{
      name:"Special - &",
      desc:"Turn the opponent's card into the Colack card",
      cost:8,
      cooldown:5,
      target:"opp",
      use:function(sel,inst,opp,self) {
        var i = opp.hand.indexOf(sel);
        opp.hand[i] = Inst("Colack");
      },
      flavor:"You've become me, Fun, huh?"
    }],
    profile: "https://github.com/Colack",
  },
  {
    name:"Peptobepto",
    rarity:"Rare",
    hp:2000,
    def:2400,
    image:"https://wallpaperaccess.com/full/3802771.jpg",
    offx: 0,
    offy: -0.4,
    hover: "Proj3kt R3d L3ader.",
    desc: "Most known for leading project r3d. Made bad apple on applab. Pretty good hacker & python coder as well.",
    isEX: true,
    moves:[{
      name:"Fart",
      desc:"Release a big smelly fart on your opponent dealing 30 ATK every turn",
      cost:1,
      cooldown:1,
      target: "opp",
      use:function(sel) {
        sel.giveEffect("Virus",30);
      }
    },{
      name:"Project R3d",
      desc:"Hack the chat and deal 200 ATK.",
      cost:2,
      cooldown:1,
      target: "opp",
      use:function(sel) {
        sel.hit(200);
      }
    },{
      name:"Special - Crash Chat",
      desc:"Instantly defeat both this card and the opponent's card.",
      cost:4,
      cooldown:1,
      target: "opp",
      use:function(sel,inst) {
        sel.hit(Infinity);
        inst.hit(Infinity);
      }
    }],
    profile: "https://gamelab.freeflarum.com/u/peptobepto",
  },
  {
    name:"Makbran",
    rarity:"Rare",
    hp:2000,
    def:2500,
    image:"https://i.ibb.co/R9pnR4y/makbran.png",
    offx: 0,
    offy: -0.25,
    hover: "Brutal Mayhem creator.",
    desc: "Veteran creator known for making quality games. Hasn't been seen in a while",
    moves:[{
      name:"Procrastinate",
      desc:"Has a 50% chance that your next attack will deal double damage (stacks).",
      cost:1,
      cooldown:1,
      target:function(use,inst,opp,self) {
        use(randomNumber(0,1),inst,opp,self);
      },
      use:function(r,inst,opp,self) {
        if (r == 0) return;
        inst.modifier *= 2;
      }
    },{
      name:"Polished work",
      desc:"Strike opponent for 300 ATK",
      cost:3,
      cooldown:1,
      target:"opp",
      use:function(sel,inst) {
        sel.hit(300*inst.modifier);
        inst.modifier = 1;
      }
    },{
      name:"Ultra-Polished work",
      desc:"Strike opponent for 500 ATK",
      cost:5,
      cooldown:3,
      target:"opp",
      use:function(sel,inst) {
        sel.hit(500*inst.modifier);
        inst.modifier = 1;
      }
    }],
    setup:function(inst){
      inst.modifier = 1;
    },
    profile: "https://gamelab.freeflarum.com/u/Makbran",
  },
  {
    name:"LGM Productions",
    rarity:"Rare",
    hp:2000,
    def:1800,
    image:"https://avatars.githubusercontent.com/u/96096550?v=4",
    offx: 0,
    offy: -0.4,
    hover: "NPC forum user.",
    desc: "Host of the LGM Awards. Doesn't really do much.",
    moves:[{
      name:"Critic",
      desc:"Criticize your opponent and deal 150 ATK",
      cost:1,
      cooldown:1,
      target:"opp",
      use:function(sel) {
        sel.hit(150);
      },
      flavor: "EMOTIONAL DAMAGE"
    },{
      name:"Special - Award & Present",
      desc:"Roll a dice, the number of that dice x500 is how much extra damage you do. This card is removed after you use the ability.",
      cost:2,
      cooldown:1,
      target:function(use,inst,opp,self) {
        opp.hand.pick(function(sel){
          use(randomNumber(1,6),sel,inst);
        });
      },
      use:function(r,sel,inst) {
        sel.hit(500 * r);
        inst.health = 0;
      }
    }],
    profile: "https://gamelab.freeflarum.com/u/LGM_Productions",
  },
  {
    name:"MonsterYT_DaGamer",
    rarity:"Uncommon",
    hp:800,
    def:800,
    image:"https://i.ibb.co/PQ5kzgb/monsteryt.png",
    offx: 0,
    offy: 1,
    hover: "CDO Exploiter.",
    desc: "Former CDO Exploiter, Mostly known for causing CHA0s, C4ALAM1TY, and a lot of H4V0C",
    moves:[{
      name:"Kick",
      desc:"Kicks the opponent so they have to rejoin. Does 50 ATK just for the inconvenience of making the opponent do that.",
      cost:1,
      target:"opp",
      use:function(sel,inst) {
        sel.hit(50*inst.modifier);
      },
    },{
      name:"Bypass",
      desc:"Find a way to bypass the anticheat. Increases damage by 1.15x.",
      cost:3,
      cooldown:10,
      target:"none",
      use:function(inst) {
        inst.modifier*=1.15;
      }
    },{
      name:"Special - Rate Limit",
      desc:"Stops the opponent from attacking for 2 turns",
      cost:7,
      cooldown:3,
      target:"opp",
      use:function(sel) {
        sel.giveEffect("Frozen",1,2);
      }
    }],
    setup:function(inst){
      inst.modifier = 1;
    },
    profile: "https://gamelab.freeflarum.com/u/MonsterYT_DaGamer",
  },
  {
    name:"TNitro",
    rarity:"Uncommon",
    hp:700,
    def:650,
    image:"https://i.ibb.co/wgZLtyr/image.png",
    offx: 0,
    offy: 0,
    hover: "Tatertale dev.",
    desc: "An unworthy opponent. A totally real potato, he is known for making Tatertale, but that's pretty much it.",
    moves:[{
      name:"Ragequit",
      desc:"Create some impossible game that the opponent will ragequit, dealing 100 ATK.",
      cost:2,
      cooldown:1,
      target:"opp",
      use:function(sel,inst) {
        sel.hit(100);
      },
    },{
      name:"The Sans",
      desc:"Do nothing and become immune to the next attack.",
      cost:5,
      cooldown:3,
      target:"none",
      use:function(inst) {
        inst.giveEffect("Invulnerable",1,1);
      }
    },{
      name:"Special - Health Drain",
      desc:"Steal 250 HP from the opponent. Unaffected by defense or status effects.",
      cost:7,
      cooldown:1,
      target:"opp",
      use:function(sel,inst) {
        sel.hp -= 250;
        inst.hp += 250;
      },
    }],
    profile: "https://gamelab.freeflarum.com/u/TNitro7669",
  },
  {
    name:"Kid",
    rarity:"Uncommon",
    hp:400,
    def:700,
    image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9b35482-4ca9-4fdf-a5b5-fc8c0573f37b/dgd6cp2-71225a45-46cb-400b-80d8-388dc8eb9c89.png/v1/fit/w_500,h_500,q_70,strp/cute_anime_boy_looking_at_the_falling_stars_by_ryotasucks_dgd6cp2-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTAwIiwicGF0aCI6IlwvZlwvYTliMzU0ODItNGNhOS00ZmRmLWE1YjUtZmM4YzA1NzNmMzdiXC9kZ2Q2Y3AyLTcxMjI1YTQ1LTQ2Y2ItNDAwYi04MGQ4LTM4OGRjOGViOWM4OS5wbmciLCJ3aWR0aCI6Ijw9NTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.z4jBaoyA17prlR57HiAsAhufTAWoKjKit05bPryFiWE",
    offx: 0,
    offy: 0,
    hover: "Cool's partner.",
    desc: "A coder who partners with another coder named cool to make a variation of projects in replit.com and code.org.",
    moves:[{
      name:"Encrypt",
      desc:"This card gets encrypted and gets 40 HP.",
      cost:1,
      cooldown:0,
      target:"none",
      use:function(inst) {
        inst.heal(40);
      }
    },{
      name:"Max Encrypt",
      desc:"This card gets MAX encryption and steals 100 HP. Double it if a cool card is in your hand.",
      cost:3,
      cooldown:1,
      target:"opp",
      use:function(sel,inst,opp,self) {
        var mod = 1+self.hand.filterName("cool").length;
        sel.hit(100*mod);
        inst.heal(100*mod);
      }
    },{
      name:"Dangerous Rizz",
      desc:"This card gives other cards so much dangerous rizz that they jump in a fire dealing 350 ATK.",
      cost:1,
      cooldown:4,
      cooling:2,
      target:"opp",
      use:function(sel) {
        sel.hit(350);
        sel.giveEffect("Rizz",2,5);
      }
    }],
    profile: "https://gamelab.freeflarum.com/u/kid",
  },
  {
    name:"CaptainJackSparrow",
    rarity:"Common",
    hp:300,
    def:400,
    image:"https://gamelab.freeflarum.com/assets/avatars/Rui3lwRJwpFr5Uhz.png",
    offx: 0,
    offy: 0,
    hover: "Annoying forum user/pirate.",
    desc: "*Most known for my adventures in the carribin [sic] I also rob people, and annoy people on the Forum [sic]. (Formerly known as 'Fred')*",
    moves:[{
      name:"CAPTAIN Jack Sparrow",
      desc:"Opponent calls you the wrong name. You shoot them dealing 70 ATK.",
      cost:1,
      cooldown:2,
      target:"opp",
      use:function(sel) {
        sel.hit(70);
      }
    },{
      name:"Cannonball",
      desc:"Shoot a cannonball at your opponent' ship dealing 50 ATK to everyone in their hand",
      cost:4,
      cooldown:1,
      target:"none",
      use:function(inst,opp,self) {
        for (var i = 0; i < opp.hand.length; i++) {
          opp.hand[i].hit(50);
        }
      }
    },{
      name:"Special - Confuzzle",
      desc:"The problem is your attitude about the problem... not the problem. Confuse the opponent, make them lag, and deal 200 ATK.",
      cost:7,
      cooldown:1,
      target:"opp",
      use:function(sel) {
        sel.hit(200);
        sel.giveEffect("Confused",0.2,2);
        sel.giveEffect("Laggy",0.2,2);
      },
      flavor: "Confused Stonks"
    }],
    profile: "https://gamelab.freeflarum.com/u/Captain_Jack_Sparrow",
  },
  {
    name: "ItsDannyBruh",
    rarity: "Rare",
    hp: 2000,
    def: 1200,
    image: "https://gamelab.freeflarum.com/assets/files/2024-01-20/1705781861"+"-"+"434554-image.png",
    offx: 1,
    offy: 0,
    hover: "Forum clout chaser.",
    desc: "Creator of an addicting game called Barricade. Former clout chaser. Also has 2nd most viewed post on forum.",
    moves: [{
      name: "Clout",
      desc: "Use random memes on the internet and clout to distract and attack your enemy for 200 ATK. Have a 1/3 chance of giving them the Stupid effect.",
      cost: 2,
      cooldown: 1,
      target: function(use,inst,opp,self) {
        opp.hand.pick(function(sel){
          use(randomNumber(1,3),sel,inst,opp,self);
        });
      },
      use: function(r,sel) {
        sel.hit(200);
        if (r == 1) opp.giveEffect("Stupid",3,4);
      }
    }, {
      name: "Barricader",
      desc: "Blocks an attack, making this card invulnerable next turn.",
      cost: 3,
      cooldown: 1,
      target:"none",
      use: function(inst) {
        inst.giveEffect("Invulnerable",1,1);
      },
      flavor:"Popular"
    },
    {
      name: "Banana Spam",
      desc: "Spam bananas longer than was strictly necessary. Hit 2 opponents for 350 ATK.",
      cost: 5,
      cooldown: 1,
      target: function(use,inst,opp,self) {
        opp.hand.pick(function(sel1){
          opp.hand.pick(function(sel2){
            use(sel1,sel2);
          });
        });
      },
      use: function(sel1,sel2) {
        sel1.hit(350);
        sel2.hit(350);
      },
      flavor:"TBH I have no idea why I let Danny add this."
    }],
    profile: "https://gamelab.freeflarum.com/u/ItsDannyBruh",
  },
  {
    name:"person",
    rarity:"Epic",
    hp:1600,
    def:2000,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdvPe9xXUHO-aHZlUZ8-UtYa9qhMKym-vlNw8UR8uD8A&s",
    offx: 1,
    offy: -1,
    hover: "Forum OG and Memetron.",
    desc: "Made the greatest chain ever on the forum... the memes [sic]. Also making a pretty good game [sic] (Made a prototype card for this game)",
    moves:[{
      name:"Memed",
      desc:"You've been memed, lulz -300 social credits",
      cost:2,
      cooldown:0,
      cooling:2,
      target:"opp",
      use:function(sel) {
        sel.hit(300);
      }
    },{
      name:"Admin",
      desc:"Strike your opponent down for 300 ATK. Each time this card is used on them, its damage increases by 200 ATK.",
      cost:3,
      cooldown:1,
      target:"opp",
      use:function(sel) {
        sel.seladmindmg = sel.seladmindmg||0;
        sel.hit(300+sel.seladmindmg);
        sel.seladmindmg += 200;
      }
    },{
      name:"Special- Yoink",
      desc:"Deal 1200 ATK first turn, 800 ATK second turn, 400 ATK third turn, and back to normal fourth turn",
      cost:3,
      cooldown:2,
      target:"opp",
      use:function(sel,inst) {
        sel.hit(inst.yoinked);
        inst.yoinked = {1200:800,800:400,400:1200}[inst.yoinked];
      }
    }],
    setup:function(inst) {
      inst.yoinked = 1200;
    },
    profile: "https://gamelab.freeflarum.com/u/person",
  },
  {
    name:"Binary_Coder",
    rarity:"Epic",
    hp:3200,
    def:3000,
    image:"https://proton-uploads-production.s3.amazonaws.com/be06078d849115cbab9825a09bb615e70d6a142a8c13e96db4ef0bfafdec7216.png",
    offx: 0,
    offy: -1,
    hover: "AppLab + GameLab coder.",
    desc: "A coder who works in App Lab and Game Lab to make all sorts of projects.",
    modifiers: {
      "Arrogant":0,
    },
    moves:[{
      name:"Badge Master",
      desc:"Make a custom badge, dealing 100 + 50 ATK multiplied by the opponent's card rank. Make them feel Arrogant.",
      tsize:18,
      cost:1,
      cooldown:2,
      target:"opp",
      use:function(sel) {
        sel.hit(sel.parent.tier*50+100);
        sel.giveEffect("Arrogant",0.8,4);
      }
    },{
      name:"Unseen",
      desc:"This card is 'invisible' for two turns, and can't be targeted by other cards.",
      cost:3,
      cooldown:3,
      target:"none",
      use:function(inst) {
        inst.giveEffect("Invisible",1,2);
      }
    },{
      name:"Special - Help Request",
      desc:"Ask for help on the forum, reviving a random dead card with 25% of its normal starting HP. Each time this move is used, its cooldown increases by 1.",
      tsize:16,
      cost:6,
      cooldown:3,
      target:function(use,inst,opp,self) {
        var i = self.defeated.randomIndex();
        use(i,inst,self);
      },
      use:function(i,inst,self) {
        if (self.defeated.length < 1) return;
        var revive = self.defeated.splice(i,1);
        revive.hp = round(0.25*revive.parent.hp);
        self.deck.unshift(revive);
        inst.moves[2].cooldown++;
      },
      flavor: "Meine Name is Karl! Ich bin Expert!"
    }],
    profile: "https://gamelab.freeflarum.com/u/Binary_Coder",
  },
  {
    name:"IMPixel",
    rarity:"Epic",
    hp:4200,
    def:4200,
    image:"https://sea2.discourse-cdn.com/business6/user_avatar/forum.code.org/impixel/144/6744_2.png",
    offx: 0,
    offy: -1,
    hover: "Ancient CDO lore.",
    desc: "Per the official CDO forum: 'I love helping people in both GameLab and AppLab (but mostly GameLab).' Also friends with Owokoyo somehow.",
    modifiers:{
      "Arrogant":0,
      "Inactive":1.3
    },
    moves:[{
      name:"Relations",
      desc:"Use your good relations to soften an opponent, lowering their DEF. Gets more effective the higher the opponent's rarity. Each time this is used, its cost increases by 1.",
      cost:0,
      cooldown:1,
      target:"opp",
      use:function(sel,inst) {
        sel.def /= sel.parent.tier/10+0.1;
        inst.moves[0].cost++;
      }
    },{
      name:"Codeasaurous Team",
      desc:"Heal one of your cards for 100 HP times the rarity of the card.",
      cost:1,
      cooldown:3,
      target:"self",
      use:function(sel) {
        sel.heal(100+100*sel.parent.tier);
      }
    },{
      name:"Special - Help",
      desc:"\"Kindly\" help somebody with their problems, making them feel Inspired, Confused, and Arrogant.",
      cost:1,
      cooldown:1,
      target:"self",
      use:function(sel) {
        sel.giveEffect("Inspired",2,7);
        sel.giveEffect("Confused",0.5,7);
        sel.giveEffect("Arrogant",0.8,7);
        sel.heal(100);
      }
    }],
    profile: "https://gamelab.freeflarum.com/u/impixel",
  },
  {
    name:"Nathan Yarbrough",
    rarity:"Rare",
    hp:2000,
    def:2000,
    image:"https://gamelab.freeflarum.com/assets/files/2024-01-25/1706189324"+"-"+"812863-screenshot-2024-01-25-082635.png",
    offx: 1,
    offy: -1,
    hover: "The 'Dungon Crash' guy.",
    desc: "An OG coder lore element, creator of 'Dungon Crash' and Super Bunny Bros.",
    moves:[{
      name:"Grafick",
      desc:"Use wonderful graficks to deal 450 ATK.",
      cost:3,
      cooldown:5,
      target:"opp",
      use:function(sel) {
        sel.hit(450);
      }
    },{
      name:"Mispel",
      desc:"Mispel [sic] and Confuse your opponent dealing 100 ATK",
      cost:2,
      cooldown:5,
      target:"opp",
      use:function(sel) {
        sel.giveEffect("Confused",2,8);
        sel.hit(100);
      }
    },{
      name:"Special- Remix Spam",
      desc:"Your projects get remixed so many times that nobody remembers that you actually made the OG. Replace the opponent's first ability with a generic, 50+25*[Rarity] ATK hit one.",
      cost:5,
      cooldown:5,
      target:"opp",
      use:function(sel) {
        var dmg = 50+25*sel.parent.tier;
        sel.moves[0] = {
          name:"Generic Remix",
          desc:"This move is a generic remix of a far better one. Deal "+dmg+" ATK.",
          cost:1,
          cooldown:1,
          cooling:0,
          target:"opp",
          use:function(sel1){
            sel1.hit(dmg);
          }
        };
      }
    }],
    //profile: "https://gamelab.freeflarum.com/u/",
  },
  {
    name:"INTERNECION",
    rarity:"Rare",
    hp:2800,
    def: 2800,
    image:"https://gamelab.freeflarum.com/assets/avatars/rM39N6q3noNkRoY6.png",
    offx: 1,
    offy: 0,
    hover: "Forum OG and Admin.",
    desc: "An OG of the forum, now an Admin. Mostly posts art.",
    moves:[{
      name:"Admin",
      desc:"Strike your opponent down for 300 ATK. Each time this card is used on them, its damage increases by 100 ATK.",
      cost:1,
      cooldown:1,
      target:"opp",
      use:function(sel) {
        sel.seladmindmg = sel.seladmindmg||0;
        sel.hit(300+sel.seladmindmg);
        sel.seladmindmg += 100;
      }
    },{
      name:"Advertize",
      desc:"Annoy your opponent by repeatedly advertizing your art on a year-old discussion chain which keeps popping up in their notifications unless they decide to unfollow it which they don't because nobody knows what unfollowing even is. Hit for 200 ATK and give Irritable.",
      cost:0,
      cooldown:4,
      target:"opp",
      use:function(sel) {
        sel.hit(200);
        sel.giveEffect("Irritable",3,12);
      }
    }],
    profile: "https://gamelab.freeflarum.com/u/INTERNECION",
  },
  {
    name:"Fluffypo"+"opo",
    rarity:"Uncommon",
    hp: 800,
    def: 1000,
    image:"https://gamelab.freeflarum.com/assets/avatars/9hHbTgtgEy9aXE1t.png",
    offx: 1,
    offy: 0,
    hover: "Former forum Admin.",
    desc: "An OG of the forum, formerly an Admin. Now inactive.",
    moves:[{
      name:"Attack",
      desc:"Basic attack - 75 ATK",
      cost:1,
      cooldown:0,
      target:"opp",
      use:function(sel,inst) {
        sel.hit(75*inst.modifier);
      }
    },{
      name:"Former Admin",
      desc:"Strike your opponent down for 150 ATK. Each time this card is used on them, its damage increases by 75 ATK.",
      cost:2,
      cooldown:1,
      target:"opp",
      use:function(sel,inst) {
        sel.seladmindmg = sel.seladmindmg||0;
        sel.hit((150+sel.seladmindmg)*inst.modifier);
        sel.seladmindmg += 75;
      }
    },{
      name:"Respecc",
      desc:"Respecc the owner, giving you 1.1x higher ATK power. Double ATK for every [WUT] Adam card present.",
      cost:3,
      cooldown:2,
      target:"none",
      use:function(inst,opp,self) {
        var adams = opp.hand.filterName("[WUT] Adam").length + self.hand.filterName("[WUT] Adam").length;
        inst.modifier *= mod * pow(2,adams);
      },
      flavor: "MR. PARK! RESPECT!"
    }],
    setup: function(inst){
      inst.modifier = 1;
    },
    profile: "https://gamelab.freeflarum.com/u/Fluffypo"+"opo",
  },
  {
    name:"Letti42",
    rarity:"Legendary",
    hp:6000,
    def:6500,
    image:"https://gamelab.freeflarum.com/assets/avatars/tBRRhAIffNYR2pCq.png",
    offx: 0,
    offy: 0,
    hover: "3D and Network coder.",
    desc: "An OG of Code.org, being acquainted with Owokoyo, and one of the 4 experts on 3D in the whole of history of the website.",
    modifiers:{
      "Laggy":0,
      "Arrogant":0.9,
    },
    moves:[{
      name:"Free Attack!",
      desc:"Deal 500 ATK at no cost*",
      cost:0,
      cooldown:2,
      target:"opp",
      use:function(sel,inst) {
        sel.hit(500);
        inst.def -= 100;
      },
      flavor:"Is it really free?"
    },{
      name:"Technical Answer",
      desc:"Give an elegant but complicated answer, Heal & Inspire all of your cards Epic or higher, Damage & Confuse cards Uncommon or lower, -200+100*[Rarity] HP/ATK",
      cost:1,
      cooldown:2,
      target:"none",
      use:function(inst,opp,self) {
        for (var i = 0; i < self.hand.length; i++) {
          var a = -200+100*self.hand[i].parent.tier;
          if (a < 0) {
            self.hand[i].hit(-a);
            self.hand[i].giveEffect("Confused",0.2,4);
          } else {
            self.hand[i].heal(a);
            self.hand[i].giveEffect("Inspired",0.2,4);
          }
        }
      },
      flavor:"???"
    },{
      name:"Dark Magic",
      desc:"Transfer double the remaining HP from a card in your hand to another card in your hand, defeating it in the process. Unaffected by DEF",
      cost:0,
      cooldown:2,
      target: function(use,inst,opp,self) {
        self.hand.pick(function(sac){
          self.hand.pick(function(rec){
            use(sac,rec);
          });
        });
      },
      use:function(sac,rec) {
        rec.hp += 2 * sac.hp;
        sac.hp = 0;
      }
    }],
    profile: "https://gamelab.freeflarum.com/u/Letti42",
  },
  {
    name:"Graycat",
    rarity:"Common",
    hp:100,
    def:700,
    image:"https://gamelab.freeflarum.com/assets/avatars/VijCrnmocFo7kZTu.png",
    offx: 0,
    offy: 0,
    hover: "Some annoying guy.",
    desc: "An annoying forum guy, first to be banned. A not-too-bad hacker.",
    modifiers: {
      "Irritable":2,
    },
    moves:[{
      name:"A N N O Y",
      desc:"Be very annoying, spam incomprehensible posts about cats. Hit for 170 ATK, but make yourself Irritable.",
      cost:2,
      cooldown:1,
      target:"opp",
      use:function(sel,inst) {
        sel.hit(170);
        inst.giveEffect("Irritable",0.5,3);
      },
    },
    {
      name:"Hack",
      desc:"Hack the chat, possibly freezing your opponent for 3 turns.",
      cost:4,
      cooldown:4,
      use:function(sel,inst) {
        opp.giveEffect("Frozen",0.5,3);
      },
    }],
    profile: "https://gamelab.freeflarum.com/u/GRAYCAT",
  },
  {
    name:"Sam",
    rarity:"Common",
    hp:200,
    def:1500,
    image:"https://us-tuna-sounds-images.voicemod.net/84341fa5-f7ea-4e6d-8179-397154a62f88-1697377507687.jpg",
    offx: 0,
    offy: 0,
    hover: "Pretentious and annoying guy.",
    desc: "A guy who isn't really that good but thinks he's a legend. Ego of glass, as they say. - Ravage",
    modifiers: {
      "Arrogant":1.4,
    },
    moves:[{
      name:"Challenge",
      desc:"Challenge the legends, thinking you're better. If your opponent is a Legendary-tier, hit them for 500 ATK, but lose 50 HP and be Arrogant. If not, hit for 100 ATK.",
      cost:4,
      cooldown:1,
      target:"opp",
      use:function(sel,inst) {
        if(sel.rarity=="Legendary"){
          sel.hit(500);
          inst.hit(50);
          inst.giveEffect("Arrogant",1,10);
          return;
        }
        sel.hit(100);
      },
    },
    {
      name:"Hack",
      desc:"Hack the chat, freezing your opponent for a turn.",
      cost:5,
      cooldown:4,
      target:"opp",
      use:function() {
        opp.giveEffect("Frozen",1,1);
      },
    }],
    //profile: "https://gamelab.freeflarum.com/u/",
  },
  {
    name:"nomo",
    rarity:"Common",
    hp:100,
    def:300,
    image:"https://gamelab.freeflarum.com/assets/avatars/RldQe9vSeM7qlsAG.png",
    offx: 0,
    offy: 0,
    hover: "So horrible he has to be remembered.",
    desc: "A full-out hater who delight[ed, thankfully] in harassing various community members. We only include him because he has to be remembered as a warning to others.",
    modifiers: {
      "Arrogant":1.4,
      "Virus":2,
      "Irritable":70
    },
    moves:[{
      name:"Annoy",
      desc:"Deal 10 ATK",
      cost:0,
      cooldown:1,
      target:"opp",
      use:function(sel) {
        sel.hit(10);
      },
    },{
      name:"Harass",
      desc:"Harass all of your opponents cards for 200 ATK at a 80% chance of getting struck by an Admin.",
      cost:3,
      cooldown:4,
      target:function(use,inst,opp,self) {
        use(randomNumber(1,5),inst,opp);
      },
      use:function(r,inst,opp) {
        for (var i = 0; i < opp.hand.length; i++) {
          opp.hand[i].hit(200);
        }
        if (r == 1) return;
        inst.hp = 0;
      },
      flavor: "Harassing is ill-advised... but alas, sometimes effective."
    }],
    //profile: "https://gamelab.freeflarum.com/u/",
  },
  {
    name:"Brendan",
    rarity:"Common",
    hp:400,
    def:400,
    image:"https://gamelab.freeflarum.com/assets/avatars/J8eDR7tqnXYToJjs.png",
    offx: 0,
    offy: 0,
    hover: "Wait....",
    desc: "Something's off...",
    modifiers: {
      "Confused":0
    },
    moves:[{
      name:"Lie",
      desc:"Somehow lie to over 300+ people about your identity. Make every opponent's card Confused.",
      cost:0,
      cooldown:6,
      target:"none",
      use:function(inst,opp) {
        for(var i = 0; i < opp.hand.length; i++){
          opp.hand[i].giveEffect("Confused",1,5);
        }
      },
    },
    {
      name:"Alter-Ego",
      desc:"If your opponent is a [WUT] Adam card which has 50% HP or less, swap it with this one. Hit any card for 50 ATK.",
      cost:4,
      cooldown:1,
      target:"opp",
      use:function(sel,inst) {
        if (sel.parent.name == "[WUT] Adam" && sel.hp / sel.def < 0.5) {
          self.hand.splice(self.hand.indexOf(inst),1,sel);
          opp.hand.splice(opp.hand.indexOf(sel),1,inst);
          return;
        }
        sel.hit(50);
      },
    }],
    profile: "https://gamelab.freeflarum.com/u/Brendan",
  },
  {
    name:"cool",
    rarity:"Uncommon",
    hp:900,
    def:800,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSER0hvqANvIFzljaP3lhjvFYdMhb-1QLA9dKfM816THg&s",
    offx: 0,
    offy: 0,
    hover: "Kid's partner.",
    desc: "A coder who partners with another coder named kid to make a variation of projects in replit.com and code.org.",
    moves:[{
      name:"Partnership",
      desc:"If you have a 'kid' card in your hand, reduce its cooldowns by 1. Hit for 75 ATK.",
      cost:1,
      cooldown:2,
      target:"opp",
      use:function(sel,inst,opp,self) {
        var kids = self.hand.filterName("Kid");
        for (var i = 0; i < kids.length; i++) {
          for (var j in kids[i].moves) {
            kids[i].moves[j].cooling--;
          }
        }
        sel.hit(75);
      }
    },{
      name:"Chattering",
      desc:"Greatly increase the flux of chats on CDO. Remove Frozen and Laggy from all cards in your hand.",
      cost:0,
      cooldown:2,
      target:"none",
      use:function(inst,opp,self) {
        for (var i = 0; i < self.hand.length; i++) {
          self.hand[i].removeEffect("Frozen");
          self.hand[i].removeEffect("Laggy");
        }
      }
    }],
    //profile: "https://gamelab.freeflarum.com/u/",
  },
  {
    name:"Gore",
    rarity:"Uncommon",
    hp:1000,
    def:800,
    image:"https://cdn11.bigcommerce.com/s-xr05ynhyn0/images/stencil/1280x1280/products/4437/10413/jftoy00240_b_small__42573.1668143593.jpg",
    offx: 0,
    offy: 0,
    hover: "Trippy coder/hacker.",
    desc: "A popular figure on CDO, Gore is seen to have worked with [WUT] Adam in various experiments.",
    moves:[{
      name:"Hack",
      desc:"Hack the chat and freeze your opponent.",
      cost:1,
      cooldown:2,
      target:"opp",
      use:function(sel) {
        sel.giveEffect("Frozen",1,1);
      }
    },{
      name:"Scripter",
      desc:"Make a script, multiplying by 1.5 your next attack's damage. Can stack.",
      cost:1,
      cooldown:1,
      target:"none",
      use:function(inst) {
        inst.modifier*=1.5;
      }
    },{
      name:"Shadow Programming",
      desc:"Deal as much damage as the number of opponent's cards dead times 50.",
      cost:3,
      cooldown:4,
      target:"opp",
      use:function(sel,inst,opp,self) {
        sel.hit(opp.defeated.length*50*inst.modifier);
        inst.modifier=1;
      }
    }],
    setup: function(inst){
      inst.modifier=1;
    },
    //profile: "https://gamelab.freeflarum.com/u/",
  },
  {
    name:"Soph",
    rarity:"Uncommon",
    hp:800,
    def:1000,
    image:"https://preview.redd.it/74b5plv03lt61.jpg?auto=webp&s=bf6ef35672930702a6f5fb9bc01ad1b1610b1258",
    offx: 0,
    offy: 0,
    hover: "Trippy coder/hacker.",
    desc: "A popular figure on CDO, Soph is seen to have worked with [WUT] Adam in various experiments. Seems to like emoticons.",
    moves:[{
      name:"Kick",
      desc:"Kick the opponent dealing 100 ATK for the inconvenince of making them rejoin",
      cost:1,
      cooldown:2,
      target:"opp",
      use:function(sel,inst) {
        sel.hit(100*inst.modifier);
        inst.modifier=1;
      }
    },{
      name:"Scripter",
      desc:"Make a script, multiplying by 1.5 your next attack's damage. Can stack.",
      cost:1,
      cooldown:1,
      target:"none",
      use:function(inst) {
        inst.modifier*=1.5;
      }
    },{
      name:"Mayhem",
      desc:"Kill one of your own hand's cards, while hitting for 25% of the maximum HP of the opponent's.",
      cost:3,
      cooldown:3,
      target:function(use,inst,opp,self) {
        sel.hand.pick(function(sac){
          opp.hand.pick(function(sel){
            use(sac,sel);
          });
        });
      },
      use:function(sac,sel) {
        sac.hp = 0;
        sel.hit(sel.def/4*inst.modifier);
      }
    }],
    setup: function(inst){
      inst.modifier=1;
    },
    //profile: "https://gamelab.freeflarum.com/u/",
  },
  {
    name:"Phoenix",
    rarity:"Common",
    hp:250,
    def:250,
    image:"https://phoenixcreativearts.co.uk/wp-content/uploads/2021/09/ae064181a2f68f13edc5e5d08276f95d_cropped_optimized.jpg",
    offx: 0,
    offy: 0,
    desc: "An inactive and inexperienced coder that enjoys gaming.",
    moves:[{
      name:"Bad Project",
      desc:"Create a horribly made project and have the opponent play it, causing them to take 30 damage",
      cost:0,
      cooldown:1,
      target:"opp",
      use:function(sel) {
        sel.hit(30);
      }
    },{
      name:"Grade Bragging",
      desc:"Brags about good grades dealing 90 damage and making the enemy feel Stupid for 2 turns, but causes this card to become Arrogant for 4 turns.",
      cost:3,
      cooldown:2,
      target:"opp",
      use:function(sel,inst) {
        sel.hit(90);
        sel.giveEffect("Stupid",0.5,2);
        inst.giveEffect("Arrogant",0.8,4);
      }
    }],
    onselect: function(inst) {
      inst.rebirth = false;
    },
    ondefeat: function(inst2){
      if (inst2.rebirth) return;
      inst2.moves[2] = {
        name:"Rebirth",
        desc:"You may choose to bring one of your hand's cards to double full HP, annihilating this one.",
        cost:5,
        cooldown:1,
        target:"self",
        use:function(sel,inst) {
          inst.hp = 0;
          sel.hp = sel.def*2;
        },
        flavor: "I'll be back"
      };
      inst2.hp = 600;
      inst2.rebirth = true;
    },
    flavor: "From the ashes rises a Phoenix",
    profile: "https://gamelab.freeflarum.com/u/Phoenix",
  },
  {
    name:"Zzeroiscool",
    rarity:"Common",
    hp:300,
    def:300,
    image:"https://gamelab.freeflarum.com/assets/avatars/JXoeJEG2w2wAHs4U.png",
    offx: 0,
    offy: 0,
    hover: "Forum OG/NPC.",
    desc: "Friend me on rec room, CircuitTear. Idk why but I enjoy replying to old posts and confusing the hell out of people [sic]",
    moves:[{
      name:"Generic Attack",
      desc:"Does 50 ATK cuz I can't think of anything unique",
      cost:1,
      cooldown:1,
      target:"opp",
      use:function(sel) {
        sel.hit(50);
      }
    },{
      name:"Necropost",
      desc:"Perform a confusing necropost, Confusing each of your opponent's hand's cards while dealing 20 ATK",
      cost:3,
      cooldown:3,
      target:"none",
      use:function(inst,opp,self) {
        for (var i = 0; i < opp.hand.length; i++) {
          opp.hit(20);
          opp.giveEffect("Confused",0.3,3);
        }
      }
    }],
    profile: "https://gamelab.freeflarum.com/u/Zzeroiscool723"
  },
  {
    name:"zkat",
    rarity:"Uncommon",
    hp:420,
    def:420,
    image:"https://th.bing.com/th/id/OIG2.DzR8i2U.46EaYeIucMZg?pid=ImgGn",
    offx: 1,
    offy: 0,
    isEX:true,
    hover: "Likes emojis + libraries",
    desc: "Zkat(asdf), made LibImport (The most unused library in CDO), imported SHA256, MD5, and base64, made LibImport (The most unused library in CDO).",
    moves:[{
      name:"Brainrot",
      desc:"Force the enemy to watch TikTok. Deals 175 ATK and makes them Stupid",
      cost:1,
      cooldown:3,
      target:"opp",
      use:function(sel) {
        sel.hit(175);
        sel.giveEffect("Stupid",1,3);
      }
    },{
      name:"ZIP-Bomb",
      desc:"Store a bunch of heavy files in a zip folder for the enemy to unzip. Deals 690 ATK, gives Laggy.",
      cost:3,
      cooldown:0,
      target:"opp",
      use:function(sel) {
        sel.hit(690);
        sel.giveEffect("Laggy",0.2,8);
      }
    },{
      name:"Fake-Anticheat",
      desc:"Makes a fake anticheat that adds a backdoor. Reduce the opponent's health by a third.",
      cost:6,
      cooldown:2,
      target:"opp",
      use:function(sel) {
        sel.hit(sel.hp/3);
      }
    }],
    profile: "https://gamelab.freeflarum.com/u/zkat",
  },
  // https://gamelab.freeflarum.com/u/miztis remember to make a card (Rare)
  {
    name:"seek",
    rarity:"Common",
    hp: 200,
    def: 600,
    image:"https://gamelab.freeflarum.com/assets/files/2024-04-05/1712347646-758899-screenshot-2024-04-05-10241-pm.png",
    offx: 1,
    offy: 0,
    hover: "A creature made of black slime",
    desc: "A mysterious forum user who posts cryptic stuff & AI generated images. Fan of the game DOORS.",
    moves:[{
      name:"1000 Gazes",
      desc:"Do 30 damage, flip a coin, if heads your foe is paralyzed for a turn",
      cost:1,
      cooldown:1,
      target:function(use,inst,opp,self) {
        opp.hand.pick(function(sel){
          use(randomNumber(0,1),sel,inst);
        });
      },
      use:function(r,sel){
        opp.hit(30);
        if (r == 0) return; 
        opp.giveEffect("Frozen",1,1);
      }
    },{
      name:"Black Coat",
      desc:"Flip a coin, if heads your opponent is covered in slime and can't move for 3 turns",
      cost:2,
      cooldown:1,
      target:function(use,inst,opp,self) {
        opp.hand.pick(function(sel){
          use(randomNumber(0,1),sel,inst);
        });
      },
      use:function(r,sel){
        if (r == 0) return; 
        opp.slimed = true;
        opp.giveEffect("Frozen",1,3);
      }
    },{
      name:"Feed",
      desc:"If your opponent is covered in slime do 200 ATK and heal 200 HP. Otherwise do 50 ATK",
      cost:3,
      cooldown:2,
      target:"opp",
      use:function(sel,inst){
        if (sel.slimed) {
          sel.hit(200);
          inst.heal(200);
        } else {
          sel.hit(50);
        }
      }
    }],
    flavor: "Makes its home at a hotel and gives chase to its prey.",
    profile: "https://gamelab.freeflarum.com/u/seek",
  },
  {
    name:"Yogurt",
    rarity:"Rare",
    hp:2050,
    def:2050,
    image:"https://gamelab.freeflarum.com/assets/avatars/9L3rpTlDrbWMCEWa.png",
    offx: 0,
    offy: 0,
    hover: "Retro Pong Guy",
    desc: "Creator of Retro Pong. Yeah that's right...that down bad graphic game but one of the best pong projects on CDO.",
    moves:[{
      name:"Bad Graphics",
      desc:"Give your opponent bad horrifying graphics that they scream in terror.(Randomized 100-300ATK)",
      cost:1,
      cooldown:1,
      target:function(use,inst,opp,self) {
        opp.pick(function(sel){
          use(randomNumber(0,8),sel);
        });
      },
      use:function(r,sel) {
        sel.hit(100+25*r);
      }
    },{
      name:"Eat a tub of yogurt",
      desc:"Eat a nutritious tub of yogurt with bluberries and granola, you gain a third of your current health.",
      cost:3,
      cooldown:1,
      target:"none",
      use:function(inst) {
        inst.heal(inst.hp/3);
      }
    },
    {
      name:"Special - Companiant",
      desc:"Help back up a random defeated card and revive him with your magical powers.",
      cost:10,
      cooldown:2,
      target:"none",
      use:function(inst,opp,self) {
        if (self.defeated.length < 1) return;
        var i = self.defeated.randomIndex();
        self.deck.unshift(self.defeated.splice(1));
      }
    }],
    flavor: "Yum!",
    profile: "https://gamelab.freeflarum.com/u/Yogurt",
  },
  {
    name:"Aalie_oop",
    rarity:"Common",
    hp:400,
    def:400,
    image:"https://gamelab.freeflarum.com/assets/avatars/Qt1QEg1EihOzppIc.png",
    offx: 0,
    offy: 0,
    hover:"Forum Artist",
    desc: "\"I like to draw. im really dumb dont judge me\", really active user",
    moves:[{
      name:"Draw",
      desc:"Draw something and then throw it at the opponent dealing 50 ATK",
      cost:1,
      cooldown:1,
      target:"opp",
      use:function(sel) {
        sel.hit(50);
      }
    },{
      name: "Banana Supremacy",
      desc: "\"Banan supremacy BAHAHAH\"\nHit 2 opponents for 100 ATK.",
      cost: 3,
      cooldown: 1,
      target: function(use,inst,opp,self) {
        opp.hand.pick(function(sel1){
          opp.hand.pick(function(sel2){
            use(sel1,sel2);
          });
        });
      },
      use: function(sel1,sel2) {
        sel1.hit(100);
        sel2.hit(100);
      },
    }],
    profile:"https://gamelab.freeflarum.com/u/Aalie_oop"
  },
  // Consumable Project Cards:
  // - Remix: Brendan's Chat (Common): Spam, Roleplay, Crash
  // - Proyecto 93 (Common): Remix, Why
  // - Stub Code (Common): Confuse, Error
  // - Crappy Featured Project (Uncommon): Annoy, Hide
  // - App Lab Calculator (Uncommon): Calculate, Crash
  // - Brutal Mayhem (Rare): Special- Mayhem
  // - Actually Good Gamelab Game (Rare): Play
  // - Pisquiltale (Epic): 
  // - Custom Backend (Legendary): External Data, Special- Multiplayer Madness
  // - Inspect Console (Legendary): Edit, Delete
].map(createCard);
// End of card maker

//setTimeout(function(){saveAllCards();},120000);

var Inst = function(name) {
  var obj = {};
  obj.effects = {};
  obj.parent = cardMap[name];
  obj.def = obj.parent.def;
  obj.hp = obj.parent.hp;
  obj.moves = [];
  for (var i = 0; i < obj.parent.moves.length; i++) {
    var n = {cooling:0};
    for (var j in obj.parent.moves[i]) {
      n[j] = obj.parent.moves[i][j];
    }
    obj.moves.push(n);
  }
  obj.activeMove = function(i) {
    return obj.moves[i].cooling <= 0 && PlayerMap[obj.player].points >= obj.moves[i].cost;
  };
  if (obj.parent.setup) obj.parent.setup(obj);
  obj.draw = function(x,y,w,h) {
    image(obj.card,x,y,w,h);
  };
  obj.getEffect = function(name,def) {
    if (!obj.effects[name]) return def;
    return obj.effects[name].lvl;
  };
  obj.giveEffect = function(name,lvl,turns) {
    var status = {
      lvl:lvl||1,
      turns:turns||Infinity
    };
    var mod = obj.modifiers[name];
    switch (typeof mod) {
      case 'function': status = mod(status); break;
      case 'number': status.lvl *= mod; break;
    }
    if (status.lvl === 0) return;
    obj.effects[name] = name;
  };
  obj.removeEffect = function(name,lvl,turns) {
    delete obj.effects[name];
  };
  obj.hit = function(dmg) {
    dmg *= 1-getEffect("Invulnerable",0);
    obj.hp -= dmg;
  };
  obj.heal = function(amount) {
    var bef = obj.hp;
    amount *= 1-getEffect("Arrogant",0);
    obj.hp += amount;
    obj.hp = min(obj.hp,max(obj.def,bef));
  };
  return obj;
};
var Deck = function(cards,path) {
  var deck = [];
  for (var i = 0; i < cards.length; i++) {
    var c = Inst(cards[i].name);
    c.id = cards[i].id;
    c.player = path[0];
    InstMap[c.id] = c;
    deck.push(c);
  }
  deck.path = path;
  deck.picking = false;
  deck.filter = false;
  deck.filterName = function(name) {
    return deck.filter(function(){return c.parent.name == name;});
  };
  deck.pick = function(callback,filter) {
    deck.picking = callback;
    deck.filter = filter || false;
  };
  deck.random = function(filter) {
    var list = deck;
    if (filter) list = list.filter(filter);
    return list[floor(random()*list.length)];
  };
  deck.draw = function(sx,y,w,b,back) {
    var hover = false;
    var h = w*7/5;
    for (var i = 0; i < deck.length; i++) {
      var x = (w+b)*i+sx;
      hover = !selCard && deck.picking && mouseRect(x,y,w,h); //&& !hover;
      if (back) image(back,x,y,w,h);
      else image(deck[i].parent.card,x,y,w,h);
      if (hover) {
        format(alpha(255,0.4+0.2*sin(frameCount*5)),false,0);
        rect(x,y,w,h);
        if (clicked) {
          deck.picking(deck[i]);
          deck.picking = false;
          clicked = false;
        }
      }
    }
  };
  return deck;
};
var Player = function(n,p) {
  var obj = {};
  obj.name = n;
  obj.points = 0;
  obj.deck = Deck(p.deck,[n,"deck"]);
  obj.hand = Deck(p.hand,[n,"hand"]);
  obj.defeated = Deck([],[n,"defeated"]);
  PlayerMap[n] = obj;
  return obj;
};

// ----
// Deck
// ----

createPage("deck");
pageMap.deck.onopen = function() {
  CardList = CardList.sort(function(a,b) {
    return b.tier - a.tier;
  });
  cardListDiv.maxScrollY = ceil(CardList.length/5)*108.6-cardListDiv.height;
};
var selCard = false;
var cardListDiv = createElement(5,30,390,370,"deck");
cardListDiv.drawers.pop();
cardListDiv.addComponent("div");
var hovSel;
cardListDiv.afterdraw = function(b) {
  hovSel = false;
  for (var i = 0; i < CardList.length; i++) {
    var x = (i%5)*79;
    var y = floor(i/5)*108.6;
    var hov = !selCard && b.mouseRect(x,y,74,103.6);
    b.image(CardList[i].card,x,y,74,103.6);
    if (hov) {
      hovSel = CardList[i];
      b.format(alpha(255,0.4+0.2*sin(frameCount*5)),false,0);
      b.rect(x,y,74,103.6,3);
      if (clicked) {
        clicked = false;
        selCard = CardList[i];
      }
    }
  }
}
pageMap.deck.after = function() {
  if (hovSel) {
    var str = hovSel.name;
    if (hovSel.hover) str += ": "+hovSel.hover;
    drawFlavor(str);
  }
  if (selCard) {
    showCardGraphics(selCard,75,25,250,350);
    if (!mouseRect(75,25,250,350) && clicked) {
      clicked = false;
      selCard = false;
    }
  }
};
function drawFlavor(str) {
  format(0,255,1,10,LEFT,TOP);
  var mx = mouseX;
  var twid = textWidth(str)+5;
  if (twid+mx > 400) mx -= twid;
  rect(mx,mouseY,twid,15);
  fill(255);
  noStroke();
  text(str,mx+2.5,mouseY+2.5);
}

// ---------
// Play Game
// ---------

createPage("game");

defaultData.codemonCards = {};
defaultData.codemonDeck = [];
defaultData.codemonWins = 0;
defaultData.codemonLosses = 0;
function showCodemonProfile(name) {
  var prof = profileCache[name];
  if (!prof) return;
  strokeWeight(1);
  var hover = mouseEllipse(17.5,17.5,35,35);
  if (hover) {
    cursor(HAND);
    coloredAvatarImage(prof,17.5,17.5,37);
  } else coloredAvatarImage(prof,17.5,17.5,35);
  if (hover && clicked) {
    clicked = false;
    setTimeout(function(){
      viewProfile = prof;
    },1);
  }
  format(theme.text,false,0,15,LEFT,TOP);
  text((prof.displayname||prof.name),40,5);
  textAlign(RIGHT,TOP);
  if (currentEvent && currentEvent.winner) return;
  if (currentTurn.name == name) {
    format(32,0,1);
    rect(40,20,160,10);
    fill("red");
    var t = (Date.now()-currentTurn.time)/(120*1000);
    t = constrain(1-t,0,1);
    rect(40,20,160*t,10);
  }
  var player = PlayerMap[name];
  if (!player) return;
  format("#c38dbc",false,0,30,RIGHT,TOP);
  text(player.points+" ⚛",395,5);
}

var PlayerMap = {};
var InstMap = {};
var eventId = 0;
var currentTurn = false;
var currentEvent = false;
function callEvent(e) {
  currentEvent = e;
  console.log(e);
  EventMap[e.type](e);
  for (var i in InstMap) {
    InstMap[i].card = showCardGraphics(InstMap[i]).get();
  }
}
var EventMap = {};
EventMap.start = function(data) {
  var opp = Player(oppname,data[oppname]);
  var self = Player(user.name,data[user.name]);
  for (var i = 0; i < opp.hand.length; i++) {
    opp.hand[i].parent.onselect(opp.hand[i],self,opp);
  }
  for (var i = 0; i < self.hand.length; i++) {
    self.hand[i].parent.onselect(self.hand[i],opp,self);
  }
  currentTurn = {count:-1};
  EventMap.turn(data);
};
EventMap.turn = function(data) {
  currentTurn.time = data.time;
  currentTurn.name = data.turn;
  currentTurn.count++;
  var player = PlayerMap[data.turn];
  for (var i = 0; i < player.hand.length; i++) {
    var c = player.hand[i];
    // shift cooldowns down one
    for (var j = 0; j < c.moves.length; j++) {
      c.moves[j].cooling--;
    }
    // reduce effects by one
    for (var j in c.effects) {
      c.effects[j].turns--;
      if (c.effects[j].turns <= 0) delete c.effects[j];
    }
    // each turn
    c.parent.onturn(c,PlayerMap[data.offturn],player);
    c.hp -= c.getEffect("Virus",0);
    c.hp *= 1-c.getEffect("Virus 2.0",0);
  }
  // give user points
  var pointFunction = function(t) {
    return floor(t/7)+floor(t/3)+1;
  }
  player.points += pointFunction(floor(currentTurn.count/2));
  //
  var isyourturn = user.name == currentTurn.name;
  endturnbtn.visible = isyourturn;
  if (!isyourturn) {
    PlayerMap[user.name].hand.picking = false;
    return;
  }
  pickCard(user.name);
};
function pickCard(name) {
  // Let user choose card
  console.log(name);
  PlayerMap[name].hand.pick(function(card){
    selCard = card;
  });
}
function pickMove(inst,index) {
  // Let user choose move
  var move = inst.moves[index];
  var target = move.target || "opp";
  // get presets
  if (typeof target == 'string') {
    target = {
      "opp":function(use,inst,opp,self) {
        opp.hand.pick(function(sel){
          use(sel,inst,opp,self);
        });
      },
      "self":function(use,inst,opp,self) {
        self.hand.pick(function(sel){
          use(sel,inst,opp,self);
        });
      },
      "none":function(use,inst,opp,self) {
        use(inst,opp,self);
      }
    }[target];
  }
  target(function(){
    var list = arguments;
    // package some long objects
    for (var i = 0; i < list.length; i++) {
      if (list[i].id) list[i] = {type:"card",id:list[i].id};
      else if (list[i].name) list[i] = {type:"player",name:list[i].name};
      else if (list[i].path) list[i] = {type:"deck",name:list[i].path};
    }
    // make event
    var event = {};
    event.player = user.name;
    event.oppplayer = oppname;
    event.inst = inst.id;
    event.move = index;
    event.params = list;
    event.time = Date.now();
    setEvent(event,"move");
  },inst,PlayerMap[oppname],PlayerMap[user.name]);
}
EventMap.move = function(data) {
  var inst = InstMap[data.inst];
  var move = inst.moves[data.move];
  for (var i = 0; i < data.params.length; i++) {
    var p = data.params[i];
    switch (p.type) {
      case "card": data.params[i] = InstMap[p.id]; break;
      case "player": data.params[i] = PlayerMap[p.name]; break;
      case "deck": data.params[i] = PlayerMap[p.path[0]][p.path[1]]; break;
    }
  }
  var moveinst = inst.moves[data.move];
  moveinst.cooling = moveinst.cooldown;
  var self = PlayerMap[data.player];
  self.points -= moveinst.cost;
  move.use.apply(inst,data.params);
  // Check for deaths
  var opp = PlayerMap[data.oppplayer];
  for (var i = opp.hand.length-1; i >= 0; i--) {
    if (opp.hand[i].hp > 0) continue;
    opp.hand[i].hp = 0;
    opp.hand[i].parent.ondefeat(inst,opp.hand[i],self,opp);
    if (opp.hand[i].hp > 0) continue;
    var next = opp.deck.pop();
    opp.defeated.push(opp.hand.splice(i,1,next));
    next.parent.onselect(next,self,opp);
  }
  if (opp.hand.length == 0) {
    // Opponent has been defeated
    EventMap.gameover({
      winner:data.player,
      loser:data.oppplayer
    });
  }
  // Just in case (peptobepto card)
  for (var i = self.hand.length-1; i >= 0; i--) {
    if (self.hand[i].hp > 0) continue;
    self.hand[i].hp = 0;
    var next = self.deck.pop();
    self.defeated.push(self.hand.splice(i,1,next));
    next.parent.onselect(next,opp,self);
  }
  if (self.hand.length == 0) {
    // You have been defeated
    EventMap.gameover({
      winner:data.oppplayer,
      loser:data.player
    });
  }
  // Only do if no moves can be done:
  if ((function() {
    for (var i = 0; i < self.hand.length; i++) {
      for (var j = 0; j < self.hand[i].moves.length; j++) {
        if (self.hand[i].activeMove(j)) return true;
      }
    }
    return false;
  })()) {
    EventMap.turn({
      turn:data.oppplayer,
      offturn:data.player,
      time:data.time+5000,
    });
  }
};
EventMap.gameover = function(data) {
  // Do defeat stuff
  if (data.winner == user.name) {
    user.update({codemonWins:(user.data.codemonWins||0)+1});
  } else {
    user.update({codemonLosses:(user.data.codemonLosses||0)+1});
  }
};

function setEvent(e,t) {
  console.log(e,t);
  e.type = t;
  //callEvent(e);
  setKeyValue(game.id+"_event"+eventId,e,console.log,console.log);
}
var oppname;
var eventInt = false;
pageMap.game.onopen = function() {
  eventInt = true;
  function getNext(){
    var dit = Date.now();
    if (!eventInt) return;
    getKeyValue(game.id+"_event"+eventId,function(e) {
      if (!eventInt) return;
      var t = max(1000-(Date.now()-dit),0);
      var userKeys = Object.keys(game.users).sort();
      if (userKeys.length != 2) {
        setTimeout(getNext,t);
        return;
      }
      if (!e && eventId == 0 && !currentEvent && profileCache[userKeys[0]] && profileCache[userKeys[1]]) {
        startGame(userKeys);
      }
      if (e) {
        eventId++;
        currentEvent = e;
        callEvent(e);
      }
      setTimeout(getNext,t);
    });
  }
  getNext();
};
pageMap.game.onclose = function() {
  eventInt = false;
};
pageMap.game.before = function() {
  var userKeys = Object.keys(game.users).sort();
  //
  if (userKeys.length != 2) {
    noStroke();
    fill(theme.text);
    strokeWeight(1);
    textAlign(CENTER,CENTER);
    textSize(26);
    text("Waiting for\nsecond player to join...",width/2,height/2);
    return;
  }
  //
  if (!profileCache[userKeys[0]]) loadProfile(userKeys[0]);
  if (!profileCache[userKeys[1]]) loadProfile(userKeys[1]);
  oppname = userKeys[0] == user.name ? userKeys[1] : userKeys[0];
  //
  translate(5,357+4.5);
  showCodemonProfile(user.name);
  translate(0,-357);
  showCodemonProfile(oppname);
  translate(-5,-4.5);
  //
  if (!PlayerMap[user.name]) return;
  push();
  translate(0,202.5);
  PlayerMap[user.name].hand.draw(28,0,82.25,5);
  PlayerMap[user.name].deck.draw(0,120.15,25,0,cardback);
  PlayerMap[user.name].defeated.draw(375,120.15,25,-50,defeatedcardback);
  pop();
  push();
  scale(-1,-1);
  translate(-width,202.5-height);
  PlayerMap[oppname].hand.draw(28,0,82.25,5);
  PlayerMap[oppname].deck.draw(0,120.15,25,0,cardback);
  PlayerMap[oppname].defeated.draw(375,120.15,25,-50,defeatedcardback);
  pop();
  //169.5
  if (currentEvent && currentEvent.type == "gameover") {
    var msg = currentEvent.winner == user.name ? "You won!" : "You lost..."
    format(theme.notifications,theme.notification_stroke,1,20,CENTER,CENTER);
    var s = textWidth(msg)+20;
    rect(200-s/2,200-30,s,60,theme.bevel);
    format(theme.announcement,false,0,20,CENTER,CENTER);
    text(msg,200,200);
  }
  /* // Maybe I will do mercy later...
  if (data.mercy && data.mercy !== user.data.displayname) {
    format(theme.notifications,theme.notification_stroke,1,20,CENTER,CENTER);
    var str = data.mercy+" wants mercy...";
    var s = max(180,textWidth(str)+20);
    rect(-s/2,-60,s,125,theme.bevel);
    format(theme.announcement,false,0,20,CENTER,CENTER);
    text(str,0,-30);
    var hov1 = drawButton2("Give it to them",-50,-10,100,30);
    if (hov1 && clicked) {
      data.winner = "mercy";
      data.winmsg = "Mercy has been given";
      delete data.mercy;
      setKeyValue(game.id+"_data",data);
    }
    var hov2 = drawButton2("Continue their suffering",-80,25,160,30);
    if (hov1 && clicked) {
      delete data.mercy;
      setKeyValue(game.id+"_data",data);
    }
  }*/
};
pageMap.game.after = function() {
  if (selCard) {
    showCardGraphics(selCard,75,25,250,350,function(i) {
      pickMove(selCard,i);
      selCard = false;
    });
    if (!mouseRect(75,25,250,350) && clicked) {
      clicked = false;
      selCard = false;
      pickCard(user.name);
    }
  }
};
function startGame(userKeys) {
  var event = {};
  // Setup user decks
  function startUser(name) {
    // Generate Deck (will grab from collection later)
    //*
    var deck = [];
    for (var i = 0; i < 20; i++) {
      deck.push(CardList[floor(random()*CardList.length)]);
    }
    /*/
    var prof = profileCache[name];
    var deck = [];
    for (var i = 0; i < name.codemonDeck.length; i++) {
      deck.push(CardList[name.codemonDeck]);
    }
    //*/
    // Simplify Deck
    deck = deck.map(function(c){return {name:c.name,id:randomId(8)}});
    // Generate Hand
    var hand = [];
    for (var i = 0; i < 4; i++) {
      var sel = floor(random()*deck.length);
      hand.push(deck[sel]);
      deck.splice(sel,1);
    }
    // Add to event
    event[name] = {
      hand: hand,
      deck: deck,
    };
  }
  //
  startUser(userKeys[0]);
  startUser(userKeys[1]);
  // Choose turn
  var x = randomNumber(0,1);
  event.turn = userKeys[x];
  event.offturn = userKeys[1-x];
  event.time = Date.now();
  // Start event chain
  currentEvent = event;
  setEvent(event,"start");
}

var quitbtn = createButton("Q\nu\ni\nt",5,156,18,78,"game");
quitbtn.setStyles(warningButtonStyler);
quitbtn.onclick = function() {
  // Send leave event
  if (!currentEvent || currentEvent.type == "gameover") {
    leaveMatch();
    return;
  }
  setEvent({
    winner:oppname,
    loser:user.name
  },"gameover");
};

var endturnbtn = createButton("E\nn\nd\n\nT\nu\nr\nn",377,132.5,18,135,"game");
endturnbtn.visible = false;
endturnbtn.onclick = function() {
  setEvent({turn:oppname,offturn:user.name,time:Date.now()},"turn");
};

// ----
// Draw
// ----

function draw() {
  FTEMP.draw();
}
