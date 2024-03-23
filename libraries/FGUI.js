// See the forum post on it: https://gamelab.freeflarum.com/d/1548-gui-module/

// FGUI Fire Graphics User Interface
// By: DragonFireGames
// Version: 1.9
// Description: A port/mix of HTML, CSS, 
//   and p5.js to make a component based
//   graphics interface. Styles are used
//   and can be inherited and set.

window.isMobile = _isSafari();
showMobileControls(true,true,true,true);
window.debug = createSprite(0,0,0,0);
window.SQRT2 = Math.sqrt(2);

background(242);
window._graphicsList = [];
window._boundGraphicsMethods = {};
window._bindGraphicsMethod = function(name,funct) {
  window[name] = funct.bind(window);
  for (var i = 0; i < _graphicsList.length; i++) {
    _graphicsList[i][name] = funct.bind(_graphicsList[i]);
  }
  _boundGraphicsMethods[name] = funct;
}
window._createGraphics = window.createGraphics;
window.createGraphics = function(w,h,gl) {
  var buf = _createGraphics(w,h,gl);
  buf.twidth = w;
  buf.theight = h;
  buf.width *= buf._pixelDensity;
  buf.height *= buf._pixelDensity;
  for (var i in _boundGraphicsMethods) {
    buf[i] = _boundGraphicsMethods[i].bind(buf);
  }
  _graphicsList.push(buf);
  return buf;
};

// Event Handling
var eventHandlers = [];
var watchedEvents = {
  mouseMoved:["movementX","movementY"],
  mouseDragged:["movementX","movementY"],
  mousePressed:["offsetX","offsetY"],
  mouseReleased:["offsetX","offsetY"],
  mouseClicked:["offsetX","offsetY"],
  mouseWheel:["deltaX","deltaY"],
  keyPressed:["keyCode"],
  keyReleased:["keyCode"],
  keyTyped:["key"],
};
window._lastEventTime = Date.now();
window.createEventHandler = function() {
  var obj = {};
  for (var i in watchedEvents) {
    obj[i] = function(){};
  };
  obj.fileDropped = function(){};
  obj.fileLoaded = function(){};
  obj.start = function() {
    eventHandlers.push(obj);
    return obj;
  };
  obj.stop = function() {
    var i = eventHandlers.indexOf(obj);
    if (i === -1) return;
    eventHandlers.splice(i,1);
    return obj;
  };
  obj.on = function(name,callback) {
    obj[name] = callback;
  }
  return obj;
}
for (var i in watchedEvents) (function(i){
  _renderer._pInst[i] = function(e) {
    window._lastEventTime = Date.now();
    var a = watchedEvents[i].map(function(l){
      return e[l];
    });
    a.push(e);
    for (var j = 0; j < eventHandlers.length; j++) {
      var h = eventHandlers[j];
      h[i].apply(h,a);
    }
  };
})(i);
_renderer.drop(function(e){
  console.log("File Loaded");
  prompt("If you see this, notify dragonfiregames!","Discord: dragonfire7z");
  window._lastEventTime = Date.now();
  for (var j = 0; j < eventHandlers.length; j++) {
    var h = eventHandlers[j];
    h.fileLoaded.apply(h,[e]);
  }
},function(e){
  window._lastEventTime = Date.now();
  for (var j = 0; j < eventHandlers.length; j++) {
    var h = eventHandlers[j];
    h.fileDropped.apply(h,[e]);
  }
});
window.Event = createEventHandler().start();

// Globals
window.elementList = [];
window.pageMap = {};
window.activeElement = false;
window.activePage = false;

