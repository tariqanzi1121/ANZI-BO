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
////////////// هيلب 

client.on("message", message => {
    if(message.content.startsWith(prefix + 'help')) {
        message.delete(5000)
        if(!message.channel.guild) return;
        const e = new Discord.RichEmbed()
        .setColor('#36393e')
        .setDescription(`**تم الارسال في الخاص**📬`)
     const embed = new Discord.RichEmbed()
         .setColor('#36393e')
         .setTitle(' ** The bot not ready now created By:TariqAnzi#0001 **')
         .setURL('')
         .setDescription(``)
   message.channel.send(e).then(m => m.delete(5000))
   message.author.sendEmbed(embed).catch(error => message.reply('**خاصك مقفول**🔐'))
   
   }
   });

// //////////// عدد




//////////////////// عداد الفويس 


///////////////////////// رابط 



////////////////////////// فك الباند 

client.on('message',async message => {
  if(message.content === '+unbanall') {
    var user = message.mentions.users.first();
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**`ADMINISTRATOR`لا توجد لديك صلاحية `**');
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    const guild = message.guild;

  message.guild.fetchBans().then(ba => {
  ba.forEach(ns => {
  message.guild.unban(ns);
  const embed= new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(`**✅ Has Been Unban For All**`)
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  message.channel.sendEmbed(embed);
  guild.owner.send(`سيرفر : ${guild.name}
  **تم فك الباند عن الجميع بواسطة** : <@${message.author.id}>`) 
  });
  });
  }
  })

  
///////////////////////////// نشر بالعام 

client.on('message', message => {
  if (message.content.includes('discord.gg')){
                      if(!message.channel.guild) return message.reply ('')
                  if (!message.member.hasPermissions(['MANAGE_MESSAGES'])){
     message.channel.send('kick <@' + message.author.id + '>')
     message.delete() 
     } 
  } 
        if (message.content.startsWith("kick")) {
           if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply();
           var member= message.mentions.members.first();
           member.kick().then((member) => {
               message.channel.sendMessage("", {embed: {
               author: {  
               },  
               title: 'بسبب النشر ' + member.displayName + ' تم حظر', 
               color: 490101,
               }
             });
         }  
       ) 
     }  
 });  

 
client.on('message', message => {
  if (message.content.includes('discord.gg')){
                      if(!message.channel.guild) return message.reply ('')
                  if (!message.member.hasPermissions(['MANAGE_MESSAGES'])){
     message.channel.send('ban <@' + message.author.id + '>')
     message.delete() 
     } 
  } 
        if (message.content.startsWith("ban")) {
           if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply();
           var member= message.mentions.members.first();
           member.ban().then((member) => {
               message.channel.sendMessage("", {embed: {
               author: { 
               },  
               title: 'بسبب النشر ' + member.displayName + ' تم حظر', 
               color: 490101,
               }
             });
         }  
       ) 
     }  
 });  




//////////////////////مسح 

client.on("message", message => {
  var prefix = "+";
          var args = message.content.substring(prefix.length).split(" ");
          if (message.content.startsWith(prefix + "مسح")) {
if (!args[1]) {
                              let x5bz1 = new Discord.RichEmbed()
                              .setDescription("#clear <number>")
                              .setColor("#0000FF")
                              message.channel.sendEmbed(x5bz1);
                          } else {
                          let messagecount = parseInt(args[1]);
                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                        message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                          let x5bz2 = new Discord.RichEmbed()
                                                          .setColor("#008000")
                              .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                      message.delete("..");
                              message.channel.sendEmbed(x5bz2);
                          }
                        }
});













//////////////////////// صور 

client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.split(' ').slice(1);
    var argresult = args.join(' ');
         if (message.content.startsWith(prefix + "صور")) {
             var mentionned = message.mentions.users.first();
      var MsH;
        if(mentionned){
            var MsH = mentionned;
        } else {
            var MsH = message.author;
           
        }
            message.channel.send(MsH.avatarURL)
            message.delete(3000);
        }
           
  });




















////////////////////// ستريمنق + اسم + افتار 
  const devs = ["521688630503276544"]// ايدي الخاص بحسابك

  const adminprefix = "+";//
  client.on('message', message => {
      var argresult = message.content.split(` `).slice(1).join(' ');
        if (!devs.includes(message.author.id)) return;
        
    if (message.content.startsWith(adminprefix + 'ply')) {
      client.user.setGame(argresult);
        message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
    } else 
      if (message.content === (adminprefix + "Percie")) {
      message.guild.leave();        
    } else  
    if (message.content.startsWith(adminprefix + 'wt')) {// لجعل البوت في حاله الواتشنق
    client.user.setActivity(argresult, {type:'WATCHING'});
        message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
    } else 
    if (message.content.startsWith(adminprefix + 'ls')) {// لجعل البوت في حاله الاستماع
    client.user.setActivity(argresult , {type:'LISTENING'});
        message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
    } else     //Narox
      if (message.content.startsWith(adminprefix + 'setname')) {// لتغير اسم البوت
    client.user.setUsername(argresult).then
        message.channel.sendMessage(`**${argresult}** : Done `)
    return message.reply("**Name Changed :white_check_mark:**");
    } else
      if (message.content.startsWith(adminprefix + 'setavatar')) {// لتغير صوره البوت
    client.user.setAvatar(argresult);
      message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
          } else     
    if (message.content.startsWith(adminprefix + 'st')) {// لعمل ستريمنق للبوت
      client.user.setGame(argresult, "https://www.twitch.tv/idk");
        message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
    }
      if(message.content === adminprefix + "restart") {// لعمل ريسترت للبوت
        if (!devs.includes(message.author.id)) return;
            message.channel.send(`:warning:️ **Bot restarting by ${message.author.username}**`);
          console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
          console.log(`⚠️ Bot restarting... ⚠️`);
          console.log("===============================================\n\n");
          client.destroy();
          child_process.fork(__dirname + "/bot.js");
          console.log(`Bot Successfully Restarted`);
      }
    
    });
    




//////// الوان 

  client.on('message', message => {
    const prefix = '+' 
        if(message.content === prefix + 'علبة') {
                             if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**');
             if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
          message.guild.createRole({
                      name: "1",
                        color: "#050000",
                        permissions: []
         })
               message.guild.createRole({
                      name: "2",
                        color: "#262726",
                        permissions: []
         })
                    message.guild.createRole({
                      name: "3",
                        color: "#333433",
                        permissions: []
         })
                         message.guild.createRole({
                      name: "4",
                        color: "#454545",
                        permissions: []
         })
                         message.guild.createRole({
                      name: "5",
                        color: "#565656",
                        permissions: []
         })
                         message.guild.createRole({
                      name: "6",
                        color: "#646464",
                        permissions: []
         })
                         message.guild.createRole({
                      name: "7",
                        color: "#787878",
                        permissions: []
         })
                         message.guild.createRole({
                      name: "8",
                        color: "#8d8c8c",
                        permissions: []
         })
                         message.guild.createRole({
                      name: "8",
                        color: "#9a9a9a",
                        permissions: []
         })
                         message.guild.createRole({
                      name: "9",
                        color: "#afaeae",
                        permissions: []
         })
                         message.guild.createRole({
                      name: "10",
                        color: "#bcbbbb",
                        permissions: []
         })
                         message.guild.createRole({
                      name: "11",
                        color: "#8504fa",
                        permissions: []
         })
                         message.guild.createRole({
                      name: "12",
                        color: "#7607dd",
                        permissions: []
         })
                         message.guild.createRole({
                      name: "13",
                        color: "#6a05c8",
                        permissions: []
         })
                              message.guild.createRole({
                      name: "14",
                        color: "#6006b4",
                        permissions: []
         })
                              message.guild.createRole({
                      name: "15",
                        color: "#5a07a8",
                        permissions: []
         })
                                   message.guild.createRole({
                      name: "16",
                        color: "#4c078d",
                        permissions: []
         })
                                        message.guild.createRole({
                      name: "17",
                        color: "#43067c",
                        permissions: []
         })
                                        message.guild.createRole({
                      name: "18",
                        color: "#360564",
                        permissions: []
         })
                                        message.guild.createRole({
                      name: "19",
                        color: "#270349",
                        permissions: []
         })
                                        message.guild.createRole({
                      name: "20",
                        color: "#fa04a1",
                        permissions: []
         })
                                        message.guild.createRole({
                      name: "21",
                        color: "#ef069b",
                        permissions: []
         })
                                        message.guild.createRole({
                      name: "22",
                        color: "#c30781",
                        permissions: []
         })
                                        message.guild.createRole({
                      name: "23",
                        color: "#a80871",
                        permissions: []
         })
                                        message.guild.createRole({
                      name: "24",
                        color: "#970966",
                        permissions: []
         })
                                        message.guild.createRole({
                      name: "25",
                        color: "#7f0956",
                        permissions: []
         })
                                        message.guild.createRole({
                      name: "26",
                        color: "#6e094b",
                        permissions: []
         })
                                        message.guild.createRole({
                      name: "27",
                        color: "#4e0735",
                        permissions: []
         })
                                        message.guild.createRole({
                      name: "28",
                        color: "#f80854",
                        permissions: []
         })
                                        message.guild.createRole({
                      name: "29",
                        color: "#db064a",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "30",
                        color: "#ca0745",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "31",
                        color: "#af083d",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "32",
                        color: "#940834",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "33",
                        color: "#7f062c",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "34",
                        color: "#6b0424",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "35",
                        color: "#f8071e",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "36",
                        color: "#d6071b",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "37",
                        color: "#b60516",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "38",
                        color: "#a80515",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "39",
                        color: "#8d0512",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "40",
                        color: "#7f0410",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "41",
                        color: "#6b030d",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "42",
                        color: "#06bcf3",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "43",
                        color: "#099dca",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "44",
                        color: "#098db6",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "45",
                        color: "#057a9e",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "46",
                        color: "#06637f",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "47",
                        color: "#054e64",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "48",
                        color: "#044255",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "49",
                        color: "#02dff8",
                        permissions: []
         })
                                             message.guild.createRole({
                      name: "50",
                        color: "#03c5db",
                        permissions: []
         })
     
              message.channel.sendMessage({embed: new Discord.RichEmbed()
         .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``تم انشاءالالوان``')});
        }
        });
     
     
     
     
     
     
      client.on('message', msg => {//msg
        if (msg.content === '.الوان') {
          msg.channel.send({file : "https://cdn.pg.sa/1c4R2LijPA.png"})
        }
      });


///////// مسح الالوان


      client.on('message', async message => {
        if(message.author.bot) return;
        let prefix = '+';
      
        let command = message.content.split(" ")[0].slice(prefix.length);
        let args = message.content.split(" ").slice(1);
        if(!message.content.toLowerCase().startsWith(prefix)) return;
      
        if(command == 'محوالوان') {
          if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`لاتمتلك الصلاحيات لفعل ذلك! :x:`);
          message.channel.send("جاري المسح..").then(async m => {
            await message.guild.roles.forEach(role => {
              if(/^\d+$/gi.test(role.name)) {
                role.delete();
              }
            });
            m.edit(`تم إزالة جميع الالوان.`)
          });
        }
      });
      





//////////////////// طرد صوتي 
      client.on("message", message => {
        let men = message.mentions.users.first();
        if(message.content.startsWith(prefix + "طرد")) {
          try {
          if(!men) {
            message.channel.send("**الرجاء اخيار شخص لطرده !**");
            return;
          }
          if(!message.guild.member(men).voiceChannel) return message.channel.send("المراد طرده ليس في الغرف الصوتيه!");
          if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("ليست لديك صلحيات سحب الاعضاء")
          if(!message.guild.me.hasPermission("MOVE_MEMBERS")) return message.channel.send("ليست لدي الصلاحيه لسحب الاعضاء");
             if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("ليست لدي الصلاحيات لانشاء رومات صوتيه")
      
          message.guild.createChannel(" VKick", "voice").then(c => {
            message.guild.member(men).setVoiceChannel(c.id)
          setTimeout(() => {
            c.delete()
          }, 100)
          });
          message.channel.send(`**لقد تم طرده من الرومات الصوتيه \`\`${men.username}\`\`**`)
      } catch (e) {
        message.channel.send("لا يمكنني القيام بذلك بسبب الصلاحيات او ما شابه");
      }
        }
      });




