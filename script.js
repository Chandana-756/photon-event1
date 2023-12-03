document
  .getElementById("registerButton")
  .addEventListener("click", function () {
    // Replace the URL with your Google Form link
    var googleFormLink =
      "https://docs.google.com/forms/d/e/1FAIpQLSfvxB20o554di1azVbMchE-gGAzD5HS543G5uRIvN-iIOn1-g/viewform";

    // Open the link in a new tab
    window.open(googleFormLink, "_blank");

    // Highlight the clicked button
    this.classList.add("button-clicked");

    // Remove the 'button-clicked' class after a short delay
    setTimeout(() => {
      this.classList.remove("button-clicked");
    }, 300); // Adjust the delay as needed
  });

document
  .getElementById("registerButton1")
  .addEventListener("click", function () {
    // Replace the URL with your Google Form link
    var googleFormLink =
      "https://docs.google.com/forms/d/e/1FAIpQLSfzvoGzX9igzfFBB-Pa0CRfxO-9KXvzeFkGgIGiyHZcPyqEQA/viewform";

    // Open the link in a new tab
    window.open(googleFormLink, "_blank");

    // Highlight the clicked button
    this.classList.add("button-clicked");

    // Remove the 'button-clicked' class after a short delay
    setTimeout(() => {
      this.classList.remove("button-clicked");
    }, 300); // Adjust the delay as needed
  });

// Add a 'tapped' class on touch for mobile devices
document.addEventListener("touchstart", function (event) {
  const clickedElement = event.target;

  // Check if the clicked element is a button or a child of a button
  if (clickedElement.tagName === "BUTTON" || clickedElement.closest("button")) {
    clickedElement.classList.add("tapped");

    // Remove the 'tapped' class after a short delay
    setTimeout(() => {
      clickedElement.classList.remove("tapped");
    }, 300); // Adjust the delay as needed
  }
});
function openMoreInfoPage(pageUrl) {
  // Replace the URL with the desired page URL
  var moreInfoLink = pageUrl;

  // Open the link in a new tab
  window.open(moreInfoLink, "_blank");
}
