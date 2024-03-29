var FTEMP = (function(){

// FTEMP Fire Template
// By: DragonFireGames
// Version: 1.0
// Description: A template for future projects

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

pageMap.loading.before = function() {
  format(theme.announcement,false,0,36,CENTER,CENTER);
  text("Booting up server...",200,200);
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
function draw() {
  background(theme.background);
  if (theme.background_image) {
    image(theme.background_image,0,0,400,400);
  }
  clicked = mouseWentDown("left");
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
  obj.project = getURLPath()[2];
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
  if (notify.project == getURLPath()[2]) {
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

 - Project: Checkers.com
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
            notifyUser(p2.name,user.data.displayname+" challenged you to a match of Checkers","",{game:gid});
            joinMatch(gid);
          };
        }
        return p2;
      });
    })(i);
    return p;
  });
};
var thumbnail = loadImage("https://i.ibb.co/k4JDb39/thumb.png");
pageMap.home.before = function() {
  beveledImage(thumbnail,5,30,170,170,theme.bevel);
  format(theme.announcement,false,0,14,LEFT,TOP);
  text("Playing: Checkers\n - Elo: "+(user.data.checkersElo||1200)+"\n - Wins: "+(user.data.checkersWins||0)+"\n - Losses: "+(user.data.checkersLosses||0)+"\n - Draws: "+(user.data.checkersDraws||0),5,205);
};
var challengeList = createListDiv("Challenge Friends",180,30,215,365,"home");

