const { SlashCommandBuilder } = require('discord.js');
const Investigator = require('../../lib/class/investigator');
const dbcollection = require('../../lib/db').collection('investigator');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('探索者')
		.setDescription('return investigator'),
	async execute(interaction) {
		const investigator = new Investigator();
		await dbcollection.updateOne({ userId: interaction.user.id }, { $set: { data: investigator } }, { upsert: true });
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
