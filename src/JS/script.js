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