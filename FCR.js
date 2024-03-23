/* Credits - PLEASE DO NOT REMOVE

 - Project: Fire Chat Room
 - Credit: Developed By DragonFireGames
 - Remixer: (Your name)
 - Version: Full Release 1.1.0 (0.22.0)

 My contact info:
 - Discord: DragonFire7z
 - Email: dragonfire7z@outlook.com
 contact me if you want.
 
 PS; Please contact me cool.
 
 PS; Thanks to @MonsterYT for helping me debug.
     Thanks to @cool for inspiring me to make a chat.
     Thanks to @Rocky for inspiring sounds.
     Big Thanks to @Varrience for the JSON request mechanics.
     Big Thanks to @Ravage for Vault:
      NDJQvUlKfUgt5vcXcQb2e2JfiiYMwJN9Twfq3Ytki64
 Be sure to check out my other games:

 Pumpkin Smasher 2:
 URL - https://pumpkin-smasher.repl.co
 Server - https://discord.gg/NqnXXy8mNz

 Check out galaga:
 URL - https://studio.code.org/projects/gamelab/B0_e6u1rOwnMFkPeyKAwetAGMx7PJ0-yuaTU5Kif7DA

*/

// TODO: 
// /tts ?
// change seconds to minutes to be less distracting

//Test Fake ID:
//**/ var getURLPath = function() {return ["","","",""];}; var getUserId = function() {return randomId(27);};

//var getURLPath = function() {return ["","","",""];}; var getUserId = function() {return "ENdvL9z2EoM+vtEGlViM2jBbvb3";};

// --- Do not touch ------
{
// - https://studio.code.org/projects/gamelab/eQQMonPpSr4hmsQEER6MKnhOSeI67LCMo7WoM6mjC14/edit
// - https://www.javascriptobfuscator.com/Javascript-Obfuscator.aspx
window["constant"] = function(name,value) {
  var obj = {};
  obj["value"] = value;
  obj["writable"] = false;
  window["Object"]["defineProperty"](window, name, obj);
  return window["constant"];
}
window["constantify"] = function(name) {
  window["constant"](name,window[name]);
  return window["constantify"];
}
window["constantify"]("constant")("getURLPath")("getUserId")("prompt")("setInterval")("setTimeout");
}
// -----------------------

// Settings for Remixers

var isRemix = false; // Set to true
var serverName = "FCR"; // Change to project name
var serverNameSize = 40; // Make it fit on screen
var projectId = getURLPath()[2]; // Put project id here if you want
var featuredLinks = { // Personalized Links
  "The Pumpkin Smasher Discord Server":"https://discord.gg/NqnXXy8mNz",
  "Pumpkin Smasher":"https://pumpkin-smasher.repl.co",
  "Galaga":"https://studio.code.org/projects/gamelab/-65XFrTKIC-2lLSkINLPFIjqXO2cxnLCYiPXXGj3rtI/edit",
  "My Google Site":"https://sites.google.com/view/dragonfiregames/home",
  "My p5.js":"https://editor.p5js.org/DragonFireGames/sketches",
  "My Gamelab Forum Profile":"https://gamelab.freeflarum.com/u/DragonFireGames",
  "My Youtube Channel":"https://www.youtube.com/channel/UC-xx3N7SI7oLSfkuVCcD1rQ",
  "My Replit":"https://replit.com/@DragonFireGames",
  "My Spotify":"https://open.spotify.com/user/gai02po3d25tisxgnke4h2qiy/playlists",
};

// Owner
constant( "OWNER_ENABLED", true ); // When offline, set to false
constant( "ownerId", "DcZCDBomfqB6B+5UEZAJiw7mSPM" ); // Paste your ID in here
constant( "ownerName", "DragonFireGames" ); // Your name
constant( "ownerAvatar", "https://lh3.googleusercontent.com/ogw/AGvuzYZOEiyYVR9SOagAAL1a0ogl9pzddZWPrGY-Vwmj=s64-c-mo" ); // Your avatar
constant( "ownerBio", "Loves to code!" ); // Your bio
constant( "ownerColor", "red" ); // Your color

/* Owner Commands and their uses

They can only be used in the gamelab console.

promoteUser(id) - promotes user to admin
demoteAdmin(id) - demotes admin to user
announce(message) - sends a server announcement to current room
clearChat() - clears the chat
clearAll() - clears all chats
muteUser(id) - accepts an id as input and will mute that user
unmuteUser(id) - accepts an id as input and will mute that user
unmuteAll() - unmutes all users
banUser(id) - accepts an id as input and will ban that user
unbanUser(id) - accepts an id as input and will ban that user
unbanAll() - unbans all users
deleteUser(name) - deletes a user's profile
deleteProfile(id) - deletes a user's profile
deleteAll() - deletes all user profiles
logUser(name) - logs user data

*/

// Settings:
var MIN_NAME_LENGTH = 3;
var MAX_NAME_LENGTH = 30;
var MAX_MESSAGES = false;
var MAX_DATA = 4094; // Code.org Data Limit 4094
var DEFAULT_ROOM = "home";
var STARTING_DISPLAY = "rooms"; // "chatroom" or "rooms" or "friends" or "settings"
var MAX_CACHE_SIZE = 35;
var EVERYONE_CAN_MAKE_ROOMS = false;
var ONLINE_THRESHOLD = 15000; // number of ms until user considered offline
var IDLE_THRESHOLD = 60000; // number of ms until user considered idle.
var REPORT_CONTEXT_MESSAGES = 4;
var DEFAULT_PROFILE_SETTINGS = {
  CENSOR: true,
  SHOW_ONLINE_STATUS: true,
  SHOW_CURRENT_ROOM: true,
  ONLY_FRIENDS: false,
  NOTIFY_PINGS: true,
  NOTIFY_EVERYONE_PINGS: true
}
var HIDE_BANNED_USER_MESSAGES = true;
var HIDE_DELETED_USER_MESSAGES = false;
var DEFAULT_ROOMLIST = [
  "coder hangout 💻",
  "fnaf",
  "dating",
  "project sharing",
];

// Automod
// Number of seconds to punish by number of offenses previously committed
var SPAM_PUNISHMENT = {
   "0" : 30,
   "1" : 30,
   "2" : 30,
   "3" : 60,
   "4" : 120,
   "5" : 300,
   "6" : 600,
   "7" : 1200,
   "8" : 3600,
   "9" : 7200,
  "10" : Infinity
};
var SPAM_COOLDOWN = 5; // Time length to check for spam
var SPAM_MESSAGE_COUNT = 5; // Number of messages needed to punish
var CENSOR_NAMES = true;
var AUTOMOD_MESSAGES = true;

// Commands
var COMMANDS = {
  "shrug":function(data) {
    data.msg = "¯\\_(ツ)_/¯";
    sendMessage(data);
  },
  "tableflip":function(data) {
    data.msg = "(╯°□°）╯︵ ┻━┻";
    sendMessage(data);
  },
  "unflip":function(data) {
    data.msg = "┬─┬ ノ(°-°ノ)";
    sendMessage(data);
  },
  "clear":function(data) {
    if (!isAdmin) return;
    clearChat();
  },
  "advert":function(data) {
    if (userId != ownerId) return;
    advertProjects();
  }
};
// What is sent after /advert
var ADVERT_PROJECTS = [
  {
    userId:ownerId,
    msg:"Hello everyone!\nPlease play pumpkin smasher 🎃",
    link:"https://pumpkin-smasher.repl.co",
    type:"url",
    reactions:{}
  },
  {
    userId:ownerId,
    msg:"and join the discord!",
    link:"https://discord.gg/NqnXXy8mNz",
    type:"url",
    reactions:{}
  }
];

/* THEMES

Swap with ctrl+left/right arrows

To add a theme, create a new object at the end 
of `themeList` with all of these properties.

Property List:
  
 META
  name: the name of the theme
  creator: the person who made it

 BACKGROUND
  background: the default background color (if no image is selected)
  background_image: background image (optional)
  background_music: a url to background music (optional)
 
 MESSAGES
  stroke: the stroke color
  messages: the color of the message background
  message_hover: the color of message when hovering (optional)
  ping_messages: the color of pinged messages (optional)
  ping_message_hover: the color of pinged messages when hovering (optional)
  
 NOTIFICATIONS
  notifications: notification background color (optional)
  notification_stroke: notification background color (optional)
  
 ROOMLIST
  panel: the panel color in the roomlist (optional)
  panel_stroke: the panel stroke in the roomlist (optional)
  panel_stroke_hover: the panel stroke when hovering in the roomlist (optional)
  
 INPUT
  input_box: the input text box color (optional)
  input_box_typing: the input text box color (optional)
  placeholder: the color of the 'click here' (optional)
  placeholder_hover: the color of the 'click here' when over the input box (optional)
  bar: the cursor bar color when typing
  
 USERNAMES
  username: default username color
  admin_username: admin username color (optional)
  owner_username: owner username color (optional)
  
 BUTTONS
  buttons: button color (optional)
  button_pressed: button pressed/active color (optional)
  button_stroke: button stroke color (optional)
  button_hover: button hover color (optional)
  button_text: text on buttons (optional)
  button_text_hover: text on buttons during hover (optional)
  
 MESSAGE TEXT
  announcement: announcement color
  date: date color
  text: message text color
  text2: secondary text color (performance mode) (optional)
  font: message font
  textstyle: NORMAL, BOLD, ITALIC or BOLDITALIC
  
 PROFILES
  circle_avatars: whether or not to have circle avatars (optional)
  avatar_stroke: stroke around the avatar (optional)
  profile: color of profile box (optional)
  profile_tint: how much to tint the profile box (optional)
  show_online: show the online indicator for once
  online_color: color of the online indicator in the corner of an avatar (optional)
  idle_color: color of the idle indicator in the corner of an avatar (optional)
  
 OTHER
  rect_bevel: how much to round corners (optional)
  
The default theme is set by `selTheme` which you set 
to the index of the default theme in `themeList`.
*/
var themeList = [
  {
    name:"Default",
    creator:"DragonFireGames",
    background: "#191919",
    messages: "rgba(255,255,255,0.02)",
    message_hover: "rgba(255,255,255,0.05)",
    panel_stroke_hover: "rgba(255,255,255,0.1)",
    panel: "rgba(255,255,255,0.02)",
    ping_messages: "rgba(255,255,0,0.1)",
    ping_message_hover: "rgba(255,255,0,0.15)",
    input_box: "#303030",
    input_box_typing: "#383838",
    profile: "#333333",
    username: "#d9d9d9",
    admin_username: "#ffff00",
    owner_username: "#ff0000",
    buttons: "#444444",
    button_hover: "#505050",
    button_pressed: "#555555",
    button_stroke: "#000000",
    notifications: "#333333",
    announcement: "#e9e9e9",
    date: "#777777",
    placeholder: "#777777",
    placeholder_hover: "#858585",
    text: "#c9c9c9",
    //font: "Helvetica",
    bar: "#d4d4d4",
    rect_bevel: 5,
    circle_avatars: true,
    show_online: true,
    //background_music: "http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
  },
  {
    name:"space",
    creator:"DragonFireGames",
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
    username: "#d9d9ff",
    admin_username: "#ffffff",
    announcement: "#e9e9ff",
    date: "#a0a0d4",
    placeholder: "#a0a0d4",
    text: "#000014",
    text2: "#e0e0e0",
    bar: "#d4d4d4",
    font: "Courier New",
    textstyle: BOLD,
    stroke: 0,
    avatar_stroke: 0,
    profile_tint: 0,
    //show_online: true,
    background_music: "https://dl.sndup.net/h483/Fragment_by_Thomas_Barrandon.mp3"
  },
  {
    name:"sunset",
    creator:"DragonFireGames",
    background: "#c00000",
    background_image: "https://charispsallo.files.wordpress.com/2013/09/bootleg-sunset-square.jpg",
    messages: "rgba(210,61,0,0.75)",
    ping_messages: "rgba(240,91,30,0.75)",
    message_hover: "rgba(255,111,50,0.8)",
    input_box: "rgba(190,41,10,1.0)",
    username: "#ffc800",
    admin_username: "#ffd0d0",
    buttons: "rgba(210,61,0,0.75)",
    button_pressed: "rgba(240,91,30,0.75)",
    button_hover: "rgba(255,111,50,0.8)",
    announcement: "#ffff00",
    date: "#ff7a00",
    placeholder: "#ff7a00",
    text: "#300000",
    text2: "#e0e0e0",
    font: "Comic Sans",
    bar: "#ff7a00",
    rect_bevel: 5,
    circle_avatars: true,
    profile_tint: 0,
    stroke: 0,
    avatar_stroke: 0,
    profile_tint: 0,
    show_online: true,
  },
  {
    name:"matrix",
    creator:"DragonFireGames",
    background: "#000000",
    //background_image: "",
    messages: "#000000",
    message_hover: "#404040",
    ping_messages: "#202020",
    panel: "#000000",
    username: "#00ff00",
    admin_username: "#00ffff",
    owner_username: "#ff0000",
    button_pressed: "#202020",
    button_hover: "#404040",
    announcement: "#00ff00",
    date: "#00ff00",
    placeholder: "#00ff00",
    text: "#00ff00",
    bar: "#00ff00",
    font: "Courier New",
    stroke: "#00ff00",
    avatar_stroke: 0,
    profile_tint: 0,
    show_online: true,
    online_color: "#00ff00"
  },
  {//Purple??
    name:"purple???",
    creator:"DragonFireGames\n(inspired by Rocky)",
    background: "#400040",
    background_image: "https://music-time.notclickbait.repl.co/Bgw.png",
    messages: "rgba(108,0,158,0.6)",
    ping_messages: "rgba(138,30,188,0.6)",
    username: "#d800ff",
    admin_username: "#e0e0ff",
    announcement: "#ff00c8",
    date: "#7a00ff",
    placeholder: "#7a00ff",
    text: "#d0d0d0",
    bar: "#ff00ff",
    stroke: false,
  },
  {//Raya
    name:"Raya's Place",
    creator:"DragonFireGames\n(inspired by Raya)",
    background: "#303030",
    background_image: "https://i.pinimg.com/736x/be/70/f7/be70f71cd827414e310a02ddfcbc3530.jpg",
    //background_image: "https://www.asiamediajournal.com/wp-content/uploads/2022/11/Download-DARK-AESTHETIC-ANIME-PFP-300x300.jpg",
    //background_image: "https://www.inspirationde.com/wp-content/uploads/2022/12/1670574553_444_Pinterest.jpg",
    messages: "rgba(255,255,255,0.1)",
    message_hover: "rgba(255,255,255,0.15)",
    button_hover: "rgba(255,255,255,0.15)",
    ping_messages: "rgba(138,138,30,0.6)",
    username: "#ffffff",
    admin_username: "#ff0000",
    announcement: "#ffffff",
    date: "#909090",
    placeholder: "#909090",
    text: "#d0d0d0",
    bar: "#ffffff",
    stroke: false,
  },
  {
    name:"The LGM Awards",
    creator:"LGM Productions",
    background: "#efefef",
    background_image: "https://studio.code.org/v3/assets/ySiIkA1yMqPToL3EE0Wl4efYzNuxMpp7gcTS4zrPwvU/The-LGM-Awards-'24-400x400.png?t=1705270318234",
    messages: "rgba(245,255,255,0.5)",
    message_hover: "rgba(245,255,255,0.6)",
    ping_messages: "rgba(245,255,0,0.8)",
    ping_message_hover: "rgba(255,255,0,0.9)",
    input_box: "rgba(245,255,255,0.4)",
    input_box_typing: "rgba(245,255,255,0.5)",
    profile: "rgba(245,255,255,0.8)",
    username: "#232323",
    admin_username: "#232383",
    owner_username: "#6060ef",
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
    bar: "#d4d4d4",
    rect_bevel: 5,
    profile_tint: 0,
    circle_avatars: true,
    show_online: true,
  },
  {
    name:"Spocco",
    creator:"wutadam",
    background: "#efefef",
    background_image: "https://studio.code.org/v3/assets/qwharL4IfGlf-yrJjjOQJmtZoCHbRJoh7YyGgFIvxXE/spocco.jpg",
    messages: "rgba(245,255,255,0.5)",
    message_hover: "rgba(245,255,255,0.6)",
    ping_messages: "rgba(245,255,0,0.8)",
    ping_message_hover: "rgba(255,255,0,0.9)",
    input_box: "rgba(245,255,255,0.4)",
    input_box_typing: "rgba(245,255,255,0.5)",
    profile: "rgba(245,255,255,0.8)",
    username: "#232323",
    admin_username: "#232383",
    owner_username: "#6060ef",
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
    bar: "#d4d4d4",
    rect_bevel: 5,
    profile_tint: 0,
    circle_avatars: true,
    show_online: true,
  },
  {
    name:"sunrise",
    creator:"wutadam",
    background: "#78BBE1",
    background_image: "https://i.ibb.co/7bcG9hX/sunrise.jpg",
    messages: "rgba(255,255,255,0.5)",
    message_hover: "rgba(255,255,255,0.6)",
    ping_messages: "rgba(255,255,0,0.8)",
    ping_message_hover: "rgba(255,255,0,0.9)",
    input_box: "rgba(255,255,255,0.4)",
    input_box_typing: "rgba(255,255,255,0.5)",
    profile: "rgba(255,255,255,0.8)",
    username: "#232323",
    admin_username: "#232383",
    owner_username: "#6060ef",
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
    bar: "#d4d4d4",
    rect_bevel: 5,
    profile_tint: 0,
    circle_avatars: true,
    show_online: true,
  },
];
var selTheme = 0; 

// Inserts
var IMAGE_HEIGHT = 137;

var insertIcon = loadImage("https://cdn-icons-png.flaticon.com/512/262/262038.png");

var soundIcon = loadImage("https://cdn-icons-png.flaticon.com/512/347/347794.png");
var pauseIcon = loadImage("https://cdn-icons-png.flaticon.com/512/16/16427.png");
var playIcon = loadImage("https://cdn-icons-png.flaticon.com/512/0/375.png");

var linkIcon = loadImage("https://cdn-icons-png.flaticon.com/512/3214/3214746.png");
var linkIcons = {
  "discord." : loadImage("https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/discord-512.png"),
  "youtube.com" : loadImage("https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png"),
  "youtu.be" : loadImage("https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png"),
  "spotify.com" : loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png"),
  "code.org" : loadImage("https://studio.code.org/assets/logo-2acd4ebc69c447786b866b98034bb3c0777b5f67cd8bd7955e97bba0b16f2bd1.svg"),
  "pumpkin-smasher" : loadImage("https://pumpkin-smasher-2.dragonfiregames.repl.co/assets/pumpkins/objective.png"),
  "firewalledreplit" : loadImage("https://i.ibb.co/d6sfk4j/image.png"),
  "sites.google.com/view/dragonfiregames" : loadImage("https://i.ibb.co/PGFTDGy/ship.png"),
  /*
  "google.com" : loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"),
  "reddit.com" : loadImage("https://upload.wikimedia.org/wikipedia/en/b/bd/Reddit_Logo_Icon.svg"),
  "twitch.tv" : loadImage("https://cdn-icons-png.flaticon.com/512/5968/5968819.png"),
  "twitter.com" : loadImage("https://cdn-icons-png.flaticon.com/512/3536/3536424.png"),
  "facebook.com" : loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"),
  "instagram.com" : loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"),
  "snapchat.com" : loadImage("https://play-lh.googleusercontent.com/KxeSAjPTKliCErbivNiXrd6cTwfbqUJcbSRPe_IBVK_YmwckfMRS1VIHz-5cgT09yMo"),
  "tiktok.com" : loadImage("https://play-lh.googleusercontent.com/Ui_-OW6UJI147ySDX9guWWDiCPSq1vtxoC-xG17BU2FpU0Fi6qkWwuLdpddmT9fqrA=w240-h480-rw"),
  "outlook.com" : loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg/2203px-Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg.png"),
  "gmail.com" : loadImage("https://freelogopng.com/images/all_img/1657906383gmail-icon-png.png"),
  "roblox.com" : loadImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c3207cf8-6638-4073-979c-092861231689/de2fzyg-29a1af41-1242-46f4-a33b-6f8a6ae2e1ef.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MzMjA3Y2Y4LTY2MzgtNDA3My05NzljLTA5Mjg2MTIzMTY4OVwvZGUyZnp5Zy0yOWExYWY0MS0xMjQyLTQ2ZjQtYTMzYi02ZjhhNmFlMmUxZWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1XioYcpOV0zu8MOTbrQBWT4qFjx1l0lt91tlis6hvkc"),
  "microsoft.com" : loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"),
  "prodigygame.com" : loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Prodigy_icon_2020.svg/1200px-Prodigy_icon_2020.svg.png"),
  */
};

var renameIcon = loadImage("https://cdn.icon-icons.com/icons2/1747/PNG/512/profile_113589.png");
var roomIcon = loadImage("https://static.thenounproject.com/png/2206184-200.png");
var mobileIcon = loadImage("https://cdn-icons-png.flaticon.com/512/0/191.png");
var desktopIcon = loadImage("https://i.ibb.co/DQ0wfrb/desktop-icon.png");

var deleteIcon = loadImage("https://www.iconsdb.com/icons/preview/red/trash-10-xxl.png");
var editIcon = loadImage("https://www.freeiconspng.com/thumbs/edit-icon-png/edit-new-icon-22.png");
var replyIcon = loadImage("https://cdn-icons-png.flaticon.com/512/1933/1933008.png");
var emojiIcon = loadImage("https://creazilla-store.fra1.digitaloceanspaces.com/icons/3260575/add-reaction-icon-md.png");
var reportIcon = loadImage("https://i.ibb.co/hFHNfMV/report-image-transparent.png");

var settingsIcon = loadImage("https://cdn0.iconfinder.com/data/icons/e-commerce-207/1024/settings-512.png");

var deletedProfileIcon = "https://i.ibb.co/S3mYTjn/1000-F-410437733-hdq4-Q3-QOH9uwh0mcq-Ah-RFz-OKfr-CR24-Ta.png";
//var defaultProfileIcon = "https://www.personality-insights.com/wp-content/uploads/2017/12/default-profile-pic-e1513291410505.jpg";
var defaultProfileIcon = "https://as2.ftcdn.net/v2/jpg/04/10/43/77/1000_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg";

// Sounds

var pingSound = "sound://category_alerts/retro_game_health_pickup_6.mp3";
var clickSound = "sound://category_app/app_menu_button_6v2.mp3";
var beginTypingSound = false;

// Server Loading

// Remix this and put link below: https://replit.com/@DragonFireGames/code-org?v=1
constant( "server", "https://code-org.dragonfiregames.repl.co" );

//
var INSTRUCTIONS = 
"Hello ${username},\n"+
"Use TAB to insert images, sounds and URLs.\n"+
"Drag mouse to scroll.\n"+
"Emojis are :name_of_emoji:\n"+
"Ctrl + Left/Right Arrow to cycle themes\n"+
"Ctrl + M is performance mode\n"+
"Shift+Enter for new line\n"+
"Feel free to remix!";

var TERMS_OF_SERVICE = 
"Terms of Service:\n"+
"Do not report this project: Though it is a chat, it is also much more, it is an extension of code.org to it's absolute limits.\n"+
"This platform shall not be used for the harm of other individuals on the platform. This includes but is not limited to: DM spamming, doxxing, verbal abuse, sexual harassment, bullying, excessive role-playing, and death threats.\n"+
"This platform shall not be used for the distribution and sale of copyrighted works.\n"+
"This platform shall not be used for the organization and creation of online terrorist organizations.\n"+
"Hacking the chat is not nice, please don't.\n"+
"Spam & obscenity is not allowed\n"+
"\n"+
"Upon violation of these terms we reserve the right to:\n"+
"- delete messages which violate these terms\n"+
"- temporarily mute your account\n"+
"- ban your account\n"+
"- terminate your account\n"+
"\n"+
"If you identify a user breaking these terms, please report the message by clicking the ❗ when hovering over a message.\n"+
"\n"+
"By typing ${code} to continue, you are agreeing to the above terms.";

//Messages

var ANNOUNCEMENT_ROOM = DEFAULT_ROOM; // Enter a room name or false for the current room
var SEND_RENAME_MESSAGES = true;
var SEND_PROMOTION_MESSAGES = true;
var SEND_BAN_MESSAGES = true;
var SEND_MUTE_MESSAGES = true;
// Typing Message
function typingMessage(username) {
  return username+" is typing...";
}
// Return false for no welcome/return message
function welcomeMessage(username) {
  var specialNameDict = {
    "dragonfiregames": "The creator, DragonFireGames, is here!",
    "ravage": "A very hot, sexy man named Ravage has walked into the room, shocking everyone with his supreme rizz.",
    "wutadam": "Do I hear a [WUT]? Do I hear Adam?\nYes I do, it's [WUT] Adam!",
    "varrience": "From the shadows, with a single Torch in his hand, the legendary coder Varriance leaps into the chat.",
    "rocky": "Your neighborhood ghost, Rocky has joined!"
  }
  if (specialNameDict[username.toLowerCase()]) return specialNameDict[username];
  var randMsg = [
    username+" has joined the chat!",
    username+" just landed!",
    username+" hopped onto the chat!",
    "Glad you're here, "+username+"!",
    "Would you care to join us, "+username+"!",
    "Welcome, "+username+". We hope you brought pizza!",
    username+" just showed up!",
    "Good to see you, "+username+".",
    "Everyone welcome "+username+"!",
    username+" joined the party!",
    "Welcome, "+username+". Say hi!",
    "Yay, you made it, "+username+"!",
    "Thanks for joining, "+username+"!",
    username+" just joined the chat - glhf!",
    username+" just joined. Everyone, look busy!",
    username+" just joined. Can I get a heal?",
    username+" joined. You must construct additional pylons.",
    "Ermagherd. "+username+" is here.",
    "Welcome, "+username+". Stay awhile and listen.",
    "Welcome, "+username+". We were expecting you ( ͡° ͜ʖ ͡°)",
    "Welcome, "+username+". We hope you brought pizza.",
    "Welcome "+username+". Leave your weapons by the door.",
    "A wild "+username+" appeared.",
    "Swoooosh. "+username+" just landed.",
    "Brace yourselves. "+username+" just joined the chat.",
    username+" just joined. Hide your bananas.",
    username+" just arrived. Seems OP - please nerf.",
    username+" just slid into the chat.",
    "A "+username+" has spawned in the chat.",
    "Big "+username+" showed up!",
    "Where’s "+username+"? In the chat!",
    username+" hopped into the chat. Kangaroo!!",
    username+" just showed up. Hold my beer.",
    "Watch out! "+username+" has entered the arena.",
    "Hello, "+username+"! Glad you could join us.",
    "Welcome to the party, "+username+"!",
    "All hail the new King, "+username+"!",
    "Challenger approaching - "+username+" has appeared!",
    "It's a bird! It's a plane! Nevermind, it's just "+username+".",
    "It's "+username+"! Praise the sun! \\\\[T]/",
    "Never gonna give "+username+" up. Never gonna let "+username+" down.",
    "Ha! "+username+" has joined! You activated my trap card!",
    "Cheers, love! "+username+"'s here!",
    "Hey! Listen! "+username+" has joined!",
    "We've been expecting you "+username+"",
    "It's dangerous to go alone, take "+username+"!",
    username+" has joined the server! It's super effective!",
    "Cheers, love! "+username+" is here!",
    username+" is here, as the prophecy foretold.",
    username+" has arrived. Party's over.",
    "Ready player "+username+"",
    username+" is here to kick butt and chew gum. But they are out of gum.",
    "Hello. Is it "+username+" you're looking for?",
    username+" has joined. Stay a while and listen!",
    "Roses are red, violets are blue, "+username+" joined this server with you",
  ];
  return randMsg[randomNumber(0,randMsg.length-1)];
}
function welcomeReturnMessage(username) {
  var specialNameDict = {
    "DragonFireGames": "DragonFireGames is back, you'd better be good!",
    "Ravage": "Ravage has returned to rizz up the chat.",
    "wutadam":"It's the man, the myth, the legend, [WUT] Adam!",
    "varrience":"Varriance has returned with a Torch in hand.",
    "rocky":"Rocky is back from grinding 90s, and walking through walls"
  }
  if (specialNameDict[username]) return specialNameDict[username];
  var randMsg = [
    username+" is back!",
    username+" has returned from a long quest!",
    "Welcome back, "+username+"! It's good to see you.",
    "Hello again, "+username+"! We've been waiting for you.",
    "Look who it is, "+username+"!",
    username+" has arrived once again.",
    username+" has reentered the arena.",
    username+" has returned! Tell us about your adventures.",
    "Say hello to my old friend, "+username+"!",
    username+" is back and ready to kick some more butt.",
    "Brace yourselves. "+username+" is back.",
    username+" has respawned.",
    "Another wild "+username+" has appeared.",
    "Tell us of your adventures "+username+".",
    "Everyone welcome "+username+" back.",
    username+" has returned to the party.",
    "Where were you "+username+"? We missed you.",
    username+" slid back into the chat!",
    username+", you're back! How was it?",
    "Oh no! "+username+" is back...",
    username+" was here. And now they are here again",
    "It's the man, the myth, the legend, "+username+"!",
  ];
  return randMsg[randomNumber(0,randMsg.length-1)];
}

