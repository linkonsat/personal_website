let home = document.getElementById('home');
let resume = document.getElementById('about');
let about = document.getElementById('resume');
let apps = document.getElementById('apps');
let contact = document.getElementById('contact');

let homePage = document.getElementById('home_page');
let aboutPage = document.getElementById('about_page');
let appsPage = document.getElementById('apps_page');
let contactPage = document.getElementById('contact_page');

home.addEventListener("click", reveal);
resume.addEventListener("click", reveal);
about.addEventListener("click", reveal);
apps.addEventListener("click", reveal);
contact.addEventListener("click", reveal);

function reveal(e) {
  let targetChoice = e.target.id 
  showTab(targetChoice)
}

function showTab(choice) {
  switch (choice) {
    case "home":
      hideTab(choice)
      homePage.style.display = "block"
      break
    case "about":
      hideTab(choice)
      aboutPage.style.display = "block"
      break;
    case "apps":
      hideTab(choice)
      appsPage.style.display = "block"
      break;
    case "contact":
      hideTab(choice)
      contactPage.style.display = "block"
      break;
  }
}

function hideTab(choice) {
      homePage.style.display = "none"
      aboutPage.style.display = "none"
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

