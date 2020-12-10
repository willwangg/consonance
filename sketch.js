var letters = ['a','b','c','d','e','f','g','h','i',
'j','k','l', 'm','n','o','p','q','r','s','t','u','v','w',
'x','y','z'];
var images = [];

var first,second,third;
var speechRec, speechRec2, speechRec3;
var continuous, interim;
var playB;
var imageStartX = 250;
var next1,next2,guessB,back;
var yes, no1, no2, no3;
var rightImg;

function preload() {
  for (var i = 1; i < 27; i++) {
    images[i] = loadImage("img/img" + i + '.jpg');
  }
}

p5.SpeechRec.prototype.stop = function()  {
  if('webkitSpeechRecognition' in window) {
    this.rec.stop();
  }
};

function setup() {
  clear();
  createCanvas(windowWidth, windowHeight);
  background(255,255,255);
  preload();
  
  //speech recognition obejct with callback
  speechRec = new p5.SpeechRec('en-US',gotSpeechfirst);
  textAlign(CENTER);
  textSize(40);
  text('How to Play?', windowWidth/2, 200);
  textSize(24);
  textAlign(CENTER)
  text('Say a Word', windowWidth/2, 250);
  text('Remeber the Shapes', windowWidth/2, 285);
  text('Guess the Letter!', windowWidth/2, 320);
  playB = createButton('play');
  playB.center();
  playB.mousePressed(firstTrial);
  
}

function gotSpeechfirst() {
  print("entered GotSPeechFirst");
  console.log(speechRec);
  if (speechRec.resultValue) {
    first = speechRec.resultString;
    //text(first, 200, 200);
  };
  clear();
  textAlign(CENTER);
  textSize(32);
  text('Remember the shapes! You said: ' + first + '. Click Next when ready.', windowWidth/2, 100);
    //looping each letter of first word
    for(i = 0; i < first.length; i++) {
      //Checking the char with each letter of the char array
      for(y = 0; y < 26; y++) {
        
        if(first.charAt(i) == letters[y]) {
          console.log("i is" + i + " and y ix" + y);
          image(images[y+1], imageStartX, 200, 100, 100);
          console.log("printed" + "image" + y+1);
          imageStartX+=100;
        }
      }
    }
  next1 = createButton('next round');
  next1.center();
  next1.mousePressed(secondTrial);
  //speechRec.prototype.stop();
}

function firstTrial() {
  // put drawing code here
  clear();
  textAlign(CENTER);
  textSize(40);
  text('Round One (1/3)', windowWidth/2, 150);
  playB.hide();
  continuous = false;
  interim = false;
  speechRec.start(continuous,interim);
  console.log("hello");
}

function secondTrial() {
  clear();
  textAlign(CENTER);
  textSize(40);
  text('Round Two (2/3)', windowWidth/2, 150);
  imageStartX = 250;
  speechRec2 = new p5.SpeechRec('en-US',gotSpeechsecond);
  next1.hide();
  continuous = false;
  interim = false;
  speechRec2.start(continuous,interim);
  console.log("hello2");
}

function gotSpeechsecond() {
  print("entered GotSpeechSecond");
  console.log(speechRec2);
  clear();

  if (speechRec2.resultValue) {
    second = speechRec2.resultString;
    //text(first, 200, 200);
  };
  textAlign(CENTER);
  textSize(32);
  text('Remember the shapes! You said: ' + second + '. Click Next when ready.', windowWidth/2, 100);
    //looping each letter of first word
    for(i = 0; i < second.length; i++) {
      //Checking the char with each letter of the char array
      for(y = 0; y < 26; y++) {
        if(second.charAt(i) == letters[y]) {
          console.log("i is" + i + " and y ix" + y);
          image(images[y+1], imageStartX, 200, 100, 100);
          console.log("printed" + "image" + y+1);
          imageStartX+=100;
        }
      }
    }

  next2 = createButton('next round');
  next2.center();
  next2.mousePressed(thirdTrial);
}

