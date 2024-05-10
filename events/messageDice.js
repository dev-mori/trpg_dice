const { Events } = require('discord.js');
const { rollDice } = require('../lib/function/dice');

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
		const [times, sides] = message.content.split(/D|d/).map(Number);
		if (times && sides) {
			await message.reply(rollDice(times, sides).toString());
		}
	},
};
