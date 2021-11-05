require("dotenv").config();
const { SapphireClient } = require("@sapphire/framework");

// This is your custom store.
const SlashCommandStore = require("./lib/structures/SlashCommandStore.js");

class SlashiesBot extends SapphireClient {
  constructor(context, options = {}) {
    super(context, options);
    
    // This is the payload the "deployer" requires to register the commands 
    // at Discord.
    this.commandData = {
      intents: this.intents,
      partials: this.partials,
      shards: this.shards
    };
  }
}
module.exports = SlashiesBot;