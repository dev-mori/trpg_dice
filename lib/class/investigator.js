const abilityCreation = require('../index/abilityCreation');
const attributeCreation = require('../index/attributeCreation');
const skillCreation = require('../index/skillCreation');
const { rollDice } = require('../function/dice');
const ja_locale = require('../../locales/ja.json');

class Investigator {
	constructor(data) {
		this['ability'] ||= {};
		this['attribute'] ||= {};
		this['skill'] ||= {};
		this['point'] ||= {};

		if (data) {
			Object.keys(data).forEach((property) => {
				this[property] = data[property];
			});
		}
		else {
			this.#setAbilities();
			this.#setAttributes();
			this.#setSkills();
			this.#setPoints();
		}
	}

	#setAbilities() {
		Object.keys(abilityCreation).forEach((ability) => {
			const formula = abilityCreation[ability].formula;
			const dice = abilityCreation[ability].dice;

			this['ability'][ability] = { position: 'channel', value: formula(rollDice(dice.times, dice.sides)) };
		});
	}

	#setAttributes() {
		Object.keys(attributeCreation).forEach((attribute) => {
			const position = attributeCreation[attribute].position;
			const formula = attributeCreation[attribute].formula;
			const dependencies = attributeCreation[attribute].dependencies;
			Object.keys(dependencies).forEach(ability => dependencies[ability] = this['ability'][ability].value);

			this['attribute'][attribute] = { position: position, value: formula(dependencies) };
		});
	}

	#setSkills() {
		Object.keys(skillCreation).forEach((skill) => {
			const position = skillCreation[skill].position;
			const initializeSkill = () => {
				if ('formula' in skillCreation[skill]) {
					const formula = skillCreation[skill].formula;
					const dependencies = skillCreation[skill].dependencies;
					Object.keys(dependencies).forEach(ability => dependencies[ability] = this['ability'][ability].value);
					return formula(dependencies);
				}
				else {
					return skillCreation[skill].value;
				}
			};
			this['skill'][skill] = { position: position, value: initializeSkill() };
		});
	}

	#setPoints() {
		this['point']['job'] = this['ability']['education']['value'] * 4;
		this['point']['personal'] = this['ability']['intelligence']['value'] * 2;
		this['point']['total'] = { position: 'thread', value: this['point']['job'] + this['point']['personal'] };
	}

	print(position) {
		let message = '';
		Object.keys(this).forEach((property) => {
			Object.keys(this[property]).forEach((key, i) => {
				if (this[property][key].position == position) {
					message += `**${ja_locale[key]}** : **${this[property][key].value}**   `;
				}
			});
			message += '\n\n';
		});

		return message;
	}
}

module.exports = Investigator;
