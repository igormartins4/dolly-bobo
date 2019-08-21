let Twit = require('twit');
let config = require('./config');

let Bot = new Twit(config);

// teste para ver se está tudo ok
console.log('Dolly-Bobot Retweeta rodando...');

function BotRetweeta() {
  //chamando a função de retweetar que o Dolly é bobo
  retwittada();
  // chamando a função acima cada 1segundo (em microssegundos)
  setInterval(retwittada, 60 * 1000);

  function retwittada() {
    let query = {
      q: "dolly bobo",
    }
    // procura todos os tweets com 'dolly bobo'
    Bot.get('search/tweets', query, BotProcura);

    function BotProcura(error, data, response) {
      if (error) {
        console.log('Dolly-Bobot não pôde achar o último tweet, : ' + error);
      } else {
        //define o objeto com os tweets
        let tweets = data.statuses;
        //percorre o objeto com todos os tweets
        for (let tweet of tweets) {
          //pega cada tweet individualmente
          let id = {
            id: tweet.id_str
          }
          //retweeta de fato e mostra o resultado no console log
          Bot.post('statuses/retweet/:id', id, BotRetweeted);

          function BotRetweeted(error, response) {
            if (error) {
              console.log('Dolly-Bobot não pode retweetar, : ' + error);
            } else {
              console.log('Dolly-Bobot retweetou : ' + id.id);
            }
          }
        }
      }
    }
  };
}

// exportando dados
module.exports = {
  Bot,
  BotRetweeta,
}
