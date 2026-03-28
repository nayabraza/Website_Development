const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }

    if (navLinks) {
      navLinks.classList.remove('open');
    }
  });
});


const form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill all fields!");
      return;
    }

    if (!email.includes('@')) {
      alert("Enter a valid email!");
      return;
    }

    alert("Message sent successfully 🚀");
    form.reset();
  });
}


const darkBtn = document.createElement('button');
darkBtn.innerText = '🌙';
darkBtn.classList.add('dark-btn');
document.body.appendChild(darkBtn);

if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
}

darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});


const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});


console.log("Portfolio JS Loaded 🚀");