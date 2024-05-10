const { SlashCommandBuilder } = require('discord.js');
const Investigator = require('../../lib/class/investigator');
const dbcollection = require('../../lib/db').collection('investigator');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('reprint')
		.setDescription('return investigator'),
	async execute(interaction) {
		const result = await dbcollection.findOne({ userId: interaction.user.id });
		const investigator = new Investigator(result.data);
		const reply = await interaction.reply(investigator.print('channel'));
		const message = await reply.fetch();
		const thread = await interaction.channel.threads.create({
			name: '能力値',
			autoArchiveDuration: 60, // 60分後にスレッドが自動的にアーカイブ
			startMessage: message,
		});
		thread.send(investigator.print('thread'));
	},
};
