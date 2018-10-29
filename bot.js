const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame("Off , #JB..","https://www.twitch.tv/idk");
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
var PrEfix = "f";

client.on('message', message => {

  if (!message.content.startsWith(PrEfix)) return;

  var args = message.content.split(' ').slice(1);

  var argresult = args.join(' ');

  if (message.author.id !== '478291914106339332') return;

if (message.content.startsWith(PrEfix + 'wt')) {

client.user.setActivity(argresult, {type:'WATCHING'});

    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)

} else 

if (message.content.startsWith(PrEfix + 'ls')) {

client.user.setActivity(argresult, {type:'LISTENING'});

    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)

} else 

if (message.content.startsWith(PrEfix + 'st')) {

  client.user.setGame(argresult, "https://www.twitch.tv/idk");

    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)

}

});


 


client.on('message', Maz=> {

    if (Maz.content == 'join') {
        if (Maz.member.voiceChannel) {

     if (Maz.member.voiceChannel.joinable) {
         Maz.member.voiceChannel.join()
     }
    }
}
})
client.on('ready', () => {
    client.channels.get("503454728890613764").join();
    });




client.login(process.env.BOT_TOKEN);  //لا تحط التوكن حقك هنا
