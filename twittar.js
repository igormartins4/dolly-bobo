let Twit = require('twit');
let config = require('./config');

// passando as credenciais do config.js (arquivo secreto) para a api do twitter
let Bot = new Twit(config);

// teste para ver se está tudo ok
console.log('Dolly-Bobot Twittar está rodando...');

function BotTweeta() {
  //chamando a função de tweetar que o Dolly é bobo
  twittada();
  // chamando a função acima cada 30min (em microssegundos)
  setInterval(twittada, 30*60*1000);

  function twittada() {
    // escolhendo um número aleatório entre 0 e 4444 para colocar no tweet
    let num = Math.floor(Math.random()*4444);
    let tweet = {
      status: 'Dolly Bobot lembrando que o Dolly foi muito bobo pela ' + num + 'ª vez.'
    };
    // método que faz o tweet
    Bot.post('statuses/update', tweet, postaTweet);

    // função que posta o tweet
    function postaTweet(err, data, response) {
      if (err) {
        console.log('Erro ao twittar!');
      }
      else {
        console.log('Twittado com sucesso!');
      }
    }
  };
}

// exportando dados
module.exports = {
    Bot,
    BotTweeta,
}