var GameList = [
  {
    name: "Tic Tac Toe",
    creator: "DragonFireGames",
    description: "The familiar game of noughts and crosses",
    thumbnail: "https://play-lh.googleusercontent.com/5ENdgpFsRhQt9y_ySp9UK_p-CL0TmhSwW5pKmmzzIW0OLFR3EvAtzAGm6c_IkkfgVg",
    overlay: "black",
    overlay_strength: 100,
    stroke: "white",
    text_color: "white",
    min_players: 2,
    max_players: 2,
    source: function(game) {
// Tic-Tac-Toe Code:
var gameId = GameData.id;

function redX(x,y,w,h) {
  noFill();
  stroke("red");
  strokeWeight(5);
  line(x,y,x+w,y+h);
  line(x+w,y,x,y+h);
}
function blueO(x,y,w,h) {
  noFill();
  stroke("blue");
  strokeWeight(5);
  ellipse(x+w/2,y+h/2,w,h);
}

var data;
game.draw = function() {
  var userKeys = Object.keys(GameData.users).sort();
  //
  push();
  strokeWeight(1);
  showAvatar(userKeys[0],5,5,30,30);
  showAvatar(userKeys[1],130,5,30,30);
  textSize(30);
  fill(theme.text);
  stroke(theme.text);
  textAlign(LEFT,TOP);
  text(":",40,5);
  text(":",165,5);
  redX(55,5,30,30);
  blueO(180,5,30,30);
  pop();
  getLocalKey("data",function(b) {
    data = b || data;
    if (data && typeof data == 'string') data = JSON.parse(data);
    if (!data) {
      data = {};
      data.board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ];
      data.turn = randomNumber(0,1);
      setLocalKey("data",JSON.stringify(data));
    }
  });
  if (!data) return;
  //
  var myTurn = userKeys[data.turn] == userId;
  translate(width/2,height/2);
  for (var x = 0; x < 3; x++) {
    var bx = -90+x*60;
    for (var y = 0; y < 3; y++) {
      var by = -90+y*60;
      push();
      translate(bx,by);
      if (data.board[x][y] == 1) redX(10,10,40,40);
      if (data.board[x][y] == 2) blueO(10,10,40,40);
      if (data.board[x][y] == 0 && myTurn && mouseRect(bx+width/2,by+height/2,60,60) && data.winner === undefined) {
        fill(theme.panel);
        rect(0,0,60,60);
        if (clicked) {
          playSound(clickSound);
          data.board[x][y] = data.turn+1;
          if (checkTie()) data.winner = -1;
          if (checkWin(x,y)) data.winner = data.turn;
          data.turn = 1-data.turn;
          setLocalKey("data",JSON.stringify(data));
        }
      }
      pop();
    }
  }
  stroke(180);
  strokeWeight(5);
  line(-30,-90,-30,90);
  line(30,-90,30,90);
  line(-90,-30,90,-30);
  line(-90,30,90,30);
  translate(-width/2,-height/2);
  //
  noStroke();
  fill(theme.text);
  strokeWeight(1);
  textAlign(CENTER,TOP);
  textSize(30);
  if (data.winner !== undefined) {
    if (data.winner == -1) text("Tie!",122.5,260);
    else if (userKeys[data.winner] == userId) text("You win!",122.5,260);
    else text("You lost...",122.5,260);
    return;
  }
  if (myTurn) {
    text("Your turn!",122.5,260);
  }
}

function checkWin(x,y) {
  var col = row = diag = rdiag = 0;
  var player = data.turn+1;
  function cell(x1,y1) {
    if (data.board[x1] && data.board[x1][y1]) return data.board[x1][y1];
  }
  for (var i = 0; i < 3; i++) {
    if (cell(x,i) == player) col++
    if (cell(i,y) == player) row++
    if (cell(i,i) == player) diag++
    if (cell(i,3-i+1) == player) rdiag++
  }
  if (row == 3 || col == 3 || diag == 3 || rdiag == 3) return true;
  return false;
}
function checkTie(x,y) {
  var sum = 0;
  for (var x = 0; x < 3; x++) {
    for (var y = 0; y < 3; y++) {
      sum += !!data.board[x][y];
    }
  }
  return sum == 9;
}

return game;
//
    }
  }, // Tic-Tac-Toe
  {
    name: "Chess",
    creator: "DragonFireGames",
    description: "It's chess!",
    thumbnail: "https://www.chess.com/bundles/web/images/offline-play/standardboard.1d6f9426.png",
    overlay: "black",
    overlay_strength: 120,
    stroke: "white",
    text_color: "white",
    min_players: 2,
    max_players: 2,
    source: function(game) {
// Chess Code:
var GAME_TIME = 30*60*1000;

var gameId = GameData.id;
var chessBoard = loadImage("https://images.chesscomfiles.com/chess-themes/boards/green/200.png");

var pieceTheme = "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/"
var pieceMap = {
  "wk":loadImage(pieceTheme+"wk.png"),
  "wq":loadImage(pieceTheme+"wq.png"),
  "wb":loadImage(pieceTheme+"wb.png"),
  "wn":loadImage(pieceTheme+"wn.png"),
  "wr":loadImage(pieceTheme+"wr.png"),
  "wp":loadImage(pieceTheme+"wp.png"),
  "bk":loadImage(pieceTheme+"bk.png"),
  "bq":loadImage(pieceTheme+"bq.png"),
  "bb":loadImage(pieceTheme+"bb.png"),
  "bn":loadImage(pieceTheme+"bn.png"),
  "br":loadImage(pieceTheme+"br.png"),
  "bp":loadImage(pieceTheme+"bp.png")
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
setInterval((function testElo(){
  function t(uid) {
    getGlobalKey("elo_"+encodeURIComponent(uid),function(v) {
      if (v === undefined) {
        v = 1200;
        setGlobalKey("elo_"+encodeURIComponent(uid),v);
      }
      userElos[uid] = v;
    });
  }
  for (var i in GameData.users) {
    t(i);
  }
  return testElo;
})(),5000);
function showChessProfile(color) {
  var uid = data[color].uid;
  if (!userElos[uid]) userElos[uid] = 1200;
  var prof = getProfile(uid);
  strokeWeight(1);
  showAvatar(uid,5,5,30,30);
  textSize(14);
  fill(theme.text);
  noStroke();
  textAlign(LEFT,TOP);
  text(prof.name+" ("+userElos[uid]+")",40,5);
  push();
  for (var i = 0; i < data[color].captured.length; i++) {
    var piece = pieceMap[data[color].captured[i]];
    image(piece,35,18,20,20);
    translate(8,0);
  }
  var v = calcLead(color);
  if (v > 0) {
    text("+"+v+"",48,22);
  }
  pop();
  textAlign(RIGHT,TOP);
  if (data.winner) return;
  var time = data[color].timeleft || GAME_TIME;
  if (data.turn == color) time -= Date.now() - data.turn_time;
  if (time < 0) {
    var oppColor = {black:"white",white:"black"}[color];
    data.winner = oppColor;
    data.winmsg = color+" timed out!";
    updateElo(uid,data[oppColor].uid,0.1);
    setLocalKey("data",JSON.stringify(data));
    time = 0;
  }
  time = floor(time/1000);
  var secs = time % 60;
  if (secs < 10) secs = "0"+secs;
  var mins = floor(time/60);
  text(mins+":"+secs,240,5);
  if (data.turn == color) {
    fill("red");
    stroke("black");
    strokeWeight(1);
    ellipse(230,25,10,10);
  }
}

function calcValue(list) {
  var valueMap = {
    "wk":Infinity,
    "wq":9,
    "wb":3,
    "wn":3,
    "wr":5,
    "wp":1,
    "bk":Infinity,
    "bq":9,
    "bb":3,
    "bn":3,
    "br":5,
    "bp":1
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
game.draw = function() {
  var userKeys = Object.keys(GameData.users).sort();
  //
  getLocalKey("data",function(b) {
    data = b || data;
    if (data && typeof data == 'string') data = JSON.parse(data);
    if (userKeys.length != 2) return;
    if (!data) {
      data = {};
      data.board = [
        ["br","bp","","","","","wp","wr"],
        ["bn","bp","","","","","wp","wn"],
        ["bb","bp","","","","","wp","wb"],
        ["bq","bp","","","","","wp","wq"],
        ["bk","bp","","","","","wp","wk"],
        ["bb","bp","","","","","wp","wb"],
        ["bn","bp","","","","","wp","wn"],
        ["br","bp","","","","","wp","wr"],
      ];
      var sel = randomNumber(0,1);
      data.white = {
        uid: userKeys[sel],
        captured: [],
        castle_left: true,
        castle_right: true,
        timeleft: GAME_TIME
      };
      data.black = {
        uid: userKeys[1-sel],
        captured: [],
        castle_left: true,
        castle_right: true,
        timeleft: GAME_TIME
      };
      data.pawn_push = false;
      data.moves = {};
      data.turn = "white";
      data.turn_time = Date.now();
      data.lastmove = [];
      setLocalKey("data",JSON.stringify(data));
    }
  });
  //
  if (userKeys.length != 2 && !data) {
    noStroke();
    fill(theme.text);
    strokeWeight(1);
    textAlign(CENTER,CENTER);
    textSize(26);
    text("Waiting for\n2nd player to join...",122.5,150);
    return;
  };
  //
  if (!data) return;
  var colorMap = {
    true: "white",
    false: "black"
  };
  var iswhite = data.white.uid == userId;
  var color = colorMap[iswhite];
  var oppColor = colorMap[!iswhite];
  //
  translate(0,260);
  showChessProfile(color);
  translate(0,-260);
  showChessProfile(oppColor);
  //
  var myTurn = userKeys[data.turn] == userId;
  translate(width/2,height/2);
  if (!iswhite) scale(1,-1);
  image(chessBoard,-112,-112,224,224);
  if (!iswhite) scale(1,-1);
  var moves = [];
  if (data.winner) selX = selY = false;
  noStroke();
  fill("rgba(255,255,0,0.5)");
  for (var i = 0; i < data.lastmove.length; i++) {
    var m = data.lastmove[i];
    var tx = m.x*28-112;
    var ty = m.y*28-112;
    if (!iswhite) ty = -ty-28;
    rect(tx,ty,28,28);
  }
  if (selX !== false && selY !== false) {
    var tx = selX*28-112;
    var ty = selY*28-112;
    if (!iswhite) ty = -ty-28;
    rect(tx,ty,28,28);
    moves = getMoves(selX,selY);
  }
  var sx = selX, sy = selY;
  if (clicked) selX = selY = false;
  for (var x = 0; x < 8; x++) {
    var tx = -112+x*28;
    for (var y = 0; y < 8; y++) {
      var ty = -112+y*28;
      if (!iswhite) ty = -ty-28;
      var piece = data.board[x][y];
      if (!piece) continue;
      var hover = piece[0] == color[0] && data.turn == color && mouseRect(tx+width/2,ty+height/2,28,28) && !data.winner;
      if (hover || (selX === x && selY === y)) {
        image(pieceMap[piece],tx-1,ty-1,30,30);
      } else {
        image(pieceMap[piece],tx,ty,28,28);
      }
      if (!hover) continue;
      cursor(HAND);//cursor('grab');
      //if (mouseIsPressed) cursor('grabbing');
      if (clicked) {
        playSound(clickSound);
        selX = x;
        selY = y;
      }
    }
  }
  if (data.winner) {
    myStroke(theme.notification_stroke);
    fill(theme.notifications);
    rect(-75,-30,150,60,theme.rect_bevel);
    noStroke();
    fill(theme.announcement);
    textSize(20);
    textAlign(CENTER,CENTER);
    text(data.winmsg,0,0);
  }
  for (var i = 0; i < moves.length; i++) {
    var x = moves[i][0];
    var y = moves[i][1];
    var tx = x*28-112;
    var ty = y*28-112;
    if (!iswhite) ty = -ty-28;
    var hover = mouseRect(tx+width/2,ty+height/2,28,28);
    if (hover) cursor(HAND);
    if (data.board[x][y]) {
      stroke("rgba(0,0,0,0.3)");
      strokeWeight(3);
      noFill();
      if (hover) ellipse(tx+14,ty+14,26,26);
      else ellipse(tx+14,ty+14,24,24);
    }
    else {
      fill("rgba(0,0,0,0.3)");
      noStroke();
      if (hover) ellipse(tx+14,ty+14,11,11);
      else ellipse(tx+14,ty+14,10,10);
    }
    if (hover && clicked) {
      playSound(clickSound);
      if (data.board[x][y]) data[color].captured.push(data.board[x][y]);
      data.board[x][y] = data.board[sx][sy];
      data.board[sx][sy] = "";
      data.pawn_push = false
      if (moves[i][2] == "push") {
        data.pawn_push = x;
      }
      if (moves[i][2] == "en-passant") {
        data.board[x][sy] = "";
      }
      if (moves[i][2] == "castle left") {
        data.board[3][sy] = color[0]+"r";
        data.board[0][sy] = "";
      }
      if (moves[i][2] == "castle right") {
        data.board[5][sy] = color[0]+"r";
        data.board[7][sy] = "";
      }
      var p = data.board[x][y][1];
      if (p == "k") {
        data[color].castle_left = false;
        data[color].castle_right = false;
      }
      if (p == "r" && sx == 0) {
        data[color].castle_left = false;
      }
      if (p == "r" && sx == 7) {
        data[color].castle_right = false;
      }
      if (p == "p" && ((sy == 1 && iswhite) || (sy == 6 && !iswhite))) {
        var promote = prompt("Promote Pawn:\n- Queen\n- Rook\n- Bishop\n- Knight") || "queen";
        promote = promote.toLowerCase().replace(/\s/,'');
        switch (promote) {
          case "queen": data.board[x][y] = color[0]+"q"; break;
          case "rook": data.board[x][y] = color[0]+"r"; break;
          case "bishop": data.board[x][y] = color[0]+"b"; break;
          case "knight": data.board[x][y] = color[0]+"n"; break;
        }
      }
      data.turn = oppColor;
      var end = checkForGameEnd(oppColor[0]);
      if (end == "checkmate") {
        data.winner = color;
        data.winmsg = color[0].toUpperCase()+color.slice(1)+" Wins!";
        updateElo(userId,data[oppColor].uid,1.0);
      }
      if (end == "stalemate") {
        data.winner = "draw";
        data.winmsg = "Stalemate!";
        updateElo(userId,data[oppColor].uid,0.5);
      }
      if (end == "no-material") {
        data.winner = "draw";
        data.winmsg = "No Material";
        updateElo(userId,data[oppColor].uid,0.5);
      }
      data[color].timeleft -= Date.now() - data.turn_time;
      data.turn_time = Date.now();
      data.lastmove = [{x:x,y:y},{x:sx,y:sy}];
      setLocalKey("data",JSON.stringify(data));
      moveCache = {};
    }
  }
  translate(-width/2,-height/2);
}
function updateElo(uid1,uid2,outcome) {
  var n1 = Elo.getNewRating(userElos[uid1],userElos[uid2],outcome);
  setGlobalKey("elo_"+encodeURIComponent(uid1),n1);
  var n2 = Elo.getNewRating(userElos[uid2],userElos[uid1],1-outcome);
  setGlobalKey("elo_"+encodeURIComponent(uid2),n2);
}
game.onUserLeave = function(uid) {
  if (userId == uid) return;
  if (data.winner) return;
  if (data.white.uid == uid) {
    data.winner = "black";
    data.winmsg = "White Resigned";
  } else {
    data.winner = "white";
    data.winmsg = "Black Resigned";
  }
  updateElo(userId,uid,0.9);
  setLocalKey("data",JSON.stringify(data));
}

function checkForChecks(c,board) {
  board = board || data.board;
  var check = false;
  for (var x = 0; x < 8; x++) {
    for (var y = 0; y < 8; y++) {
      if (board[x][y] && board[x][y][0] != c) {
        getMoves(x,y,true,board).forEach(function(v) {
          if (board[v[0]][v[1]] == c+"k") {
            check = true;
          }
        });
      }
    }
  }
  return check;
}
function checkForGameEnd(c,board) {
  board = board || data.board;
  var material = false;
  var moves = 0;
  for (var x = 0; x < 8; x++) {
    for (var y = 0; y < 8; y++) {
      if (board[x][y] && board[x][y][1] != "k") material = true;
      if (!board[x] || !board[x][y] || board[x][y][0] != c) continue;
      moves += getMoves(x,y).length;
    }
  }
  if (!material) return "no-material";
  if (moves == 0) {
    var incheck = checkForChecks(c,board);
    if (incheck) return "checkmate";
    else return "stalemate";
  }
  return false;
}
    
function getMoves(x,y,loop,board) {
  if (!loop && moveCache[x+","+y]) return moveCache[x+","+y];
  board = board || data.board;
  var p = board[x][y];
  var c = p[0];
  var moves = [];
  function get(mx,my) {
    if (board[mx] === undefined) return false;
    if (board[mx][my] === undefined) return false;
    return board[mx][my];
  }
  function add(mx,my) {
    var p2 = get(mx,my);
    // Out of Bounds
    if (p2 === false) return;
    // Unoccupied
    if (p2 === "") {
      moves.push([mx,my]);
      return true;
    }
    // Your piece
    if (p2[0] == c) return;
    // Their piece
    moves.push([mx,my]);
  }
  var moveMap = {
    "k":function() {
      add(x+1,y+1);
      add(x+1,y);
      add(x+1,y-1);
      
      add(x,y+1);
      //Center
      add(x,y-1);
      
      add(x-1,y+1);
      add(x-1,y);
      add(x-1,y-1);
    },
    "q":function() {
      // Rook
      moveMap["r"]();
      // Bishop
      moveMap["b"]();
    },
    "b":function() {
      // right-down
      for (var i = 1; i < 8; i++) {
        if (!add(x+i,y+i)) break;
      }
      // right-up
      for (var i = 1; i < 8; i++) {
        if (!add(x+i,y-i)) break;
      }
      // left-down
      for (var i = 1; i < 8; i++) {
        if (!add(x-i,y+i)) break;
      }
      // left-up
      for (var i = 1; i < 8; i++) {
        if (!add(x-i,y-i)) break;
      }
    },
    "n":function() {
      add(x+2,y+1);
      add(x+2,y-1);
      add(x-2,y+1);
      add(x-2,y-1);
      add(x+1,y+2);
      add(x+1,y-2);
      add(x-1,y+2);
      add(x-1,y-2);
    },
    "r":function() {
      // down
      for (var i = 1; i < 8; i++) {
        if (!add(x,y+i)) break;
      }
      // up
      for (var i = 1; i < 8; i++) {
        if (!add(x,y-i)) break;
      }
      // right
      for (var i = 1; i < 8; i++) {
        if (!add(x+i,y)) break;
      }
      // left
      for (var i = 1; i < 8; i++) {
        if (!add(x-i,y)) break;
      }
    },
    "p":function() {
      var d = -1;
      if (c == "b") d = 1;
      var ty = y;
      if (c == "w") ty = 7-y;
      var p1 = get(x,y+d);
      var pr = get(x+1,y+d);
      var pl = get(x-1,y+d);
      var p2 = get(x,y+d+d);
      if (p1 === "") {
        moves.push([x,y+d]);
        if (p2 === "" && ty == 1) {
          moves.push([x,y+d+d,"push"]);
        }
      }
      if (pr && pr[0] != c) moves.push([x+1,y+d]);
      if (pl && pl[0] != c) moves.push([x-1,y+d]);
      // en-passant
      if (data.pawn_push == x+1 && pr === "" && ty == 4) {
        moves.push([x+1,y+d,"en-passant"]);
      }
      if (data.pawn_push == x-1 && pl === "" && ty == 4) {
        moves.push([x-1,y+d,"en-passant"]);
      }
    },
  };
  moveMap[p[1]]();
  if (loop) return moves;
  // castling
  if (p[1] == "k" && !checkForChecks(c,board)) {
    var color = {w:"white",b:"black"}[c];
    if (data[color].castle_left) {
      var isClear = get(1,y) === "" && get(2,y) === "" && get(3,y) === "";
      if (isClear) {
        var copy = JSON.parse(JSON.stringify(board));
        copy[x][y] = "";
        copy[x-1][y] = p;
        var check2 = checkForChecks(c,copy);
        if (!check2) {
          moves.push([2,y,"castle left"]);
        }
      }
    }
    if (data[color].castle_right) {
      var isClear = get(5,y) === "" && get(6,y) === "";
      if (isClear) {
        var copy = JSON.parse(JSON.stringify(board));
        copy[x][y] = "";
        copy[x+1][y] = p;
        var check2 = checkForChecks(c,copy);
        if (!check2) {
          moves.push([6,y,"castle right"]);
        }
      }
    }
  }
  for (var i = moves.length-1; i >= 0; i--) {
    var mx = moves[i][0]; var my = moves[i][1];
    var copy = JSON.parse(JSON.stringify(board));
    copy[mx][my] = p;
    copy[x][y] = "";
    if (checkForChecks(c,copy)) {
      moves.splice(i,1);
    }
  }
  if (!loop) moveCache[x+","+y] = moves;
  return moves;
}

return game;
//
    }
  }, // Chess
  {
    name: "Checkers",
    creator: "DragonFireGames",
    description: "The younger brother of chess!",
    thumbnail: "https://i.ibb.co/k4JDb39/thumb.png",
    overlay: "black",
    overlay_strength: 120,
    stroke: "white",
    text_color: "white",
    min_players: 2,
    max_players: 2,
    source: function(game) {
// Chess Code:
var GAME_TIME = 20*60*1000;

var gameId = GameData.id;
var chessBoard = loadImage("https://images.chesscomfiles.com/chess-themes/boards/red/200.png");

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
setInterval((function testElo(){
  function t(uid) {
    getGlobalKey("elo_"+encodeURIComponent(uid),function(v) {
      if (v === undefined) {
        v = 1200;
        setGlobalKey("elo_"+encodeURIComponent(uid),v);
      }
      userElos[uid] = v;
    });
  }
  for (var i in GameData.users) {
    t(i);
  }
  return testElo;
})(),5000);
function showCheckersProfile(color) {
  var uid = data[color].uid;
  if (!userElos[uid]) userElos[uid] = 1200;
  var prof = getProfile(uid);
  strokeWeight(1);
  showAvatar(uid,5,5,30,30);
  textSize(14);
  fill(theme.text);
  noStroke();
  textAlign(LEFT,TOP);
  text(prof.name+" ("+userElos[uid]+")",40,5);
  push();
  for (var i = 0; i < data[color].captured.length; i++) {
    var piece = pieceMap[data[color].captured[i]];
    image(piece,35,18,20,20);
    translate(8,0);
  }
  var v = calcLead(color);
  if (v > 0) {
    text("+"+v+"",48,22);
  }
  pop();
  textAlign(RIGHT,TOP);
  if (data.winner) return;
  var time = data[color].timeleft || GAME_TIME;
  if (data.turn == color) time -= Date.now() - data.turn_time;
  /*if (time < 0) {
    var oppColor = {black:"white",white:"black"}[color];
    data.winner = oppColor;
    data.winmsg = color+" timed out!";
    updateElo(uid,data[oppColor].uid,0.1);
    setLocalKey("data",JSON.stringify(data));
    time = 0;
  }*/
  time = floor(time/1000);
  var secs = time % 60;
  if (secs < 10) secs = "0"+secs;
  var mins = floor(time/60);
  text(mins+":"+secs,240,5);
  if (data.turn == color) {
    fill("red");
    stroke("black");
    strokeWeight(1);
    ellipse(230,25,10,10);
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
game.draw = function() {
  var userKeys = Object.keys(GameData.users).sort();
  //
  getLocalKey("data",function(b) {
    data = b || data;
    if (data && typeof data == 'string') data = JSON.parse(data);
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
        uid: userKeys[sel],
        captured: [],
        timeleft: GAME_TIME
      };
      data.black = {
        uid: userKeys[1-sel],
        captured: [],
        timeleft: GAME_TIME
      };
      data.pawn_push = false;
      data.moves = {};
      data.turn = "white";
      data.turn_time = Date.now();
      data.lastmove = [];
      data.takeonly = false;
      setLocalKey("data",JSON.stringify(data));
    }
  });
  //
  if (userKeys.length != 2 && !data) {
    noStroke();
    fill(theme.text);
    strokeWeight(1);
    textAlign(CENTER,CENTER);
    textSize(26);
    text("Waiting for\n2nd player to join...",122.5,150);
    return;
  };
  //
  if (!data) return;
  var colorMap = {
    true: "white",
    false: "black"
  };
  var iswhite = data.white.uid == userId;
  var color = colorMap[iswhite];
  var oppColor = colorMap[!iswhite];
  //
  translate(0,260);
  showCheckersProfile(color);
  translate(0,-260);
  showCheckersProfile(oppColor);
  //
  var myTurn = userKeys[data.turn] == userId;
  translate(width/2,height/2);
  if (!iswhite) scale(1,-1);
  image(chessBoard,-112,-112,224,224);
  if (!iswhite) scale(1,-1);
  var moves = [];
  if (data.winner) selX = selY = false;
  noStroke();
  fill("rgba(255,255,0,0.5)");
  for (var i = 0; i < data.lastmove.length; i++) {
    var m = data.lastmove[i];
    var tx = m.x*28-112;
    var ty = m.y*28-112;
    if (!iswhite) ty = -ty-28;
    rect(tx,ty,28,28);
  }
  if (selX !== false && selY !== false) {
    var tx = selX*28-112;
    var ty = selY*28-112;
    if (!iswhite) ty = -ty-28;
    rect(tx,ty,28,28);
    moves = getMoves(selX,selY);
  }
  var sx = selX, sy = selY;
  if (clicked) selX = selY = false;
  for (var x = 0; x < 8; x++) {
    var tx = -112+x*28;
    for (var y = 0; y < 8; y++) {
      var ty = -112+y*28;
      if (!iswhite) ty = -ty-28;
      var piece = data.board[x][y];
      if (!piece) continue;
      var hover = piece[0] == color[0] && data.turn == color && mouseRect(tx+width/2,ty+height/2,28,28) && !data.winner;
      if (hover || (selX === x && selY === y)) {
        image(pieceMap[piece],tx-1,ty-1,30,30);
      } else {
        image(pieceMap[piece],tx,ty,28,28);
      }
      if (!hover) continue;
      cursor(HAND);//cursor('grab');
      //if (mouseIsPressed) cursor('grabbing');
      if (clicked && (!data.takeonly || (x == data.takeonly.x && data.takeonly.y == y))) {
        playSound(clickSound);
        selX = x;
        selY = y;
      }
    }
  }
  if (data.winner) {
    myStroke(theme.notification_stroke);
    fill(theme.notifications);
    rect(-75,-30,150,60,theme.rect_bevel);
    noStroke();
    fill(theme.announcement);
    textSize(20);
    textAlign(CENTER,CENTER);
    text(data.winmsg,0,0);
  }
  for (var i = 0; i < moves.length; i++) {
    var x = moves[i][0];
    var y = moves[i][1];
    var tx = x*28-112;
    var ty = y*28-112;
    if (!iswhite) ty = -ty-28;
    var hover = mouseRect(tx+width/2,ty+height/2,28,28);
    if (hover) cursor(HAND);
    if (data.board[x] && data.board[x][y]) {
      stroke("rgba(0,0,0,0.3)");
      strokeWeight(3);
      noFill();
      if (hover) ellipse(tx+14,ty+14,26,26);
      else ellipse(tx+14,ty+14,24,24);
    }
    else {
      fill("rgba(0,0,0,0.3)");
      noStroke();
      if (hover) ellipse(tx+14,ty+14,11,11);
      else ellipse(tx+14,ty+14,10,10);
    }
    if (hover && clicked) {
      // Do move
      playSound(clickSound);
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
          setLocalKey("data",JSON.stringify(data));
          return;
        }
      }
      data.turn = oppColor;
      var end = checkForGameEnd(oppColor[0]);
      if (end == "win") {
        data.winner = color;
        data.winmsg = color[0].toUpperCase()+color.slice(1)+" Wins!";
        updateElo(userId,data[oppColor].uid,1.0);
      }
      if (end == "draw") {
        data.winner = "draw";
        data.winmsg = "Draw!";
        updateElo(userId,data[oppColor].uid,0.5);
      }
      data[color].timeleft -= Date.now() - data.turn_time;
      data.turn_time = Date.now();
      data.takeonly = false;
      selX = selY = false;
      setLocalKey("data",JSON.stringify(data));
      moveCache = {};
    }
  }
  translate(-width/2,-height/2);
}
function updateElo(uid1,uid2,outcome) {
  var n1 = Elo.getNewRating(userElos[uid1],userElos[uid2],outcome);
  setGlobalKey("elo_"+encodeURIComponent(uid1),n1);
  var n2 = Elo.getNewRating(userElos[uid2],userElos[uid1],1-outcome);
  setGlobalKey("elo_"+encodeURIComponent(uid2),n2);
}
game.onUserLeave = function(uid) {
  if (userId == uid) return;
  if (data.winner) return;
  if (data.white.uid == uid) {
    data.winner = "black";
    data.winmsg = "White Resigned";
  } else {
    data.winner = "white";
    data.winmsg = "Black Resigned";
  }
  updateElo(userId,uid,0.9);
  setLocalKey("data",JSON.stringify(data));
}

function checkForGameEnd(c,board) {
  board = board || data.board;
  var count = 0;
  var moves = 0;
  for (var x = 0; x < 8; x++) {
    for (var y = 0; y < 8; y++) {
      if (!board[x] || !board[x][y] || board[x][y][0] != c) continue;
      moves += getMoves(x,y,false,true,board);
      count++;
    }
  }
  if (count == 0) {
    return "win";
  }
  if (moves == 0) {
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

return game;
//
    }
  }, // Checkers
  {
    name: "Battleship",
    creator: "DragonFireGames & Ravage",
    description: "Fight",
    thumbnail: "https://i.ibb.co/k4JDb39/thumb.png",
    overlay: "black",
    overlay_strength: 120,
    stroke: "white",
    text_color: "white",
    min_players: 2,
    max_players: 2,
    source: function(game) {
// Chess Code:
var GAME_TIME = 20*60*1000;

var gameId = GameData.id;
var chessBoard = loadImage("https://images.chesscomfiles.com/chess-themes/boards/red/200.png");

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
setInterval((function testElo(){
  function t(uid) {
    getGlobalKey("elo_"+encodeURIComponent(uid),function(v) {
      if (v === undefined) {
        v = 1200;
        setGlobalKey("elo_"+encodeURIComponent(uid),v);
      }
      userElos[uid] = v;
    });
  }
  for (var i in GameData.users) {
    t(i);
  }
  return testElo;
})(),5000);
function showCheckersProfile(color) {
  var uid = data[color].uid;
  if (!userElos[uid]) userElos[uid] = 1200;
  var prof = getProfile(uid);
  strokeWeight(1);
  showAvatar(uid,5,5,30,30);
  textSize(14);
  fill(theme.text);
  noStroke();
  textAlign(LEFT,TOP);
  text(prof.name+" ("+userElos[uid]+")",40,5);
  push();
  for (var i = 0; i < data[color].captured.length; i++) {
    var piece = pieceMap[data[color].captured[i]];
    image(piece,35,18,20,20);
    translate(8,0);
  }
  var v = calcLead(color);
  if (v > 0) {
    text("+"+v+"",48,22);
  }
  pop();
  textAlign(RIGHT,TOP);
  if (data.winner) return;
  var time = data[color].timeleft || GAME_TIME;
  if (data.turn == color) time -= Date.now() - data.turn_time;
  /*if (time < 0) {
    var oppColor = {black:"white",white:"black"}[color];
    data.winner = oppColor;
    data.winmsg = color+" timed out!";
    updateElo(uid,data[oppColor].uid,0.1);
    setLocalKey("data",JSON.stringify(data));
    time = 0;
  }*/
  time = floor(time/1000);
  var secs = time % 60;
  if (secs < 10) secs = "0"+secs;
  var mins = floor(time/60);
  text(mins+":"+secs,240,5);
  if (data.turn == color) {
    fill("red");
    stroke("black");
    strokeWeight(1);
    ellipse(230,25,10,10);
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
game.draw = function() {
  var userKeys = Object.keys(GameData.users).sort();
  //
  getLocalKey("data",function(b) {
    data = b || data;
    if (data && typeof data == 'string') data = JSON.parse(data);
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
        uid: userKeys[sel],
        captured: [],
        timeleft: GAME_TIME
      };
      data.black = {
        uid: userKeys[1-sel],
        captured: [],
        timeleft: GAME_TIME
      };
      data.pawn_push = false;
      data.moves = {};
      data.turn = "white";
      data.turn_time = Date.now();
      data.lastmove = [];
      data.takeonly = false;
      setLocalKey("data",JSON.stringify(data));
    }
  });
  //
  if (userKeys.length != 2 && !data) {
    noStroke();
    fill(theme.text);
    strokeWeight(1);
    textAlign(CENTER,CENTER);
    textSize(26);
    text("Waiting for\n2nd player to join...",122.5,150);
    return;
  };
  //
  if (!data) return;
  var colorMap = {
    true: "white",
    false: "black"
  };
  var iswhite = data.white.uid == userId;
  var color = colorMap[iswhite];
  var oppColor = colorMap[!iswhite];
  //
  translate(0,260);
  showCheckersProfile(color);
  translate(0,-260);
  showCheckersProfile(oppColor);
  //
  var myTurn = userKeys[data.turn] == userId;
  translate(width/2,height/2);
  if (!iswhite) scale(1,-1);
  image(chessBoard,-112,-112,224,224);
  if (!iswhite) scale(1,-1);
  var moves = [];
  if (data.winner) selX = selY = false;
  noStroke();
  fill("rgba(255,255,0,0.5)");
  for (var i = 0; i < data.lastmove.length; i++) {
    var m = data.lastmove[i];
    var tx = m.x*28-112;
    var ty = m.y*28-112;
    if (!iswhite) ty = -ty-28;
    rect(tx,ty,28,28);
  }
  if (selX !== false && selY !== false) {
    var tx = selX*28-112;
    var ty = selY*28-112;
    if (!iswhite) ty = -ty-28;
    rect(tx,ty,28,28);
    moves = getMoves(selX,selY);
  }
  var sx = selX, sy = selY;
  if (clicked) selX = selY = false;
  for (var x = 0; x < 8; x++) {
    var tx = -112+x*28;
    for (var y = 0; y < 8; y++) {
      var ty = -112+y*28;
      if (!iswhite) ty = -ty-28;
      var piece = data.board[x][y];
      if (!piece) continue;
      var hover = piece[0] == color[0] && data.turn == color && mouseRect(tx+width/2,ty+height/2,28,28) && !data.winner;
      if (hover || (selX === x && selY === y)) {
        image(pieceMap[piece],tx-1,ty-1,30,30);
      } else {
        image(pieceMap[piece],tx,ty,28,28);
      }
      if (!hover) continue;
      cursor(HAND);//cursor('grab');
      //if (mouseIsPressed) cursor('grabbing');
      if (clicked && (!data.takeonly || (x == data.takeonly.x && data.takeonly.y == y))) {
        playSound(clickSound);
        selX = x;
        selY = y;
      }
    }
  }
  if (data.winner) {
    myStroke(theme.notification_stroke);
    fill(theme.notifications);
    rect(-75,-30,150,60,theme.rect_bevel);
    noStroke();
    fill(theme.announcement);
    textSize(20);
    textAlign(CENTER,CENTER);
    text(data.winmsg,0,0);
  }
  for (var i = 0; i < moves.length; i++) {
    var x = moves[i][0];
    var y = moves[i][1];
    var tx = x*28-112;
    var ty = y*28-112;
    if (!iswhite) ty = -ty-28;
    var hover = mouseRect(tx+width/2,ty+height/2,28,28);
    if (hover) cursor(HAND);
    if (data.board[x] && data.board[x][y]) {
      stroke("rgba(0,0,0,0.3)");
      strokeWeight(3);
      noFill();
      if (hover) ellipse(tx+14,ty+14,26,26);
      else ellipse(tx+14,ty+14,24,24);
    }
    else {
      fill("rgba(0,0,0,0.3)");
      noStroke();
      if (hover) ellipse(tx+14,ty+14,11,11);
      else ellipse(tx+14,ty+14,10,10);
    }
    if (hover && clicked) {
      // Do move
      playSound(clickSound);
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
          setLocalKey("data",JSON.stringify(data));
          return;
        }
      }
      data.turn = oppColor;
      var end = checkForGameEnd(oppColor[0]);
      if (end == "win") {
        data.winner = color;
        data.winmsg = color[0].toUpperCase()+color.slice(1)+" Wins!";
        updateElo(userId,data[oppColor].uid,1.0);
      }
      if (end == "draw") {
        data.winner = "draw";
        data.winmsg = "Draw!";
        updateElo(userId,data[oppColor].uid,0.5);
      }
      data[color].timeleft -= Date.now() - data.turn_time;
      data.turn_time = Date.now();
      data.takeonly = false;
      selX = selY = false;
      setLocalKey("data",JSON.stringify(data));
      moveCache = {};
    }
  }
  translate(-width/2,-height/2);
}
function updateElo(uid1,uid2,outcome) {
  var n1 = Elo.getNewRating(userElos[uid1],userElos[uid2],outcome);
  setGlobalKey("elo_"+encodeURIComponent(uid1),n1);
  var n2 = Elo.getNewRating(userElos[uid2],userElos[uid1],1-outcome);
  setGlobalKey("elo_"+encodeURIComponent(uid2),n2);
}
game.onUserLeave = function(uid) {
  if (userId == uid) return;
  if (data.winner) return;
  if (data.white.uid == uid) {
    data.winner = "black";
    data.winmsg = "White Resigned";
  } else {
    data.winner = "white";
    data.winmsg = "Black Resigned";
  }
  updateElo(userId,uid,0.9);
  setLocalKey("data",JSON.stringify(data));
}

function checkForGameEnd(c,board) {
  board = board || data.board;
  var count = 0;
  var moves = 0;
  for (var x = 0; x < 8; x++) {
    for (var y = 0; y < 8; y++) {
      if (!board[x] || !board[x][y] || board[x][y][0] != c) continue;
      moves += getMoves(x,y,false,true,board);
      count++;
    }
  }
  if (count == 0) {
    return "win";
  }
  if (moves == 0) {
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

return game;
//
    }
  }, // Battleship
  // Hex
  // Pool
  // Uno?
  // Poker?
  // Beer Pong???
  // Mini golf???
  // connect 4???
  // 3D tic tac toe???
  // Dots & boxes?????
  {
    name: "Pumpkin Smasher",
    creator: "DragonFireGames",
    description: "The classic halloween objective destroying game!",
    thumbnail: "https://storage.googleapis.com/replit/images/1670962187155_5b94cce65ab443c70ef6093fb7efa015.png",
    overlay: "black",
    overlay_strength: 120,
    stroke: "white",
    text_color: "white",
    min_players: 1,
    max_players: Infinity,
    source: function(game) {
var back = loadImage("https://storage.googleapis.com/replit/images/1670962187155_5b94cce65ab443c70ef6093fb7efa015.png");
game.draw = function() {
  image(back,back.width*0.35,0,back.width*0.4,back.height,0,0,width,height);
  push();
  textSize(14);
  var hoverLaunch = drawButton2("Launch Game",width/2-100,height/2-30,200,27.5);
  if (hoverLaunch && clicked) {
    prompt("Copy and paste this link in a new tab:","https://pumpkin-smasher-2.dragonfiregames.repl.co/?room="+GameData.id.substr(0,8));
  }
  var hoverJoin = drawButton2("Join Discord",width/2-100,height/2+2.5,200,27.5);
  if (hoverJoin && clicked) {
    prompt("Copy and paste this link in a new tab:","https://discord.gg/NqnXXy8mNz");
  }
  pop();
}

return game;
//
    }
  }, // Pumpkin Smasher (Advert)
];

var SKIP_AD_TIME = 2000;
var AdvertisementList = [
  {
    name: "Pumpkin Smasher",
    creator: "DragonFireGames",
    background: "black",
    text: "#ECC200",
    runtime: 30*1000,
    animation: function(end) {

createAnimation(0,2000,function(t){
  t = Ease.out.quad(t*2);
  format(rgb(255, 0, 0, t),false,0,40,CENTER,BOTTOM);
  text("DragonFireGames",200,200);
  format(rgb(255, 255, 255, t),false,0,30,CENTER,TOP);
  text("presents...",200,200);
});
createAnimation(2000,4000,function(t){
  t = Ease.out.quad(t*2);
  format(alpha("#ffa500", t),false,0,40,CENTER,CENTER);
  text("A smashing sequel...",200,200);
});
createAnimation(4000,5500,function(t){
  t = min(t*1.5,1);
  fill(alpha("#123904",t));
  rect(-5,-5,410,410);
  format("black","#ffa500",10,40,CENTER,CENTER);
  typewrite("Pumpkin Smasher 2",t,200,200);
});
createAnimation(5500,6500,function(t){
  background("#123904");
  format("black","#ffa500",10,40,CENTER,CENTER);
  text("Pumpkin Smasher 2",200,200-150*t);
},Ease.inout.quad);
createAnimation(6500,30000,function(t){
  background("#123904");
  format("black","#ffa500",10,40,CENTER,CENTER);
  text("Pumpkin Smasher 2",200,50);
});

function draw(time) {
  background(0);
  drawAnimations();
  if (time > 30000) {
    prompt("Play it now at:","https://pumpkin-smasher.repl.co");
    prompt("And join our friendly community at:","https://discord.gg/NqnXXy8mNz");
    end();
  }
}

return draw;
    }
  },
  /*{
    name: "Game Lab Forum",
    creator: "DragonFireGames & Ravage",
    background: "#00adbc",
    text: "white",
    runtime: 33*1000,
    stage:0,
    animation: function(end) {

var legends = {
  Varrience:"https://gamelab.freeflarum.com/assets/avatars/CBG1W1pcoPG8Hjfy.png",
  "[WUT] Adam":"https://gamelab.freeflarum.com/assets/avatars/aQBeumAbXa9acnVM.png",
  DragonFireGames:"https://gamelab.freeflarum.com/assets/avatars/KctZdnjAfhg3cL4q.png",
  Ravage:"https://gamelab.freeflarum.com/assets/avatars/wU269mWNpBvxYtmg.png",
  Letti:"https://gamelab.freeflarum.com/assets/avatars/tBRRhAIffNYR2pCq.png",
}

for (var n in legends) {
  var f = function(i) {
    loadImage(legends[i], function(img) {
      legends[i] = readyAvatarImage(img);
    });
  };
  f(n);
}
var logo = loadImage("https://gamelab.freeflarum.com/assets/logo-ds1xijcz.png");

createAnimation(0,3000,function(t) {
  background("#303132");
  fill("white");
  textSize(20);
  textAlign(CENTER, CENTER);
  text("[WUT] Adam and Ravage present...", 200, 200);
  fill(alpha("black",1-Ease.outin.quart(2*t)));
  rect(-5,-5,410,410);
});
createAnimation(3000,5500,function(t) {
  var tm = Ease.outin.quart(t*8/5);
  noFill();
  stroke("#303132");
  strokeWeight(20*tm);
  arc(200,200,150*tm,150*tm,0,360);
  strokeWeight(15*tm);
  line(200,200,200+40*Math.cos(radians(t*80)*3.6)*tm,200+40*Math.sin(radians(t*80)*3.6)*tm);
  line(200,200,200+50*Math.cos(radians(t*80)*36)*tm,200+50*Math.sin(radians(t*80)*36)*tm);
  fill("#babbbc");
  noStroke();
  textSize(30);
  textAlign(CENTER, CENTER);
  text("Countless \nhours of fun...", 300*(1-tm)+200,200);
});
createAnimation(5500,18000,function(t) {
  var names = Object.keys(legends);
  format("white",false,0,10,CENTER,TOP);
  for (var i = 0; i < names.length; i++) {
    var a = 1000*t+360/5*i+100;
    var r = 300-155*Ease.out.quart(t*2);
    var x = 200+r*cos(a/2);
    var y = 185+r*sin(a/2);
    image(legends[names[i]],x-20,y-20,40,40);
    text(names[i],x,y+25);
  }
});
createAnimation(5500,12000,function(t) {
  textAlign(CENTER,CENTER);
  textSize(constrain(90*Ease.outin.quart(t*2),0,90));
  window.push();
  window.rotate(Math.sin(t*20));
  fill("#303132");
  text("</>",200,200);
  window.pop();
  textSize(20);
  fill("#babbbc");
  typewrite("A place where\nthe legends of Code.org converge",t*3<1.3?t*3:2.57-t/.433,200,200);
});
createAnimation(12000,19000,function(t) {
  textAlign(CENTER,CENTER);
  var qt = Ease.outin.quart(t*2);
  textSize(90*qt);
  fill("#303132");
  text("?",200,200);
  textSize(20);
  fill("#babbbc");
  t*=1.1;
  typewrite("A place where\nyou can\n\n- Discuss/chat anytime, without\nchat hackers - privately!\n- Discuss Code.org events & history\n - Ask questions",(t*3<1.3?t*3:2.57-t/0.433) + 0.1,200,170);
});
createAnimation(19000,26000,function(t) {
  var emojis = ["🔓","📕","🎮","</>","💻"];
  format("#00ff00",false,0,30,CENTER,CENTER);
  for (var i = 0; i < emojis.length; i++) {
    var a = 360/5*i-18;
    var r = 145*Ease.out.quint(t*2);
    var x = 200+r*cos(a);
    var y = 200+r*sin(a);
    text(emojis[i],x,y);
  }
});
createAnimation(19000,26000,function(t) {
  textAlign(CENTER,CENTER);
  textSize(20);
  fill("#babbbc");
  typewrite("A place where\nyou can find links to\n\n- Exploits\n- Libraries\n- Great games\n- Cool techniques",(t*4.5<1.3?t*4.5:2.57-t*3.5) + 0.1,200,200);
});
createAnimation(26000,33000,function(t) {
  textAlign(CENTER,CENTER);
  textSize(20);
  fill("#babbbc");
  typewrite("A place for every Code.org user.\n\n\nThe Game Lab Forum.",t*3,200,200);
  image(logo,200-30,500-Ease.in.quad(min(t*2,1))*200-30,60,60);
});
function draw(t) {
  if (t >= 33000) {
    prompt("Join the Game Lab Forum today at: ","https://gamelab.freeflarum.com");
    end();
    return;
  }
  background("#151617");
  drawAnimations();
}
return draw;
    }
  }*/
  /*{
    name: "Game Lab Forum",
    creator: "Ackvonhey",
    background: "#00adbc",
    text: "white",
    runtime: 16*1000,
    stage:0,
    animation: function(end) {
    var loadMusicForThisAdd = false;
    playSound('nice--AudioTrimmer.com-.mp3',false,function(){
    loadMusicForThisAdd = true;
    });
    var legends = [
    ['Varrience',"https://gamelab.freeflarum.com/assets/avatars/CBG1W1pcoPG8Hjfy.png"],
  ["[WUT] Adam","https://gamelab.freeflarum.com/assets/avatars/aQBeumAbXa9acnVM.png"],
  ['DragonFireGames',"https://gamelab.freeflarum.com/assets/avatars/KctZdnjAfhg3cL4q.png"],
  ['Ravage',"https://gamelab.freeflarum.com/assets/avatars/wU269mWNpBvxYtmg.png"],
  ['Letti',"https://gamelab.freeflarum.com/assets/avatars/tBRRhAIffNYR2pCq.png"],
  ['Ack','https://gamelab.freeflarum.com/assets/avatars/01zp1scQW3PL2SJj.png'],
    ];
  var heart = loadImage('https://static.vecteezy.com/system/resources/previews/023/790/845/original/creative-heart-icon-clipart-transparent-background-free-free-png.png');
  var jsLogo = loadImage('https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png');
  for(var i = 0; i < legends.length; i++){
  legends[i][1] = loadImage(legends[i][1]);
  }
  var timeFrames = [
    7000,
    1000,
    1000,
    3000,
    4000,
    ];
function draw(t) {
  background('green');
  var s = -1;
  var c = 0;
  for(var i = 0; i < timeFrames.length; i++){
  if(t < timeFrames[i]+c && t >= c){
  s = i;
  i = timeFrames.length;
  }else{
  c += timeFrames[i];
  }
  }
  var relT = t-c;
  // s = 2;
  switch(s){
  case 0:
  background(0, 238, 255);
  for(var i = 400; i > 0; i-=50){
  noStroke();
  var h = 400-i;
  fill(0, 238-h/5, 255-h/5);
  h = sin((t+i*123)/10)*50;
  var h2 = t/10;
  ellipse(200,200,i+h+h2,i+h+h2);
  }
  fill(0,0,0);
  textSize(30);
  textAlign(CENTER,CENTER);
  var h = 0;
  h = 40/(1+pow(0.5,(t-4000)/100));
  typewrite('The Gamelab Forum',(t-2500)/1500,200,200-h);
  textSize(15);
  typewrite('an opportunity to',(t-5000)/1500,200,200);
  break;
  case 1:
  background(255, 107, 203);
  fill(0,0,0);
  textSize(40);
  textAlign(CENTER,CENTER);
  var h = 0;
  h = 300/(1+pow(0.5,(relT)/100));
  push();
  translate(200,510-h); 
  scale((h/300)*2);
  rotate(-40+(h/300)*55);
  image(heart,-100,-100,200,200);
  pop();
  typewrite('Socialize',(relT)/500,200,-100+h);
  break;
  case 2:
  background(70, 252, 104);
  fill(0,0,0);
  textSize(40);
  textAlign(CENTER,CENTER);
  var h = 0;
  h = 300/(1+pow(0.5,(relT)/100));
  push();
  translate(200,-100+h); 
  scale((h/300)*2);
  rotate(50+(h/300)*-50);
  image(jsLogo,-100,-100,200,200);
  pop();
  typewrite('Learn',(relT)/500,200,500-h);
  break;
  case 3:
  background(128,128,128);
  var h = 300/(1+pow(0.5,(relT)/100));
  var h2 = 40/(1+pow(0.5,(relT-1000)/100));
  var h3 = 5/(1+pow(0.5,(relT-2000)/100));
  fill(0,0,0);
  textSize(40);
  textAlign(CENTER,CENTER);
  typewrite('Meet',(relT)/500,-100+h,200-h2);
  textSize(20+h3);
  typewrite('Code.org\'s greatest minds',(relT-1000)/500,-100+h,200);
  textSize(15+h3);
  typewrite('As well as minds from other sites',(relT-1500)/500,-100+h,200+h3*8);
  break;
  case 4:
  background(128+(relT/4000)*(200-128));
  
  for(var i = 0; i < legends.length; i++){
  push();
  var h3 = (360/legends.length)*i+t/30;
  var h4 = 600-(600/(1+pow(0.5,(relT)/300)));
  var h6 = 600/(1+pow(0.5,(relT-3500)/100));
  var h = rgb(150+(relT/4000)*50, 255, 255);
  translate(200+cos(h3)*(100+h4),200+sin(h3)*(100+h4));
  var h5 = h3+cos(t/25)*180;
  translate(sin(h5+i*456)*50,cos(h5+i*345)*50);
  translate(cos(h3)*h6,sin(h3)*h6);
  scale(1+cos((t/10)+i*222)*0.1);
  noStroke();
  fill(h);
  var h2 = 100+cos((t/10)+i*123)*10;
  ellipse(0,0,h2,h2);
  image(legends[i][1],-25,-25,50,50);
  stroke(h);
  strokeWeight(20+(h2-100)/5);
  noFill();
  ellipse(0,0,65,65);
  textSize(15);
  textAlign(CENTER,CENTER);
  fill(100,100,100);
  noStroke();
  typewrite(legends[i][0],(relT)/1000,0,30);
  pop();
  }
  
  
  fill(0,0,0,255-(relT/4000)*255);
  var h3 = 5/(1+pow(0.5,(relT-1000)/100));
  textSize(40);
  textAlign(CENTER,CENTER);
  typewrite('Meet',1-(relT-3000)/500,200,160);
  textSize(25-h3);
  typewrite('Code.org\'s greatest minds',1-(relT-3000)/500,200,200);
  textSize(20-h3);
  typewrite('As well as minds from other sites',1-(relT-3000)/500,200,240);
  break;
  default:
  background("yellow");
  break;
  }
  if (t >= 16000) {
    prompt("Join the Game Lab Forum today at: ","https://gamelab.freeflarum.com");
    stopSound();
    end();
    return;
  }
  if(!loadMusicForThisAdd){
  startTime = Date.now();
  background('black');
  fill('white');
  textAlign(CENTER,CENTER);
  textSize(40);
  text('Loading sound',200,180);
  textSize(15);
  text('click if this takes more than a few seconds',200,220);
  }
}
return draw;
    }
  }*/
  /*{
    name: "Codemon",
    creator: "DragonFireGames & MonsterYT_DaGamer",
    background: "#00adbc",
    text: "white",
    runtime: 15*1000,
    stage:0,
    animation: function(end) {

var card1 = loadImage("https://i.ibb.co/Y0pd7Rp/Dragon-Fire-Games.png");
var card2 = loadImage("https://i.ibb.co/LShFjLp/WUT-Adam.png");
var card3 = loadImage("https://i.ibb.co/S6HhMyC/Varrience.png");
var card4 = loadImage("https://i.ibb.co/wQXzsf4/Ravage.png");
var card5 = loadImage("https://i.ibb.co/Cmp4KbR/Ziriksi.png");

createAnimation(0,3000,function(t) {
  background("#303132");
  fill("white");
  textSize(20);
  textAlign(CENTER, CENTER);
  text("DragonFireGames and\nMonsterYT_DaGamer presents...", 200, 200);
  fill(alpha("black",1-Ease.outin.quart(2*t)));
  rect(-5,-5,410,410);
});
createAnimation(3000,5500,function(t) {
  t = Ease.out.quint(2*t);
  image(card1, 75+(t*400)-400, 15, 250, 350);
});
createAnimation(5500,7500,function(t) {
  t = Ease.out.quint(2*t);
  image(card2, 75+(t*400)-400, 15, 250, 350);
});
createAnimation(7500,9000,function(t) {
  t = Ease.out.quint(2*t);
  image(card3, 75+(t*400)-400, 15, 250, 350);
});
createAnimation(9000,10250,function(t) {
  t = Ease.out.quint(2*t);
  image(card4, 75+(t*400)-400, 15, 250, 350);
});
createAnimation(10250,11250,function(t) {
  t = Ease.out.quint(2*t);
  image(card5, 75+(t*400)-400, 15, 250, 350);
});
createAnimation(11250,15000,function(t) {
  textAlign(CENTER, CENTER);
  textSize(50);
  fill(alpha("white", t*2));
  text("Want your own?", 200, 190);
});

function draw(time) {
  if (time >= 15000) {
    prompt("Create your card at: ","https://docs.google.com/document/d/1IT66zyyrWysXQJUyjwk3T1Nnrm6CdMmYHB2RNiRgWw0/");
    end();
    return;
  }
  background("#151617");
  drawAnimations();
}
return draw;
    }
  },*/
];

//-------------------------------------
//            BUG WARNING!
// Do not touch the rest of the code 
// unless you know what you are doing
//-------------------------------------

{
//-------------------------------------
//               DANGER!
//
// INFOHAZARD:
// The code below poses a threat
// since it's workings expose hackable
// vulnerabilities
//
// PSYCHOHAZARD:
// For anyone experienced, tying to 
// either understand or debug the code 
// below will drive you insane
//
// PLEASE PROCEED WITH CAUTION
//
//-------------------------------------

var canvas = createCanvas(400,400);

{// Constant testing
var testVariable = randomId(32);
constant(testVariable,1);
window[testVariable] = 0;

var testVariable2 = randomId(32);
window[testVariable2] = 1;
constantify(testVariable2);
window[testVariable2] = 0;

if (window[testVariable] === 0 || window[testVariable2] === 0) {
  console.log("Error: You messed up constant() and now it won't run :)");
  for (var i in window) delete window[i];
  throw 0;
}
delete window[testVariable];
delete testVariable;
}
constant("userId", getUserId());
constant("path", getURLPath());
// Security
console.log("Your user ID is " + userId);
console.log("The project ID is " + path[2]);
if (path[2] != projectId) {
  prompt("This is a remix of Fire Chat", "https://studio.code.org/projects/gamelab/" + projectId);
}
if (getUserId() == ownerId && !OWNER_ENABLED) {
  console.log("Error: Owner Disabled");
  for (var i in window) delete window[i];
  throw 0;
}
setInterval(function hackTest() {
  if ((path[3] != undefined && (path[3] == "view" || (path[3] == "edit" && userId != ownerId))) || getUserId() > 27 || userId > 27) {
    console.log("Error: Not Allowed, set ownerId to your user ID to continue");
    for (var i in window) {
      if (i == "getCallback") continue;
      delete window[i];
    }
    throw 0;
    return function() {}
  }
  return hackTest;
}(),100);
delete window.timedLoop;
delete window.stopTimedLoop;

if (!window.md5) {
  console.log("------------\nWarning: Vault Missing, Insecure\nHere is the Library ID: NDJQvUlKfUgt5vcXcQb2e2JfiiYMwJN9Twfq3Ytki64\n------------")
}

// JSON & GIFs
function parseImageIntoData(img) {
  var msg = "";
  img.loadPixels();
  if (img.pixels.length < 1 || img === undefined) {
    return;
  }
  //image(img, 0, 0);
  for (var c = 0; c < img.pixels.length; c++) {
    var color = img.pixels[c];
    if (color > 0 && color < 255) {
      msg += String.fromCharCode(color);
    }
  }
  return msg;
}
function loadData(url,callback,failure) {
  loadImage(server+"/site?url="+url, function (img) {
    var msg = parseImageIntoData(img);
    if (typeof callback == 'function') callback(msg);
  }, failure);
}
function loadJSON(url,callback,failure) {
  loadData(url,function(data) {
    if (typeof callback == 'function') callback(JSON.parse(data));
  },failure);
}
function loadGIF(url,speed,callback,callback2,failure) {
  var serverurl = server+"/gif?url="+url;
  var gif = {};
  gif.width = 1;
  gif.height = 1;
  gif.draw = function() {};
  loadImage(url,function(frame) {
    gif.width = frame.width;
    gif.height = frame.height;
    gif.draw = function(x,y,width,height) {
      image(frame,x,y,width,height);
    };
    loadImage(serverurl, function (sheetImage) {
      var spriteSheet = loadSpriteSheet(sheetImage, frame.width, frame.height, sheetImage.height/frame.height);
      gif.animation = loadAnimation(spriteSheet);
      gif.animation.offX = frame.width/2;
      gif.animation.offY = frame.height/2;
      gif.animation.frameDelay = speed || 4;
      gif.draw = function(x,y,width,height) {
        translate(x,y);
        scale(width/this.width,height/this.height);
        this.animation.draw();
        scale(this.width/width,this.height/height);
        translate(-x,-y);
      };
      if (typeof callback == 'function')  callback(gif);
    }, failure);
    if (typeof callback2 == 'function')  callback2();
  },failure);
  return gif;
}
function loadAudioData(url,callback,failure) {
  loadImage(server+"/audio?url="+url, function (img) {
    var data = parseImageIntoData(img);
    if (typeof callback == 'function') callback(JSON.parse(data));
  }, failure);
}
//

function createDefaultProfile() {
  return {
    name: "(deleted)",
    avatar: true,
    banned: false,
    muted: false,
    admin: false,
    bio: "",
    id: "deleted",
    onlineAt: 0,
    idleAt: 0,
    room: DEFAULT_ROOM,
    friends: {},
    pending: {},
    blocked: {},
    settings: DEFAULT_PROFILE_SETTINGS,
    dms: {},
    ping: false,
    spam_level: 0,
    color: [0,0,0],
    seen_ad: false
  };
}
  
// Get username
var profile = {};
var username;
var avatar = true;
var editingProfile = false;
var isAdmin = false;
if (userId == ownerId) {
  username = ownerName;
  avatar = ownerAvatar;
  isAdmin = true;
  updateProfile(ownerId, function(p) {
    if (!p) p = createDefaultProfile();
    p.name = ownerName;
    p.avatar = ownerAvatar;
    p.color = ColorStringToArr(ownerColor);
    p.bio = ownerBio;
    p.id = ownerId;
    p.onlineAt = Date.now();
    p.idleAt = Date.now();
    p.admin = true;
    currentRoom = p.room;
    return p;
  }, null, true);
  getNameList(function (names) {
    names[ownerName] = ownerId;
    setNameList(names);
  });
}
var signingup = false;
function signup() {
  if (signingup) return;
  signingup = true;
  getKeyValue("profile_"+encodeURIComponent(userId), function(value) {
    if (value) {
      username = value.name;
      avatar = value.avatar;
      currentRoom = value.room;
      isAdmin = value.admin;
      muted = value.muted;
      var msg = welcomeReturnMessage(username);
      if (msg && userId != ownerId) announce(msg);
      return;
    }
    getNameList(function (names) {
      if (isRemix) username = prompt("Chat by DragonFireGames\nRemixed by "+ownerName+"\nEnter your username") || "";
      else username = prompt("Chat by DragonFireGames\nEnter your username") || "";
      while (!username || username.length < MIN_NAME_LENGTH || username.length > MAX_NAME_LENGTH || names[username] || !username.match(/^[a-zA-Z0-9_-]*$/) || username == ownerName) {
        if (!username) {
          signingup = false;
          return;
        }
        if (names[username] || username == ownerName) username = prompt("Name taken",username) || "";
        else if (username && username.length < MIN_NAME_LENGTH) username = prompt("Please enter a longer name. (above "+MIN_NAME_LENGTH+" chars)",username) || "";
        else if (username && username.length > MAX_NAME_LENGTH) username = prompt("Please enter a shorter name. (below "+MAX_NAME_LENGTH+" chars)",username) || "";
        else if (!username.match(/^[a-zA-Z0-9_-]*$/))  username = prompt("Name cannot contain spaces or special charaters",username) || "";
      }
      if (CENSOR_NAMES) username = censor(username);
      var p = createDefaultProfile();
      p.name = username;
      p.avatar = avatar;
      p.color = HSBToRGB(random(0,360),random(50,100),100);
      p.id = userId;
      p.onlineAt = Date.now();
      p.idleAt = Date.now();
      setKeyValue("profile_"+encodeURIComponent(userId),p);
      names[username] = userId;
      setNameList(names);
      prompt(INSTRUCTIONS.replace("${username}",username));
      // Validate
      var code = randomNumber(0,999).toString();
      if (code < 10) code = "0"+code;
      if (code < 100) code = "0"+code;
      var attempt;
      while (attempt != code) {
        attempt = prompt(TERMS_OF_SERVICE.replace("${code}",code));
      }
      // Announce
      var msg = welcomeMessage(username);
      if (msg) announce(msg);
      signingup = false;
    });
  });
}

// Mute/Ban/Admin
var muted = false;
var pingedBy = "false";
var pingData = false;
var gamePing = false;
var idleCounter = Date.now();
var censorChat = false;
setInterval((function testProfile() {
  if (editingProfile == true) return testProfile;
  updateProfile(userId,function(p) {
    if (editingProfile == true) return;
    username = p.name;
    muted = p.muted;
    censorChat = p.settings.CENSOR;
    if (Date.now() > p.mute_until && muted) {
      muted = p.muted = false;
      p.mute_until = 0;
      if (AUTOMOD_MESSAGES) announce("AutoMod: "+p.name+" has been unmuted",true);
      return p;
    }
    isAdmin = p.admin;
    if (p.banned && userId != ownerId) {
      while (true) {
        prompt("You are banned");
        for (var i in window) delete window[i];
        throw "Banned";
      }
    }
    var strping = JSON.stringify(p.ping);
    if (strping != pingedBy) {
      pingedBy = strping;
      if (p.ping.game !== undefined) {
        gamePing = p.ping;
      } else {
        doPing(p);
      }
    }
  },null,null,true);
  return testProfile;
})(),2000);
function doPing(p) {
  if (currentRoom != p.ping.room || display != "chatroom") {
    pingData = p.ping;
    pingData.time = Date.now();
    loadMessage(p.ping.id+"0");
  }
  setTimeout(function(){
    playSound(pingSound);
  },100);
  setTimeout(function(){
    updateProfile(userId,function(p){
      p.ping = false;
      return p;
    },function() {
      pingedBy = "false";
    });
    pingData = false;
  },4000);
}
setInterval(function(){
  var prof = profileCache[userId];
  if (!prof) return;
  prof.online = Date.now();
  prof.idle = idleCounter;
  setKeyValue("online_"+encodeURIComponent(userId),{
    online: Date.now(),
    idle: idleCounter
  });
},1000);

var currentRoom = DEFAULT_ROOM;
var room = false;
var roomlist = {};
var selectedUser = false;
var typingName = false;
var typedTime = 0;
var input = "";
var isTyping = false;
var ty, clicked;
var cursorPos = 0;
var link = "";
var linkType = false;
var linkImage = false;
var replyTo = false;
var display = "welcome";
var selscroll = "";
var scroll = 0, maxScroll = 0;

var messageCache = {};
var messageHeightCache = {};
var profileCache = {};
var DMCache = {};
var activeSounds = {};

var isMobile = _isSafari();
showMobileControls(true,true,true,true);

var circleMask = loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/White_Circle.svg/2048px-White_Circle.svg.png", function() {
  loadImage(defaultProfileIcon, function(img) {
    defaultProfileIcon = readyAvatarImage(img);
  });
  loadImage(deletedProfileIcon, function(img) {
    deletedProfileIcon = readyAvatarImage(img);
  });
});

// Load Icons
/*
loadImage("https://cdn3.emoji.gg/emojis/9231-idle.png",function(icon) {
  for (var i = 0; i < themeList.length; i++) {
    var buf = createGraphics(icon.width,icon.height);
    buf.background(themeList[i].idle_color||"#faa61a");
    var img = buf.get();
    img.mask(icon);
    themeList[i].idle = img;
  }
});
*/
var defaultFont = "Helvetica";
function loadThemeBackgoundImage(t) {
  var url = t.background_image;
  if (!url) return;
  loadImage(url, function(img) {
    var thumb = bevelImage(img);
    thumb.src = url;
    t.background_image = img;
    t.thumbnail = thumb;
  });
  delete t.background_image;
  delete t.thumbnail;
}
for (var i = 0; i < themeList.length; i++) {
  loadThemeBackgoundImage(themeList[i]);
}
var theme;
selectTheme(selTheme);

for (var i = 0; i < GameList.length; i++) {
  var g = GameList[i];
  g.index = i;
  g.overlay = concat(ColorStringToArr(g.overlay||"black"),[g.overlay_strength]);
  g.background_image = g.thumbnail;
  loadThemeBackgoundImage(g);
}

var testgraphics = createGraphics(400,400);
background(255);
testgraphics.fill(0);
testgraphics.noStroke();
testgraphics.rect(0,0,200,200);
image(testgraphics,0,0,200,200);
var doubleGraphics = get(150,150)[0] != 0;
delete testgraphics;

var scrollLength = {};
var scrollHeight = {};
function createDiv(name,x,y,w,h) {
  window[name+"Buff"] = createGraphics(w,h);
  window[name+"Buff"].width *= window[name+"Buff"]._pixelDensity;
  window[name+"Buff"].height *= window[name+"Buff"]._pixelDensity;
  window[name+"Buff"].posX = x;
  window[name+"Buff"].posY = y;
  window[name+"Buff"].twidth = w;
  window[name+"Buff"].theight = h;
  var cname = name.charAt(0).toUpperCase()+name.slice(1);
  window["scroll"+cname] = 0;
  window["maxScroll"+cname] = 0;
  scrollLength[cname] = h-5;
  scrollHeight[cname] = y;
  window[name+"Buff"].draw = function(hover) {
    if (!hover) hover = mouseRect(x,y,w,h);
    push();
    translate(x,y);
    fill(theme.panel);
    noStroke();
    rect(0,0,w,h,theme.rect_bevel);
    image(window[name+"Buff"],0,0,w,h);
    noFill();
    myStroke(theme.panel_stroke);
    if (hover) myStroke(theme.panel_stroke_hover);
    rect(0,0,w,h,theme.rect_bevel);
    pop();
    if (hover) {
      selscroll = cname;
    }
  }
}
createDiv("room",5,90,170,305);
createDiv("DM",180,90,215,275);
createDiv("member",5,170,192.5,195);
createDiv("potential",202.5,5,192.5,360);

createDiv("gamefriend",202.5,130,192.5,235);
createDiv("games",5,141.5,192.5,253.5);
createDiv("players",55,155,290,155);

createDiv("friend",5,90,192.5,305);
createDiv("pend",202.5,90,192.5,305);
  
createDiv("blocked",202.5,90,192.5,155);

createDiv("banned",202.5,90,192.5,150);
createDiv("muted",202.5,245,192.5,150);
createDiv("admin",5,180,192.5,185);

// gameDisplay = createGraphics(245*2,300*2);
// if (doubleGraphics) gameDisplay.scale(2,2);

// Draw
//var lastFrame = 0;
function draw() {
  cursor(ARROW);
  if (mouseX != pmouseX || mouseY != pmouseY) idleCounter = Date.now();
  background(theme.background);
  if (theme.background_image) image(theme.background_image,0,0,400,400);
  clicked = mouseWentDown("leftButton");
  if (gamePing) {
    clicked = false;
    mouseY += 400;
  }
  textFont(theme.font);
  textStyle(theme.textstyle);
  textSize(12);
  switch (display) {
    case "rooms": case "friends": case "games": case "settings": case "admin": drawTabs(); break;
    case "chatroom": drawChatRoom(); break;
    case "welcome": drawWelcome(); break;
    case "editgc": drawEditGroupChat(); break;
    case "reports": drawReports(); break;
    case "playgame": drawPlayGame(); break;
    case "advertisement": drawAdvertisement(); break;
    case "deleting": 
      fill(theme.announcement);
      noStroke();
      textAlign(CENTER,CENTER);
      textSize(40);
      text("Deleting",200,200); 
    break;
  }
  if (pingData) {
    var t = (Date.now()-pingData.time)/1000;
    push();
    if (t < 1) translate(200*t-200,0);
    if (t > 3) translate(600-200*t,0);
    myStroke(theme.notification_stroke);
    fill(theme.notifications);
    rect(5,5,222,50,theme.rect_bevel);
    var msg = messageCache[pingData.id+"0"];
    if (msg) {
      // Name
      var prof = getProfile(msg.userId);
      noStroke();
      textAlign(LEFT);
      fill(theme.username);
      if (prof.admin) fill(theme.admin_username);
      if (msg.userId == ownerId) fill(theme.owner_username);
      text(prof.name || "null", 50, 20);
      // Text
      textAlign(LEFT);
      fill(theme.text);
      if (msg.msg) {
        var lines = msg.oldmsg;
        lines = getLines(lines,170);
        text(lines[0], 50, 33);
        if (lines[2]) lines[1] += "...";
        if (lines[1]) text(lines[1], 50, 45);
      }
      // Room
      textAlign(RIGHT);
      fill(theme.date);
      if (pingData.room.length >= 32) {
        text("DM/GC", 218, 20);
      } else {
        text(pingData.room, 218, 20);
      }
      // Avatar
      if (prof) showAvatar(prof.id,12.5,12.5,35,35);
    }
  }
  if (gamePing) {
    clicked = mouseWentDown("leftButton");
    mouseY -= 400;
    drawGamePing();
  }
  if (userId == ownerId) {
    textAlign(LEFT,TOP);
    textSize(12);
    fill(theme.announcement);
    text(frameRate().toFixed(2),0,0);
  }
  // Scroll
  if (!selscroll) return;
  if (mouseIsPressed) {
    window["scroll"+selscroll] += mouseY - pmouseY;
  }
  if (keyDown(UP_ARROW) && !isTyping) window["scroll"+selscroll] +=20;
  if (keyDown(DOWN_ARROW) && !isTyping) window["scroll"+selscroll] -=20;
  window["scroll"+selscroll] = max(window["scroll"+selscroll],window["maxScroll"+selscroll]+scrollLength[selscroll]);
  window["scroll"+selscroll] = min(window["scroll"+selscroll],0);
}
function drawGamePing() {
  cursor(ARROW);
  myStroke(theme.notification_stroke);
  fill(theme.notifications);
  rect(50,50,300,300,theme.rect_bevel);
  var game = GameList[gamePing.game];
  textSize(16);
  textAlign(LEFT,TOP);
  fill(theme.announcement);
  text(gamePing.sender+" invited you to play:",55,55);
  textSize(12);
  textAlign(CENTER,TOP);
  text(game.description,200,130);
  push();
  translate(75,70);
  scale(1.25,1.25);
  drawGameProfile(game,false,window,200);
  pop();
  textSize(16);
  drawFriendList("Players",gamePing.players,playersBuff,"Player",function(){});
  var hoverDecline = drawRedButton2("Decline",55,315,142.5,30);
  if (hoverDecline && clicked) {
    gamePing = false;
    updateProfile(userId,function(p) {
      p.ping = false;
      return p;
    });
  }
  var hoverAccept = drawGreenButton2("Accept",202.5,315,142.5,30);
  if (hoverAccept && clicked) {
    joinGame(gamePing.id);
    gamePing = false;
  }
  textSize(12);
}
function drawWelcome() {
  var prof = getProfile(userId);
  push();
  textAlign(CENTER);
  textSize(serverNameSize);
  fill(theme.announcement);
  text("Welcome to "+serverName+"!",200,65);
  textSize(12);
  if (isRemix) {
    text("By: "+ownerName+" & DragonFireGames",200,77);
  } else {
    text("By: DragonFireGames",200,77);
  }
  pop();
  
  var trans = function(x,y) {
    translate(x,y);
    mouseX -= x;
    mouseY -= y;
  }
  
  push();
  var halfMove = Object.keys(featuredLinks).length*35/2;
  trans(200-halfMove,85);
  for (var i in featuredLinks) {
    var icon = getIcon(featuredLinks[i]);
    var hover = mouseRect(0,0,30,30);
    if (hover) {
      cursor(HAND);
      image(icon,-1,-1,32,32);
    } else image(icon,0,0,30,30);
    if (clicked && hover) {
      prompt(i,featuredLinks[i]);
      return;
    }
    trans(35,0);
  }
  trans(-200-halfMove,-85);
  pop();
  
  trans(20,120);
  if (prof.id != "deleted") drawProfile(userId,350);
  trans(-20,-120);
  
  trans(0,286);
  fill(theme.date);
  textAlign(LEFT,BOTTOM);
  text("Use CRTL+LEFT or CTRL+RIGHT to shift themes",0,1)
  drawThemes();
  trans(0,-286);
  
  push();
  textAlign(CENTER,CENTER);
  textSize(30);
  var str = "Enter Chat";
  if (prof.id == "deleted") str = "Sign Up";
  var wid = textWidth(str)+30;
  var hover = mouseRect(200-wid/2,202.5,wid,50);
  if (hover) {
    cursor(HAND);
    fill(theme.button_hover);
    myStroke(theme.button_stroke_hover);
  } else {
    fill(theme.buttons);
    myStroke(theme.button_stroke);
  }
  rect(200-wid/2,202.5,wid,50,theme.rect_bevel);
  if (hover) fill(theme.button_text_hover);
  else fill(theme.button_text);
  noStroke();
  text(str,200,229);
  if ((clicked && hover) || keyDown(ENTER)) {
    if (prof.id == "deleted") signup();
    else {
      startAdvertisement();
    }
  }
  pop();
}
var loadedAd;
var loadedAdAnim;
var startTime;
function drawAdvertisement() {
  prof = getProfile(userId);
  var time = (Date.now()-startTime);
  loadedAdAnim(time);
  format(loadedAd.background,false,0,10,LEFT,CENTER);
  rect(0, 380, 400, 30);
  fill(loadedAd.text);
  text(loadedAd.name, 5, 390);
  textAlign(CENTER);
  text("By: "+loadedAd.creator, 200, 390);
  textAlign(RIGHT);
  text(Math.round((loadedAd.runtime-time)/1000)+"s", 395, 390);
  if (prof.seen_ad&& time >= SKIP_AD_TIME) {
    var over = mouseRect(380,0,20,20);
    format("white",false,0,over?22:20,CENTER,CENTER);
    text("X",390,12);
    if (keyDown(ENTER) || (over && clicked)) {
      stopSound();
      display = STARTING_DISPLAY;
      loadChats();
    }
  }
}
function startAdvertisement(i) {
  if (AdvertisementList.length == 0) {
    display = STARTING_DISPLAY;
    loadChats();
    return;
  }
  display = "advertisement";
  if (i === undefined) i = floor(random()*AdvertisementList.length);
  loadedAd = AdvertisementList[i];
  loadedAdAnim = loadedAd.animation(function(){
    stopSound();
    display = STARTING_DISPLAY;
    loadChats();
    updateProfile(userId,function(p) {
      p.seen_ad = true;
      return p;
    });
  });
  startTime = Date.now();
}
function drawThemes() {
  push();
  fill(theme.panel);
  rect(0,0,400,114,theme.rect_bevel);
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
    fill(t.background);
    myStroke(t.stroke);
    scale(s,s);
    if (t.thumbnail && t.rect_bevel) {
      noFill();
      image(t.thumbnail[t.rect_bevel],0,7/s+h,100,100);
    }
    rect(0,7/s+h,100,100,t.rect_bevel);
    textAlign(CENTER,BOTTOM);
    textSize(16);
    noStroke();
    fill(t.announcement);
    textFont(t.font || defaultFont);
    textStyle(t.textstyle || NORMAL);
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
      fill(theme.button_hover);
      myStroke(theme.button_stroke_hover);
    } else {
      fill(theme.buttons);
      myStroke(theme.button_stroke);
    }
    rect(x,0,30,114,theme.rect_bevel);
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
function drawTabs() {
  var prof = getProfile(userId);
  getKeyValue("roomlist", function(list) {
    if (!list) {
      list = createDefaultRoomList();
      setKeyValue("roomlist",list);
    }
    roomlist = list;
  });
  drawProfile(userId,390);
  selscroll = false;
  var tx = 5;
  function tab(name,k) {
    var wid = textWidth(name)+15;
    var hover = mouseRect(tx,65,wid,20);
    if (hover) {
      cursor(HAND);
      fill(theme.message_hover);
      myStroke(theme.button_stroke_hover);
    } else {
      fill(theme.messages);
      myStroke(theme.button_stroke);
    }
    if (name == display) {
      if (hover) fill(theme.button_hover);
      else fill(theme.buttons);
    }
    rect(5,65,wid,20,theme.rect_bevel);
    if (hover) fill(theme.button_text_hover);
    else fill(theme.button_text);
    noStroke();
    textAlign(CENTER, CENTER);
    text(name,wid/2+5,75);
    if ((clicked && hover) || keyWentDown(k)) {
      playSound(clickSound);
      display = name;
      if (display == "rooms") loadChats();
      if (display == "admin") loadProfLists();
      if (display == "games") loadGames();
    }
    wid += 5;
    translate(wid,0);
    tx += wid;
  }
  push();
  tab("rooms",49);
  tab("games",50);
  tab("friends",51);
  tab("settings",52);
  if (isAdmin) tab("admin",53);
  pop();
  var cdisplay = display.charAt(0).toUpperCase()+display.slice(1);
  window["draw"+cdisplay]();
}
function drawRooms() {
  var prof = getProfile(userId)
  var hoverBtn = drawButton2("New DM/GC",180,370,215,25);
  if (hoverBtn && clicked) {
    GroupChat = createGC([userId],1,false);
    beginEditGroupChat();
    return;
  }
  /*// Room List
  var roomlist2 = JSON.parse(JSON.stringify(roomlist));
  if (isAdmin || EVERYONE_CAN_MAKE_ROOMS) roomlist["___MakeROOM___"] = true;
  drawList("Room List",roomlist,25,roomBuff,"Room",function(i,hoverBuff) {
    var hover = mouseRect(10,5+ty,160,20);
    if (hover) {
      cursor(HAND);
      roomBuff.fill(theme.button_hover);
      myStroke2(theme.button_stroke_hover,roomBuff);
    } else {
      roomBuff.fill(theme.buttons);
      myStroke2(theme.button_stroke,roomBuff);
    }
    roomBuff.rect(5,5,160,20,theme.rect_bevel);
    if (hover) roomBuff.fill(theme.button_text_hover);
    else roomBuff.fill(theme.button_text);
    if (i == "___MakeROOM___") {
      fill(theme.placeholder);
      i = "++ new ++";
    }
    roomBuff.noStroke();
    roomBuff.textAlign(CENTER, CENTER);
    roomBuff.text(i,85,15);
    if (!clicked || !hover) return;
    playSound(clickSound);
    if (i == "___MakeROOM___") {
      var list = Object.keys(roomlist).join("\n - ");
      currentRoom = prompt("Enter room:\n - "+list) || DEFAULT_ROOM;
      currentRoom = currentRoom.toLowerCase().replace(/[^a-zñ0-9_-\s]/g,"");
      setRoom(currentRoom);
      if (!roomlist) {
        roomlist = {};
        roomlist[DEFAULT_ROOM] = true;
        if (ANNOUNCEMENT_ROOM) roomlist[ANNOUNCEMENT_ROOM] = true;
      }
      roomlist[decodeURIComponent(currentRoom)] = true;
      setKeyValue("roomlist",roomlist);
      room = false;
      return;
    }
    if (keyDown(SHIFT) && (isAdmin || EVERYONE_CAN_MAKE_ROOMS) && i != DEFAULT_ROOM && i != ANNOUNCEMENT_ROOM) {
      if (confirm("Are you sure you want to delete room "+i+"?")) { 
        delete roomlist[i];
        setKeyValue("room_"+i,undefined);
        setKeyValue("roomlist",roomlist);
      }
    }
    setRoom(i);
    display = "chatroom";
    return;
  });
  */
  // Room List
  push();
  roomBuff.textFont(theme.font);
  roomBuff.textStyle(theme.textstyle);
  roomBuff.clear();
  roomBuff.push();
  ty = 90+scrollRoom;
  roomBuff.translate(0,scrollRoom);
  maxScrollRoom = 0;
  roomBuff.fill(theme.announcement);
  roomBuff.noStroke();
  roomBuff.textAlign(LEFT,CENTER);
  roomBuff.text("Room List:",5,10);
  shift2(-15,roomBuff,"Room");
  for (var i in roomlist) {
    var hover = mouseRect(10,5+ty,160,20);
    if (hover) {
      cursor(HAND);
      roomBuff.fill(theme.button_hover);
      myStroke2(theme.button_stroke_hover,roomBuff);
    } else {
      roomBuff.fill(theme.buttons);
      myStroke2(theme.button_stroke,roomBuff);
    }
    roomBuff.rect(5,5,160,20,theme.rect_bevel);
    if (hover) roomBuff.fill(theme.button_text_hover);
    else roomBuff.fill(theme.button_text);
    roomBuff.noStroke();
    roomBuff.textAlign(CENTER, CENTER);
    roomBuff.text(i,85,15);
    if (clicked && hover && keyDown(SHIFT) && (isAdmin || EVERYONE_CAN_MAKE_ROOMS) && i != DEFAULT_ROOM && i != ANNOUNCEMENT_ROOM) {
      playSound(clickSound);
      if (confirm("Are you sure you want to delete room "+i+"?")) { 
        delete roomlist[i];
        setKeyValue("room_"+i,undefined);
        setKeyValue("roomlist",roomlist);
      }
    }
    else if (clicked && hover) {
      playSound(clickSound);
      setRoom(i);
      display = "chatroom";
      roomBuff.pop();
      return;
    }
    shift2(-25,roomBuff,"Room");
  }
  if (isAdmin || EVERYONE_CAN_MAKE_ROOMS) {
    var hover = mouseRect(10,5+ty,200,20);
    if (hover) {
      cursor(HAND);
      roomBuff.fill(theme.button_hover);
      myStroke2(theme.button_stroke_hover,roomBuff);
    } else {
      roomBuff.fill(theme.buttons);
      myStroke2(theme.button_stroke,roomBuff);
    }
    roomBuff.rect(5,5,160,20,theme.rect_bevel);
    roomBuff.fill(theme.placeholder);
    roomBuff.noStroke();
    roomBuff.textAlign(CENTER, CENTER);
    roomBuff.text("++ new ++",85,15);
    if (clicked && hover) {
      var list = Object.keys(roomlist).join("\n - ");
      currentRoom = prompt("Enter room:\n - "+list) || DEFAULT_ROOM;
      currentRoom = currentRoom.toLowerCase().replace(/[^a-zñ0-9_-\s]/g,"");
      setRoom(currentRoom);
      if (!roomlist) {
        roomlist = {};
        roomlist[DEFAULT_ROOM] = true;
        if (ANNOUNCEMENT_ROOM) roomlist[ANNOUNCEMENT_ROOM] = true;
      }
      roomlist[decodeURIComponent(currentRoom)] = true;
      setKeyValue("roomlist",roomlist);
      room = false;
      roomBuff.pop();
      return;
    }
    shift2(-25,roomBuff,"Room")
  }
  roomBuff.pop();
  pop();
  roomBuff.draw();
  // DMs and GCs
  if (!prof) return;
  var dms = Object.keys(prof.dms);
  dms = dms.sort(function(a,b) {
    return (DMCache[b] || {date:0}).date - (DMCache[a] || {date:0}).date;
  });
  drawList("DMs/GCs",dms,35,DMBuff,"DM",function(i,hoverBuff) {
    var DM = DMCache[i];
    if (!DM) return;
    var hover = mouseRect(185,5+ty,200,30) && hoverBuff;
    drawDM(i,DM,hover,DMBuff);
    if (clicked && hover) {
      playSound(clickSound);
      if (keyDown(SHIFT) && DM.type == 1) {
        GroupChat = DM;
        beginEditGroupChat();
      }
      display = "chatroom";
      loadChats();
      setRoom(i);
    }
  });
  if (keyWentDown(ENTER)) {
    display = "chatroom";
    setRoom(DEFAULT_ROOM);
  }
} 
function drawDM(gcid,DM,hover,buff,twidth) {
  buff = buff || window;
  var twidth = twidth || buff.twidth || 200;
  var profiles = getProfilesFromList(DM.users);
  if (performanceMode) {
    buff.fill(theme.buttons);
    myStroke2(theme.button_stroke,buff);
    buff.rect(5,5,twidth-10,29);
    buff.noStroke();
    buff.fill(theme.username);
    buff.text(DM.name || profiles.map(function(v){
      return v.name;
    }).join(", "),10,15);
    return;
  }
  if (hover) {
    cursor(HAND);
    buff.fill(theme.button_hover);
    myStroke2(theme.button_stroke_hover,buff);
  } else {
    buff.fill(theme.buttons);
    myStroke2(theme.button_stroke,buff);
  }
  var profWid = 30+min(profiles.length,6)*10;
  if (DM.avatar != true) profWid = 40;
  var tx = profWid;
  buff.rect(tx-5,5,twidth-tx,29,theme.rect_bevel);
  // Name
  buff.noStroke();
  buff.textAlign(LEFT, CENTER);
  if (DM.name) {
    buff.fill(theme.username);
    buff.text(DM.name,tx,15);
  } else {
    for (var j = 0; j < profiles.length; j++) {
      var p = profiles[j];
      if (!p) continue;
      buff.fill(theme.username);
      if (p.admin) buff.fill(theme.admin_username);
      if (p.id == ownerId) buff.fill(theme.owner_username);
      var n = p.name;
      if (profiles[j+1]) n += ", ";
      buff.text(n,tx,15);
      tx += textWidth(n);
      if (tx > twidth) break;
    }
  }
  if (DM.avatar == true) {
    for (var j = min(profiles.length-1,5); j >= 0; j--) {
      if (!profiles[j]) continue;
      showAvatar(profiles[j].id,5+j*10,4.5,30,30,buff);
    }
  } else {
    showAvatar(gcid,5,4.5,30,30,buff);
  }
  if (!DM.type) return;
  // Date
  buff.textAlign(RIGHT, CENTER);
  buff.fill(theme.placeholder);
  buff.noStroke();
  var str = "Active "+date(DM.date);
  if (DM.date == 0) str = "Never Active";
  buff.text(str, twidth-10, 27.5);
  buff.textAlign(LEFT, CENTER);
  var typeMap = ["DM","GC ("+Object.keys(DM.users).length+")"];
  buff.text(typeMap[DM.type], profWid, 27.5);
}
function getProfilesFromList(list,nofilter) {
  return Object.keys(list).filter(function(v) {
    return v != userId || nofilter;
  }).map(function(v) {
    return getProfile(v);
  })/*.sort(function(a,b) {
    return (b||{onlineAt:0}).onlineAt - (a||{onlineAt:0}).onlineAt; 
  });*/
}
function drawFriends() {
  var prof = getProfile(userId)
  // DMs & Friends
  if (!prof) return;
  drawFriendList("Friend List",prof.friends,friendBuff,"Friend",function(i,hover) {
    var friendProf = getProfile(i)
    friendBuff.textAlign(RIGHT, CENTER);
    friendBuff.fill(theme.placeholder);
    if (friendProf.friends[userId]) {
      friendBuff.text("Mutual friends", 185, 27.5);
    } else {
      friendBuff.text("Pending approval", 185, 27.5);
    }
    if (clicked && hover) {
      playSound(clickSound);
      setRoom(friendProf.friends[userId]);
      display = "chatroom";
      loadChats();
      selectProfile(i);
    }
  });
  // Pending
  drawFriendList("Pending",prof.pending,pendBuff,"Pend",function(i,hover) {
    if (clicked && hover) {
      playSound(clickSound);
      updateProfile(userId,function(p) {
        p.friends[i] = p.pending[i];
        delete p.pending[i];
        return p;
      });
    }
  });
}
var GroupChat = {};
function beginEditGroupChat() {
  display = "editgc";
  GroupChat.potential = {};
  if (typeof GroupChat.avatar == 'object') GroupChat.url = GroupChat.avatar.src;
  else GroupChat.url = GroupChat.avatar;
  /*getNameList(function(names) {
    var idMap = {};
    for (var i in names) {
      if (GroupChat.users[names[i]]) continue;
      idMap[names[i]] = true;
    }
    GroupChat.potential = idMap;
    });*/
  forEachInNameList(function(uid,p) {
    if (GroupChat.users[uid]) return;
    if (p.banned) return;
    if (p.settings.ONLY_FRIENDS && !p.friends[userId]) return;
    GroupChat.potential[uid] = true;
  });
}
function drawEditGroupChat() {
  var prof = getProfile(userId)
  var gcid = GroupChat.id;
  var saveGC = function() {
    var cachedAvatar = GroupChat.avatar;
    delete GroupChat.avatar;
    var chat = JSON.parse(JSON.stringify(GroupChat));
    GroupChat.avatar = cachedAvatar;
    delete chat.potential;
    chat.avatar = chat.url;
    delete chat.url;
    setKeyValue("DM_"+encodeURIComponent(gcid),chat);
  }
  // DMs & Friends
  if (!prof) return;
  drawFriendList("Members",GroupChat.users,memberBuff,"Member",function(i,hover) {
    if (clicked && hover) {
      if (i == userId) {
        prompt("Cannot remove yourself this way");
        return;
      }
      playSound(clickSound);
      delete GroupChat.users[i];
      GroupChat.potential[i] = true;
      updateProfile(i,function(p) {
        delete p.dms[gcid];
        return p;
      });
      saveGC();
    }
  });
  // Potential
  drawFriendList("People",GroupChat.potential,potentialBuff,"Potential",function(i,hover) {
    if (clicked && hover) {
      playSound(clickSound);
      delete GroupChat.potential[i];
      GroupChat.users[i] = true;
      updateProfile(i,function(p) {
        p.dms[gcid] = true;
        return p;
      });
      saveGC();
    }
  });
  // Name
  push();
  var nameHover = mouseRect(5,60,192.5,22);
  textAlign(LEFT,TOP);
  textSize(24);
  noStroke();
  fill(theme.username);
  if (nameHover) {
    cursor(TEXT);
    stroke(theme.username);
  }
  text(GroupChat.name || "(unnamed)",5,60);
  pop();
  if (nameHover && clicked) {
    playSound(clickSound);
    GroupChat.name = prompt("What is the chat's name? (click cancel for no name)",GroupChat.name || "") || false;
    saveGC();
  }
  // Description
  push();
  var descHover = mouseRect(5,86,192.5,80);
  textAlign(LEFT,TOP);
  textSize(13);
  noStroke();
  fill(theme.text);
  if (descHover) {
    cursor(TEXT);
    stroke(theme.text);
  }
  text(GroupChat.desc || "(no desc)",5,86);
  pop();
  if (descHover && clicked) {
    playSound(clickSound);
    GroupChat.desc = prompt("What is the chat about? (click cancel for none, \\n for newlines)",(GroupChat.desc || "").replace(/\n/g,'\\n')) || false;
    if (GroupChat.desc) GroupChat.desc = GroupChat.desc.replace(/\\n/g,'\n');
    saveGC();
  }
  // Avatar
  if (!performanceMode) {
    var hoverAvatar = false;
    if (GroupChat.avatar == true) {
      var profiles = getProfilesFromList(GroupChat.users,true);
      var len = min(profiles.length-1,7)
      hoverAvatar = mouseRect(7.5,7.5,50+len*50/3,50);
      for (var j = len; j >= 0; j--) {
        if (!profiles[j]) continue;
        if (hoverAvatar) showAvatar(profiles[j].id,5+j*55/3,5,55,55);
        else showAvatar(profiles[j].id,7.5+j*50/3,7.5,50,50);
      }
    } else {
      hoverAvatar = mouseRect(7.5,7.5,50,50);
      if (hoverAvatar) showAvatar(gcid,5,5,55,55);
      else showAvatar(gcid,7.5,7.5,50,50);
    }
    if (hoverAvatar) {
      cursor(HAND);
    }
    if (hoverAvatar && clicked) {
    playSound(clickSound);
      GroupChat.url = prompt("Icon URL? (click cancel for no icon)") || true;
      processAvatar("GroupChat",window,GroupChat.url,GroupChat.avatar);
      saveGC();
    }
  }
  // Exit Buttons
  var hoverExit = drawButton2("Exit Edit Mode",5,370,192.5,25);
  if (hoverExit && clicked) {
    playSound(clickSound);
    saveGC();
    display = "rooms";
    loadChats();
  }
  var hoverLeave = drawRedButton2("Leave Group Chat",202.5,370,192.5,25);
  if (hoverLeave && clicked) {
    playSound(clickSound);
    if (confirm("Are you sure you want to leave the group chat?") == null) return;
    delete GroupChat.users[userId];
    GroupChat.potential[userId] = true;
    updateProfile(userId,function(p) {
      delete p.dms[gcid];
      return p;
    });
    saveGC();
    display = "rooms";
    loadChats();
  }
}
function drawSettings() {
  var prof = getProfile(userId)

  var t = 90;
  var settingToggle = function(label,setting,h) {
    var hover = drawToggle2(label,prof.settings[setting],5,t,192.5,h);
    t += h+5;
    if (hover && clicked) {
      updateProfile(userId,function(p) {
        p.settings[setting] = !p.settings[setting];
        return p;
      });
    }
  }

  settingToggle("Censor","CENSOR",25);
  settingToggle("Show Online Status","SHOW_ONLINE_STATUS",25);
  settingToggle("Show Current Room","SHOW_CURRENT_ROOM",25);
  settingToggle("Only friends can add you to \na group chat or game","ONLY_FRIENDS",35);
  settingToggle("@"+username,"NOTIFY_PINGS",25);
  settingToggle("@everyone","NOTIFY_EVERYONE_PINGS",25);

  drawFriendList("Blocked",prof.blocked,blockedBuff,"Blocked",function(i,hover) {
    if (clicked && hover) {
      updateProfile(userId,function(p) {
        delete p.blocked[i];
        return p;
      });
    }
  });
  
  var hoverDelete = drawRedButton2("Delete Profile",202.5,250,192.5,25);
  if (hoverDelete && clicked) {
    if (confirm("Are you sure you want to permanently delete your profile?")) {
      deleteProfile(userId);
      delete profileCache[userId];
      editingProfile = true;
      display = "deleting";
      setTimeout(function(){
        deleteProfile(userId);
      },1000);
      setTimeout(function(){
        editingProfile = false;
        display = "welcome";
      },2000);
    }
  }
  
  var trans = function(x,y) {
    translate(x,y);
    mouseX -= x;
    mouseY -= y;
  }
  trans(0,286);
  fill(theme.date);
  textAlign(LEFT,BOTTOM);
  text("Use CRTL+LEFT or CTRL+RIGHT to shift themes",0,1)
  drawThemes();
  trans(0,-286);
}
var profLists = {
  admins: {},
  banned: {},
  muted: {}
};
function loadProfLists() {
  if (display != "admin") return;
  forEachInNameList(function(uid,p) {
    if (p.admin) profLists.admins[uid] = true;
    else delete profLists.admins[uid];
    if (p.banned) profLists.banned[uid] = true;
    else delete profLists.banned[uid];
    if (p.muted) profLists.muted[uid] = true;
    else delete profLists.muted[uid];
  });
}
function forEachInNameList(callback) {
  var listProf = function(uid) {
    loadProfile(uid,function(p) {
      callback(uid,p);
    });
  }
  getNameList(function(names) {
    for (var i in names) {
      listProf(names[i]);
    }
  });
}
setInterval(loadProfLists,5000);
function drawAdmin() {
  getKeyValue("reports",function(value) {
    reportList = JSON.parse(value || "[]");
  });
  //
  drawFriendList("Admins",profLists.admins,adminBuff,"Admin",function(i,hover) {
    if (clicked && hover) {
      if (userId != ownerId) {
        prompt("Only owner can demote!");
        return;
      }
      if (i == userId) {
        prompt("You cannot demote yourself");
        return;
      }
      demoteAdmin(i);
      delete profLists.admins[i];
    }
  });
  drawFriendList("Banned",profLists.banned,bannedBuff,"Banned",function(i,hover) {
    if (clicked && hover) {
      unbanUser(i);
      delete profLists.banned[i];
    }
  });
  drawFriendList("Muted",profLists.muted,mutedBuff,"Muted",function(i,hover) {
    if (clicked && hover) {
      unmuteUser(i);
      delete profLists.muted[i];
    }
  });
  // Owner Buttons
  if (userId == ownerId) {
    var hoverKick = drawToggle2("Kick All Users",kicked,5,90,192.5,25);
    if (hoverKick && clicked) {
      toggleKick();
    }
    var hoverClear = drawButton2("Clear All (Public Chats)",5,120,192.5,25);
    if (hoverClear && clicked) {
      if (confirm("Are you sure you want to clear all public chats?")) clearAll();
    }
    var hoverDelete = drawRedButton2("Delete All Profiles",5,150,192.5,25);
    if (hoverDelete && clicked) {
      if (confirm("Are you sure you want to delete all profiles?")) {
        deleteAll();
        profileCache = {};
      }
    }
  }
  // Report Buttons
  var hoverReports = drawButton2("View Reports ("+reportList.length+")",5,370,192.5,25);
  if (hoverReports && clicked) {
    display = "reports";
  }
}
var reportList = [];
function drawReports() {
  getKeyValue("reports",function(value) {
    reportList = JSON.parse(value || "[]");
  });
  push();
  ty = 0;
  shift(-70);
  for (var i = 0; i < reportList.length; i++) {
    var report = reportList[i];
    var size = 38;
    for (var j = 0; j < report.messages.length; j++) {
      size += messageHeightCache[report.messages[j]] || 33;
    }
    shift(-size);
    var hover = mouseRect(2.5,-2.5-size+ty,395,size);
    fill(theme.panel);
    //myStroke(theme.panel_stroke);
    //if (hover) myStroke(theme.panel_stroke_hover);
    rect(2.5,-2.5-size,395,size,theme.rect_bevel);
    fill(theme.announcement);
    shift(38);
    textAlign(LEFT,CENTER);
    text("Room: "+(report.room.length < 32 ? report.room : " a DM or GC"),5,5);
    text("Reason: "+report.msg,5,29);
    var prof = getProfile(report.reporter)
    if (prof) {
      text("Reported By: "+prof.name,5,17);
    }
    var hoverDismiss = drawButton2("Dismiss",395-50,12.5,50,20,0,-ty);
    if (hoverDismiss && clicked) {
      reportList.splice(i,1);
      setKeyValue("reports",JSON.stringify(reportList));
    }
    drawMessageList(report.messages);
    shift(-size-5);
  }
  pop();
  // User
  fill(theme.panel);
  rect(5,5,345,55,theme.rect_bevel)
  if (selectedUser) {
    drawProfile(selectedUser,345);
  }
  // Buttons
  var hoverExit = drawButton2("Exit",355,5,40,25);
  if (hoverExit && clicked) {
    display = "admin";
  }
  var hoverDelete = drawRedButton2("Clear",355,35,40,25);
  if (hoverDelete && clicked) {
    if (confirm("Are you sure you want to do this?")) {
      reportList = [];
      setKeyValue("reports",undefined);
    }
  }
}
function drawChatRoom() {
  if (clicked) {
    if (!mouseRect(5,5,360,55)) selectedUser = false; 
    else if (selectedUser) clicked = false;
  }
  var roomId = currentRoom;
  /*if (frameCount % 20 == 0) */getKeyValue("room_"+currentRoom, function(value) {
    if (roomId != currentRoom) return;
    room = getRoom(value);
  });
  /*if (frameCount % 20 == 0) */getKeyValue("typing_"+currentRoom, function(value) {
    if (!value) return;
    typingName = value.name;
    typedTime = value.time;
  });
  // Rename
  var hoverProfile = mouseRect(375,5,20,20);
  if (clicked && hoverProfile) {
    playSound(clickSound);
    selectProfile(userId);
    clicked = false;
  }
  // New room
  var hoverRoomList = mouseRect(375,35,20,20);
  if ((clicked && hoverRoomList) || (keyCode == ESCAPE)) {
    keyCode = 0;
    playSound(clickSound);
    display = "rooms";
    loadChats();
    clicked = false;
  }
  // Mobile Switch
  var hoverMobileSwitch = mouseRect(375,65,20,20);
  if (clicked && hoverMobileSwitch) {
    playSound(clickSound);
    isMobile = !isMobile;
    clicked = false;
  }
  // Draw Messages
  textAlign(LEFT, CENTER);
  push();
  var inLineDist = 12*(inputLines.length-1);
  if (replyTo) inLineDist += 20;
  ty = 0;
  maxScroll = 375+scroll-inLineDist;
  shift(-375-scroll+inLineDist);
  fill(theme.announcement);
  if (typingName && Date.now()-typedTime < 6000) {
    text(typingMessage(typingName),3,-4.5);
  }
  shift(10);
  drawMessageList(room);
  pop();
  if (replyTo) {
    var msg = messageCache[replyTo];
    if (msg) {
      myStroke(theme.stroke);
      fill(theme.messages);
      rect(5,400-25-inLineDist,390,20,theme.rect_bevel,theme.rect_bevel,0,0);
      noStroke();
      fill(theme.placeholder);
      var prof = getProfile(msg.userId)
      if (!prof) prof = {name:""};
      if (!msg) {
        loadMessage(replyTo);
      } else if (msg != true) {
        var str = "Replying to @"+prof.name+": "+msg.msg[0];
        if (msg.msg[1]) str += "...";
        text(str,10,400-11-inLineDist);
      }
    } else {
      var id = replyTo.substring(0,16);
      var vers = Number(replyTo.substring(16,20))+1;
      replyTo = id+vers;
    }
    inLineDist -= 20;
  }
  // Inputs
  myStroke(theme.stroke);
  if (isTyping) fill(theme.input_box_typing);
  else fill(theme.input_box);
  rect(0, 400-25-inLineDist, 400, 25+inLineDist, theme.rect_bevel);
  noStroke();
  var hoverInput = mouseY >= 375-inLineDist;
  if (muted && currentRoom.length < 32) {
    fill(theme.text);
    text("You have been muted", 5, 390);
  } else if (input == "") {
    if (hoverInput) {
      cursor(TEXT);
      fill(theme.placeholder_hover);
    }
    else fill(theme.placeholder);
    if (isMobile) text("click here (mobile mode)", 5, 390);
    else text("first click here then type", 5, 390);
  } else {
    fill(theme.text);
    translate(0,-inLineDist);
    maxScroll += inLineDist;
    for (var j = 0; j < inputLines.length; j++) {
      text(inputLines[j], 5, 390);
      translate(0,12);
    }
    translate(0,-12-inLineDist);
  }
  if (!muted || currentRoom.length >= 32) {
    if (hoverInput) cursor(TEXT);
    if (isTyping) {
      fill(theme.bar);
      var befCount = befLines.length-1;
      text("|", 5 + textWidth(befLines[befCount]), 390+befCount*12);
    }
    if (linkType == "image" || linkType == "gif" || linkType == "code.org" || linkType == "youtube") {
      if (linkImage) {
        var size = 57/linkImage.height*linkImage.width;
        image(linkImage,393-size,337,size, 57);
      }
    }
    if (linkType == "url" && link) {
      var icon = getIcon(link);
      image(icon,393-37,337,37, 37);
    }
    if (linkType == "sound" && link) {
      image(soundIcon,393-37,337,37, 37);
    }
    if (linkType == "room" && link) {
      textAlign(RIGHT,CENTER);
      textSize(20);
      fill(theme.announcement);
      text("#"+decodeURIComponent(link),393,365.5);
    }
    var hoverInsert = mouseRect(377.5,377.5,20,20);
    if (hoverInsert) {
      cursor(HAND);
      image(insertIcon,376.5,376.5+inLineDist,22,22);
    }
    else image(insertIcon,377.5,377.5+inLineDist,20,20);
    if (isMobile && hoverInput) cursor(HAND);
    if (clicked) {
      if (hoverInsert) {
        playSound(clickSound);
        insertURL();
        return;
      }
      if (isMobile && hoverInput) {
        input = prompt("Send Message:");
        if (!input) {
          input = "";
          return;
        }
        sendInput();
        return;
      }
      if (hoverInput) {
        if (!isTyping && beginTypingSound) playSound(beginTypingSound);
        isTyping = true;
      } else {
        replyTo = false;
        isTyping = false;
      }
    }
  }
  //
  noStroke();
  fill(255);
  if (hoverProfile) {
    cursor(HAND);
    ellipse(385,15+inLineDist,27,27);
    image(renameIcon,374,4+inLineDist,22,22);
  } else {
    ellipse(385,15+inLineDist,25,25);
    image(renameIcon,375,5+inLineDist,20,20);
  }
  if (hoverRoomList) {
    cursor(HAND);
    ellipse(385,45+inLineDist,27,27);
    image(roomIcon,374,34+inLineDist,22,22);
  } else {
    ellipse(385,45+inLineDist,25,25);
    image(roomIcon,375,35+inLineDist,20,20);
  }
  var mobileSwitch = isMobile ? desktopIcon : mobileIcon;
  if (hoverMobileSwitch) {
    cursor(HAND);
    ellipse(385,75+inLineDist,27,27);
    image(mobileSwitch,374,64+inLineDist,22,22);
  } else {
    ellipse(385,75+inLineDist,25,25);
    image(mobileSwitch,375,65+inLineDist,20,20);
  }
  // Profile
  clicked = mouseWentDown("leftButton");
  if (selectedUser) {
    drawProfile(selectedUser,360);
  } else {
    var gcid = decodeURIComponent(currentRoom);
    var chat = DMCache[gcid];
    if (chat) {
      var profIds = Object.keys(chat.users).filter(function(v) {
        return v != userId;
      });
      push();
      fill(theme.panel);
      if (chat.type == 0) rect(5,5,222.5,40,theme.rect_bevel);
      else if (chat.type == 1) rect(5,5,192.5,100,theme.rect_bevel);
      pop();
      // Name
      push();
      textSize(16);
      noStroke();
      fill(theme.username);
      if (chat.type == 0) {
        textAlign(LEFT,CENTER);
        text(getProfile(profIds[0]).name,45,25);
      }
      if (chat.type == 1) {
        textAlign(LEFT,TOP);
        if (chat.name) text(chat.name,10,45);
        else {
          var names = profIds.map(function(v) {
            return getProfile(v).name;
          }).join(", ");
          text(names,10,45);
        }
      }
      pop();
      // Description
      push();
      textAlign(LEFT,TOP);
      textSize(12);
      noStroke();
      fill(theme.text);
      if (chat.desc) text(chat.desc || "(no desc)",10,61);
      pop();
      // Avatar
      if (chat.avatar == true) {
        for (var j = profIds.length-1; j >= 0; j--) {
          showAvatar(profIds[j],10+j*10,10,30,30);
        }
      } else {
        showAvatar(gcid,10,10,30,30);
      }
      // Settings
      if (chat.type == 1) {
        var hoverSettings = mouseRect(192.5-20,100-20,20,20)
        if (hoverSettings) image(settingsIcon,192.5-21,100-21,22,22);
        else image(settingsIcon,192.5-20,100-20,20,20);
        if (hoverSettings && clicked) {
          playSound(clickSound);
          clicked = false;
          GroupChat = chat;
          beginEditGroupChat();
        }
      }
    } else {
      push();
      textSize(16);
      textAlign(LEFT,CENTER);
      var wid = textWidth(currentRoom);
      fill(theme.panel);
      rect(5,5,wid+10,26,theme.rect_bevel);
      noStroke();
      fill(theme.username);
      text(decodeURIComponent(currentRoom),10,18);
      pop();
    }
  }
  // Scroll
  if (mouseIsPressed) {
    scroll += mouseY - pmouseY;
  }
  if (keyDown(UP_ARROW) && !isTyping) scroll +=20;
  if (keyDown(DOWN_ARROW) && !isTyping) scroll -=20;
  scroll = min(scroll,maxScroll-370);
  scroll = max(scroll,0);
}
var GameData = {avatar:true,users:{},potential:{},chat:[],source:{},id:""};
var selectedGame = false;
function loadGames() {
  GameData = {avatar:true,users:{},potential:{},chat:[],source:{},id:""};
  forEachInNameList(function(uid,p) {
    if (uid == userId) return;
    if (GameData.users[uid]) return;
    if (p.banned) return;
    if (p.settings.ONLY_FRIENDS && !p.friends[userId]) return;
    GameData.potential[uid] = true;
  });
}
function drawGames() {
  var prof = getProfile(userId);

  if (prof.game) {
    joinGame(prof.game);
    return;
  }
  
  drawList("Games",GameList,45,gamesBuff,"Games",function(game,hoverBuff) {
    var hover = mouseRect(5,5+ty,187.5,40);
    drawGameProfile(game,hover,gamesBuff);
    if (clicked && hover) {
      playSound(clickSound);
      selectedGame = game;
      GameData.users = {};
    }
  });
  
  var req1 = !!selectedGame;
  
  push();
  translate(2.5,87.5);
  fill(theme.panel);
  noStroke();
  rect(2.5,2.5,192.5,46.5,theme.rect_bevel);
  if (req1) drawGameProfile(selectedGame,false,window,197.5);
  pop();
  
  var friends = JSON.parse(JSON.stringify(prof.friends));
  for (var i in friends) {
    var friendProf = getProfile(i);
    if (!friendProf.friends[userId] || Date.now()-prof.onlineAt < ONLINE_THRESHOLD) delete friendProf[i];
  }
  var color = theme.buttons;
  var colorhover = theme.button_hover;
  if (!req1) {
    theme.buttons = theme.background;
    theme.button_hover = theme.background;
  }
  drawFriendList("Player List",GameData.potential,gamefriendBuff,"Gamefriend",function(i,hover) {
    var friendProf = getProfile(i);
    if (clicked && hover && req1) {
      if (GameData.users[i]) {
        GameData.potential[i] = true;
        delete GameData.users[i];
      } else {
        GameData.users[i] = true;
        delete GameData.potential[i];
      }
      playSound(clickSound);
      selectProfile(i);
      var keys = Object.keys(GameData.users);
      if (keys.length+1 > selectedGame.max_players) {
        GameData.potential[keys[0]] = true;
        delete GameData.users[keys[0]];
      }
    }
  });
  theme.buttons = color;
  theme.button_hover = colorhover;
  //
  var req2 = Object.keys(GameData.users).length+1 >= selectedGame.min_players;
  push();
  translate(200,87.5);
  fill(theme.panel);
  noStroke();
  rect(2.5,2.5,192.5,35,theme.rect_bevel);
  if (req2) drawDM("deleted",GameData,false,window,197.5);
  pop();
  //
  var hoverBtn = drawToggle2("Launch Game",req2,202.5,370,192.5,25,0,0,true);
  if (hoverBtn && clicked) {
    display = "playgame";
    createGame();
    return;
  }
}
function createGame() {
  updateProfile(userId,function(p) {
    p.game = gmid;
    return p;
  });
  var gmid = randomId(32);
  var data = {
    game: selectedGame.index,
    sender: username,
    players: GameData.users,
    id: gmid,
    chat: []
  };
  data.players[userId] = true;
  for (var i in GameData.users) {
    if (i == userId) continue;
    updateProfile(i,function(p) {
      p.ping = data;
      return p;
    });
  }
  var users = {};
  users[userId] = true;
  var g = {
    game: selectedGame.index,
    users: {},
    owner: userId,
    chat: []
  };
  g.users[userId] = true;
  setKeyValue("game_"+encodeURIComponent(gmid),JSON.stringify(g));
  GameData.id = gmid;
  GameData.source = execGame(selectedGame.source,{}) || {};
  GameData.users = g.users;
}
function joinGame(gmid) {
  display = "playgame";
  keyCode = false;
  GameData.id = gmid;
  updateProfile(userId,function(p) {
    p.game = gmid;
    p.ping = false;
    return p;
  });
  editGame(gmid,function(g) {
    g.users[userId] = true;
    selectedGame = GameList[g.game];
    GameData.source = execGame(selectedGame.source,{}) || {};
    return g;
  });
}
function drawPlayGame() {
  if (keyCode == ESCAPE) {
    display = "rooms";
    keyCode = false;
    return;
  }
  fill(theme.panel);
  rect(255,5,140,385-26.5,theme.rect_bevel);
  //
  drawDM("deleted",GameData,false,window,255);
  if (selectedGame) {
    push();
    translate(0,338.75);
    scale(1.25,1.25);
    drawGameProfile(selectedGame,false,window,204);
    pop();
  }
  // Mini Chat
  push();
  translate(0,385-3*26.5);
  textSize(10);
  textAlign(LEFT,TOP);
  for (var i = 0; i < GameData.chat.length; i++) {
    var msg = GameData.chat[i];
    fill(theme.messages);
    myStroke(theme.message_stroke);
    rect(257.5,5,135,24,theme.rect_bevel);
    noStroke();
    fill(theme.username);
    text(msg.name+":",260,7.5);
    fill(theme.text);
    if (censorChat) var textmsg = censor(msg.msg);
    text(textmsg,260,17.5);
    translate(0,-26.5);
  }
  pop();
  var hoverBtn = drawButton2("Send Message",257.5,390-26.5*2,135,24);
  if (hoverBtn && clicked) {
    var msg = prompt("What is your message?");
    if (msg) {
      editGame(GameData.id,function(g) {
        g.chat.unshift({name:username,msg:msg});
        if (g.chat.length > 13) g.chat.pop();
        return g;
      });
    }
  }
  // Leave
  var hoverLeave = drawButton2("Leave",255+72.5,395-26.5,67.5,26.5);
  if (hoverLeave && clicked) {
    display = "rooms";
  }
  var hoverQuit = drawRedButton2("Quit",255,395-26.5,67.5,26.5);
  if (hoverQuit && clicked) {
    GameData.users = {};
    editGame(GameData.id,function(g) {
      delete g.users[userId];
      //if (Object.keys(g.users).length == 0) return "delete";
      return g;
    });
    updateProfile(userId,function(p) {
      delete p.game;
      return p;
    })
    display = "rooms";
  }
  //
  fill(theme.panel);
  rect(5,40,245,300,theme.rect_bevel);
  execGame(GameData.source.draw);
  //image(gameDisplay,5,40,245,300);
}
function editGame(id,callback) {
  var key = "game_"+encodeURIComponent(id);
  getKeyValue(key,function(g) {
    if (!g) return;
    g = JSON.parse(g);
    g = callback(g);  
    if (!g) return;
    g = JSON.stringify(g);
    //if (g === "delete") g = undefined; 
    setKeyValue(key,g);
  });
}
//var windowCache = {};
function setGlobalKey(key,value,callback) {
  setKeyValue("game"+selectedGame.index+"_"+key,value,callback);
};
function setLocalKey(key,value,callback) {
  setKeyValue("game_"+encodeURIComponent(GameData.id)+"_"+key,value,callback);
};
function getGlobalKey(key,callback) {
  getKeyValue("game"+selectedGame.index+"_"+key,callback);
};
function getLocalKey(key,callback) {
  getKeyValue("game_"+encodeURIComponent(GameData.id)+"_"+key,callback);
};
// var changeWindow = ["mouseX","mouseY","pmouseX","pmouseY","clear"];
// for (var j = 0; j < changeWindow.length; j++) {
//   var i = changeWindow[j];
//   if (gameDisplay[i] === undefined) continue;
//   if (i[0] == "_") continue;
//   if (i == i.toUpperCase()) continue;
//   windowCache[i] = window[i];
// }
// delete windowCache.cursor;
// delete windowCache.loadImage;
// windowCache.mouseX = 0;
// windowCache.mouseY = 0;
// windowCache.pmouseX = 0;
// windowCache.pmouseY = 0;
function execGame(callback,arg1,arg2,arg3) {
  if (!callback) return;
  // gameDisplay.mouseX = (mouseX-5);
  // gameDisplay.mouseY = (mouseY-40);
  // gameDisplay.pmouseX = (pmouseX-5);
  // gameDisplay.pmouseY = (pmouseY-40);
  // for (var i in windowCache) {
  //   windowCache[i] = window[i];
  //   window[i] = gameDisplay[i];
  // }
  var trans = function(x,y) {
    translate(x,y);
    mouseX -= x;
    mouseY -= y;
    pmouseX -= x;
    pmouseY -= y;
  }
  var oldbackground = background;
  background = function(color) {
    push();
    fill(color);
    rect(0,0,width,height,theme.rect_bevel);
    pop();
  }
  window.width = 245;
  window.height = 300;
  trans(5,40);
  var ret = callback(arg1,arg2,arg3);
  trans(-5,-40);
  window.width = 400;
  window.height = 400;
  background = oldbackground;
  // for (var i in windowCache) {
  //   window[i] = windowCache[i];
  // }
  return ret;
}
setInterval(function() {
  if (display != "playgame") return;
  editGame(GameData.id,function(g) {
    for (var i in g.users) {
      if (!GameData.users[i]) {
        GameData.users[i] = true;
        execGame(GameData.source.onUserJoin,i);
      }
    }
    for (var i in GameData.users) {
      if (!g.users[i]) {
        delete GameData.users[i];
        execGame(GameData.source.onUserLeave,i);
      }
    }
    GameData.chat = g.chat || [];
  });
},1000);
function drawGameProfile(game,hover,buff,twidth) {
  buff = buff || window;
  var twidth = buff.twidth || twidth || 200;
  buff.image(game.thumbnail[theme.rect_bevel],5,5,twidth-10,40);
  /*if (performanceMode) {
    buff.fill(theme.buttons);
    myStroke2(theme.button_stroke,buff);
    buff.rect(5,5,twidth-10,29);
    buff.noStroke();
    buff.fill(theme.username);
    buff.text(friendProf.name,10,15);
    return;
  }*/
  if (hover) {
    cursor(HAND);
    var over = JSON.parse(JSON.stringify(game.overlay));
    over[3] = max(over[3]-80,0);
    buff.fill(over);
    myStroke2(game.stroke_hover||game.stroke,buff);
  } else {
    buff.fill(game.overlay);
    myStroke2(game.stroke,buff);
  }
  buff.rect(5,5,twidth-10,40,theme.rect_bevel);
  // Name
  buff.textAlign(CENTER,BOTTOM);
  buff.textSize(16);
  buff.noStroke();
  buff.fill(game.text_color||theme.announcement);
  buff.text(game.name,twidth/2-5,30);
  buff.textAlign(CENTER,TOP);
  buff.textSize(8);
  buff.text("By: "+game.creator,twidth/2-5,30);
  buff.textSize(12);
}
// Drawing Utilities
function shift(num) {
  translate(0,-num);
  maxScroll += num;
  ty -= num;
}
function shift2(num, buff, scroll) {
  buff.translate(0,-num);
  window["maxScroll"+(scroll || "")] += num;
  ty -= num;
}
function drawList(name,list,size,buff,selscroller,forEach) {
  var arr = list instanceof Array;
  if (!arr) list = Object.keys(list);
  var hoverBuff = mouseRect(buff.posX,buff.posY,buff.twidth,buff.theight);
  push();
  buff.textFont(theme.font);
  buff.textStyle(theme.textstyle);
  buff.clear();
  buff.push();
  ty = buff.posY+window["scroll"+selscroller];
  buff.translate(0,window["scroll"+selscroller]);
  window["maxScroll"+selscroller] = 0;
  buff.fill(theme.announcement);
  buff.noStroke();
  buff.textAlign(LEFT,CENTER);
  buff.text(name+" ("+list.length+"): ",5,10);
  shift2(-15,buff,selscroller);
  for (var i = 0; i < list.length; i++) {
    if (ty > buff.posY+buff.theight) break;
    if (ty < buff.posY-size) {
      shift2(-size,buff,selscroller);
      continue;
    }
    forEach(list[i],hoverBuff,i);
    shift2(-size,buff,selscroller);
  }
  buff.pop();
  pop();
  buff.draw(hoverBuff);
}
function drawFriendList(name,list,buff,selscroller,perFriend) {
  var prof = getProfile(userId);
  list = list || {};
  drawList(name,list,35,buff,selscroller,function(i,hoverBuff) {
    var hover = mouseRect(buff.posX+2.5,5+ty,buff.twidth-7.5,30) && hoverBuff;
    drawSmallProfile(i,hover,buff);
    perFriend(i,hover);
  });
}
function drawButton2(label,x,y,w,h,Tx,Ty,filler) {
  var hover = mouseRect(x-(Tx||0),y-(Ty||0),w,h)
  if (hover) {
    cursor(HAND);
    fill(theme.button_hover);
    myStroke(theme.button_stroke_hover);
  } else {
    fill(theme.buttons);
    myStroke(theme.button_stroke);
  }
  if (filler) filler(hover);
  rect(x,y,w,h,theme.rect_bevel);
  fill(theme.text);
  noStroke();
  textAlign(CENTER,CENTER)
  text(label,x+w/2,y+h/2);
  if (hover && clicked) playSound(clickSound);
  return hover;
}
function drawToggle2(label,condition,x,y,w,h,Tx,Ty,noadd) {
  if (!noadd) label += " ("+condition+")";
  return drawButton2(label,x,y,w,h,Tx,Ty,function(hover){
    if (!condition) {
      if (hover) fill (theme.message_hover);
      else fill (theme.messages);
    }
  });
}
function drawRedButton2(label,x,y,w,h,Tx,Ty,redness) {
  var hover = drawButton2(label,x,y,w,h,Tx,Ty);
  push();
  noStroke();
  fill([255,0,0,redness||32]);
  rect(x,y,w,h,theme.rect_bevel);
  pop();
  return hover;
}
function drawGreenButton2(label,x,y,w,h,Tx,Ty,greeness) {
  var hover = drawButton2(label,x,y,w,h,Tx,Ty);
  push();
  noStroke();
  fill([0,255,0,greeness||32]);
  rect(x,y,w,h,theme.rect_bevel);
  pop();
  return hover;
}
// Messages
function loadMessage(idv) {
  var id = idv.substring(0,16);
  var vers = idv.substring(16,20);
  var prevVers = Number(vers)-1;
  var oldcached = messageCache[id+prevVers];
  if (oldcached) {
    messageCache[id+vers] = oldcached;
  } else {
    messageCache[id+vers] = true;
  }
  getKeyValue("msg_"+encodeURIComponent(id), function(value) {
    if (!value) return;
    value = JSON.parse(value);
    textSize(12);
    if (censorChat) value.msg = censor(value.msg);
    value.oldmsg = value.msg;
    var h = 0;
    if (value.announcement == true) {
      value.msg = getLines(value.msg,400);
    } else {
      value.msg = getLines(value.msg,360);
      h += 21;
      if (value.msg[0] == "" && value.msg.length == 1) h -= 12;
      if (Object.keys(value.reactions).length > 0) h += 17;
      if (value.reply) h += 15;
      //if (Object.keys(value.reactions).length > 13) h += 17;
      if (value.link) h += (value.type == "image" || value.type == "gif" || value.type == "code.org" || value.type == "youtube" ? IMAGE_HEIGHT+5 : 0) + (value.type == "url" || value.type == "sound" ? 34 : 0) + (value.type == "room" ? 21 : 0);
    }
    h += 12*value.msg.length;
    messageHeightCache[id+vers] = h;
    delete messageHeightCache[id+(vers-1)];
    value.cachedAt = Date.now();
    messageCache[id+vers] = value;
    delete messageCache[id+(vers-1)];
    if (Object.keys(messageCache).length > MAX_CACHE_SIZE) popCache();
    var src = value.link;
    if (value.type == "image") {
      value.link = false;
      loadImage(src,function(img) {
        value.link = bevelImage(img);
        value.link.src = src;
      });
    }
    if (value.type == "gif") {
      value.link = loadGIF(src);
      value.link.src = src;
    }
    if (value.type == "code.org") {
      value.link = false;
      loadImage("https://studio.code.org/v3/files/"+src+"/.metadata/thumbnail.png",function(thumb) {
        value.link = bevelImage(thumb);
        value.link.id = src;
        value.link.src = "https://studio.code.org/projects/gamelab/"+src+"/";
        loadImage(server+"/info/"+src,function(img) {
          var data = parseImageIntoData(img);
          var json = JSON.parse(data);
          value.link.name = json.name;
          value.link.publishedAt = json.publishedAt;
          value.link.type = json.projectType;
        });
      });
    }
    if (value.type == "youtube") {
      value.link = false;
      loadImage("https://img.youtube.com/vi/"+src+"/hqdefault.jpg", function(thumb) {
        value.link = bevelImage(thumb);
        value.link.id = src;
        value.link.src = "https://www.youtube.com/watch?v="+src;
        loadImage(server+"/youtube/info/"+src,function(img) {
          var data = parseImageIntoData(img);
          var json = JSON.parse(data);
          for (var i in json) {
            value.link[i] = json[i];
          }
        });
      });
    }
    if (value.type == "sound") {
      value.link = {
        src: src,
      };
      loadAudioData(src,function(data) {
        value.link.name = data.name;
        value.link.duration = data.duration;
      });
    }
  });
  setTimeout(function() {
    if (messageCache[id+vers] == true) loadMessage(id+vers);
  },1000);
}
function drawMessageList(list) {
  for (var i = 0; i < list.length; i++) {
    if (ty < 0) return;
    var msgHeight = messageHeightCache[list[i]];
    if (msgHeight && ty > 400+msgHeight) {
      shift(msgHeight);
      continue;
    }
    var cached = messageCache[list[i]];
    if (cached == true) {
      shift(33);
      fill(theme.announcement);
      textAlign(LEFT);
      text("Loading Message...",10,16.5);
      continue;
    }
    if (cached) {
      drawMessage(cached,i,list,msgHeight);
    } else {
      loadMessage(list[i]);
      shift(33);
    }
  }
}
performanceMode = false;
function drawMessage(msg,index,list,msgHeight) {
  if (performanceMode) {
    drawMessagePerformance(msg,msgHeight);
    return;
  }
  // Shortcuts
  var idv = list[index];
  var id = idv.substring(0,16);
  var lines = msg.msg || ["null"];
  if (lines[0] == "" && lines.length == 1) lines = [];
  
  // Announce
  if (msg.announcement == true) {
    textAlign(CENTER);
    fill(theme.announcement);
    noStroke();
    for (var j = (lines.length-1); j >= 0; j--) {
      text(lines[j] == undefined ? "null" : lines[j], 200,-7);
      shift(12);
    }
    return;
  }
  
  // Blocked
  if (profileCache[userId].blocked[msg.userId]) return;
  
  // Profile Load
  var prof = getProfile(msg.userId);
  
  // Banned
  if (prof.id == "deleted" && HIDE_DELETED_USER_MESSAGES) return;
  if (prof.banned && HIDE_BANNED_USER_MESSAGES) return;
  
  // Shortcuts
  var link = msg.link;
  var hasReactions = Object.keys(msg.reactions).length > 0;
  //
  
  msgHeight -= 5;
  
  // Reactions
  var tx = 0;
  if (hasReactions) {
    shift(17);
    msgHeight -= 17;
  }
  for (var i in msg.reactions) {
    var amount = Object.keys(msg.reactions[i]).length;
    //var wid = textWidth(amount+i)+5;
    var wid = 28.15;
    var hover = mouseRect(35+tx,ty-5,wid,17);
    if (hover) {
      cursor(HAND);
      fill(theme.button_hover);
      myStroke(theme.button_stroke_hover);
    } else {
      fill(theme.buttons);
      myStroke(theme.button_stroke);
    }
    if (msg.reactions[i][userId]) fill(theme.button_pressed);
    rect(35+tx,-5,wid,17,theme.rect_bevel);
    textAlign(CENTER,CENTER);
    if (hover) fill(theme.button_text_hover);
    else fill(theme.button_text);
    noStroke();
    text(amount+i,35+tx+wid/2,4.5);
    if (clicked && hover) {
      playSound(clickSound);
      if (msg.reactions[i][userId]) removeReaction(i, id, msg.version);
      else addReaction(i, id, msg.version);
    }
    tx += wid;
    //if (tx > 360) {
    //  msgHeight -= 17;
    //  shift(-17);
    //  tx = 0;
    //}
  }
  
  // Box
  var boxup = 0;
  if (msg.reply) boxup += 15;
  myStroke(theme.stroke);
  fill(theme.messages);
  var str = JSON.stringify(msg.msg);
  var isPing = str.includes("@"+username) ||
    str.includes("@everyone") ||
    str.includes("@here") ||
    (str.includes("@owner") && userId == ownerId);
  var messageHover = mouseRect(35, ty-msgHeight-5+boxup, 360, msgHeight-boxup);
  if (messageHover) fill(theme.message_hover);
  if (isPing) {
    fill(theme.ping_messages);
    if (messageHover) fill(theme.ping_message_hover);
  }
  rect(35, -msgHeight-5+boxup, 360, msgHeight-boxup, theme.rect_bevel);
  if (messageHover && keyDown(CONTROL) && keyWentDown("c")) {
    prompt("Message:",lines.join("\n"))
  }
  
  // Inserts
  if (link) {
    if (msg.type == "room") {
      shift(21);
      var str = "#"+decodeURIComponent(link);
      var hover = drawButton2(str,39,-5,10+textWidth(str),17,0,-ty);
      if (hover && clicked) {
        playSound(clickSound);
        setRoom(link);
      }
    }
    else if (msg.type == "image") {
      shift(IMAGE_HEIGHT+5);
      var box = centerRect(350,IMAGE_HEIGHT,link.width,link.height);
      var hover = mouseRect(40,-4+ty+box.y,box.w,box.h);
      var img = link[theme.rect_bevel||0];
      if (hover) {
        cursor(HAND);
        image(img, 39, -5+box.y, box.w+2, box.h+2);
      } else image(img, 40, -4+box.y, box.w, box.h);
      if (clicked && hover) {
        playSound(clickSound);
        prompt("Linked image url",link.src);
      }
    }
    else if (msg.type == "gif") {
      shift(IMAGE_HEIGHT+5);
      var box = centerRect(350,IMAGE_HEIGHT,link.width,link.height);
      var hover = mouseRect(40,-4+ty+box.y,box.w,box.h);
      if (hover) {
        cursor(HAND);
        link.draw(39, -5+box.y, box.w+2, box.h+2);
      } else link.draw(40, -4+box.y, box.w, box.h);
      if (clicked && hover) {
        playSound(clickSound);
        prompt("Linked image url",link.src);
      }
    }
    else if (msg.type == "code.org") {
      shift(IMAGE_HEIGHT+5);
      var s = IMAGE_HEIGHT;
      var hover = mouseRect(40,-4+ty,s,s);
      var img = link[theme.rect_bevel||0];
      if (hover) {
        cursor(HAND);
        image(img, 39, -5, s+2, s+2);
      }
      else image(img, 40, -4, s, s);
      translate(s+5,0);
      textAlign(LEFT, CENTER);
      fill(theme.text);
      if (link.name) text(link.name,40,4);
      if (link.type) {
        text("Type: "+link.type,40,18);
      }
      if (link.publishedAt) {
        text("Published At:",40,34);
        text(link.publishedAt,40,46);
      }
      translate(-s-5,0);
      if (clicked && hover) {
        playSound(clickSound);
        prompt("Linked project url",link.src);
      }
    }
    else if (msg.type == "youtube") {
      shift(IMAGE_HEIGHT+5);
      var box = centerRect(350,IMAGE_HEIGHT,link.width,link.height);
      var hover = mouseRect(40,-4+ty+box.y,box.w,box.h);
      var img = link[theme.rect_bevel||0];
      var yticon = linkIcons["youtube.com"];
      if (hover) {
        cursor(HAND);
        image(img, 39, -5+box.y, box.w+2, box.h+2);
        image(yticon, 21+box.w/2, -23+box.y+box.h/2, 38, 38);
      } else {
        image(img, 40, -4+box.y, box.w, box.h);
        image(yticon, 22+box.w/2, -22+box.y+box.h/2, 36, 36);
      }
      translate(box.w+5,0);
      textAlign(LEFT, CENTER);
      fill(theme.text);
      link.author = link.author || {};
      text(link.name || "(untitled)",40,4);
      text(link.author.name || "(unknown)",40,18);
      text("Published at: "+(link.published || "The end of time"),40,32);
      text((link.author.subscribers || "NaN")+" subs, "+(link.views || "NaN")+" views",40,46);
      text("Category: "+(link.category || "None"),40,60);
      translate(-box.w-5,0);
      if (clicked && hover) {
        playSound(clickSound);
        prompt("Linked youtube url",link.src);
      }
    }
    else if (msg.type == "url") {
      shift(34);
      var icon = getIcon(link);
      var hover = mouseRect(40,-4+ty,29,29);
      if (hover) {
        cursor(HAND);
        image(icon,39,-5,31, 31);
      } else image(icon,40,-4,29, 29);
      if (clicked && hover) {
        playSound(clickSound);
        prompt("Linked url",link);
      }
    }
    else if (msg.type == "sound") {
      shift(34);
      var icon = playIcon;
      if (activeSounds[link.src]) icon = pauseIcon;
      var hover = mouseRect(40,-4+ty,29,29);
      if (hover) {
        cursor(HAND);
        image(icon,39,-5,31,31);
      } else image(icon,40,-4,29,29);
      textAlign(LEFT, CENTER);
      fill(theme.text);
      if (link.name) text(link.name,73,4);
      if (link.duration) {
        var toTime = function(secs) {
          var minutes = floor(secs/60);
          var seconds = floor(secs) % 60;
          if (seconds < 10) seconds = "0"+seconds;
          //var ms = floor(secs*100) % 100;
          //if (ms < 10) ms = "0"+ms;
          return minutes+":"+seconds//+"."+ms;
        }
        var str = toTime(link.duration);
        if (activeSounds[link.src]) {
          var passed = toTime((Date.now()-activeSounds[link.src])/1000);
          str = passed+" / "+str;
        }
        text(str,73,18);
      }
      if (clicked && hover) {
        if (keyDown(SHIFT)) {
          playSound(clickSound);
          prompt("Linked url",link.src);
        } else {
          if (activeSounds[link.src]) {
            stopSound(link.src);
            delete activeSounds[link.src];
            if (Object.keys(activeSounds).length == 0) {
              if (theme.background_music) playSound(theme.background_music,true);
            } 
          } else {
            if (Object.keys(activeSounds).length == 0) {
              if (theme.background_music) stopSound(theme.background_music);
            }
            playSound(link.src,false);
            activeSounds[link.src] = Date.now();
          }
        }
      }
    }
  }
  
  shift(9);
  
  // Text
  noStroke();
  textAlign(LEFT, CENTER);
  fill(theme.text);
  for (var j = (lines.length-1); j >= 0; j--) {
    shift(12);
    text(lines[j] == undefined ? "null" : lines[j], 37, 9);
  }
  
  shift(12);
  
  // Name
  textAlign(LEFT, CENTER);
  fill(theme.username);
  if (prof) {
    if (prof.admin) fill(theme.admin_username);
    if (msg.userId == ownerId) fill(theme.owner_username);
    text(prof.name || "null", 39, 9);
  } else {
    text("null", 39, 9);
  }
  
  // Date
  textAlign(RIGHT, CENTER);
  fill(theme.date);
  text(date(msg.date), 392, 9);
  
  // Avatar
  var avatarHover = mouseRect(5,ty,30,30)
  if (avatarHover) {
    cursor(HAND);
    showAvatar(msg.userId,4,-2,32,32);
  } else showAvatar(msg.userId,5,-1,30,30);
  if (clicked && avatarHover) {
    playSound(clickSound);
    selectProfile(msg.userId);
  }
  
  // Buttons
  if (messageHover) {
    var tx = 0;
    function drawButton(icon,x,s,click) {
      tx+=22;
      var hover = mouseRect(400-tx,ty-2,19,19);
      if (hover) {
        cursor(HAND);
        fill(theme.button_hover);
        myStroke(theme.button_stroke_hover);
      } else {
        fill(theme.buttons);
        myStroke(theme.button_stroke);
      }
      rect(400-tx,-2,19,19,theme.rect_bevel);
      image(icon,400-tx+x,0,s,s);
      if (clicked && hover) {
        playSound(clickSound);
        click();
      }
    }
    if (msg.userId == userId || isAdmin) {
      drawButton(deleteIcon,2.5,15,function() {
        deleteMessage(id,msg.version);
      });
    }
    if (msg.userId == userId) {
      drawButton(editIcon,3,15,function() {
        msg.oldmsg = msg.oldmsg.replace(/\n/g,'\\n');
        msg.oldmsg = prompt("Edit",msg.oldmsg) || msg.oldmsg;
        msg.oldmsg = msg.oldmsg.replace(/\\n/g,'\n');
        editMessage(msg,id);
      });
    }
    if (msg.userId != userId) drawButton(replyIcon,2.5,15,function() {
      if (!prof) return;
      var str = "@"+prof.name+" ";
      input = str+input;
      cursorPos += str.length;
      updateInput();
      replyTo = id+msg.version;
      clicked = false;
      if (beginTypingSound) playSound(beginTypingSound);
      isTyping = true;
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
      if (emoji) addReaction(emojiList[emoji],id,msg.version);
    });
    if (msg.userId != userId && !isAdmin) drawButton(reportIcon,3,15,function() {
      var reportMsg = prompt("Why do you want to report this message? (cancel to stop report)");
      if (!reportMsg) return;
      var data = {
        msg: reportMsg,
        reporter: userId,
        room: currentRoom,
        messages: list.slice(index,index+REPORT_CONTEXT_MESSAGES)
      };
      getKeyValue("reports",function(value) {
        value = JSON.parse(value || "[]");
        value.push(data);
        setKeyValue("reports",JSON.stringify(value),function() {
          prompt("Report sucessfully submitted!");
        });
      });
    });
  }
  
  // Reply
  if (msg.reply) {
    shift(15);
    myStroke(theme.stroke);
    fill(theme.messages);
    rect(10,0,380,15,theme.rect_bevel);
    noStroke();
    fill(theme.placeholder);
    textAlign(LEFT,CENTER);
    text(msg.reply,15,8);
  }
}
function drawMessagePerformance(msg,msgHeight) {
  var lines = JSON.parse(JSON.stringify(msg.msg || ["null"]));
  if (lines[0] == "" && lines.length == 1) lines = [];
  var tx = 5;
  if (msg.announcement) { 
    fill(theme.announcement);
    tx = 35;
  } else {
    fill(theme.text2);
    var prof = getProfile(msg.userId);
    lines.unshift(prof.name+": ");
    if (msg.reply) lines.unshift(msg.reply);
    var rctns = Object.keys(msg.reactions);
    if (rctns.length > 0) lines.push(rctns.map(function(v){
      return Object.keys(msg.reactions[v]).length+v;
    }).join(" "));
    var link = msg.link;
    if (link) {
      if (msg.type == "image") {
        shift(IMAGE_HEIGHT);
        msgHeight -= IMAGE_HEIGHT;
        image(msg.link[0],5,0,IMAGE_HEIGHT,IMAGE_HEIGHT);
        var hover = mouseRect(5,ty,IMAGE_HEIGHT,IMAGE_HEIGHT);
        if (clicked && hover) prompt("Linked image",link.src);
      } else if (msg.type == "url") {
        shift(39);
        msgHeight -= 39;
        var hover = mouseRect(5,ty,34,34);
        image(getIcon(link),5,0,34, 34);
        if (clicked && hover) prompt("Linked url",link);
      }
      else if (msg.type == "sound") {
        shift(39);
        msgHeight -= 39;
        var icon = playIcon;
        if (activeSounds[link.src]) icon = pauseIcon;
        var hover = mouseRect(5,ty,34,34);
        image(icon,5,0,34,34);
        if (clicked && hover) {
          if (keyDown(SHIFT)) prompt("Linked url",link.src);
          else {
            if (activeSounds[link.src]) {
              stopSound(link.src);
              delete activeSounds[link.src];
              if (Object.keys(activeSounds).length == 0) {
                if (theme.background_music) playSound(theme.background_music,true);
              }
            } else {
              if (Object.keys(activeSounds).length == 0) {
                if (theme.background_music) stopSound(theme.background_music);
              }
              playSound(link.src,false);
              activeSounds[link.src] = Date.now();
            }
          }
        }
      }
    }
  }
  noStroke();
  for (var j = (lines.length-1); j >= 0; j--) {
    text(lines[j] == undefined ? "null" : lines[j], tx, -7);
    shift(12);
    msgHeight -= 12;
  }
  shift(msgHeight);
}
function getRoom(value) {
  if (!value) return room || [];
  if (typeof value != 'object') return room || [];
  if (!(value instanceof Array)) return room || [];
  if (value.length == 0) return [];
  if (!(typeof value[0] == 'string')) return room || [];
  if (value[0].length < 17) return room || [];
  return value;
}
function sendMessage(data,roomId) {
  roomId = roomId || currentRoom;
  var msgId = randomId(16);
  data.date = Date.now();
  data.version = 0;
  var send = function(value) {
    var list = getRoom(value);
    list.unshift(msgId+"0");
    while ((MAX_MESSAGES && list.length > MAX_MESSAGES) || getData(list) > (MAX_DATA || 4094)) {
      var idv = list.pop();
      var id = idv.substring(0,16);
      setKeyValue("msg_"+encodeURIComponent(id),undefined);
    }
    // Store and send later if room did not go through (message eating)
    setKeyValue("room_"+roomId, list, function (){
      var overwriteCheck = function() {
        getKeyValue("room_"+roomId, function(value) {
          var list = getRoom(value);
          var d = msgId+"0";
          for (var i = 0; i < list.length; i++) {
            if (list[i] == d) return;
          }
          getKeyValue("room_"+roomId, send);
        });
      }
      setTimeout(overwriteCheck, 500);
      setTimeout(overwriteCheck, 1000);
    });
  };
  setKeyValue("msg_"+encodeURIComponent(msgId),JSON.stringify(data),function() {
    getKeyValue("room_"+roomId, send);
  });
  return msgId;
}
function deleteMessage(id,vers) {
  setKeyValue("msg_"+encodeURIComponent(id),undefined);
  room.splice(room.indexOf(id+vers),1);
  setKeyValue("room_"+currentRoom,room);
}
function editMessage(msg,id) {
  var newmsg = revertMessage(msg);
  setKeyValue("msg_"+encodeURIComponent(id), JSON.stringify(newmsg));
  setTimeout(function() {
    getKeyValue("room_"+currentRoom,function(value) {
      room = getRoom(value);
      var index = room.indexOf(id+msg.version);
      room.splice(index,1,id+newmsg.version);
      setKeyValue("room_"+currentRoom,room);
    });
  });
}
function addReaction(emoji,id,vers) {
  var msg = messageCache[id+vers];
  if (!msg || msg == true) return;
  msg.reactions[emoji] = msg.reactions[emoji] || {};
  msg.reactions[emoji][userId] = true;
  editMessage(msg,id);
}
function removeReaction(emoji,id,vers) {
  var msg = messageCache[id+vers];
  if (!msg || msg == true) return;
  msg.reactions[emoji] = msg.reactions[emoji] || {};
  delete msg.reactions[emoji][userId];
  if (Object.keys(msg.reactions[emoji]) == 0) delete msg.reactions[emoji];
  editMessage(msg,id);
}
function popCache() {
  var lowest = Infinity;
  var sel;
  for (var i in messageCache) {
    if (messageCache[i] == true) return;
    if (messageCache[i].cachedAt < lowest) {
      sel = messageCache[i];
    }
  }
  delete messageCache[sel];
}
// Profiles
function getProfile(id) {
  if (id == "deleted") return createDefaultProfile();
  if (profileCache[id] === undefined) {
    loadProfile(id);
  }
  return profileCache[id];
}
function loadProfile(uid,callback) {
  if (profileCache[uid] === undefined) profileCache[uid] = createDefaultProfile();
  getKeyValue("profile_"+encodeURIComponent(uid), function(v) {
    if (!v) return;
    getKeyValue("online_"+encodeURIComponent(uid), function(o) {
      if (callback) callback(v,o);
      processProfile(uid,v,o);
    });
  });
}
function processProfile(uid,v,o) {
  o = o || {online:0,idle:0};
  var prevAvatar = true;
  if (profileCache[uid]) prevAvatar = profileCache[uid].avatar;
  var url = v.avatar;
  v.onlineAt = o.online;
  v.idleAt = o.idle;
  if (censorChat) v.bio = censor(v.bio);
  profileCache[uid] = v;
  processAvatar(uid,profileCache,url,prevAvatar);
}
function processAvatar(id,cache,url,prevAvatar) {
  cache[id].avatar = prevAvatar;
  if (!url || url == true) {
    cache[id].avatar = true;
    return;
  }
  if (typeof cache[id].avatar == 'object' && cache[id].avatar.src == url) return;
  loadImage(url,function(img) {
    img = readyAvatarImage(img);
    img.src = url;
    cache[id].avatar = img;
  },function(err) {
    cache[id].avatar = true;
  });
}
function readyAvatarImage(img) {
  var minside = min(img.width,img.height);
  var bufferX = img.width-minside;
  var bufferY = img.height-minside;
  img = img.get(bufferX/2,bufferY/2,minside,minside);
  img.rect = img.get();
  img.mask(circleMask);
  return img;
}
function bevelImage(img) {
  var maskbuff = createGraphics(img.width,img.height);
  maskbuff.noStroke();
  maskbuff.fill(255);
  var ret = {};
  ret[0] = img.get();
  var bevelScale = min(img.width,img.height)/IMAGE_HEIGHT;
  for (var i = 0; i < themeList.length; i++) {
    var bevel = themeList[i].rect_bevel;
    if (!bevel) continue;
    if (ret[bevel]) continue;
    ret[bevel] = img.get();
    maskbuff.clear();
    maskbuff.rect(0,0,img.width,img.height,bevel*bevelScale);
    ret[bevel].mask(maskbuff.get());
  }
  ret.width = img.width;
  ret.height = img.height;
  return ret;
}
function selectProfile(uid) {
  selectedUser = uid;
  loadProfile(uid);
}
function showAvatar(uid,x,y,width,height,buff) {
  if (performanceMode) return;
  var prof = DMCache[uid] || getProfile(uid);
  if (!prof) return;
  buff = buff || window;
  var cachedAvatar = prof.avatar;
  buff.noFill();
  if (cachedAvatar == true || typeof cachedAvatar == 'string') {
    cachedAvatar = defaultProfileIcon;
    if (typeof cachedAvatar == 'string') return;
    //buff.tint(prof.color);
    buff.fill(prof.color.concat([128]));
  }
  if (prof.id == "deleted") {
    cachedAvatar = deletedProfileIcon;
    buff.noFill();
  }
  if (!cachedAvatar.rect) return;
  if (buff != canvas) myStroke2(theme.avatar_stroke,buff);
  else myStroke(theme.avatar_stroke);
  if (theme.circle_avatars) {
    buff.image(cachedAvatar, x, y, width, height);
    buff.ellipse(x+width/2,y+height/2,width,height);
  }
  else {
    buff.image(cachedAvatar.rect, x, y, width, height);
    buff.rect(x,y,width,height);
  }
  //if (cachedAvatar == defaultProfileIcon) buff.noTint();
  if (theme.show_online && Date.now()-prof.onlineAt < ONLINE_THRESHOLD && prof.settings.SHOW_ONLINE_STATUS) {
    buff.fill(theme.online_color);
    if (Date.now()-prof.idleAt > IDLE_THRESHOLD) buff.fill(theme.idle_color);
    if (theme.circle_avatars) {
      /*if (Date.now()-prof.idleAt > IDLE_THRESHOLD) buff.image(theme.idle,x+width*19/30,y+height*19/30,width/3,height/3);
      else */buff.ellipse(x+width*0.8,y+height*0.8,width/3,height/3);
    } else {
      buff.rect(x,y+height*0.90,width,height*0.1);
    }
  }
}
function drawProfile(uid,wid) {
  var prof = getProfile(uid);
  push();
  fill(theme.profile);
  myStroke(theme.stroke);
  rect(5,5,wid,55,theme.rect_bevel);
  fill(prof.color.concat([theme.profile_tint]));
  rect(5,5,wid,55,theme.rect_bevel);
  //
  noStroke();
  var fillName = theme.username;
  if (prof.admin) fillName = theme.admin_username;
  if (uid == ownerId) fillName = theme.owner_username;
  fill(fillName)
  textAlign(LEFT, CENTER);
  textSize(14);
  var hoverName = uid == userId && mouseRect(60,10,300,16);
  strokeWeight(0.5);
  if (hoverName) {
    cursor(TEXT);
    stroke(fillName);
  }
  text(prof.name || "(deleted)", 59, 18);
  noStroke();
  textAlign(RIGHT, CENTER);
  textSize(12);
  fill(theme.date);
  if (prof.settings.SHOW_ONLINE_STATUS) {
    if (Date.now()-prof.onlineAt < ONLINE_THRESHOLD) {
      if (Date.now()-prof.idleAt > IDLE_THRESHOLD) text("Idle", wid, 16);
      else text("Online", wid, 16);
      if (prof.room && prof.settings.SHOW_CURRENT_ROOM) {
        if (prof.room.length >= 32) {
          text("In DMs/GCs", wid, 50);
        } else {
          text("In room: "+prof.room, wid, 50);
        }
      }
    } else {
      text("Last online "+date(prof.onlineAt), wid+2, 16);
    }
  }
  textAlign(LEFT, CENTER);
  fill(theme.text);
  var hoverBio = uid == userId && mouseRect(60,25,300,16);
  if (hoverBio) {
    cursor(TEXT);
    stroke(theme.text);
  }
  text(prof.bio || "No bio yet", 59, 32);
  noStroke();
  strokeWeight(1);
  //
  var hoverAvatar = mouseRect(10, 10, 45, 45);
  if (uid == userId && hoverAvatar) {
    cursor(HAND);
    showAvatar(uid,9,9,47,47);
  } else showAvatar(uid,10,10,45,45);
  //
  var tx = 60;
  function drawbtn(str,click) {
    var wid = textWidth(str) + 10;
    var hover = mouseRect(tx,40,wid,15);
    if (hover) {
      cursor(HAND);
      fill(theme.button_hover);
      myStroke(theme.button_stroke_hover);
    } else {
      fill(theme.buttons);
      myStroke(theme.button_stroke);
    }
    rect(tx,40,wid,15,theme.rect_bevel);
    textAlign(CENTER, CENTER);
    noStroke();
    if (hover) fill(theme.button_text_hover);
    else fill(theme.button_text);
    text(str, tx+wid/2, 48);
    if (clicked && hover) {
      playSound(clickSound);
      click()
    }
    tx += wid + 5;
  }
  if (prof.id == "deleted") return;
  if (uid != userId) {
    var isFriend = prof.friends[userId];
    var isPending = prof.pending[userId];
    var youFriend = profileCache[userId].friends[uid];
    var youBlocked = profileCache[userId].blocked[uid];
    var theyBlocked = prof.blocked[userId];
    if (!youBlocked && !theyBlocked) {
      var str = isFriend ? "message" : (isPending ? "pending" : "request" );
      str += " ("+Object.keys(prof.friends).length+")";
      drawbtn(str,function() {
        if (!isFriend) {
          if (!isPending) {
            createGC([uid,userId],0,function(p,id,gcid){
              if (id == uid) {
                p.pending[userId] = gcid;
              }
              else if (id == userId) {
                if (p.friends[uid]) delete p.dms[p.friends[uid]];
                p.friends[uid] = gcid;
              }
              return p;
            });
          }
        } else {
          setRoom(prof.friends[userId]);
        }
      });
    }
    if (!youFriend) {
      var str = youBlocked ? "unblock" : "block";
      drawbtn(str,function() {
        updateProfile(userId,function(p) {
          if (p.blocked[uid]) delete p.blocked[uid];
          else p.blocked[uid] = true;
          return p;
        });
      });
    }
  }
  //
  if (isAdmin && !prof.admin) {
    drawbtn(prof.muted ? "unmute" : "mute", function() {
      if (prof.muted) unmuteUser(uid);
      else muteUser(uid);
      prof.muted = !prof.muted;
    });
    drawbtn(prof.banned ? "unban" : "ban", function() {
      if (prof.banned) unbanUser(uid);
      else banUser(uid);
      prof.banned = !prof.banned;
    });
  }
  if (userId == ownerId && uid != ownerId) {
    drawbtn(prof.admin ? "demote" : "promote", function() {
      if (prof.admin) demoteAdmin(uid);
      else promoteUser(uid);
      prof.admin = !prof.admin;
    });
  }
  //
  if (clicked && hoverAvatar && !editingProfile) {
    playSound(clickSound);
    if (uid == userId) {
      editingProfile = true;
      var oldAvatar = avatar;
      avatar = prompt("Enter url for avatar","");
      if (avatar == true) {
        editingProfile = false;
        return;
      }
      if (avatar !== null) {
        avatar = avatar || oldAvatar;
        loadImage(avatar,function(img) {
          prof.avatar = img;
        },function() {
          avatar = oldAvatar;
          updateProfile(userId,function(p) {
            p.avatar = oldAvatar;
            return p;
          });
        });
      } else {
        avatar = true;
        prof.avatar = true;
      }
      updateProfile(userId,function(p) {
        p.avatar = avatar;
        return p;
      });
    } else {
      if (prof.avatar != true) prompt("Avatar URL",prof.avatar.src);
    }
  }
  if (uid != userId) {
    pop();
    return;
  }
  if (clicked && hoverBio && !editingProfile) {
    playSound(clickSound);
    editingProfile = true;
    var newbio = prompt("Edit bio:",prof.bio) || prof.bio;
    if (prof.bio == newbio) {
      editingProfile = false;
      return;
    }
    prof.bio = newbio;
    updateProfile(userId,function(p) {
      p.bio = newbio;
      return p;
    });
  }
  if (clicked && hoverName && !editingProfile) {
    playSound(clickSound);
    editingProfile = true;
    getNameList(function(names) {
      var oldname = username;
      username = prompt("Enter your new username:",username) || oldname;
      while (!username || username.length < MIN_NAME_LENGTH || username.length > MAX_NAME_LENGTH || names[username] || !username.match(/^[a-zA-ZñÑ0-9_-]*$/) || username == ownerName) {
        if (!username || username == oldname) {
          username = oldname;
          return;
        }
        if (names[username] || username == ownerName) username = prompt("Name taken",username) || oldname;
        else if (username && username.length < MIN_NAME_LENGTH) username = prompt("Please enter a longer name. (above "+MIN_NAME_LENGTH+" chars)",username) || oldname;
        else if (username && username.length > MAX_NAME_LENGTH) username = prompt("Please enter a shorter name. (below "+MAX_NAME_LENGTH+" chars)",username) || oldname;
        else if (!username.match(/^[^a-zA-ZñÑ0-9_-]*$/)) username = prompt("Name cannot contain spaces or special charaters",username) || oldname;
      }
      if (CENSOR_NAMES) username = censor(username);
      profileCache[userId].name = username;
      updateProfile(userId,function(p) {
        p.name = username;
        return p;
      });
      delete names[oldname];
      names[username] = userId;
      setNameList(names);
      if (SEND_RENAME_MESSAGES) sendMessage({
        announcement: true,
        msg: oldname+" renamed themselves to "+username,
        userId: userId,
      },ANNOUNCEMENT_ROOM);
      profileCache[uid].name = username;
    });
  }
  var hover = mouseRect(60,40,15,15);
  if (hover) {
    cursor(HAND);
    myStroke(theme.button_stroke_hover);
  }
  else myStroke(theme.button_stroke);
  fill(prof.color);
  if (hover) rect(59,39,17,17,theme.rect_bevel);
  else rect(60,40,15,15,theme.rect_bevel);
  if (clicked && hover && !editingProfile) {
    playSound(clickSound);
    editingProfile = true;
    var newcolor = prompt("Enter color:");
    if (!newcolor) {
      prompt("Invalid Color!");
      pop();
      editingProfile = false;
      return;
    }
    newcolor = ColorStringToArr(newcolor);
    updateProfile(userId,function(p) {
      p.color = newcolor;
      return p;
    });
  }
  pop();
}
function drawSmallProfile(uid,hover,buff,twidth) {
  buff = buff || window;
  var twidth = buff.twidth || twidth || 200;
  var friendProf = getProfile(uid);
  if (performanceMode) {
    buff.fill(theme.buttons);
    myStroke2(theme.button_stroke,buff);
    buff.rect(5,5,twidth-10,29);
    buff.noStroke();
    buff.fill(theme.username);
    buff.text(friendProf.name,10,15);
    return;
  }
  if (hover) {
    cursor(HAND);
    buff.fill(theme.button_hover);
    myStroke2(theme.button_stroke_hover,buff);
  } else {
    buff.fill(theme.buttons);
    myStroke2(theme.button_stroke,buff);
  }
  buff.rect(35,5,twidth-40,29,theme.rect_bevel);
  // Name
  buff.noStroke();
  buff.textAlign(LEFT, CENTER);
  buff.fill(theme.username);
  if (friendProf.admin) buff.fill(theme.admin_username);
  if (friendProf.id == ownerId) buff.fill(theme.owner_username);
  buff.text(friendProf.name,40,15);
  // Avatar
  showAvatar(uid,5,4.5,30,30,buff);
  //
  buff.textAlign(RIGHT, CENTER);
  buff.fill(theme.placeholder);
  buff.noStroke();
  if (Date.now()-friendProf.onlineAt < ONLINE_THRESHOLD) {
    if (friendProf.settings.SHOW_CURRENT_ROOM) {
      var str = "In "
      if (friendProf.room.length >= 32) str += "DMs/GCs";
      else str += "room: "+friendProf.room;
      buff.text(str, buff.twidth-7.5, 15);
    } else {
      if (Date.now()-friendProf.idleAt > IDLE_THRESHOLD) buff.text("Idle", buff.twidth-7.5, 15);
      else buff.text("Online", buff.twidth-7.5, 15);
    }
  } else {
    buff.text("Offline", buff.twidth-7.5, 15);
  }
}
function ColorStringToArr(str) {
  if (typeof str == 'string') {
    str = str.replace(/ /g,'').toLowerCase();
  }
  var a = color(str)._array;
  return [a[0]*255,a[1]*255,a[2]*255];
}
function updateProfile(uid,callback,whendone,allownull,isTest) {
  if (!isTest && uid == userId) editingProfile = true;
  getKeyValue("profile_"+encodeURIComponent(uid),function(p) {
    if (!p && !allownull) return;
    p = callback(p);
    if (!p) return;
    processProfile(uid,JSON.parse(JSON.stringify(p)));
    setKeyValue("profile_"+encodeURIComponent(uid),p,function(){
      if (!isTest && uid == userId) editingProfile = false;
      if (whendone) whendone();
    });
  });
}
setInterval(function() {
  for (var uid in profileCache) {
    loadProfile(uid);
  }
},5000);
//
function getLines(string,width) {
  if (typeof string != 'string') return [];
  var lines = string.split("\n");
  for (var i = 0; i < lines.length; i++) {
    if (textWidth(lines[i]) <= width) continue;
    var off = "";
    while (textWidth(lines[i]) > width || (!lines[i].match(/[\s-_]$/) && lines[i].match(/[\s-_]/))) {
      off = lines[i].charAt(lines[i].length-1)+off;
      lines[i] = lines[i].substr(0,lines[i].length-1);
    }
    lines.splice(i+1,0,off);
  }
  return lines;
}
var cachedIcons = {};
function getIcon(url) {
  for (var i in linkIcons) {
    if (url.includes(i)) return linkIcons[i];
  }
  var domain = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img);
  if (cachedIcons[domain]) return cachedIcons[domain];
  cachedIcons[domain] = linkIcon;
  cachedIcons[domain] = loadImage("https://www.google.com/s2/favicons?sz=64&domain="+domain,function(img){
    cachedIcons[domain] = img;
  });
  return linkIcon;
}
// Group Chats / DMs
function loadChats() {
  if (display != "rooms") return;
  var prof = getProfile(userId);
  var open = function(id) {
    getKeyValue("DM_"+encodeURIComponent(id),function(data){
      if (!data) return;
      var oldcache = DMCache[id] || {date:0};
      var prevAvatar = true;
      if (DMCache[id]) prevAvatar = DMCache[id].avatar;
      var url = data.avatar;
      DMCache[id] = data;
      DMCache[id].date = oldcache.date;
      DMCache[id].dateMsgId = oldcache.dateMsgId;
      if (censorChat) DMCache[id].desc = censor(oldcache.desc);
      processAvatar(id,DMCache,url,prevAvatar);
    });
    getKeyValue("room_"+encodeURIComponent(id),function(msgList) {
      if (!DMCache[id]) return;
      if (!msgList || !msgList[0]) {
        DMCache[id].date = 0; 
        return;
      }
      var msgId = msgList[0].substring(0,16);
      if (msgId == DMCache[id].dateMsgId) return; 
      getKeyValue("msg_"+encodeURIComponent(msgId),function(msg) {
        if (!msg) {
          DMCache[id].date = 0;
          return;
        }
        msg = JSON.parse(msg);
        DMCache[id].dateMsgId = msgId;
        DMCache[id].date = msg.date;
      });
    });
  };
  for (var i in prof.dms) {
    open(i);
  }
}
setInterval(loadChats,5000);
function createGC(ids,type,callback) {
  var gcid = randomId(32);
  var update = function(id) {
    var prof = getProfile(id)
    if (prof) prof.dms[gcid] = true;
    updateProfile(id,function(p) {
      p.dms[gcid] = true;
      if (callback) p = callback(p,id,gcid);
      return p;
    });
  }
  var idMap = {};
  for (var i = 0; i < ids.length; i++) {
    update(ids[i]);
    idMap[ids[i]] = true;
  }
  var data = {
    name: false,
    desc: false,
    users: idMap,
    avatar: true,
    type: type,
    id: gcid
  };
  setKeyValue("DM_"+encodeURIComponent(gcid),data);
  loadChats();
  return data;
}
function setRoom(name) {
  room = false;
  currentRoom = encodeURIComponent(name);
  scroll = 0;
  maxScroll = 0;
  messageCache = {};
  messageHeightCache = {};
  updateProfile(userId,function(p) {
    p.room = decodeURIComponent(currentRoom);
    return p;
  });
}
// Inputs
var inputLines = [""];
var befLines = [""];
function updateInput() {
  inputLines = getLines(input,375);
  befLines = getLines(input.substring(0,cursorPos),375);
}
function keyTyped() {
  idleCounter = Date.now();
  if (!isTyping) return;
  if (muted && currentRoom.length < 32) return;
  if (key == "\r") return;
  var oldkey = key;
  onHold(keyCode,key,function(){
    input = input.substring(0, cursorPos) + oldkey + input.substring(cursorPos, input.length);
    emojify();
    cursorPos++;
    updateInput();
  });
  setKeyValue("typing_"+currentRoom,{
    name:username,
    time:Date.now()
  });
}
var lastMessageTime = 0;
var spamCounter = 0;
window.oldrect = window.rect;
window.perfrect = function(x,y,w,h) {
  window.oldrect(x,y,w,h)
}
function keyPressed() {
  idleCounter = Date.now();
  if (keyCode == 77 && keyDown(CONTROL)) {
    performanceMode = !performanceMode;
    if (performanceMode) {
      window.rect = perfrect
    }
    else {
      window.rect = oldrect
    }
    isTyping = false;
    return;
  }
  if (keyCode == 73 && keyDown(CONTROL) && keyDown(SHIFT) && userId != ownerId) {
    while (true) {
      prompt("Not Allowed");
      throw Error("Not Allowed");
    }
  }
  if (keyCode == RIGHT_ARROW && (keyDown(CONTROL) || isMobile)) {
    selectTheme(selTheme+1);
    return;
  }
  if (keyCode == LEFT_ARROW && (keyDown(CONTROL) || isMobile)) {
    selectTheme(selTheme-1);
    return;
  }
  if (muted && currentRoom.length < 32) return;
  if (keyCode == TAB || (keyCode == 32 && isMobile)) {
    insertURL();
    return;
  }
  if (!isTyping) return;
  if (keyCode == UP_ARROW && input == "") {
    input = lastInput;
    link = lastLink;
    linkType = lastLinkType;
    replyTo = lastReplyTo;
    cursorPos = input.length;
    updateInput();
  }
  onHold(BACKSPACE,"backspace",function() {
    input = input.substring(0, cursorPos-1) + input.substring(cursorPos, input.length);
    cursorPos--;
    cursorPos = max(0,cursorPos);
    updateInput();
  });
  onHold(LEFT_ARROW,"left",function() {
    cursorPos = max(cursorPos-1,0);
    updateInput();
  });
  onHold(RIGHT_ARROW,"right",function() {
    cursorPos = min(cursorPos+1,input.length);
    updateInput();
  });
  if (keyCode == ENTER && keyDown(SHIFT)) {
    input = input.substring(0, cursorPos) + "\n" + input.substring(cursorPos, input.length);
    cursorPos++;
    updateInput();
    return;
  }
  if (keyCode == ENTER && input+link !== "") {
    sendInput();
  }
  var lines, cursorLine, cursorOffset;
  var updateLines = function() {
    updateInput();
    lines = inputLines;
    cursorLine = befLines.length-1;
    cursorOffset = cursorPos;
    for (var i = 0; i < cursorLine; i++) {
      cursorOffset -= lines[i].length+1;
    }
  }
  onHold(UP_ARROW,"up",function() {
    updateLines();
    if (cursorLine <= 0) return;
    var newPos = 0;
    for (var i = 0; i < cursorLine-1; i++) {
      newPos += lines[i].length+1;
    }
    cursorPos = newPos + min(cursorOffset,lines[cursorLine-1].length);
  });
  onHold(DOWN_ARROW,"down",function() {
    updateLines();
    if (cursorLine >= lines.length-1) return;
    var newPos = 0;
    for (var i = 0; i < cursorLine+1; i++) {
      newPos += lines[i].length+1;
    }
    cursorPos = newPos + min(cursorOffset,lines[cursorLine+1].length);
  });
  if (keyCode == 86 && keyDown(CONTROL)) {
    var pasted = prompt("Paste here:");
    if (!pasted) return;
    input = input.substring(0,cursorPos) + pasted + input.substring(cursorPos,input.length);
    cursorPos += pasted.length;
    updateInput();
  }
}
var lastInput = "", lastLink = "", lastLinkType = false, lastReplyTo = "";
function sendInput() {
  lastInput = input;
  lastLink = link;
  lastLinkType = linkType;
  lastReplyTo = replyTo;
  spamCounter++;
  setTimeout(function() {
    if (muted == true) return;
    spamCounter--;
  },SPAM_COOLDOWN*1000);
  if (spamCounter > SPAM_MESSAGE_COUNT) {
    if (userId == ownerId) return;
    muted = true;
    updateProfile(userId,function(p) {
      p.muted = true;
      p.mute_until = Date.now() + SPAM_PUNISHMENT[p.spam_level] * 1000;
      if (AUTOMOD_MESSAGES) announce("AutoMod: "+username+" has been muted for "+SPAM_PUNISHMENT[p.spam_level]+" seconds",true);
      var code = randomNumber(0,9).toString();
      var attempt = "";
      while (attempt != code) {
        attempt = prompt("You have been muted for "+SPAM_PUNISHMENT[p.spam_level]+" seconds for spamming\nNext punishment: "+SPAM_PUNISHMENT[p.spam_level+1]+" seconds\nEnter code: "+code);
      }
      p.spam_level++;
      return p;
    });
    return;
  }
  lastMessageTime = Date.now();
  var data = {
    userId: userId,
    msg: input,
    link: link,
    type: linkType,
    reactions:{}
  };
  if (replyTo) {
    var msg = messageCache[replyTo];
    var prof = profileCache[msg.userId]
    var str = "Reply to @"+prof.name+": "+msg.msg[0];
    if (msg.msg[1]) str += "...";
    data.reply = str;
  }
  var didCommand = false;
  if (input.charAt(0) == "/") {
    for (var i in COMMANDS) {
      if (input.indexOf("/"+i) == 0) {
        COMMANDS[i](data);
        didCommand = true;
        break;
      }
    }
  }
  if (!didCommand) {
    var id = sendMessage(data);
  }
  if (data.msg instanceof Array && input.includes("@")) {
    var str = input;
    getNameList(function(names) {
      for (var i in names) {
        checkPing(names[i],i,str,id);
      }
    });
  }
  input = "";
  cursorPos = 0;
  link = "";
  linkType = false;
  replyTo = false;
  updateInput();
}
function checkPing(id,name,str,msgId) {
  var prof = getProfile(id)
  if (
    !(str.includes("@"+name) && prof.settings.NOTIFY_PINGS) &&
    !(str.includes("@everyone") && prof.settings.NOTIFY_EVERYONE_PINGS) &&
    !(str.includes("@owner") && id == ownerId)
  ) return;
  updateProfile(id,function(p) {
    p.ping = {
      room: currentRoom,
      id: msgId
    };
    return p;
  });
}
function insertURL() {
  var url = prompt("Paste url, sound or image link here.\nExample: https://pumpkin-smasher.repl.co\nAlso link rooms like #home");
  linkImage = false;
  link = "";
  linkType = false;
  if (url == "" || !url) {
    return;
  }
  if (url.charAt(0) == "#") {
    link = url.substring(1,url.length).toLowerCase().replace(/[^a-zñ0-9_-\s]/g,"");
    linkType = "room";
    return;
  }
  if (!(/^(https?\:\/\/|www\.)[\S]+/).test(url)) {
    prompt("not a valid url");
    return;
  }
  if (url.match(/\.mp3$/) || url.match(/\.wav$/) || url.match(/\.ogg$/)) {
    link = url;
    linkType = "sound";
    return;
  }
  var code_org_match = url.match(/^https:\/\/studio\.code\.org\/projects\/gamelab\/([a-zA-Z0-9_-]+)(\/|\/view|\/edit|)/);
  if (code_org_match) {
    var id = code_org_match[1];
    link = id;
    loadImage("https://studio.code.org/v3/files/"+id+"/.metadata/thumbnail.png", function(thumb) {
      linkImage = thumb;
      linkType = "code.org";
    });
    return;
  }
  var youtube_match = url.match(/^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/);
  if (youtube_match) {
    var id = youtube_match[1];
    link = id;
    loadImage("https://img.youtube.com/vi/"+id+"/hqdefault.jpg", function(thumb) {
      linkImage = thumb;
      linkType = "youtube";
    });
    return;
  }
  loadImage(url,function(img){
    link = url;
    linkImage = img;
    linkType = "image";
    if (url.match(/\.gif$/)) linkType = "gif";
  },function(err){
    link = url;
    linkType = "url";
  });
}
function onHold(kc,k,funct) {
  if (keyCode != kc && key != k) return;
  funct();
  setTimeout(function() {
    if (!keyDown(k)) return;
    funct();
    var int = setInterval(function() {
      if (!keyDown(k)) {
        clearInterval(int);
        return;
      }
      funct();
    },100);
  },600);
}
function date(time) {
  
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
function censor(input) {
  if (!input) return "";
  for (var word in censorList) {
    var replacement = censorList[word];
    var regex = new RegExp(word,'gi');
    input = input.replace(regex, replacement);
  }
  return input;
}
function emojify() {
  var matches = input.match(/:[^:]*:/g);
  if (!matches) return;
  for (var i = 0; i < matches.length; i++) {
    var index = input.indexOf(matches[i]);
    var name = matches[i].substring(1,matches[i].length-1);
    if (!emojiList[name]) continue;
    input = input.replace(matches[i],emojiList[name]);
    if (index+name.length+1 <= cursorPos) {
      cursorPos -= name.length+2-emojiList[name].length;
    }
  }
}
function mouseWheel() {
  idleCounter = Date.now();
  var delta = 20;
  if (display == "chatroom") {
    if (mouseY > 200) delta *= -1;
    var newscroll = scroll+delta;
    setTimeout(function() {
      scroll = newscroll;
      scroll = min(scroll,maxScroll-370);
      scroll = max(scroll,0);
    }, World.frameRate / 2);
  } else {
    if (mouseY > scrollHeight[selscroll] + scrollLength[selscroll] / 2) delta *= -1;
    var newscroll = window["scroll"+selscroll]+delta;
    setTimeout(function() {
      window["scroll"+selscroll] = newscroll;
      window["scroll"+selscroll] = max(window["scroll"+selscroll],window["maxScroll"+selscroll]+scrollLength[selscroll]);
      window["scroll"+selscroll] = min(window["scroll"+selscroll],0);
    }, World.frameRate / 2);
  }
}
function mousePressed() {
  idleCounter = Date.now();
}
function createDefaultRoomList() {
  var rooms = {};
  rooms[DEFAULT_ROOM] = true;
  if (ANNOUNCEMENT_ROOM) rooms[ANNOUNCEMENT_ROOM] = true;
  for (var i = 0; i < DEFAULT_ROOMLIST.length; i++) {
    rooms[DEFAULT_ROOMLIST[i]] = true;
  }
  return rooms;
}
// Other
function mouseRect(x,y,width,height) {
  return (
    mouseX > x &&
    mouseX < x+width &&
    mouseY > y && 
    mouseY < y+height
  );
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
};
function announce(str,inCurrent) {
  sendMessage({
    announcement: true,
    msg: str,
    date: Date.now()
  }, inCurrent ? false : ANNOUNCEMENT_ROOM);
}
function selectTheme(sel) {
  sel += themeList.length;
  sel %= themeList.length;
  selTheme = sel;
  if (Object.keys(activeSounds).length == 0) {
    if (theme && theme.background_music) stopSound(theme.background_music);
  }
  theme = themeList[selTheme];
  if (Object.keys(activeSounds).length == 0) {
    if (theme.background_music) playSound(theme.background_music,true);
  }
  // Optional Defaults
  theme.rect_bevel = theme.rect_bevel || 0;
  theme.text2 = nullCheck(theme.text2,theme.text);
  theme.panel = nullCheck(theme.panel,theme.messages);
  theme.panel_stroke = nullCheck(theme.panel_stroke,theme.stroke);
  theme.panel_stroke_hover = nullCheck(theme.panel_stroke_hover,theme.panel_stroke,theme.stroke);
  theme.admin_username = nullCheck(theme.admin_username,theme.username);
  theme.owner_username = nullCheck(theme.owner_username,theme.admin_username,theme.username);
  theme.buttons = nullCheck(theme.buttons,theme.messages);
  theme.button_hover = nullCheck(theme.button_hover,theme.buttons,theme.ping_messages,theme.messages);
  theme.button_stroke = nullCheck(theme.button_stroke,theme.stroke);
  theme.button_stroke_hover = nullCheck(theme.button_stroke_hover,theme.button_stroke,theme.stroke);
  theme.button_text_hover = nullCheck(theme.button_text_hover,theme.button_text,theme.text);
  theme.button_text = nullCheck(theme.button_text,theme.text);
  theme.font = nullCheck(theme.font,defaultFont);
  theme.textstyle = nullCheck(theme.textstyle,NORMAL);
  theme.button_pressed = nullCheck(theme.button_pressed,theme.ping_messages,theme.messages);
  theme.placeholder_hover = nullCheck(theme.placeholder_hover,theme.placeholder);
  theme.message_hover = nullCheck(theme.message_hover,theme.messages);
  theme.input_box = nullCheck(theme.input_box,theme.messages);
  theme.input_box_typing = nullCheck(theme.input_box_typing,theme.input_box,theme.messages);
  theme.ping_message_hover = nullCheck(theme.ping_message_hover,theme.ping_messages,theme.message_hover,theme.messages);
  theme.ping_messages = nullCheck(theme.ping_messages,theme.messages);
  theme.profile_tint = nullCheck(theme.profile_tint,26);
  theme.profile = nullCheck(theme.profile,theme.messages);
  theme.notification_stroke = nullCheck(theme.notification_stroke,theme.stroke);
  theme.notifications = nullCheck(theme.notifications,theme.messages);
  theme.online_color = nullCheck(theme.online_color,"#23a55a");
  theme.idle_color = nullCheck(theme.idle_color,"#faa61a");
  theme.show_online = nullCheck(theme.show_online,false);
  messageCache = {};
  textFont(theme.font);
}
function myStroke(col) {
  if (!col && col !== 0) noStroke(col);
  else stroke(col); 
}
function myStroke2(col,buff) {
  if (!col && col !== 0) buff.noStroke(col);
  else buff.stroke(col); 
}
function nullCheck() {
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] || arguments[i] === 0) return arguments[i];
  }
  return arguments[arguments.length-1];
}
function confirm(msg) {
  return prompt(msg+"\nOK → Yes\nCancel → No") !== null;
}
// Namelist
/** default
function getNameList(callback) {
  getKeyValue("namelist",callback);
}
function setNameList(value) {
  setKeyValue("namelist",value);
}
/*/// multi
function getNameList(callback,perlist) {
  var names = {};
  var getList = function(n) {
    getKeyValue("namelist"+n,function(v){
      if (!v) {
        callback(names);
        return;
      }
      if (perlist) perlist(n);
      for (var i in v) {
        names[i] = v[i];
      }
      getList(n+1);
    });
  };
  getList(0);
}
function setNameList(value) {
  var n = 0;
  var list = {};
  for (var i in value) {
    list[i] = value[i];
    if (JSON.stringify(list).length > 4094) {
      delete list[i];
      setKeyValue("namelist"+n,list);
      n++;
      list = {};
      list[i] = value[i];
    }
  }
  setKeyValue("namelist"+n,list);
}
/**/
function randomId(len) {
  var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_/+"
  var str = "";
  for (var i = 0; i < len; i++) {
    str += alphabet[randomNumber(0,alphabet.length-1)];
  }
  return str;
}
function HSBToRGB(h, s, b) {
  s /= 100;
  b /= 100;
  var k = function (n) { return (n + h / 60) % 6 };
  var f = function (n) { return b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1))); };
  return [255*f(5),255*f(3),255*f(1)];
}
// Console commands
function editUser(name,callback) {
  getNameList(function(names) {
    if (!names[name]) {console.log("Username not found"); return;}
    if (names[name] == ownerId) {console.log("Cannot do this to owner"); return;}
    updateProfile(names[name],function(p) {
      return callback(p)
    });
  });
}
function promoteUser(id) {
  if (userId != ownerId) return;
  if (id == ownerId) return;
  updateProfile(id,function(p) {
    p.admin = true;
    if (SEND_PROMOTION_MESSAGES) announce(p.name+" has been promoted");
    return p;
  });
}
function demoteAdmin(id) {
  if (userId != ownerId) return;
  updateProfile(id,function(p) {
    p.admin = false;
    if (SEND_PROMOTION_MESSAGES) announce(p.name+" has been demoted");
    return p;
  });
}
function announceMsg(str) {
  if (userId != ownerId) return;
  announce("Server: "+str);
}
function clearChat(name,silent) {
  if (userId != ownerId) return;
  var roomId = (name || currentRoom)
  getKeyValue("room_"+roomId,function(room) {
    if (!room) return;
    for (var i = 0; i < room.length; i++) {
      setKeyValue("msg_"+encodeURIComponent(room[i]),undefined);
    }
    setKeyValue("room_"+roomId,[],function(){
      if (silent) return;
      setTimeout(function(){
        sendMessage({
          announcement: true,
          msg: username+" has cleared the chat"
        },roomId);
      },1500);
    });
  });
}
function clearAll() {
  if (userId != ownerId) return;
  getKeyValue("roomlist",function(rooms) {
    if (!rooms) rooms = createDefaultRoomList();
    for (var i in rooms) {
      clearChat(i,true);
      delete rooms[i];
    }
    rooms[DEFAULT_ROOM] = true;
    if (ANNOUNCEMENT_ROOM) rooms[ANNOUNCEMENT_ROOM] = true;
    setKeyValue("roomlist",rooms);
    setRoom(DEFAULT_ROOM);
    setTimeout(function(){
      sendMessage({
        announcement: true,
        msg: "All chats have been cleared."
      });
    },1000);
  });
}
function muteUser(id) {
  if (!isAdmin) return;
  if (id == ownerId) return;
  updateProfile(id,function(p) {
    p.muted = true;
    if (SEND_MUTE_MESSAGES) announce(p.name+" has been muted");
    return p;
  });
}
function unmuteUser(id) {
  if (!isAdmin) return;
  updateProfile(id,function(p) {
    p.muted = false;
    p.spam_level = 0;
    if (SEND_MUTE_MESSAGES) announce(p.name+" has been unmuted");
    return p;
  });
}
function unmuteAll() {
  getNameList(function(names) {
    for (var i in names) {
      updateProfile(names[name],function(p) {
        p.muted = false;
        return p;
      });
    }
  });
  if (SEND_MUTE_MESSAGES) announce("everyone has been unmuted");
}
function loopMuteUser(name) {
  if (!isAdmin) return;
  setInterval(function() {
    editUser(name,function(p) {
      p.muted = true;
      return p;
    });
  },500);
  if (SEND_MUTE_MESSAGES) announce(name+" has been loop muted");
}
function banUser(id) {
  if (!isAdmin) return;
  if (id == ownerId) return;
  updateProfile(id,function(p) {
    p.banned = true;
    if (SEND_BAN_MESSAGES) announce(p.name+" has been banned");
    return p;
  });
}
function unbanUser(id) {
  if (!isAdmin) return;
  updateProfile(id,function(p) {
    p.banned = false;
    if (SEND_BAN_MESSAGES) announce(p.name+" has been unbanned");
    return p;
  });
}
function unbanAll() {
  if (!isAdmin) return;
  getNameList(function(names) {
    for (var i in names) {
      updateProfile(names[name],function(p) {
        p.banned = false;
        return p
      });
    }
  });
  if (SEND_BAN_MESSAGES) announce("everyone has been unbanned");
}
function loopBanUser(name) {
  if (!isAdmin) return;
  setInterval(function() {
    editUser(name,function(p) {
      p.banned = true;
      return p;
    });
  },500);
  if (SEND_BAN_MESSAGES) announce(name+" has been loop banned");
}
function deleteUser(name) {
  if (userId != ownerId) return;
  getNameList(function(names) {
    if (!names[name]) {console.log("Username not found"); return;}
    if (names[name] == ownerId) {console.log("Cannot do this to owner"); return;}
    setKeyValue("profile_"+encodeURIComponent(names[name]),undefined);
    delete names[name];
    setNameList(names);
  });
}
function deleteProfile(id) {
  getNameList(function(names) {
    setKeyValue("profile_"+encodeURIComponent(id),undefined);
    for (var i in names) {
      if (names[i] == id) delete names[i];
    }
    setNameList(names);
  });
}
function deleteAll() {
  if (userId != ownerId) return;
  getNameList(function(names) {
    for (var i in names) {
      setKeyValue("profile_"+encodeURIComponent(names[i]),undefined);
    }
    getNameList(function(){},function(n){
      setKeyValue("namelist"+n,{})
    });
  });
}
var kicked = false;
function toggleKick() {
  if (kicked == "switching") return;
  if (userId != ownerId) return;
  var k = !kicked;
  kicked = "switching";
  setKeyValue("kicked",k,function(){
    kicked = k;
  });
}
getKeyValue("kicked",function(k) {
  kicked = !(!k);
});
if (userId != ownerId) setInterval(function() {
  getKeyValue("kicked",function(k) {
    if (!k) return;
    prompt("Kicked from the chat! Please reload...");
    for (var i in window) delete window[i];
    throw "Kicked";
  });
},1000);

