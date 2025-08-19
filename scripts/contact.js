// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
document
  .getElementById("submit-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".contact").innerHTML =
      "<p style='font-size: 24px'>Thank you for your message</p>";
  });

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

// when an element with the class "blue-hover" is hovered over, it will change the text colour to white, add an underline, and change the background colour to cornflower blue.
document.querySelectorAll(".blue-hover").forEach(function (el) {
  el.addEventListener("mouseover", function (event) {
    event.target.style.color = "white";
    event.target.style.textDecoration = "underline";
    event.target.style.backgroundColor = "#4278e5";
  });
  el.addEventListener("mouseout", function (event) {
    event.target.style.color = "";
    event.target.style.textDecoration = "";
    event.target.style.backgroundColor = "";
  });
});

