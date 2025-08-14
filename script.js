document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const msg = document.getElementById("submit-msg");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      msg.textContent = "Message submitted successfully!";
      form.reset();
    });
  });
  