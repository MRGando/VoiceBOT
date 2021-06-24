const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const BGcolor = document.querySelector('.bg');



//list of commands
const greetings = ['im good my friend',
'im fine thanks',
'fine , and you ?',
'i\'ve never been better',
'great'];

const weather = ['Weather is fine',
'Don\'t ask , you can\t leave home anyway',
'i don\'t know'];

const developer = ['Reza Kamali is my developer you may know him as ali fallah'];

const old = ['i\'m a new born voice bot',
'does it matter ?', 'i don\'t know'];

const ok = ['ok',
'good for you', 'got it','i\'ll remember that'];

const hi = ['hi how can i help?',
'hello', 'sup ya?','what up?'];

const bye = ['bye , see you later',
'bye, take care', 'bye, see you soon','wanna go? ok take care. bye'];


//
const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    content.textContent = "Voice activated, now you can talk!";
};
recognition.onresult = function(event){
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

//Add event listener - https://rez.blogfa.com/page/vc

btn.addEventListener('click' , () => {
recognition.start();
});

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

speech.text = 'i have no answer';


//checks if message includes a command 
if(message.includes('how are you')){
   const finaltext = greetings[Math.floor(Math.random() * greetings.length)];
   speech.text = finaltext;
}
if(message.includes('how is the weather')){
   const finaltext = weather[Math.floor(Math.random() * weather.length)];
   speech.text = finaltext; 
}
if(message.includes('who\'s your developer')){
   const finaltext = developer[Math.floor(Math.random() * developer.length)];
   speech.text = finaltext; 
}
if(message.includes('activate light mode')){
   speech.text = 'Ok';
   BGcolor.classList.add('lightmode');
}
if(message.includes('deactivate light mode')){
   speech.text = 'Ok';
   BGcolor.classList.remove('lightmode');
}
if(message.includes('how old are you')){
   const finaltext = old[Math.floor(Math.random() * old.length)];
   speech.text = finaltext; 
}
if(message.includes('i\'m')){
   const finaltext = ok[Math.floor(Math.random() * ok.length)];
   speech.text = finaltext; 
}
if(message.includes('my name')){
   const finaltext = ok[Math.floor(Math.random() * ok.length)];
   speech.text = finaltext; 
}
if(message.includes('hi')){
   const finaltext = hi[Math.floor(Math.random() * hi.length)];
   speech.text = finaltext; 
}
if(message.includes('hello')){
   const finaltext = hi[Math.floor(Math.random() * hi.length)];
   speech.text = finaltext; 
}

if(message.includes('bye')){
   const finaltext = bye[Math.floor(Math.random() * bye.length)];
   speech.text = finaltext; 
}
if(message.includes('see you later')){
   const finaltext = bye[Math.floor(Math.random() * bye.length)];
   speech.text = finaltext; 
}
   
//Bot's setting (volume, rate, pitch)
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    
   }
  
   //see the preview at https://rez.blogfa.com/page/vc 