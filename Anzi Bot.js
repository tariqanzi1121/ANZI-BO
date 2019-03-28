const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "+"
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'pingg') {
    msg.reply('Pong!');
  }
});
 //////// بي سي 

 
const seender = 'لعمل منشن لمرسل الرساله قم بكتابة [المرسل] في الرسالة.';
const server = 'لكتابة اسم السيرفر قم بكتابة [السيرفر] في الرسالة.';
const user = 'لعمل منشن للشخص قم بكتابة [العضو] في الرسالة.';
 
client.on('message', message => {
   if(!message.channel.guild) return;
    var success = new Discord.RichEmbed()
    .setDescription(`تم أرسال رسالتك بنجاح.`)
    .setColor('GREEN')
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let BcList = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`**▶ 📝 لأرسال رسالة امبد قم بالضغط على \n ▶ ✏ لأرسال رسالة عادية قم بالضغط على \n ★ ${user} \n ★ ${server} \n ★ ${seender}**`)
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
msg.react('📝')
.then(() => msg.react('✏'))
.then(() =>msg.react('📝'))
 
let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
 
let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
 
EmbedBc.on("collect", r => {
 
message.channel.send(success);
message.guild.members.forEach(m => {
let EmbedRep = args.replace('[السيرفر]' ,message.guild.name).replace('[العضو]', m).replace('[المرسل]', `${message.author}`)
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(EmbedRep)
.setFooter(` Created By:TariqAnzi#0001`)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(success);
message.guild.members.forEach(m => {
let NormalRep = args.replace('[السيرفر]' ,message.guild.name).replace('[العضو]', m).replace('[المرسل]', `${message.author}`)
m.send(NormalRep);
msg.delete();
})
})
})
}
});












client.login('NTYwNzYxODQ2ODg2NTYzODQ1.D34psw.iMH-nuu0TKJWkvYfVF4IOTNXAI4');
