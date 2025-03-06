

function copy_to_clipboard(clipboard){
    navigator.clipboard.writeText(clipboard).then(() => {
        // Mostra o feedback de cópia
        const tooltip = document.getElementById('copy-tooltip');
        tooltip.textContent = 'Copiado!';
        tooltip.classList.add('opacity-100', 'visibility-visible'); // Torna o tooltip visível

        // Limpa o texto do tooltip após 2 segundos
        setTimeout(() => {
          tooltip.textContent = 'Clique para copiar';
          tooltip.classList.remove('opacity-100', 'visibility-visible'); // Torna o tooltip invisível novamente
        }, 2000);
      }).catch(err => {
        console.error('Erro ao copiar: ', err);
      });
}


function send_Form(){
  const form = document.getElementById('email_form');
  const submitButton = document.getElementById('submit_button');
  const loadingIcon = document.getElementById('loading_icon');
  const successPopup = document.getElementById('success_popup');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    
    loadingIcon.style.display = 'inline-block';
    submitButton.disabled = true;

    fetch("https://formsubmit.co/ajax/ruanlimafn@gmail.com", {
    method: "POST",
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message
    })
    })
    .then(response => response.json())
    .then(data => {
      loadingIcon.style.display = 'none';
      submitButton.disabled = false;
      successPopup.style.display = 'block';
      setTimeout(() => {
      successPopup.style.display = 'none';
      }, 3000);
      form.reset();  
    })
    .catch(error => {
      console.log(error);
      loadingIcon.style.display = 'none';
      submitButton.disabled = false;
    });
  });
}

send_Form();

const id_sections = ['home', 'about', 'education', 'projects', 'skills' , 'contact'];
function change_nav_text_color(){
  const navLinks = document.querySelectorAll('#nav [id*="header"]');
  const heights = id_sections.map(section => document.getElementById(section).offsetHeight);
  let sum = heights[0];
  let sum1 = sum + heights[1];
  let sum2 = sum1 + heights[2];
  let sum3 = sum2 + heights[3];
  let sum4 = sum3 + heights[4];
  console.log(navLinks);

  // Change the first header text color
  if (window.scrollY >= sum && window.scrollY < sum1){
    current_header = document.getElementById(navLinks[0].id);
    current_header.classList.replace('text-slate-100', 'text-amber-300');
  }
  else if (window.scrollY < sum || window.scrollY >= sum1){
    current_header = document.getElementById(navLinks[0].id);
    current_header.classList.replace('text-amber-300', 'text-slate-100');
  }

  // Change the second header text color
  if (window.scrollY >= sum1 && window.scrollY < sum2){
    current_header = document.getElementById(navLinks[1].id);
    current_header.classList.replace('text-slate-100', 'text-amber-300');
  }
  else if (window.scrollY < sum1 || window.scrollY >= sum2){
    current_header = document.getElementById(navLinks[1].id);
    current_header.classList.replace('text-amber-300', 'text-slate-100');
  }

  // Change the third header text color
  if (window.scrollY >= sum2 && window.scrollY < sum3){
    current_header = document.getElementById(navLinks[2].id);
    current_header.classList.replace('text-slate-100', 'text-amber-300');
  }
  else if (window.scrollY < sum2 || window.scrollY >= sum3){
    current_header = document.getElementById(navLinks[2].id);
    current_header.classList.replace('text-amber-300', 'text-slate-100');
  }

  // Change the fourth header text color
  if (window.scrollY >= sum3 && window.scrollY < sum4){
    current_header = document.getElementById(navLinks[3].id);
    current_header.classList.replace('text-slate-100', 'text-amber-300');
  }
  else if (window.scrollY < sum3 || window.scrollY >= sum4){
    current_header = document.getElementById(navLinks[3].id);
    current_header.classList.replace('text-amber-300', 'text-slate-100');
  }



  console.log(heights);
  console.log(window.scrollY);
  console.log(sum4);



}


// Prevents the id from appearing in the url : Use preventDefault to avoid redirection by <a> and redirect with a click and 
// scrollIntoView event on the element with the id
document.querySelectorAll('a[href^="#"]').forEach(button => {
  button.addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Scroll event
document.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  let classBg = "";
  let scrollPosition = window.scrollY;

  // Change the background color of the header when the user scrolls
  classBg = scrollPosition > 0 ? "bg-indigo-600/96" : "bg-indigo-600/0";
  if (classBg == "bg-indigo-600/96") {
      header.classList.remove("bg-indigo-600/0");
  }
  else {
      header.classList.remove("bg-indigo-600/96");
  }
  header.classList.add(classBg);

  // Parallax effect
  document.querySelector(".parallax").style.transform = `translateY(${scrollPosition * 0.32}px)`;

  change_nav_text_color();

});



// Load the parallax effect when the page loads
document.addEventListener("DOMContentLoaded", () =>{
  let scrollPosition = window.scrollY;
  document.querySelector(".parallax").style.transform = `translateY(${scrollPosition * 0.32}px)`;
  initBg = scrollPosition == 0 ? "bg-indigo-600/0" : "bg-indigo-600/96";
  console.log(scrollPosition);
  header.classList.add(initBg);
})


