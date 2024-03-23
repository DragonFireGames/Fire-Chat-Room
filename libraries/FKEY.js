
// FKEY Fire Key Values
// By: DragonFireGames
// Version: 1.2
// Description: Better key values and big
//   key values that fix a lot of key value
//   problems.

var userId = (window._getUserId||window.getUserId)();
window.getUserId = function(ok) {
  if (!ok) prompt("Warning: Sharing the userId is dangerous and makes FCR accounts insecure.");
  return userId;
};

window.refreshRate = 1000/8;
window.createDatabaseStructure = function(getter,setter) {
  var obj = {};
  obj.get = getter||getKeyValue;
  obj.set = setter||setKeyValue;
  obj.log = function(key) {
    obj.get(key,console.log,console.log);
  }
  obj.delete = function(key,success,failure) {
    obj.set(key,undefined,success,failure);
  }
  obj.update = function(key,callback,success,failure) {
    obj.get(key,function(v){
      v = callback(v);
      if (v === undefined) return;
      obj.set(key,v,success,failure);
    },failure);
  };
  obj._watcherList = {};
  obj.watch = function(key,callback,rate,failure) {
    if (obj._watcherList[key]) obj.abandon(key);
    rate = rate || refreshRate;
    obj._watcherList[key] = setInterval(function(){
      obj.get(key,function(data){
        callback(data);
      },failure);
    },rate);
  };
  obj.abandon = function(key) {
    clearInterval(obj._watcherList[key]);
    delete obj._watcherList[key];
  };
  return obj;
};

// Firebase built-in database

// Fix Key
window._setKeyValue = window.setKeyValue;
window._getKeyValue = window.getKeyValue;
// New
window.keyValueDB = createDatabaseStructure();
keyValueDB.get = function(key,callback,failure) {
  key = encodeURIComponent(key);
  window._getKeyValue(key,function(value){
    if (value === undefined) return callback();
    try {
      value = JSON.parse(value);
      callback(value);
    } catch(e) {
      (failure||console.log)(e);
    }
  },failure||console.log);
};
keyValueDB.set = function(key,value,success,failure) {
  key = encodeURIComponent(key);
  value = JSON.stringify(value);
  window._setKeyValue(key,value,success,failure||console.log);
};
window.getKeyValue = keyValueDB.get;
window.setKeyValue = keyValueDB.set;
window.logKeyValue = keyValueDB.log;
window.updateKeyValue = keyValueDB.update;
window.watchKeyValue = keyValueDB.watch;
window.abandonKeyValue = keyValueDB.abandon;
// Big Key
window.bigKeyValueDB = createDatabaseStructure();
bigKeyValueDB.get = function(key,callback,failure) {
  key = encodeURIComponent(key);
  var value = "";
  var n = 0;
  var getNext = function() {
    window._getKeyValue(key+"+"+n,function(part){
      if (!part) {
        if (value === "") {
          callback();
          return;
        }
        try {
          value = JSON.parse(value);
          callback(value);
        } catch(e) {
          (failure||console.log)(e);
        }
        return;
      }
      value += part;
      getNext();
    },failure||console.log);
    n++;
  };
  getNext();
};
bigKeyValueDB.set = function(key,value,success,failure) {
  key = encodeURIComponent(key);
  value = JSON.stringify(JSON.stringify(value));
  value = value.substring(1,value.length-1);
  var n = 0;
  function setNext() {
    var x = 4094;
    if (value[4093] == "\\") x--;
    var part = value.substring(0,x);
    part = JSON.parse('"'+part+'"');
    value = value.substring(x);
    if (part.length == 0) {
      if (typeof success == 'function') success();
      return;
    }
    window._setKeyValue(key+"+"+n,part,setNext,failure||console.log);
    n++;
  }
  setNext();
};
window.getBigKeyValue = bigKeyValueDB.get;
window.setBigKeyValue = bigKeyValueDB.set;
window.logBigKeyValue = bigKeyValueDB.log;
window.updateBigKeyValue= bigKeyValueDB.update;

window.valueSize = function(v) {
  return JSON.stringify(JSON.stringify(v));
}

// Random id
window.randomId = function(len,alphabet) {
  alphabet = alphabet || "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_/+"
  var str = "";
  for (var i = 0; i < len; i++) {
    str += alphabet[randomNumber(0,alphabet.length-1)];
  }
  return str;
};

// FWEB Fire Web Connections
// By: DragonFireGames
// Version: 1.0
// Description: Connect to an external website
//   using spoofed loadImage requests.
//  (Shoutout to Varrience & Owokoyo for teaching 
//   me the technique.)

//* // Production server
window.server = "https://cdo-backend.onrender.com";
/*/ // Testing Server
window.server = "https://5beb092a-506d-48b0-b8c7-756ee8262e7f-00-31375u6hjf5ak.picard.replit.dev";
//*/

// Image data parser (credit: Owokoyo)
window._parseImageIntoData = function(img) {
  var msg = "";
  if (img.pixels.length < 1) img.loadPixels();
  if (img.pixels.length < 1 || img === undefined) {
    return msg;
  }
  //image(img, 0, 0);
  /* DUMB SLOW VERSION
  for (var c = 0; c < img.pixels.length; c++) {
    var color = img.pixels[c];
    if (color > 0 && color < 255) {
      msg += String.fromCharCode(color);
    }
  }
  var raw = msg;
  /*/// SUPER FAST BIG BRAIN OWOKOYO VERSION 
  var data = img.pixels;
  //var num = (data[2] << 16) + (data[1] << 8) + data[0] + 4; // From owokoyo not sure why he has it
  var num = img.pixels.length;
  var pos = 0;
  while (num > 0) {
    var toAdd = String.fromCharCode.apply(null, data.slice(pos, pos + 40000));
    num -= 30000;
    msg += toAdd;
    pos += 40000;
  }
  var raw = msg.replace(/(\xff|\x00)/g, "");
  //*/
  return raw;
};
// Check for error
window._isImageDataError = function(img) {
  if (img.pixels.length < 1) img.loadPixels();
  if (img.pixels.length < 1 || img === undefined) {
    return false;
  }
  var data = img.pixels.slice(0,11);
  var msg = String.fromCharCode.apply(null, data);
  return msg === '{"Eÿrroÿr":';
}

