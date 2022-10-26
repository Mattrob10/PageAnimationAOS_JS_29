const links = document.querySelectorAll(".nav-list li a");

for (link of links) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
}
// sticky header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

AOS.init({
  duration: 1550, 
  // once: true
});


// Scroll to Top
const scrollBtn = document.querySelector(".top");
const rootEl = document.documentElement;

document.addEventListener("scroll", showBtn);
scrollBtn.addEventListener("click", scrollToTop);

function showBtn(){
 const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;
 if(rootEl.scrollTop / scrollTotal > 0.969){
   scrollBtn.classList.add("show-btn");
 } else {
   scrollBtn.classList.remove("show-btn");
 }
}
function scrollToTop() {
  rootEl.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
