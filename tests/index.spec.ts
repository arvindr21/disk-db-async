'use strict';

import 'jest';
const DiskDBAsync = require("../dist");

describe('DiskDBAsync.passTests', () => {
	it('is function', () => {
		expect(typeof DiskDBAsync.passTests).toBe('function');
	});

	it('returns true', () => {
		expect(DiskDBAsync.passTests()).toBe(true);
	});
});
