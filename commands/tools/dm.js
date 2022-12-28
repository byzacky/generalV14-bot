const {
    SlashCommandBuilder,
    EmbedBuilder,
    PermissionFlagsBits,
  } = require("discord.js");
  const {
    ActionRowBuilder,
    ButtonBuilder,
    PermissionsBitField,
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("dm")
      .setDescription("Dm A User")
      .addUserOption((op) =>
        op
          .setName("user")
          .setDescription("Select the user to dm me!")
          .setRequired(true)
      )
      .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
      .addStringOption((op) =>
        op
          .setName("message")
          .setDescription("The Message To Send Me")
          .setRequired(true)
      ),
    async execute(interaction, client) {
      const { channel, options } = interaction;
  
      const user = options.getMember("user");
      const message = options.getString("message");
      const memberid = interaction.user.id;
  
      if (user.id === "884448704038313994") {
        await interaction
          .reply ( 
              {
                  content: `**I Cannot Send _DM_ To My Self!!**`,
              } 
          )
          .catch(console.error);
      }
  
      // if(!message.member.permissons.has(MANAGER_MESSAGES)) return message.channel.send("Don't Hava Permissions, Sorry :(")
      //This Command Is Not Working!
  
      user.send(message)
      .catch(
          async (err) => 
          {
          console.log(err);
  
          return await interaction
              .editReply({
              content: `Failed To Send DM Message To **<@${user.id}>**`,
              })
              .catch(console.error);
          }
      );
  
      await interaction
        .reply ( 
          {
              content: `Succesfully Sended DM Message To <@${user.id}>`,
          }
        )
        .catch(console.error);
      
  
      
      await setTimeout( () => {
  
        interaction.deleteReply();
  
      }, 3500);
    },
  };
  