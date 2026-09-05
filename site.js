document.addEventListener("DOMContentLoaded", () => {
  const page = location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("nav.horizontal a").forEach((link) => {
    const target = new URL(link.href, location.href).pathname.split("/").pop();
    if (target === page) link.setAttribute("aria-current", "page");
  });

  document.querySelectorAll('a[href^="http"]').forEach((link) => {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  document.querySelectorAll("section img").forEach((image) => {
    image.loading = "lazy";
    image.decoding = "async";
  });

  const footer = document.querySelector("footer");
  if (footer) {
    footer.innerHTML = "<strong>The Delliber Family</strong><br>Our original family website, refreshed with the same artwork and memories.<br><span>Artwork by Dominic Delliber &middot; Website by Kenneth Delliber Jr.</span>";
  }

  const form = document.querySelector("#survey");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let message = document.querySelector("#formMessage");
      if (!message) {
        message = document.createElement("p");
        message.id = "formMessage";
        message.setAttribute("role", "status");
        form.append(message);
      }
      message.textContent = "This art-request form is part of the original school project and does not send information.";
    });
  }
});
