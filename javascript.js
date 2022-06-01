let home = document.getElementById('home');
let resume = document.getElementById('about');
let about = document.getElementById('resume');
let apps = document.getElementById('apps');
let contact = document.getElementById('contact');

let homePage = document.getElementById('home_page');
let resumePage = document.getElementById('about_page');
let aboutPage = document.getElementById('resume_page');
let appsPage = document.getElementById('apps_page');
let contactPage = document.getElementById('contact_page');

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

function showTab(choice) {
  switch (choice) {
    case "home":
      console.log(homePage)
      homePage.style.display = "block"
      break
    case "about":
      aboutPage.style.display = "block"
      break;
    case "resume":
      resumePage.style.display = "block"
      break;
    case "apps":
      appsPage.style.display = "block"
      break;
    case "contact":
      contactPage.style.display = "block"
      break;
  }
}

function hideTab(choice) {
      homePage.style.display = "none"
      aboutPage.style.display = "none"
      resumePage.style.display = "none"
      appsPage.style.display = "none"
      contactPage.style.display = "none"
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

