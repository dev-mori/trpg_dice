const { SlashCommandBuilder } = require('discord.js');
const dbcollection = require('../../lib/db').collection('investigator');
const Investigator = require('../../lib/class/investigator');
const ja_locale = require('../../locales/ja.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('update')
		.setDescription('return investigator')
		.addStringOption(option =>
			option.setName('target')
				.setDescription('skills')
				.setRequired(true)),
	async execute(interaction) {
		const target = interaction.options.getString('target');
		const json = JSON.parse(target);
		const record = await dbcollection.findOne({ userId: interaction.user.id });
		const result = record.data;
		Object.keys(json).forEach(key => {
			const targetKey = Object.keys(ja_locale).find(k => ja_locale[k] == key);
			result['skill'][targetKey].value += parseInt(json[key]);
		});

		const investigator = new Investigator(result);
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
