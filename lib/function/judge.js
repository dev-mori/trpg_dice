const dbcollection = require('../db').collection('investigator');
const { rollDie } = require('../function/dice');
const ja_locale = require('../../locales/ja.json');

const judge = async ({ user, target }) => {
	const targetKey = Object.keys(ja_locale).find(k => ja_locale[k] == target);
	const result = await dbcollection.findOne({ userId: user.id });
	const investigater = result.data;
	const diceValue = rollDie(100);
	let investigaterValue;
	Object.keys(investigater).forEach(key => {
		investigaterValue = investigater[key][targetKey] ? investigater[key][targetKey].value : investigaterValue;
	});
	const judgement = parseInt(diceValue) <= parseInt(investigaterValue) ? '成功' : '失敗';
	return { judgement, investigaterValue, diceValue };
};

module.exports = judge;