// Create a style
window.defaultStyle = {
  padx:5,
  pady:5,
  fill:128,
  stroke:0,
  strokeWeight:1,
  shadow:false,
  shadowBlur:0,
  shadowStrength:1,
  shadowOffX:0,
  shadowOffY:0,
  textFill:0,
  textStroke:false,
  textStrokeWeight:1,
  textSize:12,
  textShadow:false,
  textShadowBlur:0,
  textShadowStrength:1,
  textShadowOffX:0,
  textShadowOffY:0,
  placeholderTextFill:100,
  placeholderStroke:false,
  horizAlign:"left",
  vertAlign:"top",
  font:"sans-serif",
  bevel:0,
  imageBevel:0,
  imageFit:"none",
  imageHorizAlign:"center",
  imageVertAlign:"center",
  cursor:0,
};
window.createStyle = function(parent,mod) {
  var obj = {};
  obj.parent = parent || defaultStyle;
  obj.data = {};
  for (var i in defaultStyle) (function(i) {
    Object.defineProperty(obj,i,{
      get: function() {
        if (obj.data[i] === undefined) return obj.parent[i];
        if (typeof obj.data[i] === "function") return obj.data[i]();
        return obj.data[i];
      },
      set: function(e) {
        obj.data[i] = e;
      }
    });
  })(i);
  obj.set = function(o) {
    for (var i in o) {
      obj.data[i] = o[i];
    }
  }
  if (mod) obj.set(mod);
  return obj;
};
// Create a page
var displayPage = "default";
window.createPage = function(name,before,after,onopen,onclose) {
  var obj = {};
  obj.name = name;
  obj.before = before || function(){};
  obj.after = after || function(){};
  obj.onopen = onopen || function(){};
  obj.onclose = onclose || function(){};
  obj.elementList = [];
  obj.addElement = function(elem) {
    obj.elementList.push(elem);
    obj.elementList = obj.elementList.sort(function(a,b){return a.zindex - b.zindex;});
  };
  obj.removeElement = function(elem) {
    var i = obj.elementList.indexOf(elem);
    if (i == -1) return;
    obj.elementList.splice(i,1);
  };
  obj.Event = createEventHandler();
  pageMap[name] = obj;
  return obj;
};
window.setPage = function(name) {
  pageMap[displayPage].Event.stop();
  pageMap[displayPage].onclose();
  displayPage = name;
  activePage = pageMap[name];
  activePage.Event.start();
  pageMap[name].onopen();
};
window.defaultPage = createPage("default");
setPage("default");
// Create an element
window.createElement = function(x,y,w,h,page) {
  var obj = {};
  obj.x = x || 0;
  obj.y = y || 0;
  obj.width = w === undefined ? 50 : w;
  obj.height = h === undefined ? 50 : h;
  obj.style = createStyle();
  obj.styles = ["style"];
  obj.setStyles = function(styler,mod) {
    for (var i = 0; i < obj.styles.length; i++) {
      var s = obj.styles[i];
      if (styler[s]) obj[s] = createStyle(styler[s],mod);
    }
  }
  obj.modifyStyles = function(mod) {
    for (var i = 0; i < obj.styles.length; i++) {
      var s = obj.styles[i];
      for (var j in mod) {
        obj[s][j] = mod[j];
      }
    }
  }
  obj.visible = true;
  obj._cache = {};
  obj.testhover = function() {
    return mouseRect(obj.x,obj.y,obj.width,obj.height);
  };
  obj.getmax = function() {
    return {x:obj.x+obj.w,y:obj.y+obj.h};
  };
  obj.body = function(s,b) {
    b.format(s.fill,s.stroke,s.strokeWeight);
    b.shadow(s.shadow,s.shadowBlur,s.shadowOffX,s.shadowOffY);
    for (var i = 0; i < Math.max(1,s.shadowStrength); i++) {
      b.rect(obj.x,obj.y,obj.width,obj.height,s.bevel);
    }
  };
  obj.debug = function(b) {
    b.format(false,"lime",1);
    b.rect(obj.x,obj.y,obj.width,obj.height);
  };
  obj.drawers = ["body"];
  obj.getStyle = function() {
    return obj.style;
  }
  obj.show = function(b) {
    if (!obj.visible) return;
    if (obj.drag) obj.drag(b);
    var s = obj.getStyle();
    b = b || window;
    for (var i = 0; i < obj.drawers.length; i++) {
      obj[obj.drawers[i]](s,b); 
    }
    if (obj.onshow) obj.onshow(s,b);
    if (debug.debug) obj.debug(b);
  };
  obj.addComponent = function(name) {
    var args = arguments.slice(1);
    args.unshift(obj);
    Components[name].apply(obj,args);
  };
  obj.addToPage = function(name) {
    pageMap[name].addElement(obj);
  }
  obj.removeFromPage = function(name) {
    pageMap[name].removeElement(obj);
  }
  obj.click = function() {
    if (obj.onclick) obj.onclick();
  };
  obj.zindex = 0;
  elementList.push(obj);
  pageMap[page||"default"].addElement(obj);
  return obj;
};
// Component List
var Components = {};
Components.ellipse = function(obj) {
  obj.testhover = function() {
    return mouseEllipse(obj.x+obj.width/2,obj.y+obj.height/2,obj.width,obj.height);
  };
  obj.body = function(s,b) {
    b.format(s.fill,s.stroke,s.strokeWeight);
    b.ellipseMode(CORNER);
    b.ellipse(obj.x,obj.y,obj.width,obj.height);
  };
};
Components.text = function(obj,txt) {
  obj._value = txt||"";
  if (!obj.hasOwnProperty("value")) Object.defineProperty(obj,"value",{
    get: function() {
      return obj._value;
    },
    set: function(e) {
      obj._value = e;
      obj.update(e);
    }
  });
  obj.placeholder = "";
  obj.password = false;
  obj.text = function(s,b) {
    var c = obj._cache;
    var ax = s.horizAlign;
    var ay = s.vertAlign;
    b.format(s.textFill,s.textStroke,s.textStrokeWeight,s.textSize,ax,"top");
    b.shadow(s.textShadow,s.textShadowBlur,s.textShadowOffX,s.textShadowOffY);
    b.textFont(s.font);
    var str = obj._value;
    if (obj.password) str = str.replace(/[^\n\s]/g,"*");
    if (!obj._value && obj.placeholder) {
      b.format(s.placeholderTextFill,s.placeholderTextStroke,s.textStrokeWeight,s.textSize,ax,ay);
      str = obj.placeholder;
    }
    var max, tx = s.padx, ty = s.pady;
    max = obj.width - tx;
    if (ax == "center") max -= tx;
    if (ay == "center") ty /= 2;
    if (ay == "bottom") ty = 0;
    if (typeof tm == 'number') max = tm;
    c.max = max; c.tx = tx; c.ty = ty;
    for (var i = 0; i < Math.max(1,s.textShadowStrength); i++) {
      b.text(str,obj.x+tx,obj.y+ty+c.ydiff,max);
    }
  };
  obj.update = function() {
    obj.text(obj.style,window);
    obj.updateSizes();
  }
  obj.updateSizes = function() {
    var s = obj.style;
    var c = obj._cache;
    textSize(s.textSize);
    var bounds = textBounds(obj._value,c.max);
    obj.lines = bounds.lines;
    obj.textHeight = bounds.height;
    obj.textWidth = bounds.width;
    
    var ay = s.vertAlign;
    c.ydiff = 0;
    if (ay != "top") {
      c.ydiff = obj.height - obj.textHeight;
      if (ay == "center") c.ydiff /= 2;
    }
  }
  obj.drawers.push("text");
  obj.getmax = function() {
    var c = obj._cache;
    var m1x = obj.x+obj.w, m1y = obj.y+obj.h;
    return {x:max(m1x,obj.textWidth||0),y:max(m1y,obj.textHeight||0)};
  };
  setTimeout(function(){
    obj.update();
  },0);
};
Components.button = function(obj) {
  obj.hoverStyle = createStyle(obj.style);
  obj.styles.push("hoverStyle");
  obj.clickStyle = createStyle(obj.hoverStyle);
  obj.styles.push("clickStyle");
  obj.getStyle = function() {
    var s = obj.style;
    if (obj.hover) {
      if (mouseDown("left")) s = obj.clickStyle;
      else s = obj.hoverStyle;
    }
    return s;
  }
  obj.hover = false;
  obj.onclick = function(){};
  obj.onunclick = function(){};
  obj.interactive = true;
  obj.changecursor = true;
};
Components.toggle = function(obj,toggle) {
  Components.button(obj);
  obj.styleOn = createStyle(obj.style);
  obj.styles.push("styleOn");
  obj.hoverStyleOn = createStyle(obj.hoverStyle);
  obj.styles.push("hoverStyleOn");
  obj.clickStyleOn = createStyle(obj.clickStyle);
  obj.styles.push("clickStyleOn");
  obj.getStyle = function() {
    if (obj.toggle) {
      var s = obj.styleOn;
      if (obj.hover) {
        if (mouseDown("left")) s = obj.clickStyleOn;
        else if (obj.hoverStyle) s = obj.hoverStyleOn;
      }
    } else {
      var s = obj.style;
      if (obj.hover) {
        if (mouseDown("left")) s = obj.clickStyle;
        else if (obj.hoverStyle) s = obj.hoverStyle;
      }
    }
    return s;
  }
  obj.toggle = toggle || false;
  obj.click = function() {
    obj.toggle = !obj.toggle;
    obj.onclick(obj.toggle);
  };
};
Components.image = function(obj,url,callback,failure) {
  if (typeof url == 'string') obj.img = loadImage(url,function(img) {
    if (obj.width === 0) obj.width = img.width;
    if (obj.height === 0) obj.height = img.height;
    if (typeof callback == 'function') callback(img);
  },failure);
  else obj.img = url;
  obj.image = function(s,b) {
    var f = s.imageFit;
    var ax = s.imageHorizAlign;
    var ay = s.imageVertAlign;
    var bev = s.imageBevel;
    if (f == "inside") {
      var bb = centerRect(obj.width,obj.height,obj.img.width,obj.img.height);
      if (ax == "left") bb.x = 0;
      if (ax == "right") bb.x = obj.width-bb.w;
      if (ay == "top") bb.y = 0;
      if (ay == "bottom") bb.y = obj.height-bb.h;
      b.beveledImage(obj.img,obj.x+bb.x,obj.y+bb.y,bb.w,bb.h,bev);
    }
    else if (f == "outside") {
      var bb = centerRect(obj.img.width,obj.img.height,obj.width,obj.height);
      if (ax == "left") bb.x = 0;
      if (ax == "right") bb.x = obj.img.width-bb.w;
      if (ay == "top") bb.y = 0;
      if (ay == "bottom") bb.y = obj.img.height-bb.h;
      b.beveledImage(obj.img,bb.x,bb.y,bb.w,bb.h,obj.x,obj.y,obj.width,obj.height,bev);
    }
    else b.beveledImage(obj.img,obj.x,obj.y,obj.width,obj.height,bev);
  };
  obj.drawers.push("image");
};
Components.input = function(obj,txt) {
  Components.text(obj,txt);
  Components.button(obj);
  obj.activeStyle = createStyle(obj.clickStyle);
  obj.styles.push("activeStyle");
  obj.getStyle = function() {
    var s = obj.style;
    if (obj.hover) {
      if (mouseDown("left")) s = obj.clickStyle;
      else if (obj.hoverStyle) s = obj.hoverStyle;
    }
    if (activeElement == obj) s = obj.activeStyle;
    return s;
  }
  obj.cursor = function(s,b) {
    if (isMobile) return;
    var c = obj._cache;
    if ((Date.now()-_startTime) % 1000 < 500 && activeElement == obj) return;
    b.noStroke();
    b.fill(s.cursor);
    b.text("|",obj.x+c.cursorX,obj.y+c.cursorY-0.5);
  };
  obj.drawers.push("cursor");
  obj.calculateCursorPos = function() {
    var s = obj.style, c = obj._cache;
    c.cursorY = (obj.beflines.length-1)*(s.textSize*1.25)+c.ty;
    c.cursorX = textWidth(obj.beflines[obj.beflines.length-1])+c.tx;
    
    var ax = s.horizAlign;
    c.xdiff = 0;
    if (ax != "left") {
      var total = textWidth(obj.lines[obj.beflines.length-1]);
      c.xdiff = c.max - total;
      if (ax == "center") c.xdiff /= 2;
    }
    c.cursorX += c.xdiff;
    c.cursorY += c.ydiff;
  };
  obj.cursorPos = obj._value.length;
  obj.onmobile = function(){};
  obj.click = function() {
    obj.onclick();
    if (isMobile) {
      var str = JSON.stringify(obj._value);
      str = str.substring(1,str.length-1);
      str = prompt(obj.placeholder||"Enter text:",str);
      if (str === null) return;
      str = str.replace(/"/g,"\\\"");
      obj._value = JSON.parse("\""+str+"\"");
      obj.update();
      obj.onchange();
      obj.onunfocus();
      obj.onmobile();
      return;
    }
    var s = obj.style, c = obj._cache;
    activeElement = obj;
    var lines = obj.lines;
    var dy = mouseY - obj.y - c.ty - c.ydiff;
    var li = constrain(round(dy/(s.textSize*1.25)),0,lines.length);
    //
    var last = lines[li]||"";
    var xdiff = 0;
    var ax = s.horizAlign;
    if (ax != "left") {
      xdiff = c.max - textWidth(last);
      if (ax == "center") xdiff /= 2;
    }
    var dx = mouseX - obj.x - c.tx - xdiff;
    var e = textWidth("_");
    var cpos = min(round(dx/e),last.length);
    while (textWidth(last.substring(0,cpos))>dx && cpos >= 0) cpos--;
    while (textWidth(last.substring(0,cpos))<dx-e/2 && cpos < last.length) cpos++;
    for (var i = 0; i < li; i++) {
      cpos += lines[i].length;
    }
    cpos += (obj._value.substring(0,cpos).match(/\n/g)||[]).length;
    obj.cursorPos = cpos;
    obj.update();
    obj._cache.val = obj._value;
    obj.onfocus();
  };
  obj.onclick = function() {};
  obj.update = function(e) {
    obj.text(obj.style,window);
    obj.updateSizes();
    var bef = [];
    var c = obj.cursorPos;
    for (var i = 0; i < obj.lines.length; i++) {
      bef.push(obj.lines[i]);
      c -= obj.lines[i].length;
      if (c < 0) break;
    }
    bef[bef.length-1] = bef[bef.length-1].substring(0,bef[bef.length-1].length+c);
    obj.beflines = bef;
    obj.calculateCursorPos();
    obj.oninput(e);
  };
  obj.validateinput = function() {};
  obj.validatevalue = function() {};
  obj.oninput = function() {};
  obj.onfocus = function() {};
  obj.onunfocus = function() {};
  obj.onchange = function() {};
};
Components.numberinput = function(obj,num,decimals) {
  obj.decimals = decimals||0;
  Object.defineProperty(obj,"value",{
    get: function() {
      return Number(obj._value)||Number(obj.placeholder);
    },
    set: function(e) {
      obj._value = constrain(e,obj.min,obj.max).toFixed(obj.decimals);
      obj.update(e);
    }
  });
  Components.input(obj);
  obj.placeholder = (num||0).toFixed(obj.decimals);
  obj._value = obj.placeholder;
  obj.min = -Infinity;
  obj.max = Infinity;
  obj.validateinput = function(n) {
    if (n == "\n") {
      obj.onunfocus();
      if (obj._cache.val !== obj._value) obj.onchange(obj._value);
      activeElement = false;
      return false;
    }
    if (obj.decimals == 0 && n == ".") return false;
  };
  obj.validatevalue = function(n) {
    if (n == "" || (n == "-" && obj.min < 0)) return true;
    n = Number(n);
    if (isNaN(n) || n < obj.min || n > obj.max) return false;
    if (countDecimals(n) > obj.decimals) return false;
  };
  obj.numberinp = true;
};
Components.canvas = function(obj,gl) {
  obj.buff = createGraphics(obj.width,obj.height,gl);
  obj._cache.width = obj.width;
  obj._cache.height = obj.height;
  obj.children = [];
  obj.canvas = function(s,b) {
    obj.buff.clear();
    if (obj._cache.width != obj.width || obj._cache.width != obj.width) {
      obj.buff = createGraphics(obj.width,obj.height);
    }
    b.mouseFrame(obj.buff,obj.x,obj.y,obj.width,obj.height);
    obj.draw(obj.buff,s);
    obj.buff.shadow(false);
    b.image(obj.buff,obj.x,obj.y,obj.width,obj.height);
  };
  obj.drawers.push("canvas");
};
Components.div = function(obj) {
  Components.canvas(obj);
  obj.children = [];
  obj.appendChild = function(elem) {
    elem.parent = obj;
    obj.children.push(elem);
    obj.children = obj.children.sort(function(a,b){return a.zindex - b.zindex;});
  };
  obj.prependChild = function(elem) {
    elem.parent = obj;
    obj.children.shift(elem);
    obj.children = obj.children.sort(function(a,b){return a.zindex - b.zindex;});
  };
  obj.removeChild = function(elem) {
    var i = obj.children.indexOf(elem);
    if (i == -1) return;
    delete elem.parent;
    obj.children.splice(i,1);
  };
  obj.removeChildAtIndex = function(i) {
    if (!obj.children[i]) return;
    delete obj.children[i].parent;
    obj.children.splice(i,1);
  };
  obj.beforedraw = function(){};
  obj.afterdraw = function(){};
  obj.draw = function(b,s) {
    b.translate(-obj.scrollX,-obj.scrollY);
    obj.afterdraw(b);
    for (var i = 0; i < obj.children.length; i++) {
      obj.children[i].show(b);
    }
    obj.beforedraw(b);
    b.translate(obj.scrollX,obj.scrollY);
  };
  obj.scrollX = 0;
  obj.scrollY = 0;
  obj.minScrollX = 0;
  obj.minScrollY = 0;
  obj.maxScrollX = 0;
  obj.maxScrollY = 0;
  obj.onscroll = function(){};
  obj.scroll = function(x,y) {
    if (x == 0 && y == 0) return;
    var px = obj.scrollX, py = obj.scrollY;
    obj.scrollX = constrain(px+x,obj.minScrollX,obj.maxScrollX);
    obj.scrollY = constrain(py+y,obj.minScrollY,obj.maxScrollY);
    px -= obj.scrollX;
    py -= obj.scrollY;
    if (px != 0 || py != 0) obj.onscroll(px,py);
  };
  obj.div = true;
};
Components.draggable = function(obj) {
  Components.button(obj);
  obj.getStyle = function() {
    var s = obj.style;
    if (obj.hover) {
      if (mouseDown("left")) s = obj.clickStyle;
      else if (obj.hoverStyle) s = obj.hoverStyle;
    }
    if (activeElement == obj) s = obj.clickStyle;
    return s;
  }
  obj.dragX = true;
  obj.dragY = true;
  obj.minX = -Infinity;
  obj.maxX = Infinity;
  obj.minY = -Infinity;
  obj.maxY = Infinity;
  Object.defineProperty(obj,"valueX",{
    get: function() {
      return (obj.x-obj.minX)/(obj.maxX-obj.minX);
    },
    set: function(e) {
      obj.x = e*(obj.maxX-obj.minX)+obj.minX;
    }
  });
  Object.defineProperty(obj,"valueY",{
    get: function() {
      return (obj.y-obj.minY)/(obj.maxY-obj.minY);
    },
    set: function(e) {
      obj.y = e*(obj.maxY-obj.minY)+obj.minY;
    }
  });
  obj.deltaX = 0;
  obj.deltaY = 0;
  obj.drag = function(b) {
    if (activeElement !== obj) return;
    if (obj.dragX) {
      obj.x = constrain(b.mouseX+obj.deltaX,obj.minX,obj.maxX);
    }
    if (obj.dragY) {
      obj.y = constrain(b.mouseY+obj.deltaY,obj.minY,obj.maxY);
    }
  }
  obj.click = function() {
    obj.deltaX = obj.x-mouseX;
    obj.deltaY = obj.y-mouseY;
    obj.onclick();
    activeElement = obj;
    obj.ongrab();
  };
  obj.ongrab = function() {};
  obj.onrelease = function(){};
};
Components.link = function(obj,url,pmt) {
  obj.url = url;
  obj.prompt = pmt || "Paste this URL in new tab:";
  obj.icon = loadIcon(url);
  obj.hoverExtra = 5;
  obj.body = function(s,b) {
    if (obj.hover) {
      var s = obj.hoverExtra;
      b.image(obj.icon,obj.x-s/2,obj.y-s/2,obj.width+s,obj.height+s);
    } else {
      b.image(obj.icon,obj.x,obj.y,obj.width,obj.height);
    }
  };
  obj.hover = false;
  obj.onclick = function() {
    prompt(obj.prompt, obj.url);
    obj.onopen();
  };
  obj.onopen = function() {};
  obj.onunclick = function(){};
  obj.interactive = true;
  delete obj.style;
};
window.createComponent = function(name,callback) {
  Components[name] = callback;
};

