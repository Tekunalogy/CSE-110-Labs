// script.js

//Buttons
const generate = document.querySelector('button[type="submit"]');
const clear = document.querySelector('button[type="reset"]'); 
const read = document.querySelector('button[type="button"]');

//LOAD VOICES
var voices = []
voices = speechSynthesis.getVoices();

const img = new Image(); // used to load image from <input> and draw to canvas
const canvas = document.getElementById("user-image");
const ctx = canvas.getContext('2d');
// Fires whenever the img object loads a new image (such as with img.src =)
img.addEventListener('load', () => {
  generate.disabled = false;
  clear.disabled = true;
  read.disabled = true;
  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const dim = getDimmensions(canvas.width, canvas.height, img.width, img.height);
  ctx.drawImage(img, dim.startX, dim.startY, dim.width, dim.height)

  document.getElementById('generate-meme').reset();
});

const img_input = document.getElementById('image-input');
img_input.addEventListener('change', (event) => {
  const objectURL = URL.createObjectURL(event.target.files[0])
  img.src = objectURL;
  canvas.setAttribute('alt', objectURL);
})


//Inputs
const top_text = document.getElementById('text-top');
const bottom_text = document.getElementById('text-bottom');

//voice
const voice_select = document.getElementById('voice-selection');

//Enable Voices Dropdown
setTimeout(populateVoiceList, 100);

generate.addEventListener('click', event => {
  event.preventDefault(); //Prevents the page from refreshing on button click
  
  ctx.fillStyle = "white";
  ctx.font = '50px Impact';
  ctx.textAlign="center";
  ctx.textBaseline="middle";
  
  const x_center = 210;
  //Top Text
  ctx.strokeText(top_text.value, x_center, 50);
  ctx.fillText(top_text.value, x_center, 50);

  //Bottom Text
  ctx.strokeText(bottom_text.value, x_center, canvas.height - 40); //Fix Centering
  ctx.fillText(bottom_text.value, x_center, canvas.height - 40);   //Fix Centering
  
  //Disable and Enable appropriate buttons
  generate.disabled = true;
  clear.disabled = false;
  read.disabled = false;

  return false;
});

//Event for when the clear button is clicked
clear.addEventListener('click', event => {
  generate.disabled = false;
  clear.disabled = true;
  read.disabled = true;
  //Clear canvas
  ctx.clearRect(0,0,canvas.width,canvas.height);
})


function populateVoiceList() {
  voices = speechSynthesis.getVoices();
  voice_select.remove(0);

  //from mozilla speechsynthesis API
  for(var i = 0; i < voices.length; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    document.getElementById('voice-selection').appendChild(option);
  }
  voice_select.disabled = false;
}

const volume = document.getElementsByTagName("img")[0];
const slider = document.querySelector('input[type="range"]');


//Event for when the Read Text button is clicked
read.addEventListener('click', event => {
  let speakTop = new SpeechSynthesisUtterance(top_text.value);
  speakTop.volume = slider.value * 0.01;
  let speakBottom = new SpeechSynthesisUtterance(bottom_text.value);
  speakBottom.volume = slider.value * 0.01;
  var selectedVoice = voice_select.selectedOptions[0].getAttribute('data-name');
  for(var i = 0; i < voices.length; ++i) {
    if(voices[i].name === selectedVoice) {
      speakTop.voice = voices[i];
      speakBottom.voice = voices[i];
    }
  }
  speechSynthesis.speak(speakTop);
  speechSynthesis.speak(speakBottom);
})


slider.addEventListener('input', value => { 
  console.log(Number(slider.value) > 0 && Number(slider.value) < 34)
  if(Number(slider.value) == 0){volume.src = "icons/volume-level-0.svg"}
  if(Number(slider.value) > 0 && Number(slider.value) < 34){volume.src = "icons/volume-level-1.svg"}
  if(Number(slider.value) > 33 && Number(slider.value) < 67){volume.src = "icons/volume-level-2.svg"}
  if(Number(slider.value) > 66 && Number(slider.value) < 101){volume.src = "icons/volume-level-3.svg"}
});


/**
 * Takes in the dimensions of the canvas and the new image, then calculates the new
 * dimensions of the image so that it fits perfectly into the Canvas and maintains aspect ratio
 * @param {number} canvasWidth Width of the canvas element to insert image into
 * @param {number} canvasHeight Height of the canvas element to insert image into
 * @param {number} imageWidth Width of the new user submitted image
 * @param {number} imageHeight Height of the new user submitted image
 * @returns {Object} An object containing four properties: The newly calculated width and height,
 * and also the starting X and starting Y coordinate to be used when you draw the new image to the
 * Canvas. These coordinates align with the top left of the image.
 */
function getDimmensions(canvasWidth, canvasHeight, imageWidth, imageHeight) {
  let aspectRatio, height, width, startX, startY;

  // Get the aspect ratio, used so the picture always fits inside the canvas
  aspectRatio = imageWidth / imageHeight;

  // If the apsect ratio is less than 1 it's a verical image
  if (aspectRatio < 1) {
    // Height is the max possible given the canvas
    height = canvasHeight;
    // Width is then proportional given the height and aspect ratio
    width = canvasHeight * aspectRatio;
    // Start the Y at the top since it's max height, but center the width
    startY = 0;
    startX = (canvasWidth - width) / 2;
    // This is for horizontal images now
  } else {
    // Width is the maximum width possible given the canvas
    width = canvasWidth;
    // Height is then proportional given the width and aspect ratio
    height = canvasWidth / aspectRatio;
    // Start the X at the very left since it's max width, but center the height
    startX = 0;
    startY = (canvasHeight - height) / 2;
  }

  return { 'width': width, 'height': height, 'startX': startX, 'startY': startY }
}
