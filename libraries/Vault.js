//A system for making projects only practically unhackable
//Or, of course, by some other method I don't know of.

//By @Ravage
//Library ID: zNm476rc42hexdCyJDhiAQYI6eqWRqOF12IGk-pA_YU
//Massive problem fixed by @DragonFireGames (creator of FCR)

// Known to block:
// gamelab console hacking
// /view & //edit hacking

//Also, don't forget to block the data browser.

//Block AppLab.
if(window.startWebRequest){
  for(var i in window) delete window[i];
  throw "As of now, Vault cannot work on AppLab."; //because of getURL being the only way to detect //edit as I know of
}

//Learnt RegExp to do this - #swag
var e = window.getURL().replace(/[?].*$/i, "").replace(/[#].*$/i, "").replace(/\/*$/g, "");
var p = window.getURLPath();
var isApplab = !!window.startWebRequest;


//Block if URL is not in normal mode, or does not end in /edit
if(!(!p[3] || e.substr(-(p[2].length+5), p[2].length+5) == p[2]+"/edit")){prompt("This is not allowed. Please go to normal mode.");for (var i in window) {delete window[i];} throw "Not Allowed";}

//MD5 Hash - Ron Rivest
!function(emd){function j(r) {var o, e, n, f = [ -680876936, -389564586, 606105819, -1044525330, -176418897, 1200080426, -1473231341, -45705983, 1770035416, -1958414417, -42063, -1990404162, 1804603682, -40341101, -1502002290, 1236535329, -165796510, -1069501632, 643717713, -373897302, -701558691, 38016083, -660478335, -405537848, 568446438, -1019803690, -187363961, 1163531501, -1444681467, -51403784, 1735328473, -1926607734, -378558, -2022574463, 1839030562, -35309556, -1530992060, 1272893353, -155497632, -1094730640, 681279174, -358537222, -722521979, 76029189, -640364487, -421815835, 530742520, -995338651, -198630844, 1126891415, -1416354905, -57434055, 1700485571, -1894986606, -1051523, -2054922799, 1873313359, -30611744, -1560198380, 1309151649, -145523070, -1120210379, 718787259, -343485551 ], t = [ o = 1732584193, e = 4023233417, ~o, ~e ], c = [], a = unescape(encodeURI(r)) + "\u0080", d = a.length;for (r = --d / 4 + 2 | 15, c[--r] = 8 * d; ~d; ) c[d >> 2] |= a.charCodeAt(d) << 8 * d--;for (i = a = 0; i < r; i += 16){for (d = t; 64 > a; d = [ n = d[3], o + ((n = d[0] + [ o & e | ~o & n, n & o | ~n & e, o ^ e ^ n, e ^ (o | ~n) ][d = a >> 4] + f[a] + ~~c[i | 15 & [ a, 5 * a + 1, 3 * a + 5, 7 * a ][d]]) << (d = [ 7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21 ][4 * d + a++ % 4]) | n >>> -d), o, e ]) o = 0 | d[1], e = d[2];for (a = 4; a; ) t[--a] += d[a]}for (r = ""; 32 > a; ) r += (t[a >> 3] >> 4 * (1 ^ a++) & 15).toString(16);return r}((typeof define) =="function"?define.amd:((typeof module)=="string"?((typeof module)=="function"?module.ad3:module.exports):emd.md5=j))}(this); (function(e,g,i){e=window[e];e(g,true);e(i,undefined);e(g,false);})("\x5F\x73\x65\x74\x50\x72\x6F\x70\x65\x72\x74\x79","\x5F\x69\x73\x47\x6C\x6F\x62\x61\x6C","\x5F\x5F\x6D\x6F\x73\x74\x52\x65\x63\x65\x6E\x74\x47\x61\x6D\x65\x4C\x61\x62\x49\x6E\x73\x74\x61\x6E\x63\x65");

window.constant = function(name,value,target) {
  try {
    Object.defineProperty(target||this,name,{
      value: value,
      writable: false
    });
  } catch(e) {};
};
var userId = getUserId(true);
Object.defineProperties(window, {
  uid: {
    value: window.md5(userId),
    writable: false
  },
  md5: {
    value: window.md5,
    writable: false
  },
  getUserId: {
    value: function(){return window.uid;},
    writable: false
  },
  _getUserId: {
    value: getUserId,
    writable: false
  },
  getURLPath: {
    value: getURLPath,
    writable: false
  },
  constant: {
    value: constant,
    writable: false
  }
});

//Protects your project from remixes.
//<id> - channel id of original project
//<disable> - if set to true, disables keyValues for remixes
//<block> - if set to true, blocks remixes
function remixProtect(id, disable, block){
  if(p[2]!=id){
    prompt("This is a remix. The original version is at: \nhttps://studio.code.org/projects/"+isApplab?"applab":"gamelab"+id);
    if(disable){
      Object.defineProperties(window, {
        setKeyValue: {
          value: function(){console.log("setKeyValue is disabled.")},
          writable: false
        },
        getKeyValue: {
          value: function(){console.log("getKeyValue is disabled.")},
          writable: false
        }
      });
    }
    if (block) {
      for (var i in window) {
        delete window[i];
      }
      throw "No remixes";
    }
  }
}
// View counter
getKeyValue("project_views",function(v){
  v = v || 0;
  v++;
  console.log("Thanks for "+v+" views!");
  setKeyValue("project_views",v);
});

console.log("Loaded library: Vault\n A security library by Ravage & DragonFireGames");
