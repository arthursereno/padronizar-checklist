window.TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828817.png',
      text: 'Padronizar Checklists',
      callback: function(t) {
        return fetch('https://n8n.api-blogfeelgood.fun/webhook/padronizacao-checklist')
          .then(() => {
            return t.popup({
              title: 'Checklists padronizados!',
              url: 'https://cdn.jsdelivr.net/gh/everdim/popup-msg/success.html',
              height: 100
            });
          })
          .catch(err => {
            console.error('Erro ao chamar o webhook:', err);
            return t.alert({ message: 'Algo deu errado 😕' });
          });
      }
    }];
  }
});
