let voice = window.speechSynthesis;


function chooseVoice() {
  voices = voice.getVoices();

  for (let i = 0; i < voices.length; i++) {

    console.log(voices[i].name + voices[i].lang);
  }
};