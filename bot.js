require('dotenv').config();
const { Telegraf } = require('telegraf')
const fetch = require('node-fetch');
const bot = new Telegraf(process.env.BOT_TOKEN||8080)
bot.start((ctx) => {ctx.reply(`Привет ${ctx.message.from.first_name}`)
console.log(ctx.message)})
bot.help((ctx) => ctx.reply('Напиши /bot'))
bot.hears('/bot', async (ctx) => {
   async function request() {
      const response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-30-09/8/1/")
      const data = await response.json()
      let result = 0;
      let result2 = 0;
      let result3 = 0;
    
      score_dealer = data.items.results[0].results.score_dealer
  
      for (let i = 0; i <= 19; i++) {
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
     { ctx.reply( 'Больших кэфов давно не было');}
     
      for (let i = 0; i <= 19; i++) {
         score_dealer = data.items.results[i].results.score_dealer
         score_player = data.items.results[i].results.score_player
         if ((score_player == 8) || (score_dealer == 8))
             result2 = result2 + 1;
         
     }
     console.log(result2);
     if (result2 == 0)
    {ctx.reply( 'Не было 8');}
     for (let i = 0; i <= 29; i++) {
         score_dealer = data.items.results[i].results.score_dealer
         score_player = data.items.results[i].results.score_player
 
         if (score_player == score_dealer)
             result3 = result3 + 1;
     }
     console.log(result3);
     if (result3 == 0)
    { ctx.reply( 'Не было ничьи');}
    
  }

 

  
    function good(){
      
       ctx.reply( "Вы запустили Бота на стратегию «большие кэфы 8» ⚠ Не забудьте поставить особые уведомления на Бота, и ждите сигнала на валуйные ситуации!");
       ctx.reply( "Удачи! По всем вопросам пишите @BetgamesTV_Admin"); 
       global.time= setInterval(request, 120000)  
       }



good()}
)
bot.hears('/end', async (ctx) => {
    try {
      clearInterval(time);
      ctx.reply("Пока");  
    } catch(err) {
      ctx.reply("Этот бот и так выключен");    
    } 
})
bot.launch()

