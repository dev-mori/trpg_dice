const { rollDice } = require('../function/dice');

const movementFormula = ({ strength, dexterity, size }) => {
	if (strength > size && dexterity > size) {
		return 9;
	} else if (strength < size && dexterity < size) {
		return 7;
	} else {
		return 8;
	}
};

const dbFormula = ({ strength, size }) => {
	if (strength + size <= 64) {
		return -2;
	} else if (strength + size <= 84) {
		return -1;
	} else if (strength + size <= 124) {
		return 0;
	} else if (strength + size <= 164) {
		return rollDice(1, 4);
	} else if (strength + size <= 204) {
		return rollDice(1, 6);
	} else {
		return rollDice(Math.ceil((strength + size - 204) / 80) + 1, 6);
	}
};

const buildFormula = ({ strength, size }) => {
	if (strength + size <= 64) {
		return -2;
	} else if (strength + size <= 84) {
		return -1;
	} else if (strength + size <= 124) {
		return 0;
	} else if (strength + size <= 164) {
		return 1;
	} else if (strength + size <= 204) {
		return 2;
	} else {
		return Math.ceil((strength + size - 204) / 80) + 2;
	}
};

const abilitiesCreationIndex = {
	sanity: {
		formula: function({ power }) {return power;},
		dependencies: { power: null },
		position: 'channel',
	},
	idea: {
		formula: function({ intelligence }) {return intelligence;},
		dependencies: { intelligence: null },
		position: 'channel',
	},
	know: {
		formula: function({ education }) {return education;},
		dependencies: { education: null },
		position: 'channel',
	},
	hit_point: {
		formula: function({ constitution, size }) {return Math.floor((constitution + size) / 10);},
		dependencies: { constitution: null, size: null },
		position: 'channel',
	},
	movement: {
		formula: movementFormula,
		dependencies: { strength: null, dexterity: null, size: null },
		position: 'thread',
	},
	magic_point: {
		formula: function({ power }) {return Math.floor(power / 5);},
		dependencies: { power: null },
		position: 'thread',
	},
	damage_bonus: {
		formula: dbFormula,
		dependencies: { strength: null, size: null },
		position: 'channel',
	},
	build: {
		formula: buildFormula,
		dependencies: { strength: null, size: null },
		position: 'thread',
	},
};

module.exports = abilitiesCreationIndex;
