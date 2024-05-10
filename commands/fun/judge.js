const { SlashCommandBuilder } = require('discord.js');
const { rowComponentButtonWrapper } = require('../../lib/components/button');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('judge')
		.setDescription('return dice button for judgement')
		.addStringOption(option =>
			option.setName('target')
				.setDescription('ability, skill or attribute')
				.setRequired(true)),
	async execute(interaction) {
		const target = interaction.options.getString('target');
		await interaction.reply({ components: [rowComponentButtonWrapper({ label: `判定 ${target}` })] });
	},
};
