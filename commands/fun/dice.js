const { SlashCommandBuilder } = require('discord.js');
const { rowComponentButtonWrapper } = require('../../lib/components/button');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dice')
		.setDescription('Replies with dice'),
	async execute(interaction) {
		await interaction.reply({ components: [
			rowComponentButtonWrapper({ label: '1D100' }, { label: '1D20' }, { label: '1D10' }, { label: '1D8' }),
			rowComponentButtonWrapper({ label: '1D6' }, { label: '1D4' }, { label: '1D3' }, { label: '1D2' }),
			rowComponentButtonWrapper({ label: '2D3' }, { label: '2D4' }, { label: '2D6' }, { label: '2D10' }),
			rowComponentButtonWrapper({ label: '3D3' }, { label: '3D4' }, { label: '3D6' }, { label: '3D10' }),
		] });
	},
};
