require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const { getRandomQuote } = require('./lib/Quotes');

// const THUMBNAIL_URL =
//   'https://cdn2.iconfinder.com/data/icons/leto-blue-big-data/64/big_data_olap_array_multidimentional_volume-256.png';

// client.on('ready', () => {
//   console.log('Ready!');
// });

// client.on('message', async (msg) => {
//   if (msg.content === '!server') {
//     msg.channel.send(
//       `Server name: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}`
//     );
//   } else if (msg.content === '!user-info') {
//     const exampleEmbed = new Discord.MessageEmbed()
//       .setColor('#0099ff')
//       .setTitle(`${msg.author.username}`)
//       .setDescription(
//         `${msg.author.username}, ${msg.guild.name} kanalına ${msg.author.createdAt} tarihinde katılmıştır.`
//       )
//       .setFooter(`${msg.author.tag}: ${msg.author.id}`)
//       .setThumbnail(THUMBNAIL_URL);
//     msg.channel.send(exampleEmbed);
//   } else if (msg.content === '!quote') {
//     const data = await getRandomQuote();
//     const { content = '', author = '' } = data;

//     const exampleEmbed = {
//       color: '#0099ff',
//       title: 'Quote of the day',
//       description: content,
//       thumbnail: {
//         url: THUMBNAIL_URL,
//       },
//       footer: {
//         text: `— ${author}`,
//       },
//     };

//     msg.channel.send({ embed: exampleEmbed });
//   }
// });

// // Login to Discord
// client.login(process.env.CLIENT_TOKEN);

//eslint-disable-next-line
module.exports = async (req, res) => {
  const THUMBNAIL_URL =
    'https://cdn2.iconfinder.com/data/icons/leto-blue-big-data/64/big_data_olap_array_multidimentional_volume-256.png';

  client.on('ready', () => {
    console.log('Ready!');
  });

  client.on('message', async (msg) => {
    if (msg.content === '!server') {
      msg.channel.send(
        `Server name: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}`
      );
    } else if (msg.content === '!user-info') {
      const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`${msg.author.username}`)
        .setDescription(
          `${msg.author.username}, ${msg.guild.name} kanalına ${msg.author.createdAt} tarihinde katılmıştır.`
        )
        .setFooter(`${msg.author.tag}: ${msg.author.id}`)
        .setThumbnail(THUMBNAIL_URL);
      msg.channel.send(exampleEmbed);
    } else if (msg.content === '!quote') {
      const data = await getRandomQuote();
      const { content = '', author = '' } = data;

      const exampleEmbed = {
        color: '#0099ff',
        title: 'Quote of the day',
        description: content,
        thumbnail: {
          url: THUMBNAIL_URL,
        },
        footer: {
          text: `— ${author}`,
        },
      };

      msg.channel.send({ embed: exampleEmbed });
    }
  });

  // Login to Discord
  client.login(process.env.CLIENT_TOKEN);
};