// Links
var linkIcon = loadImage("https://cdn-icons-png.flaticon.com/512/3214/3214746.png");
var linkIcons = {
  "discord." : loadImage("https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/discord-512.png"),
  "youtube.com" : loadImage("https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png"),
  "youtu.be" : loadImage("https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png"),
  "spotify.com" : loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png"),
  "code.org" : loadImage("https://studio.code.org/assets/logo-2acd4ebc69c447786b866b98034bb3c0777b5f67cd8bd7955e97bba0b16f2bd1.svg"),
  "pumpkin-smasher" : loadImage("https://pumpkin-smasher-2.onrender.com/assets/pumpkins/objective.png"),
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
var cachedIcons = {};
window.loadIcon = function(url) {
  for (var i in linkIcons) {
    if (url.includes(i)) return linkIcons[i];
  }
  var domain = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img);
  if (cachedIcons[domain]) return cachedIcons[domain];
  cachedIcons[domain] = linkIcon;
  loadImage("https://www.google.com/s2/favicons?sz=64&domain="+domain,function(img){
    cachedIcons[domain] = img;
  });
  return linkIcon;
};

// Draw elements
window.drawElements = function() {
  cursor(ARROW);
  clickerElement(function(obj) {
    if (obj.onclick && obj.changecursor) {
      if (obj.cursor) cursor(TEXT);
      else cursor(HAND);
    }
    if (!obj.div) return;
    var sx = 0, sy = 0;
    if (mouseDown("left") && !activeElement.drag) {
      sx += pmouseX-mouseX;
      sy += pmouseY-mouseY;
    }
    if (keyDown("left")) sx -= 5;
    if (keyDown("right")) sx += 5;
    if (keyDown("up")) sy -= 5;
    if (keyDown("down")) sy += 5;
    obj.scroll(sx,sy);
  });
  mouseX += camera.x-200;
  mouseY += camera.y-200;
  activePage.before();
  for (var i = 0; i < activePage.elementList.length; i++) {
    var obj = activePage.elementList[i];
    if (obj.parent) continue;
    obj.show();
  }
  shadow(false);
  activePage.after();
  mouseX -= camera.x-200;
  mouseY -= camera.y-200;
};
var ElementHandler = createEventHandler().start();
ElementHandler.mousePressed = function() {
  var celem = activeElement;
  activeElement = false;
  clickerElement(function(obj) {
    obj.click();
  });
  if (celem != activeElement && celem.cursor) {
    if (celem._cache.val !== celem._value) celem.onchange(celem._value);
    celem.onunfocus();
  }
};
ElementHandler.mouseReleased = function() {
  if (activeElement.drag) {
    activeElement.onrelease();
    activeElement = false;
  }
  clickerElement(function(obj) {
    if (!obj.onunclick) return;
    obj.onunclick();
  });
};
// ElementHandler.mouseDragged = function() {
//   if (activeElement.drag) {
//     activeElement.drag();
//   }
// }
function addtoinput(inp,def) {
  var k = activeElement.validateinput(inp);
  if (k === false) return;
  if (k === undefined) k = inp||def;
  var preval = activeElement._value.substring(0, activeElement.cursorPos) + k + activeElement._value.substring(activeElement.cursorPos, activeElement._value.length);
  if (activeElement.validatevalue(preval) === false) return;
  activeElement._value = preval;
  activeElement.cursorPos += k.length;
  activeElement.update(k);
};
ElementHandler.keyTyped = function() {
  if (!activeElement) return;
  if (key == "\r") return;
  var oldkey = key;
  onHold(keyCode,key,function(){
    addtoinput(key,oldkey);
  });
};
ElementHandler.keyPressed = function() {
  if (!activeElement || !activeElement.cursor) return;
  onHold(BACKSPACE,"backspace",function() {
    if (activeElement.validateinput("backspace") === false) return;
    var preval = activeElement._value.substring(0, activeElement.cursorPos-1) + activeElement._value.substring(activeElement.cursorPos, activeElement._value.length);
    if (activeElement.validatevalue(preval) === false) return;
    activeElement._value = preval;
    activeElement.cursorPos--;
    activeElement.cursorPos = max(0,activeElement.cursorPos);
    activeElement.update("backspace");
  });
  onHold(LEFT_ARROW,"left",function() {
    activeElement.cursorPos = max(activeElement.cursorPos-1,0);
    activeElement.update("left");
  });
  onHold(RIGHT_ARROW,"right",function() {
    activeElement.cursorPos = min(activeElement.cursorPos+1,activeElement._value.length);
    activeElement.update("right");
  });
  if (keyCode == ENTER) {
    addtoinput("\n");
    return;
  }
  var lines, cursorLine, cursorOffset;
  var updateLines = function() {
    activeElement.update();
    lines = activeElement.lines;
    cursorLine = activeElement.beflines.length-1;
    cursorOffset = activeElement.cursorPos;
    for (var i = 0; i < cursorLine; i++) {
      cursorOffset -= lines[i].length+1;
    }
  }
  onHold(UP_ARROW,"up",function() {
    if (activeElement.numberinp) {
      activeElement.value += 1;
      return;
    };
    updateLines();
    if (cursorLine <= 0) return;
    var newPos = 0;
    for (var i = 0; i < cursorLine-1; i++) {
      newPos += lines[i].length+1;
    }
    activeElement.cursorPos = newPos + min(cursorOffset,lines[cursorLine-1].length);
  });
  onHold(DOWN_ARROW,"down",function() {
    if (activeElement.numberinp) {
      activeElement.value -= 1;
      return;
    };
    updateLines();
    if (cursorLine >= lines.length-1) return;
    var newPos = 0;
    for (var i = 0; i < cursorLine+1; i++) {
      newPos += lines[i].length+1;
    }
    activeElement.cursorPos = newPos + min(cursorOffset,lines[cursorLine+1].length);
  });
  if (keyCode == 86 && keyDown(CONTROL)) {
    var pasted = prompt("Paste here:");
    if (!pasted) return;
    pasted = pasted.replace(/\\n/g,"\n");
    addtoinput(pasted);
  }
  if (keyCode == 67 && keyDown(CONTROL)) {
    prompt("Copy here:",activeElement._value.replace(/\n/g,"\\n"));
  }
};
ElementHandler.mouseWheel = function(dx,dy) {
  clickerElement(function(obj) {
    if (!obj.scroll) return;
    obj.scroll(dx,dy);
  });
  if (activeElement && activeElement.numberinp) {
    activeElement.value += Number((dy/10).toFixed(activeElement.decimals));
  }
};
function clickerElement(callback) {
  mouseX += camera.x-200;
  mouseY += camera.y-200;
  var done = false;
  var hov = function(obj) {
    if (!obj.visible || (!obj.interactive && !obj.div)) return;
    var h = !done && obj.testhover();
    obj.hover = h;
    if (obj.div) {
      if (!h) return;
      mouseX -= obj.x - obj.scrollX;
      mouseY -= obj.y - obj.scrollY;
      for (var j = obj.children.length-1; j >= 0; j--) {
        hov(obj.children[j]);
      }
      mouseX += obj.x - obj.scrollX;
      mouseY += obj.y - obj.scrollY;
    } else {
      if (h) done = true;
    }
    if (h) callback(obj);
  };
  var list = activePage.elementList;
  for (var i = list.length-1; i >= 0; i--) {
    var obj = list[i];
    if (obj.parent) continue;
    hov(obj);
  }
  mouseX -= camera.x-200;
  mouseY -= camera.y-200;
};
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
};

