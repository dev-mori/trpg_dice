const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const buttonComponent = ({ label, style = ButtonStyle.Primary }) => {
	return new ButtonBuilder()
		.setCustomId(label)
		.setLabel(label)
		.setStyle(style);
};

const rowComponent = (...args) => {
	return new ActionRowBuilder()
		.addComponents(...args);
};

const rowComponentButtonWrapper = (...buttonComponentArgs) => {
	return rowComponent(
		...buttonComponentArgs.map(buttonComponentArg => buttonComponent(buttonComponentArg))
	);
};

module.exports = {
	buttonComponent,
	rowComponent,
	rowComponentButtonWrapper,
};
