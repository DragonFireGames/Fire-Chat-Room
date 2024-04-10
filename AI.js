// DragonFireGames Special:

//var textModel = "bigcode/starcoder";
var textModel = "mistralai/Mistral-7B-Instruct-v0.2";
//var textModel = "gpt2";

var textModelParameters = {
  //top_k: 0,
  //top_p: 0,
  temperature: 1.0,
  repetition_penalty: 1.3,
  //max_new_tokens: 20,
  //max_time: 0,
  return_full_text: false, // Keep true
  //num_return_sequences: 2,
  //do_sampling: 0,
};

//var imageModel = "runwayml/stable-diffusion-v1-5";
var imageModel = "stabilityai/stable-diffusion-xl-base-1.0";
//var imageModel = "nerijs/pixel-art-xl";

var imageModelParameters = {
  // Could not find api documentation, left blank for now.
};

var audioModel = "facebook/musicgen-small";

var audioModelParameters = {
  // Could not find api documentation, left blank for now.
};

// Send to text generation model and get text prediction
function gentext(input,callback,failure) {
  if (!input) return;
  var options = {
    inputs: input,
    parameters: textModelParameters,
    options: {
      use_cache: true,
      wait_for_model: true
    }
  };
  return generateText(textModel,options,function(e){
    console.log(e);
    (callback||console.error)(e);
  },function (error) {
    prompt("Error generating",error);
    (failure||console.error)(error);
  });
}

// Send to image generation model and get image
function genimage(input,callback,failure) {
  var options = {
    inputs: input,
    parameters: imageModelParameters,
    options: {
      use_cache: true,
      wait_for_model: true
    }
  };
  return generateImage(imageModel,options,callback,function (error) {
    prompt("Error generating",error);
    (failure||console.error)(error);
  });
}

// Send to audio generation model and get audio
function genaudio(input,callback,failure) {
  var options = {
    inputs: input+"\u200BPreview",
    parameters: audioModelParameters,
    options: {
      use_cache: true,
      wait_for_model: true
    }
  };
  return generateAudio(audioModel,options,callback,function (error) {
    prompt("Error generating",error);
    (failure||console.error)(error);
  });
}
// Try "a chill song with influences from lofi, chillstep and downtempo"

//
var currentImage, currentAudio;
function draw() {
  background(242);
  format(200,0,1);
  rect(205,107.5,185,185);
  if (currentImage) {
    image(currentImage.image,205,107.5,185,185);
    if (mouseRect(205,107.5,185,185) && mouseWentDown('left')) {
      prompt("Link to image",currentImage.src);
    }
  }
  rect(205,302.5,185,87.5);
  FGUI.draw();
}


var textdiv = createElement(10,10,380,87.5);
textdiv.addComponent("div");
textdiv.style.fill = 255;

var textbox = createElement(0,0,380,87.5);
textbox.addComponent("input");
textbox.style.fill = false;
textbox.style.stroke = false;
textdiv.appendChild(textbox);
textbox.placeholder = "Text prompt, press enter to generate more text";
textbox.generating = false;
textbox.validateinput = function(i) {
  if (textbox.generating) return false;
  if (i == "\n" && !keyDown(SHIFT)) {
    textbox.generating = true;
    textbox.style.fill = 200;
    var p = textbox.value;
    //p = p.substring(textbox.cursorPos-100,textbox.cursorPos);
    gentext(p,function(o) {
      o = o[0].generated_text;
      textbox.style.fill = 255;
      textbox.generating = false;
      textbox._value = textbox._value.substring(0, textbox.cursorPos) + o + textbox._value.substring(textbox.cursorPos, textbox._value.length);
      textbox.cursorPos += o.length;
      textbox.update(o);
    });
    return false;
  }
}
textbox.oninput = function() {
  textbox.height = max(87.5,textbox.textHeight+5);
  textdiv.maxScrollY = max(textbox.height-textdiv.height,0);
};

var imagebox = createElement(10,107.5,185,185);
imagebox.addComponent("input");
imagebox.style.fill = 255;
imagebox.placeholder = "Image prompt, press enter to generate image";
imagebox.generating = false;
imagebox.validateinput = function(i) {
  if (imagebox.generating) return false;
  if (i == "\n" && !keyDown(SHIFT)) {
    imagebox.generating = true;
    imagebox.style.fill = 200;
    currentImage = genimage(imagebox.value,function(o) {
      imagebox.style.fill = 255;
      imagebox.generating = false;
    });
    return false;
  }
}

var audiobox = createElement(10,302.5,185,87.5);
audiobox.addComponent("input");
audiobox.style.fill = 255;
audiobox.placeholder = "Music prompt, press enter to generate audio";
audiobox.generating = false;
audiobox.validateinput = function(i) {
  if (audiobox.generating) return false;
  if (i == "\n" && !keyDown(SHIFT)) {
    audiobox.generating = true;
    audiobox.style.fill = 200;
    genaudio(audiobox.value,function(o) {
      currentAudio = o.audio;
      audiobox.style.fill = 255;
      audiobox.generating = false;
      audioLink.visible = true;
      audioLink.url = o.src;
      audioPlayer.visible = true;
    });
    return false;
  }
}

var soundIcon = loadImage("https://cdn-icons-png.flaticon.com/512/347/347794.png");
var pauseIcon = loadImage("https://cdn-icons-png.flaticon.com/512/16/16427.png");
var playIcon = loadImage("https://cdn-icons-png.flaticon.com/512/0/375.png");

var audioPlayer = createElement(205+185/4-25,302.5+87.5/2-25,50,50);
audioPlayer.addComponent("link","");
audioPlayer.icon = playIcon;
audioPlayer.visible = false;
audioPlayer.playing = false;
audioPlayer.onclick = function(a) {
  if (audioPlayer.playing) {
    if (currentAudio.isPlaying) {
      currentAudio.isPlaying = false;
      currentAudio.stop();
    }
    audioPlayer.icon = playIcon;
  } else {
    currentAudio.play(audioPlayer.onclick);
    audioPlayer.icon = pauseIcon;
  }
  audioPlayer.playing = !audioPlayer.playing;
};

var audioLink = createElement(205+3*185/4-25,302.5+87.5/2-25,50,50);
audioLink.addComponent("link","");
//audioLink.icon = soundIcon;
audioLink.visible = false;

//setServer("https://5beb092a-506d-48b0-b8c7-756ee8262e7f-00-31375u6hjf5ak.picard.replit.dev");
//setServer("https://5beb092a-506d-48b0-b8c7-756ee8262e7f-00-31375u6hjf5ak.picard.repl.co");
