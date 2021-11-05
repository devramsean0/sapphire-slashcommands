require("dotenv").config();
const { SapphireClient } = require("@sapphire/framework");

// This is your custom store.
const SlashCommandStore = require("./lib/structures/SlashCommandStore.js");

class SlashiesBot extends SapphireClient {
  constructor() {
    super({
    });

    this.stores.register(new SlashCommandStore());
  }
}