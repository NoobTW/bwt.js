const should = require('should');
const { bwt, iBwt } = require('../dist/bwt');

// const bwt = new Bwt();

let str;
describe('Encoding:', () => {
	it('banana should be annb$aa', () => {
		str = bwt('banana');
		str.should.be.exactly('annb$aa');
	});
});

describe('Decoding:', () => {
	it('decoded string should be banana', () => {
		iBwt(str).should.be.exactly('banana');
	});
});
