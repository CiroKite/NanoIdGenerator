'use strict';

const nanoid = require('nanoid');
const count = process.argv[2] | 3;

for (let i = 0; i < count; i++){
	console.log(nanoid(15));
}
