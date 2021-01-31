const CoinbasePro = require('coinbase-pro');

function clientP(code){
    return new CoinbasePro.PublicClient();
}

function realTimeBitcoinStatus(){
    return new CoinbasePro.WebsocketClient('BTC-USD');
}

module.exports = {clientP,realTimeBitcoinStatus};