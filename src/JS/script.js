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
    
    // Mostra o ícone de carregamento
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
      console.log(data);  // Exibe a resposta do servidor
      // Esconde o ícone de carregamento
      loadingIcon.style.display = 'none';
      submitButton.disabled = false;
      // Exibe o pop-up de sucesso
      successPopup.style.display = 'block';
      setTimeout(() => {
      successPopup.style.display = 'none';
      }, 3000);
      form.reset();  // Limpa o formulário
    })
    .catch(error => {
      console.log(error);
      // Esconde o ícone de carregamento
      loadingIcon.style.display = 'none';
      submitButton.disabled = false;
    });
  });
}

send_Form();