const photos = document.querySelectorAll('.photo');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2,
});

photos.forEach(photo => observer.observe(photo));


 document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Dummy authentication (replace this with your actual authentication logic)
        if (username === "admin" && password === "admin") {
            // Simpan informasi login di session storage
            sessionStorage.setItem("isLoggedIn", "true");

            // Redirect ke halaman tujuan
            alert("Login berhasil!");
            window.location.href = "https://youtu.be/syQvdyl0fXI?si=kZdbKuLggRjnvTiC";
        } else {
            alert("Username atau password salah. Silakan coba lagi.");
        }
    });
});