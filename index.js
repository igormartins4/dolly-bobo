// AOOOOO DOLLY BOOOBOOOO

// Igor Martins
// https://github.com/igormartins4/dolly-bobo

// carrega a biblioteca twit e as chaves
let Twit = require('twit');
let config = require('./config');

// teste para ver se está tudo ok
console.log('Dolly-Bobot Geral está rodando...');

// chamando dependências
const Tweeta = require('./twittar');
const Retweeta = require('./retweeta');

// definindo e iniciando bot-geral e seus 'sub-bots'
function BotInit() {
  Tweeta.BotTweeta();
  Retweeta.BotRetweeta();
}
BotInit();

// exportando dados
module.exports = {
	BotInit,
};
