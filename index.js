/**

 - Created on Sunday, 14 June 2020.
 - By Hanif Dwy Putra S.
 - Made with ❤ and JavaScript Language.

**/

const request = require('node-superfetch');
const insta = require('instagram-web-api2');

const {
 username,
 password
} = process.env;

const bot = new insta({
  username,
  password
});

console.log(`Login Success.`);

const photo = 'https://cdn.glitch.com/1c755db9-e393-4873-90dc-9fb8aececb65%2Fcovid19_news_bot_covid19_update.png?v=1589006394455';

const URL = 'https://corona.lmao.ninja/v2/countries/id';

async function posting() {
 const { body: result } = await request.get(URL);
 let txt = `Corona Virus Indonesia\n\n> Kasus: ${result.cases}\n> Kematian: ${result.deaths}\n> Sembuh: ${result.recovered}\n\n[📝] Hari ini\n> Kasus: ${result.todayCases}\n> Kematian: ${result.todayDeaths}`);
 await bot.login();
 const cynta = await client.uploadPhoto({ photo, caption: txt });
 console.log(`Post Success: ${cynta.media.code}`);
};

setInterval(posting, 3600000); // 1 hours
