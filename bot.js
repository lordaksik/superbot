require('dotenv').config();
const { Telegraf } = require('telegraf')
const fetch = require('node-fetch');
const bot = new Telegraf(process.env.BOT_TOKEN||8080)
bot.start((ctx) => {ctx.reply(`Привет ${ctx.message.from.first_name}`)
console.log(ctx.message)})
bot.help((ctx) => ctx.reply('Напиши /bot'))
bot.hears('/bot', async (ctx) => {
  async function request2() {
    const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-30-09/8/1/")
    const data = await response.json()
    let res = 2;
    let res2 = 0;
    for (let i = 0; i <= 1; i++) {
      score_dealer = data.items.results[i].results.score_dealer
      score_player = data.items.results[i].results.score_player
      if (score_player == score_dealer)
          res = res - 1; 
  }
  console.log(res);
  if (res == 0)
  {ctx.reply( '2 ничьи подряд');}
  for (let i = 0; i <= 1; i++) {
    score_dealer = data.items.results[i].results.score_dealer
    score_player = data.items.results[i].results.score_player
    if ((score_player == 8 && score_dealer == 8)||(data.items.results[0].results.score_player == 8 &&data.items.results[1].results.score_dealer==8))
        res2 = res2 + 1; 
}
console.log(res);
if (res2 == 1)
{ctx.reply( '8 в ряд');}


  }
   async function request() {
      const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-30-09/8/1/")
      const data = await response.json()
      const response2 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-30-09/8/2/")
      const data2 = await response2.json()
      let result = 0;
      let result2 = 0;
      let result3 = 0;
      let result4 = 0;
     let result44 = 0;
      let result5 = 0;
     let result55 = 0;
     let result33 = 0;
      score_dealer = data.items.results[0].results.score_dealer
  
      for (let i = 0; i <= 29; i++) {
          score_dealer = data.items.results[i].results.score_dealer
          score_player = data.items.results[i].results.score_player
          // console.log("игрок " + score_player + " "+ score_dealer +" дилер")
              if ((score_player == 3 && (score_dealer == 2 || score_dealer == 8 || score_dealer == 3))
               || (score_player == 13 && (score_dealer == 13 || score_dealer == 8 || score_dealer == 14)) 
               || (score_player == score_dealer) || (score_player == 8) || (score_dealer == 8))
              result = result + 1;
      }
      console.log(result);
      if (result == 0)
     { ctx.reply( 'Больших кэфов давно не было 30 минут');}
     
      for (let i = 0; i <= 24; i++) {
         score_dealer = data.items.results[i].results.score_dealer
         score_player = data.items.results[i].results.score_player
         if ((score_player == 8) || (score_dealer == 8))
             result2 = result2 + 1;
         
     }
     console.log(result2);
     if (result2 == 0)
    {ctx.reply( 'Не было 8 уже 25 минут');}

    for (let i = 0; i <= 29; i++) {
      score_dealer = data.items.results[i].results.score_dealer
      score_player = data.items.results[i].results.score_player
      if (score_player == 8)
          result4 = result4 + 1;
      
  }
      for (let i = 0; i <= 29; i++) {
      score_dealer2 = data2.items.results[i].results.score_dealer
      score_player2 = data2.items.results[i].results.score_player
      if (score_player2 == 8)
          result44 = result44 + 1;
      
  }
  if (result44 === 0 && result4 === 0)
 {ctx.reply( 'Не было 8 у игрока уже 60 минут (вертикаль)');}
 for (let i = 0; i <= 29; i++) {
  score_dealer = data.items.results[i].results.score_dealer
  score_player = data.items.results[i].results.score_player
  if (score_dealer == 8)
      result5 = result5 + 1;
}
 for (let i = 0; i <= 29; i++) {
  score_dealer2 = data2.items.results[i].results.score_dealer
  score_player2 = data2.items.results[i].results.score_player
  if (score_dealer2 == 8)
      result55 = result55 + 1;
}


if (result5 === 0&& result55 === 0)
{ctx.reply( 'Не было 8 у дилера уже 60 минут (вертикаль)');}
     for (let i = 0; i <= 29; i++) {
         score_dealer = data.items.results[i].results.score_dealer
         score_player = data.items.results[i].results.score_player
 
         if (score_player == score_dealer)
             result3 = result3 + 1;
     }
     
  for (let i = 0; i <= 29; i++) {
         score_dealer2 = data2.items.results[i].results.score_dealer
         score_player2 = data2.items.results[i].results.score_player
 
         if (score_player2 == score_dealer2)
             result33 = result33 + 1;
     }
     if (result3 == 0 && result33 == 0)
    { ctx.reply( 'Не было ничьи 60 минут');}
    
  }

 

  
    function good(){
      
       ctx.reply( "Вы запустили Бота на стратегию «Большие кэфы» ⚠ Не забудьте поставить особые уведомления на Бота, и ждите сигнала на валуйные ситуации!");
       ctx.reply( "Удачи! По всем вопросам пишите @BetgamesTV_Admin"); 
       global.time= setInterval(request, 120000)   
       }



good()}
)
bot.hears('/end', async (ctx) => {
    try {
      clearInterval(time);
      clearInterval(time2);
      ctx.reply("Пока");  
    } catch(err) {
      ctx.reply("Этот бот и так выключен");    
    } 
})
bot.launch()