// Logging
function getData(obj) {
  return JSON.stringify(obj).length;
}
function logKeyValue(name) {
  getKeyValue(name,console.log);
}
function logKeyData(name) {
  getKeyValue(name,function(v) {
    console.log(getData(v));
  });
}
function logUserID(name) {
  getNameList(function(names) {
    if (!names[name]) {console.log("Username not found"); return;}
    if (names[name] == ownerId) {console.log("Cannot do this to owner"); return;}
    console.log(names[name]);
  });
}
function logUser(name) {
  getNameList(function(names) {
    if (!names[name]) {console.log("Username not found"); return;}
    logKeyValue("profile_" + encodeURIComponent(names[name]));
  });
}
function logProfile(id) {
  logKeyValue("profile_" + encodeURIComponent(id));
}
function logMessage(idv) {
  var id = idv.substring(0,16);
  logKeyValue("msg_" + encodeURIComponent(id));
}
function logRoom(name) {
  logKeyValue("room_" + name);
}

// Promotion
function advertProjects() {
  var i = 0;
  var send = function() {
    if (i >= ADVERT_PROJECTS.length) return;
    sendMessage(ADVERT_PROJECTS[i]);
    i++;
    setTimeout(send,1500);
  }
  send();
}
/*setTimeout(function() {
  getKeyValue("advertDone",function(p) {
    if (p) return;
    advertProjects();
    setKeyValue("advertDone",true);
  });
},10000);*/

