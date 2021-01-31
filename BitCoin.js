const Utils = require("./Utlis.js");

const publicClient = Utils.clientP();

async function getTrades(){
    publicClient.getTrades('BTC-USD').then(data => 
        {
            console.log(data);
            return data;
        })
        .catch(err => console.log(err))
}

async function TradeFrom(tradesFrom,TradesTo){
    publicClient.getProductTradeStream('BTC-USD',tradesFrom,TradesTo).then(data => 
        {
            console.log(data);
            return data;
        })
        .catch(err => console.log(err))
}

async function Stats24h(){
    publicClient.getProduct24HrStats('BTC-USD').then(data => 
        {
            console.log(data);
            return data;
        })
        .catch(err => console.log(err))
}

function RealTime(){
    const webSocket =  Utils.realTimeBitcoinStatus();

    webSocket.on('message',data => {
        console.log(data);
    });

    webSocket.on('error', err => {
        console.log("Error Happend ! ");
        console.log(err);
    });

    webSocket.on('close',()=>{
        console.log("Connection Closed !!! ");
    })
}

module.exports = {getTrades,TradeFrom,Stats24h,RealTime};