// Gradients
var gbuf = _createGraphics(400,400);
gbuf.noStroke();
gbuf.angleMode(DEGREES);
gbuf.translate(200,200);
gbuf.scale(400,400);
window.Gradient = {};
Gradient.density = 400;
Gradient.grid = function(callback,density) {
  density = density || Gradient.density;
  density = ceil(sqrt(density));
  gbuf.push();
  for (var x = 0; x < density; x++) {
    var x0 = x/density;
    var x1 = (x+1)/density;
    for (var y = 0; y < density; y++) {
      var y0 = y/density;
      var y1 = (y+1)/density;
      gbuf.fill(callback(x1,y1));
      gbuf.rect(x0-0.5,y0-0.5,x1,y1);
    }
  }
  gbuf.pop();
  return gbuf.get(0,0,400,400);
}
Gradient.linear = function(angle,callback,density) {
  density = density || Gradient.density;
  gbuf.push();
  gbuf.rotate(angle);
  gbuf.scale(1/gbuf.sin(angle),1/gbuf.sin(angle));
  for (var i = 0; i < density; i++) {
    var t0 = i/density;
    var t1 = (i+1)/density;
    gbuf.fill(callback(t1));
    gbuf.rect(t0-0.5,-0.5,t1,1);
  }
  gbuf.pop();
  return gbuf.get(0,0,400,400);
}
Gradient.radial = function(cx,cy,callback,density) {
  cx /= 2*SQRT2;
  cy /= 2*SQRT2;
  density = density || Gradient.density;
  gbuf.background(callback(1));
  gbuf.push();
  gbuf.scale(SQRT2,SQRT2);
  for (var i = 0; i < density; i++) {
    var t = 1-i/density;
    gbuf.fill(callback(t));
    gbuf.ellipse(cx,cy,t,t);
  }
  gbuf.pop();
  return gbuf.get(0,0,400,400);
}
Gradient.conic = function(cx,cy,callback,density) {
  cx /= 2*SQRT2;
  cy /= 2*SQRT2;
  density = density || Gradient.density;
  gbuf.push();
  gbuf.scale(SQRT2,SQRT2);
  for (var i = 0; i < density; i++) {
    var t0 = i/density;
    var t1 = (i+1)/density;
    var c = callback(t1);
    gbuf.fill(c);
    gbuf.stroke(c);
    gbuf.strokeWeight(0.001);
    gbuf.beginShape(TRIANGLES);
    gbuf.vertex(cx,cy);
    gbuf.vertex(cos(t0*360),sin(t0*360));
    gbuf.vertex(cos(t1*360),sin(t1*360));
    gbuf.endShape();
  }
  gbuf.pop();
  return gbuf.get(0,0,400,400);
}