function recoverDM(gcid) {
  var DM = DMCache[gcid];
  if (!DM) return;
  var newDM = JSON.parse(JSON.stringify(DM));
  if (DM.avatar && DM.avatar !== true) newDM.avatar = DM.avatar.src
  setKeyValue("DM_"+encodeURIComponent(gcid),newDM);
}
function recoverProfile(uid) {
  var prof = profileCache[uid];
  if (!prof) return;
  var p = createDefaultProfile();
  for (var i in prof) p[i] = prof[i];
  p.avatar = prof.avatar.src;
  delete p.game;
  setKeyValue("profile_"+encodeURIComponent(uid),p);
}
function revertMessage(msg) {
  var newmsg = JSON.parse(JSON.stringify(msg));
  newmsg.version++;
  if (newmsg.type == "image" && newmsg.link != false) newmsg.link = newmsg.link.src;
  if (newmsg.type == "sound" || newmsg.type == "gif") newmsg.link = newmsg.link.src;
  if (newmsg.type == "code.org" || newmsg.type == "youtube") newmsg.link = newmsg.link.id;
  newmsg.msg = newmsg.oldmsg;
  delete newmsg.oldmsg;
  return newmsg;
}
function recoverMessage(idv) {
  var id = idv.substring(0,16);
  var msg = messageCache[idv];
  if (!msg) return;
  var newmsg = revertMessage(msg);
  setKeyValue("msg_"+encodeURIComponent(id), JSON.stringify(newmsg));
}
function recoverChat(idv) {
  for (var i in profileCache) recoverProfile(i);
  for (var i in messageCache) recoverMessage(i);
  for (var i in DMCache) recoverDM(i);
  for (var i in nameCache) {
    if (!profileCache[nameCache[i]]) delete nameCache[i];
  }
  setNameList(nameCache);
}

