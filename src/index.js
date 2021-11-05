require("dotenv").config();
const { SapphireClient } = require("@sapphire/framework");

// This is your custom store.
const SlashCommandStore = require("./lib/structures/SlashCommandStore.js");

class SlashiesBot extends SapphireClient {
  constructor() {
    super({
      intents: this.intents,
      partials: this.partials
    });

    this.stores.register(new SlashCommandStore());
  }
}
module.exports = SlashiesBot;