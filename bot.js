require('dotenv').config();
const { Telegraf } = require('telegraf')
const fetch = require('node-fetch');
const bot = new Telegraf(process.env.BOT_TOKEN||8080)
bot.start((ctx) => {ctx.reply(`Привет ${ctx.message.from.first_name}`)
console.log(ctx.message)})
bot.help((ctx) => ctx.reply('Напиши /bot'))
bot.hears('/bot', async (ctx) => {
  async function request2() {
     var now = new Date();
    let res8=0;
    var date= now.getHours()+':'+now.getMinutes();
      //9:18   11.36 13.54    16.12   18.30   20.48   23.06
 if(date==='9:0'){
            response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/8/1/");
            data = await response.json()
            response2 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/8/2/");
            data2 = await response2.json()
            response3 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/8/3/");
            data3 = await response3.json()
            response4 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/8/4/");
            data4 = await response4.json()
           for(i=0;i<30;i++){
            score_dealer = data.items.results[i].results.score_dealer
            score_player = data.items.results[i].results.score_player
            score_dealer2 = data2.items.results[i].results.score_dealer
            score_player2 = data2.items.results[i].results.score_player
            score_dealer3 = data3.items.results[i].results.score_dealer
            score_player3 = data3.items.results[i].results.score_player
            score_dealer4 = data4.items.results[i].results.score_dealer
            score_player4 = data4.items.results[i].results.score_player
            if(score_dealer==='8'){
                res8++;
            }
            if(score_player==='8'){
                res8++;
            }
            if(score_dealer2==='8'){
                res8++;
            }
            if(score_player2==='8'){
                res8++;
            }
            if(score_dealer3==='8'){
                res8++;
            }
            if(score_player3==='8'){
                res8++;
            }
            if(score_dealer4==='8'){
                res8++;
            }
            if(score_player4==='8'){
                res8++;
            }
           }
           ctx.reply( 'Конец шуза в 9:18')
           ctx.reply( res8);
    }
    if(date==='11:18'){
            response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/8/1/");
            data = await response.json()
            response2 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/8/2/");
            data2 = await response2.json()
            response3 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/8/3/");
            data3 = await response3.json()
            response4 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/8/4/");
            data4 = await response4.json()
           for(i=0;i<30;i++){
            score_dealer = data.items.results[i].results.score_dealer
            score_player = data.items.results[i].results.score_player
            score_dealer2 = data2.items.results[i].results.score_dealer
            score_player2 = data2.items.results[i].results.score_player
            score_dealer3 = data3.items.results[i].results.score_dealer
            score_player3 = data3.items.results[i].results.score_player
            score_dealer4 = data4.items.results[i].results.score_dealer
            score_player4 = data4.items.results[i].results.score_player
            if(score_dealer==='8'){
                res8++;
            }
            if(score_player==='8'){
                res8++;
            }
            if(score_dealer2==='8'){
                res8++;
            }
            if(score_player2==='8'){
                res8++;
            }
            if(score_dealer3==='8'){
                res8++;
            }
            if(score_player3==='8'){
                res8++;
            }
            if(score_dealer4==='8'){
                res8++;
            }
            if(score_player4==='8'){
                res8++;
            }
           }
           ctx.reply( 'Конец шуза в 11:36')
           ctx.reply( res8);
    }
    if(date==='13:36'){
            response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/8/1/");
            data = await response.json()
            response2 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/8/2/");
            data2 = await response2.json()
            response3 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/8/3/");
            data3 = await response3.json()
            response4 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/8/4/");
            data4 = await response4.json()
           for(i=0;i<30;i++){
            score_dealer = data.items.results[i].results.score_dealer
            score_player = data.items.results[i].results.score_player
            score_dealer2 = data2.items.results[i].results.score_dealer
            score_player2 = data2.items.results[i].results.score_player
            score_dealer3 = data3.items.results[i].results.score_dealer
            score_player3 = data3.items.results[i].results.score_player
            score_dealer4 = data4.items.results[i].results.score_dealer
            score_player4 = data4.items.results[i].results.score_player
            if(score_dealer==='8'){
                res8++;
            }
            if(score_player==='8'){
                res8++;
            }
            if(score_dealer2==='8'){
                res8++;
            }
            if(score_player2==='8'){
                res8++;
            }
            if(score_dealer3==='8'){
                res8++;
            }
            if(score_player3==='8'){
                res8++;
            }
            if(score_dealer4==='8'){
                res8++;
            }
            if(score_player4==='8'){
                res8++;
            }
           }
           ctx.reply( 'Конец шуза в 13:54')
           ctx.reply(res8);
    }
    if(date==='15:54'){
            response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/8/1/");
            data = await response.json()
            response2 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/8/2/");
            data2 = await response2.json()
            response3 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/8/3/");
            data3 = await response3.json()
            response4 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/8/4/");
            data4 = await response4.json()
           for(i=0;i<30;i++){
            score_dealer = data.items.results[i].results.score_dealer
            score_player = data.items.results[i].results.score_player
            score_dealer2 = data2.items.results[i].results.score_dealer
            score_player2 = data2.items.results[i].results.score_player
            score_dealer3 = data3.items.results[i].results.score_dealer
            score_player3 = data3.items.results[i].results.score_player
            score_dealer4 = data4.items.results[i].results.score_dealer
            score_player4 = data4.items.results[i].results.score_player
            if(score_dealer==='8'){
                res8++;
            }
            if(score_player==='8'){
                res8++;
            }
            if(score_dealer2==='8'){
                res8++;
            }
            if(score_player2==='8'){
                res8++;
            }
            if(score_dealer3==='8'){
                res8++;
            }
            if(score_player3==='8'){
                res8++;
            }
            if(score_dealer4==='8'){
                res8++;
            }
            if(score_player4==='8'){
                res8++;
            }
           }
           ctx.reply( 'Конец шуза в 16:12')
           ctx.reply( res8);
    }
    if(date==='18:12'){
            response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/8/1/");
            data = await response.json()
            response2 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/8/2/");
            data2 = await response2.json()
            response3 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/8/3/");
            data3 = await response3.json()
            response4 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/8/4/");
            data4 = await response4.json()
           for(i=0;i<30;i++){
            score_dealer = data.items.results[i].results.score_dealer
            score_player = data.items.results[i].results.score_player
            score_dealer2 = data2.items.results[i].results.score_dealer
            score_player2 = data2.items.results[i].results.score_player
            score_dealer3 = data3.items.results[i].results.score_dealer
            score_player3 = data3.items.results[i].results.score_player
            score_dealer4 = data4.items.results[i].results.score_dealer
            score_player4 = data4.items.results[i].results.score_player
            if(score_dealer==='8'){
                res8++;
            }
            if(score_player==='8'){
                res8++;
            }
            if(score_dealer2==='8'){
                res8++;
            }
            if(score_player2==='8'){
                res8++;
            }
            if(score_dealer3==='8'){
                res8++;
            }
            if(score_player3==='8'){
                res8++;
            }
            if(score_dealer4==='8'){
                res8++;
            }
            if(score_player4==='8'){
                res8++;
            }
           }
           ctx.reply( 'Конец шуза в 18:30')
           ctx.reply(res8);
    }
    if(date==='20:30'){
            response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/8/1/");
            data = await response.json()
            response2 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/8/2/");
            data2 = await response2.json()
            response3 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/8/3/");
            data3 = await response3.json()
            response4 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/8/4/");
            data4 = await response4.json()
           for(i=0;i<30;i++){
            score_dealer = data.items.results[i].results.score_dealer
            score_player = data.items.results[i].results.score_player
            score_dealer2 = data2.items.results[i].results.score_dealer
            score_player2 = data2.items.results[i].results.score_player
            score_dealer3 = data3.items.results[i].results.score_dealer
            score_player3 = data3.items.results[i].results.score_player
            score_dealer4 = data4.items.results[i].results.score_dealer
            score_player4 = data4.items.results[i].results.score_player
            if(score_dealer==='8'){
                res8++;
            }
            if(score_player==='8'){
                res8++;
            }
            if(score_dealer2==='8'){
                res8++;
            }
            if(score_player2==='8'){
                res8++;
            }
            if(score_dealer3==='8'){
                res8++;
            }
            if(score_player3==='8'){
                res8++;
            }
            if(score_dealer4==='8'){
                res8++;
            }
            if(score_player4==='8'){
                res8++;
            }
           }
           ctx.reply( 'Конец шуза в 20:48')
           ctx.reply( res8);
    }
    if(date==='22:48'){
            response = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/8/1/");
            data = await response.json()
            response2 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/8/2/");
            data2 = await response2.json()
            response3 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/8/3/");
            data3 = await response3.json()
            response4 = await fetch("https://betgames9.betgames.tv/web/v2/games/results/testpartner/en/0/2020-27-07/8/4/");
            data4 = await response4.json()
           for(i=0;i<30;i++){
            score_dealer = data.items.results[i].results.score_dealer
            score_player = data.items.results[i].results.score_player
            score_dealer2 = data2.items.results[i].results.score_dealer
            score_player2 = data2.items.results[i].results.score_player
            score_dealer3 = data3.items.results[i].results.score_dealer
            score_player3 = data3.items.results[i].results.score_player
            score_dealer4 = data4.items.results[i].results.score_dealer
            score_player4 = data4.items.results[i].results.score_player
            if(score_dealer==='8'){
                res8++;
            }
            if(score_player==='8'){
                res8++;
            }
            if(score_dealer2==='8'){
                res8++;
            }
            if(score_player2==='8'){
                res8++;
            }
            if(score_dealer3==='8'){
                res8++;
            }
            if(score_player3==='8'){
                res8++;
            }
            if(score_dealer4==='8'){
                res8++;
            }
            if(score_player4==='8'){
                res8++;
            }
           }
           ctx.reply('Конец шуза в 23:06');
           ctx.reply(res8);
    }
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
       global.time2= setInterval(request2, 40000) 
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

