// Your JavaScript code goes here.
console.log("Script is running!");
// Function to handle tab switching in the Projects section
function openTab(evt, tabName) {
  // Get all elements with class="tab-content" and hide them
  const tabContents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active");
  }

  // Get all elements with class="tab-btn" and remove the class "active"
  const tabBtns = document.getElementsByClassName("tab-btn");
  for (let i = 0; i < tabBtns.length; i++) {
    tabBtns[i].classList.remove("active");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
