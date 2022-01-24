'use strict';

const { nanoid } = require('nanoid');
const count = Number(process.argv[2]) || 3;
const size  = Number(process.argv[3]) || 15;

for (let i = 0; i < count; i++){
	console.log(nanoid(size));
}