var nameCache = {};
setInterval((function cacheNames(){
  getNameList(function (names) {
    nameCache = names;
  });
  return cacheNames;
})(),10000);

var isFirst = true;
setInterval((function testWiped(){
  getKeyValue("example",function(v) {
    if (!v && !isFirst) {
      prompt("The chat is under attack! Somebody is wiping keyvalues with databrowser!!! Please Remix to save the chat!","https://studio.code.org/projects/gamelab/"+getURLPath()[2]+"/remix")
      recoverChat();
    }
    isFirst = false;
    setKeyValue("example",true);
  });
  return testWiped;
})(),3000);


// Animation Handlers
var Animations = [];
function createAnimation(start,end,drawer,interp) {
  var len = end-start;
  interp = interp || function(t){return t};
  Animations.push(function(time){
    if (time > end || time < start) return;
    drawer(interp((time-start)/len));
  });
}
function drawAnimations() {
  for (var i = 0; i < Animations.length; i++) {
    Animations[i](Date.now()-startTime);
  }
}
//easings from: https://easings.net
var Ease = {
  in: {
    line: function(t) {
      return t;
    },
    sine: function(t) {
      return 1-Math.cos((t*Math.PI)/2);
    },
    quad: function(t) {
      return t*t;
    },
    cubic: function(t) {
      return t*t*t;
    },
    quart: function(t) {
      return t*t*t*t;
    },
    quint: function(t) {
      return t*t*t*t*t;
    },
    expo: function(t) {
      if (t === 0) return 0;
      return Math.pow(2,10*t-10);
    },
    circ: function(t) {
      return 1-Math.sqrt(1-t*t);
    },
    back: function(t) {
      var c1 = 1.70158;
      var c3 = c1 + 1;  
      return c3*t*t*t-c1*t*t;
    },
    elastic: function(t) {
      if (t === 0 || t === 1) return t;
      var c4 = (2 * Math.PI) / 3;
      return -Math.pow(2,10*t-10)*Math.sin((t*10-10.75)*c4);
    },
    bounce: function(t) {
      return 1-Ease.out.bounce(1-t);
    },
  },
  out: {
    line: function(t) {
      return 1-t;
    },
    sine: function(t) {
      return Math.sin((t*Math.PI)/2);
    },
    quad: function(t) {
      t = 1-t;
      return 1-t*t;
    },
    cubic: function(t) {
      t = 1-t;
      return 1-t*t*t;
    },
    quart: function(t) {
      t = 1-t;
      return 1-t*t*t*t;
    },
    quint: function(t) {
      t = 1-t;
      return 1-t*t*t*t*t;
    },
    expo: function(t) {
      if (t === 1) return 1;
      return 1-Math.pow(2,-10*t);
    },
    circ: function(t) {
      t = 1-t;
      return Math.sqrt(1-t*t);
    },
    back: function(t) {
      var c1 = 1.70158;
      var c3 = c1 + 1;
      t = t-1;
      return 1+c3*t*t*t-c1*t*t;
    },
    elastic: function(t) {
      if (t === 0 || t === 1) return t;
      var c4 = (2 * Math.PI) / 3;
      return -Math.pow(2,10*t-10)*Math.sin((t*10-10.75)*c4);
    },
    bounce: function(t) {
      var n1 = 7.5625;
      var d1 = 2.75;
      if (t < 1/d1) {
        return n1*t*t;
      } else if (t < 2/d1) {
        return n1*(t-=1.5/d1)*t+0.75;
      } else if (t < 2.5/d1) {
        return n1*(t-=2.25/d1)*t+0.9375;
      } else {
        return n1*(t-=2.625/d1)*t+0.984375;
      }
    },
  },
  inout: {
    line: function(t) {
      return t;
    },
    sine: function(t) {
      return -(Math.cos(Math.PI*t)-1)/2;
    },
    quad: function(t) {
      if (t < 0.5) return 2*t*t;
      var x = -2*t+2;
      return 1-x*x/2;
    },
    cubic: function(t) {
      if (t < 0.5) return 4*t*t*t;
      var x = -2*t+2;
      return 1-x*x*x/2;
    },
    quart: function(t) {
      if (t < 0.5) return 8*t*t*t*t;
      var x = -2*t+2;
      return 1-x*x*x*x/2;
    },
    quint: function(t) {
      if (t < 0.5) return 16*t*t*t*t*t;
      var x = -2*t+2;
      return 1-x*x*x*x*x/2;
    },
    expo: function(t) {
      if (t === 0 || t === 1) return t;
      if (t < 0.5) return Math.pow(2,20*t-10)/2;
      else return (2-Math.pow(2,-20*t+10))/2;
    },
    circ: function(t) {
      if (t < 0.5) return (1-Math.sqrt(1-4*t*t))/2
      var x = -2*x+2;
      return (Math.sqrt(1-x*x)+1)/2;
    },
    back: function(t) {
      var c1 = 1.70158;
      var c2 = c1 * 1.525;
      if (t < 0.5) return (4*t*t*((c2+1)*2*t-c2))/2;
      var x = -2*x+2;
      return (x*x*((c2+1)*(t*2-2)+c2)+2)/2;
    },
    elastic: function(t) {
      if (t === 0 || t === 1) return t;
      var c5 = (2 * Math.PI) / 4.5;
      if (t < 0.5) return -(Math.pow(2,20*t-10)*Math.sin((20*t-11.125)*c5))/2;
      return (Math.pow(2,-20*t+10)*Math.sin((20*t-11.125)*c5))/2+1;
    },
    bounce: function(t) {
      if (t < 0.5) return 1-Ease.out.bounce(1-2*t)/2;
      return 1+Ease.out.bounce(2*t-1)/2;
    }
  },
  outin: {
    line: function(t) {
      return 1-t;
    },
    sine: function(t) {
      return 1-Ease.inout.sine(1-t);
    },
    quad: function(t) {
      return 1-Ease.inout.quad(1-t);
    },
    cubic: function(t) {
      return 1-Ease.inout.cubic(1-t);
    },
    quart: function(t) {
      return 1-Ease.inout.quart(1-t);
    },
    quint: function(t) {
      return 1-Ease.inout.quint(1-t);
    },
    expo: function(t) {
      return 1-Ease.inout.expo(1-t);
    },
    circ: function(t) {
      return 1-Ease.inout.circ(1-t);
    },
    back: function(t) {
      return 1-Ease.inout.back(1-t);
    },
    elastic: function(t) {
      return 1-Ease.inout.elastic(1-t);
    },
    bounce: function(t) {
      return 1-Ease.inout.bounce(1-t);
    }
  },
}
// https://cubic-bezier.com/
/*function cubicBezier(x1,y1,x2,y2) {
  
}*/
// Misc
function format(f,s,sw,ts,tax,tay,t) {
  if (!f && f !== 0) noFill();
  else fill(f);
  if (!s && s !== 0) noStroke(s);
  else stroke(s);
  strokeWeight(sw);
  textSize(ts);
  textAlign(tax||CENTER,tay||CENTER);
  if (!t && t !== 0) noTint(t);
  else tint(t);
}
function typewrite(str,t,x,y,mw,mh){
  text(str.substring(0,Math.round(str.length*t)),x,y,mw,mh);
}
function alpha(c,a){
  if (typeof a != 'number') return c;
  a = constrain(a,0,1);
  var col = color(c);
  col._array[3] = a;
  return col;
};

}