// fetch
window.fetch = function(url,data,callback,failure,rid) {
  var obj = {};
  var rid = rid || random();
  var json = JSON.stringify(data || {});
  obj._counter = 0;
  obj.loaded = false;
  var fetchurl = server+"/fetch?url="+encodeURIComponent(url)+"&data="+encodeURIComponent(json)+"&reqid="+encodeURIComponent(rid);
  obj._mediaUrl = "https://studio.code.org/media?u="+encodeURIComponent(fetchurl);
  obj._image = loadImage(fetchurl, function (img) {
    obj.loaded = true;
    obj.size = img.width * img.height;
    if (_isImageDataError(img)) try {
      var parsed = JSON.parse(_parseImageIntoData(img));
      obj.error = parsed.Error;
      (failure||console.log)(parsed.Error);
      return;
    } catch(e) {}
    obj.image = function() {
      return img;
    };
    obj.text = function() {
      return _parseImageIntoData(img);
    };
    obj.json = function() {
      var char0 = String.fromCharCode(img.pixels[0]);
      if (!char0.match(/^[\[\{\d"]$/)) return null;
      var text = obj.text();
      try {
        return JSON.parse(text);
      } catch(e) {}
      return null;
    };
    obj.html = function(doc) {
      var char0 = String.fromCharCode(img.pixels[0]);
      if (char0 !== "<") return null;
      var text = obj.text();
      try {
        return parseHTML(text,doc);
      } catch(e) {}
      return null;
    };
    (callback||console.log)(obj);
  }, function(e) {
    if (e.returnValue) {
      // Ping for result every second
      obj._counter++;
      setTimeout(function(){
        fetch(url,data,callback,failure,rid);
      },1000);
      return;
    }
    obj.error = e;
    (failure||console.log)(e);
  });
  return obj;
}

// misc
window.loadHTML = function(url,callback,failure,obj) {
  obj = obj || {};
  fetch(url,{},function(e){
    e = e.html(obj);
    if (e === null) {
      if (typeof failure == 'function') failure({ Error: "Not JSON" });
      return;
    }
    if (typeof callback == 'function') callback(obj);
  },failure);
  return obj;
};
/*String.prototype.matchIndex = function(regex) {
  var str = this;
  var starts = [];
  var ends = [];
  var matches = str.match(regex);
  var removed = 0;
  for (var j = 0; j < matches.length; j++) {
    var i = str.indexOf(matches[j]);
    if (i == -1) break;
    var loc = i+matches[j].length;
    starts.push(i+removed);
    ends.push(loc+removed);
    str = str.slice(loc);
    removed += loc;
  }
  return {matches:matches,starts:starts,ends:ends};
};*/
function parseHTML(text,doc) {
  doc = doc || {};
  doc.html = text.replace(/<![^>]-->/g,"");
  var matches = {};
  matches[0] = text.split(/<\/?\w+\s*[^<>]*\/?>/);
  //var mindex = text.matchIndex(/<\/?\w+\s*[^<>]*\/?>/g);
  //matches[1] = mindex.matches;
  matches[1] = text.match(/<\/?\w+\s*[^<>]*\/?>/g);
  var ids = {};
  var classes = {};
  var names = {};
  var tagnames = {};
  var v = [];
  for (var i = 0; i < matches[1].length; i++) {
    var o = {};
    var e = matches[1][i].match(/<(\/?)(\w+)\s*([^<>]*)(\/?)>/);
    //o._startRawIndex = mindex.starts[i];
    //o._endRawIndex = mindex.ends[i];
    o._isend = !!e[1];
    o._selfclosing = !!e[4];
    o.type = e[2];
    o.children = [];
    Object.defineProperty(o,"outerHTML",{
      get: function() {
        var raw = this._raw;
        raw += this.innerHTML;
        if (this._end) raw += v[this._end]._raw;
        return raw;
      }
    });
    Object.defineProperty(o,"innerHTML",{
      get: function() {
        var raw = "";
        for (var i = 0; i < this.children.length; i++) {
          if (typeof this.children[i] == 'string') raw += this.children[i];
          else raw += this.children[i].outerHTML;
        }
        return raw;
      }
    });
    o.toString = function() {
      return doc.outerHTML;
    };
    tagnames[o.type] = tagnames[o.type] || [];
    tagnames[o.type].push(o);
    if (e[2] == "head" && !e[1]) doc.head = o; 
    if (e[2] == "body" && !e[1]) doc.body = o; 
    o.properties = {};
    o._raw = matches[1][i];
    var p1 = e[3].match(/\w+\=\"[^"]*\"/g) || [];
    for (var j = 0; j < p1.length; j++) {
      var k = p1[j].match(/(\w+)\=\"([^"]*)\"/);
      o.properties[k[1]] = k[2];
    }
    var p2 = e[3].match(/\w+\=\'[^']*\'/g) || [];
    for (var j = 0; j < p2.length; j++) {
      var k = p2[j].match(/(\w+)\=\'([^']*)\'/);
      o.properties[k[1]] = k[2];
    }
    var p3 = e[3].match(/\w+\=[^\s"']+/g) || [];
    for (var j = 0; j < p3.length; j++) {
      var k = p3[j].match(/(\w+)\=([^\s"']+)/);
      o.properties[k[1]] = k[2];
    }
    for (var j in o.properties) {
      var k = o.properties[j];
      if (j === "class") {
        classes[k] = classes[k] || [];
        classes[k].push(o);
        continue;
      }
      if (j === "name") {
        names[k] = names[k] || [];
        names[k].push(o);
        continue;
      }
      if (j === "id") {
        ids[k] = o;
        continue;
      }
    }
    matches[1][i] = o;
  }
  for (var i = 0; i < matches[0].length+matches[1].length; i++) {
    v.push(matches[i%2][floor(i/2)]);
  }
  var list = [];
  var map = {};
  for (var i = 0; i < v.length; i++) {
    if (i % 2 == 0) continue;
    if (v[i]._selfclosing) return;
    v[i].count = list.length;
    v[i]._index = i;
    if (v[i]._isend) {
      list.splice(list.lastIndexOf(v[i].type),list.length);
      v[i]._begin = map[list.length+1];
      v[v[i]._begin]._end = i;
    } else {
      list.push(v[i].type);
      map[list.length] = i;
    }
  }
  function parse(l) {
    var n = [];
    for (var i = 0; i < l.length; i++) {
      if (typeof l[i] == "string" && l[i].match(/^[\s\n]*$/)) continue;
      n.push(l[i]);
      if (typeof i == "object") continue;
      if (!l[i]._end) continue;
      var inside = v.slice(l[i]._index+1,l[i]._end-1);
      l[i].children = parse(inside);
      for (var j = 0; j < l[i].children.length; j++) (function(c,p) {
        if (typeof c != "object") return;
        Object.defineProperty(c,"parent",{
          get: function() {
            return p;
          }
        });
      })(l[i].children[j],l[i]);
      i += inside.length+2;
    }
    return n;
  }
  var nv = parse(v);
  doc.children = nv;
  doc.all = v;
  doc.getElementById = function(id) {
    return ids[id];
  };
  doc.getElementsByClassName = function(cname) {
    return classes[cname];
  };
  doc.getElementsByName = function(name) {
    return names[name];
  };
  doc.getElementsByTagName = function(tname) {
    return tagnames[tname];
  };
  doc.toString = function() {
    return doc.html;
  };
  return doc;
};
window.loadJSON = function(url,callback,failure,obj) {
  obj = obj || {};
  fetch(url,{},function(e){
    e = e.json();
    if (e === null) {
      if (typeof failure == 'function') failure({ Error: "Not JSON" });
      return;
    }
    for (var i in e) obj[i] = e[i];
    if (typeof callback == 'function') callback(obj);
  },failure);
  return obj;
};
window._loadModel = loadModel;
window.loadModel = function(url,callback,failure) {
  var obj = _loadModel();
  obj.gid = random();
  fetch(url,{},function(e){
    e = e.text();
    obj = parseObj(obj,e);
    if (typeof callback == 'function') callback(obj);
  },failure);
  return obj;
};
{
// * Parse OBJ lines into obj. For reference, this is what a simple model of a
// * square might look like:
// *
// * v -0.5 -0.5 0.5
// * v -0.5 -0.5 -0.5
// * v -0.5 0.5 -0.5
// * v -0.5 0.5 0.5
// *
// * f 4 3 2 1
function parseObj(obj, string) {
  var lines = string.split("\n");
  // OBJ allows a face to specify an index for a vertex (in the above example),
  // but it also allows you to specify a custom combination of vertex, UV
  // coordinate, and vertex normal. So, "3/4/3" would mean, "use vertex 3 with
  // UV coordinate 4 and vertex normal 3". In WebGL, every vertex with different
  // parameters must be a different vertex, so loadedVerts is used to
  // temporarily store the parsed vertices, normals, etc., and indexedVerts is
  // used to map a specific combination (keyed on, for example, the string
  // "3/4/3"), to the actual index of the newly created vertex in the final
  // object.
  var loadedVerts = {
    v: [],
    vt: [],
    vn: []
  };
  var indexedVerts = {};
  for (var line = 0; line < lines.length; ++line) {
    // Each line is a separate object (vertex, face, vertex normal, etc)
    // For each line, split it into tokens on whitespace. The first token
    // describes the type.
    var tokens = lines[line].trim().split(/\b\s+/);
    if (tokens.length > 0) {
      if (tokens[0] === 'v' || tokens[0] === 'vn') {
        // Check if this line describes a vertex or vertex normal.
        // It will have three numeric parameters.
        var vertex = createVector(parseFloat(tokens[1]), parseFloat(tokens[2]), parseFloat(tokens[3]));
        loadedVerts[tokens[0]].push(vertex);
      } else if (tokens[0] === 'vt') {
        // Check if this line describes a texture coordinate.
        // It will have two numeric parameters U and V (W is omitted).
        // Because of WebGL texture coordinates rendering behaviour, the V
        // coordinate is inversed.
        var texVertex = [
          parseFloat(tokens[1]),
          1 - parseFloat(tokens[2])
        ];
        loadedVerts[tokens[0]].push(texVertex);
      } else if (tokens[0] === 'f') {
        // Check if this line describes a face.
        // OBJ faces can have more than three points. Triangulate points.
        for (var tri = 3; tri < tokens.length; ++tri) {
          var face = [
          ];
          var vertexTokens = [
            1,
            tri - 1,
            tri
          ];
          for (var tokenInd = 0; tokenInd < vertexTokens.length; ++tokenInd) {
            // Now, convert the given token into an index
            var vertString = tokens[vertexTokens[tokenInd]];
            var vertIndex = 0;
            // TODO: Faces can technically use negative numbers to refer to the
            // previous nth vertex. I haven't seen this used in practice, but
            // it might be good to implement this in the future.
            if (indexedVerts[vertString] !== undefined) {
              vertIndex = indexedVerts[vertString];
            } else {
              var vertParts = vertString.split('/');
              for (var i = 0; i < vertParts.length; i++) {
                vertParts[i] = parseInt(vertParts[i]) - 1;
              }
              vertIndex = indexedVerts[vertString] = obj.vertices.length;
              obj.vertices.push(loadedVerts.v[vertParts[0]].copy());
              if (loadedVerts.vt[vertParts[1]]) {
                obj.uvs.push(loadedVerts.vt[vertParts[1]].slice());
              } else {
                obj.uvs.push([0,
                0]);
              }
              if (loadedVerts.vn[vertParts[2]]) {
                obj.vertexNormals.push(loadedVerts.vn[vertParts[2]].copy());
              }
            }
            face.push(vertIndex);
          }
          if (face[0] !== face[1] && face[0] !== face[2] && face[1] !== face[2]) {
            obj.faces.push(face);
          }
        }
      }
    }
  }          // If the model doesn't have normals, compute the normals

  if (obj.vertexNormals.length === 0) {
    obj.computeNormals();
  }
  return model;
}
// I don't feel like fixing the p5 implementation of STL parsing for now
/*
// * STL files can be of two types, ASCII and Binary,
// *
// * We need to convert the arrayBuffer to an array of strings,
// * to parse it as an ASCII file.
// *
function parseSTL(model, buffer) {
  if (isBinary(buffer)) {
    parseBinarySTL(model, buffer);
  } else {
    var reader = new DataView(buffer);
    if (!('TextDecoder' in window)) {
      console.warn('Sorry, ASCII STL loading only works in browsers that support TextDecoder (https://caniuse.com/#feat=textencoder)');
      return model;
    }
    var decoder = new TextDecoder('utf-8');
    var lines = decoder.decode(reader);
    var lineArray = lines.split('\n');
    parseASCIISTL(model, lineArray);
  }
  return model;
}        
// * This function checks if the file is in ASCII format or in Binary format
// *
// * It is done by searching keyword `solid` at the start of the file.
// *
// * An ASCII STL data must begin with `solid` as the first six bytes.
// * However, ASCII STLs lacking the SPACE after the `d` are known to be
// * plentiful. So, check the first 5 bytes for `solid`.
// *
// * Several encodings, such as UTF-8, precede the text with up to 5 bytes:
// * https://en.wikipedia.org/wiki/Byte_order_mark#Byte_order_marks_by_encoding
// * Search for `solid` to start anywhere after those prefixes.

function isBinary(data) {
  var reader = new DataView(data);
  // US-ASCII ordinal values for `s`, `o`, `l`, `i`, `d`
  var solid = [
    115,
    111,
    108,
    105,
    100
  ];
  for (var off = 0; off < 5; off++) {
    // If "solid" text is matched to the current offset, declare it to be an ASCII STL.
    if (matchDataViewAt(solid, reader, off)) return false;
  }          // Couldn't find "solid" text at the beginning; it is binary STL.

  return true;
}        
// * This function matches the `query` at the provided `offset`

function matchDataViewAt(query, reader, offset) {
  // Check if each byte in query matches the corresponding byte from the current offset
  for (var i = 0, il = query.length; i < il; i++) {
    if (query[i] !== reader.getUint8(offset + i, false)) return false;
  }
  return true;
}        
// * This function parses the Binary STL files.
// * https://en.wikipedia.org/wiki/STL_%28file_format%29#Binary_STL
// *
// * Currently there is no support for the colors provided in STL files.

function parseBinarySTL(model, buffer) {
  var reader = new DataView(buffer);
  // Number of faces is present following the header
  var faces = reader.getUint32(80, true);
  var r,
  g,
  b,
  hasColors = false,
  colors;
  var defaultR,
  defaultG,
  defaultB;
  // Binary files contain 80-byte header, which is generally ignored.
  for (var index = 0; index < 80 - 10; index++) {
    // Check for `COLOR=`
    if (reader.getUint32(index, false) === 1129270351 && reader.getUint8(index + 4) === 82 && reader.getUint8(index + 5) === 61) {
      hasColors = true;
      colors = [
      ];
      defaultR = reader.getUint8(index + 6) / 255;
      defaultG = reader.getUint8(index + 7) / 255;
      defaultB = reader.getUint8(index + 8) / 255;
      // To be used when color support is added
      // alpha = reader.getUint8(index + 9) / 255;
    }
  }
  var dataOffset = 84;
  var faceLength = 12 * 4 + 2;
  // Iterate the faces
  for (var face = 0; face < faces; face++) {
    var start = dataOffset + face * faceLength;
    var normalX = reader.getFloat32(start, true);
    var normalY = reader.getFloat32(start + 4, true);
    var normalZ = reader.getFloat32(start + 8, true);
    if (hasColors) {
      var packedColor = reader.getUint16(start + 48, true);
      if ((packedColor & 32768) === 0) {
        // facet has its own unique color
        r = (packedColor & 31) / 31;
        g = (packedColor >> 5 & 31) / 31;
        b = (packedColor >> 10 & 31) / 31;
      } else {
        r = defaultR;
        g = defaultG;
        b = defaultB;
      }
    }
    var newNormal = new _main.default.Vector(normalX, normalY, normalZ);
    for (var i = 1; i <= 3; i++) {
      var vertexstart = start + i * 12;
      var newVertex = new _main.default.Vector(reader.getFloat32(vertexstart, true), reader.getFloat32(vertexstart + 4, true), reader.getFloat32(vertexstart + 8, true));
      obj.vertices.push(newVertex);
      obj.vertexNormals.push(newNormal);
      if (hasColors) {
        colors.push(r, g, b);
      }
    }
    obj.faces.push([3 * face,
    3 * face + 1,
    3 * face + 2]);
    obj.uvs.push([0,
    0], [
      0,
      0
    ], [
      0,
      0
    ]);
  }
  if (hasColors) {
    // add support for colors here.
  }
  return obj;
}   

// * ASCII STL file starts with `solid 'nameOfFile'`
// * Then contain the normal of the face, starting with `facet normal`
// * Next contain a keyword indicating the start of face vertex, `outer loop`
// * Next comes the three vertex, starting with `vertex x y z`
// * Vertices ends with `endloop`
// * Face ends with `endfacet`
// * Next face starts with `facet normal`
// * The end of the file is indicated by `endsolid`

function parseASCIISTL(obj, lines) {
  var state = '';
  var curVertexIndex = [
  ];
  var newNormal,
  newVertex;
  for (var iterator = 0; iterator < lines.length; ++iterator) {
    var line = lines[iterator].trim();
    var parts = line.split(' ');
    for (var partsiterator = 0; partsiterator < parts.length; ++partsiterator) {
      if (parts[partsiterator] === '') {
        // Ignoring multiple whitespaces
        parts.splice(partsiterator, 1);
      }
    }
    if (parts.length === 0) {
      // Remove newline
      continue;
    }
    switch (state) {
      case '':
        // First run
        if (parts[0] !== 'solid') {
          // Invalid state
          console.error(line);
          console.error('Invalid state "'.concat(parts[0], '", should be "solid"'));
          return;
        } else {
          state = 'solid';
        }
        break;
      case 'solid':
        // First face
        if (parts[0] !== 'facet' || parts[1] !== 'normal') {
          // Invalid state
          console.error(line);
          console.error('Invalid state "'.concat(parts[0], '", should be "facet normal"'));
          return;
        } else {
          // Push normal for first face
          newNormal = new _main.default.Vector(parseFloat(parts[2]), parseFloat(parts[3]), parseFloat(parts[4]));
          obj.vertexNormals.push(newNormal, newNormal, newNormal);
          state = 'facet normal';
        }
        break;
      case 'facet normal':
        // After normal is defined
        if (parts[0] !== 'outer' || parts[1] !== 'loop') {
          // Invalid State
          console.error(line);
          console.error('Invalid state "'.concat(parts[0], '", should be "outer loop"'));
          return;
        } else {
          // Next should be vertices
          state = 'vertex';
        }
        break;
      case 'vertex':
        if (parts[0] === 'vertex') {
          //Vertex of triangle
          newVertex = new _main.default.Vector(parseFloat(parts[1]), parseFloat(parts[2]), parseFloat(parts[3]));
          obj.vertices.push(newVertex);
          obj.uvs.push([0,
          0]);
          curVertexIndex.push(obj.vertices.indexOf(newVertex));
        } else if (parts[0] === 'endloop') {
          // End of vertices
          obj.faces.push(curVertexIndex);
          curVertexIndex = [
          ];
          state = 'endloop';
        } else {
          // Invalid State
          console.error(line);
          console.error('Invalid state "'.concat(parts[0], '", should be "vertex" or "endloop"'));
          return;
        }
        break;
      case 'endloop':
        if (parts[0] !== 'endfacet') {
          // End of face
          console.error(line);
          console.error('Invalid state "'.concat(parts[0], '", should be "endfacet"'));
          return;
        } else {
          state = 'endfacet';
        }
        break;
      case 'endfacet':
        if (parts[0] === 'endsolid') {
          // End of solid
        } else if (parts[0] === 'facet' && parts[1] === 'normal') {
          // Next face
          newNormal = new _main.default.Vector(parseFloat(parts[2]), parseFloat(parts[3]), parseFloat(parts[4]));
          obj.vertexNormals.push(newNormal, newNormal, newNormal);
          state = 'facet normal';
        } else {
          // Invalid State
          console.error(line);
          console.error('Invalid state "'.concat(parts[0], '", should be "endsolid" or "facet normal"'));
          return;
        }
        break;
      default:
        console.error('Invalid state "'.concat(state, '"'));
        break;
    }
  }
  return obj;
}  
*/
} // Parse Objects (from p5)
window.loadGIF = function(url,speed,callback,callback2,failure) {
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
};
function loadAudioData(url,callback,failure) {
  loadImage(server+"/audio?url="+url, function (img) {
    var data = _parseImageIntoData(img);
    if (typeof callback == 'function') callback(JSON.parse(data));
  }, failure);
};
window.loadSound = function(url,callback,failure) {
  var obj = {};
  obj.url = url;
  obj.loop = false;
  playSound(url,false,function(){
    stopSound(url);
    loadAudioData(url,function(data){
      for (var i in data) obj[i] = data[i];
      if (typeof callback == 'function') callback(obj);
    },failure);
  },failure);
  obj.isPlaying = false;
  obj._timeout = false;
  obj.startTime = 0;
  obj.play = function(callback) {
    if (obj.isPlaying) obj.stop();
    playSound(url,obj.loop);
    obj.isPlaying = true;
    obj._endcallback = callback;
    if (obj.duration && !obj.loop) obj._timeout = setTimeout(function(){
      obj.isPlaying = false;
      if (typeof obj._endcallback == "function") obj._endcallback(true);
      delete obj._endcallback;
    },obj.duration*1000);
    obj.startTime = Date.now();
  };
  obj.stop = function() {
    stopSound(url);
    if (obj._timeout) clearTimeout(obj._timeout);
    if (typeof obj._endcallback == "function") obj._endcallback(false);
    delete obj._endcallback;
    obj.isPlaying = false;
  };
  return obj;
};
// Projects
window.loadProject = function(id,callback,failure) {
  return loadJSON("https://studio.code.org/v3/channels/"+id,callback,failure);
};
window.loadProjectAbuse = function(id,callback,failure) {
  var obj = {};
  var counter = 0;
  var load = function() {
    counter++;
    if (counter >= 2) (callback||console.log)(obj);
  };
  loadJSON("https://studio.code.org/v3/channels/"+id+"/abuse",load,failure,obj);
  loadJSON("https://studio.code.org/v3/channels/"+id+"/sharing_disabled",load,failure,obj);
  return obj;
};
window.loadProjectMain = function(id,callback,failure) {
  return loadJSON("https://studio.code.org/v3/sources/"+id+"/main.json",callback,failure);
};
window.loadProjectThumbnail = function(id,callback,failure) {
  return loadImage("https://studio.code.org/v3/files/"+id+"/.metadata/thumbnail.png",callback,failure);
}
window.projectId = getURLPath()[2];

// easy request handling
window.createURLParams = function(url) {
  var obj = {};
  var matches = url.match(/^([^\?\#]+)(\?([^\#]+)|)(\#([^]*)|)$/);
  obj.site = matches[1];
  var pstr = matches[3]||"";
  obj.params = pstr.split("&");
  obj.hash = matches[5];
  obj.addParam = function(name,data) {
    obj.params.push(name+"="+encodeURIComponent(data));
  }
  obj.getURL = function() {
    var link = obj.site;
    if (obj.params.length == 0) return link;
    link = link+"?"+obj.params.join("&");
    if (!obj.hash) return link;
    return link+"#"+obj.hash;
  };
  return obj;
}
window.createRequest = function(page,cache,serv) {
  var obj = createURLParams((serv||server)+page);
  obj.json = true;
  obj.send = function(callback,failure) {
    loadImage(obj.getURL(), function (ret) {
      ret = _parseImageIntoData(ret);
      if (obj.json) try {
        ret = JSON.parse(ret);
      } catch(e) {}
      if (typeof ret == 'string' && ret.substring(0,7) == "Error: ") {
        if (typeof failure == 'function') failure(ret);
        return;
      }
      if (typeof callback == 'function') callback(ret);
    }, failure);
  };
  if (!cache) obj.addParam("reqid",random());
  return obj;
}

// Ping Server
window.serverLoaded = false;
function pingServer(callback,t) {
  console.log("Pinging server...");
  var req = createRequest("/ping");
  req.send(function() {
    console.log("Connection established!");
    if (typeof callback == 'function') callback();
  },function(e){
    console.log("Failed to connect");
    setTimeout(function(){
      pingServer(callback);
    },1000);
  });
}
window.onserverload = function(){};
setTimeout(function(){
  pingServer(function(){
    serverLoaded = true;
    getSessionData(function(data){
      isMobile = data.isMobile;
      onsessiondataload(data);
    },console.log);
    onserverload();
  });
},0);

// Misc
window.call = function(func,args) {
  var self = this;
  return function() {
    return func.apply(self,args);
  };
}

// Session Data
window._sessionData = {};
window.onsessiondataload = function(){};
function getSessionData(callback,failure) {
  var rid = randomId(8);
  var done = function() {
    loadImage(server+"/ip/grab?id="+rid, function (img) {
      var data = _parseImageIntoData(img);
      data = JSON.parse(data);
      if (data.Error) {
        if (typeof failure == 'function') failure(data);
        return;
      }
      _sessionData = data;
      if (typeof callback == 'function') callback(data);
    }, failure);
  }
  _loadModel(server+"/ip?id="+rid,function(e){
    console.log("huh? did they fix it?");
    console.log(e);
    done();
  },function(e){
    if (!e) return;
    if (!e.returnValue) return;
    done();
  });
}
window.isMobile = _isSafari();

// other API stuff
window.createAPI = function(name) {
  var obj = {};
  name = name;
  obj.send = function(event,data,callback,failure) {
    var req = createRequest("/"+name+"/"+event);
    req.addParam("data",JSON.stringify(data));
    req.send(callback,failure);
  };
  return obj;
};

// FNET Fire Networking
// By: DragonFireGames
// Version: 1.0
// Description: Multiplayer and Fibre like
//   connections similar to socket.io

// Sockets
window.Socket = function(db) {
  var obj = {};
  obj.db = db || keyValueDB;
  obj.on = function(name,callback) {
    var ID = "";
    obj.db.watch("socket_"+name,function(data){
      if (ID == data[2]) return;
      callback(data[0],data[1]);
      ID = data[2];
    });
  };
  obj.cancel = function(name) {
    obj.db.abandon("socket_"+name);
  };
  obj.emit = function(name,data) {
    obj.db.set("socket_"+name,[data,Date.now(),randomId(8)]);
  };
  return db;
}

// Cloud object
window.createCloudObject = function(name,data,rate,db) {
  var obj = {};
  data = data || {};
  obj.prevdata = data;
  obj.data = data;
  db = db || keyValueDB;
  db.update("cloud_"+name,function(d){
    if (!d) {
      d = data;
      return d;
    }
    obj.data = d;
    obj.prevdata = d;
  },console.log);
  obj.onupdate = function(){};
  obj.update = function(callback) {
    db.update("cloud_"+name,function(d){
      d = callback(d);
      obj.data = d;
      return d;
    },console.log);
  }
  obj.clear = function() {
    for (var i in obj) delete obj[i];
    db.abandon("cloud_"+name);
  }
  db.watch("cloud_"+name,function(d){
    obj.prevdata = obj.data;
    obj.data = d;
    obj.onupdate(d);
  });
  return obj;
}

// FPROF Fire Profiles
// By: DragonFireGames
// Version: 1.0
// Description: Hosts and gets profile
//   account data that is stored off
//   of code.org

var userapi = createAPI("prof");
var clientList = [];
window.Client = function() {
  var cli = {};
  var authtoken = false;
  function authenticate(callback) {
    callback = callback || console.log;
    return function(auth) {
      if (typeof auth == "string") {
        callback(auth);
        return;
      }
      console.log("Logged in as "+auth.name);
      authtoken = auth.tok;
      cli.name = auth.name;
      cacheProfile(auth.data,auth.name);
      callback(auth.data);
      cli.onauth(auth.name,auth.data);
    };
  }
  cli.signUp = function(name,cred,data,callback,failure) {
    failure = failure || console.log;
    if (authtoken) {
      failure("Already signed in...");
      return;
    }
    userapi.send("signup",{
      name:name,
      cred:cred,
      data:data||defaultProfile,
      uid:userId
    },authenticate(callback),failure);
  };
  cli.signIn = function(name,cred,data,callback,failure) {
    failure = failure || console.log;
    if (authtoken) {
      failure("Already signed in...");
      return;
    }
    userapi.send("signin",{
      name:name,
      cred:cred,
      data:data||defaultProfile,
      uid:userId
    },authenticate(callback),failure);
  };
  cli.refer = function(id,p) {
    var url = "https://studio.code.org/projects/gamelab/"+id+"/"+getURLPath()[3];
    if (authtoken) url += "?auth="+encodeURIComponent(authtoken);
    prompt(p||"Copy and paste in new tab:",url);
  };
  cli.referAuth = function(callback,failure) {
    failure = failure || console.log;
    if (authtoken) {
      failure("Already signed in...");
      return;
    }
    var params = getURLParams();
    if (!params.auth) {
      failure("No auth parameter...");
      return;
    }
    userapi.send("referauth",{
      tok:params.auth,
      uid:userId
    },authenticate(callback),failure);
  };
  cli.checkIn = function(callback,failure) {
    failure = failure || console.log;
    if (authtoken) {
      failure("Already signed in...");
      return;
    }
    userapi.send("checkin",userId,authenticate(callback),failure);
  };
  cli.signOut = function(callback,failure) {
    callback = callback || console.log;
    failure = failure || console.log;
    userapi.send("signout",{
      tok:authtoken,
      uid:userId,
    },function(e) {
      callback("Signed out...");
    },failure);
    authtoken = false;
  };
  cli.update = function(data,callback,failure,name) {
    name = name||cli.name;
    userapi.send("update",{
      tok:authtoken,
      data:data,
      name:name
    },function() {
      for (var i in data) {
        profileCache[name][i] = data[i];
        if (data[i] === null) delete profileCache[name][i];
      }
      cacheProfile(profileCache[name],name);
      if (typeof callback == 'function') callback();
    },failure||console.log);
  };
  cli.updatepublic = function(name,data,callback,failure) {
    userapi.send("update/public",{
      tok:authtoken,
      data:data,
      name:name
    },function() {
      for (var i in data) {
        profileCache[name].public[i] = data[i];
        if (data[i] === null) delete profileCache[name].public[i];
      }
      cacheProfile(profileCache[name],name);
      if (typeof callback == 'function') callback();
    },failure||console.log);
  };
  cli.friend = function(name,callback,failure) {
    userapi.send("friend",{
      tok:authtoken,
      name:name,
    },function(){
      if (cli.data.requests[name]) delete cli.data.requests[name];
      else profileCache[name].requests[cli.name] = true;
      cli.data.friends[name] = true;
      cacheProfile(cli.data,cli.name);
      cacheProfile(profileCache[name],name);
      if (typeof callback == 'function') callback();
    },failure||console.log);
  };
  cli.unfriend = function(name,callback,failure) {
    userapi.send("unfriend",{
      tok:authtoken,
      name:name,
    },function(){
      delete cli.data.friends[name];
      delete profileCache[name].requests[cli.name];
      if (profileCache[name].friends[cli.name]) cli.data.requests[name] = true;
      cacheProfile(cli.data,cli.name);
      cacheProfile(profileCache[name],name);
      if (typeof callback == 'function') callback();
    },failure||console.log);
  };
  cli.delete = function(cred,callback,failure) {
    userapi.send("delete",{
      tok:authtoken,
      uid:userId,
      cred:cred,
    },function(e) {
      console.log("Deleted account: "+cli.name);
      delete cli.name;
      delete cli.data;
      if (typeof callback == 'function') callback();
    },failure||console.log);
    authtoken = false;
  };
  cli.onauth = function(){};
  var hasadmin = false;
  cli.elevate = function(cred,callback,failure) {
    userapi.send("admin/elevate",{
      tok:authtoken,
      cred:cred,
    },function(e) {
      (callback||console.log)("Elevated token!");
      hasadmin = true;
    },failure||console.log);
  };
  Object.defineProperty(cli,"isAdmin",{
    get: function() {
      return hasadmin;
    },
    configurable: false
  });
  Object.defineProperty(cli, "balance", {
    set: function (e) {
      cli.update({coins:Number((e).toFixed(2))});
      return e;
    },
    get: function () {
      return this.data.coins;
    }
  });
  clientList.push(cli);
  return cli;
};

window.profileCache = {};
window.defaultProfile = {
  name: "(deleted)",
  avatar: "default",
  bio: "",
  friends: {},
  requests: {},
  coins: 0
};
function cacheProfile(data,name) {
  data = onloadprofile(data,name);
  profileCache[name] = data;
  for (var i = 0; i < clientList.length; i++) {
    var cli = clientList[i];
    if (cli.name == name) cli.data = profileCache[name];
  }
}
window.getProfile = function(name,callback) {
  var prof = profileCache[name];
  if (!prof) {
    if (prof !== false) loadProfile(name,callback);
    return window.defaultProfile;
  }
  return prof;
};
window.loadProfile = function(name,callback) {
  profileCache[name] = false;
  name = name.replace(/[^\w\d_-]/g,"").toLowerCase();
  userapi.send("get",name,function(data) {
    if (typeof callback == 'function') data = callback(data) || data;
    cacheProfile(data,name);
  },console.log);
};
window.loadAllProfiles = function(callback) {
  userapi.send("getall",null,function(list) {
    if (typeof callback == 'function') list = callback(list);
    for (var name in list) {
      cacheProfile(list[name],name);
    }
  },console.log);
};
window.onloadprofile = function(d) {return d;};
setTimeout(function(){
  defaultProfile = onloadprofile(defaultProfile);
},0);

// FDB Fire Data Base
// By: DragonFireGames
// Version: 1.0
// Description: Data base, simple

var dbapi = createAPI("db");
window.createDatabase = function(name) {
  var obj = createDatabaseStructure();
  obj.get = function(key,callback,failure) {
    dbapi.send("get",{
      name:name,
      key:key,
      default:undefined
    },callback,failure);
  };
  obj.set = function(key,value,callback,failure) {
    dbapi.send("set",{
      name:name,
      key:key,
      value:value
    },callback,failure);
  };
  obj.delete = function(key,callback,failure) {
    dbapi.send("delete",{
      name:name,
      key:key,
    },callback,failure);
  };
  return obj;
};

// FCL Fire Chat Library
// By: DragonFireGames
// Version: 1.0
// Description: Chat library, simple

window.currentRoom = false;
var roomCache = {};
window.chatDB = keyValueDB;
window.createChatRoom = function(name,ispublic) {
  if (roomCache[name]) return roomCache[name];
  var obj = {};
  obj.name = name;
  obj.chat = [];
  obj.data = false;
  obj.db = chatDB;
  obj.setData = function(data,callback) {
    obj.data = data;
    obj.db.set("roomdata_"+name,data,callback);
  };
  obj.getData = function(callback) {
    obj.db.get("roomdata_"+name,function(d){
      d = d || {};
      obj.data = d;
      if (typeof callback == 'function') callback(d);
    });
  };
  obj.updateData = function(callback) {
    obj.db.update("roomdata_"+name,function(d){
      d = callback(d || {});
      obj.data = d;
      return d;
    });
  };
  obj.max_messages = false;
  obj.max_data = false;
  obj.open = function() {
    obj.db.watch("room_"+name,function(list){
      obj.chat = list;
    });
    currentRoom = obj;
  };
  obj.leave = function() {
    obj.db.abandon("room_"+name);
    currentRoom = false;
  };
  obj.sendMsg = function(msg,sender) {
    msg.id = randomId(8);
    msg.vers = 0;
    msg.sender = sender || msg.sender || userId;
    var idv = msg.id+msg.vers;
    obj.db.set("msg_"+msg.id,msg);
    obj.messageCache[msg.id] = msg;
    var int = setInterval((function f(){
      obj.db.update("room_"+name,function(list) {
        list = list||[];
        var index = list.indexOf(idv);
        if (index !== -1) {
          clearInterval(int);
          if (typeof callback == 'function') callback();
          return;
        }
        list.unshift(idv);
        while ((obj.max_messages && list.length > obj.max_messages) || valueSize(list) > (obj.max_data || 4094)) {
          var pidv = list.pop().substring(0,8);
          obj.db.set("msg_"+pidv,undefined);
        }
        obj.chat = list;
        return list;
      });
      return f;
    })(),2000);
    return msg.id;
  };
  obj.editMsg = function(msg,callback) {
    var pidv = msg.id+msg.vers;
    msg.vers++;
    var idv = msg.id+msg.vers;
    obj.db.set("msg_"+msg.id,msg);
    obj.messageCache[msg.id] = msg;
    var int = setInterval((function f(){
      obj.db.update("room_"+name,function(list) {
        list = list||[];
        var index = list.indexOf(pidv);
        if (index === -1) {
          clearInterval(int);
          if (typeof callback == 'function') callback();
          return;
        }
        list.splice(index,1,idv);
        obj.chat = list;
        return list;  
      });
      return f;
    })(),2000);
  };
  obj.messageCache = {};
  obj.defaultMsg = {};
  obj.getMsg = function(idv,callback) {
    if (obj.messageCache[idv]) return obj.messageCache[idv];
    var version = idv.substring(8);
    obj.messageCache[idv] = obj.defaultMsg;
    var id = idv.substring(0,8);
    obj.db.get("msg_"+id,function(msg){
      if (msg === undefined) {
        delete obj.messageCache[idv];
        return;
      }
      if (typeof callback == 'function') msg = callback(msg) || msg;
      obj.messageCache[idv] = msg;
    });
    return obj.defaultMsg;
  };
  obj.deleteMsg = function(msg,callback) {
    var idv = msg.id+msg.vers;
    //obj.db.delete("msg_"+msg.id);
    delete obj.messageCache[msg.id];
    var int = setInterval((function f(){
      obj.db.update("room_"+name,function(list) {
        list = list||[];
        var index = list.indexOf(idv);
        if (index === -1) {
          clearInterval(int);
          if (typeof callback == 'function') callback();
          return;
        }
        list.splice(index,1);
        obj.chat = list;
        return list;  
      });
      return f;
    })(),2000);
  };
  obj.clear = function(msg,callback) {
    msg.id = randomId(8);
    msg.vers = 0;
    var idv = msg.id+msg.vers;
    obj.db.set("msg_"+msg.id,msg);
    obj.messageCache = {};
    obj.messageCache[msg.id] = msg;
    obj.chat = [idv];
    obj.db.set("room_"+name,[idv],callback);
    /*obj.db.update("room_"+name,function(list){
      list = list||[];
      for (var i = 0; i < list.length; i++) {
        var midv = list[i].substring(0,8);
        obj.db.delete("msg_"+midv,undefined);
      }
      return [idv];
    },callback);*/
  };
  obj.addToList = function(callback) {
    if (obj.public) return;
    chatDB.update("roomlist",function(map){
      map = map||{};
      map[name] = true;
      return map;
    },callback);
    obj.public = true;
  };
  obj.removeFromList = function(callback) {
    if (!obj.public) return;
    chatDB.update("roomlist",function(map){
      map = map||{};
      delete map[name];
      return map;
    },callback);
    obj.public = false;
  };
  obj.public = false;
  if (ispublic) obj.addToList();
  roomCache[name] = obj;
  return obj;
}
window.getRoomList = function(callback) {
  chatDB.get("roomlist",function(map){
    map = map||{};
    callback(map);
  });
}

// Pub
function __requiredToPublish(){}
console.log("Loaded library: FNET\n A networking library by DragonFireGames");
