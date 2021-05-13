// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let like=document.getElementsByClassName("like")[0];
let modalMessage=document.getElementById("modal-message");
let modal=document.getElementById("modal");
let heart=document.getElementsByClassName("like-glyph")[0];
like.addEventListener("click",(e)=>{
  e.preventDefault();
  mimicServerCall()
  .then (function (response){
    return response.json();
  })
  .catch ((error)=>{
    modal.classList.remove("hidden")
    modalMessage.innerHTML="Error"
    //throw ("Error",error);
    setTimeout(function(){
      modal.classList.add("hidden")
    } ,3000);
  });
  heart.textContent=FULL_HEART;
  heart.classList.add("activated-heart");
})
if (heart.textContent===FULL_HEART){
  heart.addEventListener("click",()=>{
    heart.textContent=EMPTY_HEART;
    heart.classList.remove("activated-heart");
  })
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
