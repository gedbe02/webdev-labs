/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/
let toggle = false;
const makeDyslexia = () => {
  if (!toggle) {
    document.body.classList.add("dyslexia-mode");
    toggle = true;
  }
  else {
    document.body.classList.remove("dyslexia-mode");
    toggle = false;
  }
  
};



document.querySelector("#dyslexia-toggle").addEventListener('click', makeDyslexia);