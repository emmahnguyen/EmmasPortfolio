document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // stop real submission

        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const email = document.getElementById("email").value.trim();
        const question = document.getElementById("question").value.trim();

        if (firstName === "" || lastName === "" || email === "" || question === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Show success message
        successMessage.style.display = "block";

        // Clear form
        form.reset();
    });

    function validateEmail(email) {
        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        return pattern.test(email);
    }
    });

    new QRCode(document.getElementById("qrcode"), {
      text: "https://docs.google.com/document/d/1Yi4__7CMPQrnVKX7jUA_2c1CKXECU9Ah/edit?usp=sharing&ouid=104741894569472158994&rtpof=true&sd=true",
      width: 150,
      height: 150
    });