// Color Interpolation
window.simpleInterp = function(c1,c2,easing) {
  if (typeof c1 !== 'object') c1 = color(c1);
  if (typeof c2 !== 'object') c2 = color(c2);
  return function(t) {
    if (easing) t = easing(t);
    return lerpColor(c1,c2,t);
  };
}
window.colorStopInterp = function(stopList,colorList,easeList) {
  for (var j = 0; j < colorList.length; j++) {
    if (typeof colorList[j] !== 'object') colorList[j] = color(colorList[j]);
  }
  return function(t) {
    for (var i = 0; i < stopList.length-1; i++) {
      if (stopList[i] <= t && t <= stopList[i+1]) {
        t = (t-stopList[i])/(stopList[i+1]-stopList[i]);
        break;
      }
    }
    if (easeList && easeList[i]) t = easeList[i](t);
    return lerpColor(colorList[i],colorList[i+1],t);
  };
};

// Avatars
var circleMask = _createGraphics(128,128);
circleMask.noStroke();
circleMask.ellipse(64,64,128,128);
circleMask = circleMask.get();
_bindGraphicsMethod("avatarImage",function(img,type,x,y,d) {
  if (typeof img !== "object") return;
  if (img.width === 1 || img.height === 1) return;
  var n = "avatar"+type;
  if (!img[n]) {
    var minside = min(img.width,img.height);
    var bufferX = img.width-minside;
    var bufferY = img.height-minside;
    var img1 = img.get(bufferX/2,bufferY/2,minside,minside);
    if (type == "circle") img1.mask(circleMask);
    img[n] = img1;
  }
  this.image(img[n],x-d/2,y-d/2,d,d);
});