/////////////////// المسح

      client.on("message", message => {
        var prefix = "+" // البريفكس
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) { // الامر
                if(!message.channel.guild) return message.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');         
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
        var msg;
        msg = parseInt();
        
        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
        message.channel.sendMessage("", {embed: {
        title: "``تــم مسح الشات ``",
        color: 0x06DF00,
        footer: {
          
        }
        }}).then(msg => {msg.delete(3000)});
                          }
        
        
        });






        client.on('message', message => {
            if (message.content === ('info')) {
            message.channel.send({
                embed: new Discord.RichEmbed()
                    .setAuthor(client.user.username,client.user.avatarURL)
                    .setThumbnail(client.user.avatarURL)
                    .setColor('RANDOM')
                    .addField('**Bot Ping** :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
                    .addField('**Servers** :', [client.guilds.size], true)
                    .addField('**Channels** :' , `[ ${client.channels.size} ]` , true)
                    .addField('**Users** :' ,`[ ${client.users.size} ]` , true)
                    .addField('**Bot Name** :' , `[<@TARIQ>]` , true)
                    .addField('**Bot Owner** :' , `[<@TariqAnzi>]` , true)
                    .setFooter(message.author.username, message.author.avatarURL)
            })
        }
        });



        client.on("message", msg => {
          var Alpha = '+';//البرفكس
          if(msg.content.startsWith(prefix + "دعوة")){
              let e = new Discord.RichEmbed()
              .setTitle("**اضافه البوت لسيرفرك**")
             .setDescription(`**📬 | اذا تريد البوت يرسلك الرابط بخاصك
             📇 | اذا تريد البوت يرسلك الرابط هنا بالشات**`)
              msg.channel.send(e).then(b => {
                  b.react('📇')
                  .then(() => b.react('📬'))
                  .then(() =>b.react('📇'))
                  let reaction1Filter = (reaction, user) => reaction.emoji.name === '📇' && user.id === msg.author.id;
      let reaction2Filter = (reaction, user) => reaction.emoji.name === '📬' && user.id === msg.author.id;
      
      let reaction1 = b.createReactionCollector(reaction1Filter, { time: 12000 });
      let reaction2 = b.createReactionCollector(reaction2Filter, { time: 12000 });
      reaction1.on("collect", r => {
      msg.reply(`https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=0&scope=bot`)
      b.delete(2000)
      })
      reaction2.on("collect", r => {
          msg.author.send(`${msg.author} https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=0&scope=bot`)
          b.delete(2000)
          msg.reply("**تم ارسال الرابط في خاصك 📬**").then(d => {
              d.delete(2000)
          })
          })
              })
          }
      });













client.login('NTYwNzYxODQ2ODg2NTYzODQ1.D34psw.iMH-nuu0TKJWkvYfVF4IOTNXAI4');