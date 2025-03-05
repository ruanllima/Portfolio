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


document.querySelectorAll('a[href^="#"]').forEach(button => {
  button.addEventListener('click', function(event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
  });
});