// FANIM Fire Animations
// By: DragonFireGames
// Version: 1.3
// Description: Animation functions

window.SequenceList = [];
// Creates an animation sequence
window.createSequence = function(length) {
  var seq = {};
  // Animation Handlers
  seq.animations = [];
  // Creates Animations
  seq.createAnimation = function(start,end,drawer,interp) {
    var len = end-start;
    interp = interp || function(t){return t};
    seq.animations.push(function(time){
      if (time > end || time < start) return;
      drawer(interp((time-start)/len),time);
    });
  };
  //
  seq.length = length; // in ms
  // Callbacks
  seq.before = function() {};
  seq.after = function() {};
  seq.onstart = function() {};
  seq.onend = function() {};
  // Draws Animations
  seq.draw = function() {
    if (!seq.startTime) return;
    var time = Date.now()-seq.startTime;
    seq.before(time);
    for (var i = 0; i < seq.animations.length; i++) {
      seq.animations[i](time);
    }
    seq.after(time);
    if (seq.length && time >= seq.length) seq.end();
  };
  seq.start = function(time) {
    time = time || 0;
    seq.onstart(time);
    seq.startTime = Date.now()+time;
  };
  seq.end = function() {
    seq.onend();
    delete seq.startTime;
  };
  SequenceList.push(seq);
  return seq;
}
// Draw animation sequences
window.drawSequences = function() {
  for (var i = 0; i < SequenceList.length; i++) {
    SequenceList[i].draw();
  }
}

