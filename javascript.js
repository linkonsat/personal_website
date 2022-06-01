let home = document.getElementById('home');
let resume = document.getElementById('about');
let about = document.getElementById('resume');
let apps = document.getElementById('apps');
let contact = document.getElementById('contact');

home.addEventListener("click", reveal);
resume.addEventListener("click", reveal);
about.addEventListener("click", reveal);
apps.addEventListener("click", reveal);
contact.addEventListener("click", reveal);

function reveal(e) {
  let targetChoice = e.target.id 
  hideTab(targetChoice)
  showTab(targetChoice)
}

function showTab() {
  switch (expression) {
  }
}

function hideTab() {

}
function createBubble() {
    const section = 
          document.querySelector("Section");
    const createElement = 
          document.createElement("span");
    var size = Math.random() * 60;

    createElement.style.animation = 
      "animation 6s linear infinite";
    createElement.style.width = 180 + size + "px";
    createElement.style.height = 180 + size + "px";
    createElement.style.left = 
      Math.random() * innerWidth + "px";
    section.appendChild(createElement);

    setTimeout(() => {
        createElement.remove();
    }, 4000);
}
setInterval(createBubble, 100);