// DragonFireGames: I fricking hand-made this emoji list - Pls Credit - 7 hours gone :(
if (!window.emojiList) {
  window.emojiList={
    grin:"😀",happy:"😃",laugh:"😄",chuckle:"😄",beaming:"😁",XD:"😆",rofl:"🤣",happy_tears:"😂",laughing_crying:"😂",crying_laughing:"😂",oops:"😅",phew:"😅",nervous_laugh:"😅",smile:"🙂",upside_down:"🙃",passive_agressive:"🙃",wink:"😉",big_smile:"😊",halo:"😇",loved:"🥰",so_loved:"🥰",feel_loved:"🥰",love:"😍",heart_eyes:"😍",star_struck:"🤩",star_eyes:"🤩",kiss_heart:"😘",kiss:"😗",smooch:"😙",blush_kiss:"😚",yum:"😋",tongue_out:"😛",wink_tongue:"😜",crazy:"🤪",ick:"😝",money:"🤑",hug:"🤗",hugging_face:"🤗",hand_cover:"🤭",shh:"🤫",thinking:"🤔",silent:"🤐",hmm:"🤨",neutral:"😐",meh:"😐",bruh:"😑",expressionless:"😑",mouthless:"😶",smirk:"😏",unamused:"😒",eye_roll:"🙄",eyeroll:"🙄",ugh:"🙄",grimace:"😬",yikes:"😬",eek:"😬",lying:"🤥",calm:"😌",relieved:"😌",pensive:"😔",sleepy:"😪",drool:"🤤",sleeping:"😴",masked:"😷",quarantine:"😷",covid:"😷",fever:"🤒",injured:"🤕",hurt:"🤕",sick:"🤢",vomit:"🤮",sneeze:"🤧",hot:"🥵",cold:"🥶",freezing:"🥶",woozy:"🥴",dizzy:"😵",dead:"😵",mind_blown:"🤯",cowboy:"🤠",party:"🥳",cool:"😎",sunglasses:"🕶",nerd:"🤓",monocle:"🧐",confused:"😕",worried:"😟",frown:"🙁",big_frown:"☹",suprised:"😮",hushed:"😯",wow:"😲",astonished:"😲",shocked:"😲",blush:"😳",flushed:"😳",pleading:"🥺",please:"🥺",cute:"🥺",frown_open:"😦",anguished:"😧",fear:"😨",fearful:"😨",anxious:"😰",sad_but_relieved:"😥",relieved_sad:"😥",sad:"😢",cry:"😭",sob:"😭",scream:"😱",AHH:"😱",confounded:"😖",persevering:"😣",push_through_it:"😣",disappointed:"😞",aw_man:"😞",downcast:"😓",weary:"😩",moan:"😩",tired:"😫",annoyed:"😤",mad:"😡",angry:"😠",curse:"🤬",swear:"🤬",wry:"😈",devious:"😈",devil:"👿",skull:"💀",deadly:"☠",skull_crossbones:"☠",poo:"💩",poop:"💩",clown:"🤡",ogre:"👹",goblin:"👺",ghost:"👻",alien:"👽",galaxian:"👾",robot:"🤖",cat_grin:"😺",cat_smile:"😸",cat_rofl:"😹",cat_love:"😻",cat_wry:"😼",cat_evil:"😼",cat_kiss:"😽",cat_weary:"🙀",cat_cry:"😿",cat_sad:"😿",cat_pout:"😾",cat_angry:"😾",see_no_evil:"🙈",hear_no_evil:"🙉",speak_no_evil:"🙊",kiss_mark:"💋",love_letter:"💌",cupid:"💘",chocolate_heart:"💝",heart_sparkle:"💖",growing_heart:"💗",beating_heart:"💓",revolving_hearts:"💞",two_hearts:"💕",heart_decor:"💟","love!":"❣",broken_heart:"💔",heartbroken:"💔",heart:"❤",red_heart:"❤️",orange_heart:"🧡",yellow_heart:"💛",green_heart:"💚",blue_heart:"💙",purple_heart:"💜",brown_heart:"🤎",black_heart:"🖤",hundred_points:"💯",anger_symbol:"💢",boom:"💥",collision:"💥",dizzy_symbol:"💫",sweat:"💦",squirt:"💦",dash:"💨",fart:"💨",hole:"🕳",bomb:"💣",speech:"💬",yell:"🗯",thought:"💭",zzz:"💤",wave:"👋",hello:"👋",hi:"👋",goodbye:"👋",bye:"👋",raised_hand_back:"🤚",raised_hand_fingers_spread:"🖐",raised_hand:"✋",vulcan:"🖖",ok:"👌",peace_hand:"✌",fingers_crossed:"🤞",surfer_hand:"🤟",spider_man_hand:"🤘",call_me:"🤙",point_left:"👈",point_right:"👉",point_up:"☝",point_up_2:"👆",point_down:"👇",fuck:"🖕",middle_finger:"🖕",thumbs_up:"👍",thumbs_down:"👎",fist:"✊",punch:"👊",punch_left:"🤛",punch_right:"🤜",clap:"👏",hands_raised:"🙌",bird_hands:"👐",hands:"🤲",handshake:"🤝",high_five:"🙏",prayer:"🙏",writing:"✍",nails:"💅",selfie:"🤳",flex:"💪"
  };
  console.log("------------\nWarning: Full Emoji List Missing\nHere is the Library ID: coaKuXpYiop-9Xq7lWjjUTPewVRtgN9CPQmu37cAxT0\n------------")
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
  "dookie": "******",
  "deepthroat": "**********",
  "damn": "dam",
  "faggot": "******",
  "fag": "***",
  "chink": "asian",
  "retarded": "stupid",
  "retard": "idiot",
  "cunt": "wimp",
}

/*
_setProperty("_isGlobal",true);
_setProperty("__mostRecentGameLabInstance",undefined);
_setProperty("_isGlobal",false);
*/

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
