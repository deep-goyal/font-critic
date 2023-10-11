// Wait until the web page is fully loaded before running the code inside
document.addEventListener("DOMContentLoaded", function () {
  // Get the text input box from the page
  const inputText = document.getElementById("inputtext");

  // List of font names we want to use
  const fonts = ["Arial", "Times New Roman", "Monaco", "Geogia", "Verdana"];

  // Get the area on the page where we want to show the output
  const output = document.getElementById("output");

  // This will help us manage time delays later
  let timeouts = [];

  // Do the following every time someone types into the input box
  inputText.addEventListener("input", () => {
    // Stop any ongoing time delays from before
    timeouts.forEach((t) => clearTimeout(t));
    timeouts = [];

    // Remove any old text in the output area
    output.innerHTML = "";

    // If the input box is empty, stop here
    if (inputText.value.trim() === "") {
      return;
    }

    // For each font in our list, do the following
    fonts.forEach((font, i) => {
      // Wait a tiny bit of time (i times 100 milliseconds) and then do the stuff inside
      const timeoutId = setTimeout(() => {
        // Create a new text area (paragraph)
        const paragraph = document.createElement("p");

        // Set the font of this text to the current font from our list
        paragraph.style.fontFamily = font;

        // Make the text say the font name, followed by whatever was typed into the input box
        paragraph.textContent = font + ": " + inputText.value;

        // Add this new text to the output area on the page
        output.appendChild(paragraph);
      }, i * 100); // This is how long we wait

      // Remember this time delay so we can stop it later if we need to
      timeouts.push(timeoutId);
    });
  });
});
