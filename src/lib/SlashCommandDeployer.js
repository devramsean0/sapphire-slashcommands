function Deployer() {
          const slashCommandsStore = this.container.stores.get("slashCommands");
          if (slashCommandsStore) {
            try {
              console.log("Started refreshing application (/) commands.");
              await slashCommandsStore.registerCommands();
              console.log("Successfully reloaded application (/) commands.");
            } catch (err) {
              console.log(err);
            }
          }
}
module.exports = Deployer