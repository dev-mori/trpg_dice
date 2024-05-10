const rollDice = (times, sides) => {
	times = parseInt(times);
	sides = parseInt(sides);

	return [...Array(times)].map(() => rollDie(sides)).reduce((total, current) => total + current);
};

const rollDie = (sides) => {
	sides = parseInt(sides);

	return Math.floor((Math.random() * sides) + 1);
};

module.exports = {
	rollDice,
	rollDie,
};
