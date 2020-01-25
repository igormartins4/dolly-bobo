const Twit = require('twit');
const config = require('../config');

const Bot = new Twit(config);

// teste para ver se está tudo ok
console.log('Dolly-Bobot Retweeta rodando...');

function BotRetweeta() {
  //chamando a função de retweetar que o Dolly é bobo
  retwittada();
  // chamando a função acima cada 5 segundos (em microssegundos)
  setInterval(retwittada, 60 * 5000);

  function retwittada() {
    const query = {
      q: "dolly bobo",
    }

    // procura todos os tweets com 'dolly bobo'
    Bot.get('search/tweets', query, BotProcura);

    function BotProcura(error, data, response) {
      if (error) {
        console.log('Bobot-Dolly não pôde achar o último tweet, : ' + error);
      } 
      else {
        //define o objeto com os tweets
        let tweets = data.statuses;

        //percorre o objeto com todos os tweets
        for (let tweet of tweets) {
          //pega cada tweet individualmente
          let id = {
            id: tweet.id_str
          }
          
          //pega o username do usuario
          let arroba = {
            arroba: tweet.user.screen_name
          }

          //compara o username, para não se dar auto retweet
          if (arroba.arroba != 'dolly_bobot') {
            //retweeta de fato e mostra o resultado no console log
            Bot.post('statuses/retweet/:id', id, BotRetweeted);

            function BotRetweeted(error, response) {
              if (error) {
                console.log('Bobot-Dolly não pode retweetar: ' + error);
              } 
              else {
                console.log('Bobot-Dolly retweetou : ' + id.id);
              }
           }

          }

          else {
            console.log('Bobot-Dolly não se auto retweeta ;)');
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
