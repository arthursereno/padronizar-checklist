<!DOCTYPE html>
<html>
  <head>
    <script src="https://p.trellocdn.com/power-up.min.js"></script>
  </head>
  <body>
    <script>
      window.TrelloPowerUp.initialize({
        'board-buttons': function(t, options) {
          return [{
            icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828817.png', // ícone no botão
            text: 'Padronizar Checklists',
            callback: function(t) {
              return t.get('board', 'id')
                .then(function(boardId) {
                  return fetch('https://n8n.api-blogfeelgood.fun/webhook/padronizacao-checklist', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      boardId: boardId
                    })
                  }).then(() => {
                    return t.popup({
                      title: 'Feito!',
                      url: 'https://cdn.jsdelivr.net/gh/everdim/popup-msg/success.html', // opcional
                      height: 100
                    });
                  });
                });
            }
          }];
        }
      });
    </script>
  </body>
</html>
