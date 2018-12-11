const Discord = require('discord.js');
const client = new Discord.Client();

client.on("message", message => {

  // Your commands here
  // Result in: If the user's message contains "ping" then

if(message.content === "_ping"){

   // the robot answers pong!
   message.channel.send("Pong!");
  
};
if(message.content == "_loveme") {
   message.author.send("I love you!")
};
if(message.content === "_mine"){

   // the robot answers pong!
   message.channel.send("DIAAMOONDS!");
  
};
if(message.content === "_givekiss"){

   // the robot answers pong!
   message.channel.send("https://media.giphy.com/media/tw1zMQrM2IhC8/giphy.gif");
  
};
if(message.content === "_help"){

   // the robot answers pong!
   message.channel.send("All commands: loveme ping givekiss mine showidiot1-3 help  SECOND PAGE: _h2");
};
if(message.content === "_h2"){

   // the robot answers pong!
   message.channel.send("All commands: ShowAdministrators ro T87BNG showgay The Default Prefix is _");
};
   if(message.content === "_showidiot3"){

   // the robot answers pong!
   message.channel.send("Who is this? http://prntscr.com/ltixy5 An idiot.");
};
  if(message.content === "_showidiot2"){

   // the robot answers pong!
   message.channel.send("Here is one http://prntscr.com/ltix6u");
};
  if(message.content === "_showidiot1"){

   // the robot answers pong!
   message.channel.send("I found one http://prntscr.com/ltiwxt");
};
  if(message.content === "_ShowAdministrators"){

   // the robot answers pong!
   message.channel.send("@Administrator : ReallyLoser#8405 Owners: _o ");
};
  if(message.content === "_o"){

   // the robot answers pong!
   message.channel.send("@Owners : ChikZ#7074 , NotQuitting#0452 , █▀█ █▄█ ▀█▀#8459");
};
  if(message.content === "_T87BNG"){

   // the robot answers pong!
   message.channel.send("https://media.giphy.com/media/YsQOfNEKSWEBq/giphy.gif");
};
  if(message.content === "_ro"){

   // the robot answers pong!
   message.channel.send("blox");
};
  if(message.content === "_showgay"){

   // the robot answers pong!
   message.channel.send("I see one http://prntscr.com/ltiwxt");
};
});
client.login("NTIxOTk2NTU0NDU0ODI3MDA4.DvEjgg.kH0ZxzrIOvVSs_XIQGwDFqWzvJo");
