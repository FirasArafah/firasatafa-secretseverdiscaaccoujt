const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame("__#7075","https://www.twitch.tv/idk");
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


 client.on('guildMemberAdd',async member => {
  if(member.guild.id !== '537968114340724746') return;
  setTimeout(function(){
  member.guild.channels.find(r => r.id === '537969708545343508').send('Welcome to BubblesAvatar.');
},1500);
});





client.login(process.env.BOT_TOKEN);  //لا تحط التوكن حقك هنا
