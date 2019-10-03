'use strict';

const nanoid = require('nanoid');
const count = process.argv[2] || 3;
const size  = process.argv[3] || 15;

for (let i = 0; i < count; i++){
	console.log(nanoid(size));
}
