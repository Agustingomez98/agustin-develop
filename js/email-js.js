const btn = document.getElementById('btn-enviar');

document.getElementById('form-enviar')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_63ofsun';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar mensaje';
      alert('Mensaje enviado correctamente');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});