const toggle_btn = document.getElementById("navbar-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const closeButton = document.getElementById("close-menu");
const menuLinks = document.querySelectorAll("#mobile-menu a");

const animated_element = document.querySelectorAll(".animated-element");

const form = document.getElementById("contactForm");

const descriptionText = document.getElementById("description-text");
const myPic = document.getElementById("MyPic");
const animText = document.getElementById("anim-text");

// Select the toggle button
const toggleButton = document.getElementById("darkModeToggle");


// Select the toggle button for mobile
const toggleButtonMobile = document.getElementById("darkModeToggle-Mobile");

const emailText = document.getElementById("email-text");

// Get the textarea element
const messageTextarea = document.getElementById("message");

// Add event listeners for each section
const emailSection = document.querySelector(".email-section");
const linkedinSection = document.querySelector(".linkedin-section");
const githubSection = document.querySelector(".github-section");

// Get the h1 element inside #description-text
const descriptionH1 = document.querySelector("#description-text h1");

// Toggle the mobile menu
toggle_btn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");

  // Remove classes when the menu is opened
  if (!mobileMenu.classList.contains("hidden")) {
    descriptionText.classList.remove("animated-element");
    myPic.classList.remove("animated-element");
    animText.classList.remove("relative", "animated-text");
    descriptionH1.classList.remove("overflow-hidden"); // Remove overflow-hidden
  }
});

// Close the mobile menu when the close button is clicked
closeButton.addEventListener("click", () => {
  mobileMenu.classList.add("hidden"); // Hide the mobile menu

  // Add classes back when the menu is closed
  descriptionText.classList.add("animated-element");
  myPic.classList.add("animated-element");
  animText.classList.add("relative", "animated-text");
  descriptionH1.classList.add("overflow-hidden"); // Add overflow-hidden back
});

// Close the mobile menu when any link inside it is clicked
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden"); // Hide the mobile menu

    // Add classes back when the menu is closed
    descriptionText.classList.add("animated-element");
    myPic.classList.add("animated-element");
    animText.classList.add("relative", "animated-text");
    descriptionH1.classList.add("overflow-hidden"); // Add overflow-hidden back
  });
});

// Function to reset the background and text color
function resetBackground() {
  // No hover background to reset
  // Reset text colors
  emailSection.querySelector("p").style.color = "inherit"; // Reset email text color
  linkedinSection.querySelector("p").style.color = "inherit"; // Reset LinkedIn text color
  githubSection.querySelector("p").style.color = "inherit"; // Reset GitHub text color
}

// Email Section
emailSection.addEventListener("mouseenter", () => {
  // No hover background animation
  emailSection.querySelector("p").style.color = "#EA4335"; // Change color on hover
});

emailSection.addEventListener("mouseleave", () => {
  resetBackground(); // Reset text color on mouse leave
});

// LinkedIn Section
linkedinSection.addEventListener("mouseenter", () => {
  // No hover background animation
  linkedinSection.querySelector("p").style.color = "#0A66C2"; // Change color on hover
});

linkedinSection.addEventListener("mouseleave", () => {
  resetBackground(); // Reset text color on mouse leave
});

// GitHub Section
githubSection.addEventListener("mouseenter", () => {
  // No hover background animation
  githubSection.querySelector("p").style.color = "#333"; // Change color on hover
});

githubSection.addEventListener("mouseleave", () => {
  resetBackground(); // Reset text color on mouse leave
});

// Detect if the screen width is less than or equal to lg (1024px)
// This function is no longer needed for hoverBg
function disableAnimationOnSmallScreens() {
  // No animation to disable
}

// Run on page load and window resize
// disableAnimationOnSmallScreens(); // Not needed now
window.addEventListener("resize", disableAnimationOnSmallScreens);

// Prevent drag-and-drop in the textarea
messageTextarea.addEventListener("dragover", (event) => {
  event.preventDefault(); // Prevent default behavior
});

messageTextarea.addEventListener("drop", (event) => {
  event.preventDefault(); // Prevent the drop
});

// Detect screen size and update email text
function updateEmailText() {
  if (window.innerWidth <= 1024) {
    emailText.textContent = "Gmail"; // Show 'Gmail' on smaller screens
  } else {
    emailText.textContent = "Khalidhilali2004@gmail.com"; // Full email on larger screens
  }
}

// Call the function on load and resize
updateEmailText();
window.addEventListener("resize", updateEmailText);

// Function to show elements on page load if they are in view
function checkElementsInView() {
  animated_element.forEach((element) => {
    if (isInView(element)) {
      element.classList.add("animated-element--visible");
    }
  });
}

// Function to check if an element is in view
function isInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom > 0 &&
    rect.top <
      (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
  );
}

// Add scroll event listener
document.addEventListener("scroll", checkElementsInView);

// Initial check when the page loads
document.addEventListener("DOMContentLoaded", checkElementsInView);

// Toggle theme and save preference in local storage
toggleButton.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark"); // Add/remove dark class on <html>

  // Save the user's theme preference
  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});


// Toggle theme and save preference in local storage
toggleButtonMobile.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark"); // Add/remove dark class on <html>

  // Save the user's theme preference
  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// On page load, check the stored theme preference
window.onload = () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark"); // Ensure light mode if not dark
  }
};

// the arrows functionality

document.addEventListener("DOMContentLoaded", () => {
  const scrollButton = document.getElementById("scrollButton");
  const downArrowIcon = document.getElementById("downArrowIcon");
  const upArrowIcon = document.getElementById("upArrowIcon");

  // Function to scroll to the bottom
  function scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }

  // Function to scroll to the top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // Event listener for button click
  scrollButton.addEventListener("click", () => {
    // Check the current visibility of arrows and scroll accordingly
    if (downArrowIcon.classList.contains("hidden")) {
      scrollToTop(); // Scroll to top if down arrow is hidden (i.e., up arrow is visible)
    } else {
      scrollToBottom(); // Scroll to bottom if down arrow is visible
    }
  });

  // Update the button visibility based on scroll position
  window.addEventListener("scroll", () => {
    const isAtBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 10; // Allow for minor discrepancies
    const isAtTop = window.scrollY === 0;

    // Show or hide icons based on scroll position
    if (isAtBottom) {
      downArrowIcon.classList.add("hidden");
      upArrowIcon.classList.remove("hidden");
    } else if (isAtTop) {
      upArrowIcon.classList.add("hidden");
      downArrowIcon.classList.remove("hidden");
    }
  });
});
