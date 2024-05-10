const abilitiesCreationIndex = {
	strength: {
		formula: function(dice) {return dice * 5;},
		dice: { times: 3, sides: 6 },
	},
	constitution: {
		formula: function(dice) {return dice * 5;},
		dice: { times: 3, sides: 6 },
	},
	power: {
		formula: function(dice) {return dice * 5;},
		dice: { times: 3, sides: 6 },
	},
	size: {
		formula: function(dice) {return (dice + 6) * 5;},
		dice: { times: 2, sides: 6 },
	},
	intelligence: {
		formula: function(dice) {return (dice + 6) * 5;},
		dice: { times: 2, sides: 6 },
	},
	dexterity: {
		formula: function(dice) {return dice * 5;},
		dice: { times: 3, sides: 6 },
	},
	appearance: {
		formula: function(dice) {return dice * 5;},
		dice: { times: 3, sides: 6 },
	},
	education: {
		formula: function(dice) {return (dice + 6) * 5;},
		dice: { times: 2, sides: 6 },
	},
	luck: {
		formula: function(dice) {return dice * 5;},
		dice: { times: 3, sides: 6 },
	},
};

module.exports = abilitiesCreationIndex;
