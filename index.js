const { Client } = require('discord.js-selfbot-v13');

const client = new Client();

client.on('ready', async () => {
  console.log(`uhq`);



await client.user.setPresence({
  activities: [{
   name: "Heavenuhq",
    platform: "ps5", //tu peux aussi mettre ps4/samsung/xbox
    type: 'PLAYING',
     timestamps: {
                start: Date.now() - (1337 * 24 * 60 * 60 * 1000)
            },
    assets: {
      small_image: 'mp:external/lLr6ZagbnHCNrfo4Ebc1k-eP65yQqUsSMTMQ63NwsTs/https/i.postimg.cc/fLnZjHj2/57e7f60bb9bbf6ee721b2de3fa5c9982.png',
      small_text: null
    }
  }],

});


});

client.login("Token");
