module.exports = {
	intimidate: {
		value: 15,
		position: 'thread',
	},
	fast_talk: {
		value: 5,
		position: 'thread',
	},
	medicine: {
		value: 1,
		position: 'thread',
	},
	auto: {
		value: 20,
		position: 'thread',
	},
	fist_aid: {
		value: 30,
		position: 'channel',
	},
	occult: {
		value: 5,
		position: 'thread',
	},
	stealth: {
		value: 20,
		position: 'thread',
	},
	dodge: {
		formula: function({ dexterity }) {return Math.floor(dexterity / 2);},
		dependencies: { dexterity: null },
		position: 'channel',
	},
	science: {
		value: 1,
		position: 'thread',
	},
	locksmith: {
		value: 1,
		position: 'thread',
	},
	appraise: {
		value: 5,
		position: 'thread',
	},
	mechanical_repair: {
		value: 10,
		position: 'thread',
	},
	listen: {
		value: 20,
		position: 'channel',
	},
	brawl: {
		value: 25,
		position: 'channel',
	},
	cthulhu_mythos: {
		value: 0,
		position: 'thread',
	},
	art_craft_photograpy: {
		value: 5,
		position: 'thread',
	},
	accounting: {
		value: 5,
		position: 'thread',
	},
	archaeology: {
		value: 1,
		position: 'thread',
	},
	survival: {
		value: 10,
		position: 'thread',
	},
	natural_world: {
		value: 10,
		position: 'thread',
	},
	handgun: {
		value: 20,
		position: 'thread',
	},
	rifle_shotgun: {
		value: 25,
		position: 'thread',
	},
	operate_heavy_machinery: {
		value: 1,
		position: 'thread',
	},
	ride: {
		value: 5,
		position: 'thread',
	},
	credit_rating: {
		value: 0,
		position: 'channel',
	},
	psychology: {
		value: 10,
		position: 'channel',
	},
	anthropology: {
		value: 1,
		position: 'thread',
	},
	swim: {
		value: 20,
		position: 'thread',
	},
	psychoanalysis: {
		value: 1,
		position: 'channel',
	},
	persuade: {
		value: 10,
		position: 'channel',
	},
	pilot: {
		value: 1,
		position: 'thread',
	},
	jump: {
		value: 20,
		position: 'thread',
	},
	track: {
		value: 10,
		position: 'thread',
	},
	sleight_of_hand: {
		value: 10,
		position: 'thread',
	},
	electrical_repair: {
		value: 10,
		position: 'thread',
	},
	throw: {
		value: 20,
		position: 'channel',
	},
	climb: {
		value: 20,
		position: 'thread',
	},
	library_use: {
		value: 20,
		position: 'channel',
	},
	navigate: {
		value: 10,
		position: 'thread',
	},
	disguise: {
		value: 5,
		position: 'thread',
	},
	law: {
		value: 5,
		position: 'thread',
	},
	other_language: {
		value: 1,
		position: 'thread',
	},
	own_language: {
		formula: function({ education }) {return education;},
		dependencies: { education: null },
		position: 'thread',
	},
	charm: {
		value: 15,
		position: 'thread',
	},
	spot_hidden: {
		value: 25,
		position: 'channel',
	},
	history: {
		value: 5,
		position: 'thread',
	},
};