var matchmakingbtn = createButton("Join Matchmaking",5,300,170,95,"home");
matchmakingbtn.style.textSize = 20;
matchmakingbtn.hoverStyle.textSize = 20;
matchmakingbtn.clickStyle.textSize = 20;
matchmakingbtn.onclick = function() {
  updateKeyValue("matchmaking",function(gid){
    if (!gid) {
      gid = randomId(8);
      joinMatch(gid);
      return gid;
    }
    joinMatch(gid);
    return false;
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
  data = false;
  setPage("game");
  updateKeyValue("match_"+gid+"_users",function(v){
    if (!v) v = {};
    v[user.name] = user.data;
    return v;
  });
  setKeyValue("game_"+user.name,gid);
  watchKeyValue("match_"+gid+"_users",function(v){
    if (!v) v = {};
    for (var i in v) {
      if (!v[i] && game.users[i]) {
        onUserLeave(i);
        delete game.users[i];
      }
      if (!v[i]) break;
      if (!game.users[i]) {
        game.users[i] = v[i];
      }
    }
  });
}
function leaveMatch() {
  game.id = false;
  updateKeyValue("match_"+game.id+"_users",function(v){
    if (!v) v = {};
    v[user.name] = null;
    return v;
  });
  setKeyValue("game_"+user.name,false,function(){
    setPage("home");
  });
  abandonKeyValue("match_"+game.id+"_users");
  onUserLeave(user.name);
}

window.handleNotification = function(data) {
  if (data.game) {
    joinMatch(data.game);
  }
};

// ----
// Game
// ----

createPage("game");

// Checkers Code:
var GAME_TIME = 20*60*1000;
var checkersBoard = loadImage("https://images.chesscomfiles.com/chess-themes/boards/red/200.png");

var pieceTheme = "https://www.chess.com/bundles/web/images/checkers/"
var pieceMap = {
  "wk":loadImage(pieceTheme+"wk.svg"),
  "wm":loadImage(pieceTheme+"wm.svg"),
  "bk":loadImage(pieceTheme+"bk.svg"),
  "bm":loadImage(pieceTheme+"bm.svg"),
}

// Thanks wutadam
var Elo = {
  getRatingDelta:function(myRating, opponentRating, myGameResult) {
    var myChanceToWin = 1 / ( 1 + Math.pow(10, (opponentRating - myRating) / 400));
    return Math.round(32 * (myGameResult - myChanceToWin));
  },
  getNewRating:function(myRating, opponentRating, myGameResult) {
    return myRating + Elo.getRatingDelta(myRating, opponentRating, myGameResult);
  }
}

var userElos = {};
defaultData.checkersElo = 1200;
function showCheckersProfile(color) {
  var name = data[color].name;
  var prof = profileCache[name];
  if (!prof) {
    loadProfile(name);
    return;
  }
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
  text((prof.displayname||prof.name)+" ("+(prof.checkersElo||1200)+")",40,5);
  push();
  for (var i = 0; i < data[color].captured.length; i++) {
    var piece = pieceMap[data[color].captured[i]];
    image(piece,35,20,20,20);
    translate(8,0);
  }
  var v = calcLead(color);
  if (v > 0) {
    text("+"+v+"",48,24);
  }
  pop();
  textAlign(RIGHT,TOP);
  if (data.winner) return;
  var time = data[color].timeleft || GAME_TIME;
  if (data.turn == color) time -= Date.now() - data.turn_time;
  if (time < 0) {
    var oppColor = {black:"white",white:"black"}[color];
    data.winner = oppColor;
    data.winmsg = (color[0].toUpperCase()+color.slice(1))+" timed out!";
    setKeyValue(game.id+"_data",data);
    time = 0;
  }
  time = floor(time/1000);
  var secs = time % 60;
  if (secs < 10) secs = "0"+secs;
  var mins = floor(time/60);
  text(mins+":"+secs,288,5);
  if (data.turn == color) {
    fill("red");
    stroke("black");
    strokeWeight(1);
    ellipse(278,25,10,10);
  }
}

function calcValue(list) {
  var valueMap = {
    "wk":2,
    "wm":1,
    "bk":2,
    "bm":1,
  };
  var sum = 0;
  for (var i = 0; i < list.length; i++) {
    sum += valueMap[list[i]];
  }
  return sum;
}
function calcLead(color) {
  var oppColor = {
    white:"black",
    black:"white"
  }[color];
  var v1 = calcValue(data[color].captured);
  var v2 = calcValue(data[oppColor].captured);
  return v1-v2;
}

var data;
var selX = selY = false;
var moveCache = {};
pageMap.game.before = function() {
  var userKeys = Object.keys(game.users).sort();
  //
  getKeyValue(game.id+"_data",function(b) {
    data = b || data;
    if (data && typeof data == 'string') data = data;
    if (userKeys.length != 2) return;
    if (!data) {
      data = {};
      data.board = [
        [ "" ,"bm", "" ,"","","wm", "" ,"wm"],
        ["bm", "" ,"bm","","", "" ,"wm", "" ],
        [ "" ,"bm", "" ,"","","wm", "" ,"wm"],
        ["bm", "" ,"bm","","", "" ,"wm", "" ],
        [ "" ,"bm", "" ,"","","wm", "" ,"wm"],
        ["bm", "" ,"bm","","", "" ,"wm", "" ],
        [ "" ,"bm", "" ,"","","wm", "" ,"wm"],
        ["bm", "" ,"bm","","", "" ,"wm", "" ],
      ];
      /*data.board = [
        [ "" ,"","","","","","",""],
        ["","bm","","bm","","wm","",""],
        ["","","","","wm","","",""],
        ["","bm","","bm","","","",""],
        ["","","","","wm","","wm",""],
        ["","","","bm","","","",""],
        ["","","bm","","wm","","wm",""],
        ["","","","","","","",""],
      ];*/
      var sel = randomNumber(0,1);
      data.white = {
        name: userKeys[sel],
        captured: [],
        timeleft: GAME_TIME
      };
      data.black = {
        name: userKeys[1-sel],
        captured: [],
        timeleft: GAME_TIME
      };
      data.moves = {};
      data.turn = "white";
      data.turn_time = Date.now();
      data.lastmove = [];
      data.takeonly = false;
      setKeyValue(game.id+"_data",data);
    }
  });
  //
  if (userKeys.length != 2 && !data) {
    noStroke();
    fill(theme.text);
    strokeWeight(1);
    textAlign(CENTER,CENTER);
    textSize(26);
    text("Waiting for\nsecond player to join...",width/2,height/2);
    return;
  };
  //
  if (!data) return;
  if (!data.white) return;
  var colorMap = {
    true: "white",
    false: "black"
  };
  var iswhite = data.white.name == user.name;
  var color = colorMap[iswhite];
  var oppColor = colorMap[!iswhite];
  //
  translate(56,344+7);
  showCheckersProfile(color);
  translate(0,-344);
  showCheckersProfile(oppColor);
  translate(-56,-7);
  //
  var myTurn = userKeys[data.turn] == user.name;
  translate(width/2,height/2);
  push();
  scale(36,36);
  if (!iswhite) scale(-1,-1);
  image(checkersBoard,-4,-4,8,8);
  if (!iswhite) scale(-1,-1);
  var moves = [];
  if (data.winner) selX = selY = false;
  noStroke();
  fill("rgba(255,255,0,0.5)");
  for (var i = 0; i < data.lastmove.length; i++) {
    var m = data.lastmove[i];
    var tx = m.x-4;
    var ty = m.y-4;
    if (!iswhite) tx = -tx-1, ty = -ty-1;
    rect(tx,ty,1,1);
  }
  if (selX !== false && selY !== false) {
    var tx = selX-4;
    var ty = selY-4;
    if (!iswhite) tx = -tx-1, ty = -ty-1;
    rect(tx,ty,1,1);
    moves = getMoves(selX,selY);
  }
  var sx = selX, sy = selY;
  if (clicked) selX = selY = false;
  for (var x = 0; x < 8; x++) {
    var tx = x-4;
    if (!iswhite) tx = -tx-1;
    for (var y = 0; y < 8; y++) {
      var ty = y-4;
      if (!iswhite) ty = -ty-1;
      var piece = data.board[x][y];
      if (!piece) continue;
      var hover = piece[0] == color[0] && data.turn == color && mouseRect(tx,ty,1,1) && !data.winner;
      if (hover || (selX === x && selY === y)) {
        image(pieceMap[piece],tx-1/28,ty-1/28,15/14,15/14);
      } else {
        image(pieceMap[piece],tx,ty,1,1);
      }
      if (!hover) continue;
      cursor(HAND);//cursor('grab');
      //if (mouseIsPressed) cursor('grabbing');
      if (clicked && (!data.takeonly || (x == data.takeonly.x && data.takeonly.y == y))) {
        //playSound(clickSound);
        selX = x;
        selY = y;
      }
    }
  }
  for (var i = 0; i < moves.length; i++) {
    var x = moves[i][0];
    var y = moves[i][1];
    var tx = x-4;
    var ty = y-4;
    if (!iswhite) tx = -tx-1, ty = -ty-1;
    var hover = mouseRect(tx,ty,1,1);
    if (hover) cursor(HAND);
    if (data.board[x] && data.board[x][y]) {
      stroke("rgba(0,0,0,0.3)");
      strokeWeight(3/28);
      noFill();
      if (hover) ellipse(tx+0.5,ty+0.5,13/14,13/14);
      else ellipse(tx+0.5,ty+0.5,6/7,6/7);
    }
    else {
      fill("rgba(0,0,0,0.3)");
      noStroke();
      if (hover) ellipse(tx+0.5,ty+0.5,11/28,11/28);
      else ellipse(tx+0.5,ty+0.5,5/14,5/14);
    }
    if (hover && clicked) {
      // Do move
      //playSound(clickSound);
      data.board[x][y] = data.board[sx][sy];
      data.board[sx][sy] = "";
      var p = data.board[x][y][1];
      if (p == "m" && ((y == 0 && iswhite) || (y == 7 && !iswhite))) {
        data.board[x][y] = color[0]+"k";
      }
      var cx = (sx-x)/2+x;
      var cy = (sy-y)/2+y;
      if (data.board[cx] && data.board[cx][cy]) {
        data[color].captured.push(data.board[cx][cy]);
        data.board[cx][cy] = "";
        if (data.takeonly == false) {
          data.lastmove = [{x:x,y:y}];
        }
        data.lastmove.push({x:sx,y:sy});
        if (canTake(x,y)) {
          data.takeonly = {x:x,y:y};
          selX = x;
          selY = y;
          moveCache = {};
          setKeyValue(game.id+"_data",data);
          return;
        }
      }
      data.turn = oppColor;
      var end = checkForGameEnd(oppColor[0]);
      if (end == "win") {
        data.winner = color;
        data.winmsg = color[0].toUpperCase()+color.slice(1)+" Wins!";
        //updateElo(user.name,data[oppColor].name,1.0);
      }
      if (end == "draw") {
        data.winner = "draw";
        data.winmsg = "Draw!";
        //updateElo(user.name,data[oppColor].name,0.5);
      }
      data[color].timeleft -= Date.now() - data.turn_time;
      data.turn_time = Date.now();
      data.takeonly = false;
      selX = selY = false;
      setKeyValue(game.id+"_data",data);
      moveCache = {};
    }
  }
  pop();
  if (data.winner) {
    updateElo(data.winner);
    format(theme.notifications,theme.notification_stroke,1,20,CENTER,CENTER);
    var s = textWidth(data.winmsg)+20;
    rect(-s/2,-30,s,60,theme.bevel);
    format(theme.announcement,false,0,20,CENTER,CENTER);
    text(data.winmsg,0,0);
  }
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
  }
  translate(-width/2,-height/2);
};
function updateElo(winner) {
  if (game.over) return;
  game.over = true;
  var outcome = {
    "black":0.0,
    "draw":0.5,
    "white":1.0,
  }[winner];
  if (outcome === undefined) return;
  if (data.black.name == user.name) outcome = 1-outcome;
  var n = Elo.getNewRating(profileCache[data.white.name].checkersElo||1200,profileCache[data.black.name].checkersElo||1200,outcome);
  if (data.white.name == user.name) user.update({checkersElo:n});
  if (winner == "draw") {
    user.update({checkersDraws:(user.data.checkersDraws||0)+1});
  } else if (data[winner].name == user.name) {
    user.update({checkersWins:(user.data.checkersWins||0)+1});
  } else {
    user.update({checkersLosses:(user.data.checkersLosses||0)+1});
  }
}
function onUserLeave(name) {
  if (!data || data.winner) {
    game.over = true;
    return;
  }
  if (data.white.name == name) {
    data.winner = "black";
    data.winmsg = "White Resigned";
  } else {
    data.winner = "white";
    data.winmsg = "Black Resigned";
  }
  updateElo(data.winner);
  setKeyValue(game.id+"_data",data);
}

function checkForGameEnd(c,board) {
  board = board || data.board;
  function checkMaterial() {
    for (var x = 0; x < 8; x++) {
      for (var y = 0; y < 8; y++) {
        if (!board[x] || !board[x][y] || board[x][y][0] != c) continue;
        return true;
      }
    }
    return false;
  }
  if (!checkMaterial()) {
    return "win";
  }
  function checkMoves() {
    for (var x = 0; x < 8; x++) {
      for (var y = 0; y < 8; y++) {
        if (!board[x] || !board[x][y] || board[x][y][0] != c) continue;
        var moves = getMoves(x,y,false,true,board);
        if (moves > 0) return true;
      }
    }
    return false;
  }
  if (!checkMoves()) {
    return "draw";
  }
  return false;
}

function canTake(x,y,board) {
  var moves = getMoves(x,y,true,false,board);
  return moves.length > 0;
}

function checkForTakes(c,board) {
  board = board || data.board;
  var count = 0;
  for (var x = 0; x < 8; x++) {
    for (var y = 0; y < 8; y++) {
      if (!board[x] || !board[x][y] || board[x][y][0] != c) continue;
      if (canTake(x,y,board)) return true;
    }
  }
  return false;
}
    
function getMoves(x,y,take,loop,board) {
  if (!loop && !take && moveCache[x+","+y]) return moveCache[x+","+y];
  board = board || data.board;
  var p = board[x][y];
  if (!p) return [];
  var c = p[0];
  var moves = [];
  var takeonly = !loop && (take || data.takeonly || checkForTakes(c,board));
  function get(mx,my) {
    if (board[mx] === undefined) return false;
    if (board[mx][my] === undefined) return false;
    return board[mx][my];
  }
  function add(mx,my,t) {
    var p2 = get(x+mx,y+my);
    var p3 = get(x+mx*2,y+my*2);
    // Out of Bounds
    if (p2 === false) return;
    // Unoccupied
    if (p2 === "" && t == false) {
      if (!takeonly) moves.push([x+mx,y+my]);
      return;
    }
    // Your piece
    if (p2[0] == c) return;
    // Their piece (capture)
    if (p3 || p3 === false) return;
    moves.push([x+mx*2,y+my*2,"capture"]);
  }
  var moveMap = {
    "k":function(t) {
      add(1,1,t);
      add(1,-1,t);
      add(-1,1,t);
      add(-1,-1,t);
    },
    "m":function(t) {
      var d = -1;
      if (c == "b") d = 1;
      add(1,d,t);
      add(-1,d,t);
    },
  };
  moveMap[p[1]](false);
  if (!loop && !take) moveCache[x+","+y] = moves;
  return moves;
}

var quitbtn = createButton("Q\nu\ni\nt",5,156,18,78,"game");
quitbtn.onclick = function() {
  leaveMatch();
};

var mercybtn = createButton("M\ne\nr\nc\ny",377,140,18,86,"game");
mercybtn.onclick = function() {
  data.mercy = user.data.displayname;
  setKeyValue(game.id+"_data",data);
};

// ----
// Draw
// ----

function draw() {
  FTEMP.draw();
}
