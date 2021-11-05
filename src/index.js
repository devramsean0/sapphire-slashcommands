require("dotenv").config();
const { SapphireClient } = require("@sapphire/framework");
const Deployer = require('./lib/SlashCommandDeployer.js');
const SlashCommandStore = require("./lib/SlashCommandStore.js");
class SlashiesBot extends SapphireClient {
  constructor(context, options = {}) {
    super(context, options);
    this.commandData = {
      intents: this.intents,
      partials: this.partials,
      shards: this.shards
    };
    Deployer()
  }
}
module.exports = SlashiesBot;