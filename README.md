# sapphire-slashcommands
a simple slasshcommand package for @sapphire/framework

## usage
A table with steps:
<table border="1">
    <tr>
        <th>Step 1</th>
        <td>npm i @outramsean0/sapphire-slashcommands</td>
    </tr>
    <tr>
        <th>Step 2:
        <td><p>
            make your index.js this:
            <br>
            const { SlashiesBot } = require('@outramsean0/sapphire-slashcommands');
            <br>
            const client = new SlashiesBot();
            <br>
            client.login('(token here)')
        </p></td>
    </tr>
    <tr>
        <th>Step 3:</th>
        <td>Enjoy!</td>
    </tr>
</table>
To add Commands!
<table border="1">
    <tr>
        <th>Step 1:</th>
        <td>Create A slashcommands folder inside of the same directory as your index.js file</td>
    </tr>
    <tr>
        <th>Step 2:</th>
        <td>create a file called (name).js</td>
    </tr>
    <tr>
        <th>Step 3:</th>
        <td><p>
        Fill the file with
        <br>
        const SlashCommand = require("sapphire-slashcommands");
        module.exports = class Ping extends SlashCommand {
        constructor(context) {
            super(context, {
            name: "ping",
            description: "Pongs when pinged.",
            options: [],
            guildOnly: process.env.dev
            });
        }
        async run(interaction) {
            await interaction.deferReply();
        }
        };
        </p></td>
    </tr>
    <tr>
        <th>Step 4:</th>
        <td>Now You can edit to your own desire</td>
    </tr> 
</table>

## Credits
made with help with yorks implementation.
