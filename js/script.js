const header = document.querySelector("header");
const sectionTwo = document.getElementById("two");
window.addEventListener("scroll",function(){
    let offset = window.pageYOffset;
    //console.log(offset);
    if(offset>140)
        header.classList.add("navbar-scrolled");
    else    
        header.classList.remove("navbar-scrolled");    
})



const curs=document.querySelector(".pointer");
window.addEventListener("mousemove",function(){
  console.log(window.pageYOffset);
  var x = event.clientX;
  var y = event.clientY;
  //console.log(curs);
  curs.style.left=x;
  curs.style.top=y+window.pageYOffset;
})













// For typing effect
const typedTextSpan = document.querySelector(".typed-text");
const typedTextSpan2 = document.querySelector(".typed-text2");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["am a", "like", "like to play" ];
const textArray2 = [" JADAVPURIAN.", " coding.", " football."];
const typingDelay = 20;
const erasingDelay = 20;
const newTextDelay = 500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;
let charIndex2 = 0;
function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing"))
    cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
  	type2();
  }
}


function type2() {
  if (charIndex2 < textArray2[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing"))
    cursorSpan.classList.add("typing");
    typedTextSpan2.textContent += textArray2[textArrayIndex].charAt(charIndex2);
    charIndex2++;
    setTimeout(type2, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    //charIndex2=charIndex;
  	setTimeout(erase2, newTextDelay);
  }
}

function erase2() {
	if (charIndex2 > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan2.textContent = textArray2[textArrayIndex].substring(0, charIndex2-1);
    charIndex2--;
    setTimeout(erase2, erasingDelay);
  } 
  else {
    //setTimeout(erase,newTextDelay);
    erase();
  }
}




function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 0);
  }
}
type();
document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  //if(textArray.length) setTimeout(type, newTextDelay + 250);
  //type();
});



