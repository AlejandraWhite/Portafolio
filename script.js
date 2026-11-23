(function () {
    var btn = document.getElementById('copy-btn');
    var status = document.getElementById('copy-status');
    var emailEl = document.getElementById('email-text');
    function selectEmail() {
      var range = document.createRange();
      range.selectNodeContents(emailEl);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
    btn.addEventListener('click', function () {
      var text = emailEl.textContent.trim();
      var done = function () { status.textContent = 'Correo copiado'; };
      var fallback = function () { selectEmail(); status.textContent = 'Seleccionado, usa copiar en tu dispositivo'; };
      try {
        navigator.clipboard.writeText(text).then(done, fallback);
      } catch (e) {
        fallback();
      }
    });
  })();
