const { func } = require('assert-plus');
const CoinbasePro = require('coinbase-pro');
const publicClient = new CoinbasePro.PublicClient();

async function GetProducts(){
    publicClient.getProducts()
    .then(data =>{
        console.log(data);
    })
    .catch(err => console.log("Error Happend " + err))
}

async function getBitcoinTrades(){
    publicClient.getProductTrades('BTC-USD').then(data => console.log(data))
    .catch(err => console.log(err))
}

async function getBitcoinTradeStream(tradesFrom,TradesTo){
    publicClient.getProductTradeStream('BTC-USD',tradesFrom,TradesTo).then(data => console.log(data))
    .catch(err => console.log(err))
}

async function getBitcoin24HrStats(){
    publicClient.getProduct24HrStats('BTC-USD').then(data => console.log(data))
    .catch(err => console.log(err))
}

module.exports = {
    getBitcoin24HrStats,
    getBitcoinTradeStream,
    getBitcoinTrades,
    GetProducts
}
