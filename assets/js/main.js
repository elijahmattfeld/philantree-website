// Philantree — small site behaviors: mobile menu, header shadow, early-access form.

(function () {
  // Mobile menu
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Header border once the page scrolls
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () { header.classList.toggle("scrolled", window.scrollY > 8); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Footer year
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Early-access form.
  // The form posts to the URL in its `action` attribute (a Formspree endpoint).
  // Until a real endpoint is set, it shows a friendly fallback instead of failing.
  document.querySelectorAll("form[data-signup]").forEach(function (form) {
    var status = form.querySelector(".form-status");
    var button = form.querySelector("button[type=submit]");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.className = "form-status";
      status.textContent = "";

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var endpoint = form.getAttribute("action") || "";
      if (endpoint.indexOf("YOUR_FORM_ID") !== -1) {
        status.classList.add("err");
        status.innerHTML = 'Sign-ups open soon. For now, email us at <a href="mailto:volunteer@philantree.com">volunteer@philantree.com</a>.';
        return;
      }

      button.disabled = true;
      var label = button.textContent;
      button.textContent = "Sending…";

      fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (res) {
          if (!res.ok) throw new Error("Request failed");
          form.reset();
          status.classList.add("ok");
          status.textContent = "Thank you! You're on the list. We'll be in touch.";
        })
        .catch(function () {
          status.classList.add("err");
          status.innerHTML = 'Something went wrong. Please try again or email <a href="mailto:volunteer@philantree.com">volunteer@philantree.com</a>.';
        })
        .finally(function () {
          button.disabled = false;
          button.textContent = label;
        });
    });
  });
})();
