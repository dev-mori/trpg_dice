const { Events } = require('discord.js');
const judge = require('../lib/function/judge');
const { rollDice } = require('../lib/function/dice');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isButton()) return;
		if (interaction.customId.split(' ')[0] == '判定') {
			const target = interaction.customId.split(' ')[1];
			const result = await judge({ user: interaction.user, target });
			await interaction.reply(`${result.judgement}   能力値:${result.investigaterValue} ダイス目:${result.diceValue}`);
		}
		else {
			const [times, sides] = interaction.customId.split(/D|d/).map(Number);
			await interaction.reply(rollDice(times, sides).toString());
		}
	},
};
