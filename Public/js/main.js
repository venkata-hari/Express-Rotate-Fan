function clickone(){
  var audio = document.getElementById('MyAudio'); 
audio.pause();
var audiotwo = document.getElementById('MyAudiotwo'); 
audiotwo.play();
let x=document.getElementById('img')

  x.classList.add('img-one')
  x.classList.remove('img-two')
  x.classList.remove('img-three')

    
}
function clicktwo(){
  var audio = document.getElementById('MyAudio'); 
audio.pause();
var audiotwo = document.getElementById('MyAudiotwo'); 
audiotwo.play();
  let x=document.getElementById('img')
  x.classList.add('img-two')
  x.classList.remove('img-one')
  x.classList.remove('img-three')
    
}
function clickthree(){
  var audiotwo = document.getElementById('MyAudiotwo'); 
audiotwo.pause();
  var audio =document.getElementById('MyAudio'); 
audio.play();
let x=document.getElementById('img')
  x.classList.add('img-three')
  x.classList.remove('img-two')
  x.classList.remove('img-one')
    
}
function clickpluse(){
  var audio = document.getElementById('MyAudio'); 
audio.pause();
var audiotwo = document.getElementById('MyAudiotwo'); 
audiotwo.pause();
    let x=document.getElementById('img')
  x.classList.remove('img-three')
  x.classList.remove('img-two')
  x.classList.remove('img-one')
    
}