//easings from: https://easings.net
window.Ease = {
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
window.cubicBezier = function(p1x,p1y,p2x,p2y) {
  //https://probablymarcus.com/blocks/2015/02/26/using-bezier-curves-as-easing-functions.html
  // Horner's method:
  var cx = 3*p1x;
  var bx = 3*(p2x-p1x)-cx;
  var ax = 1-cx-bx;
  var Bx = function(t) {
    return ((ax*t+bx)*t+cx)*t;
  };
  var BxPrime = function(t) {
    return 3*ax*t*t + 2*bx*t + cx;
  };
  var cy = 3*p1y;
  var by = 3*(p2y-p1y)-cy;
  var ay = 1-cy-by;
  var By = function(t) {
    return ((ay*t+by)*t+cy)*t;
  };
  var invBx = function(t) {
    // Newton method
    var x0 = t;
    for (var i = 0; i < 8; i++) {
      var y0 = Bx(x0)-t;
      if (abs(y0) <= 0.001) return x0;
      x0 -= y0/BxPrime(x0);
    }
    // Otherwise do bisection:
    var a = 0;
    var b = 1;
    x0 = 0.5;
    var step = 0.25;
    for (var i = 0; i < 16; i++) {
      y0 = Bx(x0)-t;
      if (abs(y0) <= 0.001) return x0;
      if (sign(y0) == sign(Bx(a)-t)) a = x0;
      else b = x0;
      x0 = (a+b)/2;
    }
    return x0;
  };
  return function(t) {
    return By(invBx(t));
  }
}

// ----
// Misc
// ----

// Transforms
_bindGraphicsMethod("transformWorldToCanvas",function(x,y) {
  // from world to canvas space
  if (typeof x == "object") {
    y = x.y;
    x = x.x;
  }
  var s = this._pixelDensity; // Get pixel density
  var matrix = this._renderer.drawingContext.getTransform(); // This is a DOMMatrix
  matrix = matrix.invertSelf(); // Invert the matrix
  var p = matrix.transformPoint({x:x*s,y:y*s,z:0,w:1}); // Transform the point
  return {x:p.x,y:p.y};
});
_bindGraphicsMethod("transformCanvasToWorld",function(x,y) {
  // from canvas to world space
  if (typeof x == "object") {
    y = x.y;
    x = x.x;
  }
  var s = this._pixelDensity; // Get pixel density
  var matrix = this._renderer.drawingContext.getTransform(); // This is a DOMMatrix
  var p = matrix.transformPoint({x:x,y:y,z:0,w:1}); // Transform the point
  return {x:p.x/s,y:p.y/s};
});
_bindGraphicsMethod("transformBufferToCanvas",function(buf,x,y,width,height,px,py) {
  // from canvas to world space
  if (typeof px == "object") {
    py = px.y;
    px = px.x;
  }
  px = px/buf.twidth*width+x;
  py = py/buf.theight*height+y;
  return {x:px,y:py};
});
_bindGraphicsMethod("transformCanvasToBuffer",function(buf,x,y,width,height,px,py) {
  // from canvas to world space
  if (typeof px == "object") {
    py = px.y;
    px = px.x;
  }
  px = (px-x)*buf.twidth/width;
  py = (py-y)*buf.theight/height;
  return {x:px,y:py};
});
// Mouse Hovering
_bindGraphicsMethod("mouseFrame",function(buf,x,y,width,height) {
  var p = this.transformWorldToCanvas(this.mouseX,this.mouseY);
  buf.hover = (
    p.x > x &&
    p.x < x+width &&
    p.y > y && 
    p.y < y+height
  );
  p = this.transformCanvasToBuffer(buf,x,y,width,height,p);
  buf.mouseX = p.x;
  buf.mouseY = p.y;
});
_bindGraphicsMethod("mouseRect",function(x,y,width,height) {
  if (this.hover === false) return false;
  var p = this.transformWorldToCanvas(this.mouseX,this.mouseY);
  return (
    p.x > x &&
    p.x < x+width &&
    p.y > y && 
    p.y < y+height
  );
});
_bindGraphicsMethod("mouseEllipse",function(cx,cy,width,height) {
  if (this.hover === false) return false;
  var p = this.transformWorldToCanvas(this.mouseX,this.mouseY);
  var dx = (p.x - cx) / width;
  var dy = (p.y - cy) / (height||width);
  var dist = dx*dx + dy*dy;
  return dist < 0.25;
});
// Format Anything
_bindGraphicsMethod("format",function(f,s,sw,ts,tax,tay) {
  if (!f && f !== 0) this.noFill();
  else this.fill(f);
  if (!s && s !== 0) this.noStroke(s);
  else this.stroke(s);
  this.strokeWeight(sw||1);
  this.textSize(ts||12);
  this.textAlign(tax||CENTER,tay||CENTER);
});
_bindGraphicsMethod("typewrite",function(str,t,x,y,mw,mh){
  var str = str.substring(0,Math.round(str.length*t));
  this.text(str,x,y,mw,mh);
  return str;
});
_bindGraphicsMethod("textfit",function(str,x,y,mw,mh){
  this.textSize(1);
  mw = mw || Infinity;
  mh = mh || Infinity;
  if (str.includes("\n")) {
    var s = this.textBounds(str);
  } else {
    var s = {};
    s.width = this.textWidth(str);
    s.height = this._renderer._textLeading;
  }
  var size = min(mw/s.width,mh/s.height);
  this.textSize(size);
  this.text(str,x,y);
  return size;
});
_bindGraphicsMethod("shadow",function(color,blur,offx,offy) {
  this.drawingContext.shadowColor = color||"rgba(0,0,0,0)";
  if (color == false) return;
  this.drawingContext.shadowBlur = blur||0;
  this.drawingContext.shadowOffsetX = offx||0;
  this.drawingContext.shadowOffsetY = offy||0;
});
window.centerRect = function(w1,h1,w2,h2) {
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
_bindGraphicsMethod("getLines",function(string,width) {
  if (typeof string !== 'string') return [];
  var lines = string.split(/(?<=\n)/);
  for (var i = 0; i < lines.length; i++) {
    if (this.textWidth(lines[i]) <= width) continue;
    if (!lines[i].match(/[ \t\x0B\f\r]/)) continue;
    var off = "";
    while (this.textWidth(lines[i]) > width || (!lines[i].match(/[\s-_]$/) && lines[i].match(/[\s-_]/))) {
      off = lines[i].charAt(lines[i].length-1)+off;
      lines[i] = lines[i].substr(0,lines[i].length-1);
    }
    lines.splice(i+1,0,off);
  }
  return lines;
});
_bindGraphicsMethod("textHeight",function(string,wid) {
  var lines = this.getLines(string,wid);
  return lines *= this._renderer._textLeading;
});
_bindGraphicsMethod("textBounds",function(string,wid) {
  var lines = this.getLines(string,wid||Infinity);
  var obj = {};
  obj.lines = lines;
  obj.height = lines.length * this._renderer._textLeading;
  obj.width = 0;
  for (var i = 0; i < lines.length; i++) {
    obj.width = max(obj.width,this.textWidth(lines[i]));
  }
  return obj;
});
var bbuf = _createGraphics(1600,1600);
_bindGraphicsMethod("beveledImage",function(img,sx,sy,sw,sh,x,y,w,h,bev) {
  if (y === undefined) {
    bev = x;
    x = sx; y = sy;
    w = sw; h = sh;
    sx = 0; sy = 0;
    sw = img.width;
    sh = img.height;
  }
  if (img.width !== 1 && bev) {
    var n = "bev"+[sx,sy,sw,sh,w,h,bev].join(",");
    if (!img[n]) {
      var w1 = w*bbuf._pixelDensity;
      var h1 = h*bbuf._pixelDensity;
      bbuf.clear();
      bbuf.image(img,sx,sy,sw,sh,0,0,w1,h1);
      var get1 = bbuf.get(0,0,w1,h1);
      bbuf.clear();
      bbuf.noStroke();
      bbuf.rect(0,0,w1,h1,bev*bbuf._pixelDensity);
      var get2 = bbuf.get(0,0,w1,h1);
      get1.mask(get2);
      img[n] = get1;
    }
    this.image(img[n],x,y,w,h);
  } else this.image(img,sx,sy,sw,sh,x,y,w,h)
});
_bindGraphicsMethod("hsl",function(hue,saturation,lightness) {
  colorMode(HSL);
  var c = color(hue,saturation,lightness);
  colorMode(RGB);
  return c;
});
_bindGraphicsMethod("hsv",function(hue,saturation,value) {
  colorMode(HSB);
  var c = color(hue,saturation,value);
  colorMode(RGB);
  return c;
});
_bindGraphicsMethod("alpha",function(c,a){
  if (typeof a != 'number') return c;
  a = constrain(a,0,1);
  var col = color(c);
  col._array[3] = a;
  return col;
});
function countDecimals(x) {
  if (Math.floor(x.valueOf()) === x.valueOf()) return 0;
  var str = x.toString();
  if (str.indexOf(".") !== -1 && str.indexOf("-") !== -1) {
    return str.split("-")[1] || 0;
  } else if (str.indexOf(".") !== -1) {
    return str.split(".")[1].length || 0;
  }
  return str.split("-")[1] || 0;
}
Math.sign = function(x) {
  if (x == 0) return 0;
  if (x > 0) return 1;
  return -1;
} // Why does this not exist on code.org
window.sign = Math.sign;

// Pub
console.log("Loaded library: FGUI\n A graphics library by DragonFireGames");

// ---------
// Defaults:
// ---------

// Default Draw
function draw() {
  drawElements();
  drawSprites();
  drawSequences();
}