function thirdTrial() {
  clear();
  textAlign(CENTER);
  textSize(40);
  text('Last Round (3/3)', windowWidth/2, 150);
  imageStartX = 250;
  speechRec3 = new p5.SpeechRec('en-US',gotSpeechthird);
  next2.hide();
  continuous = false;
  interim = false;
  speechRec3.start(continuous,interim);
  console.log("hello3");
}

function gotSpeechthird() {
  print("entered GotSpeechSecond");
  console.log(speechRec3);
  clear();

  if (speechRec3.resultValue) {
    third = speechRec3.resultString;
    //text(first, 200, 200);
  };
  textAlign(CENTER);
  textSize(32);
  text('Remember the shapes! You said: ' + third + '. Click Next when ready.', windowWidth/2, 100);
    //looping each letter of first word
    for(i = 0; i < third.length; i++) {
      //Checking the char with each letter of the char array
      for(y = 0; y < 26; y++) {
        if(third.charAt(i) == letters[y]) {
          console.log("i is" + i + " and y ix" + y);
          image(images[y+1], imageStartX, 200, 100, 100);
          console.log("printed" + "image" + y+1);
          imageStartX+=100;
        }
      }
    }

  guessB = createButton('guess!');
  guessB.center();
  guessB.mousePressed(guess);
}

function guess() {
  clear();
  guessB.hide();
  textAlign(CENTER);
  textSize(32);
  text("What is the letter '" + second.charAt(0) + "' ?", windowWidth/2, 150);
  let oops = random(0, first.length);
  let haha = random(0, second.length);
  let lol = random(0, third.length);
  while((first.charAt(oops) == second.charAt(0)) || (second.charAt(haha) == second.charAt(0))
  && (third.charAt(lol) || second.charAt(0))) {
    oops = random(0, first.length);
    haha = random(0, second.length);
    lol = random(0, third.length);
  }
  for (i=0;i<26;i++) {
    if (first.charAt(oops) == letters[i]) {
      image(images[i+1], 550, 250, 100, 100);
      
    }
    if (second.charAt(0) == letters[i]) {
      image(images[i+1], 750, 250, 100, 100);
      rightImg = i+1;
    }
    if (second.charAt(haha) == letters[i]) {
      image(images[i+1], 550, 350, 100, 100);
    }
    if (third.charAt(lol) == letters[i]) {
      image(images[i+1], 750, 350, 100, 100);
    }
  }

  no1 = createButton('choose');
  no1.position(550,250);
  no2 = createButton('choose');
  no2.position(550,350);
  no3 = createButton('choose');
  no3.position(750,350);
  yes = createButton('choose');
  yes.position(750,250);

  no1.mousePressed(lose);
  no2.mousePressed(lose);
  no3.mousePressed(lose);
  yes.mousePressed(win)
  
}

function changeCursor() {
  cursor('pointer');
}

function lose() {
  clear();
  no1.hide()
  no2.hide()
  no3.hide()
  yes.hide()
  textAlign(CENTER);
  textSize(42);
  text('Uh-Oh!', windowWidth/2, 150);
  textSize(24);
  text('wrong, it was:', windowWidth/2, 350);
  image(yes, windowWidth/2, 350, 100, 100);

  back = createButton('start over');
  back.position(windowWidth/2, 750);
  back.mousePressed(setup);
}

function win() {
  clear();
  no1.hide()
  no2.hide()
  no3.hide()
  yes.hide()
  textAlign(CENTER);
  textSize(42);
  text('WOW!', windowWidth/2, 150);
  textAlign(CENTER);
  textSize(24);
  text('You were right! It was:', windowWidth/2, 350);
  image(images[rightImg], windowWidth/2, 550, 100, 100);

  back = createButton('start over');
  back.position(windowWidth/2-50, 750);
  back.mousePressed(setup);
  back.mousePressed(hide());
}