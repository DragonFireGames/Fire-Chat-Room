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
window.drawButton2 = function(label,x,y,w,h,Tx,Ty,filler) {
  var hover = mouseRect(x-(Tx||0),y-(Ty||0),w,h);
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
  var hoverfriend = drawButton2(str,165,365,25,25,0,0);
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

 - Project: Fire Chat Room 2.0
 - Credit: Developed By DragonFireGames
 - Remixer: (Your name)
 - Version: Beta Release 0.5.0

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

// -----------
// Home Screen
// -----------

roomMap = {};
createPage("home");
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
    var hover = roomlistdiv.hover && b.mouseRect(5,5,160,20);
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

createPage("editgc");
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

var leavebtn = createButton("Exit Editor Menu",5,370,192.5,25,"editgc");
leavebtn.onclick = function() {
  setPage("home");
};

var deletegcbtn = createButton("Delete Group Chat",202.5,370,192.5,25,"editgc");
deletegcbtn.setStyles(warningButtonStyler);
deletegcbtn.onclick = function() {
  deleteGC(editingGC.id,function(){
    setPage("home");
  });
};

var gcnameInput = createInput(false,7.5,18.5,190,22,"editgc");
gcnameInput.validateinput = function(e) {
  if (e == "\n") return false;
};
gcnameInput.onchange = function() {
  gcdatadb.update(editingGC.id,function(e){
    e.name = gcnameInput.value;
    editingGC.name = gcnameInput.value;
    return e;
  });
};

var gcavatarBtn = createButton(false,7.5,61.5,190,72,"editgc");
gcavatarBtn.addComponent("image",defaultAvatar);
gcavatarBtn.onclick = function() {
  var url = editingGC.avatar;
  if (url === false) url = "";
  var nurl = prompt("Paste image: ",url);
  if (nurl === null) {
    gcdatadb.update(editingGC.id,function(e){
      e.avatar = false;
      return e;
    });
    gcavatarBtn.img = defaultAvatar;
  }
  if (!nurl) return;
  loadImage(nurl,function(img) {
    gcdatadb.update(editingGC.id,function(e){
      e.avatar = nurl;
      return e;
    });
    gcavatarBtn.img = img;
  });
};

// ---------
// Chat Room
// ---------

createPage("chatroom");
var exitbtn = createButton("Exit",5,5,60,20,"chatroom");
exitbtn.onclick = function() {
  setPage("home");
};

function setRoom(room,ispublic) {
  if (currentRoom) currentRoom.leave();
  createChatRoom(room,ispublic).open();
}

var input = createElement(0,375,400,25,"chatroom");
input.addComponent("input");
input.setStyles(inputStyler,{
  pady:8,
  textmax:375,
  fill:function(){return theme.input_box_hover;}
});
input.style.fill = function(){return theme.input_box;};
input.placeholder = "Click here and type";
input.oninput = function() {
  emojify(input);
  this.height = max(this.textHeight+10,25);
  this.y = 400-this.height;
};
currentRoom.defaultMsg = "default";
function sendMessage() {
  if (editingMessage) {
    editingMessage.msg = input.value;
    editingMessage.inserts = insertList;
    editingMessage.replyTo = replyTo;
    editingMessage.edited = Date.now();
    currentRoom.editMsg(editingMessage);
    editingMessage = false;
  } else {
    var matches = input.value.match(/(?<=\@)[^\s]+/g);
    for (var i = 0; i < matches.length; i++) {
      notifyUser(matches[i].toLowerCase(),user.data.displayname+" mentioned you!",input.value,{room:currentRoom.name});
    }
    currentRoom.sendMsg({
      sender: user.name,
      msg: input.value,
      inserts: insertList,
      date: Date.now(),
      replyTo: replyTo,
      edited: false,
      reactions: {},
    });
  }
  setKeyValue("last_active_"+currentRoom.name,Date.now());
  replyTo = false;
  insertList = [];
  showInserts = [];
  input.value = "";
  input.update();
  input.cursorPos = 0;
}
input.validateinput = function(e) {
  if (e == "\n" && !keyDown(SHIFT) && input.value != "") {
    sendMessage();
    return false;
  }
};
input.onmobile = sendMessage;

window.handleNotification = function(data) {
  if (data.room) {
    setPage("chatroom");
    setRoom(data.room);
  }
};

// Inserts
var insertbtn = createElement(378,378,20,20,"chatroom");
insertbtn.addComponent("button");
insertbtn.addComponent("image","https://cdn-icons-png.flaticon.com/512/262/262038.png")
insertbtn.addComponent("ellipse");
insertbtn.drawers.shift();
var insertList = [];
var showInserts = [];
insertbtn.onclick = function() {
  var url = prompt("Paste url, sound or image link here.\nExample: https://pumpkin-smasher-2.onrender.com\nAlso link rooms like #home");
  if (!url) return;
  if (!(/^(https?\:\/\/|www\.)[\S]+/).test(url) && url.charAt(0) != "#") {
    prompt("not a valid url");
    return;
  }
  insertList.unshift(url);
  showInserts.unshift(loadInsert(url,{height:0}));
  scroll = 0;
};

var soundIcon = loadImage("https://cdn-icons-png.flaticon.com/512/347/347794.png");
var pauseIcon = loadImage("https://cdn-icons-png.flaticon.com/512/16/16427.png");
var playIcon = loadImage("https://cdn-icons-png.flaticon.com/512/0/375.png");

var EMBED_HEIGHT = 100;
var IMAGE_HEIGHT = 300;
function drawInsert(link,onclick) {
  onclick = onclick || function(){return true;};
  format(theme.text,false,0,12,LEFT,TOP);
  if (link.type == "room") {
    shift(-21);
    var str = "#"+link.room;
    var hover = drawButton2(str,39,0,10+textWidth(str),21,0,0);
    if (hover && clicked && onclick()) {
      //playSound(clickSound);
      setRoom(link.room);
    }
  }
  else if (link.type == "image") {
    var box = link.box;
    shift(-box.h);
    var hover = mouseRect(40,1,box.w,box.h);
    var img = link.image;
    if (hover) {
      cursor(HAND);
      beveledImage(img, 39, 0, box.w+2, box.h+2, theme.bevel);
    } else beveledImage(img, 40, 1, box.w, box.h, theme.bevel);
    if (clicked && hover && onclick()) {
      //playSound(clickSound);
      prompt("Linked image url",link.url);
    }
  }/*
  else if (link.type == "gif") {
    shift(-IMAGE_HEIGHT);
    var box = centerRect(350,IMAGE_HEIGHT,link.width,link.height);
    var hover = mouseRect(40,-4+ty+box.y,box.w,box.h);
    if (hover) {
      cursor(HAND);
      link.draw(39, -5+box.y, box.w+2, box.h+2);
    } else link.draw(40, -4+box.y, box.w, box.h);
    if (clicked && hover && onclick()) {
      playSound(clickSound);
      prompt("Linked image url",link.src);
    }
  }*/
  else if (link.type == "code.org") {
    shift(-EMBED_HEIGHT);
    var s = EMBED_HEIGHT;
    var hover = mouseRect(40,0,s,s);
    var img = link.thumbnail;
    if (hover) {
      cursor(HAND);
      beveledImage(img, 39, -1, s+2, s+2, theme.bevel);
    }
    else beveledImage(img, 40, 0, s, s, theme.bevel);
    var desc = link.name;
    if (link.projectType) desc += "\nType: "+link.projectType
    if (link.publishedAt) desc += "\nPublished "+link.publishedAt;
    if (link.publishedAt) desc += "\nCreated "+link.createdAt;
    text(desc,45+s,4,350-s);
    if (clicked && hover && onclick()) {
      //playSound(clickSound);
      prompt("Linked project url",link.url);
    }
  }
  else if (link.type == "youtube") {
    shift(-EMBED_HEIGHT);
    var box = link.box || {x:0,y:0,w:0,h:0};
    var hover = mouseRect(40,box.y,box.w,box.h);
    var img = link.thumbnail;
    var yticon = loadIcon("youtube.com");
    if (hover) {
      cursor(HAND);
      beveledImage(img, 39, box.y-1, box.w+2, box.h+2, theme.bevel);
      image(yticon, 21+box.w/2, -23+box.y+box.h/2, 38, 38);
    } else {
      beveledImage(img, 40, box.y, box.w, box.h, theme.bevel);
      image(yticon, 22+box.w/2, -22+box.y+box.h/2, 36, 36);
    }
    link.author = link.author || {};
    var desc = link.name||"(untitled)";
    desc += "\n" + (link.author.name || "(unknown)");
    desc += "\nPublished "+(link.published || "at the start of time");
    desc += "\n"+(link.author.subscribers || "NaN")+" subs, "+(link.views || "NaN")+" views";
    desc += "\nCategory: "+(link.category || "None");
    text(desc,45+box.w,4,350-box.w);
    if (clicked && hover && onclick()) {
      //playSound(clickSound);
      prompt("Linked youtube url",link.url);
    }
  }
  else if (link.type == "url") {
    shift(-34);
    var icon = loadIcon(link.url);
    var hover = mouseRect(40,0,29,29);
    text(link.url,78,14);
    if (hover) {
      cursor(HAND);
      beveledImage(icon,39,-1,36,36,theme.bevel);
    } else beveledImage(icon,40,0,34,34,theme.bevel);
    if (clicked && hover && onclick()) {
      //playSound(clickSound);
      prompt("Linked url:",link.url);
    }
  }
  else if (link.type == "sound") {
    shift(-34);
    var snd = link.sound;
    var icon = playIcon;
    if (snd.isPlaying) icon = pauseIcon;
    var hover = mouseRect(40,-4,29,29);
    if (hover) {
      cursor(HAND);
      image(icon,39,-1,36, 36);
    } else image(icon,40,0,34,34);
    var desc = snd.name || "";
    if (snd.duration) {
      var toTime = function(secs) {
        var minutes = floor(secs/60);
        var seconds = floor(secs) % 60;
        if (seconds < 10) seconds = "0"+seconds;
        //var ms = floor(secs*100) % 100;
        //if (ms < 10) ms = "0"+ms;
        return minutes+":"+seconds//+"."+ms;
      }
      var str = toTime(snd.duration);
      if (snd.isPlaying) {
        var passed = toTime((Date.now()-snd.startTime)/1000);
        str = passed+" / "+str;
      }
      desc += "\n"+str;
    }
    text(desc,78,5,317);
    if (clicked && hover && onclick()) {
      if (keyDown(SHIFT)) {
        //playSound(clickSound);
        prompt("Linked url",link.url);
      } else {
        if (snd.isPlaying) {
          snd.stop();
          delete activeSounds[link.url];
          if (Object.keys(activeSounds).length == 0) {
            if (theme.background_music) theme.background_music.play();
          }
        } else {
          if (Object.keys(activeSounds).length == 0) {
            if (theme.background_music) theme.background_music.stop();
          }
          snd.play();
          activeSounds[link.url] = Date.now();
        }
      }
    }
  }
  shift(-5);
};
function loadInsert(url,msg) {
  var link = {};
  link.url = url;
  msg.height += 5;
  if (url.charAt(0) == "#") {
    link.room = url.substring(1,url.length).toLowerCase().replace(/[^a-zñ0-9_-\s]/g,"");
    link.type = "room";
    msg.height += 21;
    insertList.push(link);
    return link;
  }
  var code_org_match = url.match(/^https:\/\/studio\.code\.org\/projects\/(\w+)\/([\w\d_-]+)(\/|\/view|\/edit|)/);
  if (code_org_match) {
    var id = code_org_match[2];
    link.id = id;
    link.projectType = code_org_match[1];
    link.thumbnail = loadProjectThumbnail(id);
    var req = loadProject(id,function(data) {
      link.name = data.name;
      link.publishedAt = date(new Date(data.publishedAt));
      link.createdAt = date(new Date(data.createdAt));
      link.type = "code.org";
    });
    msg.height += EMBED_HEIGHT;
    return link;
  }
  var youtube_match = url.match(/^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/);
  if (youtube_match) {
    var id = youtube_match[1];
    link.id = id;
    link.type = "youtube";
    link.thumbnail = loadImage("https://img.youtube.com/vi/"+id+"/hqdefault.jpg",function(thumb) {
      link.box = centerRect(350,EMBED_HEIGHT,thumb.width,thumb.height);
    });
    var req = createRequest("/youtube/info/"+id,false,false);
    req.send(function(data) {
      for (var i in data) link[i] = data[i];
      if (data.published) link.published = date(new Date(data.published));
    });
    msg.height += EMBED_HEIGHT;
    return link;
  }
  link.type = "url";
  msg.height += 34;
  link.image = loadImage(url,function(img){
    link.image = img;
    link.type = "image";
    link.box = centerRect(350,IMAGE_HEIGHT,img.width,img.height);
    msg.height += link.box.h-34;
    /*if (url.match(/\.gif\??\#?[^]*$/)) {
      link.type = "gif";
      link.image = loadGIF(url);
    }*/
  },function(err){
    loadSound(url,function(sound){
      if (sound.duration == 0) return;
      link.type = "sound";
      link.sound = sound;
    });
  });
  return link;
};

// old button drawer
function drawButton2(label,x,y,w,h,Tx,Ty,filler) {
  var hover = mouseRect(x-(Tx||0),y-(Ty||0),w,h);
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

var scroll = 0;
var scrollMax;
pageMap.chatroom.before = function() {
  push();
  ty = 0;
  shift(395-input.height+scroll);
  if (replyTo) shift(-20);
  if (showInserts.length > 0) {
    translate(-35,0);
    for (var i = 0; i < showInserts.length; i++) {
      drawInsert(showInserts[i],function(){
        if (!keyDown(SHIFT)) return true;
        if (prompt("Remove item?") === null) return;
        insertList.splice(i,1);
        showInserts.splice(i,1);
        i--;
      });
    }
    translate(35,0);
    shift(-17);
    format(theme.announcement,false,0,12,LEFT,TOP);
    text("Attachments:",5,5);
  }
  if (editingMessage) {
    shift(-17);
    format(theme.announcement,false,0,12,LEFT,TOP);
    text("Editing message (esc to cancel):",5,5);
  }
  currentRoom.chat = currentRoom.chat || [];
  for (var i = 0; i < currentRoom.chat.length; i++) {
    if (ty < 0) break;
    var msg = currentRoom.getMsg(currentRoom.chat[i],loadMessage);
    if (msg !== "default") {
      var h = msg.height+5;
      if (ty-h > 400) {
        shift(-h);
        continue;
      }
    }
    drawMessage(msg);
  }
  pop();
  if (mouseDown("left")) Scroll(mouseY-pmouseY);
  if (keyDown(UP_ARROW)) Scroll(20);
  if (keyDown(DOWN_ARROW)) Scroll(-20);
}
pageMap.chatroom.after = function() {
  if (replyTo) {
    push();
    translate(0,400-input.height);
    format(theme.messages,theme.stroke);
    rect(5,-20,390,20,theme.bevel,theme.bevel,0,0);
    format(theme.placeholder,false,0,12,LEFT,CENTER);
    text(replyTo.msg,10,-10);
    if (mouseRect(5,-20,390,20) && mouseWentDown("left")) replyTo = false;
    pop();
  }
  if (keyCode == 27 && editingMessage) {
    editingMessage = false;
    input.value = "";
    input.cursorPos = 0;
    input.update();
    insertList = [];
    viewInserts = [];
    replyTo = false;
    keyCode = 0;
  }
}
pageMap.chatroom.Event.mouseWheel = function(dx,dy) {
  Scroll(-dy/2);
};

var editingMessage = false;
function setInputsFromData(msg) {
  input.value = msg.msg;
  input.cursorPos = input.value.length;
  input.update();
  insertList = msg.inserts;
  showInserts = [];
  for (var i = 0; i < insertList.length; i++) {
    showInserts.push(loadInsert(insertList[i],{height:0}));
  }
  replyTo = msg.replyTo;
}

function Scroll(y) {
  scroll += y;
  scroll = constrain(scroll,0,Infinity);
}

var ty = 0;
function shift(t) {
  translate(0,t);
  ty += t;
}
function loadMessage(msg) {
  msg.oldmsg = JSON.parse(JSON.stringify(msg));
  
  msg.msg = censor(msg.msg);
  
  var h = 20;
  if (msg.announcement) {
    h = 0;
  }
  var lines = getLines(msg.msg,360);
  msg.msgheight = lines.length*(12*1.25);
  h += msg.msgheight;
  msg.height = h;
  if (msg.inserts) {
    for (var i = 0; i < msg.inserts.length; i++) {
      msg.inserts[i] = loadInsert(msg.inserts[i],msg);
    }
  }
  return msg;
}

var deleteIcon = loadImage("https://www.iconsdb.com/icons/preview/red/trash-10-xxl.png");
var editIcon = loadImage("https://www.freeiconspng.com/thumbs/edit-icon-png/edit-new-icon-22.png");
var replyIcon = loadImage("https://cdn-icons-png.flaticon.com/512/1933/1933008.png");
var emojiIcon = loadImage("https://creazilla-store.fra1.digitaloceanspaces.com/icons/3260575/add-reaction-icon-md.png");
var reportIcon = loadImage("https://i.ibb.co/hFHNfMV/report-image-transparent.png");

var replyTo = false;
function drawMessage(msg,i) {
  if (msg == "default") {
    fill(theme.announcement);
    shift(-35);
    textAlign(LEFT,TOP);
    text("Loading...",10,10,380);
    return;
  }
  
  if (msg.announcement) {
    shift(-msg.msgheight);
    fill(theme.announcement);
    textAlign(CENTER,CENTER);
    text(msg.msg,10,10,380);
    textAlign(LEFT,TOP);
    return;
  }
  
  if (!msg.sender) {
    return;
  }
  var prof = getProfile(msg.sender);
  
  shift(-5);
  
  var tx = 10;
  msg.reactions = msg.reactions || {};
  if (Object.keys(msg.reactions).length > 0) {
    shift(-17);
  }
  for (var i in msg.reactions) {
    var amount = Object.keys(msg.reactions[i]).length;
    //var wid = textWidth(amount+i)+5;
    var wid = 28.15;
    /*if (tx+wid > 390) {
      shift(-17);
      tx = 10;
    }*/
    var hover = mouseRect(tx,5,wid,17);
    if (hover) {
      cursor(HAND);
      format(theme.button_hover,theme.button_stroke_hover)
    } else {
      format(theme.buttons,theme.button_stroke);
    }
    if (msg.reactions[i][user.name]) {
      if (hover) fill(theme.button_pressed_hover);
      else fill(theme.button_pressed);
    }
    rect(tx,5,wid,17,theme.bevel);
    textAlign(CENTER,CENTER);
    if (hover) fill(theme.button_text_hover);
    else fill(theme.button_text);
    noStroke();
    text(amount+i,tx+wid/2,14.5);
    if (clicked && hover) {
      //playSound(clickSound);
      if (msg.reactions[i][user.name]) removeReaction(i, msg);
      else addReaction(i, msg);
    }
    tx += wid;
  }
  
  // Box
  format(theme.messages,theme.stroke);
  var str = JSON.stringify(msg.msg);
  var isPing = str.includes("@"+user.name) ||
    str.includes("@"+user.displayname) ||
    str.includes("@everyone") ||
    str.includes("@here");
  var messageHover = mouseRect(5, 5-msg.height, 390, msg.height);
  if (messageHover) fill(theme.message_hover);
  if (editingMessage == msg.oldmsg) fill(theme.message_hover);
  if (isPing) {
    fill(theme.ping_messages);
    if (messageHover) fill(theme.ping_message_hover);
  }
  rect(5, 5-msg.height, 390, msg.height, theme.bevel);
  if (messageHover && keyDown(CONTROL) && keyWentDown("c")) {
    prompt("Message:",msg.msg);
  }
  
  if (msg.inserts) {
    for (var i = 0; i < msg.inserts.length; i++) {
      drawInsert(msg.inserts[i]);
    }
  }
  
  shift(-20);
  
  shift(-msg.msgheight);
  textAlign(LEFT,TOP);
  fill(theme.text);
  noStroke();
  text(msg.msg||"null",42.5,24,347.5);
  
  var avatarHover = mouseEllipse(23,23,35,35);
  if (avatarHover) {
    cursor(HAND);
    coloredAvatarImage(prof,23,23,37);
  } else coloredAvatarImage(prof,23,23,35);
  if (avatarHover && clicked) {
    clicked = false;
    viewProfile = prof;
  }
  
  noStroke();
  textAlign(LEFT,TOP);
  fill(prof.color||255);
  text(prof.displayname||"null",42.5,10,347.5);
  textAlign(RIGHT);
  fill(theme.date);
  var str = date(msg.date||0);
  if (msg.edited) str = "Edited "+date(msg.edited||0);
  text(str,42.5,10,347.5);
  
  if (messageHover) {
    var tx = 0;
    function drawButton(icon,x,s,click) {
      tx+=22;
      var hover = mouseRect(400-tx,3,19,19);
      if (hover) {
        cursor(HAND);
        format(theme.button_hover,theme.button_stroke_hover);
      } else {
        format(theme.buttons,theme.button_stroke);
      }
      rect(400-tx,3,19,19,theme.bevel);
      image(icon,400-tx+x,5,s,s);
      if (clicked && hover) {
        //playSound(clickSound);
        click();
      }
    }
    var isOwn = msg.sender == user.name;
    if (isOwn || user.isAdmin) drawButton(deleteIcon,2.5,15,function() {
      currentRoom.deleteMsg(msg.oldmsg);
    });
    if (isOwn) drawButton(editIcon,3,15,function() {
      setInputsFromData(msg.oldmsg);
      editingMessage = msg.oldmsg;
    });
    drawButton(replyIcon,2.5,15,function() {
      if (!prof) return;
      var str = "@"+prof.name+" ";
      input.value = str+input.value;
      input.cursorPos += str.length;
      input.update();
      var lines = getLines("Replying to @"+msg.sender+": "+msg.msg,370);
      replyTo = {
        msg:lines[0],
        sender:msg.sender,
        id:msg.id
      };
      if (lines[1]) str += "...";
      clicked = false;
      //if (beginTypingSound) playSound(beginTypingSound);
      //isTyping = true;
    });
    drawButton(emojiIcon,1,17,function() {
      var string = "\n";
      var counter = 0;
      for (var e in emojiList) {
        string += e+" → "+emojiList[e]+"\n";
        if (++counter > 23) break;
      }
      var emoji = prompt("Enter name of emoji:"+string,"");
      while (!emojiList[emoji]) {
        if (!emoji) break;
        string = "\n";
        var string2 = "";
        var counter = 0;
        for (var e in emojiList) {
          var index = e.indexOf(emoji);
          if (index == -1) continue;
          var add = e+" → "+emojiList[e]+"\n";
          if (index == 0) string += add;
          else string2 += add;
          if (++counter > 23) break;
        }
        string += string2;
        var emoji = prompt("Invalid Emoji"+string,emoji);
      }
      if (emoji) addReaction(emojiList[emoji],msg);
    });
    if (!isOwn && !user.isAdmin) drawButton(reportIcon,3,15,function() {
      var reportMsg = prompt("Why do you want to report this message? (cancel to stop report)");
      if (!reportMsg) return;
      var data = {
        msg: reportMsg,
        reporter: user.name,
        room: currentRoom.name,
        messages: currentRoom.chat.slice(i,i+3)//REPORT_CONTEXT_MESSAGES)
      };
      getKeyValue("reports",function(value) {
        value = value || [];
        value.push(data);
        setKeyValue("reports",value,function() {
          prompt("Report sucessfully submitted!");
        });
      });
    });
  }
  if (msg.replyTo) {
    shift(-15);
    format(theme.messages,theme.stroke);
    rect(10,5,380,15,theme.bevel);
    noStroke();
    fill(theme.placeholder);
    textAlign(LEFT,CENTER);
    text(msg.replyTo.msg,15,13);
  }
}

function addReaction(emoji,msg) {
  var data = msg.oldmsg;
  data.reactions[emoji] = data.reactions[emoji] || {};
  data.reactions[emoji][user.name] = true;
  currentRoom.editMsg(data);
  setKeyValue("last_active_"+currentRoom.name,Date.now());
}
function removeReaction(emoji,msg) {
  var data = msg.oldmsg;
  data.reactions[emoji] = data.reactions[emoji] || {};
  delete data.reactions[emoji][user.name];
  if (Object.keys(data.reactions[emoji]) == 0) delete data.reactions[emoji];
  currentRoom.editMsg(data);
  setKeyValue("last_active_"+currentRoom.name,Date.now());
}
function announce(msg) {
  currentRoom.sendMsg({
    sender: user.name,
    announcement:true,
    msg:msg
  });
  setKeyValue("last_active_"+currentRoom.name,Date.now());
}
function clearChat() {
  currentRoom.clear({
    sender: user.name,
    announcement:true,
    msg:"Chat cleared by "+user.data.displayname+"!"
  });
}

// Account
window.drawProfileButtons = function() {
  var hover = drawButton2("Message User",10,365,150,25,0,0);
  if (hover && clicked) {
    var msg = false;
    for (var i = 0; i < gcList.list.length; i++) {
      var u = gcList.list[i].users;
      if (u.length == 2 && (u[0] == prof.name || u[1] == prof.name)) {
        msg = gcList.list[i];
        break;
      }
    }
    if (!msg) {
      msg = createGC([user.name,prof.name]);
      msg = onloadprofile(msg);
      msg.onclick = function() {
        setPage("chatroom");
        setRoom(msg.id);
      };
      gcList.push(msg);
    }
    setPage("chatroom");
    setRoom(msg.id);
  }
}

// ----
// Draw
// ----

function draw() {
  FTEMP.draw();
}

// Misc
function censor(str) {
  if (!str) return "";
  for (var word in censorList) {
    var replacement = censorList[word];
    var regex = new RegExp(word,'gi');
    str = str.replace(regex, replacement);
  }
  return str;
}
function emojify(textbox) {
  var matches = textbox.value.match(/:[^:]*:/g);
  if (!matches) return;
  for (var i = 0; i < matches.length; i++) {
    var index = textbox.value.indexOf(matches[i]);
    var name = matches[i].substring(1,matches[i].length-1);
    if (!emojiList[name]) continue;
    textbox.value = textbox.value.replace(matches[i],emojiList[name]);
    if (index+name.length+1 <= textbox.cursorPos) {
      textbox.cursorPos -= name.length+2-emojiList[name].length;
    }
  }
  textbox.update();
}
// DragonFireGames: I fricking hand-made this emoji list - Pls Credit - 7 hours gone :(
if (!window.emojiList) {
  window.emojiList={
    grin:"😀",happy:"😃",laugh:"😄",chuckle:"😄",beaming:"😁",XD:"😆",rofl:"🤣",happy_tears:"😂",laughing_crying:"😂",crying_laughing:"😂",oops:"😅",phew:"😅",nervous_laugh:"😅",smile:"🙂",upside_down:"🙃",passive_agressive:"🙃",wink:"😉",big_smile:"😊",halo:"😇",loved:"🥰",so_loved:"🥰",feel_loved:"🥰",love:"😍",heart_eyes:"😍",star_struck:"🤩",star_eyes:"🤩",kiss_heart:"😘",kiss:"😗",smooch:"😙",blush_kiss:"😚",yum:"😋",tongue_out:"😛",wink_tongue:"😜",crazy:"🤪",ick:"😝",money:"🤑",hug:"🤗",hugging_face:"🤗",hand_cover:"🤭",shh:"🤫",thinking:"🤔",silent:"🤐",hmm:"🤨",neutral:"😐",meh:"😐",bruh:"😑",expressionless:"😑",mouthless:"😶",smirk:"😏",unamused:"😒",eye_roll:"🙄",eyeroll:"🙄",ugh:"🙄",grimace:"😬",yikes:"😬",eek:"😬",lying:"🤥",calm:"😌",relieved:"😌",pensive:"😔",sleepy:"😪",drool:"🤤",sleeping:"😴",masked:"😷",quarantine:"😷",covid:"😷",fever:"🤒",injured:"🤕",hurt:"🤕",sick:"🤢",vomit:"🤮",sneeze:"🤧",hot:"🥵",cold:"🥶",freezing:"🥶",woozy:"🥴",dizzy:"😵",dead:"😵",mind_blown:"🤯",cowboy:"🤠",party:"🥳",cool:"😎",sunglasses:"🕶",nerd:"🤓",monocle:"🧐",confused:"😕",worried:"😟",frown:"🙁",big_frown:"☹",suprised:"😮",hushed:"😯",wow:"😲",astonished:"😲",shocked:"😲",blush:"😳",flushed:"😳",pleading:"🥺",please:"🥺",cute:"🥺",frown_open:"😦",anguished:"😧",fear:"😨",fearful:"😨",anxious:"😰",sad_but_relieved:"😥",relieved_sad:"😥",sad:"😢",cry:"😭",sob:"😭",scream:"😱",AHH:"😱",confounded:"😖",persevering:"😣",push_through_it:"😣",disappointed:"😞",aw_man:"😞",downcast:"😓",weary:"😩",moan:"😩",tired:"😫",annoyed:"😤",mad:"😡",angry:"😠",curse:"🤬",swear:"🤬",wry:"😈",devious:"😈",devil:"👿",skull:"💀",deadly:"☠",skull_crossbones:"☠",poo:"💩",poop:"💩",clown:"🤡",ogre:"👹",goblin:"👺",ghost:"👻",alien:"👽",galaxian:"👾",robot:"🤖",cat_grin:"😺",cat_smile:"😸",cat_rofl:"😹",cat_love:"😻",cat_wry:"😼",cat_evil:"😼",cat_kiss:"😽",cat_weary:"🙀",cat_cry:"😿",cat_sad:"😿",cat_pout:"😾",cat_angry:"😾",see_no_evil:"🙈",hear_no_evil:"🙉",speak_no_evil:"🙊",kiss_mark:"💋",love_letter:"💌",cupid:"💘",chocolate_heart:"💝",heart_sparkle:"💖",growing_heart:"💗",beating_heart:"💓",revolving_hearts:"💞",two_hearts:"💕",heart_decor:"💟","love!":"❣",broken_heart:"💔",heartbroken:"💔",heart:"❤",red_heart:"❤️",orange_heart:"🧡",yellow_heart:"💛",green_heart:"💚",blue_heart:"💙",purple_heart:"💜",brown_heart:"🤎",black_heart:"🖤",hundred_points:"💯",anger_symbol:"💢",boom:"💥",collision:"💥",dizzy_symbol:"💫",sweat:"💦",squirt:"💦",dash:"💨",fart:"💨",hole:"🕳",bomb:"💣",speech:"💬",yell:"🗯",thought:"💭",zzz:"💤",wave:"👋",hello:"👋",hi:"👋",goodbye:"👋",bye:"👋",raised_hand_back:"🤚",raised_hand_fingers_spread:"🖐",raised_hand:"✋",vulcan:"🖖",ok:"👌",peace_hand:"✌",fingers_crossed:"🤞",surfer_hand:"🤟",spider_man_hand:"🤘",call_me:"🤙",point_left:"👈",point_right:"👉",point_up:"☝",point_up_2:"👆",point_down:"👇",fuck:"🖕",middle_finger:"🖕",thumbs_up:"👍",thumbs_down:"👎",fist:"✊",punch:"👊",punch_left:"🤛",punch_right:"🤜",clap:"👏",hands_raised:"🙌",bird_hands:"👐",hands:"🤲",handshake:"🤝",high_five:"🙏",prayer:"🙏",writing:"✍",nails:"💅",selfie:"🤳",flex:"💪"
  };
  console.log("------------\nWarning: Full Emoji List Missing\nHere is the Library ID \n------------");
}
var censorList = {
  "fu+ck": "frick",
  "fuk": "frik",
  "fuc": "frik",
  "shit": "crap",
  "slut": "****",
  "whore": "*****",
  "son of a bitch": "son of a gun",
  "bitches": "girls",
  "bitch": "girl",
  "dick": "peepee",
  "cock": "peepee",
  "penis": "peepee",
  "pus+y": "wimp",
  "pus+ies": "wimps",
  "nig+a": "*****",
  "nig+er": "******",
  "\bkkk\b": "!!!",
  "pissed off": "mad",
  "piss": "pee",
  "vagina": "******",
  "tits": "****",
  "titties": "*******",
  "titty": "*****",
  "hitler": "!!!!!",
  "jackass": "jerk",
  "ass(hat|face|head)": "blockhead",
  "asshole": "butthole",
  "dumbass": "idiot",
  "\bass\b": "butt",
  "\bcum\b": "***",
  "wtf": "wth",
  "\btf\b": "th",
  "horny": "hot",
  "bo+b": "****",
  "bo+bs": "*****",
  "bo+bies": "*******",
  "deepthroat": "**********",
  "damn": "dam",
  "faggot": "******",
  "fag": "***",
  "chink": "asian",
  "retarded": "stupid",
  "retard": "idiot",
  "cunt": "wimp",
  "rape": "sexually abuse",
  "sex": "***",
};


// Test urls
// URL: https://pumpkin-smasher.repl.co
// URL: https://discord.gg/NqnXXy8mNz
// SOUND: https://dl.sndup.net/dbs8/electromedieval.mp3
// SOUND: http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg
// SOUND: https://ia801807.us.archive.org/29/items/yu-ching-fei-yi-jian-mei-xue-hua-piao-piao-bei-feng-xiao-xiao/%E8%B2%BB%E7%8E%89%E6%B8%85%20-%20%E4%B8%80%E7%BF%A6%E6%A2%85%20%20%20%20Yu-Ching%20Fei-%20Yi%20Jian%20Mei%20%28xue%20hua%20piao%20piao%20bei%20feng%20xiao%20xiao%29.mp3
// SOUND: https://dl.sndup.net/h483/Fragment_by_Thomas_Barrandon.mp3
// IMAGE: https://www.civitatis.com/blog/wp-content/uploads/2022/07/portada-atardecer-nueva-york-1920x1280.jpg
// IMAGE: https://upload.wikimedia.org/wikipedia/en/7/7d/Lenna_%28test_image%29.png
// IMAGE: https://media.discordapp.net/attachments/1115534767685902397/1130494086231633970/20230703_203438.jpg
// IMAGE: https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg
// IMAGE: https://images.saymedia-content.com/.image/t_share/MTc0NjE5MDY1MDYyMDA4ODIy/worlds-weirdest-fruits.jpg
// GIF: https://www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif
// GIF: https://onlinegiftools.com/images/examples-onlinegiftools/wiggle-cat-normalized-speed.gif
// GIF: http://www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif
// VIDEO: https://www.youtube.com/watch?v=dQw4w9WgXcQ
// CDO: https://studio.code.org/projects/gamelab/Qw29wBsKvTwG7wKo6LVBPdz4bWv_DFRsIfbfLNDwKxQ/edit
